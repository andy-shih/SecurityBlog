# Remcos-style RAT sample flagged by multi-engine scan

> **MetaDefender module:** Metascan · **Difficulty:** beginner · **Date:** 2026-06-23
>
> Metascan runs 30+ anti-malware engines in parallel. The demo file is the EICAR test string — the industry-standard, harmless AV test file.

Threat actors published malicious npm packages disguised as PostCSS development tools that install a Windows Remote Access Trojan on developer workstations, giving persistent access, credential theft, and lateral movement into internal development infrastructure. Remote access trojans such as Remcos establish command-and-control sessions that let operators control the machine as if seated in front of it (MITRE T1219). Because RAT binaries are continuously recompiled and repacked, no single antivirus vendor catches every variant. Metascan addresses this by running the sample against 30+ anti-malware engines in parallel, aggregating verdicts into a single risk score so detection gaps in any one engine are covered by the others. This demo uses the EICAR test file, a universally recognized and completely safe signature-checking artifact.
**Real incident:** this attack technique corresponds to a real-world event — [read the daily digest](https://blog.andyshih.uk/en/blog/ciso-daily-digest-20260623/).

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
unzip ms-remcos-rat-20260623.zip
cd ms-remcos-rat-20260623
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

- [ ] `unzip -t ms-remcos-rat-20260623.zip` → no errors
- [ ] malicious script runs and opens the calculator
- [ ] clean script runs and opens nothing
- [ ] format magic bytes verified (PDF `%PDF`, ZIP `PK`, PNG `\x89PNG`, 7z `7z\xbc\xaf`, OOXML `PK`)

## How MetaDefender catches this

Remote access trojan (MITRE ATT&CK [T1219](https://attack.mitre.org/techniques/T1219/))
is neutralized by **Metascan** before the file reaches the user — see the blog for the
full story and detection details.
