# Credit card numbers flagged in plaintext export

> **MetaDefender module:** Proactive DLP · **Difficulty:** beginner · **Date:** 2026-06-17
>
> Proactive DLP inspects content for sensitive data (PII, PCI, PHI, credentials, keys) and blocks/redacts it.

Brazilian delivery giant iFood confirmed that an unauthorized database access in December 2025 exposed the names, ID numbers, and addresses of 1.2 million users; a hacker claimed to have stolen over 43.8 million records, though iFood disputes that figure. Breaches like this frequently end with cardholder data appearing in plaintext exports - CSV dumps and TXT logs copied to local systems (MITRE T1005). Attackers then mine these files for PCI cardholder data to resell or reuse. Proactive DLP scans drives and uploads for credit card number patterns, flags matches in plaintext and CSV files, and triggers quarantine or alerting before sensitive data leaves the organization. The demo uses synthetic card numbers, so it is safe to run in any environment.
**Real incident:** this attack technique corresponds to a real-world event — [read the daily digest](https://blog.andyshih.uk/en/blog/ciso-daily-digest-20260617/).

---

## What's in this package

This demo is **Linux-only**. The zip contains two folders:

| Folder | Contents |
|---|---|
| `malicious/` | The attack file(s) — **benign**, the only effect is opening the calculator |
| `clean/` | The same file after MetaDefender processing — payload removed |

Files in `malicious/`: `malicious-cards.xlsx`

Files in `clean/`: `clean-cards.xlsx`

---

## How to run the demo (Linux)

### 1. Prepare

```bash
unzip dlp-credit-card-20260617.zip
cd dlp-credit-card-20260617
```

Requirements: a desktop Linux with a calculator (`gnome-calculator`, `kcalc`, or `xcalc`).
The payload script auto-detects which one is installed.

### 2. Show the attack (malicious)

- Run: `bash malicious-cards.xlsx` — the calculator opens (the visible impact).

**Expected result:** the calculator window opens. That is the demo's "visible impact"
— the benign stand-in for a real malware payload.

### 3. Show the protection (clean)

- Run: `bash clean-cards.xlsx` — nothing happens (payload removed).

**Expected result:** the file opens/behaves normally — no calculator, no execution.

---

## Safety

- ✅ All payloads are **benign by construction**: the only side effect is opening the calculator.
- ✅ No real malware, no network callbacks (any network reference targets `example.com` or loopback).
- ✅ Metascan demos use the **EICAR test string** — the universal, harmless AV test file.

## QA checklist (verified on this build)

- [ ] `unzip -t dlp-credit-card-20260617.zip` → no errors
- [ ] malicious script runs and opens the calculator
- [ ] clean script runs and opens nothing
- [ ] format magic bytes verified (PDF `%PDF`, ZIP `PK`, PNG `\x89PNG`, 7z `7z\xbc\xaf`, OOXML `PK`)

## How MetaDefender catches this

PCI cardholder data (MITRE ATT&CK [T1005](https://attack.mitre.org/techniques/T1005/))
is neutralized by **Proactive DLP** before the file reaches the user — see the blog for the
full story and detection details.
