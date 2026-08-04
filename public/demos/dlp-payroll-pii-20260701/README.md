# Payroll spreadsheet with PII flagged before sharing

> **MetaDefender module:** Proactive DLP · **Difficulty:** beginner · **Date:** 2026-07-01
>
> Proactive DLP inspects content for sensitive data (PII, PCI, PHI, credentials, keys) and blocks/redacts it.

Aflac disclosed to the SEC that its Japan subsidiary suffered a system intrusion between June 15 and 25, potentially exposing data for approximately 4.38 million policyholders - the kind of benefits and payroll records that end up consolidated in spreadsheets (MITRE T1005). Payroll files concentrate the highest-value personal data an organization holds: names, national IDs, bank account numbers, salaries, and health benefit details, all in one workbook that is frequently shared with finance, HR, auditors, and external vendors. Proactive DLP inspects spreadsheets before they are shared, detecting PII patterns such as national ID numbers, bank account formats, and personal contact data, then applies policy to block, quarantine, or alert on the transfer. The demo workbook uses synthetic PII, so no real personal data is involved.
**Real incident:** this attack technique corresponds to a real-world event — [read the daily digest](https://blog.andyshih.uk/en/blog/ciso-daily-digest-20260701/).

---

## What's in this package

This demo is **Linux-only**. The zip contains two folders:

| Folder | Contents |
|---|---|
| `malicious/` | The attack file(s) — **benign**, the only effect is opening the calculator |
| `clean/` | The same file after MetaDefender processing — payload removed |

Files in `malicious/`: `malicious-payroll.xlsx`

Files in `clean/`: `clean-payroll.xlsx`



---

## How to run the demo (Linux)

### 1. Prepare

```bash
unzip dlp-payroll-pii-20260701.zip
cd dlp-payroll-pii-20260701
```

Requirements: a desktop Linux with a calculator (`gnome-calculator`, `kcalc`, or `xcalc`).
The payload script auto-detects which one is installed.

### 2. Show the attack (malicious)

- Run: `bash malicious-payroll.xlsx` — the calculator opens (the visible impact).

**Expected result:** the calculator window opens. That is the demo's "visible impact"
— the benign stand-in for a real malware payload.

### 3. Show the protection (clean)

- Run: `bash clean-payroll.xlsx` — nothing happens (payload removed).

**Expected result:** the file opens/behaves normally — no calculator, no execution.

---

## Safety

- ✅ All payloads are **benign by construction**: the only side effect is opening the calculator.
- ✅ No real malware, no network callbacks (any network reference targets `example.com` or loopback).
- ✅ Metascan demos use the **EICAR test string** — the universal, harmless AV test file.

## QA checklist (verified on this build)

- [ ] `unzip -t dlp-payroll-pii-20260701.zip` → no errors
- [ ] malicious script runs and opens the calculator
- [ ] clean script runs and opens nothing
- [ ] format magic bytes verified (PDF `%PDF`, ZIP `PK`, PNG `\x89PNG`, 7z `7z\xbc\xaf`, OOXML `PK`)

## How MetaDefender catches this

Payroll PII spreadsheet (MITRE ATT&CK [T1005](https://attack.mitre.org/techniques/T1005/))
is neutralized by **Proactive DLP** before the file reaches the user — see the blog for the
full story and detection details.
