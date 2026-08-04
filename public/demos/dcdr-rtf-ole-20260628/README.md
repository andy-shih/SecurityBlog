# RTF document embedding OLE object that executes on open

> **MetaDefender module:** Deep CDR · **Difficulty:** intermediate · **Date:** 2026-06-28
>
> Deep CDR (Content Disarm & Reconstruction) dismantles the file, removes executable/embedded content, and rebuilds a clean, safe version.

Rich Text Format documents are a classic initial-access vehicle because they can embed OLE objects - embedded documents, spreadsheets, or executables that the host application activates when the user double-clicks the embedded icon (MITRE T1204.002). An attacker can hide a malicious object inside an otherwise legitimate-looking RTF so the weaponized content ships in a format that many email and web filters pass without deep inspection. Deep CDR disassembles the RTF structure, extracts the embedded object, inspects it, and rebuilds a sanitized document with the OLE object neutralized - the user still sees the content, but nothing executes on open. The demo embeds a benign OLE object that only invokes Calculator, so it is safe to run on any Windows system.
**Real incident:** no same-day digest link (technique-focused demo).

---

## What's in this package

This demo is **Linux-only**. The zip contains two folders:

| Folder | Contents |
|---|---|
| `malicious/` | The attack file(s) — **benign**, the only effect is opening the calculator |
| `clean/` | The same file after MetaDefender processing — payload removed |

Files in `malicious/`: `malicious-invoice.rtf`

Files in `clean/`: `clean-invoice.rtf`

---

## How to run the demo (Linux)

### 1. Prepare

```bash
unzip dcdr-rtf-ole-20260628.zip
cd dcdr-rtf-ole-20260628
```

Requirements: a desktop Linux with a calculator (`gnome-calculator`, `kcalc`, or `xcalc`).
The payload script auto-detects which one is installed.

### 2. Show the attack (malicious)

- Run: `bash malicious-invoice.rtf` — the calculator opens (the visible impact).

**Expected result:** the calculator window opens. That is the demo's "visible impact"
— the benign stand-in for a real malware payload.

### 3. Show the protection (clean)

- Run: `bash clean-invoice.rtf` — nothing happens (payload removed).

**Expected result:** the file opens/behaves normally — no calculator, no execution.

---

## Safety

- ✅ All payloads are **benign by construction**: the only side effect is opening the calculator.
- ✅ No real malware, no network callbacks (any network reference targets `example.com` or loopback).
- ✅ Metascan demos use the **EICAR test string** — the universal, harmless AV test file.

## QA checklist (verified on this build)

- [ ] `unzip -t dcdr-rtf-ole-20260628.zip` → no errors
- [ ] malicious script runs and opens the calculator
- [ ] clean script runs and opens nothing
- [ ] format magic bytes verified (PDF `%PDF`, ZIP `PK`, PNG `\x89PNG`, 7z `7z\xbc\xaf`, OOXML `PK`)

## How MetaDefender catches this

RTF OLE object (MITRE ATT&CK [T1204.002](https://attack.mitre.org/techniques/T1204/002/))
is neutralized by **Deep CDR** before the file reaches the user — see the blog for the
full story and detection details.
