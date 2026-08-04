# Hardcoded API Keys and DB Passwords in Config Files (Keyv npm Worm Pattern)

> **MetaDefender module:** Proactive DLP · **Difficulty:** beginner · **Date:** 2026-08-04
>
> Proactive DLP inspects content for sensitive data (PII, PCI, PHI, credentials, keys) and blocks/redacts it.

The Keyv npm worm — first seen in keyv@6.0.0 on August 4, 2026 — spread a credential-stealing preinstall script across hundreds of packages (SafeDep verified 353 poisoned versions across 79 package names; Aikido counts at least 868 packages across 1,381 versions), harvesting repository, registry, cloud and private-key material from developer and CI environments. The same week, 18 malicious npm packages impersonating Alibaba's private @ali-scoped lib-mtop package delivered a cross-platform RAT to developer machines. Both campaigns profit from secrets that sit in plaintext config files: hardcoded API keys, database passwords, registry tokens and .npmrc/.env entries that developers commit to repos and sync across machines. This demo ships a Python config file containing hardcoded API key and database password patterns (synthetic values only, safe to run anywhere). MetaDefender Proactive DLP inspects file content — not just names or metadata — detecting credential patterns such as API key formats, password assignments and token strings, then blocks, quarantines or alerts before secrets spread the way the Keyv worm's payload did.
**Real incident:** this attack technique corresponds to a real-world event — [read the daily digest](https://blog.andyshih.uk/en/blog/ciso-daily-digest-20260804/).

---

## What's in this package

This demo is **Linux-only**. The zip contains two folders:

| Folder | Contents |
|---|---|
| `malicious/` | The attack file(s) — **benign**, the only effect is opening the calculator |
| `clean/` | The same file after MetaDefender processing — payload removed |

Files in `malicious/`: `malicious-config.py`

Files in `clean/`: `clean-config.py`



---

## How to run the demo (Linux)

### 1. Prepare

```bash
unzip dlp-credentials-config-20260806.zip
cd dlp-credentials-config-20260806
```

Requirements: a desktop Linux with a calculator (`gnome-calculator`, `kcalc`, or `xcalc`).
The payload script auto-detects which one is installed.

### 2. Show the attack (malicious)

- Run: `bash malicious-config.py` — the calculator opens (the visible impact).

**Expected result:** the calculator window opens. That is the demo's "visible impact"
— the benign stand-in for a real malware payload.

### 3. Show the protection (clean)

- Run: `bash clean-config.py` — nothing happens (payload removed).

**Expected result:** the file opens/behaves normally — no calculator, no execution.

---

## Expected behavior (file by file)

| File | What you should observe |
|---|---|
| malicious files | malicious-config.py → contains hardcoded demo API_KEY / DB_PASSWORD |
| clean files | no payload, no calculator, sanitized content |

> Behavior notes are verified by the QA suite on every build (see the QA checklist below).

---

## Safety

- ✅ All payloads are **benign by construction**: the only side effect is opening the calculator.
- ✅ No real malware, no network callbacks (any network reference targets `example.com` or loopback).
- ✅ Metascan demos use the **EICAR test string** — the universal, harmless AV test file.

## QA checklist (verified on this build)

- [ ] `unzip -t dlp-credentials-config-20260806.zip` → no errors
- [ ] malicious script runs and opens the calculator
- [ ] clean script runs and opens nothing
- [ ] format magic bytes verified (PDF `%PDF`, ZIP `PK`, PNG `\x89PNG`, 7z `7z\xbc\xaf`, OOXML `PK`)

## How MetaDefender catches this

Credentials in config files (T1552.001) (MITRE ATT&CK [T1552.001](https://attack.mitre.org/techniques/T1552.001/))
is neutralized by **Proactive DLP** before the file reaches the user — see the blog for the
full story and detection details.
