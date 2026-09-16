# FBI, NCSC and AIVD Expose Iran's HEAVYGRAM: Telegram-Controlled Spyware Built to Target Dissidents and Journalists — Sandbox Detonates the Screen-Capture Stage (2026-09-16 CISO Daily Digest)

> **MetaDefender module:** MetaDefender Sandbox · **Difficulty:** intermediate · **Date:** 2026-09-17
> MetaDefender Sandbox executes the file in an isolated environment and reports behavior (network, filesystem, processes).

The 2026-09-16 CISO Daily Digest covered the September 15 joint advisory from the FBI, the UK's NCSC and the Netherlands' AIVD exposing a Windows spyware — called HEAVYGRAM by the FBI and CHOSEN BRICK by the NCSC — that Iran's Ministry of Intelligence and Security (MOIS) uses to spy on dissidents, journalists and activists around the world. The implant is controlled through a per-victim Telegram bot: the agencies say it can copy a target's emails and chat messages, take screenshots, activate the microphone to record audio, steal saved passwords and browser data, and download more tools — exfiltrating what it collects through the Telegram channel and cloud services (Vultr, Storj), with newer versions routing Telegram traffic through proxies to blend into normal activity. Entry begins with a message posing as a known contact or as tech support for a messaging app; the agencies say attackers often target the work computer first and pivot to an unprotected personal device if that fails, and reported disguises include the AI video app Pictory, the password manager KeePass, Telegram itself, RunwayML, Norton and Adobe Flash Player — in some cases files were made to look like MRI scan results. The campaign dates to autumn 2023 and, the advisory says, has been used against people in the UK, U.S. and Netherlands, and worldwide, since at least 2025; it notes victims' personal details have appeared on pro-Iranian leak sites, raising risks beyond data theft. Its detection guidance lists a Run-key entry (SMQDService or winappx) for login persistence, a spoofed drop path (C:\Windows \SysWOW64 — note the added space), Microsoft Defender folder exclusions, and unexpected connections to otherwise legitimate services including api.telegram.org, vultrobjects.com and storjshare.io. This demo safely reproduces the payload-behavior stage of that intrusion: malicious-payload.sh stages a screen-capture artifact (./exfil/screen.png, a placeholder stand-in for the spyware's screen-grabbing capability) and then opens the Calculator as its only visible impact — no real screen content is captured, nothing is exfiltrated, no network contact, nothing destructive; malicious-win.cmd reproduces the same impact for Windows hosts; the clean control sample (clean-payload.sh) has the attack sequence removed and opens nothing. MetaDefender Sandbox detonates the sample in an isolated environment, observes the screen-capture / staging behavior, and reports the spyware's activity with behavioral indicators — no signature required (MITRE ATT&CK T1113 — Screen Capture).
**Real incident:** this attack technique corresponds to a real-world event — [read the daily digest](https://blog.andyshih.uk/en/blog/ciso-daily-digest-20260916/).

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
unzip sbx-screenshot-heavygram-20260917.zip
```

Requirements: a desktop Linux with a calculator (`gnome-calculator`, `kcalc`, or `xcalc`).
The payload script auto-detects which one is installed.

### 2. Show the attack (malicious)

- Linux/macOS (bash): `bash malicious/malicious-payload.sh` — the calculator opens (the visible impact).
- Windows: double-click `malicious/malicious-win.cmd` — the calculator opens (no bash required).

**Expected result:** the calculator window opens. That is the demo's "visible impact"
— the benign stand-in for a real malware payload.

### 3. Show the protection (clean)

- Run: `bash clean/clean-payload.sh` — nothing happens (payload removed).

**Expected result:** the file opens/behaves normally — no calculator, no execution.

---

## Expected behavior (file by file)

| File | What you should observe |
|---|---|
| malicious files | malicious-payload.sh → writes ./exfil/screen.png (demo), then opens the calculator |
| clean files | no payload, no calculator, sanitized content |

> Behavior notes are verified by the QA suite on every build (see the QA checklist below).

---

## Safety

- ✅ All payloads are **benign by construction**: the only side effect is opening the calculator.
- ✅ No real malware, no network callbacks (any network reference targets `example.com` or loopback).


## QA checklist (verified on this build)

- [x] `unzip -t sbx-screenshot-heavygram-20260917.zip` -> no errors (zip integrity)
- [x] malicious script runs and opens the calculator - execution-verified by the QA suite on this build
- [x] clean script runs and opens nothing - execution-verified by the QA suite on this build
- [x] automated QA suite passes (structure + execution checks, FAIL=0 on this build)

## How MetaDefender catches this

Telegram-bot-controlled espionage implant (FBI/NCSC/AIVD joint advisory: HEAVYGRAM / CHOSEN BRICK, attributed to Iran's MOIS; active since autumn 2023) — sandbox detonation of the screen-capture stage demonstrates spyware screen-grabbing behavior (T1113 Screen Capture) (MITRE ATT&CK [T1113](https://attack.mitre.org/techniques/T1113/))
is neutralized by **MetaDefender Sandbox** before the file reaches the user — see the blog for the
full story and detection details.
