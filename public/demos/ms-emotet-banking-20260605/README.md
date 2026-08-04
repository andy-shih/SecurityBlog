# Emotet-Style Banking Trojan in Phishing Documents

> **MetaDefender module:** Metascan · **Difficulty:** beginner · **Date:** 2026-06-05
>
> Metascan runs 30+ anti-malware engines in parallel. The demo file is the EICAR test string — the industry-standard, harmless AV test file.

Threat actors are exploiting the FIFA World Cup 2026 hype with fake ticketing sites, banking malware, and credential-harvesting campaigns, registering multiple scam domains that mimic official FIFA platforms. Banking trojans in this mold typically arrive as email attachments — a .docm document whose macro downloads the trojan, which then waits for the victim to visit a banking site before injecting fake login pages and stealing credentials and session tokens. Because trojans are continuously recompiled and obfuscated, single-engine detection is unreliable. This demo runs the EICAR test file, the industry-standard safe sample, inside a .docm container, so there is zero risk in handling it. Metascan aggregates 30+ anti-malware engines in a single scan, catching known banking trojan variants with multi-engine consensus while flagging suspicious macros for deeper inspection.
**Real incident:** this attack technique corresponds to a real-world event — [read the daily digest](https://blog.andyshih.uk/en/blog/ciso-daily-digest-20260605/).

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
unzip ms-emotet-banking-20260605.zip
cd ms-emotet-banking-20260605
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

## Expected behavior (file by file)

| File | What you should observe |
|---|---|
| malicious files | eicar.com / eicar.txt / eicar_demo.exe / malicious-eicar.zip → contain the EICAR test string; eicar.com is flagged by ClamAV as `Eicar-Test-Signature`; eicar_demo.exe runs under Wine and prints the EICAR string |
| clean files | no payload, no calculator, sanitized content |

> Behavior notes are verified by the QA suite on every build (see the QA checklist below).

---

## Safety

- ✅ All payloads are **benign by construction**: the only side effect is opening the calculator.
- ✅ No real malware, no network callbacks (any network reference targets `example.com` or loopback).
- ✅ Metascan demos use the **EICAR test string** — the universal, harmless AV test file.

## QA checklist (verified on this build)

- [ ] `unzip -t ms-emotet-banking-20260605.zip` → no errors
- [ ] malicious script runs and opens the calculator
- [ ] clean script runs and opens nothing
- [ ] format magic bytes verified (PDF `%PDF`, ZIP `PK`, PNG `\x89PNG`, 7z `7z\xbc\xaf`, OOXML `PK`)

## How MetaDefender catches this

Banking trojan (MITRE ATT&CK [T1204.002](https://attack.mitre.org/techniques/T1204/002/))
is neutralized by **Metascan** before the file reaches the user — see the blog for the
full story and detection details.
