# Electron App Ships Outdated Chromium with CVEs

> **MetaDefender module:** SBOM · **Difficulty:** advanced · **Date:** 2026-07-15
>
> SBOM analyzes the software components inside a file and cross-references them against vulnerability intelligence.

On July 15, 2026, security researchers reported that compromised AsyncAPI npm packages deployed multi-stage botnet malware targeting CI/CD pipelines and developer environments, exploiting the trust placed in widely used open-source packages. Desktop applications built on Electron face a similar supply-chain risk: they bundle their own Chromium runtime, and outdated bundles ship known vulnerabilities straight to the endpoint. This demo scans a benign Electron sample and its bundled components. MetaDefender SBOM generates a software bill of materials for the application, maps every bundled library to known CVE databases, and surfaces vulnerable components such as outdated Chromium before distribution.
**Real incident:** this attack technique corresponds to a real-world event — [read the daily digest](https://blog.andyshih.uk/en/blog/ciso-daily-digest-20260715/).

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
unzip sbom-vulnerable-electron-20260715.zip
cd sbom-vulnerable-electron-20260715
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
| malicious files | malicious-package.json → pins known-vulnerable versions (lodash 4.17.20 …) |
| clean files | no payload, no calculator, sanitized content |

> Behavior notes are verified by the QA suite on every build (see the QA checklist below).

---

## Safety

- ✅ All payloads are **benign by construction**: the only side effect is opening the calculator.
- ✅ No real malware, no network callbacks (any network reference targets `example.com` or loopback).
- ✅ Metascan demos use the **EICAR test string** — the universal, harmless AV test file.

## QA checklist (verified on this build)

- [ ] `unzip -t sbom-vulnerable-electron-20260715.zip` → no errors
- [ ] malicious script runs and opens the calculator
- [ ] clean script runs and opens nothing
- [ ] format magic bytes verified (PDF `%PDF`, ZIP `PK`, PNG `\x89PNG`, 7z `7z\xbc\xaf`, OOXML `PK`)

## How MetaDefender catches this

Vulnerable app framework (MITRE ATT&CK [T1195](https://attack.mitre.org/techniques/T1195/))
is neutralized by **SBOM** before the file reaches the user — see the blog for the
full story and detection details.
