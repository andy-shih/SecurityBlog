# DPRK-Linked 'ted' Backdoor Compiled Into HAProxy Load Balancers (Rapid7) — Trojanized Server Binaries Flagged by Metascan (2026-09-13 CISO Daily Digest)

> **MetaDefender module:** Metascan · **Difficulty:** intermediate · **Date:** 2026-09-14
> Metascan runs 30+ anti-malware engines in parallel. The demo file is the EICAR test string — the industry-standard, harmless AV test file.

The 2026-09-13 CISO Daily Digest covered Rapid7's disclosure of a previously undocumented North Korea-linked Linux espionage toolkit whose centerpiece, the 'ted' backdoor, was not dropped alongside HAProxy but compiled directly into a trojanized HAProxy 2.8.12 build at two South Korean organizations in the automotive and media sectors — where it may have operated undetected for nine to ten months. ted is not a separate process: it is compiled into HAProxy's own source as a custom plugin, using the load balancer's native filter API, internal memory pools and event scheduler to intercept traffic while genuine load balancing keeps running normally on top of it. Because a load balancer terminates TLS, the implant could read and modify decrypted traffic for every session passing through it: stealing cookies and credentials, redirecting selected visitors (chosen by IP, URL, referrer and User-Agent) to exploit pages, and running remote commands — while erasing its own entries from HAProxy's connection statistics and logs, timestomping its binary to match /usr/bin/ssh, and deleting lines from auth.log, syslog and audit.log. Rapid7 also found trojanized crond, atd, sshd, polkitd and agetty binaries, an SSH credential logger, and the curl-based curlRAT remote-access tool; command-and-control rides fake image requests on domains such as img.monderhouse[.]space and img.darklights[.]store, blended into Naver's pstatic.net traffic pattern. Attribution sits at medium confidence to DPRK-aligned actors: the targeting pattern, simple XOR-based encryption, a custom substitution cipher and command-server infrastructure already linked to APT37 by other threat-intelligence feeds point toward North Korean state involvement, with technical overlaps also drawing comparisons to a concurrent Lazarus Group campaign against South Korean media. Notably, no HAProxy vulnerability was involved — the attackers replaced the legitimate binary after gaining code execution. This demo ships EICAR test files — a classic eicar.com, an eicar.txt, a compiled Windows PE embedding the EICAR string, and a ZIP-wrapped EICAR — standing in for the trojanized HAProxy build and the tampered system binaries, plus a clean control file (no real malware, nothing destructive). MetaDefender Multiscan runs 30+ engines (including ClamAV) over every variant in one pass and flags them all, showing how tampered server binaries are caught at the file boundary — before a weaponized build like ted ever reaches a production load balancer (MITRE ATT&CK T1554 — Compromise Host Software Binary).
**Real incident:** this attack technique corresponds to a real-world event — [read the daily digest](https://blog.andyshih.uk/en/blog/ciso-daily-digest-20260913/).

---

## What's in this package

This demo ships a **static AV-test sample — nothing executes**. The zip contains two folders:

| Folder | Contents |
|---|---|
| `malicious/` | EICAR test files standing in for the malicious binary and staged payloads — no real malware |
| `clean/` | The benign control file after MetaDefender processing — nothing hidden |

Files in `malicious/`: `eicar.com`, `eicar.txt`, `eicar_demo.exe`, `malicious-eicar.zip`

Files in `clean/`: `clean-note.txt`



---

## How to run the demo (Linux)

### 1. Prepare

```bash
unzip ms-ted-haproxy-backdoor-20260914.zip
```

### 2. Show the attack (malicious)

- Inspect `eicar.com` — the classic 68-byte EICAR test file (raw text; the EICAR signature starts at offset 0); any AV engine flags it (ClamAV: `Eicar-Test-Signature`).
- Inspect `eicar.txt` — it contains the exact EICAR test string (the industry-standard, harmless AV test file); any AV engine flags it (ClamAV: `Eicar-Test-Signature`).
- Inspect `eicar_demo.exe` — a compiled Windows PE embedding the EICAR test string (`strings eicar_demo.exe | grep EICAR`); if Wine is installed, running it only prints the EICAR string.
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

- [x] `unzip -t ms-ted-haproxy-backdoor-20260914.zip` → no errors
- [x] `eicar.com` / `eicar.txt` contain the exact EICAR test string
- [x] `eicar_demo.exe` is a Windows PE embedding the EICAR string
- [x] `malicious-eicar.zip` is a valid zip wrapping an EICAR file (recursive-unpack check)
- [x] clean file carries no EICAR marker (no placeholder content)
- [x] automated QA suite passes (structure + execution checks, FAIL=0)

## How MetaDefender catches this

Trojanized server binaries — the 'ted' backdoor is compiled directly into a modified HAProxy 2.8.12 build (and the stager overwrites crond, atd, sshd, polkitd and agetty), so the implant rides inside a legitimate executable that keeps serving normal traffic and exfiltrates via fake-image-request C2; the demo shows malicious binaries crossing the file boundary as EICAR stand-ins, flagged by multiscanning before execution (T1554 Compromise Host Software Binary) (MITRE ATT&CK [T1554](https://attack.mitre.org/techniques/T1554/))
is neutralized by **Metascan** before the file reaches the user — see the blog for the
full story and detection details.

