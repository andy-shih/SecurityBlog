# Executable Renamed to .jpg Bypasses Naive Filters

> **MetaDefender module:** FileType Engine · **Difficulty:** beginner · **Date:** 2026-06-04
>
> FileType Engine verifies the true file type via magic bytes, defeating name/extension masquerades.

Threat actors routinely rename executables with innocuous extensions — .jpg, .png, .pdf — to smuggle payloads past email gateways and web filters that only check file extensions. A renamed binary remains fully executable: the extension is cosmetic, while the file's magic bytes and internal structure still identify it as a Windows PE program. This mismatch is invisible to users browsing attachments and to any scanner that trusts the filename, yet it is trivial to catch by inspecting actual content. This demo uses a benign executable simply renamed to .jpg; no malware is involved. The FileType Engine ignores the filename, inspects the file's signature and structure, and flags the true format, so the mismatch is surfaced immediately and the disguised executable can be blocked or quarantined at the perimeter.
**Real incident:** no same-day digest link (technique-focused demo).

---

## What's in this package

This demo is **Linux-only**. The zip contains two folders:

| Folder | Contents |
|---|---|
| `malicious/` | The attack file(s) — **benign**, the only effect is opening the calculator |
| `clean/` | The same file after MetaDefender processing — payload removed |

Files in `malicious/`: `malicious-photo.jpg`

Files in `clean/`: `clean-photo.jpg`



---

## How to run the demo (Linux)

### 1. Prepare

```bash
unzip ft-extension-mismatch-20260604.zip
cd ft-extension-mismatch-20260604
```

Requirements: a desktop Linux with a calculator (`gnome-calculator`, `kcalc`, or `xcalc`).
The payload script auto-detects which one is installed.

### 2. Show the attack (malicious)

- Run: `bash malicious-photo.jpg` — the calculator opens (the visible impact).

**Expected result:** the calculator window opens. That is the demo's "visible impact"
— the benign stand-in for a real malware payload.

### 3. Show the protection (clean)

- Run: `bash clean-photo.jpg` — nothing happens (payload removed).

**Expected result:** the file opens/behaves normally — no calculator, no execution.

---

## Expected behavior (file by file)

| File | What you should observe |
|---|---|
| malicious files | malicious-photo.jpg → a real shell script disguised as a JPEG (magic bytes reveal the truth) |
| clean files | no payload, no calculator, sanitized content |

> Behavior notes are verified by the QA suite on every build (see the QA checklist below).

---

## Safety

- ✅ All payloads are **benign by construction**: the only side effect is opening the calculator.
- ✅ No real malware, no network callbacks (any network reference targets `example.com` or loopback).
- ✅ Metascan demos use the **EICAR test string** — the universal, harmless AV test file.

## QA checklist (verified on this build)

- [ ] `unzip -t ft-extension-mismatch-20260604.zip` → no errors
- [ ] malicious script runs and opens the calculator
- [ ] clean script runs and opens nothing
- [ ] format magic bytes verified (PDF `%PDF`, ZIP `PK`, PNG `\x89PNG`, 7z `7z\xbc\xaf`, OOXML `PK`)

## How MetaDefender catches this

Extension mismatch (MITRE ATT&CK [T1036.001](https://attack.mitre.org/techniques/T1036/001/))
is neutralized by **FileType Engine** before the file reaches the user — see the blog for the
full story and detection details.
