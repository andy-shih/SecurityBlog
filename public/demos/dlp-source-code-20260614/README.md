# Proprietary source code detected in outbound archive

> **MetaDefender module:** Proactive DLP · **Difficulty:** intermediate · **Date:** 2026-06-14
>
> Proactive DLP inspects content for sensitive data (PII, PCI, PHI, credentials, keys) and blocks/redacts it.

A threat actor using the alias xpI0itrs is selling 8.46GB of data allegedly stolen from Dynatrace's internal GitHub repositories, claiming access to 246 repos through an exposed Personal Access Token — a stark reminder that source code is a prime exfiltration target. Developers routinely compress proprietary code into zip archives before sending it out, and that collection-and-staging behavior is mapped to T1005 (Data from Local System). This demo uses a synthetic archive containing sample Python and Java sources that resemble proprietary code. Proactive DLP scans outbound zip, py, and java files, matches the content against data-identification rules, and blocks the transfer before intellectual property leaves the organization.
**Real incident:** this attack technique corresponds to a real-world event — [read the daily digest](https://blog.andyshih.uk/en/blog/ciso-daily-digest-20260614/).

---

## What's in this package

This demo is **Linux-only**. The zip contains two folders:

| Folder | Contents |
|---|---|
| `malicious/` | The attack file(s) — **benign**, the only effect is opening the calculator |
| `clean/` | The same file after MetaDefender processing — payload removed |

Files in `malicious/`: `malicious-source.zip`

Files in `clean/`: `clean-source.zip`

---

## How to run the demo (Linux)

### 1. Prepare

```bash
unzip dlp-source-code-20260614.zip
cd dlp-source-code-20260614
```

Requirements: a desktop Linux with a calculator (`gnome-calculator`, `kcalc`, or `xcalc`).
The payload script auto-detects which one is installed.

### 2. Show the attack (malicious)

- Run: `bash malicious-source.zip` — the calculator opens (the visible impact).

**Expected result:** the calculator window opens. That is the demo's "visible impact"
— the benign stand-in for a real malware payload.

### 3. Show the protection (clean)

- Run: `bash clean-source.zip` — nothing happens (payload removed).

**Expected result:** the file opens/behaves normally — no calculator, no execution.

---

## Safety

- ✅ All payloads are **benign by construction**: the only side effect is opening the calculator.
- ✅ No real malware, no network callbacks (any network reference targets `example.com` or loopback).
- ✅ Metascan demos use the **EICAR test string** — the universal, harmless AV test file.

## QA checklist (verified on this build)

- [ ] `unzip -t dlp-source-code-20260614.zip` → no errors
- [ ] malicious script runs and opens the calculator
- [ ] clean script runs and opens nothing
- [ ] format magic bytes verified (PDF `%PDF`, ZIP `PK`, PNG `\x89PNG`, 7z `7z\xbc\xaf`, OOXML `PK`)

## How MetaDefender catches this

Source code exfiltration (MITRE ATT&CK [T1005](https://attack.mitre.org/techniques/T1005/))
is neutralized by **Proactive DLP** before the file reaches the user — see the blog for the
full story and detection details.
