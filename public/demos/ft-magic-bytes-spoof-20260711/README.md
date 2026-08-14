# Executable Disguised Behind Forged PNG Magic Bytes

> **MetaDefender module:** 'FileType Engine' · **Difficulty:** intermediate · **Date:** 2026-07-11
>
> 

Attackers routinely disguise executables by replacing the first bytes of the file — the magic bytes — with the signature of a trusted format such as PNG, so that naive checks based only on file extension or header accept the payload. The disguised binary then passes extension-based allowlists and simple scanners, arriving on the endpoint as an apparently harmless image. This demo uses a benign executable with a forged PNG header to reproduce the scenario safely. MetaDefender FileType Engine inspects the actual file structure rather than trusting the header, detects the mismatch between declared and real format, and flags the file for further inspection before it can execute.
**Real incident:** this attack technique corresponds to a real-world event — [read the daily digest](https://blog.andyshih.uk/en/blog/ciso-daily-digest-20260711/).

---

## What's in this package

This demo runs on **Linux, macOS and Windows** — the payload auto-detects the OS at
runtime (Linux: gnome-calculator/kcalc/xcalc; macOS: Calculator via osascript;
Windows with git-bash/MSYS: calc.exe). The zip contains two folders:

| Folder | Contents |
|---|---|
| `malicious/` | The attack file(s) — **benign**, the only effect is opening the calculator |
| `clean/` | The same file after MetaDefender processing — payload removed |

Files in `malicious/`: `malicious-image.png`

Files in `clean/`: `clean-image.png`



---

## How to run the demo (Linux)

### 1. Prepare

```bash
unzip ft-magic-bytes-spoof-20260711.zip
cd ft-magic-bytes-spoof-20260711
```

Requirements: a desktop Linux with a calculator (`gnome-calculator`, `kcalc`, or `xcalc`).
The payload script auto-detects which one is installed.

### 2. Show the attack (malicious)

- Run: `bash malicious-image.png` — the calculator opens (the visible impact).

**Expected result:** the calculator window opens. That is the demo's "visible impact"
— the benign stand-in for a real malware payload.

### 3. Show the protection (clean)

- Open `clean-image.png` as an image (e.g. `xdg-open clean-image.png`) — a genuine photo, nothing executes.

**Expected result:** the file opens/behaves normally — no calculator, no execution.

---

## Expected behavior (file by file)

| File | What you should observe |
|---|---|
| malicious files | malicious-image.png → PNG header prepended to a shell script (spoofed magic bytes) |
| clean files | no payload, no calculator, sanitized content |

> Behavior notes are verified by the QA suite on every build (see the QA checklist below).

---

## Safety

- ✅ All payloads are **benign by construction**: the only side effect is opening the calculator.
- ✅ No real malware, no network callbacks (any network reference targets `example.com` or loopback).
- ✅ Metascan demos use the **EICAR test string** — the universal, harmless AV test file.

## QA checklist (verified on this build)

- [ ] `unzip -t ft-magic-bytes-spoof-20260711.zip` → no errors
- [ ] malicious script runs and opens the calculator
- [ ] clean script runs and opens nothing
- [ ] format magic bytes verified (PDF `%PDF`, ZIP `PK`, PNG `\x89PNG`, 7z `7z\xbc\xaf`, OOXML `PK`)

## How MetaDefender catches this

Magic byte spoofing (MITRE ATT&CK [T1036.005](https://attack.mitre.org/techniques/T1036.005/))
is neutralized by **'FileType Engine'** before the file reaches the user — see the blog for the
full story and detection details.
