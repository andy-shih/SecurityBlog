# ValleyRAT in Signed QN Wallpaper Installers — Sandbox Flags the Keylogging Payload of a Silver Fox Campaign (2026-09-08 CISO Daily Digest)

> **MetaDefender module:** MetaDefender Sandbox · **Difficulty:** intermediate · **Date:** 2026-09-09
> MetaDefender Sandbox executes the file in an isolated environment and reports behavior (network, filesystem, processes).

The 2026-09-08 CISO Daily Digest reported a ValleyRAT (Winos 4.0) campaign documented by Kaspersky that delivers the remote-access trojan through trojanized copies of the legitimate Chinese wallpaper/adware app QN Wallpaper, offered via fake installers for Alibaba's DingTalk, Tencent meeting software and Google Chrome. Because the carrier app carries a valid code-signing signature and users commonly add such adware to antivirus exclusions, the trojanized installer leans on DLL sideloading to run the RAT with a much higher chance of success; Kaspersky counted over 100,000 ValleyRAT-related detections in 2026 affecting at least 1,500 users, concentrated in China and India, and attributes the activity to the China-linked Silver Fox group. ValleyRAT is a plugin-based remote-access trojan whose capabilities include keystroke logging and remote control — the kind of 'input capture' behavior a signed-but-hostile installer ends up delivering to the endpoint. This demo safely reproduces that payload-behavior stage: the malicious sample (malicious-payload.sh, plus a Windows .cmd companion) writes a local keylog marker file (./keylog.txt, '[demo] keys would be logged here') as a stand-in for the RAT's keystroke capture, then opens the Calculator as its only visible impact — no real keys are captured, nothing is exfiltrated, no network contact, no destruction; the clean control sample (clean-payload.sh) has the attack sequence removed and opens nothing. MetaDefender Sandbox detonates the sample in an isolated environment, observes the keylogging / input-capture sequence, and reports the behavior with indicators before a real ValleyRAT payload could operate on a host (MITRE ATT&CK T1056.001 — Input Capture: Keylogging).
**Real incident:** this attack technique corresponds to a real-world event — [read the daily digest](https://blog.andyshih.uk/en/blog/ciso-daily-digest-20260908/).

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
unzip sbx-keylogger-valleyrat-20260909.zip
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
| malicious files | malicious-payload.sh → writes ./keylog.txt (demo), then opens the calculator |
| clean files | no payload, no calculator, sanitized content |

> Behavior notes are verified by the QA suite on every build (see the QA checklist below).

---

## Safety

- ✅ All payloads are **benign by construction**: the only side effect is opening the calculator.
- ✅ No real malware, no network callbacks (any network reference targets `example.com` or loopback).


## QA checklist (verified on this build)

- [x] `unzip -t sbx-keylogger-valleyrat-20260909.zip` -> no errors (zip integrity)
- [x] malicious script runs and opens the calculator - execution-verified by the QA suite on this build
- [x] clean script runs and opens nothing - execution-verified by the QA suite on this build
- [x] automated QA suite passes (structure + execution checks, FAIL=0 on this build)

## How MetaDefender catches this

ValleyRAT (Winos 4.0) delivered via trojanized, still code-signed QN Wallpaper adware installers masquerading as DingTalk / Tencent Meeting / Chrome (DLL sideloading; documented by Kaspersky, attributed to China-linked Silver Fox) — payload-stage keystroke logging observed in an isolated sandbox (T1056.001) (MITRE ATT&CK [T1056.001](https://attack.mitre.org/techniques/T1056.001/))
is neutralized by **MetaDefender Sandbox** before the file reaches the user — see the blog for the
full story and detection details.
