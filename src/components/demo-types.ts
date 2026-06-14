import { demos } from './demo-data';

export type { DemoEntry } from './demo-data';
export { demos } from './demo-data';

const categoryLabels: Record<string, { en: string; zh: string }> = {
  steganography: { en: 'Steganography', zh: '隱寫術' },
  polyglot: { en: 'Polyglot', zh: '多格式' },
  macro: { en: 'Macro', zh: '巨集攻擊' },
  archive: { en: 'Archive Abuse', zh: '壓縮檔濫用' },
  mismatch: { en: 'Extension Mismatch', zh: '副檔名偽裝' },
  script: { en: 'Script Injection', zh: '腳本注入' },
  pdf: { en: 'PDF Abuse', zh: 'PDF 濫用' },
  lnk: { en: 'LNK Abuse', zh: 'LNK 濫用' },
  container: { en: 'Container Bypass', zh: '容器繞過' },
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
