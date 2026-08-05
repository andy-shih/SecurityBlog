# Sandbox emulates macro-enabled DOCM attack chain (Qakbot/Emotet-style)

**MetaDefender module:** Adaptive Sandbox · **Platform:** any browser (demo runs on **MetaDefender Aether**) · **Difficulty:** advanced

> ⚠️ 此 demo 的主角不是本機執行，而是 **MetaDefender Aether** 雲端沙箱：把檔案上傳後，Aether 會以 Windows 環境模擬開啟文件，並畫出完整的行為樹（Emulation Data）。上傳 `malicious/malicious-invoice.docm` 即可看到 winword → PowerShell → 網路 beacon → 檔案投放的攻擊鏈。

---

## What this demo shows

Real phishing campaigns (Qakbot, Emotet and their successors) deliver macro-enabled Office documents: a realistic invoice opens, the `AutoOpen` macro runs, checks the victim's language (geofencing), delays to dodge sandbox heuristics, then launches PowerShell which beacons out and drops next-stage files.

This package contains a **benign** recreation of that chain — every payload is a placeholder:

| File | Behavior |
|---|---|
| `malicious/malicious-invoice.docm` | Macro-enabled invoice. On open (in Aether's emulation): locale check → 6s delay → env checks → drops `%TEMP%\msdll.dat` → beacons `https://aether-demo-beacon.example.com/gf` → spawns PowerShell stage 1 → stage 1 beacons, drops `%APPDATA%\Local\Temp\srv.dat`, opens `calc.exe` (visible impact), spawns PowerShell stage 2 → stage 2 beacons and drops `%APPDATA%\Local\Temp\dll.dat` |
| `clean/clean-invoice.docx` | The same invoice **after processing** — macro removed. Opens as a normal document, no emulation chain |

**MITRE ATT&CK:** T1204.002 Malicious File · T1566.001 Spearphishing Attachment · T1059.001 PowerShell · T1140 Deobfuscate/Decode Files or Information · T1071.001 Web Protocols

---

## How to demo (5 minutes)

### Aether emulation tree

1. Sign in to **MetaDefender Aether** → **REPORTS** → submit `malicious/malicious-invoice.docm`.
2. Wait for emulation to complete (a few minutes).
3. Open the report: **CONFIRMED THREAT** label, tags `macros` / `obfuscated` / `evasive` / `geofencing` / `macros-on-open`.
4. Open the **Emulation Data** tab and expand the tree:

```
winword.exe
├── File: %TEMP%\msdll.dat
├── Network: https://aether-demo-beacon.example.com/gf
└── Process: powershell.exe
    ├── Network: http://aether-demo-beacon.example.com/stage1
    ├── File: %APPDATA%\Local\Temp\srv.dat
    ├── Process: calc.exe
    └── Process: powershell.exe
        ├── Network: http://aether-demo-beacon.example.com/stage2
        └── File: %APPDATA%\Local\Temp\dll.dat
```

5. Contrast: submit `clean/clean-invoice.docx` — a clean document report, no macros, no attack chain.

### Local verification (optional)

```bash
unzip sbx-macro-docm-20260805.zip
python3 -m pip install oletools      # or use your distro package
olevba malicious/malicious-invoice.docm    # shows AutoOpen / Document_Open / Deobf
olevba clean/clean-invoice.docx            # "No VBA or XLM macros found"
unzip -t malicious/malicious-invoice.docm  # zip integrity
```

---

## Technical detail: what the macro does

The VBA module (`NewMacros`) implements the classic macro-dropper pattern:

1. **Geofencing** — `Application.LanguageSettings.LanguageID(2)`; only zh-TW (1028), zh-CN (2052), en-US (1033), ja (1041), ko (1042) proceed. On any other locale the macro exits silently.
2. **Evasion** — 6-second `Timer`/`DoEvents` delay; exits if `COMPUTERNAME` contains `VBOX` or the user is `WDAGUtilityAccount` (Windows Defender sandbox account).
3. **Obfuscation** — the PowerShell command is stored as an XOR-encoded hex string and decoded at runtime by `Deobf`; PowerShell itself runs with `-enc` (base64).
4. **Execution chain** — `CreateObject("MSXML2.XMLHTTP")` beacon (visible under winword) → `Shell` launches `powershell -nop -w hidden -enc <stage1>` → stage 1 beacons, writes `srv.dat`, opens `calc.exe`, spawns stage 2 → stage 2 beacons and writes `dll.dat`.

All URLs use `aether-demo-beacon.example.com` (RFC 2606 reserved — cannot resolve to a real host). Files written are placeholder text.

---

## Safety

- Benign payloads only: `calc.exe`, `example.com` beacons, placeholder text files.
- No real malware, no real C2, nothing destructive.
- The `.docm` is safe to submit to Aether; do **not** open it on a production Windows machine with macros enabled (it WILL open the calculator).
