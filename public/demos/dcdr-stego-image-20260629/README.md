# Malware payload hidden inside ordinary image file (steganography)

> **MetaDefender module:** Deep CDR · **Difficulty:** intermediate · **Date:** 2026-06-29
>
> Deep CDR (Content Disarm & Reconstruction) dismantles the file, removes executable/embedded content, and rebuilds a clean, safe version.

Microsoft removed 119 malicious Edge extensions that hid malware payloads inside ordinary image and font files using steganography; the extensions, which included ad blockers, VPNs, and video downloaders, combined ad fraud with credential theft and reached a combined install base of up to 2.6 million users. Steganography defeats scanners because the payload is embedded in the least-significant bits of a picture: the image renders normally, hashes cleanly, and matches no known signature, while the hidden data is released only when the loader extracts it at runtime (MITRE T1027.003). Deep CDR decodes and re-encodes images, stripping non-image data and rebuilding a clean picture that carries nothing hidden. The demo uses a benign image with a harmless hidden text message, so it is safe to open and inspect in any environment.
**Real incident:** this attack technique corresponds to a real-world event — [read the daily digest](https://blog.andyshih.uk/en/blog/ciso-daily-digest-20260629/).

---

## What's in this package

This demo is **Linux-only**. The zip contains two folders:

| Folder | Contents |
|---|---|
| `malicious/` | The attack file(s) — **benign**, the only effect is opening the calculator |
| `clean/` | The same file after MetaDefender processing — payload removed |

Files in `malicious/`: `malicious-image.png`

Files in `clean/`: `clean-image.png`



---

## How to run the demo (Linux)

### 1. Prepare

```bash
unzip dcdr-stego-image-20260629.zip
cd dcdr-stego-image-20260629
```

Requirements: a desktop Linux with a calculator (`gnome-calculator`, `kcalc`, or `xcalc`).
The payload script auto-detects which one is installed.

### 2. Show the attack (malicious)

- Run: `bash malicious-image.png` — the calculator opens (the visible impact).

**Expected result:** the calculator window opens. That is the demo's "visible impact"
— the benign stand-in for a real malware payload.

### 3. Show the protection (clean)

- Run: `bash clean-image.png` — nothing happens (payload removed).

**Expected result:** the file opens/behaves normally — no calculator, no execution.

---

## Safety

- ✅ All payloads are **benign by construction**: the only side effect is opening the calculator.
- ✅ No real malware, no network callbacks (any network reference targets `example.com` or loopback).
- ✅ Metascan demos use the **EICAR test string** — the universal, harmless AV test file.

## QA checklist (verified on this build)

- [ ] `unzip -t dcdr-stego-image-20260629.zip` → no errors
- [ ] malicious script runs and opens the calculator
- [ ] clean script runs and opens nothing
- [ ] format magic bytes verified (PDF `%PDF`, ZIP `PK`, PNG `\x89PNG`, 7z `7z\xbc\xaf`, OOXML `PK`)

## How MetaDefender catches this

Steganographic payload in image (MITRE ATT&CK [T1027.003](https://attack.mitre.org/techniques/T1027/003/))
is neutralized by **Deep CDR** before the file reaches the user — see the blog for the
full story and detection details.
