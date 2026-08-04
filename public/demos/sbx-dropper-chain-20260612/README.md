# Sandbox replays multi-stage dropper execution chain

> **MetaDefender module:** Adaptive Sandbox · **Difficulty:** intermediate · **Date:** 2026-06-12
>
> Adaptive Sandbox executes the file in an isolated environment and reports behavior (network, filesystem, processes).

The Gentlemen ransomware group, which has claimed 478 victims, spreads worm-like across networks through self-propagating delivery — exactly the kind of multi-stage attack chain defenders must analyze before patient zero is reached. In a multi-stage dropper, a small first-stage binary fetches and executes additional payloads from remote infrastructure, an ingress technique mapped to T1105 that hides the final malware until runtime. This demo runs a benign two-stage dropper whose second stage simply launches Calculator, letting teams safely observe the execution chain. Adaptive Sandbox replays the full behavior — file drops, process creation, and network calls — in an isolated environment and reports an executive-ready verdict.
**Real incident:** this attack technique corresponds to a real-world event — [read the daily digest](https://blog.andyshih.uk/en/blog/ciso-daily-digest-20260612/).

---

## What's in this package

This demo is **Linux-only**. The zip contains two folders:

| Folder | Contents |
|---|---|
| `malicious/` | The attack file(s) — **benign**, the only effect is opening the calculator |
| `clean/` | The same file after MetaDefender processing — payload removed |

Files in `malicious/`: `malicious-payload.sh`

Files in `clean/`: `clean-payload.sh`



---

## How to run the demo (Linux)

### 1. Prepare

```bash
unzip sbx-dropper-chain-20260612.zip
cd sbx-dropper-chain-20260612
```

Requirements: a desktop Linux with a calculator (`gnome-calculator`, `kcalc`, or `xcalc`).
The payload script auto-detects which one is installed.

### 2. Show the attack (malicious)

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
| malicious files | malicious-payload.sh → writes stage2 and executes it, then opens the calculator |
| clean files | no payload, no calculator, sanitized content |

> Behavior notes are verified by the QA suite on every build (see the QA checklist below).

---

## Safety

- ✅ All payloads are **benign by construction**: the only side effect is opening the calculator.
- ✅ No real malware, no network callbacks (any network reference targets `example.com` or loopback).
- ✅ Metascan demos use the **EICAR test string** — the universal, harmless AV test file.

## QA checklist (verified on this build)

- [ ] `unzip -t sbx-dropper-chain-20260612.zip` → no errors
- [ ] malicious script runs and opens the calculator
- [ ] clean script runs and opens nothing
- [ ] format magic bytes verified (PDF `%PDF`, ZIP `PK`, PNG `\x89PNG`, 7z `7z\xbc\xaf`, OOXML `PK`)

## How MetaDefender catches this

Multi-stage dropper (MITRE ATT&CK [T1105](https://attack.mitre.org/techniques/T1105/))
is neutralized by **Adaptive Sandbox** before the file reaches the user — see the blog for the
full story and detection details.
