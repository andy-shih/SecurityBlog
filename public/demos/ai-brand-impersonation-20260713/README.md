# AI-Generated Lures Impersonate Trusted Brands

> **MetaDefender module:** OPSWAT AI Content Inspector · **Difficulty:** beginner · **Date:** 2026-07-13
>
> AI Content Inspector analyzes document content for AI-generated phishing, prompt injection, and fraud patterns.

On July 13, 2026, researchers detailed Forg365, a phishing-as-a-service platform that uses AI to generate convincing lures, then steals device-code authentication tokens and performs adversary-in-the-middle session hijacking against Microsoft 365 accounts — enabling persistent access even after password rotation. Such lures arrive as PDFs, DOCX documents, or emails that faithfully copy the look of trusted brands. This demo uses synthetic impersonation content to show how brand-copycat attachments are assembled. OPSWAT AI Content Inspector analyzes the content of documents and emails, flags brand-impersonation signals and AI-generated phishing patterns, and alerts before the lure reaches an inbox.
**Real incident:** this attack technique corresponds to a real-world event — [read the daily digest](https://blog.andyshih.uk/en/blog/ciso-daily-digest-20260713/).

---

## What's in this package

This demo is **Linux-only**. The zip contains two folders:

| Folder | Contents |
|---|---|
| `malicious/` | The attack file(s) — **benign**, the only effect is opening the calculator |
| `clean/` | The same file after MetaDefender processing — payload removed |

Files in `malicious/`: `malicious-brand.docx`

Files in `clean/`: `clean-brand.docx`



---

## How to run the demo (Linux)

### 1. Prepare

```bash
unzip ai-brand-impersonation-20260713.zip
cd ai-brand-impersonation-20260713
```

Requirements: a desktop Linux with a calculator (`gnome-calculator`, `kcalc`, or `xcalc`).
The payload script auto-detects which one is installed.

### 2. Show the attack (malicious)

- Run: `bash malicious-brand.docx` — the calculator opens (the visible impact).

**Expected result:** the calculator window opens. That is the demo's "visible impact"
— the benign stand-in for a real malware payload.

### 3. Show the protection (clean)

- Run: `bash clean-brand.docx` — nothing happens (payload removed).

**Expected result:** the file opens/behaves normally — no calculator, no execution.

---

## Safety

- ✅ All payloads are **benign by construction**: the only side effect is opening the calculator.
- ✅ No real malware, no network callbacks (any network reference targets `example.com` or loopback).
- ✅ Metascan demos use the **EICAR test string** — the universal, harmless AV test file.

## QA checklist (verified on this build)

- [ ] `unzip -t ai-brand-impersonation-20260713.zip` → no errors
- [ ] malicious script runs and opens the calculator
- [ ] clean script runs and opens nothing
- [ ] format magic bytes verified (PDF `%PDF`, ZIP `PK`, PNG `\x89PNG`, 7z `7z\xbc\xaf`, OOXML `PK`)

## How MetaDefender catches this

Brand impersonation content (MITRE ATT&CK [T1566.002](https://attack.mitre.org/techniques/T1566/002/))
is neutralized by **OPSWAT AI Content Inspector** before the file reaches the user — see the blog for the
full story and detection details.
