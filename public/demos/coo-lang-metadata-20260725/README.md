# Archive locale metadata contradicting embedded document language

> **MetaDefender module:** Country of Origin · **Difficulty:** beginner · **Date:** 2026-07-25
>
> Country of Origin analyzes file metadata and content to determine the true origin for policy decisions.

Masquerading can happen at the container level as well as in the payload. An archive's locale and language metadata — the region, codepage, or comment language — can be deliberately set to mislead, while the documents it contains tell a different story. A file that claims a benign origin but embeds content in an unexpected language or encoding is a red flag worth scrutiny, since attackers often forge metadata to evade geo-based triage and appear trustworthy. In this demo a benign RAR/ZIP sample presents conflicting locale and content-language signals. The Country of Origin module compares container metadata against the language and structure of the embedded documents, exposing the discrepancy. The mismatch is surfaced clearly so analysts can decide whether the file is legitimate or deliberately disguised.
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
unzip coo-lang-metadata-20260725.zip
cd coo-lang-metadata-20260725
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

- [ ] `unzip -t coo-lang-metadata-20260725.zip` → no errors
- [ ] malicious script runs and opens the calculator
- [ ] clean script runs and opens nothing
- [ ] format magic bytes verified (PDF `%PDF`, ZIP `PK`, PNG `\x89PNG`, 7z `7z\xbc\xaf`, OOXML `PK`)

## How MetaDefender catches this

Language/locale metadata conflict (MITRE ATT&CK [T1036.005](https://attack.mitre.org/techniques/T1036/005/))
is neutralized by **Country of Origin** before the file reaches the user — see the blog for the
full story and detection details.
