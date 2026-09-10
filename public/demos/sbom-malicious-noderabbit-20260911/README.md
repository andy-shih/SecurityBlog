# Fake Coding Tests, Real RATs: Mirage Kitten Hides NodeRabbit and PollCat in Trojanized npm Packages (Kaspersky, 2026-09-10 CISO Daily Digest)

> **MetaDefender module:** SBOM · **Difficulty:** intermediate · **Date:** 2026-09-11
> SBOM analyzes the software components inside a file and cross-references them against vulnerability intelligence.

The 2026-09-10 CISO Daily Digest reported Kaspersky's discovery of two previously undocumented cross-platform RATs — NodeRabbit (Node.js) and PollCat (obfuscated JavaScript) — delivered by Mirage Kitten, the Iran-linked APT also tracked as UNC1549, Smoke Sandstorm and Nimbus Manticore. The group impersonates recruiters on LinkedIn and sends software engineers a time-limited 'coding test' whose project archive, hosted on a legitimate-looking Amazon S3 link, carries trojanized npm packages; candidates who run the assessment (npm i && node index.js) launch the RATs before the recruiter's six-digit access code is ever typed — PollCat starts beaconing the moment the app loads — and the challenge README's ban on AI assistants quietly removes the one reviewer most likely to flag the suspicious import. NodeRabbit talks to command infrastructure hosted on Microsoft Azure protected with AES-256-GCM, reads system memory, CPU cores and uptime to detect analysis environments, and later samples planted a fake 'GitHub Copilot Helper' VS Code extension plus Git-hook persistence. Victims have been confirmed in Afghanistan, Egypt and Ethiopia. This demo safely reproduces the file stage of that campaign: malicious-package.json is the trojanized assessment project's manifest, carrying the embedded package (represented here by the benign stand-in 'rank-evaluator', shipped as a local unpublished dependency) alongside known-vulnerable pins (lodash 4.17.20, minimist 1.2.5, async 2.6.3); malicious-deps.zip wraps that manifest with the challenge README exactly as the lure archive would travel, and nothing executes — no code runs anywhere. The clean counterpart ships a remediated manifest with only vetted components. MetaDefender SBOM inspects the dependency tree before the project reaches a developer machine — flagging the unvetted package and vulnerable components that carry the supply-chain foothold (MITRE ATT&CK T1195.001 — Supply Chain Compromise: Software Dependencies and Development Tools).
**Real incident:** this attack technique corresponds to a real-world event — [read the daily digest](https://blog.andyshih.uk/en/blog/ciso-daily-digest-20260910/).

---

## What's in this package

This demo ships **static manifest data — nothing executes**. The zip contains two folders:

| Folder | Contents |
|---|---|
| `malicious/` | The attack sample — a dependency manifest (and the packaged copy as delivered) whose **component list carries the supply-chain exposure**; no executable code |
| `clean/` | The same manifest after MetaDefender processing — unvetted package removed, vulnerable versions upgraded |

Files in `malicious/`: `malicious-deps.zip`, `malicious-package.json`

Files in `clean/`: `clean-package.json`



---

## How to run the demo (Linux)

### 1. Prepare

```bash
unzip sbom-malicious-noderabbit-20260911.zip
```

### 2. Show the attack (malicious)

- Open `malicious/malicious-package.json` in any editor — it is the dependency
  manifest whose component list carries the supply-chain
  exposure: the unvetted embedded package and the pinned
  known-vulnerable versions. Nothing executes.
- Inspect `malicious/malicious-deps.zip` — the same manifest as it travels
  inside the delivered project archive (`unzip -l malicious-deps.zip`);
  the payload is the dependency itself — nothing executes.

**Expected result:** the manifest alone shows an unvetted embedded package and
known-vulnerable pinned versions — exactly the components that let a malicious
dependency reach a developer machine; with **SBOM** in the pipeline, the
dependency tree is inspected and the release can be blocked before it ships.

### 3. Show the protection (clean)

- Open `clean/clean-package.json` — the remediated manifest: unvetted components
  removed, vulnerable versions upgraded to vetted releases.
  Nothing executes.

**Expected result:** the remediated manifest is clean — only vetted components, nothing to flag.

---

## Expected behavior (file by file)

| File | What you should observe |
|---|---|
| malicious files | malicious-package.json → the dependency manifest carrying the supply-chain exposure (unvetted embedded package + pinned vulnerable versions lodash 4.17.20, minimist 1.2.5, async 2.6.3); clean-package.json → vetted components only |
| clean files | no unvetted components, no vulnerable pins |

> Behavior notes are verified by the QA suite on every build (see the QA checklist below).

---

## Safety

- ✅ All samples are **benign by construction**: static manifest data — **nothing executes**.
- ✅ No real malware, no network callbacks, no code runs — the manifests describe (never perform) the attack.

## QA checklist (verified on this build)

- [x] `unzip -t sbom-malicious-noderabbit-20260911.zip` -> no errors (zip integrity)
- [x] packaged copy (`malicious-deps.zip`) carries valid ZIP `PK` magic; clean file carries no placeholder content - verified by the QA suite on this build
- [x] malicious manifest carries the supply-chain exposure (unvetted embedded package + pinned vulnerable versions); clean manifest does not - inspected on this build
- [x] all samples are static data — nothing executes on open

## How MetaDefender catches this

Trojanized job-interview coding challenge delivering malicious npm packages — Mirage Kitten's NodeRabbit (Node.js RAT, Azure-hosted C2, AES-256-GCM, sandbox-evasion checks) and PollCat (obfuscated JavaScript RAT) launch when the candidate runs the assessment project; the demo shows SBOM inspecting the dependency tree before it can reach a developer machine (T1195.001 Supply Chain Compromise: Software Dependencies and Development Tools) (MITRE ATT&CK [T1195.001](https://attack.mitre.org/techniques/T1195.001/))
is neutralized by **SBOM** before the file reaches the user — see the blog for the
full story and detection details.
