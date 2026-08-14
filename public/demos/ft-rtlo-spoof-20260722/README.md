# RLO Filename Spoofing Masquerades Executable as Text

> **MetaDefender module:** "FileType Engine" · **Difficulty:** intermediate · **Date:** 2026-07-22
>
> 

The right-to-left override (U+202E) character lets an attacker craft a filename that displays as a harmless text document while the real executable extension sits at the end. A file named invoice\u202etxt.sh is shown by file managers as invoice\u202esh.txt, hiding the shell-script nature from users. This demo ships a real shell script with the RLO-spoofed filename and a clean counterpart. FileType Engine verifies the true magic bytes behind the displayed name, so the masquerade is exposed regardless of what the file manager renders.
**Real incident:** this attack technique corresponds to a real-world event — [read the daily digest](https://blog.andyshih.uk/en/blog/ciso-daily-digest-20260722/).

---

## What's in this package

This demo runs on **Linux, macOS and Windows** — the payload auto-detects the OS at
runtime (Linux: gnome-calculator/kcalc/xcalc; macOS: Calculator via osascript;
Windows with git-bash/MSYS: calc.exe). The zip contains two folders:

| Folder | Contents |
|---|---|
| `malicious/` | The attack file(s) — **benign**, the only effect is opening the calculator |
| `clean/` | The same file after MetaDefender processing — payload removed |

Files in `malicious/`: `invoice‮sh.txt`, `malicious-win.cmd`

Files in `clean/`: `clean-invoice‮sh.txt`



---

## How to run the demo (Linux)

### 1. Prepare

```bash
unzip ft-rtlo-spoof-20260722.zip
cd ft-rtlo-spoof-20260722
```

Requirements: a desktop Linux with a calculator (`gnome-calculator`, `kcalc`, or `xcalc`).
The payload script auto-detects which one is installed.

### 2. Show the attack (malicious)

- Open `invoice‮sh.txt` in its native app — the attack triggers on open.
- Windows: double-click `malicious-win.cmd` — the calculator opens (no bash required).

**Expected result:** the calculator window opens. That is the demo's "visible impact"
— the benign stand-in for a real malware payload.

### 3. Show the protection (clean)

- Open `clean-invoice‮sh.txt` — no payload, no calculator.

**Expected result:** the file opens/behaves normally — no calculator, no execution.

---

## Expected behavior (file by file)

| File | What you should observe |
|---|---|
| malicious files | malicious file with U+202E in the filename → file manager renders txt.exe instead of the real extension |
| clean files | no payload, no calculator, sanitized content |

> Behavior notes are verified by the QA suite on every build (see the QA checklist below).

---

## Safety

- ✅ All payloads are **benign by construction**: the only side effect is opening the calculator.
- ✅ No real malware, no network callbacks (any network reference targets `example.com` or loopback).
- ✅ Metascan demos use the **EICAR test string** — the universal, harmless AV test file.

## QA checklist (verified on this build)

- [ ] `unzip -t ft-rtlo-spoof-20260722.zip` → no errors
- [ ] malicious script runs and opens the calculator
- [ ] clean script runs and opens nothing
- [ ] format magic bytes verified (PDF `%PDF`, ZIP `PK`, PNG `\x89PNG`, 7z `7z\xbc\xaf`, OOXML `PK`)

## How MetaDefender catches this

Right-to-left override (RLO) filename spoofing (MITRE ATT&CK [T1036.002](https://attack.mitre.org/techniques/T1036.002/))
is neutralized by **"FileType Engine"** before the file reaches the user — see the blog for the
full story and detection details.
