# Malicious npm Dependency Powering Wallet-Draining Browser Extensions (2026-08-29 CISO Daily Digest)

> **MetaDefender module:** SBOM · **Difficulty:** intermediate · **Date:** 2026-08-31
>
> SBOM analyzes the software components inside a file and cross-references them against vulnerability intelligence.

The 2026-08-29 CISO Daily Digest reported that 19 Chrome and Edge browser extensions were found carrying wallet-stealing and crypto-draining code, silently exfiltrating cryptocurrency from affected users — a supply-chain-driven campaign. The same digest flagged active exploitation of the Cosmos EVM flaw (Cosmos Labs) and chained PaperCut flaws (CVE-2023-27350 / CVE-2023-27351, unauthenticated remote code execution). Like the vast majority of modern web software, these extensions are assembled from third-party npm packages, and a single vulnerable or compromised dependency is all it takes to inject wallet-draining logic into a shipped product. This demo reproduces that supply-chain foothold safely: a synthetic `malicious-package.json` stands in for an extension's build manifest that pins known-vulnerable dependency versions — `lodash` 4.17.20, `minimist` 1.2.5, `async` 2.6.3 (each with publicly-known CVEs) — while the `clean-package.json` counterpart pins only a vetted, patched component (`lodash` 4.17.21). Nothing is executed and no real keys are touched; the only effect is to show how a vulnerable dependency enters the build tree. OPSWAT SBOM analysis inspects the dependency tree BEFORE the artifact ships, identifies the vulnerable / compromised components (the T1195.001 supply-chain foothold), and blocks them — so a wallet-draining extension never reaches end users (MITRE ATT&CK T1195.001 Supply Chain Compromise: Software Dependencies and Development Tools).
**Real incident:** this attack technique corresponds to a real-world event — [read the daily digest](https://blog.andyshih.uk/en/blog/ciso-daily-digest-20260829/).

---

## What's in this package

This demo ships a **static archive sample — nothing executes**. The zip contains two folders:

| Folder | Contents |
|---|---|
| `malicious/` | The attack archive — a static file whose **payload hides inside the archive layers** (no executable runs on open) |
| `clean/` | The same content after MetaDefender processing — threat removed, nothing hidden |

Files in `malicious/`: `malicious-deps.zip`, `malicious-package.json`

Files in `clean/`: `clean-package.json`



---

## How to run the demo (Linux)

### 1. Prepare

```bash
unzip sbom-malicious-walletdrain-20260831.zip
```

### 2. Show the attack (malicious)

- Inspect `malicious-deps.zip` — a nested/abusive archive; the malicious marker is buried inside its layers, invisible to a single-pass scan that only looks at the outer file.
- Inspect `malicious-package.json` — a nested/abusive archive; the malicious marker is buried inside its layers, invisible to a single-pass scan that only looks at the outer file.

**Expected result:** a single-pass scanner sees only a benign outer archive; with
**SBOM** in the pipeline, the engine recursively unpacks every layer, finds the
buried payload, and blocks the file before it reaches the user.

### 3. Show the protection (clean)

- Inspect `clean-package.json` — a clean archive, no hidden payload; after SBOM unpacks and scans every layer, nothing is flagged.

**Expected result:** the clean archive passes — no nested payload, nothing to flag.

---

## Expected behavior (file by file)

| File | What you should observe |
|---|---|
| malicious files | malicious-package.json → pins known-vulnerable versions (lodash 4.17.20, minimist 1.2.5, async 2.6.3) |
| clean files | no payload, sanitized content |

> Behavior notes are verified by the QA suite on every build (see the QA checklist below).

---

## Safety

- ✅ All payloads are **benign by construction**: inert archive content (no executable code, no macros).
- ✅ No real malware, no network callbacks (any network reference targets `example.com` or loopback).

## QA checklist (verified on this build)

- [x] `unzip -t sbom-malicious-walletdrain-20260831.zip` → no errors
- [ ] malicious archive carries the buried payload marker (visible only after recursive unpack)
- [ ] clean archive carries no payload
- [ ] format magic bytes verified (ZIP `PK`, 7z `7z\xbc\xaf`, TAR `ustar`)

## How MetaDefender catches this

Compromise of software dependencies — a build manifest (malicious-package.json) pinning known-vulnerable npm packages (lodash 4.17.20, minimist 1.2.5, async 2.6.3), the T1195.001 supply-chain foothold that lets wallet-draining code reach an extension's users (MITRE ATT&CK [T1195.001](https://attack.mitre.org/techniques/T1195.001/))
is neutralized by **SBOM** before the file reaches the user — see the blog for the
full story and detection details.
