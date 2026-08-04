# LNK invoking PowerShell download-and-execute chain

> **MetaDefender module:** Deep CDR · **Difficulty:** intermediate · **Date:** 2026-06-19
>
> Deep CDR (Content Disarm & Reconstruction) dismantles the file, removes executable/embedded content, and rebuilds a clean, safe version.

Microsoft's analysis of the ongoing clipper campaign shows the USB-spread shortcuts now rely on PowerShell-based payload stages, with the malware replacing cryptocurrency wallet addresses and communicating over Tor-based command-and-control. In this variant the LNK file launches powershell.exe with an encoded download cradle: a short script fetches a remote payload from the attacker's server and executes it in memory (MITRE T1059.001). Because the download happens at runtime, the shortcut itself contains no malware bytes for traditional scanners to find. Deep CDR removes the executable logic from the shortcut and reconstructs a sanitized version, breaking the download-and-execute chain before it starts. The demo runs a benign download-string against localhost, so it is safe for any test environment.
**Real incident:** this attack technique corresponds to a real-world event — [read the daily digest](https://blog.andyshih.uk/en/blog/ciso-daily-digest-20260619/).

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
unzip dcdr-lnk-powershell-20260619.zip
cd dcdr-lnk-powershell-20260619
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

- [ ] `unzip -t dcdr-lnk-powershell-20260619.zip` → no errors
- [ ] malicious script runs and opens the calculator
- [ ] clean script runs and opens nothing
- [ ] format magic bytes verified (PDF `%PDF`, ZIP `PK`, PNG `\x89PNG`, 7z `7z\xbc\xaf`, OOXML `PK`)

## How MetaDefender catches this

LNK PowerShell download cradle (MITRE ATT&CK [T1059.001](https://attack.mitre.org/techniques/T1059/001/))
is neutralized by **Deep CDR** before the file reaches the user — see the blog for the
full story and detection details.
