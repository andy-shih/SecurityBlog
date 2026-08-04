# Tiny ZIP bomb expanding to enormous size on extraction

> **MetaDefender module:** Archive Engine · **Difficulty:** intermediate · **Date:** 2026-07-20
>
> Archive Engine deep-unpacks archives (nested, encrypted, malformed) so payloads cannot hide inside.

Archive-handling flaws keep surfacing across the industry: this digest reports a 7-Zip vulnerability enabling code execution during extraction of crafted archive files, plus an unpatched 7-Zip RCE triggered by malicious archives. A decompression bomb weaponizes normal extraction behavior — a tiny ZIP declares far larger uncompressed sizes, exhausting memory and disk when an engine blindly inflates each entry. In this demo a small, benign expansion file shows the ratio spike without risking resources. The Archive Engine detects the mismatch between the archive's small footprint and the enormous projected decompressed volume before extraction proceeds. This early validation prevents denial-of-service style resource exhaustion at the gateway, so endpoints never face the inflated payload.
**Real incident:** this attack technique corresponds to a real-world event — [read the daily digest](https://blog.andyshih.uk/en/blog/ciso-daily-digest-20260720/).

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
unzip ar-zip-bomb-20260720.zip
cd ar-zip-bomb-20260720
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

## Expected behavior (file by file)

| File | What you should observe |
|---|---|
| malicious files | malicious-archive.zip → 1000 entries of 1KB zeros (expands ~1000×) |
| clean files | no payload, no calculator, sanitized content |

> Behavior notes are verified by the QA suite on every build (see the QA checklist below).

---

## Safety

- ✅ All payloads are **benign by construction**: the only side effect is opening the calculator.
- ✅ No real malware, no network callbacks (any network reference targets `example.com` or loopback).
- ✅ Metascan demos use the **EICAR test string** — the universal, harmless AV test file.

## QA checklist (verified on this build)

- [ ] `unzip -t ar-zip-bomb-20260720.zip` → no errors
- [ ] malicious script runs and opens the calculator
- [ ] clean script runs and opens nothing
- [ ] format magic bytes verified (PDF `%PDF`, ZIP `PK`, PNG `\x89PNG`, 7z `7z\xbc\xaf`, OOXML `PK`)

## How MetaDefender catches this

Decompression bomb (MITRE ATT&CK [T1499](https://attack.mitre.org/techniques/T1499/))
is neutralized by **Archive Engine** before the file reaches the user — see the blog for the
full story and detection details.
