# Shortcut file whose target string hides a command payload

> **MetaDefender module:** Deep CDR · **Difficulty:** beginner · **Date:** 2026-06-18
>
> Deep CDR (Content Disarm & Reconstruction) dismantles the file, removes executable/embedded content, and rebuilds a clean, safe version.

Microsoft published an analysis of a clipper malware campaign that spreads through infected USB drives using LNK file exploits, swapping cryptocurrency wallet addresses in the clipboard to redirect funds, with Tor-based C2. Weaponized shortcuts are the delivery trick: the .lnk target field points not at a program but at cmd.exe with a hidden command, so a double-click silently executes the payload (MITRE T1204.001). Because the malicious logic lives in the shortcut's metadata, it can evade signature checks that ignore LNK structure. Deep CDR parses the shortcut, strips the embedded command, and rebuilds a clean shortcut that opens the intended application only. The demo uses a benign cmd /c calc payload, safe to run on any Windows machine.
**Real incident:** this attack technique corresponds to a real-world event — [read the daily digest](https://blog.andyshih.uk/en/blog/ciso-daily-digest-20260618/).

---

## What's in this package

This demo is **Linux-only**. The zip contains two folders:

| Folder | Contents |
|---|---|
| `malicious/` | The attack file(s) — **benign**, the only effect is opening the calculator |
| `clean/` | The same file after MetaDefender processing — payload removed |

Files in `malicious/`: `malicious-shortcut.desktop`

Files in `clean/`: `clean-shortcut.desktop`



---

## How to run the demo (Linux)

### 1. Prepare

```bash
unzip dcdr-lnk-cmd-20260618.zip
cd dcdr-lnk-cmd-20260618
```

Requirements: a desktop Linux with a calculator (`gnome-calculator`, `kcalc`, or `xcalc`).
The payload script auto-detects which one is installed.

### 2. Show the attack (malicious)

- Run: `bash malicious-shortcut.desktop` — the calculator opens (the visible impact).

**Expected result:** the calculator window opens. That is the demo's "visible impact"
— the benign stand-in for a real malware payload.

### 3. Show the protection (clean)

- Run: `bash clean-shortcut.desktop` — nothing happens (payload removed).

**Expected result:** the file opens/behaves normally — no calculator, no execution.

---

## Safety

- ✅ All payloads are **benign by construction**: the only side effect is opening the calculator.
- ✅ No real malware, no network callbacks (any network reference targets `example.com` or loopback).
- ✅ Metascan demos use the **EICAR test string** — the universal, harmless AV test file.

## QA checklist (verified on this build)

- [ ] `unzip -t dcdr-lnk-cmd-20260618.zip` → no errors
- [ ] malicious script runs and opens the calculator
- [ ] clean script runs and opens nothing
- [ ] format magic bytes verified (PDF `%PDF`, ZIP `PK`, PNG `\x89PNG`, 7z `7z\xbc\xaf`, OOXML `PK`)

## How MetaDefender catches this

LNK shortcut with cmd payload (MITRE ATT&CK [T1204.001](https://attack.mitre.org/techniques/T1204/001/))
is neutralized by **Deep CDR** before the file reaches the user — see the blog for the
full story and detection details.
