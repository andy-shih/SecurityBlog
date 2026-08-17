# Weaponized 7z Archive Smuggling a Malicious Payload — Clop's Mass-Extortion Delivery Pattern (CVE-2026-12569 / PTC Windchill)

> **MetaDefender module:** Archive Engine · **Difficulty:** intermediate · **Date:** 2026-08-19
>
> Archive Engine deep-unpacks archives (nested, encrypted, malformed) so payloads cannot hide inside.

Clop (CL0P) ransomware's signature mass-extortion playbook for the PTC Windchill/FlexPLM campaign (CVE-2026-12569, CVSS 9.8, KEV-listed June 25) weaponizes archives in phishing emails: password-protected or plain compressed containers hide the real payload from single-pass gateway filters, and the malware only materializes when the victim opens the archive and executes the file inside — the same delivery pattern the gang has used since its 2023 file-transfer exploits. The campaign extorted 43+ organizations (Shell, Philips, GE, Fiserv) and Clop claims 89 GB of Shell engineering data. This demo reproduces the container-smuggling pattern safely: malicious-archive.7z packages a payload file whose content carries the standard EICAR test signature (a benign stand-in for real malware), plus a clean-archive.zip counterpart containing only harmless text. Nothing executes. MetaDefender's Archive Engine decodes and recursively unpacks the 7z at the gateway, feeds every extracted file to multi-engine scanning, and flags the malicious content before the payload can reach an endpoint — closing the container-obfuscation gap Clop relies on (user execution of a malicious file inside an archive, MITRE T1204.002).
**Real incident:** this attack technique corresponds to a real-world event — [read the daily digest](https://blog.andyshih.uk/en/blog/ciso-daily-digest-20260817/).

---

## What's in this package

This demo ships a **static file sample — nothing executes**. The zip contains two folders:

| Folder | Contents |
|---|---|
| `malicious/` | The attack sample — a static document whose **content** carries the malicious payload (e.g. an embedded prompt-injection instruction) |
| `clean/` | The same content after MetaDefender processing — payload removed |

Files in `malicious/`: `malicious-archive.7z`

Files in `clean/`: `clean-archive.zip`



---

## How to run the demo (Linux)

### 1. Prepare

```bash
unzip ar-7z-archive-20260819.zip
cd ar-7z-archive-20260819
```

### 2. Show the attack (malicious)

- Open/inspect `malicious-archive.7z` — the malicious content (payload marker) is
  embedded in the file's data; nothing executes.

**Expected result:** the malicious content (e.g. the injection instruction) is present in
the file; with **Archive Engine** in the pipeline, the file is flagged and blocked before it
reaches the user or an LLM.

### 3. Show the protection (clean)

- Open `clean-archive.zip` — no payload, sanitized content.

**Expected result:** the sanitized file is clean — no payload, nothing to flag.

---

## Expected behavior (file by file)

| File | What you should observe |
|---|---|
| malicious files | malicious-archive.7z → valid 7z (SFX variant documented in README) |
| clean files | no payload, sanitized content |

> Behavior notes are verified by the QA suite on every build (see the QA checklist below).

---

## Safety

- ✅ All payloads are **benign by construction**: static text/data samples — **nothing executes**.
- ✅ No real malware, no network callbacks (any network reference targets `example.com` or loopback).
- ✅ Metascan demos use the **EICAR test string** — the universal, harmless AV test file.

## QA checklist (verified on this build)

- [ ] `unzip -t ar-7z-archive-20260819.zip` → no errors
- [ ] malicious file carries the injection marker; clean file does not
- [ ] no placeholder content in clean files
- [ ] format magic bytes verified (PDF `%PDF`, ZIP `PK`, PNG `\x89PNG`, 7z `7z\xbc\xaf`, OOXML `PK`)

## How MetaDefender catches this

Malicious archive delivery — payload hidden inside a compressed container, executed by the user (T1204.002) (MITRE ATT&CK [T1204.002](https://attack.mitre.org/techniques/T1204.002/))
is neutralized by **Archive Engine** before the file reaches the user — see the blog for the
full story and detection details.
