# Gitea diffpatch RCE (CVE-2026-60004, CISA KEV) — Sandbox Detonates the Hook Planted as the Gitea Service Account (2026-09-11 CISO Daily Digest)

> **MetaDefender module:** MetaDefender Sandbox · **Difficulty:** intermediate · **Date:** 2026-09-12
> MetaDefender Sandbox executes the file in an isolated environment and reports behavior (network, filesystem, processes).

The 2026-09-11 CISO Daily Digest covered Shadowserver's warning that 8,393 internet-facing Gitea instances remained vulnerable to CVE-2026-60004 — a critical remote-code-execution flaw (CVSS 9.8) reported by Salesforce researcher Shai Rod, fixed in Gitea 1.27.1 on July 27 and added to CISA's Known Exploited Vulnerabilities catalog on August 25 after attackers began deploying cryptocurrency-mining malware on unpatched servers, with vulnerable instances concentrated in China, Germany and the United States. The bug lives in Gitea's diffpatch API: a submitted patch should only touch the Git index ('git apply --cached'), but sending the same patch twice forces an add/add collision that drops git apply into its three-way-merge fallback, which writes the file to disk — so anyone with ordinary repository write access (trivial where Gitea's default open registration is left on) can plant an executable Git hook (hooks/post-index-change) that Git runs as the Gitea service account — the account whose compromise the vendor advisory ties to exposure of app.ini, application secrets, database and OAuth credentials. This demo safely reproduces the payload stage of that intrusion: malicious-git-hook.sh is the hook an attacker plants — running it shows the only visible impacts, a local 'hook fired' marker file (./git-hook-fired.log) and the calculator (standing in for the attacker's command), with annotations retracing the CVE-2026-60004 chain; malicious-crafted-patch.diff is the static crafted request body that plants the hook, and malicious-win.cmd reproduces the same impact for Windows-hosted Gitea. Nothing destructive, no network callbacks; the clean control sample (clean-git-hook.sh) has the attack sequence removed and opens nothing. MetaDefender Sandbox detonates the suspicious hook script in an isolated environment, observes the command-execution behavior, and flags the implant before it can run on production developer infrastructure (MITRE ATT&CK T1059.004 — Command and Scripting Interpreter: Unix Shell).
**Real incident:** this attack technique corresponds to a real-world event — [read the daily digest](https://blog.andyshih.uk/en/blog/ciso-daily-digest-20260911/).

---

## What's in this package

This demo runs on **Linux**. The zip contains two folders:

| Folder | Contents |
|---|---|
| `malicious/` | The attack file(s) — **benign**, the only effect is opening the calculator |
| `clean/` | The same file after MetaDefender processing — payload removed |

Files in `malicious/`: `malicious-crafted-patch.diff`, `malicious-git-hook.sh`, `malicious-win.cmd`

Files in `clean/`: `clean-git-hook.sh`



---

## How to run the demo (Linux)

### 1. Prepare

```bash
unzip sbx-persistence-githook-20260912.zip
```

Requirements: a desktop Linux with a calculator (`gnome-calculator`, `kcalc`, or `xcalc`).
The payload script auto-detects which one is installed.

### 2. Show the attack (malicious)

- Inspect `malicious/malicious-crafted-patch.diff` — the crafted patch sent to the diffpatch API (static text; the Git hook it plants is shipped as `malicious-git-hook.sh`; nothing executes).
- Linux/macOS (bash): `bash malicious/malicious-git-hook.sh` — the calculator opens (the visible impact).
- Windows: double-click `malicious/malicious-win.cmd` — the calculator opens (no bash required).

**Expected result:** the calculator window opens. That is the demo's "visible impact"
— the benign stand-in for a real malware payload.

### 3. Show the protection (clean)

- Run: `bash clean/clean-git-hook.sh` — nothing happens (payload removed).

**Expected result:** the file opens/behaves normally — no calculator, no execution.

---

## Expected behavior (file by file)

| File | What you should observe |
|---|---|
| malicious files | malicious-git-hook.sh → the attacker-planted Git hook (CVE-2026-60004): running it writes a local 'hook fired' marker (./git-hook-fired.log) and opens the calculator — the simulated attacker command the hook runs as the Gitea service user; malicious-crafted-patch.diff → the static crafted patch that plants the hook (nothing executes); malicious-win.cmd → the same impact for Windows hosts |
| clean files | no payload, no calculator, sanitized content |

> Behavior notes are verified by the QA suite on every build (see the QA checklist below).

---

## Safety

- ✅ All payloads are **benign by construction**: the only side effect is opening the calculator.
- ✅ No real malware, no network callbacks (any network reference targets `example.com` or loopback).


## QA checklist (verified on this build)

- [x] `unzip -t sbx-persistence-githook-20260912.zip` -> no errors (zip integrity)
- [x] malicious script runs and opens the calculator - execution-verified by the QA suite on this build
- [x] clean script runs and opens nothing - execution-verified by the QA suite on this build
- [x] automated QA suite passes (structure + execution checks, FAIL=0 on this build)

## How MetaDefender catches this

Malicious Git hook planted via a crafted diffpatch submission on a Gitea server (CVE-2026-60004: the patch is applied twice so the add/add collision forces git apply's three-way-merge fallback, writing an executable hook to disk that runs shell commands as the Gitea service account) — sandbox detonation of the hook script demonstrates the command-execution stage (T1059.004 Command and Scripting Interpreter: Unix Shell) (MITRE ATT&CK [T1059.004](https://attack.mitre.org/techniques/T1059.004/))
is neutralized by **MetaDefender Sandbox** before the file reaches the user — see the blog for the
full story and detection details.
