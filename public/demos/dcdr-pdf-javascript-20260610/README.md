# PDF with embedded JavaScript auto-executing on open

> **MetaDefender module:** Deep CDR · **Difficulty:** intermediate · **Date:** 2026-06-10
>
> Deep CDR (Content Disarm & Reconstruction) dismantles the file, removes executable/embedded content, and rebuilds a clean, safe version.

Attackers routinely weaponize PDFs by embedding JavaScript that executes automatically when the document is opened, delivering payloads or phishing lures without any interaction beyond the open action. Malicious scripts can exploit viewer vulnerabilities, trigger external downloads, or exfiltrate local data — behavior aligned with script-based execution techniques such as T1218.001. This demo presents a PDF carrying a benign app.alert script to illustrate the risk without any malicious payload. Deep CDR (Content Disarm and Reconstruction) parses the file, removes all active content including JavaScript, and rebuilds a clean, fully functional PDF that preserves the document's appearance while eliminating the attack surface.
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
unzip dcdr-pdf-javascript-20260610.zip
cd dcdr-pdf-javascript-20260610
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

## Safety

- ✅ All payloads are **benign by construction**: the only side effect is opening the calculator.
- ✅ No real malware, no network callbacks (any network reference targets `example.com` or loopback).
- ✅ Metascan demos use the **EICAR test string** — the universal, harmless AV test file.

## QA checklist (verified on this build)

- [ ] `unzip -t dcdr-pdf-javascript-20260610.zip` → no errors
- [ ] malicious script runs and opens the calculator
- [ ] clean script runs and opens nothing
- [ ] format magic bytes verified (PDF `%PDF`, ZIP `PK`, PNG `\x89PNG`, 7z `7z\xbc\xaf`, OOXML `PK`)

## How MetaDefender catches this

PDF embedded JavaScript (MITRE ATT&CK [T1218.001](https://attack.mitre.org/techniques/T1218/001/))
is neutralized by **Deep CDR** before the file reaches the user — see the blog for the
full story and detection details.
