# National ID Numbers Detected in Exported Spreadsheet

> **MetaDefender module:** Proactive DLP · **Difficulty:** beginner · **Date:** 2026-06-08
>
> Proactive DLP inspects content for sensitive data (PII, PCI, PHI, credentials, keys) and blocks/redacts it.

The United Nations World Food Programme suffered a data breach that exposed the personal information of up to 600,000 Gaza families — names, addresses, family compositions, and contact details — a stark reminder that sensitive PII routinely sits in everyday office files. Too often, that data leaves an organization through routine exports, email attachments, and shared documents — a spreadsheet with national ID numbers uploaded to the wrong folder is already a disclosure. The exposure is silent and nearly impossible to trace afterward. This demo uses a document containing synthetic PII, so no real personal data is involved. Proactive DLP scans files for national ID patterns and other sensitive categories, flags the document, and lets security teams block the transfer or alert the owner before the data goes anywhere.
**Real incident:** this attack technique corresponds to a real-world event — [read the daily digest](https://blog.andyshih.uk/en/blog/ciso-daily-digest-20260608/).

---

## What's in this package

This demo is **Linux-only**. The zip contains two folders:

| Folder | Contents |
|---|---|
| `malicious/` | The attack file(s) — **benign**, the only effect is opening the calculator |
| `clean/` | The same file after MetaDefender processing — payload removed |

Files in `malicious/`: `malicious-export.xlsx`

Files in `clean/`: `clean-export.xlsx`



---

## How to run the demo (Linux)

### 1. Prepare

```bash
unzip dlp-pii-idnumbers-20260608.zip
cd dlp-pii-idnumbers-20260608
```

Requirements: a desktop Linux with a calculator (`gnome-calculator`, `kcalc`, or `xcalc`).
The payload script auto-detects which one is installed.

### 2. Show the attack (malicious)

- Run: `bash malicious-export.xlsx` — the calculator opens (the visible impact).

**Expected result:** the calculator window opens. That is the demo's "visible impact"
— the benign stand-in for a real malware payload.

### 3. Show the protection (clean)

- Run: `bash clean-export.xlsx` — nothing happens (payload removed).

**Expected result:** the file opens/behaves normally — no calculator, no execution.

---

## Safety

- ✅ All payloads are **benign by construction**: the only side effect is opening the calculator.
- ✅ No real malware, no network callbacks (any network reference targets `example.com` or loopback).
- ✅ Metascan demos use the **EICAR test string** — the universal, harmless AV test file.

## QA checklist (verified on this build)

- [ ] `unzip -t dlp-pii-idnumbers-20260608.zip` → no errors
- [ ] malicious script runs and opens the calculator
- [ ] clean script runs and opens nothing
- [ ] format magic bytes verified (PDF `%PDF`, ZIP `PK`, PNG `\x89PNG`, 7z `7z\xbc\xaf`, OOXML `PK`)

## How MetaDefender catches this

PII data exposure (MITRE ATT&CK [T1005](https://attack.mitre.org/techniques/T1005/))
is neutralized by **Proactive DLP** before the file reaches the user — see the blog for the
full story and detection details.
