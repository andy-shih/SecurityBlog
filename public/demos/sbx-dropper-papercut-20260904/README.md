# PaperCut NG/MF RCE Chain (CVE-2026-81578 + CVE-2026-82078, CISA KEV) — Sandbox Flags Post-Exploit Two-Stage Dropper

> **MetaDefender module:** MetaDefender Sandbox · **Difficulty:** intermediate · **Date:** 2026-09-04
> 

On August 28, 2026, The Hacker News reported attackers actively exploiting a newly patched flaw chain in PaperCut NG and PaperCut MF — the print-management software that organizations deploy deep inside their networks — an attack wave the Australian vendor answered with a second emergency patch for versions 24, 25 and 26 carrying 'additional hardening', alongside published indicators of compromise. Huntress researchers John Hammond and Andrew Brandt analyzed the root cause: a specially crafted unauthenticated request can render one page in the response while executing a component owned by a different page, so PaperCut's authorization check trusts the rendered page and misses the permissions required by the component behind it — giving an unauthenticated attacker remote control over PaperCut's trusted configuration, which can be abused to execute arbitrary Java code inside the application's process. The chain combines CVE-2026-81578 (CVSS 8.8; improper access control in the web management interface — backend actions fire before access-validation checks complete) and CVE-2026-82078 (CVSS 9.4; unsafe dynamic class loading in the database connection utilities — database driver classes are instantiated from configurable driver names with no allowlist). CISA added both CVEs to its Known Exploited Vulnerabilities catalog on August 31, 2026, Rapid7 shipped a Metasploit module (rapid7/metasploit-framework PR #21842), and the 2026-08-29 CISO Daily Digest flagged the pair as a high-impact lateral-movement vector for exactly this reason: print servers sit on internal networks. This demo safely reproduces the follow-up stage of such a compromise — the payload an attacker drops on a compromised host to keep the foothold: a two-stage dropper script in which stage 1 writes a second-stage script to /tmp and executes it, with the calculator opening as the only visible impact (no real malware, nothing destructive), plus a Windows .cmd companion and a clean control script whose attack sequence has been removed. MetaDefender Sandbox detonates the sample in isolation, observes the write-then-execute dropper behavior and its command line, and flags the implant before it ever runs on production print infrastructure (MITRE ATT&CK T1105 Ingress Tool Transfer).
**Real incident:** this attack technique corresponds to a real-world event — [read the daily digest](https://blog.andyshih.uk/en/blog/ciso-daily-digest-20260829/).

---

## What's in this package

This demo runs on **Linux**. The zip contains two folders:

| Folder | Contents |
|---|---|
| `malicious/` | The attack file(s) — **benign**, the only effect is opening the calculator |
| `clean/` | The same file after MetaDefender processing — payload removed |

Files in `malicious/`: `malicious-payload.sh`, `malicious-win.cmd`

Files in `clean/`: `clean-payload.sh`



---

## How to run the demo (Linux)

### 1. Prepare

```bash
unzip sbx-dropper-papercut-20260904.zip
```

Requirements: a desktop Linux with a calculator (`gnome-calculator`, `kcalc`, or `xcalc`).
The payload script auto-detects which one is installed.

### 2. Show the attack (malicious)

- Linux/macOS (bash): `bash malicious/malicious-payload.sh` — the calculator opens (the visible impact).
- Windows: double-click `malicious/malicious-win.cmd` — the calculator opens (no bash required).

**Expected result:** the calculator window opens. That is the demo's "visible impact"
— the benign stand-in for a real malware payload.

### 3. Show the protection (clean)

- Run: `bash clean-payload.sh` — nothing happens (payload removed).

**Expected result:** the file opens/behaves normally — no calculator, no execution.

---

## Expected behavior (file by file)

| File | What you should observe |
|---|---|
| malicious files | malicious-payload.sh → writes stage2 and executes it, then opens the calculator |
| clean files | no payload, no calculator, sanitized content |

> Behavior notes are verified by the QA suite on every build (see the QA checklist below).

---

## Safety

- ✅ All payloads are **benign by construction**: the only side effect is opening the calculator.
- ✅ No real malware, no network callbacks (any network reference targets `example.com` or loopback).


## QA checklist (verified on this build)

- [x] `unzip -t sbx-dropper-papercut-20260904.zip` -> no errors (zip integrity)
- [x] malicious script runs and opens the calculator - execution-verified by the QA suite on this build
- [x] clean script runs and opens nothing - execution-verified by the QA suite on this build
- [x] automated QA suite passes (structure + execution checks, FAIL=0 on this build)

## How MetaDefender catches this

Two-stage dropper implant deployed after unauthenticated RCE chain on PaperCut NG/MF (CVE-2026-81578 improper access control -> CVE-2026-82078 unsafe dynamic class loading; CISA KEV) (MITRE ATT&CK [T1105](https://attack.mitre.org/techniques/T1105/))
is neutralized by **MetaDefender Sandbox** before the file reaches the user — see the blog for the
full story and detection details.
