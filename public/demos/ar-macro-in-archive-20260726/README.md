# Macro-enabled document delivered inside archive to bypass filters

> **MetaDefender module:** Archive Engine · **Difficulty:** beginner · **Date:** 2026-07-26
>
> Archive Engine deep-unpacks archives (nested, encrypted, malformed) so payloads cannot hide inside.

Attackers routinely wrap macro-enabled documents in archives because many email and download filters scan attachments by extension without recursing into containers. A macro-laden .docm stowed inside a plain ZIP can arrive at the user intact; opening it and enabling macros then runs embedded code in the Office security context. This wrapper trick is a reliable delivery path for phishing and initial access. In this demo a benign macro document is archived to illustrate the same maneuver: the embedded macro only opens Calculator, keeping analysis safe. The Archive Engine recurses into the ZIP, extracts the inner document, and passes it to macro analysis before anything reaches the desktop. The unwrapped threat is neutralized at the gateway, not on the user's machine.
**Real incident:** no same-day digest link (technique-focused demo).

---

## What's in this package

This demo is **Linux-only**. The zip contains two folders:

| Folder | Contents |
|---|---|
| `malicious/` | The attack file(s) — **benign**, the only effect is opening the calculator |
| `clean/` | The same file after MetaDefender processing — payload removed |

Files in `malicious/`: `invoice.docx`, `malicious-archive.zip`

Files in `clean/`: `clean-archive.zip`

---

## How to run the demo (Linux)

### 1. Prepare

```bash
unzip ar-macro-in-archive-20260726.zip
cd ar-macro-in-archive-20260726
```

Requirements: a desktop Linux with a calculator (`gnome-calculator`, `kcalc`, or `xcalc`).
The payload script auto-detects which one is installed.

### 2. Show the attack (malicious)

- Run: `bash invoice.docx` — the calculator opens (the visible impact).
- Run: `bash malicious-archive.zip` — the calculator opens (the visible impact).

**Expected result:** the calculator window opens. That is the demo's "visible impact"
— the benign stand-in for a real malware payload.

### 3. Show the protection (clean)

- Run: `bash clean-archive.zip` — nothing happens (payload removed).

**Expected result:** the file opens/behaves normally — no calculator, no execution.

---

## Safety

- ✅ All payloads are **benign by construction**: the only side effect is opening the calculator.
- ✅ No real malware, no network callbacks (any network reference targets `example.com` or loopback).
- ✅ Metascan demos use the **EICAR test string** — the universal, harmless AV test file.

## QA checklist (verified on this build)

- [ ] `unzip -t ar-macro-in-archive-20260726.zip` → no errors
- [ ] malicious script runs and opens the calculator
- [ ] clean script runs and opens nothing
- [ ] format magic bytes verified (PDF `%PDF`, ZIP `PK`, PNG `\x89PNG`, 7z `7z\xbc\xaf`, OOXML `PK`)

## How MetaDefender catches this

Archive-wrapped macro document (MITRE ATT&CK [T1204.002](https://attack.mitre.org/techniques/T1204/002/))
is neutralized by **Archive Engine** before the file reaches the user — see the blog for the
full story and detection details.
