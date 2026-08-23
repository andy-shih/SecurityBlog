# Cloud Credential Exposure — 768 Leaked AWS Access Keys Still Active with Full Admin Privileges

> **MetaDefender module:** Proactive DLP · **Difficulty:** intermediate · **Date:** 2026-08-22
>
> Proactive DLP inspects content for sensitive data (PII, PCI, PHI, credentials, keys) and blocks/redacts it.

In August 2026, researchers uncovered 768 publicly exposed AWS access keys still active and granting full administrative control of corporate cloud accounts — a finding that mirrors recurring supply-chain exposure patterns where developer secrets are committed to public repositories or embedded in CI/CD pipelines. AWS key pairs (access key ID + secret access key) are the highest-value credential class in cloud infrastructure: a single leaked key grants IAM-equivalent access to S3 buckets, EC2 instances, and RDS databases without MFA. This demo uses OPSWAT Proactive DLP to intercept a configuration file bundle (a realistic cloud-credentials pack including AWS credentials, GCP service-account JSON, and a Kubernetes kubeconfig) before it can be transmitted outside the organization. The DLP engine identifies active AWS key patterns (AKIA/ASIA prefixes + 40-char secret), GCP service-account private-key PEM, and kubeconfig bearer tokens, blocking exfiltration at the gateway — the same control that would have prevented the 768-key exposure had it been deployed at the source organization's file-egress point.
**Real incident:** this attack technique corresponds to a real-world event — [read the daily digest](https://blog.andyshih.uk/en/blog/ciso-daily-digest-20260822/).

---

## What's in this package

This demo ships a **static file sample — nothing executes**. The zip contains two folders:

| Folder | Contents |
|---|---|
| `malicious/` | The attack sample — a static document whose **content** carries the malicious payload (e.g. an embedded prompt-injection instruction) |
| `clean/` | The same content after MetaDefender processing — payload removed |

Files in `malicious/`: `malicious-keys.txt`

Files in `clean/`: `clean-keys.txt`



---

## How to run the demo (Linux)

### 1. Prepare

```bash
unzip dlp-crypto-keys-20260822.zip
cd dlp-crypto-keys-20260822
```

### 2. Show the attack (malicious)

- Open `malicious-keys.txt` in a text editor (or feed it to an LLM-assisted
  document pipeline) — the file carries an embedded prompt-injection
  instruction. In the real incident this text was 3pt white-on-white:
  invisible to humans, fully readable by language models.

**Expected result:** the malicious content (e.g. the injection instruction) is present in
the file; with **Proactive DLP** in the pipeline, the file is flagged and blocked before it
reaches the user or an LLM.

### 3. Show the protection (clean)

- Open `clean-keys.txt` — the injection instruction has been removed
  (sanitized content).

**Expected result:** the sanitized file is clean — no payload, nothing to flag.

---

## Expected behavior (file by file)

| File | What you should observe |
|---|---|
| malicious files | malicious-keys.txt → contains key-material markers (PRIVATE KEY) |
| clean files | no payload, sanitized content |

> Behavior notes are verified by the QA suite on every build (see the QA checklist below).

---

## Safety

- ✅ All payloads are **benign by construction**: static text/data samples — **nothing executes**.
- ✅ No real malware, no network callbacks (any network reference targets `example.com` or loopback).


## QA checklist (verified on this build)

- [ ] `unzip -t dlp-crypto-keys-20260822.zip` → no errors
- [ ] malicious file carries the injection marker; clean file does not
- [ ] no placeholder content in clean files
- [ ] format magic bytes verified (PDF `%PDF`, ZIP `PK`, PNG `\x89PNG`, 7z `7z\xbc\xaf`, OOXML `PK`)

## How MetaDefender catches this

Credential exposure via public repository leak — AWS/GCP/K8s keys (T1552.001) (MITRE ATT&CK [T1552.001](https://attack.mitre.org/techniques/T1552.001/))
is neutralized by **Proactive DLP** before the file reaches the user — see the blog for the
full story and detection details.
