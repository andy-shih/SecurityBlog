# HTML page assembling payload in browser and auto-downloading it

> **MetaDefender module:** Deep CDR · **Difficulty:** intermediate · **Date:** 2026-06-22
>
> Deep CDR (Content Disarm & Reconstruction) dismantles the file, removes executable/embedded content, and rebuilds a clean, safe version.

A new loader called OXLOADER is being distributed through malicious Google Ads, delivering the CastleStealer infostealer to users searching for legitimate software. HTML smuggling is the mechanism: the page's JavaScript builds the payload as a Blob entirely inside the browser, then triggers a download - so no malicious file ever crosses the network as such, and gateway filters see only a normal-looking web page (MITRE T1027.006). Once the victim opens the downloaded file, the infostealer harvests credentials and browser data. Deep CDR sanitizes the HTML by removing embedded scripts and re-encoding the page, so the browser never assembles the payload in the first place. The demo uses a benign Blob that would only invoke calc, making it safe to run.
**Real incident:** this attack technique corresponds to a real-world event — [read the daily digest](https://blog.andyshih.uk/en/blog/ciso-daily-digest-20260622/).

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
unzip dcdr-html-smuggling-20260622.zip
cd dcdr-html-smuggling-20260622
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

- [ ] `unzip -t dcdr-html-smuggling-20260622.zip` → no errors
- [ ] malicious script runs and opens the calculator
- [ ] clean script runs and opens nothing
- [ ] format magic bytes verified (PDF `%PDF`, ZIP `PK`, PNG `\x89PNG`, 7z `7z\xbc\xaf`, OOXML `PK`)

## How MetaDefender catches this

HTML smuggling (MITRE ATT&CK [T1027.006](https://attack.mitre.org/techniques/T1027/006/))
is neutralized by **Deep CDR** before the file reaches the user — see the blog for the
full story and detection details.
