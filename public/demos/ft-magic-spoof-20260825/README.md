# PNG Magic-Byte Spoof — Helix/Delek US & Gunra Payloads Hidden Behind a Forged Image Header

> **MetaDefender module:** FileType Engine · **Difficulty:** intermediate · **Date:** 2026-08-25
>
> FileType Engine verifies the true file type via magic bytes, defeating name/extension masquerades.

In August 2026, extortion crews such as the Helix group (behind the Delek US petroleum-refiner breach) and the China-linked UAT-10147 cluster routinely smuggle stage-2 payloads past perimeter controls by forging the file's magic bytes — the leading signature bytes — to mimic a benign PNG image, while the real payload is a shell script or ELF binary. Naive allowlists that trust only the header signature (e.g. checking for 0x89 'PNG') or the file extension pass the disguised payload straight to the endpoint, where it detonates as a loader for ransomware such as Gunra. This demo reproduces the technique safely: a benign, calculator-only bash script is prepended with a genuine PNG header so the file masquerades as an image. MetaDefender FileType Engine inspects the actual internal structure rather than trusting the forged header, flags the declared-vs-real format mismatch, and blocks the file before execution — the same control that would have neutralized the Helix/Delek US drop and the UAT-10147 SPECTRE delivery chain referenced in the CISA-adjacent CVE-2026-69836 Entra ID patch cycle.
**Real incident:** this attack technique corresponds to a real-world event — [read the daily digest](https://blog.andyshih.uk/en/blog/ciso-daily-digest-20260824/).

---

## What's in this package

This demo runs on **Linux**. The zip contains two folders:

| Folder | Contents |
|---|---|
| `malicious/` | The attack file(s) — **benign**, the only effect is opening the calculator |
| `clean/` | The same file after MetaDefender processing — payload removed |

Files in `malicious/`: `malicious-image.png`, `malicious-win.cmd`

Files in `clean/`: `clean-image.png`



---

## How to run the demo (Linux)

### 1. Prepare

```bash
unzip ft-magic-spoof-20260825.zip
cd ft-magic-spoof-20260825
```

Requirements: a desktop Linux with a calculator (`gnome-calculator`, `kcalc`, or `xcalc`).
The payload script auto-detects which one is installed.

### 2. Show the attack (malicious)

- Linux/macOS (bash): `bash malicious-image.png` — the calculator opens (the visible impact).
- Windows: double-click `malicious-win.cmd` — the calculator opens (no bash required).

**Expected result:** the calculator window opens. That is the demo's "visible impact"
— the benign stand-in for a real malware payload.

### 3. Show the protection (clean)

- Open `clean-image.png` as an image (e.g. `xdg-open clean-image.png`) — a genuine photo, nothing executes.

**Expected result:** the file opens/behaves normally — no calculator, no execution.

---

## Expected behavior (file by file)

| File | What you should observe |
|---|---|
| malicious files | malicious-image.png → PNG header prepended to a shell script (spoofed magic bytes) |
| clean files | no payload, no calculator, sanitized content |

> Behavior notes are verified by the QA suite on every build (see the QA checklist below).

---

## Safety

- ✅ All payloads are **benign by construction**: the only side effect is opening the calculator.
- ✅ No real malware, no network callbacks (any network reference targets `example.com` or loopback).


## QA checklist (verified on this build)

- [ ] `unzip -t ft-magic-spoof-20260825.zip` → no errors
- [ ] malicious script runs and opens the calculator
- [ ] clean script runs and opens nothing
- [ ] format magic bytes verified (PDF `%PDF`, ZIP `PK`, PNG `\x89PNG`, 7z `7z\xbc\xaf`, OOXML `PK`)

## How MetaDefender catches this

Magic-byte spoofing to masquerade as a PNG image (T1036.005) (MITRE ATT&CK [T1036.005](https://attack.mitre.org/techniques/T1036.005/))
is neutralized by **FileType Engine** before the file reaches the user — see the blog for the
full story and detection details.
