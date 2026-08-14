# XOR-encrypted macro source defeating static inspection

> **MetaDefender module:** 'Deep CDR' · **Difficulty:** advanced · **Date:** 2026-06-21
>
> 

Office documents remain a favorite initial-access vector, and attackers increasingly encrypt or encode their macro source so that signature-based scanning sees only gibberish. In this scenario the VBA project inside a DOCM is protected with XOR obfuscation: the plaintext strings, API calls, and download logic only become visible after the macro decrypts itself at runtime, so static inspection of the file reveals nothing malicious (MITRE T1027.013). Deep CDR does not rely on seeing the payload - it removes the macro project entirely, extracts only the safe document content, and rebuilds a clean DOCM that opens without executing any code. The demo ships a benign obfuscated macro that merely launches calc.exe, making it safe to run in any environment.
**Real incident:** this attack technique corresponds to a real-world event — [read the daily digest](https://blog.andyshih.uk/en/blog/ciso-daily-digest-20260621/).

---

## What's in this package

This demo runs on **Linux, macOS and Windows** — the payload auto-detects the OS at
runtime (Linux: gnome-calculator/kcalc/xcalc; macOS: Calculator via osascript;
Windows with git-bash/MSYS: calc.exe). The zip contains two folders:

| Folder | Contents |
|---|---|
| `malicious/` | The attack file(s) — **benign**, the only effect is opening the calculator |
| `clean/` | The same file after MetaDefender processing — payload removed |

Files in `malicious/`: `malicious-invoice.odt`, `malicious-launcher.sh`

Files in `clean/`: `clean-invoice.docx`, `clean-invoice.odt`

- **Macro note:** LibreOffice 24.x does not embed Basic macros into `.docm`
  `vbaProject.bin` on export, so the macro demo ships a clean `.docx` plus a
  launcher that reproduces the macro's visible impact. To create a real `.docm`,
  run the included generator on Windows (Word) — see the blog for the technique.

---

## How to run the demo (Linux)

### 1. Prepare

```bash
unzip dcdr-encrypted-macro-20260621.zip
cd dcdr-encrypted-macro-20260621
```

Requirements: a desktop Linux with a calculator (`gnome-calculator`, `kcalc`, or `xcalc`).
The payload script auto-detects which one is installed.

### 2. Show the attack (malicious)

- Open `malicious-invoice.odt` in its native app — the attack triggers on open.
- Linux/macOS (bash): `bash malicious-launcher.sh` — the calculator opens (the visible impact).

**Expected result:** the calculator window opens. That is the demo's "visible impact"
— the benign stand-in for a real malware payload.

### 3. Show the protection (clean)

- Open `clean-invoice.docx` — no payload, no calculator.
- Open `clean-invoice.odt` — no payload, no calculator.

**Expected result:** the file opens/behaves normally — no calculator, no execution.

---

## Expected behavior (file by file)

| File | What you should observe |
|---|---|
| malicious files | malicious-invoice.odt → open in LibreOffice → Enable Macros → ALERT shows the XOR-decoded payload text (obfuscated macro variant) |
| clean files | no payload, no calculator, sanitized content |

> Behavior notes are verified by the QA suite on every build (see the QA checklist below).

---

## Safety

- ✅ All payloads are **benign by construction**: the only side effect is opening the calculator.
- ✅ No real malware, no network callbacks (any network reference targets `example.com` or loopback).
- ✅ Metascan demos use the **EICAR test string** — the universal, harmless AV test file.

## QA checklist (verified on this build)

- [ ] `unzip -t dcdr-encrypted-macro-20260621.zip` → no errors
- [ ] malicious script runs and opens the calculator
- [ ] clean script runs and opens nothing
- [ ] format magic bytes verified (PDF `%PDF`, ZIP `PK`, PNG `\x89PNG`, 7z `7z\xbc\xaf`, OOXML `PK`)

## How MetaDefender catches this

Obfuscated/encrypted VBA (MITRE ATT&CK [T1027.013](https://attack.mitre.org/techniques/T1027.013/))
is neutralized by **'Deep CDR'** before the file reaches the user — see the blog for the
full story and detection details.
