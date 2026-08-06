# ClickFix HTML Lure with Browser-Assembled Payload (Atomic Stealer Campaign Pattern)

> **MetaDefender module:** Deep CDR · **Difficulty:** intermediate · **Date:** 2026-08-06
>
> Deep CDR (Content Disarm & Reconstruction) dismantles the file, removes executable/embedded content, and rebuilds a clean, safe version.

On August 5, 2026, Microsoft Threat Intelligence detailed a macOS ClickFix campaign whose 250+ front-end domains fingerprint visitors — platform string, screen/window dimensions, WebGL signals — before serving a fake software download, hiding the lure from crawlers and sandboxes. The analyzed chain ends in Atomic Stealer (AMOS), an infostealer that harvests credentials, browser data, authentication stores and crypto wallets after victims paste an obfuscated Terminal command into a fake CAPTCHA or update prompt. ClickFix lures are HTML pages that shift payload execution out of the browser onto the victim's own machine: no exploit, no attachment — the user becomes the delivery mechanism. This demo ships a malicious HTML page in the same shape: a fake "document portal" invoice page whose JavaScript assembles a base64 payload blob in the browser and auto-downloads it as invoice.sh (a benign placeholder that only opens the calculator — safe to run anywhere), exactly the smuggling pattern ClickFix operators use. The clean twin is the sanitized static page. MetaDefender Deep CDR inspects and reconstructs the HTML, stripping scripts, event handlers and embedded payloads so the lure arrives as a harmless static page — the same treatment that neutralizes ClickFix and HTML-smuggling lures before they reach macOS, Windows and Linux endpoints.
**Real incident:** this attack technique corresponds to a real-world event — [read the daily digest](https://blog.andyshih.uk/en/blog/ciso-daily-digest-20260806/).

---

## What's in this package

This demo is **Linux-only**. The zip contains two folders:

| Folder | Contents |
|---|---|
| `malicious/` | The attack file(s) — **benign**, the only effect is opening the calculator |
| `clean/` | The same file after MetaDefender processing — payload removed |

Files in `malicious/`: `malicious-invoice.html`

Files in `clean/`: `clean-invoice.html`



---

## How to run the demo (Linux)

### 1. Prepare

```bash
unzip dcdr-html-smuggling-20260808.zip
cd dcdr-html-smuggling-20260808
```

Requirements: a desktop Linux with a calculator (`gnome-calculator`, `kcalc`, or `xcalc`).
The payload script auto-detects which one is installed.

### 2. Show the attack (malicious)

- Run: `bash malicious-invoice.html` — the calculator opens (the visible impact).

**Expected result:** the calculator window opens. That is the demo's "visible impact"
— the benign stand-in for a real malware payload.

### 3. Show the protection (clean)

- Run: `bash clean-invoice.html` — nothing happens (payload removed).

**Expected result:** the file opens/behaves normally — no calculator, no execution.

---

## Expected behavior (file by file)

| File | What you should observe |
|---|---|
| malicious files | malicious-invoice.html → the page auto-assembles and downloads invoice.sh (browser-dependent) |
| clean files | no payload, no calculator, sanitized content |

> Behavior notes are verified by the QA suite on every build (see the QA checklist below).

---

## Safety

- ✅ All payloads are **benign by construction**: the only side effect is opening the calculator.
- ✅ No real malware, no network callbacks (any network reference targets `example.com` or loopback).
- ✅ Metascan demos use the **EICAR test string** — the universal, harmless AV test file.

## QA checklist (verified on this build)

- [ ] `unzip -t dcdr-html-smuggling-20260808.zip` → no errors
- [ ] malicious script runs and opens the calculator
- [ ] clean script runs and opens nothing
- [ ] format magic bytes verified (PDF `%PDF`, ZIP `PK`, PNG `\x89PNG`, 7z `7z\xbc\xaf`, OOXML `PK`)

## How MetaDefender catches this

ClickFix HTML smuggling lure with paste-command payload (T1027.006) (MITRE ATT&CK [T1027.006](https://attack.mitre.org/techniques/T1027.006/))
is neutralized by **Deep CDR** before the file reaches the user — see the blog for the
full story and detection details.
