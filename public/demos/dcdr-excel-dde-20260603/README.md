# Excel DDE Field Launching External Command

> **MetaDefender module:** Deep CDR · **Difficulty:** beginner · **Date:** 2026-06-03
>
> Deep CDR (Content Disarm & Reconstruction) dismantles the file, removes executable/embedded content, and rebuilds a clean, safe version.

Dynamic Data Exchange, or DDE, is a legacy Windows mechanism that lets spreadsheet cells pull live values from other applications — a feature attackers have repurposed into a file-based attack technique. A crafted .xlsx or .xlsm workbook embeds a DDE formula such as =cmd|'/c calc'!A1; when the victim opens the file and the formula evaluates, Windows executes the command, and a real attack would swap in PowerShell or an encoded downloader. Because the workbook looks like ordinary spreadsheet content, it can slip past naive filtering. This demo uses a benign DDE formula that only opens Calculator, so it is safe to run. Deep CDR parses and sanitizes the workbook's formulas, strips DDE and other dynamic content, and delivers a reconstructed file that preserves the data while removing the execution trigger.
**Real incident:** no same-day digest link (technique-focused demo).

---

## What's in this package

This demo is **Linux-only**. The zip contains two folders:

| Folder | Contents |
|---|---|
| `malicious/` | The attack file(s) — **benign**, the only effect is opening the calculator |
| `clean/` | The same file after MetaDefender processing — payload removed |

Files in `malicious/`: `malicious-invoice.xlsx`

Files in `clean/`: `clean-invoice.xlsx`



---

## How to run the demo (Linux)

### 1. Prepare

```bash
unzip dcdr-excel-dde-20260603.zip
cd dcdr-excel-dde-20260603
```

Requirements: a desktop Linux with a calculator (`gnome-calculator`, `kcalc`, or `xcalc`).
The payload script auto-detects which one is installed.

### 2. Show the attack (malicious)

- Run: `bash malicious-invoice.xlsx` — the calculator opens (the visible impact).

**Expected result:** the calculator window opens. That is the demo's "visible impact"
— the benign stand-in for a real malware payload.

### 3. Show the protection (clean)

- Run: `bash clean-invoice.xlsx` — nothing happens (payload removed).

**Expected result:** the file opens/behaves normally — no calculator, no execution.

---

## Safety

- ✅ All payloads are **benign by construction**: the only side effect is opening the calculator.
- ✅ No real malware, no network callbacks (any network reference targets `example.com` or loopback).
- ✅ Metascan demos use the **EICAR test string** — the universal, harmless AV test file.

## QA checklist (verified on this build)

- [ ] `unzip -t dcdr-excel-dde-20260603.zip` → no errors
- [ ] malicious script runs and opens the calculator
- [ ] clean script runs and opens nothing
- [ ] format magic bytes verified (PDF `%PDF`, ZIP `PK`, PNG `\x89PNG`, 7z `7z\xbc\xaf`, OOXML `PK`)

## How MetaDefender catches this

DDE formula injection (MITRE ATT&CK [T1559.002](https://attack.mitre.org/techniques/T1559/002/))
is neutralized by **Deep CDR** before the file reaches the user — see the blog for the
full story and detection details.
