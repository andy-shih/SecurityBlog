# ASCII Smuggling: Invisible Unicode Tag Characters Split 'Funding' Lures Past Content Filters (Microsoft, 2026-09-05 CISO Daily Digest)

> **MetaDefender module:** OPSWAT AI Content Inspector · **Difficulty:** intermediate · **Date:** 2026-09-06
> AI Content Inspector analyzes document content for AI-generated phishing, prompt injection, and fraud patterns.

Microsoft detailed a high-volume phishing campaign that abuses invisible Unicode tag characters — the deprecated Tags block U+E0000 to U+E007F, which shadows printable ASCII — to split financial lure words such as "funding" so email content filters cannot parse the payload while the message renders normally to humans. The campaign ran roughly February to mid-May 2026 at weekday volumes of 1–2.37 million messages a day (peak February 26), followed a weekly cadence and went nearly silent on weekends; Microsoft links it to the broader AI-generated phishing wave that weaponized the ActiveCampaign marketing platform against Small Business Administration loan applicants (first documented by Fortra FIRE in September 2025) — an example of AI-era evasion techniques being recycled into classical spam. This demo reproduces the construct as a document-borne lure: a DOCX in which each letter of the word "funding" is paired with its invisible U+E0000-block shadow character, so the contiguous keyword never appears in the raw text a lexical filter inspects, while the message still reads as a normal funding-application lure (marked DEMO, executes nothing). A sanitized copy has the shadow characters removed. OPSWAT AI Content Inspector inspects what lexical filters miss: it reads the document content and flags the phishing intent before the lure reaches the inbox or the model (MITRE ATT&CK T1566.001 spearphishing attachment).
**Real incident:** this attack technique corresponds to a real-world event — [read the daily digest](https://blog.andyshih.uk/en/blog/ciso-daily-digest-20260905/).

---

## What's in this package

This demo ships a **static document sample — nothing executes**. The zip contains two folders:

| Folder | Contents |
|---|---|
| `malicious/` | The attack sample — a DOCX lure whose message text encodes the loan keyword with invisible Unicode TAG characters (U+E0000–U+E007F), one shadow per letter |
| `clean/` | The same message after MetaDefender processing — shadow characters removed, keyword readable |

Files in `malicious/`: `malicious-lure.docx`

Files in `clean/`: `clean-lure.docx`



---

## How to run the demo (Linux)

### 1. Prepare

```bash
unzip ai-phishing-ascii-smuggle-20260906.zip
```

### 2. Show the attack (malicious)

- Open `malicious/malicious-lure.docx` in Word or LibreOffice — it reads as a
  normal funding-application lure (the TAG characters are invisible).
- Verify the construct in the raw text:
  `python3 -c "import zipfile; x=zipfile.ZipFile('malicious/malicious-lure.docx').read('word/document.xml').decode('utf-8'); print(sorted({hex(ord(c)) for c in x if 0xE0000<=ord(c)<=0xE007F}))"`
  — the report shows the shadow characters `0xe0064/0xe0066/0xe0067/0xe0069/0xe006e/0xe0075`
  (the letters d/f/g/i/n/u), and the contiguous plain word never appears.

**Expected result:** a lexical content filter that inspects the raw text never
sees the contiguous keyword, exactly as in the campaign Microsoft documented;
with **OPSWAT AI Content Inspector** in the pipeline, the lure content is inspected and flagged
before it reaches the user or an LLM.

### 3. Show the protection (clean)

- Open `clean/clean-lure.docx` — the same message with the shadow characters
  removed: the keyword is present as plain, readable text.

**Expected result:** the sanitized file is clean — no hidden construct, nothing to flag.

---

## Expected behavior (file by file)

| File | What you should observe |
|---|---|
| malicious files | malicious-lure.docx → open in Word/LibreOffice: the message reads as a funding-application lure, but raw text extraction/hex dump shows each letter of 'funding' paired with an invisible Unicode TAG shadow character (U+E0000–U+E007F) — the contiguous keyword never appears in the raw text (the 'ASCII smuggling' construct Microsoft documented); clean-lure.docx is the same message with the shadow characters removed |
| clean files | decoded plain-text message, no tag characters |

> Behavior notes are verified by the QA suite on every build (see the QA checklist below).

---

## Safety

- ✅ The sample is **benign by construction**: static document text — **nothing executes**.
- ✅ No real malware, no macros, no external links, no network callbacks.

## QA checklist (verified on this build)

- [x] `unzip -t ai-phishing-ascii-smuggle-20260906.zip` -> no errors (zip integrity)
- [x] malicious docx carries the U+E0000–U+E007F tag-shadow construct (lure-keyword letters paired with invisible tag chars) - byte-verified by the QA suite on this build
- [x] plain contiguous “funding” absent from the malicious docx raw text - verified by the QA suite on this build
- [x] clean docx contains the decoded keyword and zero tag characters - verified by the QA suite on this build
- [x] OOXML `PK` magic verified on both files

## How MetaDefender catches this

Phishing lure obfuscation with deprecated Unicode tag characters (U+E0000–U+E007F, shadowing printable ASCII) to split financial keywords such as 'funding' past lexical content filters (Microsoft-documented 'ASCII smuggling' wave, Feb–mid-May 2026; ActiveCampaign/SBA-loan lure lineage per Fortra FIRE; T1566.001) (MITRE ATT&CK [T1566.001](https://attack.mitre.org/techniques/T1566.001/))
is neutralized by **OPSWAT AI Content Inspector** before the file reaches the user — see the blog for the
full story and detection details.
