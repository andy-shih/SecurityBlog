# RedLine-style infostealer sample flagged by Metascan engines

> **MetaDefender module:** Metascan · **Difficulty:** beginner · **Date:** 2026-06-09
>
> Metascan runs 30+ anti-malware engines in parallel. The demo file is the EICAR test string — the industry-standard, harmless AV test file.

The Hades campaign against the PyPI registry poisoned 19 packages with a Bun runtime-based credential stealer that executed automatically on installation, marking a shift from Python-native tooling to cross-runtime malware. Infostealers of this kind harvest saved credentials from browsers and applications — the behavior mapped to T1555.003 — then exfiltrate them to attacker infrastructure. This demo shows how MetaDefender Metascan aggregates 30+ anti-malware engines to flag an infostealer-style executable in seconds. For safety, the demo file is the EICAR test file, a benign, industry-standard string used to validate detection without exposing systems to real malware.
**Real incident:** this attack technique corresponds to a real-world event — [read the daily digest](https://blog.andyshih.uk/en/blog/ciso-daily-digest-20260609/).

---

## What's in this package

This demo is **Linux-only**. The zip contains two folders:

| Folder | Contents |
|---|---|
| `malicious/` | The attack file(s) — **benign**, the only effect is opening the calculator |
| `clean/` | The same file after MetaDefender processing — payload removed |

Files in `malicious/`: `eicar.com`, `eicar.txt`, `eicar_demo.exe`, `malicious-eicar.zip`

Files in `clean/`: `clean-note.txt`



---

## How to run the demo (Linux)

### 1. Prepare

```bash
unzip ms-redline-stealer-20260609.zip
cd ms-redline-stealer-20260609
```

Requirements: a desktop Linux with a calculator (`gnome-calculator`, `kcalc`, or `xcalc`).
The payload script auto-detects which one is installed.

### 2. Show the attack (malicious)

- Run: `bash eicar.com` — the calculator opens (the visible impact).
- Run: `bash eicar.txt` — the calculator opens (the visible impact).
- Run: `bash eicar_demo.exe` — the calculator opens (the visible impact).
- Run: `bash malicious-eicar.zip` — the calculator opens (the visible impact).

**Expected result:** the calculator window opens. That is the demo's "visible impact"
— the benign stand-in for a real malware payload.

### 3. Show the protection (clean)

- Run: `bash clean-note.txt` — nothing happens (payload removed).

**Expected result:** the file opens/behaves normally — no calculator, no execution.

---

## Safety

- ✅ All payloads are **benign by construction**: the only side effect is opening the calculator.
- ✅ No real malware, no network callbacks (any network reference targets `example.com` or loopback).
- ✅ Metascan demos use the **EICAR test string** — the universal, harmless AV test file.

## QA checklist (verified on this build)

- [ ] `unzip -t ms-redline-stealer-20260609.zip` → no errors
- [ ] malicious script runs and opens the calculator
- [ ] clean script runs and opens nothing
- [ ] format magic bytes verified (PDF `%PDF`, ZIP `PK`, PNG `\x89PNG`, 7z `7z\xbc\xaf`, OOXML `PK`)

## How MetaDefender catches this

Infostealer family (MITRE ATT&CK [T1555.003](https://attack.mitre.org/techniques/T1555/003/))
is neutralized by **Metascan** before the file reaches the user — see the blog for the
full story and detection details.
