# Nested-ZIP Delivery of a Spark RAT Dropper — APT24's Supply-Chain Smuggling Trick

> **MetaDefender module:** Archive Engine · **Difficulty:** intermediate · **Date:** 2026-08-28
>
> Archive Engine deep-unpacks archives (nested, encrypted, malformed) so payloads cannot hide inside.

On 2026-08-27, the CISO Daily Digest flagged two campaigns that both ride on untrusted-file delivery: China-linked APT24 infiltrated Taiwan's advertising supply chain and planted malware on trusted news and novel (fiction) websites, turning everyday media into drive-by payload hosts; and Spark RAT was reported targeting Cambodia while abusing a vulnerable OPSWAT driver to silently disable endpoint security tooling. Both need a reliable way to get a malicious loader past perimeter scanners — and nested archives are a classic answer. Attackers bury the real payload several ZIP layers deep: a .zip that contains a .zip that contains yet another .zip before the actual file appears. Each layer adds friction for single-pass scanners and manual review, so the marker that flags the malicious content rides inside the innermost archive completely unseen by any control that never recurses. This demo reproduces the pattern safely — the innermost payload is an inert, non-executable marker (no code, no macro, no calculator, no network), so there is zero real payload and no destruction. MetaDefender Archive Engine recursively unpacks archives across every nesting level, applies deep scanning to each extracted file, and enforces configurable limits on depth and file count, so deeply hidden markers like the Spark RAT loader behind the APT24 supply-chain campaign cannot escape detection.
**Real incident:** this attack technique corresponds to a real-world event — [read the daily digest](https://blog.andyshih.uk/en/blog/ciso-daily-digest-20260827/).

---

## What's in this package

This demo ships a **static archive sample — nothing executes**. The zip contains two folders:

| Folder | Contents |
|---|---|
| `malicious/` | The attack archive — a static file whose **payload hides inside the archive layers** (no executable runs on open) |
| `clean/` | The same content after MetaDefender processing — threat removed, nothing hidden |

Files in `malicious/`: `malicious-archive.zip`

Files in `clean/`: `clean-archive.zip`



---

## How to run the demo (Linux)

### 1. Prepare

```bash
unzip ar-nested-sparkrat-20260828.zip
cd ar-nested-sparkrat-20260828
```

### 2. Show the attack (malicious)

- Inspect `malicious-archive.zip` — a nested/abusive archive; the malicious marker is buried inside its layers, invisible to a single-pass scan that only looks at the outer file.

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
| malicious files | malicious-archive.zip → payload buried under 6 nested zip layers |
| clean files | no payload, sanitized content |

> Behavior notes are verified by the QA suite on every build (see the QA checklist below).

---

## Safety

- ✅ All payloads are **benign by construction**: inert archive content (no executable code, no macros).
- ✅ No real malware, no network callbacks (any network reference targets `example.com` or loopback).

## QA checklist (verified on this build)

- [ ] `unzip -t ar-nested-sparkrat-20260828.zip` → no errors
- [ ] malicious archive carries the buried payload marker (visible only after recursive unpack)
- [ ] clean archive carries no payload
- [ ] format magic bytes verified (ZIP `PK`, 7z `7z\xbc\xaf`, TAR `ustar`)

## How MetaDefender catches this

Payload buried in nested ZIP layers (T1027.003) (MITRE ATT&CK [T1027.003](https://attack.mitre.org/techniques/T1027.003/))
is neutralized by **Archive Engine** before the file reaches the user — see the blog for the
full story and detection details.
