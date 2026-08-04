# Double Extension Masquerade Hides Executable

> **MetaDefender module:** FileType Engine · **Difficulty:** beginner · **Date:** 2026-07-12
>
> FileType Engine verifies the true file type via magic bytes, defeating name/extension masquerades.

Double-extension files such as invoice.pdf.exe exploit the common habit of hiding known file extensions in Windows Explorer, so the visible name reads as a PDF while the file actually executes as a program. The technique is a staple of email-borne attacks, where a filename like invoice.pdf.exe slips past users and basic email filters that check only the visible extension. This demo recreates the masquerade with a benign executable, demonstrating how easy it is to deceive the human eye. MetaDefender FileType Engine parses the real file content, exposes the mismatch between the visible .pdf name and the actual PE executable, and blocks or quarantines the file before it reaches the user.
**Real incident:** no same-day digest link (technique-focused demo).

---

## What's in this package

This demo is **Linux-only**. The zip contains two folders:

| Folder | Contents |
|---|---|
| `malicious/` | The attack file(s) — **benign**, the only effect is opening the calculator |
| `clean/` | The same file after MetaDefender processing — payload removed |

Files in `malicious/`: `malicious-invoice.pdf.sh`

Files in `clean/`: `clean-invoice.pdf.sh`

---

## How to run the demo (Linux)

### 1. Prepare

```bash
unzip ft-double-extension-20260712.zip
cd ft-double-extension-20260712
```

Requirements: a desktop Linux with a calculator (`gnome-calculator`, `kcalc`, or `xcalc`).
The payload script auto-detects which one is installed.

### 2. Show the attack (malicious)

- Run: `bash malicious-invoice.pdf.sh` — the calculator opens (the visible impact).

**Expected result:** the calculator window opens. That is the demo's "visible impact"
— the benign stand-in for a real malware payload.

### 3. Show the protection (clean)

- Run: `bash clean-invoice.pdf.sh` — nothing happens (payload removed).

**Expected result:** the file opens/behaves normally — no calculator, no execution.

---

## Safety

- ✅ All payloads are **benign by construction**: the only side effect is opening the calculator.
- ✅ No real malware, no network callbacks (any network reference targets `example.com` or loopback).
- ✅ Metascan demos use the **EICAR test string** — the universal, harmless AV test file.

## QA checklist (verified on this build)

- [ ] `unzip -t ft-double-extension-20260712.zip` → no errors
- [ ] malicious script runs and opens the calculator
- [ ] clean script runs and opens nothing
- [ ] format magic bytes verified (PDF `%PDF`, ZIP `PK`, PNG `\x89PNG`, 7z `7z\xbc\xaf`, OOXML `PK`)

## How MetaDefender catches this

Double extension masquerade (MITRE ATT&CK [T1036.003](https://attack.mitre.org/techniques/T1036/003/))
is neutralized by **FileType Engine** before the file reaches the user — see the blog for the
full story and detection details.
