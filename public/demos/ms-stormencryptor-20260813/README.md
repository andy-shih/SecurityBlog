# StormEncryptor Ransomware: China-linked Storm-1175's Rapid-Encryption Kit (N-able CVE-2026-18577)

> **MetaDefender module:** Metascan · **Difficulty:** intermediate · **Date:** 2026-08-11
>
> Metascan runs 30+ anti-malware engines in parallel. The demo file is the EICAR test string — the industry-standard, harmless AV test file.

On August 2, 2026, Microsoft Threat Intelligence observed the China-linked, financially motivated group Storm-1175 — previously associated with the Medusa ransomware ecosystem — start deploying a new C++ ransomware family it named StormEncryptor. The payload appends the .encrypted extension to victim files and drops a !!!README_FIRST!!!.txt ransom note on every encrypted directory. Microsoft assesses initial access likely came through CVE-2026-18577, the patch-bypass of the N-able N-central auth-bypass flaw CVE-2026-18556, both listed by CISA as actively exploited; Huntress and Sophos have confirmed intrusions against N-central customers. Post-compromise, Storm-1175 abuses AnyDesk and SimpleHelp for persistent remote access, runs Advanced IP Scanner for discovery, and dumps LSASS with Mimikatz — moving from access to exfiltration and encryption within days. This demo ships EICAR test files — a classic eicar.com, an eicar.txt, a compiled Windows PE embedding the EICAR string, and a ZIP-wrapped EICAR — standing in for the ransomware binary and staged payloads, plus a clean control file (no real malware, nothing destructive). MetaDefender Multiscan runs 30+ engines (including ClamAV) over every variant in one pass and flags them all, showing how an encryption campaign is stopped at the file boundary — at the gateway, before StormEncryptor ever touches a disk.
**Real incident:** this attack technique corresponds to a real-world event — [read the daily digest](https://blog.andyshih.uk/en/blog/ciso-daily-digest-20260811/).

---

## What's in this package

This demo is **Linux-only**. The zip contains two folders:

| Folder | Contents |
|---|---|
| `malicious/` | The attack file(s) — **benign**, the only effect is opening the calculator |
| `clean/` | The same file after MetaDefender processing — payload removed |

Files in `malicious/`: `eicar.com`, `eicar.txt`, `eicar_demo.exe`, `malicious-eicar.zip`

Files in `clean/`: `clean-note.txt`



---

## How to run the demo (Linux)

### 1. Prepare

```bash
unzip ms-stormencryptor-20260813.zip
cd ms-stormencryptor-20260813
```

Requirements: a desktop Linux with a calculator (`gnome-calculator`, `kcalc`, or `xcalc`).
The payload script auto-detects which one is installed.

### 2. Show the attack (malicious)

- Run: `bash eicar.com` — the calculator opens (the visible impact).
- Run: `bash eicar.txt` — the calculator opens (the visible impact).
- Run: `bash eicar_demo.exe` — the calculator opens (the visible impact).
- Run: `bash malicious-eicar.zip` — the calculator opens (the visible impact).

**Expected result:** the calculator window opens. That is the demo's "visible impact"
— the benign stand-in for a real malware payload.

### 3. Show the protection (clean)

- Run: `bash clean-note.txt` — nothing happens (payload removed).

**Expected result:** the file opens/behaves normally — no calculator, no execution.

---

## Expected behavior (file by file)

| File | What you should observe |
|---|---|
| malicious files | eicar.com / eicar.txt / eicar_demo.exe / malicious-eicar.zip → contain the EICAR test string; eicar.com is flagged by ClamAV as `Eicar-Test-Signature`; eicar_demo.exe runs under Wine and prints the EICAR string |
| clean files | no payload, no calculator, sanitized content |

> Behavior notes are verified by the QA suite on every build (see the QA checklist below).

---

## Safety

- ✅ All payloads are **benign by construction**: the only side effect is opening the calculator.
- ✅ No real malware, no network callbacks (any network reference targets `example.com` or loopback).
- ✅ Metascan demos use the **EICAR test string** — the universal, harmless AV test file.

## QA checklist (verified on this build)

- [ ] `unzip -t ms-stormencryptor-20260813.zip` → no errors
- [ ] malicious script runs and opens the calculator
- [ ] clean script runs and opens nothing
- [ ] format magic bytes verified (PDF `%PDF`, ZIP `PK`, PNG `\x89PNG`, 7z `7z\xbc\xaf`, OOXML `PK`)

## How MetaDefender catches this

Data encrypted for impact — ransomware deployed via exploited RMM auth-bypass (T1486) (MITRE ATT&CK [T1486](https://attack.mitre.org/techniques/T1486/))
is neutralized by **Metascan** before the file reaches the user — see the blog for the
full story and detection details.
