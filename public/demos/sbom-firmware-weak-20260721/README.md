# Firmware image shipping outdated libraries flagged via SBOM

> **MetaDefender module:** SBOM · **Difficulty:** advanced · **Date:** 2026-07-21
>
> SBOM analyzes the software components inside a file and cross-references them against vulnerability intelligence.

Supply-chain compromise is pressing: this digest details the FakeGit campaign using roughly 7,600 fake GitHub repositories to distribute malware, alongside ENCFORGE ransomware that reaches AI model files through a vulnerable framework. Embedded firmware mirrors that risk — a device image quietly carrying outdated libraries becomes a soft target once exploits mature. In this demo a benign firmware sample is scanned to surface known-weak components buried inside the image. The SBOM module generates a software bill of materials for the firmware (bin/img), enumerating every packaged library and matching components against vulnerability data. Identified outdated libraries are flagged before deployment, so versioning exposure is visible and actionable instead of shipping unnoticed.
**Real incident:** this attack technique corresponds to a real-world event — [read the daily digest](https://blog.andyshih.uk/en/blog/ciso-daily-digest-20260721/).

---

## What's in this package

This demo is **Linux-only**. The zip contains two folders:

| Folder | Contents |
|---|---|
| `malicious/` | The attack file(s) — **benign**, the only effect is opening the calculator |
| `clean/` | The same file after MetaDefender processing — payload removed |

Files in `malicious/`: `malicious-firmware.bin`

Files in `clean/`: `clean-firmware.bin`



---

## How to run the demo (Linux)

### 1. Prepare

```bash
unzip sbom-firmware-weak-20260721.zip
cd sbom-firmware-weak-20260721
```

Requirements: a desktop Linux with a calculator (`gnome-calculator`, `kcalc`, or `xcalc`).
The payload script auto-detects which one is installed.

### 2. Show the attack (malicious)

- Run: `bash malicious-firmware.bin` — the calculator opens (the visible impact).

**Expected result:** the calculator window opens. That is the demo's "visible impact"
— the benign stand-in for a real malware payload.

### 3. Show the protection (clean)

- Run: `bash clean-firmware.bin` — nothing happens (payload removed).

**Expected result:** the file opens/behaves normally — no calculator, no execution.

---

## Safety

- ✅ All payloads are **benign by construction**: the only side effect is opening the calculator.
- ✅ No real malware, no network callbacks (any network reference targets `example.com` or loopback).
- ✅ Metascan demos use the **EICAR test string** — the universal, harmless AV test file.

## QA checklist (verified on this build)

- [ ] `unzip -t sbom-firmware-weak-20260721.zip` → no errors
- [ ] malicious script runs and opens the calculator
- [ ] clean script runs and opens nothing
- [ ] format magic bytes verified (PDF `%PDF`, ZIP `PK`, PNG `\x89PNG`, 7z `7z\xbc\xaf`, OOXML `PK`)

## How MetaDefender catches this

Vulnerable firmware libraries (MITRE ATT&CK [T1195](https://attack.mitre.org/techniques/T1195/))
is neutralized by **SBOM** before the file reaches the user — see the blog for the
full story and detection details.
