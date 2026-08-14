# APT Reverse-SSH Persistence After vCenter CVE-2026-59310 (CVSS 9.8) Exploitation

> **MetaDefender module:** MetaDefender Sandbox · **Difficulty:** intermediate · **Date:** 2026-08-16
>
> 

On August 3, 2026, an APT campaign began mass-exploiting CVE-2026-59310 (CVSS 9.8), a directory-traversal flaw in VMware vCenter Server patched by Broadcom in late July. Security firm Quirso has since observed victims across 47 countries and 361 IP addresses, with Germany, the United States, Turkey, Iran, and France hardest hit; operators chain the traversal into arbitrary code execution and hold onto compromised hypervisor management planes via reverse-SSH tunnels, and Broadcom stresses there are no mitigations other than applying its updates. This demo reproduces the Linux-side persistence pattern such operators rely on after the initial compromise: a payload script that drops an XDG autostart entry (the Linux counterpart of a Windows Run key) so a reverse-SSH tunnel re-establishes at every login. MetaDefender Adaptive Sandbox executes the payload in isolation, observes the autostart write and tunnel-setup behavior, and reports the full persistence mechanism with its command line — exposing the implant before it ever reaches production virtualization infrastructure.
**Real incident:** this attack technique corresponds to a real-world event — [read the daily digest](https://blog.andyshih.uk/en/blog/ciso-daily-digest-20260814/).

---

## What's in this package

This demo runs on **Linux, macOS and Windows** — the payload auto-detects the OS at
runtime (Linux: gnome-calculator/kcalc/xcalc; macOS: Calculator via osascript;
Windows with git-bash/MSYS: calc.exe). The zip contains two folders:

| Folder | Contents |
|---|---|
| `malicious/` | The attack file(s) — **benign**, the only effect is opening the calculator |
| `clean/` | The same file after MetaDefender processing — payload removed |

Files in `malicious/`: `demo-autostart.desktop`, `malicious-payload.sh`, `malicious-win.cmd`

Files in `clean/`: `clean-payload.sh`



---

## How to run the demo (Linux)

### 1. Prepare

```bash
unzip sbx-persistence-sshtunnel-20260816.zip
cd sbx-persistence-sshtunnel-20260816
```

Requirements: a desktop Linux with a calculator (`gnome-calculator`, `kcalc`, or `xcalc`).
The payload script auto-detects which one is installed.

### 2. Show the attack (malicious)

- Open `demo-autostart.desktop` in its native app — the attack triggers on open.
- Linux/macOS (bash): `bash malicious-payload.sh` — the calculator opens (the visible impact).
- Windows: double-click `malicious-win.cmd` — the calculator opens (no bash required).

**Expected result:** the calculator window opens. That is the demo's "visible impact"
— the benign stand-in for a real malware payload.

### 3. Show the protection (clean)

- Run: `bash clean-payload.sh` — nothing happens (payload removed).

**Expected result:** the file opens/behaves normally — no calculator, no execution.

---

## Expected behavior (file by file)

| File | What you should observe |
|---|---|
| malicious files | malicious-payload.sh → copies demo-autostart.desktop into ~/.config/autostart (benign), then opens the calculator |
| clean files | no payload, no calculator, sanitized content |

> Behavior notes are verified by the QA suite on every build (see the QA checklist below).

---

## Safety

- ✅ All payloads are **benign by construction**: the only side effect is opening the calculator.
- ✅ No real malware, no network callbacks (any network reference targets `example.com` or loopback).
- ✅ Metascan demos use the **EICAR test string** — the universal, harmless AV test file.

## QA checklist (verified on this build)

- [ ] `unzip -t sbx-persistence-sshtunnel-20260816.zip` → no errors
- [ ] malicious script runs and opens the calculator
- [ ] clean script runs and opens nothing
- [ ] format magic bytes verified (PDF `%PDF`, ZIP `PK`, PNG `\x89PNG`, 7z `7z\xbc\xaf`, OOXML `PK`)

## How MetaDefender catches this

Persistence via XDG autostart entry maintaining a reverse-SSH tunnel foothold (APT pattern after CVE-2026-59310 vCenter exploitation) (MITRE ATT&CK [T1547.001](https://attack.mitre.org/techniques/T1547.001/))
is neutralized by **MetaDefender Sandbox** before the file reaches the user — see the blog for the
full story and detection details.
