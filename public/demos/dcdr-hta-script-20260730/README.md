# HTML Application file running embedded script when opened

> **MetaDefender module:** Deep CDR · **Difficulty:** beginner · **Date:** 2026-07-30
>
> Deep CDR (Content Disarm & Reconstruction) dismantles the file, removes executable/embedded content, and rebuilds a clean, safe version.

HTML Application (HTA) files are a favored phishing payload: a single .hta file runs embedded VBScript or JavaScript with full user-level privileges the moment a user opens it. Attackers disguise them as invoices, resumes, or support documents in email, and the script downloads and executes further malware — a classic user-execution vector (T1204.002). Deep CDR does not rely on detection alone: it disassembles the HTA, removes executable script content, and rebuilds a sanitized file that preserves only the document's benign structure. The demo HTA only launches Calculator, so the file is safe to handle and demonstrates remediation without risk.
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
unzip dcdr-hta-script-20260730.zip
cd dcdr-hta-script-20260730
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

- [ ] `unzip -t dcdr-hta-script-20260730.zip` → no errors
- [ ] malicious script runs and opens the calculator
- [ ] clean script runs and opens nothing
- [ ] format magic bytes verified (PDF `%PDF`, ZIP `PK`, PNG `\x89PNG`, 7z `7z\xbc\xaf`, OOXML `PK`)

## How MetaDefender catches this

HTA script execution (MITRE ATT&CK [T1204.002](https://attack.mitre.org/techniques/T1204/002/))
is neutralized by **Deep CDR** before the file reaches the user — see the blog for the
full story and detection details.
