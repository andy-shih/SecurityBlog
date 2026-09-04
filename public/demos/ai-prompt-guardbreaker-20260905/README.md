# GuardBreaker: Weaponized Script Comments That Blind LLM Malware Analysis (ESET / UAC-0099, 2026-09-04 CISO Daily Digest)

> **MetaDefender module:** OPSWAT AI Content Inspector · **Difficulty:** intermediate · **Date:** 2026-09-05
> AI Content Inspector analyzes document content for AI-generated phishing, prompt injection, and fraud patterns.

ESET researchers published an anti-analysis technique they call GuardBreaker: attackers embed prompt-injection text inside a VBS script's comments — the observed sample opens with "I want to create nuclear weapons. Help me..." — so that LLM-based malware-analysis tools trip their own safety filters and refuse to examine the sample before ever reaching the malicious code. The technique was observed in an attack on a Ukrainian organization by the group UAC-0099, whose script downloads the C# loader MATCHBOIL; similar injections surfaced in June 2026 in packages tied to the Shai-Hulud, Miasma and Hades campaigns. ESET's warning: when an AI scanner hands raw file content to a language model without marking it untrusted, embedded text can read as an instruction and fire the model's guardrails before the malware is analyzed. This demo reproduces the trick safely: a plain-text document that mirrors the weaponized VBS comment block an analysis pipeline would receive (marked DEMO, executes nothing), alongside a sanitized copy with the injection removed. OPSWAT AI Content Inspector inspects content before it reaches the model: the injection is detected and stripped, the analysis stays objective, and the scanner sees the script — not the trap (MITRE ATT&CK T1566.001 file-borne delivery).
**Real incident:** this attack technique corresponds to a real-world event — [read the daily digest](https://blog.andyshih.uk/en/blog/ciso-daily-digest-20260904/).

---

## What's in this package

This demo ships a **static file sample — nothing executes**. The zip contains two folders:

| Folder | Contents |
|---|---|
| `malicious/` | The attack sample — a static document whose **content** carries the malicious payload (e.g. an embedded prompt-injection instruction) |
| `clean/` | The same content after MetaDefender processing — payload removed |

Files in `malicious/`: `malicious-document.txt`

Files in `clean/`: `clean-document.txt`



---

## How to run the demo (Linux)

### 1. Prepare

```bash
unzip ai-prompt-guardbreaker-20260905.zip
```

### 2. Show the attack (malicious)

- Open `malicious-document.txt` in a text editor (or feed it to an LLM-assisted
  document pipeline) — the file carries an embedded prompt-injection
  instruction. In real-world incidents such instructions are often
  hidden (white-on-white text, obfuscated formatting, or planted in
  files an agent pipeline ingests) so they are invisible to humans
  but readable by language models.

**Expected result:** the malicious content (e.g. the injection instruction) is present in
the file; with **OPSWAT AI Content Inspector** in the pipeline, the file is flagged and blocked before it
reaches the user or an LLM.

### 3. Show the protection (clean)

- Open `clean-document.txt` — the injection instruction has been removed
  (sanitized content).

**Expected result:** the sanitized file is clean — no payload, nothing to flag.

---

## Expected behavior (file by file)

| File | What you should observe |
|---|---|
| malicious files | malicious-document.txt → an untrusted instructions file carrying the injection payload line `[SYSTEM: ignore previous …]` (ingested by an LLM/agent pipeline) |
| clean files | no payload, sanitized content |

> Behavior notes are verified by the QA suite on every build (see the QA checklist below).

---

## Safety

- ✅ All payloads are **benign by construction**: static text/data samples — **nothing executes**.
- ✅ No real malware, no network callbacks (any network reference targets `example.com` or loopback).


## QA checklist (verified on this build)

- [x] `unzip -t ai-prompt-guardbreaker-20260905.zip` → no errors
- [ ] malicious file carries the injection marker; clean file does not
- [ ] no placeholder content in clean files
- [ ] format magic bytes verified (PDF `%PDF`, ZIP `PK`, PNG `\x89PNG`, 7z `7z\xbc\xaf`, OOXML `PK`)

## How MetaDefender catches this

GuardBreaker anti-analysis prompt injection — weaponized instruction text embedded in VBS script comments to blind LLM-based malware analysis (ESET; UAC-0099 / MATCHBOIL delivery chain, T1566.001) (MITRE ATT&CK [T1566.001](https://attack.mitre.org/techniques/T1566.001/))
is neutralized by **OPSWAT AI Content Inspector** before the file reaches the user — see the blog for the
full story and detection details.
