# AI-generated identity documents for fraud onboarding

> **MetaDefender module:** OPSWAT AI Content Inspector · **Difficulty:** intermediate · **Date:** 2026-07-28
>
> AI Content Inspector analyzes document content for AI-generated phishing, prompt injection, and fraud patterns.

Synthetic identity fraud has grown with generative AI: attackers now use AI tools to fabricate passports, driver's licenses, and ID cards realistic enough to pass human review during account onboarding. These documents typically combine genuine template designs with AI-generated portraits and carefully altered metadata to evade manual checks. OPSWAT AI Content Inspector analyzes the document for AI-generation fingerprints — inconsistencies in text rendering, image artifacts, and metadata anomalies — and flags it before it reaches KYC or onboarding workflows. The demo uses a clearly synthetic ID card, so no real identity data is involved.
**Real incident:** no same-day digest link (technique-focused demo).

---

## What's in this package

This demo is **Linux-only**. The zip contains two folders:

| Folder | Contents |
|---|---|
| `malicious/` | The attack file(s) — **benign**, the only effect is opening the calculator |
| `clean/` | The same file after MetaDefender processing — payload removed |

Files in `malicious/`: `malicious-id.pdf`

Files in `clean/`: `clean-id.pdf`



---

## How to run the demo (Linux)

### 1. Prepare

```bash
unzip ai-synthetic-id-20260728.zip
cd ai-synthetic-id-20260728
```

Requirements: a desktop Linux with a calculator (`gnome-calculator`, `kcalc`, or `xcalc`).
The payload script auto-detects which one is installed.

### 2. Show the attack (malicious)

- Run: `bash malicious-id.pdf` — the calculator opens (the visible impact).

**Expected result:** the calculator window opens. That is the demo's "visible impact"
— the benign stand-in for a real malware payload.

### 3. Show the protection (clean)

- Run: `bash clean-id.pdf` — nothing happens (payload removed).

**Expected result:** the file opens/behaves normally — no calculator, no execution.

---

## Safety

- ✅ All payloads are **benign by construction**: the only side effect is opening the calculator.
- ✅ No real malware, no network callbacks (any network reference targets `example.com` or loopback).
- ✅ Metascan demos use the **EICAR test string** — the universal, harmless AV test file.

## QA checklist (verified on this build)

- [ ] `unzip -t ai-synthetic-id-20260728.zip` → no errors
- [ ] malicious script runs and opens the calculator
- [ ] clean script runs and opens nothing
- [ ] format magic bytes verified (PDF `%PDF`, ZIP `PK`, PNG `\x89PNG`, 7z `7z\xbc\xaf`, OOXML `PK`)

## How MetaDefender catches this

Synthetic identity documents (MITRE ATT&CK [T1585.001](https://attack.mitre.org/techniques/T1585/001/))
is neutralized by **OPSWAT AI Content Inspector** before the file reaches the user — see the blog for the
full story and detection details.
