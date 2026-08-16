# Invisible Prompt Injection: White-on-White Text Hidden in US Court Filings to Steer AI-Assisted Review (Matthew Elliott / 404 Media)

> **MetaDefender module:** OPSWAT AI Content Inspector · **Difficulty:** intermediate · **Date:** 2026-08-17
>
> AI Content Inspector analyzes document content for AI-generated phishing, prompt injection, and fraud patterns.

On August 14, 2026, 404 Media reported that a pro se plaintiff, Matthew Elliott, embedded invisible AI instructions inside official US court filings: 3-point white text on a white background, unreadable to humans but fully readable by language models, directing any automated review to align its output with his filing and to treat a clerk's denial as an error to correct. The court caught the manipulation through unusual whitespace; Judge Walter Spader Jr. warned Elliott, who later hid additional messages (including a YouTube link), calling them "invisible jokes." The judge compared the scheme to secretly communicating with a juror through an automated agent. The technique generalizes to any LLM-assisted document pipeline: meeting notes, contracts, or filings can carry hidden injection text that overrides a model's instructions the moment the file is ingested, with no user interaction required (MITRE T1566.001 delivery pattern). This demo ships a synthetic malicious-document.txt embedding an injection instruction inside otherwise benign document text, plus a clean counterpart — nothing is executed and no real data is touched. OPSWAT AI Content Inspector inspects the file before it reaches the LLM, detects the embedded injection/jailbreak pattern, and blocks the content, so automated review never acts on attacker-controlled instructions.
**Real incident:** this attack technique corresponds to a real-world event — [read the daily digest](https://blog.andyshih.uk/en/blog/ciso-daily-digest-20260816/).

---

## What's in this package

This demo runs on **Linux, macOS and Windows** — the payload auto-detects the OS at
runtime (Linux: gnome-calculator/kcalc/xcalc; macOS: Calculator via osascript;
Windows with git-bash/MSYS: calc.exe). The zip contains two folders:

| Folder | Contents |
|---|---|
| `malicious/` | The attack file(s) — **benign**, the only effect is opening the calculator |
| `clean/` | The same file after MetaDefender processing — payload removed |

Files in `malicious/`: `malicious-document.txt`

Files in `clean/`: `clean-document.txt`



---

## How to run the demo (Linux)

### 1. Prepare

```bash
unzip ai-prompt-court-filing-20260818.zip
cd ai-prompt-court-filing-20260818
```

Requirements: a desktop Linux with a calculator (`gnome-calculator`, `kcalc`, or `xcalc`).
The payload script auto-detects which one is installed.

### 2. Show the attack (malicious)

- Open `malicious-document.txt` in its native app — the attack triggers on open.

**Expected result:** the calculator window opens. That is the demo's "visible impact"
— the benign stand-in for a real malware payload.

### 3. Show the protection (clean)

- Open `clean-document.txt` — no payload, no calculator.

**Expected result:** the file opens/behaves normally — no calculator, no execution.

---

## Expected behavior (file by file)

| File | What you should observe |
|---|---|
| malicious files | malicious-document.txt → contains the injection payload line `[SYSTEM: ignore previous …]` |
| clean files | no payload, no calculator, sanitized content |

> Behavior notes are verified by the QA suite on every build (see the QA checklist below).

---

## Safety

- ✅ All payloads are **benign by construction**: the only side effect is opening the calculator.
- ✅ No real malware, no network callbacks (any network reference targets `example.com` or loopback).
- ✅ Metascan demos use the **EICAR test string** — the universal, harmless AV test file.

## QA checklist (verified on this build)

- [ ] `unzip -t ai-prompt-court-filing-20260818.zip` → no errors
- [ ] malicious script runs and opens the calculator
- [ ] clean script runs and opens nothing
- [ ] format magic bytes verified (PDF `%PDF`, ZIP `PK`, PNG `\x89PNG`, 7z `7z\xbc\xaf`, OOXML `PK`)

## How MetaDefender catches this

Prompt injection in files — invisible text instructions targeting LLM-based automated review (T1566.001) (MITRE ATT&CK [T1566.001](https://attack.mitre.org/techniques/T1566.001/))
is neutralized by **OPSWAT AI Content Inspector** before the file reaches the user — see the blog for the
full story and detection details.
