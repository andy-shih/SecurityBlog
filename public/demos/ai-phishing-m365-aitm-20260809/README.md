# AI-Crafted M365 Sign-In Lure for AitM Session Hijacking (Arctic Wolf Storm-2755 Wave)

> **MetaDefender module:** OPSWAT AI Content Inspector · **Difficulty:** intermediate · **Date:** 2026-08-07
>
> AI Content Inspector analyzes document content for AI-generated phishing, prompt injection, and fraud patterns.

On August 7, 2026, Arctic Wolf Labs flagged a "widespread" adversary-in-the-middle (AitM) phishing campaign that hijacks Microsoft 365 accounts to identify personnel involved in financial workflows and harvest related email. Voicemail-themed lures run through a six-stage redirection chain abusing Google Meet, Google Ads and Amazon S3 to bypass reputation filters; credentials and MFA codes are captured on AitM proxy pages, with residential proxies disguising sign-ins and automated activity keeping compromised sessions alive at roughly 8-hour intervals. Arctic Wolf observed hundreds of organizations targeted last month across healthcare, education, manufacturing, government and professional services in the US, Canada and Europe, with tactical overlaps to Microsoft's Payroll Pirate (Storm-2755) cluster. This demo ships an AI-crafted phishing lure in the same shape as those M365 sign-in lures: an account-verification document ("unusual sign-in activity — verify your identity within 24 hours") whose button leads to a credential-harvesting AitM proxy page (placeholder URL, safe to open anywhere). The clean twin is the sanitized version. OPSWAT AI Content Inspector analyzes document intent — urgency cues, sign-in pressure, deceptive call-to-action — and flags the lure before it reaches finance staff mailboxes, the same treatment that neutralizes Arctic Wolf's M365 AitM wave.
**Real incident:** this attack technique corresponds to a real-world event — [read the daily digest](https://blog.andyshih.uk/en/blog/ciso-daily-digest-20260807/).

---

## What's in this package

This demo is **Linux-only**. The zip contains two folders:

| Folder | Contents |
|---|---|
| `malicious/` | The attack file(s) — **benign**, the only effect is opening the calculator |
| `clean/` | The same file after MetaDefender processing — payload removed |

Files in `malicious/`: `malicious-lure.docx`

Files in `clean/`: `clean-lure.docx`



---

## How to run the demo (Linux)

### 1. Prepare

```bash
unzip ai-phishing-m365-aitm-20260809.zip
cd ai-phishing-m365-aitm-20260809
```

Requirements: a desktop Linux with a calculator (`gnome-calculator`, `kcalc`, or `xcalc`).
The payload script auto-detects which one is installed.

### 2. Show the attack (malicious)

- Run: `bash malicious-lure.docx` — the calculator opens (the visible impact).

**Expected result:** the calculator window opens. That is the demo's "visible impact"
— the benign stand-in for a real malware payload.

### 3. Show the protection (clean)

- Run: `bash clean-lure.docx` — nothing happens (payload removed).

**Expected result:** the file opens/behaves normally — no calculator, no execution.

---

## Expected behavior (file by file)

| File | What you should observe |
|---|---|
| malicious files | malicious-lure.docx → branded 'Verify Account' lure with action button |
| clean files | no payload, no calculator, sanitized content |

> Behavior notes are verified by the QA suite on every build (see the QA checklist below).

---

## Safety

- ✅ All payloads are **benign by construction**: the only side effect is opening the calculator.
- ✅ No real malware, no network callbacks (any network reference targets `example.com` or loopback).
- ✅ Metascan demos use the **EICAR test string** — the universal, harmless AV test file.

## QA checklist (verified on this build)

- [ ] `unzip -t ai-phishing-m365-aitm-20260809.zip` → no errors
- [ ] malicious script runs and opens the calculator
- [ ] clean script runs and opens nothing
- [ ] format magic bytes verified (PDF `%PDF`, ZIP `PK`, PNG `\x89PNG`, 7z `7z\xbc\xaf`, OOXML `PK`)

## How MetaDefender catches this

Adversary-in-the-Middle (AitM) spearphishing link via multi-stage redirect chain (T1566.002) (MITRE ATT&CK [T1566.002](https://attack.mitre.org/techniques/T1566.002/))
is neutralized by **OPSWAT AI Content Inspector** before the file reaches the user — see the blog for the
full story and detection details.
