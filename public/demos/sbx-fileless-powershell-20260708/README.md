# Fileless PowerShell Execution Caught in Memory

> **MetaDefender module:** 'Adaptive Sandbox' · **Difficulty:** advanced · **Date:** 2026-07-08
>
> 

ClickFix social engineering became the dominant malware delivery method between March and May 2026, according to ReliaQuest: fake browser error pages trick users into copying and running malicious scripts. Many of these scripts are fileless — PowerShell payloads that execute entirely in memory with no file dropped to disk, bypassing traditional file scanning. This demo runs a benign PowerShell command that only opens Calculator, delivered through a .docm container, to reproduce that execution pattern safely. Adaptive Sandbox detonates the sample in a controlled virtual machine and observes the in-memory behavior: script interpretation, process tree, and network calls. Even with no malicious file on disk, the sandbox's behavioral analysis exposes the full attack chain for detection and response.
**Real incident:** this attack technique corresponds to a real-world event — [read the daily digest](https://blog.andyshih.uk/en/blog/ciso-daily-digest-20260708/).

---

## What's in this package

This demo runs on **Linux, macOS and Windows** — the payload auto-detects the OS at
runtime (Linux: gnome-calculator/kcalc/xcalc; macOS: Calculator via osascript;
Windows with git-bash/MSYS: calc.exe). The zip contains two folders:

| Folder | Contents |
|---|---|
| `malicious/` | The attack file(s) — **benign**, the only effect is opening the calculator |
| `clean/` | The same file after MetaDefender processing — payload removed |

Files in `malicious/`: `malicious-payload.sh`, `malicious-win.cmd`

Files in `clean/`: `clean-payload.sh`



---

## How to run the demo (Linux)

### 1. Prepare

```bash
unzip sbx-fileless-powershell-20260708.zip
cd sbx-fileless-powershell-20260708
```

Requirements: a desktop Linux with a calculator (`gnome-calculator`, `kcalc`, or `xcalc`).
The payload script auto-detects which one is installed.

### 2. Show the attack (malicious)

- Linux/macOS (bash): `bash malicious-payload.sh` — the calculator opens (the visible impact).
- Windows: double-click `malicious-win.cmd` — the calculator opens (no bash required).

**Expected result:** the calculator window opens. That is the demo's "visible impact"
— the benign stand-in for a real malware payload.

### 3. Show the protection (clean)

- Run: `bash clean-payload.sh` — nothing happens (payload removed).

**Expected result:** the file opens/behaves normally — no calculator, no execution.

---

## Expected behavior (file by file)

| File | What you should observe |
|---|---|
| malicious files | malicious-payload.sh → runs a payload from an env var (no file dropped), then opens the calculator |
| clean files | no payload, no calculator, sanitized content |

> Behavior notes are verified by the QA suite on every build (see the QA checklist below).

---

## Safety

- ✅ All payloads are **benign by construction**: the only side effect is opening the calculator.
- ✅ No real malware, no network callbacks (any network reference targets `example.com` or loopback).
- ✅ Metascan demos use the **EICAR test string** — the universal, harmless AV test file.

## QA checklist (verified on this build)

- [ ] `unzip -t sbx-fileless-powershell-20260708.zip` → no errors
- [ ] malicious script runs and opens the calculator
- [ ] clean script runs and opens nothing
- [ ] format magic bytes verified (PDF `%PDF`, ZIP `PK`, PNG `\x89PNG`, 7z `7z\xbc\xaf`, OOXML `PK`)

## How MetaDefender catches this

Fileless PowerShell execution (MITRE ATT&CK [T1059.001](https://attack.mitre.org/techniques/T1059.001/))
is neutralized by **'Adaptive Sandbox'** before the file reaches the user — see the blog for the
full story and detection details.
