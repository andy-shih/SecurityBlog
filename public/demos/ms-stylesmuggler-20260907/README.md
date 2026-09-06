# StyleSmuggler: Unpatched Magento Zero-Day Backdoor Implants Flagged by Metascan (2026-09-06 CISO Daily Digest)

> **MetaDefender module:** Metascan · **Difficulty:** intermediate · **Date:** 2026-09-07
> Metascan runs 30+ anti-malware engines in parallel. The demo file is the EICAR test string — the industry-standard, harmless AV test file.

The 2026-09-06 CISO Daily Digest reported that Dutch e-commerce security firm Sansec published a September 5 advisory for StyleSmuggler, an unauthenticated vulnerability in Magento Open Source and Adobe Commerce that lets attackers run code on a store's server and install a persistent backdoor — with exploitation already underway since September 4 ('Sansec is publishing early because stores are being compromised right now'). As of September 6 Adobe had published no advisory, CVE identifier, patch, or workaround; Sansec says all current versions are affected, including 2.4.9, and the first observed victim ran 2.4.6-p15 with Adobe's July and August 2026 updates applied — patch status did not matter. Hosting firm Disrex Group, which responded to two compromised stores, confirmed a Sansec Shield customer (Store A, Magento 2.4.8) was breached at 23:10 UTC on September 4 with Shield active, hours before Sansec's first blocking rules existed. The implant runs as a background process disguised under the legitimate kernel-thread name [kworker/u:8:0], installs a ~1.9 MB stripped static Rust binary (x86-64 and arm64) at ~/.local/share/.gvfsd/gvfsd-user, and re-arms itself every five minutes through a cron entry written directly to the spool file — on one store the line appeared 1,728 times; on another the implant made no outbound connections at all but held 28 connections to the local Redis instance, reading Magento's session storage. For defenders, the hard truth of this episode is that a fully patched, actively protected store was breached anyway — and every implant still had to arrive and execute somewhere. This demo reproduces the file-boundary half of that defense safely: the package ships EICAR test files standing in for the implant-shaped binary and its staged payloads — a classic eicar.com, an eicar.txt, a compiled Windows PE embedding the EICAR string, and a ZIP-wrapped EICAR — alongside a clean control file (no real malware, nothing destructive). MetaDefender Metascan runs 30+ anti-malware engines (including ClamAV) over every variant in a single pass and flags them all, showing how a backdoored binary is stopped at the gateway, before it ever lands and executes on a store server or endpoint (MITRE ATT&CK T1190 Exploit Public-Facing Application).
**Real incident:** this attack technique corresponds to a real-world event — [read the daily digest](https://blog.andyshih.uk/en/blog/ciso-daily-digest-20260906/).

---

## What's in this package

This demo ships a **static AV-test sample — nothing executes**. The zip contains two folders:

| Folder | Contents |
|---|---|
| `malicious/` | EICAR test files standing in for the ransomware binary and staged payloads — no real malware |
| `clean/` | The benign control file after MetaDefender processing — nothing hidden |

Files in `malicious/`: `eicar.com`, `eicar.txt`, `eicar_demo.exe`, `malicious-eicar.zip`

Files in `clean/`: `clean-note.txt`



---

## How to run the demo (Linux)

### 1. Prepare

```bash
unzip ms-stylesmuggler-20260907.zip
```

### 2. Show the attack (malicious)

- Inspect `eicar.com` — a compiled sample embedding the EICAR test string (`strings eicar.com | grep EICAR`); if Wine is installed, running it only prints the EICAR string.
- Inspect `eicar.txt` — it contains the exact EICAR test string (the industry-standard, harmless AV test file); any AV engine flags it (ClamAV: `Eicar-Test-Signature`).
- Inspect `eicar_demo.exe` — a compiled sample embedding the EICAR test string (`strings eicar_demo.exe | grep EICAR`); if Wine is installed, running it only prints the EICAR string.
- Inspect `malicious-eicar.zip` — a zip archive wrapping an EICAR test file; the marker is only visible after recursive unpacking (`unzip -l malicious-eicar.zip`, then scan the inner file).

**Expected result:** a single-pass scan already flags the flat EICAR files; the
EICAR wrapped inside the zip is only visible after recursive unpacking — with
**Metascan** in the pipeline, all variants are scanned in one pass and every one
is blocked before it reaches the user.

### 3. Show the protection (clean)

- Inspect `clean-note.txt` — a benign control file; no EICAR marker, nothing is flagged.

**Expected result:** the clean control file passes — no EICAR marker, nothing to flag.

---

## Expected behavior (file by file)

| File | What you should observe |
|---|---|
| malicious files | eicar.com / eicar.txt / eicar_demo.exe / malicious-eicar.zip → contain the EICAR test string; eicar.com is flagged by ClamAV as `Eicar-Test-Signature`; eicar_demo.exe runs under Wine and prints the EICAR string |
| clean files | no payload, sanitized content |

> Behavior notes are verified by the QA suite on every build (see the QA checklist below).

---

## Safety

- ✅ All payloads are the **EICAR test string** — the industry-standard, harmless AV test file (no real malware, nothing destructive).
- ✅ No network callbacks; nothing executes on open (the PE sample only prints the EICAR string under Wine).

## QA checklist (verified on this build)

- [x] `unzip -t ms-stylesmuggler-20260907.zip` → no errors
- [x] `eicar.com` / `eicar.txt` contain the exact EICAR test string
- [x] `eicar_demo.exe` is a Windows PE embedding the EICAR string
- [x] `malicious-eicar.zip` is a valid zip wrapping an EICAR file (recursive-unpack check)
- [x] clean file carries no EICAR marker (no placeholder content)
- [x] automated QA suite passes (structure + execution checks, FAIL=0)

## How MetaDefender catches this

Unauthenticated remote code execution on public-facing e-commerce servers (Magento Open Source / Adobe Commerce 'StyleSmuggler' zero-day, exploitation since 2026-09-04 per Sansec) planting a persistent server-side backdoor implant disguised as a kernel thread; payloads crossing the file boundary as EICAR stand-ins, flagged by multiscanning before execution (T1190) (MITRE ATT&CK [T1190](https://attack.mitre.org/techniques/T1190/))
is neutralized by **Metascan** before the file reaches the user — see the blog for the
full story and detection details.

