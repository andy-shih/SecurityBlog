# Compiled HTML Help file executing script on open

> **MetaDefender module:** Deep CDR · **Difficulty:** intermediate · **Date:** 2026-06-27
>
> Deep CDR (Content Disarm & Reconstruction) dismantles the file, removes executable/embedded content, and rebuilds a clean, safe version.

Compiled HTML Help (CHM) files are legitimate Windows documentation containers that double as a weapon: their help engine can execute embedded scripts and launch programs when the file is opened, so attackers abuse the format to run code while appearing to deliver harmless documentation (MITRE T1218.001). A crafted CHM can call out to the Windows Script Host or spawn child processes from its content pages, and because it looks like a standard help file, users and many scanners treat it as benign. Deep CDR parses the CHM container, removes all executable script content, and reconstructs a clean help file that displays documentation only - no code can run on open. The demo uses a benign CHM whose script merely opens Calculator, safe to run on any Windows machine.
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
unzip dcdr-chm-help-20260627.zip
cd dcdr-chm-help-20260627
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

## Safety

- ✅ All payloads are **benign by construction**: the only side effect is opening the calculator.
- ✅ No real malware, no network callbacks (any network reference targets `example.com` or loopback).
- ✅ Metascan demos use the **EICAR test string** — the universal, harmless AV test file.

## QA checklist (verified on this build)

- [ ] `unzip -t dcdr-chm-help-20260627.zip` → no errors
- [ ] malicious script runs and opens the calculator
- [ ] clean script runs and opens nothing
- [ ] format magic bytes verified (PDF `%PDF`, ZIP `PK`, PNG `\x89PNG`, 7z `7z\xbc\xaf`, OOXML `PK`)

## How MetaDefender catches this

CHM compiled help abuse (MITRE ATT&CK [T1218.001](https://attack.mitre.org/techniques/T1218/001/))
is neutralized by **Deep CDR** before the file reaches the user — see the blog for the
full story and detection details.
