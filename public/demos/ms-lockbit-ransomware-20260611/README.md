# LockBit-style ransomware binary caught by signature engines

> **MetaDefender module:** Metascan · **Difficulty:** beginner · **Date:** 2026-06-11
>
> Metascan runs 30+ anti-malware engines in parallel. The demo file is the EICAR test string — the industry-standard, harmless AV test file.

The Gentlemen ransomware group has claimed 478 victims, and Krebs on Security published a deep-dive investigation into its leadership and operations — evidence of how prolific file-encrypting extortion has become. Ransomware binaries typically enumerate and encrypt local and network files, demanding payment for the decryption key, an impact technique mapped to T1486. This demo shows how MetaDefender Metascan applies signatures and heuristics from 30+ anti-malware engines to catch a ransomware-style executable at the gateway before it can run. The demo file is the EICAR test string, a safe, industry-standard sample used to verify detection without deploying actual ransomware.
**Real incident:** this attack technique corresponds to a real-world event — [read the daily digest](https://blog.andyshih.uk/en/blog/ciso-daily-digest-20260611/).

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
unzip ms-lockbit-ransomware-20260611.zip
cd ms-lockbit-ransomware-20260611
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

- [ ] `unzip -t ms-lockbit-ransomware-20260611.zip` → no errors
- [ ] malicious script runs and opens the calculator
- [ ] clean script runs and opens nothing
- [ ] format magic bytes verified (PDF `%PDF`, ZIP `PK`, PNG `\x89PNG`, 7z `7z\xbc\xaf`, OOXML `PK`)

## How MetaDefender catches this

Ransomware family (MITRE ATT&CK [T1486](https://attack.mitre.org/techniques/T1486/))
is neutralized by **Metascan** before the file reaches the user — see the blog for the
full story and detection details.
