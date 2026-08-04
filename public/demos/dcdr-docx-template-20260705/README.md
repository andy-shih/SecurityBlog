# Remote Template Injection in DOCX Documents

> **MetaDefender module:** Deep CDR · **Difficulty:** advanced · **Date:** 2026-07-05
>
> Deep CDR (Content Disarm & Reconstruction) dismantles the file, removes executable/embedded content, and rebuilds a clean, safe version.

External template injection abuses a legitimate Word feature: a .docx can reference a remote .dotm template, so macros never appear in the document itself and pass static scans. When the file is opened, Word silently fetches the template, and the attacker-controlled VBA in that template runs with the user's privileges. In this demo, the remote template contains benign VBA that only opens Calculator, mirroring the delivery chain used in real phishing campaigns. Deep CDR removes the template relationship entirely, rebuilding the DOCX so no external fetch is possible. The sanitized document remains fully usable for reading and editing, while the remote-code path that attackers rely on is eliminated.
**Real incident:** no same-day digest link (technique-focused demo).

---

## What's in this package

This demo is **Linux-only**. The zip contains two folders:

| Folder | Contents |
|---|---|
| `malicious/` | The attack file(s) — **benign**, the only effect is opening the calculator |
| `clean/` | The same file after MetaDefender processing — payload removed |

Files in `malicious/`: `malicious-invoice.docx`

Files in `clean/`: `clean-invoice.docx`



---

## How to run the demo (Linux)

### 1. Prepare

```bash
unzip dcdr-docx-template-20260705.zip
cd dcdr-docx-template-20260705
```

Requirements: a desktop Linux with a calculator (`gnome-calculator`, `kcalc`, or `xcalc`).
The payload script auto-detects which one is installed.

### 2. Show the attack (malicious)

- Run: `bash malicious-invoice.docx` — the calculator opens (the visible impact).

**Expected result:** the calculator window opens. That is the demo's "visible impact"
— the benign stand-in for a real malware payload.

### 3. Show the protection (clean)

- Run: `bash clean-invoice.docx` — nothing happens (payload removed).

**Expected result:** the file opens/behaves normally — no calculator, no execution.

---

## Safety

- ✅ All payloads are **benign by construction**: the only side effect is opening the calculator.
- ✅ No real malware, no network callbacks (any network reference targets `example.com` or loopback).
- ✅ Metascan demos use the **EICAR test string** — the universal, harmless AV test file.

## QA checklist (verified on this build)

- [ ] `unzip -t dcdr-docx-template-20260705.zip` → no errors
- [ ] malicious script runs and opens the calculator
- [ ] clean script runs and opens nothing
- [ ] format magic bytes verified (PDF `%PDF`, ZIP `PK`, PNG `\x89PNG`, 7z `7z\xbc\xaf`, OOXML `PK`)

## How MetaDefender catches this

External template injection (MITRE ATT&CK [T1221](https://attack.mitre.org/techniques/T1221/))
is neutralized by **Deep CDR** before the file reaches the user — see the blog for the
full story and detection details.
