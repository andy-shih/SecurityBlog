# Sandbox observes Run-key persistence installation

> **MetaDefender module:** Adaptive Sandbox · **Difficulty:** intermediate · **Date:** 2026-08-02
>
> Adaptive Sandbox executes the file in an isolated environment and reports behavior (network, filesystem, processes).

Persistence is what turns a one-time compromise into a lasting foothold: malware writes an entry to a Windows Registry Run key so it relaunches automatically at every logon. This demo uses a benign executable that performs the same run-key write to illustrate the behavior. Adaptive Sandbox observes the registry write inside an isolated environment and reports the persistence mechanism together with its full command line, letting analysts see exactly how an implant would survive reboots. The payload performs only a benign run-key write, so no real malware or system modification occurs outside the sandbox.
**Real incident:** no same-day digest link (technique-focused demo).

---

## What's in this package

This demo is **Linux-only**. The zip contains two folders:

| Folder | Contents |
|---|---|
| `malicious/` | The attack file(s) — **benign**, the only effect is opening the calculator |
| `clean/` | The same file after MetaDefender processing — payload removed |

Files in `malicious/`: `demo-autostart.desktop`, `malicious-payload.sh`

Files in `clean/`: `clean-payload.sh`



---

## How to run the demo (Linux)

### 1. Prepare

```bash
unzip sbx-persistence-registry-20260802.zip
cd sbx-persistence-registry-20260802
```

Requirements: a desktop Linux with a calculator (`gnome-calculator`, `kcalc`, or `xcalc`).
The payload script auto-detects which one is installed.

### 2. Show the attack (malicious)

- Run: `bash demo-autostart.desktop` — the calculator opens (the visible impact).
- Run: `bash malicious-payload.sh` — the calculator opens (the visible impact).

**Expected result:** the calculator window opens. That is the demo's "visible impact"
— the benign stand-in for a real malware payload.

### 3. Show the protection (clean)

- Run: `bash clean-payload.sh` — nothing happens (payload removed).

**Expected result:** the file opens/behaves normally — no calculator, no execution.

---

## Expected behavior (file by file)

| File | What you should observe |
|---|---|
| malicious files | malicious-payload.sh → copies demo-autostart.desktop into ~/.config/autostart (benign), then opens the calculator |
| clean files | no payload, no calculator, sanitized content |

> Behavior notes are verified by the QA suite on every build (see the QA checklist below).

---

## Safety

- ✅ All payloads are **benign by construction**: the only side effect is opening the calculator.
- ✅ No real malware, no network callbacks (any network reference targets `example.com` or loopback).
- ✅ Metascan demos use the **EICAR test string** — the universal, harmless AV test file.

## QA checklist (verified on this build)

- [ ] `unzip -t sbx-persistence-registry-20260802.zip` → no errors
- [ ] malicious script runs and opens the calculator
- [ ] clean script runs and opens nothing
- [ ] format magic bytes verified (PDF `%PDF`, ZIP `PK`, PNG `\x89PNG`, 7z `7z\xbc\xaf`, OOXML `PK`)

## How MetaDefender catches this

Registry persistence (MITRE ATT&CK [T1547.001](https://attack.mitre.org/techniques/T1547/001/))
is neutralized by **Adaptive Sandbox** before the file reaches the user — see the blog for the
full story and detection details.
