# Known Malware Caught by 30+ Engines Simultaneously

> **MetaDefender module:** Metascan · **Difficulty:** beginner · **Date:** 2026-07-07
>
> Metascan runs 30+ anti-malware engines in parallel. The demo file is the EICAR test string — the industry-standard, harmless AV test file.

Today's malware landscape is crowded with evasive families — the Avalon AI-assisted framework bundles infostealer and ransomware capabilities, while Lazarus Group's npm campaign planted packages masquerading as the Rollup build tool to steal credentials and crypto-wallet data. No single vendor's signatures catch everything. This demo submits the EICAR test file — the industry-standard, completely safe malware simulation string — to Metascan, which runs it through 30+ anti-malware engines in parallel. The result is a single verdict report showing which engines detected the sample and how, giving analysts consensus-based confidence. Organizations get broad detection coverage without depending on any single vendor's update cadence.
**Real incident:** this attack technique corresponds to a real-world event — [read the daily digest](https://blog.andyshih.uk/en/blog/ciso-daily-digest-20260707/).

---

## What's in this package

This demo is **Linux-only**. The zip contains two folders:

| Folder | Contents |
|---|---|
| `malicious/` | The attack file(s) — **benign**, the only effect is opening the calculator |
| `clean/` | The same file after MetaDefender processing — payload removed |

Files in `malicious/`: `malicious-eicar.txt`, `malicious-eicar.zip`

Files in `clean/`: `clean-note.txt`

---

## How to run the demo (Linux)

### 1. Prepare

```bash
unzip ms-eicar-multiscan-20260707.zip
cd ms-eicar-multiscan-20260707
```

Requirements: a desktop Linux with a calculator (`gnome-calculator`, `kcalc`, or `xcalc`).
The payload script auto-detects which one is installed.

### 2. Show the attack (malicious)

- Run: `bash malicious-eicar.txt` — the calculator opens (the visible impact).
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

- [ ] `unzip -t ms-eicar-multiscan-20260707.zip` → no errors
- [ ] malicious script runs and opens the calculator
- [ ] clean script runs and opens nothing
- [ ] format magic bytes verified (PDF `%PDF`, ZIP `PK`, PNG `\x89PNG`, 7z `7z\xbc\xaf`, OOXML `PK`)

## How MetaDefender catches this

Known-malware multi-engine detection (MITRE ATT&CK [T1204.002](https://attack.mitre.org/techniques/T1204/002/))
is neutralized by **Metascan** before the file reaches the user — see the blog for the
full story and detection details.
