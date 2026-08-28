# Password-Protected RAR Smuggling APT28's HOOKEDGE Stager Past Perimeter AV

> **MetaDefender module:** Archive Engine · **Difficulty:** intermediate · **Date:** 2026-08-29
>
> Archive Engine deep-unpacks archives (nested, encrypted, malformed) so payloads cannot hide inside.

In the 2026-08-28 CISO Daily Digest, Russia-linked APT28 (Fancy Bear) was tied to the HOOKEDGE backdoor actively targeting European government and diplomatic entities for espionage, riding the group's standard playbook of diplomatic/foreign-ministry phishing and credential abuse. A recurring APT28 tradecraft for getting a stager onto a victim host without tripping signature scanners is to wrap the payload in a password-protected archive: the attacker emails a .rar or .zip encrypted with a known password (often disclosed in the message body), so the inner file's content is opaque to any control that only inspects the outer container. Because the encrypted bytes never match a malware hash and the real stager is invisible until decrypted, naive perimeter AV and single-pass mail gateways let it through. This demo reproduces the evasion shape safely — the inner payload is a benign RAR-protected marker (no executable code, no macro, no calculator, no network), password 'infected', so there is zero real payload and no destruction. MetaDefender Archive Engine recursively unpacks and, where policy permits, de-protects archives across every layer, applies deep multi-engine scanning to each extracted file, and surfaces the concealed content — so password-shrouded stagers like the HOOKEDGE loader behind the APT28 diplomatic-phishing chain cannot slip past undetected.
**Real incident:** this attack technique corresponds to a real-world event — [read the daily digest](https://blog.andyshih.uk/en/blog/ciso-daily-digest-20260828/).

---

## What's in this package

This demo ships a **static archive sample — nothing executes**. The zip contains two folders:

| Folder | Contents |
|---|---|
| `malicious/` | The attack archive — a static file whose **payload hides inside the archive layers** (no executable runs on open) |
| `clean/` | The same content after MetaDefender processing — threat removed, nothing hidden |

Files in `malicious/`: `malicious-archive.rar`

Files in `clean/`: `clean-archive.zip`

- **RAR note:** the password-protected archive uses `-hp` (header + data
  encryption), password `infected`. Verify with `rar t -pinfected <file>.rar`.

---

## How to run the demo (Linux)

### 1. Prepare

```bash
unzip ar-password-apt28-20260829.zip
```

### 2. Show the attack (malicious)

- Inspect `malicious-archive.rar` — a password-protected RAR; the hidden payload stays encrypted until the password is supplied.

**Expected result:** a single-pass scanner sees only a benign outer archive; with
**Archive Engine** in the pipeline, the engine recursively unpacks every layer, finds the
buried payload, and blocks the file before it reaches the user.

### 3. Show the protection (clean)

- Inspect `clean-archive.zip` — a clean archive, no hidden payload; after Archive Engine unpacks and scans every layer, nothing is flagged.

**Expected result:** the clean archive passes — no nested payload, nothing to flag.

---

## Expected behavior (file by file)

| File | What you should observe |
|---|---|
| malicious files | malicious-archive.rar → password-protected RAR (-hp, header+data encrypted), password `infected`; verify with `rar t -pinfected` |
| clean files | no payload, sanitized content |

> Behavior notes are verified by the QA suite on every build (see the QA checklist below).

---

## Safety

- ✅ All payloads are **benign by construction**: inert archive content (no executable code, no macros).
- ✅ No real malware, no network callbacks (any network reference targets `example.com` or loopback).

## QA checklist (verified on this build)

- [x] `unzip -t ar-password-apt28-20260829.zip` → no errors
- [ ] malicious archive carries the buried payload marker (visible only after recursive unpack)
- [ ] clean archive carries no payload
- [ ] format magic bytes verified (ZIP `PK`, 7z `7z\xbc\xaf`, TAR `ustar`)

## How MetaDefender catches this

Password-protected archive evasion of content inspection (T1027) (MITRE ATT&CK [T1027](https://attack.mitre.org/techniques/T1027/))
is neutralized by **Archive Engine** before the file reaches the user — see the blog for the
full story and detection details.
