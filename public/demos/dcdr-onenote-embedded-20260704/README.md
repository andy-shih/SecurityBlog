# OneNote Notebook Hides an Embedded Executable

> **MetaDefender module:** Deep CDR · **Difficulty:** beginner · **Date:** 2026-07-04
>
> Deep CDR (Content Disarm & Reconstruction) dismantles the file, removes executable/embedded content, and rebuilds a clean, safe version.

OneNote notebooks are a favorite container for initial access because users treat .one files as harmless notes. Attackers embed executable files, scripts, or download stubs inside notebook pages, where they appear as unassuming attachments waiting to be double-clicked. This demo presents a .one file carrying a benign embedded command that only opens Calculator — the same structure real campaigns use to drop payloads. Deep CDR parses the notebook structure and reconstructs it from scratch, stripping embedded objects, OLE content, and active links while preserving the readable note text. The sanitized file keeps its business utility but contains no code that could execute on an endpoint.
**Real incident:** no same-day digest link (technique-focused demo).

---

## What's in this package

This demo is **Linux-only**. The zip contains two folders:

| Folder | Contents |
|---|---|
| `malicious/` | The attack file(s) — **benign**, the only effect is opening the calculator |
| `clean/` | The same file after MetaDefender processing — payload removed |

Files in `malicious/`: `malicious-notes.html`

Files in `clean/`: `clean-notes.html`



---

## How to run the demo (Linux)

### 1. Prepare

```bash
unzip dcdr-onenote-embedded-20260704.zip
cd dcdr-onenote-embedded-20260704
```

Requirements: a desktop Linux with a calculator (`gnome-calculator`, `kcalc`, or `xcalc`).
The payload script auto-detects which one is installed.

### 2. Show the attack (malicious)

- Run: `bash malicious-notes.html` — the calculator opens (the visible impact).

**Expected result:** the calculator window opens. That is the demo's "visible impact"
— the benign stand-in for a real malware payload.

### 3. Show the protection (clean)

- Run: `bash clean-notes.html` — nothing happens (payload removed).

**Expected result:** the file opens/behaves normally — no calculator, no execution.

---

## Expected behavior (file by file)

| File | What you should observe |
|---|---|
| malicious files | malicious-notes.html → embedded attachment link (OneNote-equivalent delivery) |
| clean files | no payload, no calculator, sanitized content |

> Behavior notes are verified by the QA suite on every build (see the QA checklist below).

---

## Safety

- ✅ All payloads are **benign by construction**: the only side effect is opening the calculator.
- ✅ No real malware, no network callbacks (any network reference targets `example.com` or loopback).
- ✅ Metascan demos use the **EICAR test string** — the universal, harmless AV test file.

## QA checklist (verified on this build)

- [ ] `unzip -t dcdr-onenote-embedded-20260704.zip` → no errors
- [ ] malicious script runs and opens the calculator
- [ ] clean script runs and opens nothing
- [ ] format magic bytes verified (PDF `%PDF`, ZIP `PK`, PNG `\x89PNG`, 7z `7z\xbc\xaf`, OOXML `PK`)

## How MetaDefender catches this

OneNote embedded file (MITRE ATT&CK [T1204.002](https://attack.mitre.org/techniques/T1204/002/))
is neutralized by **Deep CDR** before the file reaches the user — see the blog for the
full story and detection details.
