# Nexus Driver's-License Trove: Exported National-ID Spreadsheet Flagged by Proactive DLP

> **MetaDefender module:** Proactive DLP · **Difficulty:** intermediate · **Date:** 2026-09-08
> Proactive DLP inspects content for sensitive data (PII, PCI, PHI, credentials, keys) and blocks/redacts it.

KrebsOnSecurity reported on September 7 that a dark-web service calling itself Nexus is advertising one of the largest troves of North American identity documents ever seen: more than 170 million records including over 153 million U.S. and Canadian driver's licenses, roughly 10 million ID-card images, 3+ million travel and other international documents, and about 579,000 medical documents. Free samples included editor Brian Krebs's own Virginia license - front, back, infrared, and ultraviolet captures with date-time stamps, which researchers say points to document-scanning hardware at an identity-verification provider. After an FBI assistant director and researchers from two security firms were identified among the victims, the FBI's New Orleans field office opened an investigation; the trail leads to IDScan.net, whose merchant customers include Hertz, Target, FedEx, Motorola Solutions, Jack Henry, and Caesars Entertainment, though IDScan.net has not commented and the site was adding roughly 400,000 new license images every 24 hours. Whatever the final attribution, the exposure class is clear: identity PII that leaves an organization inside routine office files - an export, an attachment, a shared folder. This demo reproduces that boundary safely with synthetic data: malicious-export.xlsx is an everyday spreadsheet whose rows carry names, national-ID numbers, and phone numbers (Test User A-C, e.g. A123456789), the same government-issued-ID record class at the center of the Nexus trove; clean-export.xlsx is the same file after processing, sensitive fields redacted. MetaDefender Proactive DLP content-inspects the file for national-ID and PII patterns and blocks or redacts it before the data can be emailed, uploaded, or copied out (MITRE ATT&CK T1005 - data from local systems).
**Real incident:** this attack technique corresponds to a real-world event — [read the daily digest](https://blog.andyshih.uk/en/blog/ciso-daily-digest-20260907/).

---

## What's in this package

This demo ships a **static file sample — nothing executes**. The zip contains two folders:

| Folder | Contents |
|---|---|
| `malicious/` | The attack sample — a static document whose **content** carries the malicious payload (content-borne marker — no executable code) |
| `clean/` | The same content after MetaDefender processing — payload removed |

Files in `malicious/`: `malicious-export.xlsx`

Files in `clean/`: `clean-export.xlsx`



---

## How to run the demo (Linux)

### 1. Prepare

```bash
unzip dlp-pii-idscan-20260908.zip
```

### 2. Show the attack (malicious)

- Open/inspect `malicious/malicious-export.xlsx` — the malicious content (payload marker) is
  embedded in the file's data; nothing executes.

**Expected result:** the malicious content (payload marker) is present in
the file; with **Proactive DLP** in the pipeline, the file is flagged and blocked before it
reaches the user or an LLM.

### 3. Show the protection (clean)

- Open `clean/clean-export.xlsx` — no payload, sanitized content.

**Expected result:** the sanitized file is clean — no payload, nothing to flag.

---

## Expected behavior (file by file)

| File | What you should observe |
|---|---|
| malicious files | malicious-export.xlsx → contains synthetic national-ID rows (A123456789 …) |
| clean files | no payload, sanitized content |

> Behavior notes are verified by the QA suite on every build (see the QA checklist below).

---

## Safety

- ✅ All payloads are **benign by construction**: static text/data samples — **nothing executes**.
- ✅ No real malware, no network callbacks (any network reference targets `example.com` or loopback).


## QA checklist (verified on this build)

- [x] `unzip -t dlp-pii-idscan-20260908.zip` → no errors
- [x] malicious file carries the attack payload marker; clean file does not
- [x] no placeholder content in clean files
- [x] format magic bytes verified (PDF `%PDF`, ZIP `PK`, PNG `PNG`, 7z `7z¼¯`, OOXML `PK`)

## How MetaDefender catches this

PII collection and exposure: an exported spreadsheet of synthetic name / national-ID / phone rows, the identity-record class at the center of the Nexus driver's-license trove traced to IDScan.net (MITRE ATT&CK [T1005](https://attack.mitre.org/techniques/T1005/))
is neutralized by **Proactive DLP** before the file reaches the user — see the blog for the
full story and detection details.
