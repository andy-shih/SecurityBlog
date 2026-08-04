# SBOM Analysis Surfaces Malicious npm Package in App Dependencies

> **MetaDefender module:** SBOM · **Difficulty:** intermediate · **Date:** 2026-06-02
>
> SBOM analyzes the software components inside a file and cross-references them against vulnerability intelligence.

The Miasma supply chain attack compromised official Red Hat npm packages, with the Shai-Hulud threat group injecting malicious code into otherwise legitimate packages to deploy a credential-stealing worm. Once installed, the worm harvested GitHub tokens, cloud provider credentials, and environment variables, then spread autonomously through the dependency chain. Detecting such implants inside a sprawling dependency tree is exactly what SBOM analysis is built for. This demo uses a synthetic application manifest whose dependency list includes a package flagged as malicious, alongside benign metadata — nothing real is downloaded. The SBOM module cross-references every dependency against threat intelligence, pinpoints the poisoned package and its version, and reports the exposure path, so security teams can block the release before the compromised component ships.
**Real incident:** this attack technique corresponds to a real-world event — [read the daily digest](https://blog.andyshih.uk/en/blog/ciso-daily-digest-20260602/).

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
unzip sbom-malicious-npm-20260602.zip
cd sbom-malicious-npm-20260602
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

## Safety

- ✅ All payloads are **benign by construction**: the only side effect is opening the calculator.
- ✅ No real malware, no network callbacks (any network reference targets `example.com` or loopback).
- ✅ Metascan demos use the **EICAR test string** — the universal, harmless AV test file.

## QA checklist (verified on this build)

- [ ] `unzip -t sbom-malicious-npm-20260602.zip` → no errors
- [ ] malicious script runs and opens the calculator
- [ ] clean script runs and opens nothing
- [ ] format magic bytes verified (PDF `%PDF`, ZIP `PK`, PNG `\x89PNG`, 7z `7z\xbc\xaf`, OOXML `PK`)

## How MetaDefender catches this

Malicious package in dependency tree (MITRE ATT&CK [T1195.002](https://attack.mitre.org/techniques/T1195/002/))
is neutralized by **SBOM** before the file reaches the user — see the blog for the
full story and detection details.
