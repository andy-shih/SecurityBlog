# Employee PII in Spreadsheet Exports (Żabka Jira Breach Pattern)

> **MetaDefender module:** Proactive DLP · **Difficulty:** beginner · **Date:** 2026-08-05
>
> Proactive DLP inspects content for sensitive data (PII, PCI, PHI, credentials, keys) and blocks/redacts it.

On August 5, 2026, Polish convenience-store chain Żabka disclosed a breach of its technical infrastructure via an external service provider account; researcher Niebezpiecznik found 541,000 Jira work orders — packed with employee and contractor usernames and emails — offered for just €5,000 on a cybercrime forum. Days earlier, Switzerland's federal IT office (BIT) confirmed that credentials of roughly 200 accounts were compromised in its SharePoint breach, with CISA flagging CVE-2026-56164, CVE-2026-58644 and CVE-2026-50522 as actively exploited the same day. Both incidents show how bulk PII — names, national identifiers, phone numbers, corporate accounts — ends up packaged in spreadsheet exports and sold or reused for follow-on phishing. This demo ships an Excel export containing synthetic PII records (name, national ID, phone number — test values only, safe to run anywhere) in the exact shape of a stolen HR/IT export. MetaDefender Proactive DLP inspects file content — not just names or metadata — detects the PII patterns (national ID formats, phone numbers, personal-name columns), and blocks, quarantines or alerts before the file leaves the organization the way Żabka's Jira export did.
**Real incident:** this attack technique corresponds to a real-world event — [read the daily digest](https://blog.andyshih.uk/en/blog/ciso-daily-digest-20260805/).

---

## What's in this package

This demo is **Linux-only**. The zip contains two folders:

| Folder | Contents |
|---|---|
| `malicious/` | The attack file(s) — **benign**, the only effect is opening the calculator |
| `clean/` | The same file after MetaDefender processing — payload removed |

Files in `malicious/`: `malicious-export.xlsx`

Files in `clean/`: `clean-export.xlsx`



---

## How to run the demo (Linux)

### 1. Prepare

```bash
unzip dlp-pii-records-20260807.zip
cd dlp-pii-records-20260807
```

Requirements: a desktop Linux with a calculator (`gnome-calculator`, `kcalc`, or `xcalc`).
The payload script auto-detects which one is installed.

### 2. Show the attack (malicious)

- Run: `bash malicious-export.xlsx` — the calculator opens (the visible impact).

**Expected result:** the calculator window opens. That is the demo's "visible impact"
— the benign stand-in for a real malware payload.

### 3. Show the protection (clean)

- Run: `bash clean-export.xlsx` — nothing happens (payload removed).

**Expected result:** the file opens/behaves normally — no calculator, no execution.

---

## Expected behavior (file by file)

| File | What you should observe |
|---|---|
| malicious files | malicious-export.xlsx → contains synthetic national-ID rows (A123456789 …) |
| clean files | no payload, no calculator, sanitized content |

> Behavior notes are verified by the QA suite on every build (see the QA checklist below).

---

## Safety

- ✅ All payloads are **benign by construction**: the only side effect is opening the calculator.
- ✅ No real malware, no network callbacks (any network reference targets `example.com` or loopback).
- ✅ Metascan demos use the **EICAR test string** — the universal, harmless AV test file.

## QA checklist (verified on this build)

- [ ] `unzip -t dlp-pii-records-20260807.zip` → no errors
- [ ] malicious script runs and opens the calculator
- [ ] clean script runs and opens nothing
- [ ] format magic bytes verified (PDF `%PDF`, ZIP `PK`, PNG `\x89PNG`, 7z `7z\xbc\xaf`, OOXML `PK`)

## How MetaDefender catches this

PII records exfiltration (T1005) (MITRE ATT&CK [T1005](https://attack.mitre.org/techniques/T1005/))
is neutralized by **Proactive DLP** before the file reaches the user — see the blog for the
full story and detection details.
