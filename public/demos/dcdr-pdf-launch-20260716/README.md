# PDF Launch Action Executes External Program

> **MetaDefender module:** Deep CDR · **Difficulty:** beginner · **Date:** 2026-07-16
>
> Deep CDR (Content Disarm & Reconstruction) dismantles the file, removes executable/embedded content, and rebuilds a clean, safe version.

PDF documents can carry an OpenAction that fires automatically when the file is opened, and a Launch action can invoke an external application — a behavior attackers abuse to execute malware the moment a victim opens a document. Combined with JavaScript, these actions can chain commands that download and run payloads while the reader appears to display a harmless page. This demo uses a benign PDF whose Launch action only opens the Calculator app, reproducing the technique with zero risk. MetaDefender Deep CDR sanitizes the PDF, removing OpenAction and Launch entries along with all active content, and rebuilds a clean, fully functional document that cannot execute anything.
**Real incident:** no same-day digest link (technique-focused demo).

---

## What's in this package

This demo is **Linux-only**. The zip contains two folders:

| Folder | Contents |
|---|---|
| `malicious/` | The attack file(s) — **benign**, the only effect is opening the calculator |
| `clean/` | The same file after MetaDefender processing — payload removed |

Files in `malicious/`: `malicious-invoice.pdf`

Files in `clean/`: `clean-invoice.pdf`



---

## How to run the demo (Linux)

### 1. Prepare

```bash
unzip dcdr-pdf-launch-20260716.zip
cd dcdr-pdf-launch-20260716
```

Requirements: a desktop Linux with a calculator (`gnome-calculator`, `kcalc`, or `xcalc`).
The payload script auto-detects which one is installed.

### 2. Show the attack (malicious)

- Run: `bash malicious-invoice.pdf` — the calculator opens (the visible impact).

**Expected result:** the calculator window opens. That is the demo's "visible impact"
— the benign stand-in for a real malware payload.

### 3. Show the protection (clean)

- Run: `bash clean-invoice.pdf` — nothing happens (payload removed).

**Expected result:** the file opens/behaves normally — no calculator, no execution.

---

## Expected behavior (file by file)

| File | What you should observe |
|---|---|
| malicious files | malicious-invoice.pdf → opening triggers the Launch action (reader-dependent) |
| clean files | no payload, no calculator, sanitized content |

> Behavior notes are verified by the QA suite on every build (see the QA checklist below).

---

## Safety

- ✅ All payloads are **benign by construction**: the only side effect is opening the calculator.
- ✅ No real malware, no network callbacks (any network reference targets `example.com` or loopback).
- ✅ Metascan demos use the **EICAR test string** — the universal, harmless AV test file.

## QA checklist (verified on this build)

- [ ] `unzip -t dcdr-pdf-launch-20260716.zip` → no errors
- [ ] malicious script runs and opens the calculator
- [ ] clean script runs and opens nothing
- [ ] format magic bytes verified (PDF `%PDF`, ZIP `PK`, PNG `\x89PNG`, 7z `7z\xbc\xaf`, OOXML `PK`)

## How MetaDefender catches this

PDF Launch action (MITRE ATT&CK [T1218.001](https://attack.mitre.org/techniques/T1218/001/))
is neutralized by **Deep CDR** before the file reaches the user — see the blog for the
full story and detection details.
