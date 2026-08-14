# Polyglot File Valid as Both PDF and EXE

> **MetaDefender module:** 'FileType Engine' · **Difficulty:** advanced · **Date:** 2026-07-03
>
> 

Polyglot files are crafted to parse as two different formats at once, allowing a single binary to slip past security tools that only inspect one file type. In this demo, an executable is built so it is simultaneously a valid PDF document and a valid Windows PE executable — a dual-format technique attackers use to smuggle payloads past email filters and download portals. The FileType Engine ignores file extensions and header heuristics that attackers can easily spoof, instead fingerprinting the file's actual content and reporting every format it genuinely matches. When the polyglot is submitted, the engine flags both the PDF and EXE interpretations, giving security teams the full attack surface before any processing decision is made.
**Real incident:** this attack technique corresponds to a real-world event — [read the daily digest](https://blog.andyshih.uk/en/blog/ciso-daily-digest-20260703/).

---

## What's in this package

This demo runs on **Linux, macOS and Windows** — the payload auto-detects the OS at
runtime (Linux: gnome-calculator/kcalc/xcalc; macOS: Calculator via osascript;
Windows with git-bash/MSYS: calc.exe). The zip contains two folders:

| Folder | Contents |
|---|---|
| `malicious/` | The attack file(s) — **benign**, the only effect is opening the calculator |
| `clean/` | The same file after MetaDefender processing — payload removed |

Files in `malicious/`: `malicious-polyglot.bin`, `malicious-win.cmd`

Files in `clean/`: `clean-polyglot.bin`



---

## How to run the demo (Linux)

### 1. Prepare

```bash
unzip ft-polyglot-pdf-exe-20260703.zip
cd ft-polyglot-pdf-exe-20260703
```

Requirements: a desktop Linux with a calculator (`gnome-calculator`, `kcalc`, or `xcalc`).
The payload script auto-detects which one is installed.

### 2. Show the attack (malicious)

- Linux/macOS (bash): `bash malicious-polyglot.bin` — the calculator opens (the visible impact).
- Windows: double-click `malicious-win.cmd` — the calculator opens (no bash required).

**Expected result:** the calculator window opens. That is the demo's "visible impact"
— the benign stand-in for a real malware payload.

### 3. Show the protection (clean)

- Open `clean-polyglot.bin` — no payload, no calculator.

**Expected result:** the file opens/behaves normally — no calculator, no execution.

---

## Expected behavior (file by file)

| File | What you should observe |
|---|---|
| malicious files | malicious-polyglot.bin → valid as BOTH a shell script (runs) and a ZIP (unzip -t passes) |
| clean files | no payload, no calculator, sanitized content |

> Behavior notes are verified by the QA suite on every build (see the QA checklist below).

---

## Safety

- ✅ All payloads are **benign by construction**: the only side effect is opening the calculator.
- ✅ No real malware, no network callbacks (any network reference targets `example.com` or loopback).
- ✅ Metascan demos use the **EICAR test string** — the universal, harmless AV test file.

## QA checklist (verified on this build)

- [ ] `unzip -t ft-polyglot-pdf-exe-20260703.zip` → no errors
- [ ] malicious script runs and opens the calculator
- [ ] clean script runs and opens nothing
- [ ] format magic bytes verified (PDF `%PDF`, ZIP `PK`, PNG `\x89PNG`, 7z `7z\xbc\xaf`, OOXML `PK`)

## How MetaDefender catches this

Polyglot PDF/EXE (MITRE ATT&CK [T1036.005](https://attack.mitre.org/techniques/T1036.005/))
is neutralized by **'FileType Engine'** before the file reaches the user — see the blog for the
full story and detection details.
