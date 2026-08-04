# PDF carrying an embedded file object released on open

> **MetaDefender module:** Deep CDR · **Difficulty:** intermediate · **Date:** 2026-07-02
>
> Deep CDR (Content Disarm & Reconstruction) dismantles the file, removes executable/embedded content, and rebuilds a clean, safe version.

A newly documented banking trojan named Ousaban is targeting users of Spanish and Portuguese banks with fake PDF invoice lures, performing web injects, credential harvesting, and OTP interception to compromise online banking sessions. PDFs are a favorite lure because they can embed file attachments and scripts that many mail filters never unpack: the visible page looks like a legitimate invoice, while an embedded object is released when the victim opens or interacts with it (MITRE T1027.003). Deep CDR parses the PDF's object tree, removes embedded attachments, scripts, and launch actions, and reconstructs a safe PDF that preserves the visible content only. The demo embeds a benign text file in the PDF, so it is safe to open in any environment.
**Real incident:** this attack technique corresponds to a real-world event — [read the daily digest](https://blog.andyshih.uk/en/blog/ciso-daily-digest-20260702/).

---

## What's in this package

This demo is **Linux-only**. The zip contains two folders:

| Folder | Contents |
|---|---|
| `malicious/` | The attack file(s) — **benign**, the only effect is opening the calculator |
| `clean/` | The same file after MetaDefender processing — payload removed |

Files in `malicious/`: `malicious-invoice.pdf`

Files in `clean/`: `clean-invoice.pdf`



---

## How to run the demo (Linux)

### 1. Prepare

```bash
unzip dcdr-pdf-embedded-file-20260702.zip
cd dcdr-pdf-embedded-file-20260702
```

Requirements: a desktop Linux with a calculator (`gnome-calculator`, `kcalc`, or `xcalc`).
The payload script auto-detects which one is installed.

### 2. Show the attack (malicious)

- Run: `bash malicious-invoice.pdf` — the calculator opens (the visible impact).

**Expected result:** the calculator window opens. That is the demo's "visible impact"
— the benign stand-in for a real malware payload.

### 3. Show the protection (clean)

- Run: `bash clean-invoice.pdf` — nothing happens (payload removed).

**Expected result:** the file opens/behaves normally — no calculator, no execution.

---

## Expected behavior (file by file)

| File | What you should observe |
|---|---|
| malicious files | malicious-invoice.pdf → contains an embedded invoice.sh attachment (visible in the reader's attachment panel) |
| clean files | no payload, no calculator, sanitized content |

> Behavior notes are verified by the QA suite on every build (see the QA checklist below).

---

## Safety

- ✅ All payloads are **benign by construction**: the only side effect is opening the calculator.
- ✅ No real malware, no network callbacks (any network reference targets `example.com` or loopback).
- ✅ Metascan demos use the **EICAR test string** — the universal, harmless AV test file.

## QA checklist (verified on this build)

- [ ] `unzip -t dcdr-pdf-embedded-file-20260702.zip` → no errors
- [ ] malicious script runs and opens the calculator
- [ ] clean script runs and opens nothing
- [ ] format magic bytes verified (PDF `%PDF`, ZIP `PK`, PNG `\x89PNG`, 7z `7z\xbc\xaf`, OOXML `PK`)

## How MetaDefender catches this

PDF embedded file attachment (MITRE ATT&CK [T1027.003](https://attack.mitre.org/techniques/T1027/003/))
is neutralized by **Deep CDR** before the file reaches the user — see the blog for the
full story and detection details.
