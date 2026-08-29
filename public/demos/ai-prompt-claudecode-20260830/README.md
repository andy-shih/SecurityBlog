# Prompt-Injection Hijack of Claude Code Auto Mode via Untrusted Project Instructions (2026-08-29 CISO Daily Digest)

> **MetaDefender module:** OPSWAT AI Content Inspector · **Difficulty:** intermediate · **Date:** 2026-08-30
>
> AI Content Inspector analyzes document content for AI-generated phishing, prompt injection, and fraud patterns.

The 2026-08-29 CISO Daily Digest reported that researchers hijacked Anthropic's Claude Code "Auto Mode" — an autonomous coding agent that runs commands without per-step prompts — through indirect prompt injection, turning it into a vehicle for attacker-controlled code execution (Cybernews; CybersecurityNews). The same class of risk generalizes to any autonomous agent (Codex, and others) granted shell or filesystem access: the agent ingests untrusted files from the repositories it works in, and a planted instruction inside one of those files (for example a project instructions file such as CLAUDE.md) is read as authoritative the moment the file is loaded. This demo reproduces the shape safely — a synthetic `malicious-document.txt` standing in for an untrusted project-instructions file carries a hidden `[SYSTEM: ignore previous instructions …]` injection line, while the `clean-document.txt` counterpart has that line removed. Nothing is executed and no real data is touched; the only effect is to show how the buried instruction would override the agent. OPSWAT AI Content Inspector inspects such files BEFORE they reach the agent or an LLM, detects the embedded injection / jailbreak pattern, and blocks the content, so an autonomous coding agent never acts on attacker-controlled instructions (MITRE ATT&CK T1566.001 delivery vector / T1059 execution).
**Real incident:** this attack technique corresponds to a real-world event — [read the daily digest](https://blog.andyshih.uk/en/blog/ciso-daily-digest-20260829/).

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
unzip ai-prompt-claudecode-20260830.zip
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

- [x] `unzip -t ai-prompt-claudecode-20260830.zip` → no errors
- [ ] malicious file carries the injection marker; clean file does not
- [ ] no placeholder content in clean files
- [ ] format magic bytes verified (PDF `%PDF`, ZIP `PK`, PNG `\x89PNG`, 7z `7z\xbc\xaf`, OOXML `PK`)

## How MetaDefender catches this

Indirect prompt injection via an untrusted project-instructions file (CLAUDE.md) hijacking an autonomous AI coding agent's Auto Mode to run attacker-controlled code (T1566.001 delivery / T1059 execution) (MITRE ATT&CK [T1566.001](https://attack.mitre.org/techniques/T1566.001/))
is neutralized by **OPSWAT AI Content Inspector** before the file reaches the user — see the blog for the
full story and detection details.
