// Demo metadata repository — YAML-based source in Phase 2
// Each demo maps to a MetaDefender attack scenario

export interface DemoEntry {
  id: string;
  title: string;
  titleZh: string;
  description: string;
  descriptionZh: string;
  category: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  platforms: string[];
  file_types: string[];
  attack_technique: string;
  mitre_attack_id: string;
  mitre_attack_url?: string;
  metadefender_capabilities: string[];
  estimated_duration: string;
  screenshots?: { label: string; src: string }[];
  download_url: string;
  github_url: string;
  status: 'published' | 'coming_soon';
  created: string;
}

export const demos: DemoEntry[] = [
  {
    id: 'office-macro', title: 'Malicious Office Macro', titleZh: '惡意 Office 巨集',
    description: 'Word document with embedded VBA macro downloads and executes payload. MetaDefender sandbox detects malicious macro behavior before the file reaches the endpoint.',
    descriptionZh: 'Word 文件內嵌 VBA 巨集，可下載並執行惡意負載。MetaDefender 沙箱在檔案送達端點前即偵測到惡意巨集行為。',
    category: 'macro', difficulty: 'beginner', platforms: ['windows'], file_types: ['docm', 'docx'],
    attack_technique: 'Office Macro Execution', mitre_attack_id: 'T1204.002', mitre_attack_url: 'https://attack.mitre.org/techniques/T1204/002/',
    metadefender_capabilities: ['Sandbox', 'Multiscanning'],
    estimated_duration: '15 minutes', status: 'published', download_url: '', github_url: '', created: '2026-06-01',
  },
  {
    id: 'file-extension-mismatch', title: 'File Extension Mismatch', titleZh: '副檔名偽裝',
    description: 'Executable renamed to .txt or .pdf to trick users. MetaDefender Protocol Detection identifies the true file type regardless of extension.',
    descriptionZh: '執行檔被改名為 .txt 或 .pdf 以欺騙使用者。MetaDefender Protocol Detection 無視副檔名，直接辨識真實檔案類型。',
    category: 'mismatch', difficulty: 'beginner', platforms: ['windows', 'linux'], file_types: ['exe', 'txt', 'pdf'],
    attack_technique: 'Masquerading', mitre_attack_id: 'T1036.005',
    metadefender_capabilities: ['File Type Identification'],
    estimated_duration: '3 minutes', status: 'published', download_url: '', github_url: '', created: '2026-06-02',
  },
  {
    id: 'pdf-abuse', title: 'PDF URI Abuse', titleZh: 'PDF URI 濫用',
    description: 'PDF with malicious hyperlinks redirecting users to credential harvesting pages. MetaDefender extracts and analyzes all embedded URIs.',
    descriptionZh: 'PDF 內含惡意超連結，將使用者導向憑證竊取頁面。MetaDefender 提取並分析文件中所有 URI。',
    category: 'pdf', difficulty: 'beginner', platforms: ['windows', 'linux', 'macos'], file_types: ['pdf'],
    attack_technique: 'PDF URI Manipulation', mitre_attack_id: 'T1566.002',
    metadefender_capabilities: ['PDF Analysis', 'Threat Intelligence'],
    estimated_duration: '5 minutes', status: 'published', download_url: '', github_url: '', created: '2026-06-03',
  },
  {
    id: 'archive-abuse', title: 'ZIP Archive Abuse', titleZh: 'ZIP 壓縮檔濫用',
    description: 'Malicious payloads embedded in nested ZIP archives to evade flat-file scanning. MetaDefender recursively extracts and scans every layer.',
    descriptionZh: '攻擊者將惡意負載藏於巢狀 ZIP 壓縮檔中，繞過平面掃描。MetaDefender 遞迴解壓並掃描每一層。',
    category: 'archive', difficulty: 'beginner', platforms: ['windows', 'linux', 'macos'], file_types: ['zip', 'rar', '7z'],
    attack_technique: 'Archive Nesting', mitre_attack_id: 'T1027',
    metadefender_capabilities: ['Archive Extraction', 'Deep CDR'],
    estimated_duration: '5 minutes', status: 'published', download_url: '', github_url: '', created: '2026-06-04',
  },
  {
    id: 'lnk-abuse', title: 'LNK Shortcut Command Injection', titleZh: 'LNK 捷徑指令注入',
    description: 'Windows shortcut file with crafted command-line executing malicious payloads. MetaDefender inspects LNK target paths and arguments.',
    descriptionZh: 'Windows 捷徑檔挾帶特製命令列參數，點選時執行惡意負載。MetaDefender 檢查 LNK 目標路徑與參數。',
    category: 'lnk', difficulty: 'intermediate', platforms: ['windows'], file_types: ['lnk'],
    attack_technique: 'LNK File Execution', mitre_attack_id: 'T1204.001',
    metadefender_capabilities: ['LNK Analysis', 'Deep CDR'],
    estimated_duration: '7 minutes', status: 'published', download_url: '', github_url: '', created: '2026-06-05',
  },
  {
    id: 'svg-abuse', title: 'SVG XML Injection', titleZh: 'SVG XML 注入',
    description: 'SVG vector image contains embedded JavaScript that executes when rendered. MetaDefender detects and sanitizes embedded scripts.',
    descriptionZh: 'SVG 向量圖檔內嵌 JavaScript，渲染時自動執行。MetaDefender 偵測並淨化內嵌腳本。',
    category: 'script', difficulty: 'intermediate', platforms: ['windows', 'linux', 'macos'], file_types: ['svg'],
    attack_technique: 'XML Injection via SVG', mitre_attack_id: 'T1059.007',
    metadefender_capabilities: ['Deep CDR', 'Threat Intelligence'],
    estimated_duration: '8 minutes', status: 'published', download_url: '', github_url: '', created: '2026-06-06',
  },
  {
    id: 'iso-container', title: 'ISO Container Bypass', titleZh: 'ISO 容器繞過',
    description: 'Malware packaged inside ISO image files to bypass Mark-of-the-Web protections. MetaDefender extracts and scans ISO contents before mount.',
    descriptionZh: '惡意軟體包裝在 ISO 映像檔中，繞過 Mark-of-the-Web 保護機制。MetaDefender 在掛載前即提取並掃描 ISO 內容。',
    category: 'container', difficulty: 'intermediate', platforms: ['windows'], file_types: ['iso'],
    attack_technique: 'ISO Mount Bypass', mitre_attack_id: 'T1553.005',
    metadefender_capabilities: ['Deep CDR', 'Sandbox'],
    estimated_duration: '10 minutes', status: 'published', download_url: '', github_url: '', created: '2026-06-07',
  },
  {
    id: 'embedded-javascript', title: 'Embedded JavaScript in PDF', titleZh: 'PDF 內嵌 JavaScript',
    description: 'PDF contains embedded JavaScript that executes on open. MetaDefender PDF parser extracts and analyzes all embedded scripts.',
    descriptionZh: 'PDF 內嵌 JavaScript，開啟時自動執行。MetaDefender 的 PDF 解析器提取並分析所有內嵌腳本。',
    category: 'script', difficulty: 'intermediate', platforms: ['windows', 'linux', 'macos'], file_types: ['pdf'],
    attack_technique: 'Embedded Script in PDF', mitre_attack_id: 'T1218.001',
    metadefender_capabilities: ['PDF Analysis', 'Deep CDR', 'Sandbox'],
    estimated_duration: '10 minutes', status: 'published', download_url: '', github_url: '', created: '2026-06-08',
  },
  {
    id: 'steganography-cdr', title: 'Steganography Hidden Payload', titleZh: '隱寫術隱藏負載',
    description: 'Attack hides executable payload inside innocent-looking image files using LSB steganography. MetaDefender Deep CDR strips the hidden payload during content disarm and reconstruction.',
    descriptionZh: '攻擊者利用最低有效位（LSB）隱寫術，將可執行負載藏在看似無害的圖片檔案中。MetaDefender Deep CDR 在內容淨化與重建過程中自動剝離隱藏負載。',
    category: 'steganography', difficulty: 'intermediate', platforms: ['windows', 'linux', 'macos'], file_types: ['png', 'bmp'],
    attack_technique: 'Steganography (LSB Embedding)', mitre_attack_id: 'T1027.003', mitre_attack_url: 'https://attack.mitre.org/techniques/T1027/003/',
    metadefender_capabilities: ['Deep CDR', 'Multiscanning'],
    estimated_duration: '10 minutes', status: 'published', download_url: '', github_url: '', created: '2026-06-09',
  },
  {
    id: 'polyglot-files', title: 'Polyglot File Bypass', titleZh: '多格式檔案繞過',
    description: 'A single file passes as both a valid GIF image and a valid JavaScript file. MetaDefender Protocol Detection identifies the true file type regardless of extension.',
    descriptionZh: '單一檔案同時是合法的 GIF 圖片和合法的 JavaScript 檔案。MetaDefender Protocol Detection 無視副檔名，直接識別真實檔案類型。',
    category: 'polyglot', difficulty: 'advanced', platforms: ['windows', 'linux', 'macos'], file_types: ['gif', 'pdf'],
    attack_technique: 'Polyglot File', mitre_attack_id: 'T1036.008', mitre_attack_url: 'https://attack.mitre.org/techniques/T1036/008/',
    metadefender_capabilities: ['File Type Identification', 'Multiscanning'],
    estimated_duration: '8 minutes', status: 'published', download_url: '', github_url: '', created: '2026-06-10',
  },
  {
    id: 'nested-archive', title: '10-Layer Nested Archive', titleZh: '10 層巢狀壓縮檔',
    description: 'Malware hidden 10 layers deep inside nested archives to bypass extraction limits. MetaDefender deep archive scanning extracts all layers.',
    descriptionZh: '惡意軟體藏在 10 層巢狀壓縮檔中，繞過解壓縮深度限制。MetaDefender 深度存檔掃描提取所有層級。',
    category: 'archive', difficulty: 'advanced', platforms: ['windows', 'linux'], file_types: ['zip', 'gz', 'bz2', 'tar'],
    attack_technique: 'Deep Archive Nesting', mitre_attack_id: 'T1027',
    metadefender_capabilities: ['Archive Extraction'],
    estimated_duration: '20 minutes', status: 'coming_soon', download_url: '', github_url: '', created: '2026-06-11',
  },
  {
    id: 'ole-object', title: 'OLE Object Exploit', titleZh: 'OLE 物件漏洞利用',
    description: 'Office document with embedded OLE object linking to remote malicious content. MetaDefender dissects OLE structure and blocks remote connections.',
    descriptionZh: 'Office 文件內嵌 OLE 物件，連結遠端惡意內容。MetaDefender 拆解 OLE 結構並封鎖遠端連線。',
    category: 'macro', difficulty: 'advanced', platforms: ['windows'], file_types: ['doc', 'docx', 'xls', 'ppt'],
    attack_technique: 'OLE Object Linking', mitre_attack_id: 'T1027.002',
    metadefender_capabilities: ['OLE Analysis', 'Deep CDR', 'Sandbox'],
    estimated_duration: '15 minutes', status: 'coming_soon', download_url: '', github_url: '', created: '2026-06-12',
  },
];

