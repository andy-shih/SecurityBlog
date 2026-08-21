# Skimmed at the Gateway: Magecart / FIN6 Card-Data Theft Meets CVE-2026-71290 TLS Trust Break — Caught by Proactive DLP

> **MetaDefender module:** Proactive DLP · **Difficulty:** intermediate · **Date:** 2026-08-21
>
> Proactive DLP inspects content for sensitive data (PII, PCI, PHI, credentials, keys) and blocks/redacts it.

Payment-card skimming has evolved from physical POS shimmers into full 'Magecart' web-skimming: financially motivated groups such as FIN6 (the financial-crime actor linked to the sale of millions of stolen card records) inject JavaScript into e-commerce checkout pages to silently capture the PAN, expiry, and CVV and POST them to an attacker-controlled domain. The 2026-08-21 CISO Daily Digest spotlights a fresh trust-break that makes this interception easier — CVE-2026-71290 (CVSS 9.1) in Apache HttpComponents Client, where the async HttpClient's HostnameVerificationPolicy#BUILTIN is ignored, letting a man-in-the-middle present a valid certificate for a different domain and forge server responses, including a fake payment-gateway confirmation that masks the theft. This demo recreates the data-exposure stage safely: the malicious sample is an exported spreadsheet `malicious-cards.xlsx` containing two real-format but clearly test cardholder rows — '4111-1111-1111-1111' (Visa test BIN) and '5555-5555-5555-4444' (Mastercard test BIN) — exactly the structured PAN data a skimmer would exfiltrate. No live cardholder data, no network calls, no destruction. MetaDefender Proactive DLP inspects the file's actual content (not just the .xlsx name), fingerprints the PAN patterns, and blocks or redacts the export before it can leave the environment. The clean counterpart shows the same export after DLP has redacted the card numbers to 'redacted', demonstrating the prevent-and-protect workflow.
**Real incident:** this attack technique corresponds to a real-world event — [read the daily digest](https://blog.andyshih.uk/en/blog/ciso-daily-digest-20260821/).

---

## What's in this package

This demo ships a **static file sample — nothing executes**. The zip contains two folders:

| Folder | Contents |
|---|---|
| `malicious/` | The attack sample — a static document whose **content** carries the malicious payload (e.g. an embedded prompt-injection instruction) |
| `clean/` | The same content after MetaDefender processing — payload removed |

Files in `malicious/`: `malicious-cards.xlsx`

Files in `clean/`: `clean-cards.xlsx`



---

## How to run the demo (Linux)

### 1. Prepare

```bash
unzip dlp-credit-cards-20260821.zip
cd dlp-credit-cards-20260821
```

### 2. Show the attack (malicious)

- Open/inspect `malicious-cards.xlsx` — the malicious content (payload marker) is
  embedded in the file's data; nothing executes.

**Expected result:** the malicious content (e.g. the injection instruction) is present in
the file; with **Proactive DLP** in the pipeline, the file is flagged and blocked before it
reaches the user or an LLM.

### 3. Show the protection (clean)

- Open `clean-cards.xlsx` — no payload, sanitized content.

**Expected result:** the sanitized file is clean — no payload, nothing to flag.

---

## Expected behavior (file by file)

| File | What you should observe |
|---|---|
| malicious files | malicious-cards.xlsx → contains the test card number 4111-1111-1111-1111 |
| clean files | no payload, sanitized content |

> Behavior notes are verified by the QA suite on every build (see the QA checklist below).

---

## Safety

- ✅ All payloads are **benign by construction**: static text/data samples — **nothing executes**.
- ✅ No real malware, no network callbacks (any network reference targets `example.com` or loopback).


## QA checklist (verified on this build)

- [ ] `unzip -t dlp-credit-cards-20260821.zip` → no errors
- [ ] malicious file carries the injection marker; clean file does not
- [ ] no placeholder content in clean files
- [ ] format magic bytes verified (PDF `%PDF`, ZIP `PK`, PNG `\x89PNG`, 7z `7z\xbc\xaf`, OOXML `PK`)

## How MetaDefender catches this

Payment card (PAN) data exfiltration — Magecart-style web skimmer (T1005) (MITRE ATT&CK [T1005](https://attack.mitre.org/techniques/T1005/))
is neutralized by **Proactive DLP** before the file reaches the user — see the blog for the
full story and detection details.
