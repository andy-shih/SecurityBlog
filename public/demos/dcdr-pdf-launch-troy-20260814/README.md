# Lazarus Operation Dream Job: PDF Launch Action Dropping the Troy Backdoor (afd.sys Zero-Day CVE-2026-68820)

> **MetaDefender module:** Deep CDR · **Difficulty:** intermediate · **Date:** 2026-08-12
>
> Deep CDR (Content Disarm & Reconstruction) dismantles the file, removes executable/embedded content, and rebuilds a clean, safe version.

On August 11, 2026, Microsoft's August Patch Tuesday fixed 421 CVEs, including CVE-2026-68820 (CVSS 7.0) — a use-after-free in afd.sys, the Ancillary Function Driver behind WinSock, that lets an attacker escalate to SYSTEM. It is the only flaw Microsoft flagged as under active exploitation, and Check Point Research attributes it to North Korea's Lazarus Group in its Operation Dream Job campaign; CISA added it to KEV the same day with a federal fix deadline of August 25. Dream Job distributes a trojanized PDF viewer (SecurityPDF) that drops the Troy backdoor, targeting defense, aerospace, and aviation organizations in Europe and India. Post-exploitation chains the afd.sys zero-day with the FudModule rootkit to gain SYSTEM and disable EDR, while relays run on compromised Roundcube servers (CVE-2025-49113) and WordPress hosts rigged with the RelayShell PHP webshell. This demo ships a PDF whose OpenAction Launch entry invokes an external program the moment the file is opened — the same abuse pattern a Dream Job lure would carry — with the payload reduced to opening the calculator (safe, nothing destructive). MetaDefender Deep CDR parses the PDF, strips the Launch/OpenAction entries and all active content, and rebuilds a clean, fully functional document that cannot execute anything.
**Real incident:** this attack technique corresponds to a real-world event — [read the daily digest](https://blog.andyshih.uk/en/blog/ciso-daily-digest-20260812/).

---

## What's in this package

This demo is **Linux-only**. The zip contains two folders:

| Folder | Contents |
|---|---|
| `malicious/` | The attack file(s) — **benign**, the only effect is opening the calculator |
| `clean/` | The same file after MetaDefender processing — payload removed |

Files in `malicious/`: `malicious-invoice.pdf`

Files in `clean/`: `clean-invoice.pdf`



---

## How to run the demo (Linux)

### 1. Prepare

```bash
unzip dcdr-pdf-launch-troy-20260814.zip
cd dcdr-pdf-launch-troy-20260814
```

Requirements: a desktop Linux with a calculator (`gnome-calculator`, `kcalc`, or `xcalc`).
The payload script auto-detects which one is installed.

### 2. Show the attack (malicious)

- Run: `bash malicious-invoice.pdf` — the calculator opens (the visible impact).

**Expected result:** the calculator window opens. That is the demo's "visible impact"
— the benign stand-in for a real malware payload.

### 3. Show the protection (clean)

- Run: `bash clean-invoice.pdf` — nothing happens (payload removed).

**Expected result:** the file opens/behaves normally — no calculator, no execution.

---

## Expected behavior (file by file)

| File | What you should observe |
|---|---|
| malicious files | malicious-invoice.pdf → opening triggers the Launch action (reader-dependent) |
| clean files | no payload, no calculator, sanitized content |

> Behavior notes are verified by the QA suite on every build (see the QA checklist below).

---

## Safety

- ✅ All payloads are **benign by construction**: the only side effect is opening the calculator.
- ✅ No real malware, no network callbacks (any network reference targets `example.com` or loopback).
- ✅ Metascan demos use the **EICAR test string** — the universal, harmless AV test file.

## QA checklist (verified on this build)

- [ ] `unzip -t dcdr-pdf-launch-troy-20260814.zip` → no errors
- [ ] malicious script runs and opens the calculator
- [ ] clean script runs and opens nothing
- [ ] format magic bytes verified (PDF `%PDF`, ZIP `PK`, PNG `\x89PNG`, 7z `7z\xbc\xaf`, OOXML `PK`)

## How MetaDefender catches this

PDF OpenAction Launch executing an external program on open (User Execution: Malicious File) (MITRE ATT&CK [T1204.002](https://attack.mitre.org/techniques/T1204.002/))
is neutralized by **Deep CDR** before the file reaches the user — see the blog for the
full story and detection details.
