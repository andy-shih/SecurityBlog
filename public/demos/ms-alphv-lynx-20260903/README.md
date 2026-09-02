# ALPHV Rebrands as Lynx: Double-Extortion Ransomware Payloads Flagged by Metascan (2026-08-30 CISO Daily Digest)

> **MetaDefender module:** Metascan · **Difficulty:** intermediate · **Date:** 2026-09-03
>
> Metascan runs 30+ anti-malware engines in parallel. The demo file is the EICAR test string — the industry-standard, harmless AV test file.

The 2026-08-30 CISO Daily Digest reported that ALPHV — the Black Basta-affiliated ransomware gang behind the 2024 Change Healthcare attack, which claimed to have disbanded in June 2026 following law-enforcement pressure — has re-established operations under the new moniker Lynx, standing up fresh C2 infrastructure and dedicated data-exfiltration servers. Healthcare and manufacturing organizations report renewed double-extortion campaigns (encryption plus stolen-data leaks) with over US$200M in claimed losses year-to-date, tracked by Recorded Future and BleepingComputer. For defenders, the practical reality of any rebrand is that the playbook stays the same: a ransomware binary and its staged payloads must still cross the file boundary — typically as a phished archive or document attachment — before they can reach a disk. This demo reproduces that crossing safely: the archive ships EICAR test files standing in for the Lynx binary and staged payloads — a classic eicar.com, an eicar.txt, a compiled Windows PE embedding the EICAR string, and a ZIP-wrapped EICAR — alongside a clean control file (no real malware, nothing destructive). MetaDefender Metascan runs 30+ anti-malware engines (including ClamAV) over every variant in a single pass and flags them all, showing how a double-extortion encryption campaign is stopped at the file boundary — at the gateway, before Lynx's payload ever touches a hospital or factory endpoint (MITRE ATT&CK T1486 Data Encrypted for Impact).
**Real incident:** this attack technique corresponds to a real-world event — [read the daily digest](https://blog.andyshih.uk/en/blog/ciso-daily-digest-20260830/).

---

## What's in this package

This demo ships a **static AV-test sample — nothing executes**. The zip contains two folders:

| Folder | Contents |
|---|---|
| `malicious/` | EICAR test files standing in for the ransomware binary and staged payloads — no real malware |
| `clean/` | The benign control file after MetaDefender processing — nothing hidden |

Files in `malicious/`: `eicar.com`, `eicar.txt`, `eicar_demo.exe`, `malicious-eicar.zip`

Files in `clean/`: `clean-note.txt`



---

## How to run the demo (Linux)

### 1. Prepare

```bash
unzip ms-alphv-lynx-20260903.zip
```

### 2. Show the attack (malicious)

- Inspect `eicar.com` — a compiled sample embedding the EICAR test string (`strings eicar.com | grep EICAR`); if Wine is installed, running it only prints the EICAR string.
- Inspect `eicar.txt` — it contains the exact EICAR test string (the industry-standard, harmless AV test file); any AV engine flags it (ClamAV: `Eicar-Test-Signature`).
- Inspect `eicar_demo.exe` — a compiled sample embedding the EICAR test string (`strings eicar_demo.exe | grep EICAR`); if Wine is installed, running it only prints the EICAR string.
- Inspect `malicious-eicar.zip` — a zip archive wrapping an EICAR test file; the marker is only visible after recursive unpacking (`unzip -l malicious-eicar.zip`, then scan the inner file).

**Expected result:** a single-pass scan already flags the flat EICAR files; the
EICAR wrapped inside the zip is only visible after recursive unpacking — with
**Metascan** in the pipeline, all variants are scanned in one pass and every one
is blocked before it reaches the user.

### 3. Show the protection (clean)

- Inspect `clean-note.txt` — a benign control file; no EICAR marker, nothing is flagged.

**Expected result:** the clean control file passes — no EICAR marker, nothing to flag.

---

## Expected behavior (file by file)

| File | What you should observe |
|---|---|
| malicious files | eicar.com / eicar.txt / eicar_demo.exe / malicious-eicar.zip → contain the EICAR test string; eicar.com is flagged by ClamAV as `Eicar-Test-Signature`; eicar_demo.exe runs under Wine and prints the EICAR string |
| clean files | no payload, sanitized content |

> Behavior notes are verified by the QA suite on every build (see the QA checklist below).

---

## Safety

- ✅ All payloads are the **EICAR test string** — the industry-standard, harmless AV test file (no real malware, nothing destructive).
- ✅ No network callbacks; nothing executes on open (the PE sample only prints the EICAR string under Wine).

## QA checklist (verified on this build)

- [x] `unzip -t ms-alphv-lynx-20260903.zip` → no errors
- [x] `eicar.com` / `eicar.txt` contain the exact EICAR test string
- [x] `eicar_demo.exe` is a Windows PE embedding the EICAR string
- [x] `malicious-eicar.zip` is a valid zip wrapping an EICAR file (recursive-unpack check)
- [x] clean file carries no EICAR marker (no placeholder content)
- [x] automated QA suite passes (structure + execution checks, FAIL=0)

## How MetaDefender catches this

Data encrypted for impact — double-extortion ransomware (ALPHV/Lynx) payloads crossing the file boundary as EICAR stand-ins, flagged by multiscanning before execution (T1486) (MITRE ATT&CK [T1486](https://attack.mitre.org/techniques/T1486/))
is neutralized by **Metascan** before the file reaches the user — see the blog for the
full story and detection details.

