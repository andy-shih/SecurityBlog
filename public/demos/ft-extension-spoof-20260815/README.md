# Jewelbug APT: Watering-Hole Lure Masquerading as a JPG Photo (Extension Spoofing)

> **MetaDefender module:** "FileType Engine" · **Difficulty:** beginner · **Date:** 2026-08-13
>
> 

On August 13, 2026, Symantec's Threat Hunter Team published an analysis of Jewelbug \u2014 a China-linked hackers-for-hire group whose single control panel (XG-Web, a browser-centric remote-access framework) runs both espionage against government ministries in the Middle East, South Asia, and Southeast Asia, and an industrial-scale cryptocurrency fraud business. Its main implant, the Antino backdoor, is paired with a malicious \
**Real incident:** this attack technique corresponds to a real-world event — [read the daily digest](https://blog.andyshih.uk/en/blog/ciso-daily-digest-20260813/).

---

## What's in this package

This demo runs on **Linux, macOS and Windows** — the payload auto-detects the OS at
runtime (Linux: gnome-calculator/kcalc/xcalc; macOS: Calculator via osascript;
Windows with git-bash/MSYS: calc.exe). The zip contains two folders:

| Folder | Contents |
|---|---|
| `malicious/` | The attack file(s) — **benign**, the only effect is opening the calculator |
| `clean/` | The same file after MetaDefender processing — payload removed |

Files in `malicious/`: `malicious-photo.jpg`

Files in `clean/`: `clean-photo.jpg`



---

## How to run the demo (Linux)

### 1. Prepare

```bash
unzip ft-extension-spoof-20260815.zip
cd ft-extension-spoof-20260815
```

Requirements: a desktop Linux with a calculator (`gnome-calculator`, `kcalc`, or `xcalc`).
The payload script auto-detects which one is installed.

### 2. Show the attack (malicious)

- Run: `bash malicious-photo.jpg` — the calculator opens (the visible impact).

**Expected result:** the calculator window opens. That is the demo's "visible impact"
— the benign stand-in for a real malware payload.

### 3. Show the protection (clean)

- Open `clean-photo.jpg` as an image (e.g. `xdg-open clean-photo.jpg`) — a genuine photo, nothing executes.

**Expected result:** the file opens/behaves normally — no calculator, no execution.

---

## Expected behavior (file by file)

| File | What you should observe |
|---|---|
| malicious files | malicious-photo.jpg → a real shell script disguised as a JPEG (magic bytes reveal the truth) |
| clean files | no payload, no calculator, sanitized content |

> Behavior notes are verified by the QA suite on every build (see the QA checklist below).

---

## Safety

- ✅ All payloads are **benign by construction**: the only side effect is opening the calculator.
- ✅ No real malware, no network callbacks (any network reference targets `example.com` or loopback).
- ✅ Metascan demos use the **EICAR test string** — the universal, harmless AV test file.

## QA checklist (verified on this build)

- [ ] `unzip -t ft-extension-spoof-20260815.zip` → no errors
- [ ] malicious script runs and opens the calculator
- [ ] clean script runs and opens nothing
- [ ] format magic bytes verified (PDF `%PDF`, ZIP `PK`, PNG `\x89PNG`, 7z `7z\xbc\xaf`, OOXML `PK`)

## How MetaDefender catches this

Masquerading \u2014 payload disguised with an innocuous .jpg extension (Match Legitimate Name or Location) (MITRE ATT&CK [T1036.005](https://attack.mitre.org/techniques/T1036.005/))
is neutralized by **"FileType Engine"** before the file reaches the user — see the blog for the
full story and detection details.
