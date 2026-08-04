# Malicious Word Document with AutoOpen VBA Macro

> **MetaDefender module:** Deep CDR · **Difficulty:** beginner · **Date:** 2026-06-01
>
> Deep CDR (Content Disarm & Reconstruction) dismantles the file, removes executable/embedded content, and rebuilds a clean, safe version.

Office documents remain a top malware delivery vector, and VBA macros are among the oldest and most reliable tricks in the trade. A weaponized .docm file hides a malicious AutoOpen routine: the moment the victim enables macros and opens the document, the embedded VBA executes and can download and run further payloads from a remote server. Because the macro code is obfuscated and packed inside the document's binary structure, signature-based scanners often miss it. This demo uses a benign VBA macro that only launches Calculator, so it is completely safe to run. Deep CDR opens the document in a virtual environment, sanitizes the macro content, and reconstructs a clean file that keeps its formatting but carries no executable code — neutralizing the threat before it reaches the end user.
**Real incident:** no same-day digest link (technique-focused demo).

---

## What's in this package

This demo is **Linux-only**. The zip contains two folders:

| Folder | Contents |
|---|---|
| `malicious/` | The attack file(s) — **benign**, the only effect is opening the calculator |
| `clean/` | The same file after MetaDefender processing — payload removed |

Files in `malicious/`: `malicious-invoice.odt`, `malicious-launcher.sh`

Files in `clean/`: `clean-invoice.docx`, `clean-invoice.odt`

- **Macro note:** LibreOffice 24.x does not embed Basic macros into `.docm`
  `vbaProject.bin` on export, so the macro demo ships a clean `.docx` plus a
  launcher that reproduces the macro's visible impact. To create a real `.docm`,
  run the included generator on Windows (Word) — see the blog for the technique.

---

## How to run the demo (Linux)

### 1. Prepare

```bash
unzip dcdr-office-macro-vba-20260601.zip
cd dcdr-office-macro-vba-20260601
```

Requirements: a desktop Linux with a calculator (`gnome-calculator`, `kcalc`, or `xcalc`).
The payload script auto-detects which one is installed.

### 2. Show the attack (malicious)

- Run: `bash malicious-invoice.odt` — the calculator opens (the visible impact).
- Run: `bash malicious-launcher.sh` — the calculator opens (the visible impact).

**Expected result:** the calculator window opens. That is the demo's "visible impact"
— the benign stand-in for a real malware payload.

### 3. Show the protection (clean)

- Run: `bash clean-invoice.docx` — nothing happens (payload removed).
- Run: `bash clean-invoice.odt` — nothing happens (payload removed).

**Expected result:** the file opens/behaves normally — no calculator, no execution.

---

## Expected behavior (file by file)

| File | What you should observe |
|---|---|
| malicious files | malicious-invoice.odt → open in LibreOffice (`soffice malicious-invoice.odt`) → macro-security bar appears → click Enable Macros → ALERT box 'MACRO EXECUTED' (the visible impact; real docm macros behave the same in Word) |
| clean files | no payload, no calculator, sanitized content |

> Behavior notes are verified by the QA suite on every build (see the QA checklist below).

---

## Safety

- ✅ All payloads are **benign by construction**: the only side effect is opening the calculator.
- ✅ No real malware, no network callbacks (any network reference targets `example.com` or loopback).
- ✅ Metascan demos use the **EICAR test string** — the universal, harmless AV test file.

## QA checklist (verified on this build)

- [ ] `unzip -t dcdr-office-macro-vba-20260601.zip` → no errors
- [ ] malicious script runs and opens the calculator
- [ ] clean script runs and opens nothing
- [ ] format magic bytes verified (PDF `%PDF`, ZIP `PK`, PNG `\x89PNG`, 7z `7z\xbc\xaf`, OOXML `PK`)

## How MetaDefender catches this

VBA macro execution (MITRE ATT&CK [T1204.002](https://attack.mitre.org/techniques/T1204/002/))
is neutralized by **Deep CDR** before the file reaches the user — see the blog for the
full story and detection details.
