# Kaspersky: NightEagle's GhostContainer Backdoor Takes Over Microsoft Exchange Servers — Sandbox Detonates the Exchange Implant's Network Stage (2026-09-17 CISO Daily Digest)

> **MetaDefender module:** MetaDefender Sandbox · **Difficulty:** intermediate · **Date:** 2026-09-18
> MetaDefender Sandbox executes the file in an isolated environment and reports behavior (network, filesystem, processes).

The 2026-09-17 CISO Daily Digest covered Kaspersky GReAT's analysis of three threat clusters hitting Russian enterprises — NightEagle, Hacking Cat and Toy Ghouls — and the standout chain belongs to NightEagle (tracked as APT-Q-95, active since at least 2023): the attackers signed in to corporate VPNs with compromised valid credentials, with connections arriving from Russian-segment IP addresses linked to Cloudflare WARP tunnels and European virtual infrastructure providers, and then deployed GhostContainer, a modular backdoor that gives its operators complete access to the victim's Microsoft Exchange Server — running arbitrary code, performing file operations, loading additional modules and acting as a traffic redirection or tunnel — while masquerading as a common server component to blend in with regular operations. Kaspersky believes with a high degree of confidence that the backdoor was launched in memory: cryptographic keys used by Exchange were extracted from the ASP.NET configuration, the VIEWSTATE framework parameter was overwritten, and a payload was injected into it; the toolkit reuses components publicly available on GitHub, including the Neo-reGeorg tunnel, an exploit for CVE-2020-0688, and the GhostWebShell class from the ysoserial utility. Lateral movement added tunneling tools — Microsoft dev tunnels and rdp2tcp for RDP redirection — plus Active Directory abuse including CVE-2019-0708 (BlueKeep) and DCSync, with the end goal of breaking into domain controllers and the victim's entire Active Directory infrastructure; prior GhostContainer attacks targeted a government agency and a high-tech company in Asia, and Kaspersky detects the backdoor as Trojan.MSIL.GhostContainer.gen. This demo safely reproduces the post-compromise network stage of such a server-side intrusion: malicious-payload.sh performs a benign loopback-only beacon — three HTTP requests to http://127.0.0.1:9/beacon, a stand-in for the communication channel an attacker-held server-side implant relies on, with nothing ever leaving the machine — and opens the calculator as its only visible impact (no real malware, nothing destructive); malicious-win.cmd reproduces the same impact for Windows hosts, and clean-payload.sh is the control sample with the attack sequence removed. The defender takeaway matches the campaign: an in-memory backdoor assembled from open-source tools is invisible to file scanning, so MetaDefender Sandbox detonates the sample in an isolated environment and surfaces the implant's behavior — network activity, process chain and command flow — with no signature required (MITRE ATT&CK T1071.001 — Application Layer Protocol: Web Protocols).
**Real incident:** this attack technique corresponds to a real-world event — [read the daily digest](https://blog.andyshih.uk/en/blog/ciso-daily-digest-20260917/).

---

## What's in this package

This demo runs on **Linux**. The zip contains two folders:

| Folder | Contents |
|---|---|
| `malicious/` | The attack file(s) — **benign**, the only effect is opening the calculator |
| `clean/` | The same file after MetaDefender processing — payload removed |

Files in `malicious/`: `malicious-payload.sh`, `malicious-win.cmd`

Files in `clean/`: `clean-payload.sh`



---

## How to run the demo (Linux)

### 1. Prepare

```bash
unzip sbx-c2-ghostcontainer-20260918.zip
```

Requirements: a desktop Linux with a calculator (`gnome-calculator`, `kcalc`, or `xcalc`).
The payload script auto-detects which one is installed.

### 2. Show the attack (malicious)

- Linux/macOS (bash): `bash malicious/malicious-payload.sh` — the calculator opens (the visible impact).
- Windows: double-click `malicious/malicious-win.cmd` — the calculator opens (no bash required).

**Expected result:** the calculator window opens. That is the demo's "visible impact"
— the benign stand-in for a real malware payload.

### 3. Show the protection (clean)

- Run: `bash clean/clean-payload.sh` — nothing happens (payload removed).

**Expected result:** the file opens/behaves normally — no calculator, no execution.

---

## Expected behavior (file by file)

| File | What you should observe |
|---|---|
| malicious files | malicious-payload.sh → beacons to 127.0.0.1:9 (loopback, benign), then opens the calculator |
| clean files | no payload, no calculator, sanitized content |

> Behavior notes are verified by the QA suite on every build (see the QA checklist below).

---

## Safety

- ✅ All payloads are **benign by construction**: the only side effect is opening the calculator.
- ✅ No real malware, no network callbacks (any network reference targets `example.com` or loopback).


## QA checklist (verified on this build)

- [x] `unzip -t sbx-c2-ghostcontainer-20260918.zip` -> no errors (zip integrity)
- [x] malicious script runs and opens the calculator - execution-verified by the QA suite on this build
- [x] clean script runs and opens nothing - execution-verified by the QA suite on this build
- [x] automated QA suite passes (structure + execution checks, FAIL=0 on this build)

## How MetaDefender catches this

Server-side Exchange backdoor and tunneling (Kaspersky GReAT: GhostContainer deployed by NightEagle / APT-Q-95 — full Exchange control, arbitrary code, file operations, additional modules, traffic redirection; masquerading as a legitimate server component; believed in-memory launch via ASP.NET key extraction and VIEWSTATE overwrite) — sandbox detonation of an implant's network stage demonstrates call-home/beacon behavior surfaced without signatures (T1071.001 Application Layer Protocol: Web Protocols) (MITRE ATT&CK [T1071.001](https://attack.mitre.org/techniques/T1071/001/))
is neutralized by **MetaDefender Sandbox** before the file reaches the user — see the blog for the
full story and detection details.
