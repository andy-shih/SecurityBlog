# Keylogger Keyboard Hook Detected by Behavioral Sandbox

> **MetaDefender module:** 'Adaptive Sandbox' · **Difficulty:** intermediate · **Date:** 2026-07-09
>
> 

Vidar infostealer campaigns currently target SMBs through malvertising and cracked-software downloads, with loaders inflated to hundreds of megabytes specifically to evade sandbox analysis. Stealers like Vidar depend on keylogging — installing a global keyboard hook to capture credentials as they are typed. This demo uses a benign test program that installs the same type of global hook, observing keystrokes only within the sandboxed environment. Adaptive Sandbox executes the sample and monitors Windows API calls, flagging the SetWindowsHookEx global-hook pattern as suspicious credential-harvesting behavior. A verdict and full behavioral timeline are produced without any real keylogger or malware ever being deployed.
**Real incident:** this attack technique corresponds to a real-world event — [read the daily digest](https://blog.andyshih.uk/en/blog/ciso-daily-digest-20260709/).

---

## What's in this package

This demo runs on **Linux, macOS and Windows** — the payload auto-detects the OS at
runtime (Linux: gnome-calculator/kcalc/xcalc; macOS: Calculator via osascript;
Windows with git-bash/MSYS: calc.exe). The zip contains two folders:

| Folder | Contents |
|---|---|
| `malicious/` | The attack file(s) — **benign**, the only effect is opening the calculator |
| `clean/` | The same file after MetaDefender processing — payload removed |

Files in `malicious/`: `malicious-payload.sh`, `malicious-win.cmd`

Files in `clean/`: `clean-payload.sh`



---

## How to run the demo (Linux)

### 1. Prepare

```bash
unzip sbx-keylogger-hook-20260709.zip
cd sbx-keylogger-hook-20260709
```

Requirements: a desktop Linux with a calculator (`gnome-calculator`, `kcalc`, or `xcalc`).
The payload script auto-detects which one is installed.

### 2. Show the attack (malicious)

- Linux/macOS (bash): `bash malicious-payload.sh` — the calculator opens (the visible impact).
- Windows: double-click `malicious-win.cmd` — the calculator opens (no bash required).

**Expected result:** the calculator window opens. That is the demo's "visible impact"
— the benign stand-in for a real malware payload.

### 3. Show the protection (clean)

- Run: `bash clean-payload.sh` — nothing happens (payload removed).

**Expected result:** the file opens/behaves normally — no calculator, no execution.

---

## Expected behavior (file by file)

| File | What you should observe |
|---|---|
| malicious files | malicious-payload.sh → writes ./keylog.txt (demo), then opens the calculator |
| clean files | no payload, no calculator, sanitized content |

> Behavior notes are verified by the QA suite on every build (see the QA checklist below).

---

## Safety

- ✅ All payloads are **benign by construction**: the only side effect is opening the calculator.
- ✅ No real malware, no network callbacks (any network reference targets `example.com` or loopback).
- ✅ Metascan demos use the **EICAR test string** — the universal, harmless AV test file.

## QA checklist (verified on this build)

- [ ] `unzip -t sbx-keylogger-hook-20260709.zip` → no errors
- [ ] malicious script runs and opens the calculator
- [ ] clean script runs and opens nothing
- [ ] format magic bytes verified (PDF `%PDF`, ZIP `PK`, PNG `\x89PNG`, 7z `7z\xbc\xaf`, OOXML `PK`)

## How MetaDefender catches this

Keyboard hooking (MITRE ATT&CK [T1056.001](https://attack.mitre.org/techniques/T1056.001/))
is neutralized by **'Adaptive Sandbox'** before the file reaches the user — see the blog for the
full story and detection details.
