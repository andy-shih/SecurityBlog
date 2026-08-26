# Supply-Chain Polyglot — RedC2 4.0 & the 24-Package npm Campaign Hide a Dropper That Is Both Script and ZIP

> **MetaDefender module:** FileType Engine · **Difficulty:** intermediate · **Date:** 2026-08-27
>
> FileType Engine verifies the true file type via magic bytes, defeating name/extension masquerades.

Polyglot (dual-format) smuggling is a quiet supply-chain favorite, and on 2026-08-25 it ran alongside CISA adding CVE-2026-21962 (Oracle WebLogic, CVSS 10.0) to its KEV catalog — yet perimeter patches do nothing for the stage-2 loaders that already reach developer endpoints. In August 2026, two campaigns weaponized packaging formats: 24 malicious npm packages that pull second-stage payloads from unpkg mirrors behind fake Cloudflare CAPTCHA pages (The Hacker News, 2026-08-24), and the RedC2 4.0 framework that backdoors Linux developers through trojanized npm releases (iThome, 2026-08). An attacker crafts ONE artifact that parses as BOTH a genuine shell script AND a valid ZIP (npm) archive, so any control keyed to a single format — extension, magic bytes, or an 'is this a script?' heuristic — sees only the benign half and lets the disguised loader through. This demo reproduces the trick safely: the malicious sample is a calculator-only Bash script prepended to a real ZIP, so the file is simultaneously executable as a script AND openable as an archive; if launched, it only opens the calculator — no real payload, no network, no destruction. MetaDefender FileType Engine fingerprints the file's actual content instead of trusting one declared format, reports every format it genuinely matches (script + archive), and blocks it before execution — the same control that would neutralize the polyglot npm droppers behind the 24-package campaign and RedC2 4.0.
**Real incident:** this attack technique corresponds to a real-world event — [read the daily digest](https://blog.andyshih.uk/en/blog/ciso-daily-digest-20260825/).

---

## What's in this package

This demo runs on **Linux**. The zip contains two folders:

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
unzip ft-polyglot-20260827.zip
cd ft-polyglot-20260827
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


## QA checklist (verified on this build)

- [ ] `unzip -t ft-polyglot-20260827.zip` → no errors
- [ ] malicious script runs and opens the calculator
- [ ] clean script runs and opens nothing
- [ ] format magic bytes verified (PDF `%PDF`, ZIP `PK`, PNG `\x89PNG`, 7z `7z\xbc\xaf`, OOXML `PK`)

## How MetaDefender catches this

Polyglot file valid as both a shell script and a ZIP archive (T1036.005) (MITRE ATT&CK [T1036.005](https://attack.mitre.org/techniques/T1036.005/))
is neutralized by **FileType Engine** before the file reaches the user — see the blog for the
full story and detection details.
