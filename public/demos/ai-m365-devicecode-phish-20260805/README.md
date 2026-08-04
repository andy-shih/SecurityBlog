# AI-Generated Microsoft 365 Device Code Phishing Lure (Storm-2945)

> **MetaDefender module:** OPSWAT AI Content Inspector · **Difficulty:** intermediate · **Date:** 2026-08-04
>
> AI Content Inspector analyzes document content for AI-generated phishing, prompt injection, and fraud patterns.

Microsoft attributes hotel Wi-Fi DNS-tampering campaigns to Storm-2945 (Midnight Blizzard-linked). Since July 2026 the group abuses the Microsoft Device Code login flow: victims on compromised hotel networks are steered to a legitimate-looking sign-in page and told to enter an attacker-supplied device code, handing over an OAuth token. This demo ships an AI-generated phishing lure document that mimics that M365 verification prompt; OPSWAT AI Content Inspector flags the AI-generated phishing pattern while Deep CDR sanitizes the embedded content.
**Real incident:** this attack technique corresponds to a real-world event — [read the daily digest](https://blog.andyshih.uk/en/blog/ciso-daily-digest-20260803/).

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
unzip ai-m365-devicecode-phish-20260805.zip
cd ai-m365-devicecode-phish-20260805
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
| malicious files | (see steps above) |
| clean files | no payload, no calculator, sanitized content |

> Behavior notes are verified by the QA suite on every build (see the QA checklist below).

---

## Safety

- ✅ All payloads are **benign by construction**: the only side effect is opening the calculator.
- ✅ No real malware, no network callbacks (any network reference targets `example.com` or loopback).
- ✅ Metascan demos use the **EICAR test string** — the universal, harmless AV test file.

## QA checklist (verified on this build)

- [ ] `unzip -t ai-m365-devicecode-phish-20260805.zip` → no errors
- [ ] malicious script runs and opens the calculator
- [ ] clean script runs and opens nothing
- [ ] format magic bytes verified (PDF `%PDF`, ZIP `PK`, PNG `\x89PNG`, 7z `7z\xbc\xaf`, OOXML `PK`)

## How MetaDefender catches this

Device Code phishing lure (T1566.002) (MITRE ATT&CK [T1566.002](https://attack.mitre.org/techniques/T1566.002/))
is neutralized by **OPSWAT AI Content Inspector** before the file reaches the user — see the blog for the
full story and detection details.
