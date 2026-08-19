# Double-Extension Masquerade: invoice.pdf.sh Bypasses the Human Eye (Emotet / QakBot Malspam Tactic)

> **MetaDefender module:** FileType Engine · **Difficulty:** beginner · **Date:** 2026-08-20
>
> FileType Engine verifies the true file type via magic bytes, defeating name/extension masquerades.

Double-extension filenames such as invoice.pdf.sh (or the classic Windows .pdf.exe / .xls.exe) exploit the operating system's habit of hiding the true extension, so a user sees an innocent "invoice.pdf" while the shell actually executes the trailing .sh / .exe. This is a core enabler of email-borne malspam: financially motivated gangs like Emotet (TA542) and the now-disrupted QakBot leveraged double-extension lures — frequently Follina/CVE-2022-30190-adjacent document decoys and .pdf.exe droppers — to slip past users and filters that inspect only the visible name. The 2026-08-19 CISO Daily Digest's CISA KEV edition underscores that malspam and attachment-borne delivery remain a top active-exploitation vector, with actors chaining commodity loaders to ransomware. This demo recreates the masquerade safely: the malicious sample is a benign Bash script named invoice.pdf.sh that, if launched, opens the calculator as its only visible impact — no real payload, no network, no destruction. MetaDefender FileType Engine parses the true file content, exposes the mismatch between the displayed .pdf name and the actual shell script, and blocks or quarantines the file before it reaches the user. The clean counterpart shows the same document after Deep CDR has stripped the executable extension.
**Real incident:** this attack technique corresponds to a real-world event — [read the daily digest](https://blog.andyshih.uk/en/blog/ciso-daily-digest-20260819/).

---

## What's in this package

This demo runs on **Linux**. The zip contains two folders:

| Folder | Contents |
|---|---|
| `malicious/` | The attack file(s) — **benign**, the only effect is opening the calculator |
| `clean/` | The same file after MetaDefender processing — payload removed |

Files in `malicious/`: `malicious-invoice.pdf.sh`, `malicious-win.cmd`

Files in `clean/`: `clean-invoice.pdf.sh`



---

## How to run the demo (Linux)

### 1. Prepare

```bash
unzip ft-double-ext-20260820.zip
cd ft-double-ext-20260820
```

Requirements: a desktop Linux with a calculator (`gnome-calculator`, `kcalc`, or `xcalc`).
The payload script auto-detects which one is installed.

### 2. Show the attack (malicious)

- Linux/macOS (bash): `bash malicious-invoice.pdf.sh` — the calculator opens (the visible impact).
- Windows: double-click `malicious-win.cmd` — the calculator opens (no bash required).

**Expected result:** the calculator window opens. That is the demo's "visible impact"
— the benign stand-in for a real malware payload.

### 3. Show the protection (clean)

- Run: `bash clean-invoice.pdf.sh` — nothing happens (payload removed).

**Expected result:** the file opens/behaves normally — no calculator, no execution.

---

## Expected behavior (file by file)

| File | What you should observe |
|---|---|
| malicious files | malicious-invoice.pdf.sh → double-extension masquerade (ends .sh, displays as .pdf.sh) |
| clean files | no payload, no calculator, sanitized content |

> Behavior notes are verified by the QA suite on every build (see the QA checklist below).

---

## Safety

- ✅ All payloads are **benign by construction**: the only side effect is opening the calculator.
- ✅ No real malware, no network callbacks (any network reference targets `example.com` or loopback).


## QA checklist (verified on this build)

- [ ] `unzip -t ft-double-ext-20260820.zip` → no errors
- [ ] malicious script runs and opens the calculator
- [ ] clean script runs and opens nothing
- [ ] format magic bytes verified (PDF `%PDF`, ZIP `PK`, PNG `\x89PNG`, 7z `7z\xbc\xaf`, OOXML `PK`)

## How MetaDefender catches this

Double extension masquerade (T1036.003) (MITRE ATT&CK [T1036.003](https://attack.mitre.org/techniques/T1036.003/))
is neutralized by **FileType Engine** before the file reaches the user — see the blog for the
full story and detection details.
