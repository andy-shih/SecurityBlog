# RLO Filename Spoofing Masquerades Executable as Text

> **MetaDefender module:** FileType Engine · **Difficulty:** intermediate · **Date:** 2026-07-22
>
> FileType Engine verifies the true file type via magic bytes, defeating name/extension masquerades.

The right-to-left override (U+202E) character lets an attacker craft a filename that displays as a harmless text document while the real executable extension sits at the end. A file named invoice‮txt.sh is shown by file managers as invoice‮sh.txt, hiding the shell-script nature from users. This demo ships a real shell script with the RLO-spoofed filename and a clean counterpart. FileType Engine verifies the true magic bytes behind the displayed name, so the masquerade is exposed regardless of what the file manager renders.
**Real incident:** no same-day digest link (technique-focused demo).

---

## What's in this package

This demo is **Linux-only**. The zip contains two folders:

| Folder | Contents |
|---|---|
| `malicious/` | The attack file(s) — **benign**, the only effect is opening the calculator |
| `clean/` | The same file after MetaDefender processing — payload removed |

Files in `malicious/`: `invoice‮sh.txt`

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

- Run: `bash invoice‮sh.txt` — the calculator opens (the visible impact).

**Expected result:** the calculator window opens. That is the demo's "visible impact"
— the benign stand-in for a real malware payload.

### 3. Show the protection (clean)

- Run: `bash clean-invoice‮sh.txt` — nothing happens (payload removed).

**Expected result:** the file opens/behaves normally — no calculator, no execution.

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

Right-to-left override (RLO) filename spoofing (MITRE ATT&CK [T1036.002](https://attack.mitre.org/techniques/T1036/002/))
is neutralized by **FileType Engine** before the file reaches the user — see the blog for the
full story and detection details.
