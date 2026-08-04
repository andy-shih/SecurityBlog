# AI-generated lure document with no spelling errors

> **MetaDefender module:** OPSWAT AI Content Inspector · **Difficulty:** beginner · **Date:** 2026-06-13
>
> AI Content Inspector analyzes document content for AI-generated phishing, prompt injection, and fraud patterns.

Google has sued a smishing network allegedly using Gemini AI to craft phishing messages — the first major case of an AI model weaponized at scale for credential harvesting by organized crime. AI-generated lure documents are hard to spot because they lack the spelling errors and awkward phrasing that traditionally betray phishing, and they arrive as docx, PDF, or eml attachments, a spearphishing pattern mapped to T1566.001. This demo inspects a synthetic phishing document containing no real credentials or links to live infrastructure. OPSWAT AI Content Inspector analyzes the text for machine-generation patterns and clearly flags the document as AI-assisted social engineering, giving defenders a new detection signal.
**Real incident:** this attack technique corresponds to a real-world event — [read the daily digest](https://blog.andyshih.uk/en/blog/ciso-daily-digest-20260613/).

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
unzip ai-phishing-doc-20260613.zip
cd ai-phishing-doc-20260613
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

- [ ] `unzip -t ai-phishing-doc-20260613.zip` → no errors
- [ ] malicious script runs and opens the calculator
- [ ] clean script runs and opens nothing
- [ ] format magic bytes verified (PDF `%PDF`, ZIP `PK`, PNG `\x89PNG`, 7z `7z\xbc\xaf`, OOXML `PK`)

## How MetaDefender catches this

AI-generated phishing document (MITRE ATT&CK [T1566.001](https://attack.mitre.org/techniques/T1566/001/))
is neutralized by **OPSWAT AI Content Inspector** before the file reaches the user — see the blog for the
full story and detection details.
