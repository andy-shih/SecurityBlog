# Region-specific document origin analysis for policy decisions

> **MetaDefender module:** Country of Origin · **Difficulty:** beginner · **Date:** 2026-07-31
>
> Country of Origin analyzes file metadata and content to determine the true origin for policy decisions.

Organizations increasingly enforce file policies based on geographic origin, but attackers routinely masquerade documents as coming from trusted regions — forging author metadata, adjusting language, and aligning timezone artifacts to evade policy checks (T1036.005). Country of Origin analysis examines metadata and content fingerprints — author names, language, timezone artifacts, and software version trails — to establish a document's true provenance, exposing mismatches between claimed and actual origin. The module surfaces this provenance so policy decisions — allow, quarantine, or block — can be enforced automatically. The demo uses a benign Office document, so no sensitive or malicious content is involved.
**Real incident:** no same-day digest link (technique-focused demo).

---

## What's in this package

This demo is **Linux-only**. The zip contains two folders:

| Folder | Contents |
|---|---|
| `malicious/` | The attack file(s) — **benign**, the only effect is opening the calculator |
| `clean/` | The same file after MetaDefender processing — payload removed |

Files in `malicious/`: `malicious-region.xlsx`

Files in `clean/`: `clean-region.xlsx`



---

## How to run the demo (Linux)

### 1. Prepare

```bash
unzip coo-region-locked-20260731.zip
cd coo-region-locked-20260731
```

Requirements: a desktop Linux with a calculator (`gnome-calculator`, `kcalc`, or `xcalc`).
The payload script auto-detects which one is installed.

### 2. Show the attack (malicious)

- Run: `bash malicious-region.xlsx` — the calculator opens (the visible impact).

**Expected result:** the calculator window opens. That is the demo's "visible impact"
— the benign stand-in for a real malware payload.

### 3. Show the protection (clean)

- Run: `bash clean-region.xlsx` — nothing happens (payload removed).

**Expected result:** the file opens/behaves normally — no calculator, no execution.

---

## Expected behavior (file by file)

| File | What you should observe |
|---|---|
| malicious files | malicious-region.xlsx → region-tagged demo data (CN) |
| clean files | no payload, no calculator, sanitized content |

> Behavior notes are verified by the QA suite on every build (see the QA checklist below).

---

## Safety

- ✅ All payloads are **benign by construction**: the only side effect is opening the calculator.
- ✅ No real malware, no network callbacks (any network reference targets `example.com` or loopback).
- ✅ Metascan demos use the **EICAR test string** — the universal, harmless AV test file.

## QA checklist (verified on this build)

- [ ] `unzip -t coo-region-locked-20260731.zip` → no errors
- [ ] malicious script runs and opens the calculator
- [ ] clean script runs and opens nothing
- [ ] format magic bytes verified (PDF `%PDF`, ZIP `PK`, PNG `\x89PNG`, 7z `7z\xbc\xaf`, OOXML `PK`)

## How MetaDefender catches this

Origin-based policy enforcement (MITRE ATT&CK [T1036.005](https://attack.mitre.org/techniques/T1036/005/))
is neutralized by **Country of Origin** before the file reaches the user — see the blog for the
full story and detection details.
