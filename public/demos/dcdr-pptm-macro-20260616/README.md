# Malicious PowerPoint presentation with embedded macro

> **MetaDefender module:** Deep CDR · **Difficulty:** beginner · **Date:** 2026-06-16
>
> Deep CDR (Content Disarm & Reconstruction) dismantles the file, removes executable/embedded content, and rebuilds a clean, safe version.

Macro-laden Office documents remain one of the most reliable initial access vectors, with PowerPoint files a frequent carrier: opening a malicious .pptm triggers embedded VBA that downloads or executes the next stage. The user is the entry point — the click that launches the macro — a pattern mapped to T1204.002 (User Execution: Malicious File). This demo presents a PowerPoint file containing a benign macro that simply opens Calculator, demonstrating the risk without any harmful payload. Deep CDR (Content Disarm and Reconstruction) inspects the presentation, strips the macro and other active content, and rebuilds a clean .pptm that opens normally but can no longer execute code — preserving usability while removing the attack vector.
**Real incident:** no same-day digest link (technique-focused demo).

---

## What's in this package

This demo is **Linux-only**. The zip contains two folders:

| Folder | Contents |
|---|---|
| `malicious/` | The attack file(s) — **benign**, the only effect is opening the calculator |
| `clean/` | The same file after MetaDefender processing — payload removed |

Files in `malicious/`: `malicious-review.pptx`

Files in `clean/`: `clean-review.pptx`

---

## How to run the demo (Linux)

### 1. Prepare

```bash
unzip dcdr-pptm-macro-20260616.zip
cd dcdr-pptm-macro-20260616
```

Requirements: a desktop Linux with a calculator (`gnome-calculator`, `kcalc`, or `xcalc`).
The payload script auto-detects which one is installed.

### 2. Show the attack (malicious)

- Run: `bash malicious-review.pptx` — the calculator opens (the visible impact).

**Expected result:** the calculator window opens. That is the demo's "visible impact"
— the benign stand-in for a real malware payload.

### 3. Show the protection (clean)

- Run: `bash clean-review.pptx` — nothing happens (payload removed).

**Expected result:** the file opens/behaves normally — no calculator, no execution.

---

## Safety

- ✅ All payloads are **benign by construction**: the only side effect is opening the calculator.
- ✅ No real malware, no network callbacks (any network reference targets `example.com` or loopback).
- ✅ Metascan demos use the **EICAR test string** — the universal, harmless AV test file.

## QA checklist (verified on this build)

- [ ] `unzip -t dcdr-pptm-macro-20260616.zip` → no errors
- [ ] malicious script runs and opens the calculator
- [ ] clean script runs and opens nothing
- [ ] format magic bytes verified (PDF `%PDF`, ZIP `PK`, PNG `\x89PNG`, 7z `7z\xbc\xaf`, OOXML `PK`)

## How MetaDefender catches this

PowerPoint macro (MITRE ATT&CK [T1204.002](https://attack.mitre.org/techniques/T1204/002/))
is neutralized by **Deep CDR** before the file reaches the user — see the blog for the
full story and detection details.
