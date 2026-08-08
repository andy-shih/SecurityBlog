# SBOM Analysis Flags Vulnerable npm Dependencies in the WEL1DROPPER Wave

> **MetaDefender module:** SBOM · **Difficulty:** intermediate · **Date:** 2026-08-08
>
> SBOM analyzes the software components inside a file and cross-references them against vulnerability intelligence.

On August 8, 2026, researcher Paul McCarty (OpenSourceMalware) detailed a new npm supply-chain campaign: nearly 800 malicious packages using "AI slop" and randomly generated typosquat names. Unlike lifecycle-hook attacks, the packages instruct developers to load them with require(), executing a downloader named WEL1DROPPER that profiles the host OS and CPU architecture and fetches a compatible RAT or infostealer payload from three Cloudflare Workers hosts — spanning Windows, macOS and Linux. The same blind spot that let those packages slip into registries and CI pipelines lives in every dependency tree: pinned packages with known, patchable vulnerabilities. This demo ships a synthetic application manifest whose dependency list pins lodash 4.17.20 (CVE-2021-23337, command injection), minimist 1.2.5 (CVE-2021-44906, prototype pollution) and async 2.6.3 (CVE-2021-43138, prototype pollution) — alongside benign metadata; nothing real is downloaded. MetaDefender SBOM generates a software bill of materials, cross-references every dependency against vulnerability and threat intelligence, pinpoints the poisoned packages and their versions, and reports the exposure path, so security teams can block a release before a compromised component ships.
**Real incident:** this attack technique corresponds to a real-world event — [read the daily digest](https://blog.andyshih.uk/en/blog/ciso-daily-digest-20260808/).

---

## What's in this package

This demo is **Linux-only**. The zip contains two folders:

| Folder | Contents |
|---|---|
| `malicious/` | The attack file(s) — **benign**, the only effect is opening the calculator |
| `clean/` | The same file after MetaDefender processing — payload removed |

Files in `malicious/`: `malicious-deps.zip`, `malicious-package.json`

Files in `clean/`: `clean-package.json`



---

## How to run the demo (Linux)

### 1. Prepare

```bash
unzip sbom-malicious-wel1dropper-20260810.zip
cd sbom-malicious-wel1dropper-20260810
```

Requirements: a desktop Linux with a calculator (`gnome-calculator`, `kcalc`, or `xcalc`).
The payload script auto-detects which one is installed.

### 2. Show the attack (malicious)

- Run: `bash malicious-deps.zip` — the calculator opens (the visible impact).
- Run: `bash malicious-package.json` — the calculator opens (the visible impact).

**Expected result:** the calculator window opens. That is the demo's "visible impact"
— the benign stand-in for a real malware payload.

### 3. Show the protection (clean)

- Run: `bash clean-package.json` — nothing happens (payload removed).

**Expected result:** the file opens/behaves normally — no calculator, no execution.

---

## Expected behavior (file by file)

| File | What you should observe |
|---|---|
| malicious files | malicious-package.json → pins known-vulnerable versions (lodash 4.17.20, minimist 1.2.5, async 2.6.3) |
| clean files | no payload, no calculator, sanitized content |

> Behavior notes are verified by the QA suite on every build (see the QA checklist below).

---

## Safety

- ✅ All payloads are **benign by construction**: the only side effect is opening the calculator.
- ✅ No real malware, no network callbacks (any network reference targets `example.com` or loopback).
- ✅ Metascan demos use the **EICAR test string** — the universal, harmless AV test file.

## QA checklist (verified on this build)

- [ ] `unzip -t sbom-malicious-wel1dropper-20260810.zip` → no errors
- [ ] malicious script runs and opens the calculator
- [ ] clean script runs and opens nothing
- [ ] format magic bytes verified (PDF `%PDF`, ZIP `PK`, PNG `\x89PNG`, 7z `7z\xbc\xaf`, OOXML `PK`)

## How MetaDefender catches this

Malicious package in dependency tree (T1195.002) (MITRE ATT&CK [T1195.002](https://attack.mitre.org/techniques/T1195.002/))
is neutralized by **SBOM** before the file reaches the user — see the blog for the
full story and detection details.
