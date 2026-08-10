# Corrupted-Header Archive Weaponizing ClamAV Parser Flaws (CVE-2025-8088, CVE-2026-20337/38)

> **MetaDefender module:** FileType Engine · **Difficulty:** intermediate · **Date:** 2026-08-10
>
> FileType Engine verifies the true file type via magic bytes, defeating name/extension masquerades.

On August 7, 2026, ClamAV 1.5.4 / 1.4.6 shipped fixes for eight high-risk flaws in its ZIP, GPT, PDF, Mach-O, and XAR parsers — several of which can crash the scan service outright. The most severe, CVE-2025-8088 in the UnRAR library (CVSS 8.2), plus two flaws with public proof-of-concept code (CVE-2026-20337, CVE-2026-20338), put every single-engine scanner at risk: one malformed archive header is enough to knock out the only engine in the pipeline and let the file pass. Cisco's advisory confirms the impact on Secure Endpoint Connector deployments (High on Windows). This demo ships a .docx — itself a ZIP container — whose local file header magic has been deliberately corrupted (the PK signature replaced) to emulate the malformed-archive pattern that triggers parser weaknesses in single-engine products. OPSWAT MetaDefender's FileType Engine ignores the broken surface header and recovers the true file type from structural content, and the 30+ engine Multiscan pipeline means a flaw in any one parser — including ClamAV itself — never decides the verdict on its own.
**Real incident:** this attack technique corresponds to a real-world event — [read the daily digest](https://blog.andyshih.uk/en/blog/ciso-daily-digest-20260810/).

---

## What's in this package

This demo is **Linux-only**. The zip contains two folders:

| Folder | Contents |
|---|---|
| `malicious/` | The attack file(s) — **benign**, the only effect is opening the calculator |
| `clean/` | The same file after MetaDefender processing — payload removed |

Files in `malicious/`: `malicious-doc.docx`

Files in `clean/`: `clean-doc.docx`



---

## How to run the demo (Linux)

### 1. Prepare

```bash
unzip ft-header-corrupt-clamav-20260812.zip
cd ft-header-corrupt-clamav-20260812
```

Requirements: a desktop Linux with a calculator (`gnome-calculator`, `kcalc`, or `xcalc`).
The payload script auto-detects which one is installed.

### 2. Show the attack (malicious)

- Run: `bash malicious-doc.docx` — the calculator opens (the visible impact).

**Expected result:** the calculator window opens. That is the demo's "visible impact"
— the benign stand-in for a real malware payload.

### 3. Show the protection (clean)

- Run: `bash clean-doc.docx` — nothing happens (payload removed).

**Expected result:** the file opens/behaves normally — no calculator, no execution.

---

## Expected behavior (file by file)

| File | What you should observe |
|---|---|
| malicious files | malicious-doc.docx → ZIP local-header magic corrupted (PK→XX) so tools mis-identify it |
| clean files | no payload, no calculator, sanitized content |

> Behavior notes are verified by the QA suite on every build (see the QA checklist below).

---

## Safety

- ✅ All payloads are **benign by construction**: the only side effect is opening the calculator.
- ✅ No real malware, no network callbacks (any network reference targets `example.com` or loopback).
- ✅ Metascan demos use the **EICAR test string** — the universal, harmless AV test file.

## QA checklist (verified on this build)

- [ ] `unzip -t ft-header-corrupt-clamav-20260812.zip` → no errors
- [ ] malicious script runs and opens the calculator
- [ ] clean script runs and opens nothing
- [ ] format magic bytes verified (PDF `%PDF`, ZIP `PK`, PNG `\x89PNG`, 7z `7z\xbc\xaf`, OOXML `PK`)

## How MetaDefender catches this

Malformed archive header exploiting parser flaws (single-engine scan evasion) (MITRE ATT&CK [T1027.001](https://attack.mitre.org/techniques/T1027.001/))
is neutralized by **FileType Engine** before the file reaches the user — see the blog for the
full story and detection details.
