# Payload Buried in Nested ZIP Layers

> **MetaDefender module:** Archive Engine · **Difficulty:** beginner · **Date:** 2026-07-17
>
> Archive Engine deep-unpacks archives (nested, encrypted, malformed) so payloads cannot hide inside.

Attackers bury payloads inside multiple layers of nested archives, so a ZIP contains a ZIP that contains another ZIP before the actual executable appears. Each layer adds friction for single-pass scanners and manual review, and the technique is widely used to smuggle malware through email gateways and web uploads. This demo uses a benign file buried several levels deep to reproduce the delivery pattern safely. MetaDefender Archive Engine recursively unpacks archives across every nesting level, applies deep scanning to each extracted file, and enforces configurable limits on depth and file count so compressed bombs and deeply hidden payloads cannot escape detection.
**Real incident:** no same-day digest link (technique-focused demo).

---

## What's in this package

This demo is **Linux-only**. The zip contains two folders:

| Folder | Contents |
|---|---|
| `malicious/` | The attack file(s) — **benign**, the only effect is opening the calculator |
| `clean/` | The same file after MetaDefender processing — payload removed |

Files in `malicious/`: `malicious-archive.zip`

Files in `clean/`: `clean-archive.zip`

---

## How to run the demo (Linux)

### 1. Prepare

```bash
unzip ar-nested-zip-20260717.zip
cd ar-nested-zip-20260717
```

Requirements: a desktop Linux with a calculator (`gnome-calculator`, `kcalc`, or `xcalc`).
The payload script auto-detects which one is installed.

### 2. Show the attack (malicious)

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

- [ ] `unzip -t ar-nested-zip-20260717.zip` → no errors
- [ ] malicious script runs and opens the calculator
- [ ] clean script runs and opens nothing
- [ ] format magic bytes verified (PDF `%PDF`, ZIP `PK`, PNG `\x89PNG`, 7z `7z\xbc\xaf`, OOXML `PK`)

## How MetaDefender catches this

Deeply nested archives (MITRE ATT&CK [T1027.003](https://attack.mitre.org/techniques/T1027/003/))
is neutralized by **Archive Engine** before the file reaches the user — see the blog for the
full story and detection details.
