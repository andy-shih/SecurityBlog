# Sandbox flags screen-capture followed by data exfiltration

> **MetaDefender module:** 'Adaptive Sandbox' · **Difficulty:** advanced · **Date:** 2026-08-01
>
> 

Screen capture is a staple of information-stealing malware: implants periodically snapshot the display to harvest credentials, financial dashboards, and one-time codes before they are used. In this demo, a benign executable performs a single screen capture followed by a simulated outbound transfer to illustrate the pattern. Adaptive Sandbox detonates the executable in an isolated Windows environment and correlates the screen-capture API calls with subsequent network activity, flagging the capture-then-exfiltrate sequence as suspicious. The payload is a benign screenshot test that touches no real data, so the demo is safe to run end to end.
**Real incident:** no same-day digest link (technique-focused demo).

---

## What's in this package

This demo runs on **Linux, macOS and Windows** — the payload auto-detects the OS at
runtime (Linux: gnome-calculator/kcalc/xcalc; macOS: Calculator via osascript;
Windows with git-bash/MSYS: calc.exe). The zip contains two folders:

| Folder | Contents |
|---|---|
| `malicious/` | The attack file(s) — **benign**, the only effect is opening the calculator |
| `clean/` | The same file after MetaDefender processing — payload removed |

Files in `malicious/`: `malicious-payload.sh`

Files in `clean/`: `clean-payload.sh`



---

## How to run the demo (Linux)

### 1. Prepare

```bash
unzip sbx-screenshot-exfil-20260801.zip
cd sbx-screenshot-exfil-20260801
```

Requirements: a desktop Linux with a calculator (`gnome-calculator`, `kcalc`, or `xcalc`).
The payload script auto-detects which one is installed.

### 2. Show the attack (malicious)

- Run: `bash malicious-payload.sh` — the calculator opens (the visible impact).

**Expected result:** the calculator window opens. That is the demo's "visible impact"
— the benign stand-in for a real malware payload.

### 3. Show the protection (clean)

- Run: `bash clean-payload.sh` — nothing happens (payload removed).

**Expected result:** the file opens/behaves normally — no calculator, no execution.

---

## Expected behavior (file by file)

| File | What you should observe |
|---|---|
| malicious files | malicious-payload.sh → writes ./exfil/screen.png (demo), then opens the calculator |
| clean files | no payload, no calculator, sanitized content |

> Behavior notes are verified by the QA suite on every build (see the QA checklist below).

---

## Safety

- ✅ All payloads are **benign by construction**: the only side effect is opening the calculator.
- ✅ No real malware, no network callbacks (any network reference targets `example.com` or loopback).
- ✅ Metascan demos use the **EICAR test string** — the universal, harmless AV test file.

## QA checklist (verified on this build)

- [ ] `unzip -t sbx-screenshot-exfil-20260801.zip` → no errors
- [ ] malicious script runs and opens the calculator
- [ ] clean script runs and opens nothing
- [ ] format magic bytes verified (PDF `%PDF`, ZIP `PK`, PNG `\x89PNG`, 7z `7z\xbc\xaf`, OOXML `PK`)

## How MetaDefender catches this

Screen capture + exfiltration (MITRE ATT&CK [T1113](https://attack.mitre.org/techniques/T1113/))
is neutralized by **'Adaptive Sandbox'** before the file reaches the user — see the blog for the
full story and detection details.