export const categoryLabels: Record<string, { en: string; zh: string }> = {
  steganography: { en: 'Steganography', zh: '隱寫術' },
  polyglot: { en: 'Polyglot', zh: '多格式' },
  macro: { en: 'Macro', zh: '巨集攻擊' },
  archive: { en: 'Archive Abuse', zh: '壓縮檔濫用' },
  mismatch: { en: 'Extension Mismatch', zh: '副檔名偽裝' },
  script: { en: 'Script Injection', zh: '腳本注入' },
  pdf: { en: 'PDF Abuse', zh: 'PDF 濫用' },
  container: { en: 'Container Bypass', zh: '容器繞過' },
  lnk: { en: 'LNK Abuse', zh: 'LNK 濫用' },
};

export function getCategoryLabel(cat: string, lang: 'en' | 'zh'): string {
  return categoryLabels[cat]?.[lang] ?? cat;
}

const difficultyColors: Record<string, string> = {
  beginner: 'text-emerald-200 border-emerald-300/20 bg-emerald-300/[0.08]',
  intermediate: 'text-amber-200 border-amber-300/20 bg-amber-300/[0.08]',
  advanced: 'text-rose-200 border-rose-300/20 bg-rose-300/[0.08]',
};

export function difficultyClass(d: string): string {
  return difficultyColors[d] ?? 'text-slate-200 border-white/10 bg-white/[0.04]';
}

export const demoCategories = [...new Set(demos.map((d) => d.category))];
export const demoCapabilities = [...new Set(demos.flatMap((d) => d.metadefender_capabilities))];
