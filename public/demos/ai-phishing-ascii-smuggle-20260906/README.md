# ASCII Smuggling: Invisible Unicode Tag Characters Split 'Funding' Lures Past Content Filters (Microsoft, 2026-09-05 CISO Daily Digest)

> **MetaDefender module:** OPSWAT AI Content Inspector · **Difficulty:** intermediate · **Date:** 2026-09-06
> AI Content Inspector analyzes document content for AI-generated phishing, prompt injection, and fraud patterns.

Microsoft detailed a high-volume phishing campaign that abuses invisible Unicode tag characters — the deprecated Tags block U+E0000 to U+E007F, which shadows printable ASCII — to split financial lure words such as "funding" so email content filters cannot parse the payload while the message renders normally to humans. The campaign ran roughly February to mid-May 2026 at weekday volumes of 1–2.37 million messages a day (peak February 26), followed a weekly cadence and went nearly silent on weekends; Microsoft links it to the broader AI-generated phishing wave that weaponized the ActiveCampaign marketing platform against Small Business Administration loan applicants (first documented by Fortra FIRE in September 2025) — an example of AI-era evasion techniques being recycled into classical spam. This demo reproduces the construct as a document-borne lure: a DOCX in which each letter of the word "funding" is paired with its invisible U+E0000-block shadow character, so the contiguous keyword never appears in the raw text a lexical filter inspects, while the message still reads as a normal funding-application lure (marked DEMO, executes nothing). A sanitized copy has the shadow characters removed. OPSWAT AI Content Inspector inspects what lexical filters miss: it reads the document content and flags the phishing intent before the lure reaches the inbox or the model (MITRE ATT&CK T1566.001 spearphishing attachment).
**Real incident:** this attack technique corresponds to a real-world event — [read the daily digest](https://blog.andyshih.uk/en/blog/ciso-daily-digest-20260905/).

---

## What's in this package

This demo ships a **static file sample — nothing executes**. The zip contains two folders:

| Folder | Contents |
|---|---|
| `malicious/` | The attack sample — a static document whose **content** carries the malicious payload (e.g. an embedded prompt-injection instruction) |
| `clean/` | The same content after MetaDefender processing — payload removed |

Files in `malicious/`: `malicious-lure.docx`

Files in `clean/`: `clean-lure.docx`



---

## How to run the demo (Linux)

### 1. Prepare

```bash
unzip ai-phishing-ascii-smuggle-20260906.zip
```

### 2. Show the attack (malicious)

- Open/inspect `malicious-lure.docx` — the malicious content (payload marker) is
  embedded in the file's data; nothing executes.

**Expected result:** the malicious content (e.g. the injection instruction) is present in
the file; with **OPSWAT AI Content Inspector** in the pipeline, the file is flagged and blocked before it
reaches the user or an LLM.

### 3. Show the protection (clean)

- Open `clean-lure.docx` — no payload, sanitized content.

**Expected result:** the sanitized file is clean — no payload, nothing to flag.

---

## Expected behavior (file by file)

| File | What you should observe |
|---|---|
| malicious files | malicious-lure.docx → open in Word/LibreOffice: the message reads as a funding-application lure, but raw text extraction/hex dump shows each letter of 'funding' paired with an invisible Unicode TAG shadow character (U+E0000–U+E007F) — the contiguous keyword never appears in the raw text (the 'ASCII smuggling' construct Microsoft documented); clean-lure.docx is the same message with the shadow characters removed |
| clean files | no payload, sanitized content |

> Behavior notes are verified by the QA suite on every build (see the QA checklist below).

---

## Safety

- ✅ All payloads are **benign by construction**: static text/data samples — **nothing executes**.
- ✅ No real malware, no network callbacks (any network reference targets `example.com` or loopback).


## QA checklist (verified on this build)

- [x] `unzip -t ai-phishing-ascii-smuggle-20260906.zip` → no errors
- [ ] malicious file carries the injection marker; clean file does not
- [ ] no placeholder content in clean files
- [ ] format magic bytes verified (PDF `%PDF`, ZIP `PK`, PNG `\x89PNG`, 7z `7z\xbc\xaf`, OOXML `PK`)

## How MetaDefender catches this

Phishing lure obfuscation with deprecated Unicode tag characters (U+E0000–U+E007F, shadowing printable ASCII) to split financial keywords such as 'funding' past lexical content filters (Microsoft-documented 'ASCII smuggling' wave, Feb–mid-May 2026; ActiveCampaign/SBA-loan lure lineage per Fortra FIRE; T1566.001) (MITRE ATT&CK [T1566.001](https://attack.mitre.org/techniques/T1566.001/))
is neutralized by **OPSWAT AI Content Inspector** before the file reaches the user — see the blog for the
full story and detection details.
