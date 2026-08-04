# Sandbox Observes Mass File Encryption and Ransom Note Behavior

> **MetaDefender module:** Adaptive Sandbox · **Difficulty:** beginner · **Date:** 2026-06-06
>
> Adaptive Sandbox executes the file in an isolated environment and reports behavior (network, filesystem, processes).

The threat group tracked as Silent Ransom is escalating extortion attacks against US law firms, exfiltrating sensitive client data and threatening public disclosure after breaching networks through phishing, credential theft, and VPN exploitation. Once inside, ransomware operators typically deploy an encryptor that walks the filesystem, encrypting documents with a fast symmetric cipher, appending an extension, and dropping ransom notes across affected folders. The danger is that the encryptor is often a fresh build that no signature has seen. This demo uses a benign encryptor that only touches files inside a dedicated test directory, so nothing outside the sandbox is affected. The Adaptive Sandbox detonates the sample in an isolated Windows environment, observes the mass-encryption and ransom-note behaviors, and reports the malicious activity with behavioral indicators — no signature required.
**Real incident:** this attack technique corresponds to a real-world event — [read the daily digest](https://blog.andyshih.uk/en/blog/ciso-daily-digest-20260606/).

---

## What's in this package

This demo is **Linux-only**. The zip contains two folders:

| Folder | Contents |
|---|---|
| `malicious/` | The attack file(s) — **benign**, the only effect is opening the calculator |
| `clean/` | The same file after MetaDefender processing — payload removed |

Files in `malicious/`: `malicious-payload.sh`

Files in `clean/`: `clean-payload.sh`

---

## How to run the demo (Linux)

### 1. Prepare

```bash
unzip sbx-ransomware-encrypt-20260606.zip
cd sbx-ransomware-encrypt-20260606
```

Requirements: a desktop Linux with a calculator (`gnome-calculator`, `kcalc`, or `xcalc`).
The payload script auto-detects which one is installed.

### 2. Show the attack (malicious)

- Run: `bash malicious-payload.sh` — the calculator opens (the visible impact).

**Expected result:** the calculator window opens. That is the demo's "visible impact"
— the benign stand-in for a real malware payload.

### 3. Show the protection (clean)

- Run: `bash clean-payload.sh` — nothing happens (payload removed).

**Expected result:** the file opens/behaves normally — no calculator, no execution.

---

## Safety

- ✅ All payloads are **benign by construction**: the only side effect is opening the calculator.
- ✅ No real malware, no network callbacks (any network reference targets `example.com` or loopback).
- ✅ Metascan demos use the **EICAR test string** — the universal, harmless AV test file.

## QA checklist (verified on this build)

- [ ] `unzip -t sbx-ransomware-encrypt-20260606.zip` → no errors
- [ ] malicious script runs and opens the calculator
- [ ] clean script runs and opens nothing
- [ ] format magic bytes verified (PDF `%PDF`, ZIP `PK`, PNG `\x89PNG`, 7z `7z\xbc\xaf`, OOXML `PK`)

## How MetaDefender catches this

Ransomware file-encryption behavior (MITRE ATT&CK [T1486](https://attack.mitre.org/techniques/T1486/))
is neutralized by **Adaptive Sandbox** before the file reaches the user — see the blog for the
full story and detection details.
