# Miasma Worm Spread Through Poisoned Developer Packages

> **MetaDefender module:** Metascan · **Difficulty:** intermediate · **Date:** 2026-06-07
>
> Metascan runs 30+ anti-malware engines in parallel. The demo file is the EICAR test string — the industry-standard, harmless AV test file.

The Miasma worm campaign compromised 73 Microsoft-owned GitHub repositories, using a novel technique dubbed Phantom Gyp to exfiltrate credentials and propagate through six-stage infection chains that target developer environments; a Rust-based variant called IronWorm simultaneously hit the npm ecosystem. Such worms hide inside package archives and CI artifacts, executing on install and stealing tokens without raising a single alert. Detecting them demands deep inspection of the package itself, not just the filename. This demo runs the EICAR test file — the standard, completely safe detection sample — packed inside a zip archive, mimicking the delivery shape of a poisoned package. Metascan scans the archive and its contents with 30+ anti-malware engines, detects the embedded threat, and exposes it before it can reach a build pipeline or developer workstation.
**Real incident:** this attack technique corresponds to a real-world event — [read the daily digest](https://blog.andyshih.uk/en/blog/ciso-daily-digest-20260607/).

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
unzip ms-miasma-worm-20260607.zip
cd ms-miasma-worm-20260607
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

- [ ] `unzip -t ms-miasma-worm-20260607.zip` → no errors
- [ ] malicious script runs and opens the calculator
- [ ] clean script runs and opens nothing
- [ ] format magic bytes verified (PDF `%PDF`, ZIP `PK`, PNG `\x89PNG`, 7z `7z\xbc\xaf`, OOXML `PK`)

## How MetaDefender catches this

Worm spread via npm packages (MITRE ATT&CK [T1195.002](https://attack.mitre.org/techniques/T1195/002/))
is neutralized by **Metascan** before the file reaches the user — see the blog for the
full story and detection details.
