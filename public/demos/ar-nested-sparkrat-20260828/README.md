# Nested-ZIP Delivery of a Spark RAT Dropper — APT24's Supply-Chain Smuggling Trick

> **MetaDefender module:** Archive Engine · **Difficulty:** intermediate · **Date:** 2026-08-28
>
> Archive Engine deep-unpacks archives (nested, encrypted, malformed) so payloads cannot hide inside.

On 2026-08-27, the CISO Daily Digest flagged two campaigns that both ride on untrusted-file delivery: China-linked APT24 infiltrated Taiwan's advertising supply chain and planted malware on trusted news and novel (fiction) websites, turning everyday media into drive-by payload hosts; and Spark RAT was reported targeting Cambodia while abusing a vulnerable OPSWAT driver to silently disable endpoint security tooling. Both need a reliable way to get a malicious loader past perimeter scanners — and nested archives are a classic answer. Attackers bury the real executable several ZIP layers deep: a .zip that contains a .zip that contains yet another .zip before the trigger appears. Each layer adds friction for single-pass scanners and manual review, so a calc-only Bash dropper can ride inside the innermost archive completely unseen by a control that never recurses. This demo reproduces the pattern safely — the innermost payload is a benign Bash script that only opens the calculator (gnome-calculator -> kcalc -> xcalc), so there is zero real payload, no network, no destruction. MetaDefender Archive Engine recursively unpacks archives across every nesting level, applies deep scanning to each extracted file, and enforces configurable limits on depth and file count, so deeply hidden droppers like the Spark RAT loader behind the APT24 supply-chain campaign cannot escape detection.
**Real incident:** this attack technique corresponds to a real-world event — [read the daily digest](https://blog.andyshih.uk/en/blog/ciso-daily-digest-20260827/).

---

## What's in this package

This demo ships a **static file sample — nothing executes**. The zip contains two folders:

| Folder | Contents |
|---|---|
| `malicious/` | The attack sample — a static document whose **content** carries the malicious payload (e.g. an embedded prompt-injection instruction) |
| `clean/` | The same content after MetaDefender processing — payload removed |

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

- Open/inspect `malicious-archive.zip` — the malicious content (payload marker) is
  embedded in the file's data; nothing executes.

**Expected result:** the malicious content (e.g. the injection instruction) is present in
the file; with **Archive Engine** in the pipeline, the file is flagged and blocked before it
reaches the user or an LLM.

### 3. Show the protection (clean)

- Open `clean-archive.zip` — no payload, sanitized content.

**Expected result:** the sanitized file is clean — no payload, nothing to flag.

---

## Expected behavior (file by file)

| File | What you should observe |
|---|---|
| malicious files | malicious-archive.zip → payload buried under 6 nested zip layers |
| clean files | no payload, sanitized content |

> Behavior notes are verified by the QA suite on every build (see the QA checklist below).

---

## Safety

- ✅ All payloads are **benign by construction**: static text/data samples — **nothing executes**.
- ✅ No real malware, no network callbacks (any network reference targets `example.com` or loopback).


## QA checklist (verified on this build)

- [ ] `unzip -t ar-nested-sparkrat-20260828.zip` → no errors
- [ ] malicious file carries the injection marker; clean file does not
- [ ] no placeholder content in clean files
- [ ] format magic bytes verified (PDF `%PDF`, ZIP `PK`, PNG `\x89PNG`, 7z `7z\xbc\xaf`, OOXML `PK`)

## How MetaDefender catches this

Payload buried in nested ZIP layers (T1027.003) (MITRE ATT&CK [T1027.003](https://attack.mitre.org/techniques/T1027.003/))
is neutralized by **Archive Engine** before the file reaches the user — see the blog for the
full story and detection details.
