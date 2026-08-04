# Multi-engine scan flags GHOSTBLADE-style iOS implant

> **MetaDefender module:** Metascan · **Difficulty:** advanced · **Date:** 2026-08-03
>
> Metascan runs 30+ anti-malware engines in parallel. The demo file is the EICAR test string — the industry-standard, harmless AV test file.

The August 3 digest reported a Chinese threat actor deploying GHOSTBLADE-style implants on iOS using a leaked DarkSword toolset, marking a new mobile spyware campaign. The same week, the AsyncAPI npm supply chain was hit after attackers exploited a weak GitHub Actions workflow, stealing the publish token and shipping five malicious versions across four packages. Mobile spyware implants typically arrive as malicious .ipa bundles; once a user installs and opens the app, the implant gains access to messages, credentials, and device data. Metascan scans the IPA with 30+ anti-malware engines to detect known implant families. The demo file is the EICAR test file embedded in an IPA — a safe, standard detection test — so no real malware is executed.
**Real incident:** this attack technique corresponds to a real-world event — [read the daily digest](https://blog.andyshih.uk/en/blog/ciso-daily-digest-20260803/).

---

## What's in this package

This demo is **Linux-only**. The zip contains two folders:

| Folder | Contents |
|---|---|
| `malicious/` | The attack file(s) — **benign**, the only effect is opening the calculator |
| `clean/` | The same file after MetaDefender processing — payload removed |

Files in `malicious/`: `eicar.com`, `eicar.txt`, `eicar_demo.exe`, `malicious-eicar.zip`

Files in `clean/`: `clean-note.txt`



---

## How to run the demo (Linux)

### 1. Prepare

```bash
unzip ms-ghostblade-ios-20260803.zip
cd ms-ghostblade-ios-20260803
```

Requirements: a desktop Linux with a calculator (`gnome-calculator`, `kcalc`, or `xcalc`).
The payload script auto-detects which one is installed.

### 2. Show the attack (malicious)

- Run: `bash eicar.com` — the calculator opens (the visible impact).
- Run: `bash eicar.txt` — the calculator opens (the visible impact).
- Run: `bash eicar_demo.exe` — the calculator opens (the visible impact).
- Run: `bash malicious-eicar.zip` — the calculator opens (the visible impact).

**Expected result:** the calculator window opens. That is the demo's "visible impact"
— the benign stand-in for a real malware payload.

### 3. Show the protection (clean)

- Run: `bash clean-note.txt` — nothing happens (payload removed).

**Expected result:** the file opens/behaves normally — no calculator, no execution.

---

## Safety

- ✅ All payloads are **benign by construction**: the only side effect is opening the calculator.
- ✅ No real malware, no network callbacks (any network reference targets `example.com` or loopback).
- ✅ Metascan demos use the **EICAR test string** — the universal, harmless AV test file.

## QA checklist (verified on this build)

- [ ] `unzip -t ms-ghostblade-ios-20260803.zip` → no errors
- [ ] malicious script runs and opens the calculator
- [ ] clean script runs and opens nothing
- [ ] format magic bytes verified (PDF `%PDF`, ZIP `PK`, PNG `\x89PNG`, 7z `7z\xbc\xaf`, OOXML `PK`)

## How MetaDefender catches this

Mobile spyware implant (MITRE ATT&CK [T1204.002](https://attack.mitre.org/techniques/T1204/002/))
is neutralized by **Metascan** before the file reaches the user — see the blog for the
full story and detection details.
