# Deliberately corrupted ZIP header evading simple scanners

> **MetaDefender module:** FileType Engine · **Difficulty:** advanced · **Date:** 2026-07-23
>
> FileType Engine verifies the true file type via magic bytes, defeating name/extension masquerades.

Obfuscated files hide real intent behind misdescribed structure. A deliberately corrupted ZIP header makes the file look broken or benign to lightweight tools, which give up and let it pass, while the actual container still holds embedded content ready to extract. Attackers also use header mismatches to blur the line between a document and a container — a .docx is itself a ZIP archive, so fiddling with the header can confuse scanners about what is really inside. In this demo a benign .docx is altered to emulate that evasion. The FileType Engine goes beyond surface headers, recovering the true file type from structural content and flagging inconsistencies. MetaDefender then routes the corrected identification to the appropriate deep-analysis engines for proper inspection.
**Real incident:** no same-day digest link (technique-focused demo).

---

## What's in this package

This demo is **Linux-only**. The zip contains two folders:

| Folder | Contents |
|---|---|
| `malicious/` | The attack file(s) — **benign**, the only effect is opening the calculator |
| `clean/` | The same file after MetaDefender processing — payload removed |

Files in `malicious/`: `malicious-doc.docx`

Files in `clean/`: `clean-doc.docx`



---

## How to run the demo (Linux)

### 1. Prepare

```bash
unzip ft-header-corrupt-20260723.zip
cd ft-header-corrupt-20260723
```

Requirements: a desktop Linux with a calculator (`gnome-calculator`, `kcalc`, or `xcalc`).
The payload script auto-detects which one is installed.

### 2. Show the attack (malicious)

- Run: `bash malicious-doc.docx` — the calculator opens (the visible impact).

**Expected result:** the calculator window opens. That is the demo's "visible impact"
— the benign stand-in for a real malware payload.

### 3. Show the protection (clean)

- Run: `bash clean-doc.docx` — nothing happens (payload removed).

**Expected result:** the file opens/behaves normally — no calculator, no execution.

---

## Expected behavior (file by file)

| File | What you should observe |
|---|---|
| malicious files | malicious-doc.docx → ZIP local-header magic corrupted (PK→XX) so tools mis-identify it |
| clean files | no payload, no calculator, sanitized content |

> Behavior notes are verified by the QA suite on every build (see the QA checklist below).

---

## Safety

- ✅ All payloads are **benign by construction**: the only side effect is opening the calculator.
- ✅ No real malware, no network callbacks (any network reference targets `example.com` or loopback).
- ✅ Metascan demos use the **EICAR test string** — the universal, harmless AV test file.

## QA checklist (verified on this build)

- [ ] `unzip -t ft-header-corrupt-20260723.zip` → no errors
- [ ] malicious script runs and opens the calculator
- [ ] clean script runs and opens nothing
- [ ] format magic bytes verified (PDF `%PDF`, ZIP `PK`, PNG `\x89PNG`, 7z `7z\xbc\xaf`, OOXML `PK`)

## How MetaDefender catches this

Corrupted header evasion (MITRE ATT&CK [T1027.001](https://attack.mitre.org/techniques/T1027/001/))
is neutralized by **FileType Engine** before the file reaches the user — see the blog for the
full story and detection details.
