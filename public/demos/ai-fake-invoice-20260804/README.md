# AI-crafted fraudulent invoice targeting finance teams

> **MetaDefender module:** OPSWAT AI Content Inspector · **Difficulty:** beginner · **Date:** 2026-08-04
>
> AI Content Inspector analyzes document content for AI-generated phishing, prompt injection, and fraud patterns.

Business email compromise increasingly rides on AI-generated documents: attackers use generative AI to craft invoices and payment requests that mimic a vendor's letterhead, tone, and formatting well enough to fool finance teams. The files arrive as PDF or DOCX attachments in spearphishing emails, often demanding urgent payment to a new bank account. OPSWAT AI Content Inspector examines the attachment for signs of AI generation — unnatural text patterns, rendering artifacts, and metadata inconsistencies — and flags it before payment workflows process it. The demo uses a synthetic invoice containing no real company or payment data.
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
unzip ai-fake-invoice-20260804.zip
cd ai-fake-invoice-20260804
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

- [ ] `unzip -t ai-fake-invoice-20260804.zip` → no errors
- [ ] malicious script runs and opens the calculator
- [ ] clean script runs and opens nothing
- [ ] format magic bytes verified (PDF `%PDF`, ZIP `PK`, PNG `\x89PNG`, 7z `7z\xbc\xaf`, OOXML `PK`)

## How MetaDefender catches this

AI-generated fake invoice (MITRE ATT&CK [T1566.002](https://attack.mitre.org/techniques/T1566/002/))
is neutralized by **OPSWAT AI Content Inspector** before the file reaches the user — see the blog for the
full story and detection details.
