# Extension-Mismatch Smuggle — ToxicPanda 2.0 & ShinyHunters Hide Loaders Behind a Benign .jpg

> **MetaDefender module:** FileType Engine · **Difficulty:** beginner · **Date:** 2026-08-26
>
> FileType Engine verifies the true file type via magic bytes, defeating name/extension masquerades.

File-extension masquerading remains a top delivery vector even as CISA races to patch perimeter flaws — on 2026-08-25 it added CVE-2026-21962 (Oracle WebLogic, CVSS 10.0) to its KEV catalog, yet stage-2 loaders still reach endpoints through benign-looking extensions. Extortion crews such as ShinyHunters (the group that breached security vendor ReliaQuest in a 2026-08-25 disclosure) and the ToxicPanda 2.0 Android banking trojan now targeting 349 financial apps routinely ship a malicious shell script or payload under a harmless '.jpg' name: a user double-clicks 'vacation-photo.jpg' and the OS happily executes the embedded script instead of opening an image. Naive allowlists that trust the file extension (or the icon) pass the disguised loader straight through. This demo reproduces the trick safely: the malicious sample is a benign, calculator-only Bash script saved as 'malicious-photo.jpg' — if launched, it only opens a calculator, with no real payload, no network, no destruction. MetaDefender FileType Engine inspects the actual content rather than the extension, flags the declared-vs-real type mismatch, and blocks the file before execution — the same control that would neutralize extension-spoof loaders used by ShinyHunters and ToxicPanda 2.0.
**Real incident:** this attack technique corresponds to a real-world event — [read the daily digest](https://blog.andyshih.uk/en/blog/ciso-daily-digest-20260825/).

---

## What's in this package

This demo runs on **Linux**. The zip contains two folders:

| Folder | Contents |
|---|---|
| `malicious/` | The attack file(s) — **benign**, the only effect is opening the calculator |
| `clean/` | The same file after MetaDefender processing — payload removed |

Files in `malicious/`: `malicious-photo.jpg`, `malicious-win.cmd`

Files in `clean/`: `clean-photo.jpg`



---

## How to run the demo (Linux)

### 1. Prepare

```bash
unzip ft-extension-spoof-20260826.zip
cd ft-extension-spoof-20260826
```

Requirements: a desktop Linux with a calculator (`gnome-calculator`, `kcalc`, or `xcalc`).
The payload script auto-detects which one is installed.

### 2. Show the attack (malicious)

- Linux/macOS (bash): `bash malicious-photo.jpg` — the calculator opens (the visible impact).
- Windows: double-click `malicious-win.cmd` — the calculator opens (no bash required).

**Expected result:** the calculator window opens. That is the demo's "visible impact"
— the benign stand-in for a real malware payload.

### 3. Show the protection (clean)

- Open `clean-photo.jpg` as an image (e.g. `xdg-open clean-photo.jpg`) — a genuine photo, nothing executes.

**Expected result:** the file opens/behaves normally — no calculator, no execution.

---

## Expected behavior (file by file)

| File | What you should observe |
|---|---|
| malicious files | malicious-photo.jpg → a real shell script disguised as a JPEG (magic bytes reveal the truth) |
| clean files | no payload, no calculator, sanitized content |

> Behavior notes are verified by the QA suite on every build (see the QA checklist below).

---

## Safety

- ✅ All payloads are **benign by construction**: the only side effect is opening the calculator.
- ✅ No real malware, no network callbacks (any network reference targets `example.com` or loopback).


## QA checklist (verified on this build)

- [ ] `unzip -t ft-extension-spoof-20260826.zip` → no errors
- [ ] malicious script runs and opens the calculator
- [ ] clean script runs and opens nothing
- [ ] format magic bytes verified (PDF `%PDF`, ZIP `PK`, PNG `\x89PNG`, 7z `7z\xbc\xaf`, OOXML `PK`)

## How MetaDefender catches this

File-extension masquerading to hide a script as a benign image (T1036.005) (MITRE ATT&CK [T1036.005](https://attack.mitre.org/techniques/T1036.005/))
is neutralized by **FileType Engine** before the file reaches the user — see the blog for the
full story and detection details.
