# Sandbox captures periodic C2 beacon network behavior

> **MetaDefender module:** Adaptive Sandbox · **Difficulty:** intermediate · **Date:** 2026-06-15
>
> Adaptive Sandbox executes the file in an isolated environment and reports behavior (network, filesystem, processes).

NightSpire ransomware has compromised at least 64 organizations across healthcare, government, finance, and other sectors in 33 countries, including Taiwan, blending in by abusing legitimate admin tools such as PSExec, Cobalt Strike, and PowerShell. A signature of such intrusions is periodic command-and-control beaconing — compromised hosts phoning home at regular intervals, an application-layer communication pattern mapped to T1071.001. This demo runs a benign executable that sends loopback-only beacon traffic, so no external network is touched. Adaptive Sandbox isolates the sample, captures the beacon's regularity, destinations, and payloads, and surfaces the suspicious C2 behavior in a clear report executives can act on.
**Real incident:** this attack technique corresponds to a real-world event — [read the daily digest](https://blog.andyshih.uk/en/blog/ciso-daily-digest-20260615/).

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
unzip sbx-c2-beacon-20260615.zip
cd sbx-c2-beacon-20260615
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

## Safety

- ✅ All payloads are **benign by construction**: the only side effect is opening the calculator.
- ✅ No real malware, no network callbacks (any network reference targets `example.com` or loopback).
- ✅ Metascan demos use the **EICAR test string** — the universal, harmless AV test file.

## QA checklist (verified on this build)

- [ ] `unzip -t sbx-c2-beacon-20260615.zip` → no errors
- [ ] malicious script runs and opens the calculator
- [ ] clean script runs and opens nothing
- [ ] format magic bytes verified (PDF `%PDF`, ZIP `PK`, PNG `\x89PNG`, 7z `7z\xbc\xaf`, OOXML `PK`)

## How MetaDefender catches this

C2 beaconing (MITRE ATT&CK [T1071.001](https://attack.mitre.org/techniques/T1071/001/))
is neutralized by **Adaptive Sandbox** before the file reaches the user — see the blog for the
full story and detection details.
