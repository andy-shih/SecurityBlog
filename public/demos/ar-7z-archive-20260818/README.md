# Weaponized 7z Archive Smuggling a Malicious Payload — Clop's Mass-Extortion Delivery Pattern (CVE-2026-12569 / PTC Windchill)

> **MetaDefender module:** Archive Engine · **Difficulty:** intermediate · **Date:** 2026-08-18
>
> Archive Engine deep-unpacks archives (nested, encrypted, malformed) so payloads cannot hide inside.

Clop (CL0P) ransomware's signature mass-extortion playbook for the PTC Windchill/FlexPLM campaign (CVE-2026-12569, CVSS 9.8, KEV-listed June 25) weaponizes archives in phishing emails: password-protected or plain compressed containers hide the real payload from single-pass gateway filters, and the malware only materializes when the victim opens the archive and executes the file inside — the same delivery pattern the gang has used since its 2023 file-transfer exploits. The campaign extorted 43+ organizations (Shell, Philips, GE, Fiserv) and Clop claims 89 GB of Shell engineering data. This demo reproduces the container-smuggling pattern safely: malicious-archive.7z packages a payload script whose content carries the standard EICAR test signature (a benign stand-in for real malware) alongside a calculator-launch action — the visible "impact" a real payload would have — plus a clean-archive.zip counterpart containing only harmless text. MetaDefender's Archive Engine decodes and recursively unpacks the 7z at the gateway, feeds every extracted file to multi-engine scanning, and flags the EICAR signature before the payload can reach an endpoint — closing the container-obfuscation gap Clop relies on (user execution of a malicious file inside an archive, MITRE T1204.002).

**Real incident:** this attack technique corresponds to a real-world event — [read the daily digest](https://blog.andyshih.uk/en/blog/ciso-daily-digest-20260817/).

---

## What's in this package

The zip contains two folders:

| Folder | Contents |
|---|---|
| `malicious/` | The attack sample — `malicious-archive.7z` containing `payload.sh` (opens the calculator) **and** `eicar.com` (the raw EICAR AV test file) |
| `clean/` | The same content after MetaDefender processing — `clean-archive.zip` with only harmless text |

Files in `malicious/`: `malicious-archive.7z`
Files in `clean/`: `clean-archive.zip`

---

## How to run the demo (Linux)

### 1. Prepare

```bash
unzip ar-7z-archive-20260818.zip
```

### 2. Show the attack (malicious)

```bash
7z e malicious/malicious-archive.7z
bash payload.sh
```

**Expected result:** the calculator opens — this is the "visible impact" the attacker's payload would have on a victim who opens the archive and executes its contents. MetaDefender Archive Engine unpacks the 7z at the gateway and flags the EICAR signature before this ever reaches the user.

### 3. Show the protection (clean)

```bash
unzip clean/clean-archive.zip
cat README.txt
```

**Expected result:** plain text, no script, no calculator — the sanitized file.

---

## Expected behavior (file by file)

| File | What you should observe |
|---|---|
| malicious/malicious-archive.7z | Extract → `payload.sh` + `eicar.com` → `bash payload.sh` → calculator opens; `eicar.com` triggers an AV EICAR detection |
| clean/clean-archive.zip | Extract → README.txt only, no script, no calculator |

> Behavior notes are verified by the QA suite on every build (see the QA checklist below).

---

## Safety

- ✅ All payloads are **benign by construction**: `payload.sh` only launches the system calculator, and `eicar.com` is the standard EICAR AV test file — **no real malware, nothing destructive**.
- ✅ No real malware, no network callbacks (any network reference targets `example.com` or loopback).
- ✅ MetaDefender demos use the **EICAR test string** — the universal, harmless AV test file.

## QA checklist (verified on this build)

- [ ] `unzip -t ar-7z-archive-20260818.zip` → no errors
- [ ] malicious 7z extracts → `payload.sh` (opens calculator) **and** `eicar.com` (EICAR marker); clean archive does not
- [ ] `clamscan malicious-archive.7z` → `Eicar-Signature FOUND`
- [ ] no placeholder content in clean files
- [ ] format magic bytes verified (ZIP `PK`, 7z `7z\xbc\xaf`)

## How MetaDefender catches this

Malicious archive delivery — payload hidden inside a compressed container, executed by the user (T1204.002) (MITRE ATT&CK [T1204.002](https://attack.mitre.org/techniques/T1204.002/))
is neutralized by **Archive Engine** before the file reaches the user — see the blog for the
full story and detection details.
