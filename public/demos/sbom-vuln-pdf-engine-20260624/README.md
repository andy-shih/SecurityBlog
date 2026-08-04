# PDF produced by outdated engine with known CVEs

> **MetaDefender module:** SBOM · **Difficulty:** intermediate · **Date:** 2026-06-24
>
> SBOM analyzes the software components inside a file and cross-references them against vulnerability intelligence.

The FFmpeg multimedia framework patched PixelSmash, a critical remote code execution flaw triggered by processing a crafted media file; because FFmpeg is embedded in countless media and content pipelines, the vulnerable component becomes a backdoor into every product that ships it. The same logic applies to document generation: a PDF rendered by an outdated library inherits every vulnerability of that engine (MITRE T1195.001), and the file looks perfectly normal to users and scanners alike. SBOM analysis closes this gap by inventorying the components embedded in a file, resolving their versions, and matching them against vulnerability databases to surface known CVEs. The demo uses a benign PDF generated with an outdated engine, so it is safe to open while demonstrating the risk clearly.
**Real incident:** this attack technique corresponds to a real-world event — [read the daily digest](https://blog.andyshih.uk/en/blog/ciso-daily-digest-20260624/).

---

## What's in this package

This demo is **Linux-only**. The zip contains two folders:

| Folder | Contents |
|---|---|
| `malicious/` | The attack file(s) — **benign**, the only effect is opening the calculator |
| `clean/` | The same file after MetaDefender processing — payload removed |

Files in `malicious/`: `malicious-report.pdf`

Files in `clean/`: `clean-report.pdf`

---

## How to run the demo (Linux)

### 1. Prepare

```bash
unzip sbom-vuln-pdf-engine-20260624.zip
cd sbom-vuln-pdf-engine-20260624
```

Requirements: a desktop Linux with a calculator (`gnome-calculator`, `kcalc`, or `xcalc`).
The payload script auto-detects which one is installed.

### 2. Show the attack (malicious)

- Run: `bash malicious-report.pdf` — the calculator opens (the visible impact).

**Expected result:** the calculator window opens. That is the demo's "visible impact"
— the benign stand-in for a real malware payload.

### 3. Show the protection (clean)

- Run: `bash clean-report.pdf` — nothing happens (payload removed).

**Expected result:** the file opens/behaves normally — no calculator, no execution.

---

## Safety

- ✅ All payloads are **benign by construction**: the only side effect is opening the calculator.
- ✅ No real malware, no network callbacks (any network reference targets `example.com` or loopback).
- ✅ Metascan demos use the **EICAR test string** — the universal, harmless AV test file.

## QA checklist (verified on this build)

- [ ] `unzip -t sbom-vuln-pdf-engine-20260624.zip` → no errors
- [ ] malicious script runs and opens the calculator
- [ ] clean script runs and opens nothing
- [ ] format magic bytes verified (PDF `%PDF`, ZIP `PK`, PNG `\x89PNG`, 7z `7z\xbc\xaf`, OOXML `PK`)

## How MetaDefender catches this

Known-vulnerable embedded component (MITRE ATT&CK [T1195.001](https://attack.mitre.org/techniques/T1195/001/))
is neutralized by **SBOM** before the file reaches the user — see the blog for the
full story and detection details.
