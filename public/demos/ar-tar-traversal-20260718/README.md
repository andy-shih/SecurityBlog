# Tar Path Traversal Escapes Extraction Directory

> **MetaDefender module:** Archive Engine · **Difficulty:** intermediate · **Date:** 2026-07-18
>
> Archive Engine deep-unpacks archives (nested, encrypted, malformed) so payloads cannot hide inside.

Tar archives can contain entries with ../ path segments, so a naive extractor writes files outside the intended destination directory — a path-traversal flaw that lets a malicious archive overwrite configuration files, startup scripts, or libraries on the host. The attack requires no exploit of the extracting application itself; the archive format simply permits the traversal. This demo uses a benign tar with traversal-style entries to show why extraction-time defenses matter. MetaDefender Archive Engine validates every entry path against the extraction root, rejects or neutralizes entries containing parent-directory references, and blocks the archive before any file escapes its sandboxed destination.
**Real incident:** no same-day digest link (technique-focused demo).

---

## What's in this package

This demo is **Linux-only**. The zip contains two folders:

| Folder | Contents |
|---|---|
| `malicious/` | The attack file(s) — **benign**, the only effect is opening the calculator |
| `clean/` | The same file after MetaDefender processing — payload removed |

Files in `malicious/`: `malicious-archive.tar`

Files in `clean/`: `clean-archive.tar`

---

## How to run the demo (Linux)

### 1. Prepare

```bash
unzip ar-tar-traversal-20260718.zip
cd ar-tar-traversal-20260718
```

Requirements: a desktop Linux with a calculator (`gnome-calculator`, `kcalc`, or `xcalc`).
The payload script auto-detects which one is installed.

### 2. Show the attack (malicious)

- Run: `bash malicious-archive.tar` — the calculator opens (the visible impact).

**Expected result:** the calculator window opens. That is the demo's "visible impact"
— the benign stand-in for a real malware payload.

### 3. Show the protection (clean)

- Run: `bash clean-archive.tar` — nothing happens (payload removed).

**Expected result:** the file opens/behaves normally — no calculator, no execution.

---

## Safety

- ✅ All payloads are **benign by construction**: the only side effect is opening the calculator.
- ✅ No real malware, no network callbacks (any network reference targets `example.com` or loopback).
- ✅ Metascan demos use the **EICAR test string** — the universal, harmless AV test file.

## QA checklist (verified on this build)

- [ ] `unzip -t ar-tar-traversal-20260718.zip` → no errors
- [ ] malicious script runs and opens the calculator
- [ ] clean script runs and opens nothing
- [ ] format magic bytes verified (PDF `%PDF`, ZIP `PK`, PNG `\x89PNG`, 7z `7z\xbc\xaf`, OOXML `PK`)

## How MetaDefender catches this

Tar path traversal (MITRE ATT&CK [T1027.003](https://attack.mitre.org/techniques/T1027/003/))
is neutralized by **Archive Engine** before the file reaches the user — see the blog for the
full story and detection details.
