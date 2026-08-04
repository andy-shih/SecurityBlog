# SVG image with script payload in onload handler

> **MetaDefender module:** Deep CDR · **Difficulty:** beginner · **Date:** 2026-07-24
>
> Deep CDR (Content Disarm & Reconstruction) dismantles the file, removes executable/embedded content, and rebuilds a clean, safe version.

A reported Bing Images issue shows how dangerous vector graphics can be: crafted SVG files were found able to execute commands as SYSTEM on Microsoft's servers. SVG is a text-based markup format, so it can carry JavaScript inside element handlers, and rendering an innocuous-looking image can silently run that script in the application's security context. Attackers weaponize this to drop payloads, steal cookies, or pivot within a session. In this demo a benign SVG runs only a harmless onload alert to illustrate the mechanism. Deep CDR parses and rebuilds the SVG, stripping script and ActiveX-style content while preserving the visual output. A sanitized image reaches the endpoint — no executable script ever runs.
**Real incident:** this attack technique corresponds to a real-world event — [read the daily digest](https://blog.andyshih.uk/en/blog/ciso-daily-digest-20260724/).

---

## What's in this package

This demo is **Linux-only**. The zip contains two folders:

| Folder | Contents |
|---|---|
| `malicious/` | The attack file(s) — **benign**, the only effect is opening the calculator |
| `clean/` | The same file after MetaDefender processing — payload removed |

Files in `malicious/`: `malicious-image.svg`

Files in `clean/`: `clean-image.svg`

---

## How to run the demo (Linux)

### 1. Prepare

```bash
unzip dcdr-svg-script-20260724.zip
cd dcdr-svg-script-20260724
```

Requirements: a desktop Linux with a calculator (`gnome-calculator`, `kcalc`, or `xcalc`).
The payload script auto-detects which one is installed.

### 2. Show the attack (malicious)

- Run: `bash malicious-image.svg` — the calculator opens (the visible impact).

**Expected result:** the calculator window opens. That is the demo's "visible impact"
— the benign stand-in for a real malware payload.

### 3. Show the protection (clean)

- Run: `bash clean-image.svg` — nothing happens (payload removed).

**Expected result:** the file opens/behaves normally — no calculator, no execution.

---

## Safety

- ✅ All payloads are **benign by construction**: the only side effect is opening the calculator.
- ✅ No real malware, no network callbacks (any network reference targets `example.com` or loopback).
- ✅ Metascan demos use the **EICAR test string** — the universal, harmless AV test file.

## QA checklist (verified on this build)

- [ ] `unzip -t dcdr-svg-script-20260724.zip` → no errors
- [ ] malicious script runs and opens the calculator
- [ ] clean script runs and opens nothing
- [ ] format magic bytes verified (PDF `%PDF`, ZIP `PK`, PNG `\x89PNG`, 7z `7z\xbc\xaf`, OOXML `PK`)

## How MetaDefender catches this

SVG embedded script (MITRE ATT&CK [T1059.007](https://attack.mitre.org/techniques/T1059/007/))
is neutralized by **Deep CDR** before the file reaches the user — see the blog for the
full story and detection details.
