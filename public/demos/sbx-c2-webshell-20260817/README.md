# Web Shell / C2 Beacon After Citrix NetScaler CVE-2026-8452 Pre-Auth RCE (watchTowr PoC)

> **MetaDefender module:** MetaDefender Sandbox · **Difficulty:** intermediate · **Date:** 2026-08-17
>
> 

On August 14, 2026, security firm watchTowr Labs published a deep-dive analysis of CVE-2026-8452, a heap-based buffer overflow in Citrix NetScaler ADC and NetScaler Gateway that Citrix had disclosed on June 30 as a denial-of-service / suspicious-behavior flaw. watchTowr demonstrated unauthenticated remote code execution when the appliance is deployed as a SAML SP or IdP, and released a proof-of-concept that installs a web shell on the compromised appliance. JPCERT/CC (advisory JPCERT-AT-2026-0024, Aug 15) states no exploitation had been confirmed as of August 15 but warns that PoC-driven attacks are expected; Citrix's bulletin CTX696604 covers six CVEs including CVE-2026-8451, CVE-2026-8452, CVE-2026-8655, CVE-2026-10816, CVE-2026-10817 and CVE-2026-13474. This demo reproduces the Linux-side implant pattern such an exploit leaves behind on a compromised appliance: a payload script acting as a web-shell / C2 beacon that contacts a loopback endpoint as a stand-in for command-and-control traffic before opening the calculator as a benign proof of execution. MetaDefender Adaptive Sandbox executes the payload in isolation, observes the beaconing behavior and command line, and flags the implant before it ever phones home from production infrastructure.
**Real incident:** this attack technique corresponds to a real-world event — [read the daily digest](https://blog.andyshih.uk/en/blog/ciso-daily-digest-20260815/).

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
unzip sbx-c2-webshell-20260817.zip
cd sbx-c2-webshell-20260817
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
| malicious files | malicious-payload.sh → beacons to 127.0.0.1:9 (loopback, benign), then opens the calculator |
| clean files | no payload, no calculator, sanitized content |

> Behavior notes are verified by the QA suite on every build (see the QA checklist below).

---

## Safety

- ✅ All payloads are **benign by construction**: the only side effect is opening the calculator.
- ✅ No real malware, no network callbacks (any network reference targets `example.com` or loopback).
- ✅ Metascan demos use the **EICAR test string** — the universal, harmless AV test file.

## QA checklist (verified on this build)

- [ ] `unzip -t sbx-c2-webshell-20260817.zip` → no errors
- [ ] malicious script runs and opens the calculator
- [ ] clean script runs and opens nothing
- [ ] format magic bytes verified (PDF `%PDF`, ZIP `PK`, PNG `\x89PNG`, 7z `7z\xbc\xaf`, OOXML `PK`)

## How MetaDefender catches this

Web Shell / C2 beacon implant dropped after pre-auth RCE (Citrix NetScaler CVE-2026-8452 pattern, watchTowr PoC) (MITRE ATT&CK [T1505.003](https://attack.mitre.org/techniques/T1505.003/))
is neutralized by **MetaDefender Sandbox** before the file reaches the user — see the blog for the
full story and detection details.
