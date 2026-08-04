# Self-extracting 7z archive auto-runs embedded payload on extract

> **MetaDefender module:** Archive Engine · **Difficulty:** intermediate · **Date:** 2026-07-19
>
> Archive Engine deep-unpacks archives (nested, encrypted, malformed) so payloads cannot hide inside.

Self-extracting archives unite a compressed payload with a small executable stub, so opening one both unpacks data and immediately triggers whatever code it embeds. Attackers lean on this to deliver initial access, since a .7z/.exe carrier slips past filters that block direct executables while still running the payload without user action. Here a benign stub is configured to launch Calculator on extraction, proving the extract-and-execute chain can fire silently. The Archive Engine inspects the self-extracting structure, recursively unpacks and scans every layer, and examines the embedded executable before anything is allowed to run. By validating the archive at the gateway, MetaDefender stops the payload from ever reaching the endpoint.
**Real incident:** no same-day digest link (technique-focused demo).

---

## What's in this package

This demo is **Linux-only**. The zip contains two folders:

| Folder | Contents |
|---|---|
| `malicious/` | The attack file(s) — **benign**, the only effect is opening the calculator |
| `clean/` | The same file after MetaDefender processing — payload removed |

Files in `malicious/`: `malicious-archive.7z`

Files in `clean/`: `clean-archive.zip`



---

## How to run the demo (Linux)

### 1. Prepare

```bash
unzip ar-7z-sfx-20260719.zip
cd ar-7z-sfx-20260719
```

Requirements: a desktop Linux with a calculator (`gnome-calculator`, `kcalc`, or `xcalc`).
The payload script auto-detects which one is installed.

### 2. Show the attack (malicious)

- Run: `bash malicious-archive.7z` — the calculator opens (the visible impact).

**Expected result:** the calculator window opens. That is the demo's "visible impact"
— the benign stand-in for a real malware payload.

### 3. Show the protection (clean)

- Run: `bash clean-archive.zip` — nothing happens (payload removed).

**Expected result:** the file opens/behaves normally — no calculator, no execution.

---

## Expected behavior (file by file)

| File | What you should observe |
|---|---|
| malicious files | malicious-archive.7z → valid 7z (SFX variant documented in README) |
| clean files | no payload, no calculator, sanitized content |

> Behavior notes are verified by the QA suite on every build (see the QA checklist below).

---

## Safety

- ✅ All payloads are **benign by construction**: the only side effect is opening the calculator.
- ✅ No real malware, no network callbacks (any network reference targets `example.com` or loopback).
- ✅ Metascan demos use the **EICAR test string** — the universal, harmless AV test file.

## QA checklist (verified on this build)

- [ ] `unzip -t ar-7z-sfx-20260719.zip` → no errors
- [ ] malicious script runs and opens the calculator
- [ ] clean script runs and opens nothing
- [ ] format magic bytes verified (PDF `%PDF`, ZIP `PK`, PNG `\x89PNG`, 7z `7z\xbc\xaf`, OOXML `PK`)

## How MetaDefender catches this

Self-extracting archive (MITRE ATT&CK [T1027.003](https://attack.mitre.org/techniques/T1027/003/))
is neutralized by **Archive Engine** before the file reaches the user — see the blog for the
full story and detection details.
