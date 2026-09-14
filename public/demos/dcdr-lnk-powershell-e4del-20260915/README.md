# E4del and PINHOLE RATs Ride FTP-Banner Dead Drops in a ZIP + Shortcut (LNK) Chain (SOCRadar) — Deep CDR Strips the Shortcut's Download-and-Execute Logic (2026-09-14 CISO Daily Digest)

> **MetaDefender module:** Deep CDR · **Difficulty:** intermediate · **Date:** 2026-09-15
> Deep CDR (Content Disarm & Reconstruction) dismantles the file, removes executable/embedded content, and rebuilds a clean, safe version.

The 2026-09-14 CISO Daily Digest covered SOCRadar's hunt into a new Windows infection chain (first observed by MalwareHunterTeam in July 2026): phishing drops a ZIP archive whose only visible content is a document-themed Windows shortcut — and the shortcut doesn't open a document. It connects to an attacker-run FTP server and treats the FTP welcome banner, the text a server sends as a pre-login greeting, as a dead-drop resolver (DDR): it executes the command text found there and pulls the next stage. SOCRadar's infrastructure view: the banner at 157.254.194[.]31:21 chains to a second banner at 167.148.41[.]164:21, whose PowerShell stage downloads, extracts and runs the final binary; PINHOLE's banner at 209.99.185[.]38:21 uses the MSXML2.XMLHTTP COM object to fetch its script from cloudflare.milicare[.]in. The chain ends in two previously undocumented RATs: E4del — a Node.js implant packed inside a digitally signed Electron application masquerading as Discord, with persistent/temporary shells, screenshot capture, desktop streaming over WebSockets, privilege escalation and download-and-execute of follow-on payloads; and PINHOLE — a stealthier 14-command multi-stage RAT (file upload/download, process control, screenshots, browser-credential theft) that resolves its C2 from Pinterest posts and SurveyMonkey surveys and relays through Cloudflare Workers. It is the first documented in-the-wild use of FTP banners as a dead-drop resolver, and the shortcut carries no payload bytes at all — the instructions live in pre-login banner text that looks like protocol politeness. This demo ships the Linux analog of that shortcut: malicious-shortcut.desktop, a document-themed launcher whose Exec line fetches a harmless page (IANA-reserved example.com — never a real payload) and pipes it to the shell, then opens the calculator as the visible impact; clean-shortcut.desktop is the same shortcut after Deep CDR processing, pointing at the local document viewer only. Even offline, only the harmless visible impact (the calculator) ever triggers — nothing destructive runs. Deep CDR parses the shortcut, removes the embedded command logic and rebuilds a clean shortcut, breaking the fetch-and-execute chain before it starts — exactly what the same digest's OPSWAT section recommends for ZIP/LNK delivery chains (MITRE ATT&CK T1204.002 — User Execution: Malicious File, the sub-technique MITRE explicitly lists .lnk under).
**Real incident:** this attack technique corresponds to a real-world event — [read the daily digest](https://blog.andyshih.uk/en/blog/ciso-daily-digest-20260914/).

---

## What's in this package

This demo runs on **Linux**. The zip contains two folders:

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
unzip dcdr-lnk-powershell-e4del-20260915.zip
```

Requirements: a desktop Linux with the calculator invoked by the shortcut's `Exec=` line (`gnome-calculator` in this build).

### 2. Show the attack (malicious)

- Linux (desktop): double-click `malicious/malicious-shortcut.desktop` — the shortcut's Exec line runs and the calculator opens (the visible impact). Headless check: run the `Exec=` value through bash — the same execution check the QA suite performs on every build.

**Expected result:** the calculator window opens. That is the demo's "visible impact"
— the benign stand-in for a real malware payload.

### 3. Show the protection (clean)

- Double-click `clean/clean-shortcut.desktop` — the sanitized shortcut runs `xdg-open` on a local doc only; no calculator, no fetch.

**Expected result:** the file opens/behaves normally — no calculator, no execution.

---

## Expected behavior (file by file)

| File | What you should observe |
|---|---|
| malicious files | malicious-shortcut.desktop → double-click launches the Exec line (calculator opens) |
| clean files | no payload, no calculator, sanitized content |

> Behavior notes are verified by the QA suite on every build (see the QA checklist below).

---

## Safety

- ✅ All payloads are **benign by construction**: the only side effect is opening the calculator.
- ✅ No real malware, no network callbacks (any network reference targets `example.com` or loopback).


## QA checklist (verified on this build)

- [x] `unzip -t dcdr-lnk-powershell-e4del-20260915.zip` -> no errors (zip integrity)
- [x] malicious shortcut's Exec line runs and opens the calculator - execution-verified by the QA suite on this build
- [x] clean shortcut references no calculator or fetch logic - verified by the QA suite on this build
- [x] automated QA suite passes (structure + execution checks, FAIL=0 on this build)

## How MetaDefender catches this

Document-themed shortcut (LNK / Linux .desktop analog) delivered inside a ZIP archive — the shortcut reads its next command from an FTP-server welcome banner used as a dead-drop resolver and runs a download-and-execute stage that ends in the E4del and PINHOLE RATs; the demo ships the same construct as a Linux .desktop shortcut whose Exec line fetches and pipes a benign string before opening the calculator, so Deep CDR can strip the embedded logic (T1204.002 User Execution: Malicious File) (MITRE ATT&CK [T1204.002](https://attack.mitre.org/techniques/T1204/002/))
is neutralized by **Deep CDR** before the file reaches the user — see the blog for the
full story and detection details.
