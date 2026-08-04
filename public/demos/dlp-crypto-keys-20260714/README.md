# Private Keys and Certificates Leak via Files

> **MetaDefender module:** Proactive DLP · **Difficulty:** advanced · **Date:** 2026-07-14
>
> Proactive DLP inspects content for sensitive data (PII, PCI, PHI, credentials, keys) and blocks/redacts it.

On July 14, 2026, researchers at CerebLab showed that xAI's Grok Build CLI uploaded complete Git repositories — including .env files with secrets, API keys, and credentials — to a Google Cloud Storage bucket controlled by xAI, far more data than the tool required. Cryptographic material is also routinely smuggled in documents, config files, and code as plain text or base64. This demo uses synthetic key material to reproduce the exposure pattern safely. MetaDefender Proactive DLP inspects file content in transit, recognizes PEM certificates, private keys, and other credential patterns, and blocks or redacts the transfer before secrets leave the organization.
**Real incident:** this attack technique corresponds to a real-world event — [read the daily digest](https://blog.andyshih.uk/en/blog/ciso-daily-digest-20260714/).

---

## What's in this package

This demo is **Linux-only**. The zip contains two folders:

| Folder | Contents |
|---|---|
| `malicious/` | The attack file(s) — **benign**, the only effect is opening the calculator |
| `clean/` | The same file after MetaDefender processing — payload removed |

Files in `malicious/`: `malicious-keys.txt`

Files in `clean/`: `clean-keys.txt`



---

## How to run the demo (Linux)

### 1. Prepare

```bash
unzip dlp-crypto-keys-20260714.zip
cd dlp-crypto-keys-20260714
```

Requirements: a desktop Linux with a calculator (`gnome-calculator`, `kcalc`, or `xcalc`).
The payload script auto-detects which one is installed.

### 2. Show the attack (malicious)

- Run: `bash malicious-keys.txt` — the calculator opens (the visible impact).

**Expected result:** the calculator window opens. That is the demo's "visible impact"
— the benign stand-in for a real malware payload.

### 3. Show the protection (clean)

- Run: `bash clean-keys.txt` — nothing happens (payload removed).

**Expected result:** the file opens/behaves normally — no calculator, no execution.

---

## Expected behavior (file by file)

| File | What you should observe |
|---|---|
| malicious files | malicious-keys.txt → contains key-material markers (PRIVATE KEY) |
| clean files | no payload, no calculator, sanitized content |

> Behavior notes are verified by the QA suite on every build (see the QA checklist below).

---

## Safety

- ✅ All payloads are **benign by construction**: the only side effect is opening the calculator.
- ✅ No real malware, no network callbacks (any network reference targets `example.com` or loopback).
- ✅ Metascan demos use the **EICAR test string** — the universal, harmless AV test file.

## QA checklist (verified on this build)

- [ ] `unzip -t dlp-crypto-keys-20260714.zip` → no errors
- [ ] malicious script runs and opens the calculator
- [ ] clean script runs and opens nothing
- [ ] format magic bytes verified (PDF `%PDF`, ZIP `PK`, PNG `\x89PNG`, 7z `7z\xbc\xaf`, OOXML `PK`)

## How MetaDefender catches this

Cryptographic key exposure (MITRE ATT&CK [T1552.004](https://attack.mitre.org/techniques/T1552/004/))
is neutralized by **Proactive DLP** before the file reaches the user — see the blog for the
full story and detection details.
