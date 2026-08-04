# Protected Health Information Detected in Medical Records

> **MetaDefender module:** Proactive DLP · **Difficulty:** beginner · **Date:** 2026-07-06
>
> Proactive DLP inspects content for sensitive data (PII, PCI, PHI, credentials, keys) and blocks/redacts it.

Medtronic recently disclosed a data breach impacting over 3.8 million individuals, with unauthorized access to systems holding personal and health information — a reminder that healthcare records remain a prime exfiltration target. Beyond perimeter breaches, sensitive PHI routinely leaks through files that are emailed, uploaded, or copied to removable media. This demo uses a synthetic medical-records document containing realistic PHI patterns: patient identifiers, diagnosis codes, and contact details. Proactive DLP inspects file content rather than just metadata, flagging these records against healthcare data policies the moment they enter the workflow. Security teams can then block transfer, quarantine the file, or trigger review before protected data leaves the organization.
**Real incident:** this attack technique corresponds to a real-world event — [read the daily digest](https://blog.andyshih.uk/en/blog/ciso-daily-digest-20260706/).

---

## What's in this package

This demo is **Linux-only**. The zip contains two folders:

| Folder | Contents |
|---|---|
| `malicious/` | The attack file(s) — **benign**, the only effect is opening the calculator |
| `clean/` | The same file after MetaDefender processing — payload removed |

Files in `malicious/`: `malicious-records.docx`

Files in `clean/`: `clean-records.docx`



---

## How to run the demo (Linux)

### 1. Prepare

```bash
unzip dlp-phi-records-20260706.zip
cd dlp-phi-records-20260706
```

Requirements: a desktop Linux with a calculator (`gnome-calculator`, `kcalc`, or `xcalc`).
The payload script auto-detects which one is installed.

### 2. Show the attack (malicious)

- Run: `bash malicious-records.docx` — the calculator opens (the visible impact).

**Expected result:** the calculator window opens. That is the demo's "visible impact"
— the benign stand-in for a real malware payload.

### 3. Show the protection (clean)

- Run: `bash clean-records.docx` — nothing happens (payload removed).

**Expected result:** the file opens/behaves normally — no calculator, no execution.

---

## Safety

- ✅ All payloads are **benign by construction**: the only side effect is opening the calculator.
- ✅ No real malware, no network callbacks (any network reference targets `example.com` or loopback).
- ✅ Metascan demos use the **EICAR test string** — the universal, harmless AV test file.

## QA checklist (verified on this build)

- [ ] `unzip -t dlp-phi-records-20260706.zip` → no errors
- [ ] malicious script runs and opens the calculator
- [ ] clean script runs and opens nothing
- [ ] format magic bytes verified (PDF `%PDF`, ZIP `PK`, PNG `\x89PNG`, 7z `7z\xbc\xaf`, OOXML `PK`)

## How MetaDefender catches this

PHI health records (MITRE ATT&CK [T1005](https://attack.mitre.org/techniques/T1005/))
is neutralized by **Proactive DLP** before the file reaches the user — see the blog for the
full story and detection details.
