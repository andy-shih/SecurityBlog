# Hidden prompt-injection instructions inside a document

> **MetaDefender module:** OPSWAT AI Content Inspector · **Difficulty:** advanced · **Date:** 2026-06-20
>
> AI Content Inspector analyzes document content for AI-generated phishing, prompt injection, and fraud patterns.

Researchers disclosed AutoJack, an attack class in which a single compromised web page hijacks embedded AI agents to execute arbitrary host code, exploiting weak sandboxing between browser-based assistants and the underlying system - no CVE has been assigned yet. The same logic applies to documents: a PDF, DOCX, or TXT file can carry hidden prompt-injection text that overrides an LLM's instructions when the file is processed or summarized (MITRE T1566.001), turning a benign file into an agent hijack. OPSWAT AI Content Inspector examines files before they reach the model, flagging embedded injection patterns, jailbreak prompts, and suspicious instructions, so the AI never acts on attacker-controlled content. The demo uses a synthetic injection payload and contains no real exploit.
**Real incident:** this attack technique corresponds to a real-world event — [read the daily digest](https://blog.andyshih.uk/en/blog/ciso-daily-digest-20260620/).

---

## What's in this package

This demo is **Linux-only**. The zip contains two folders:

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
unzip ai-prompt-injection-20260620.zip
cd ai-prompt-injection-20260620
```

Requirements: a desktop Linux with a calculator (`gnome-calculator`, `kcalc`, or `xcalc`).
The payload script auto-detects which one is installed.

### 2. Show the attack (malicious)

- Run: `bash malicious-document.txt` — the calculator opens (the visible impact).

**Expected result:** the calculator window opens. That is the demo's "visible impact"
— the benign stand-in for a real malware payload.

### 3. Show the protection (clean)

- Run: `bash clean-document.txt` — nothing happens (payload removed).

**Expected result:** the file opens/behaves normally — no calculator, no execution.

---

## Safety

- ✅ All payloads are **benign by construction**: the only side effect is opening the calculator.
- ✅ No real malware, no network callbacks (any network reference targets `example.com` or loopback).
- ✅ Metascan demos use the **EICAR test string** — the universal, harmless AV test file.

## QA checklist (verified on this build)

- [ ] `unzip -t ai-prompt-injection-20260620.zip` → no errors
- [ ] malicious script runs and opens the calculator
- [ ] clean script runs and opens nothing
- [ ] format magic bytes verified (PDF `%PDF`, ZIP `PK`, PNG `\x89PNG`, 7z `7z\xbc\xaf`, OOXML `PK`)

## How MetaDefender catches this

Prompt injection in files (MITRE ATT&CK [T1566.001](https://attack.mitre.org/techniques/T1566/001/))
is neutralized by **OPSWAT AI Content Inspector** before the file reaches the user — see the blog for the
full story and detection details.
