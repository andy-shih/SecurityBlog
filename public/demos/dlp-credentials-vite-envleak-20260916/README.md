# Vite CVE-2026-39364: Mass Scanners Harvest Cloud Credentials and Terraform State From Exposed Dev Servers (F5 Labs) — Proactive DLP Flags Secrets in Config Files Before They Cross the Boundary (2026-09-15 CISO Daily Digest)

> **MetaDefender module:** Proactive DLP · **Difficulty:** beginner · **Date:** 2026-09-16
> Proactive DLP inspects content for sensitive data (PII, PCI, PHI, credentials, keys) and blocks/redacts it.

The 2026-09-15 CISO Daily Digest covered F5 Labs' documentation of an August 2026 mass-scanning campaign against internet-exposed Vite development servers attacking CVE-2026-39364 (CVSS 8.2): a query-parameter bypass of Vite's server.fs.deny protection, where the ?raw, ?import&raw and ?import&url&inline variants return files the server is supposed to block. The scanners drive requests at the /@fs/ endpoint to pull .env files, AWS and Azure credentials, configurations and backups, terraform.tfstate and serverless.yml state files, and /proc/self/environ — all in cleartext — while impersonating crawler and AI-bot user agents (Googlebot, ClaudeBot, GPTBot, PerplexityBot, OAI-SearchBot and Amazonbot) and forging X-Forwarded-For/X-Real-IP values to slip past IP allowlists and muddy log analysis. Significant scan activity originated from the U.S., Belgium, the Netherlands, Singapore and Taiwan, including Google Cloud IP ranges; only deployments explicitly exposed via --host / server.host (or container port-mapping mistakes) are reachable — by default Vite binds to localhost. The failure mode is a classic one: the secrets live in files (.env, state files, configs), and once a file crosses a boundary — a dev-server response, an upload, an email attachment — there is no second line of defense. This demo ships the credential-bearing config file as a synthetic stand-in: malicious-config.py carries hardcoded API key and database-password patterns (synthetic values only — nothing executes, safe to open anywhere), and clean-config.py shows the remediated version that reads the same values from environment variables. MetaDefender Proactive DLP inspects file content — not just names or extensions — detects credential patterns (API-key formats, password assignments, secrets in config and state files) and blocks, quarantines or alerts before this material leaves the organization (MITRE ATT&CK T1552.001 — Unsecured Credentials: Credentials In Files).
**Real incident:** this attack technique corresponds to a real-world event — [read the daily digest](https://blog.andyshih.uk/en/blog/ciso-daily-digest-20260915/).

---

## What's in this package

This demo ships a **static file sample — nothing executes**. The zip contains two folders:

| Folder | Contents |
|---|---|
| `malicious/` | The attack sample — a static document whose **content** carries the malicious payload (content-borne marker — no executable code) |
| `clean/` | The same content after MetaDefender processing — payload removed |

Files in `malicious/`: `malicious-config.py`

Files in `clean/`: `clean-config.py`



---

## How to run the demo (Linux)

### 1. Prepare

```bash
unzip dlp-credentials-vite-envleak-20260916.zip
```

### 2. Show the attack (malicious)

- Open/inspect `malicious/malicious-config.py` — the malicious content (payload marker) is
  embedded in the file's data; nothing executes.

**Expected result:** the malicious content (payload marker) is present in
the file; with **Proactive DLP** in the pipeline, the file is flagged and blocked (or
redacted) by policy before it reaches its destination — an inbox, an upload, a
shared drive, or a processing pipeline.

### 3. Show the protection (clean)

- Open `clean/clean-config.py` — no payload, sanitized content.

**Expected result:** the sanitized file is clean — no payload, nothing to flag.

---

## Expected behavior (file by file)

| File | What you should observe |
|---|---|
| malicious files | malicious-config.py → contains hardcoded demo API_KEY / DB_PASSWORD |
| clean files | no payload, sanitized content |

> Behavior notes are verified by the QA suite on every build (see the QA checklist below).

---

## Safety

- ✅ All payloads are **benign by construction**: static text/data samples — **nothing executes**.
- ✅ No real malware, no network callbacks (any network reference targets `example.com` or loopback).


## QA checklist (verified on this build)

- [x] `unzip -t dlp-credentials-vite-envleak-20260916.zip` → no errors
- [x] malicious file carries the attack payload marker; clean file does not
- [x] no placeholder content in clean files
- [x] plain-text sample — credential/payload content checks performed (no magic-byte check applicable)

## How MetaDefender catches this

Exposed Vite dev-server file disclosure (CVE-2026-39364) — mass scanners request the /@fs/ endpoint to fetch .env files, cloud credentials and terraform.tfstate in cleartext; the demo shows the secret-bearing config file that Proactive DLP must catch (T1552.001 Unsecured Credentials: Credentials In Files) (MITRE ATT&CK [T1552.001](https://attack.mitre.org/techniques/T1552/001/))
is neutralized by **Proactive DLP** before the file reaches the user — see the blog for the
full story and detection details.
