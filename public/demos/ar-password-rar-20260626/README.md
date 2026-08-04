# Password-protected RAR hiding payload from static inspection

> **MetaDefender module:** Archive Engine · **Difficulty:** intermediate · **Date:** 2026-06-26
>
> Archive Engine deep-unpacks archives (nested, encrypted, malformed) so payloads cannot hide inside.

Microsoft recently disclosed a Photo ZIP phishing campaign targeting the hospitality industry, in which password-protected ZIP archives disguised as photo files delivered a Node.js-based backdoor that establishes WebSocket command-and-control, executes arbitrary commands, and moves laterally inside hotel reservation networks. Password-protected archives are a favored evasion trick: the encrypted container blocks static inspection, so scanners see only ciphertext, and the payload decrypts only when the victim opens it with the shared password (MITRE T1027.002). The Archive Engine handles the challenge differently - it decrypts and extracts archive contents, recursively unpacks nested files, and passes every extracted item through multi-engine scanning and content inspection. The demo uses a benign RAR protected with a known password and containing only harmless test content.
**Real incident:** this attack technique corresponds to a real-world event — [read the daily digest](https://blog.andyshih.uk/en/blog/ciso-daily-digest-20260626/).

---

## What's in this package

This demo is **Linux-only**. The zip contains two folders:

| Folder | Contents |
|---|---|
| `malicious/` | The attack file(s) — **benign**, the only effect is opening the calculator |
| `clean/` | The same file after MetaDefender processing — payload removed |

Files in `malicious/`: `malicious-archive.zip`

Files in `clean/`: `clean-archive.zip`

---

## How to run the demo (Linux)

### 1. Prepare

```bash
unzip ar-password-rar-20260626.zip
cd ar-password-rar-20260626
```

Requirements: a desktop Linux with a calculator (`gnome-calculator`, `kcalc`, or `xcalc`).
The payload script auto-detects which one is installed.

### 2. Show the attack (malicious)

- Run: `bash malicious-archive.zip` — the calculator opens (the visible impact).

**Expected result:** the calculator window opens. That is the demo's "visible impact"
— the benign stand-in for a real malware payload.

### 3. Show the protection (clean)

- Run: `bash clean-archive.zip` — nothing happens (payload removed).

**Expected result:** the file opens/behaves normally — no calculator, no execution.

---

## Safety

- ✅ All payloads are **benign by construction**: the only side effect is opening the calculator.
- ✅ No real malware, no network callbacks (any network reference targets `example.com` or loopback).
- ✅ Metascan demos use the **EICAR test string** — the universal, harmless AV test file.

## QA checklist (verified on this build)

- [ ] `unzip -t ar-password-rar-20260626.zip` → no errors
- [ ] malicious script runs and opens the calculator
- [ ] clean script runs and opens nothing
- [ ] format magic bytes verified (PDF `%PDF`, ZIP `PK`, PNG `\x89PNG`, 7z `7z\xbc\xaf`, OOXML `PK`)

## How MetaDefender catches this

Password-protected archive (MITRE ATT&CK [T1027.002](https://attack.mitre.org/techniques/T1027/002/))
is neutralized by **Archive Engine** before the file reaches the user — see the blog for the
full story and detection details.
