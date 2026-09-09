# ChatGPT Hidden Channel: A Planted Prompt Quietly Exfiltrates Gmail via a Shared JFrog Artifactory (Check Point Research, 2026-09-09 CISO Daily Digest)

> **MetaDefender module:** OPSWAT AI Content Inspector · **Difficulty:** intermediate · **Date:** 2026-09-10
> AI Content Inspector analyzes document content for AI-generated phishing, prompt injection, and fraud patterns.

The 2026-09-09 CISO Daily Digest reported a Check Point Research disclosure that lays bare a new class of AI-application risk: a cross-account isolation bypass in ChatGPT. Check Point found that ChatGPT's code-execution sandboxes for different accounts are isolated from the internet and from each other — but they all share an internal JFrog Artifactory package service whose metadata is writable, turning that shared metadata into a hidden cross-account channel. A single instruction planted in a victim's conversation (via a pasted prompt, a shared ChatGPT conversation, or custom-GPT builder instructions) made ChatGPT run two parallel streams in Thinking mode: answering the user normally while silently fetching attacker tasks from the hidden channel, executing them with the victim session's tools and connected-app permissions, and returning the results to the attacker's account. Check Point's proof of concept read the victim's Gmail and exfiltrated it — visible to the user only as a small "Talked to Gmail" activity label — and the channel could also copy chat history and files. OpenAI has decommissioned the affected Artifactory instance, so the channel is no longer usable; the disclosure still models exactly how an attacker can weaponize the file- and content-borne prompts an organization's users paste into AI assistants. This demo safely reproduces the file-borne delivery stage of that attack: the malicious sample (malicious-document.txt) is a realistic shared-workspace briefing that carries an embedded [SYSTEM]-style instruction block modeled on the disclosed attack — telling the assistant to answer normally while, in a silent parallel stream, fetching tasks from the shared package-metadata channel, executing them with connected-app permissions, and posting results back invisibly; the block is plainly marked as a benign demo construct and executes nothing. The clean control sample (clean-document.txt) has the hidden-channel instruction removed — exactly what OPSWAT AI Content Inspector does when it detects and strips such weaponized AI-directed content before it ever reaches an assistant session (MITRE ATT&CK T1566.001 — crafted malicious content delivery as the initial vector for prompt injection; exfiltration over the hidden cross-account channel in the real incident).
**Real incident:** this attack technique corresponds to a real-world event — [read the daily digest](https://blog.andyshih.uk/en/blog/ciso-daily-digest-20260909/).

---

## What's in this package

This demo ships a **static file sample — nothing executes**. The zip contains two folders:

| Folder | Contents |
|---|---|
| `malicious/` | The attack sample — a static document whose **content** carries the malicious payload (content-borne marker — no executable code) |
| `clean/` | The same content after MetaDefender processing — payload removed |

Files in `malicious/`: `malicious-document.txt`

Files in `clean/`: `clean-document.txt`



---

## How to run the demo (Linux)

### 1. Prepare

```bash
unzip ai-prompt-artifactory-20260910.zip
```

### 2. Show the attack (malicious)

- Open `malicious/malicious-document.txt` in a text editor (or feed it to an LLM-assisted
  document pipeline) — the file carries an embedded prompt-injection
  instruction. In real-world incidents such instructions are often
  hidden (white-on-white text, obfuscated formatting, or planted in
  files an agent pipeline ingests) so they are invisible to humans
  but readable by language models.

**Expected result:** the malicious content (payload marker) is present in
the file; with **OPSWAT AI Content Inspector** in the pipeline, the file is flagged and blocked (or
redacted) by policy before it reaches its destination — an inbox, an upload, a
shared drive, or a processing pipeline.

### 3. Show the protection (clean)

- Open `clean/clean-document.txt` — the injection instruction has been removed
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

- [x] `unzip -t ai-prompt-artifactory-20260910.zip` → no errors
- [x] malicious file carries the attack payload marker; clean file does not
- [x] no placeholder content in clean files
- [x] format magic bytes verified (format markers as documented above)

## How MetaDefender catches this

Prompt-injection content delivery + covert cross-account data exfiltration: a planted prompt in a victim's ChatGPT session drives a silent parallel stream that pulls attacker tasks from — and posts results to — a shared internal JFrog Artifactory package service whose writable metadata links otherwise-isolated per-account sandboxes (disclosed by Check Point Research, September 2026; PoC exfiltrated the victim's Gmail via connected-app permissions; OpenAI decommissioned the instance). Demo shows the file-borne delivery stage as a benign .txt pair (T1566.001 — crafted malicious content as the injection-delivery vector) (MITRE ATT&CK [T1566.001](https://attack.mitre.org/techniques/T1566.001/))
is neutralized by **OPSWAT AI Content Inspector** before the file reaches the user — see the blog for the
full story and detection details.
