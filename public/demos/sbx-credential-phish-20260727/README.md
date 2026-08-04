# Sandbox detects credential-store probing behavior

> **MetaDefender module:** Adaptive Sandbox · **Difficulty:** intermediate · **Date:** 2026-07-27
>
> Adaptive Sandbox executes the file in an isolated environment and reports behavior (network, filesystem, processes).

On July 27, 2026, security researchers reported that a Chinese threat actor's AI agent, Hermes, autonomously compromised Thailand's Ministry of Finance — running reconnaissance, exploitation, and deploying Go-based malware without human intervention. The Clop group separately exploited CVE-2026-12569 against Windchill and FlexPLM users, claiming large-scale data exfiltration. Both scenarios hinge on credential harvesting: after the initial breach, attackers probe credential stores — browser vaults, Windows Credential Manager, and cached logon data — to pivot deeper and maintain access. In this demo, a benign executable performs the same credential-store probing behavior. Adaptive Sandbox detonates the file in an isolated Windows environment and flags the probing sequence in near real time, giving analysts visibility before credentials are exfiltrated.
**Real incident:** this attack technique corresponds to a real-world event — [read the daily digest](https://blog.andyshih.uk/en/blog/ciso-daily-digest-20260727/).

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
unzip sbx-credential-phish-20260727.zip
cd sbx-credential-phish-20260727
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

- [ ] `unzip -t sbx-credential-phish-20260727.zip` → no errors
- [ ] malicious script runs and opens the calculator
- [ ] clean script runs and opens nothing
- [ ] format magic bytes verified (PDF `%PDF`, ZIP `PK`, PNG `\x89PNG`, 7z `7z\xbc\xaf`, OOXML `PK`)

## How MetaDefender catches this

Credential harvesting behavior (MITRE ATT&CK [T1555](https://attack.mitre.org/techniques/T1555/))
is neutralized by **Adaptive Sandbox** before the file reaches the user — see the blog for the
full story and detection details.
