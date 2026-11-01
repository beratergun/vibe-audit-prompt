import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

export const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
export const STATUSES = ['PASS', 'FAIL', 'BLOCKED', 'NOT_EXECUTED', 'NOT_APPLICABLE', 'MANUAL_REVIEW'];

export function renderCatalog(groups, lang) {
  return groups.map(g => `### ${g.id} — ${g[lang]}\n\n| ID | ${lang === 'tr' ? 'İnceleme / test ve beklenen kontrol' : 'Review / test and expected control'} |\n|---|---|\n` +
    g.controls.map(c => `| ${c.id} | ${c[lang]} |`).join('\n')).join('\n\n');
}

export function readBundle(root = ROOT) {
  const files = new Map();
  function visit(dir, prefix = '') {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      if (['.git', 'node_modules', 'work', 'audit-evidence'].includes(entry.name)) continue;
      const name = prefix + entry.name;
      if (entry.isDirectory()) visit(path.join(dir, entry.name), name + '/');
      else if (entry.isFile()) files.set(name, fs.readFileSync(path.join(dir, entry.name), 'utf8'));
    }
  }
  visit(root);
  return files;
}

export function validateBundle(files) {
  const errors = [];
  const required = ['README.md', 'README.tr.md', 'README.en.md', 'LICENSE', 'SECURITY.md', 'CONTRIBUTING.md',
    'CHANGELOG.md', 'data/controls.json', 'prompts/AUDIT_PROMPT.tr.md', 'prompts/AUDIT_PROMPT.en.md',
    'templates/REPORT_TEMPLATE.tr.md', 'templates/REPORT_TEMPLATE.en.md', 'docs/SOURCES.md',
    'docs/THIRD_PARTY_REVIEW.md', 'docs/VALIDATION.md'];
  for (const name of required) if (!files.has(name)) errors.push(`Missing required file: ${name}`);
  let data;
  try { data = JSON.parse(files.get('data/controls.json')); }
  catch { errors.push('Invalid catalog JSON'); return errors; }
  if (data.version !== '1.0.0') errors.push('Catalog version must match current release');
  if (!Array.isArray(data.groups) || data.groups.length !== 24) errors.push('Expected 24 domains');
  const ids = new Set(), groupIds = new Set();
  let count = 0;
  for (const group of data.groups ?? []) {
    if (!/^[A-Z]+$/.test(group.id ?? '') || groupIds.has(group.id)) errors.push(`Invalid/duplicate domain: ${group.id}`);
    groupIds.add(group.id);
    for (const lang of ['tr','en']) if (typeof group[lang] !== 'string' || !group[lang].trim()) errors.push(`Missing domain ${lang}: ${group.id}`);
    if (!Array.isArray(group.controls) || group.controls.length !== 6) errors.push(`Expected six controls: ${group.id}`);
    for (const [i, control] of (group.controls ?? []).entries()) {
      count++;
      if (control.id !== `${group.id}-${String(i + 1).padStart(2, '0')}` || ids.has(control.id)) errors.push(`Invalid/duplicate control: ${control.id}`);
      ids.add(control.id);
      for (const lang of ['tr', 'en']) {
        if (typeof control[lang] !== 'string' || control[lang].trim().length < 35) errors.push(`Missing/short ${lang}: ${control.id}`);
        else if (/[|\r\n]/.test(control[lang])) errors.push(`Unsafe table cell ${lang}: ${control.id}`);
      }
    }
  }
  if (count !== 144) errors.push(`Expected 144 controls, found ${count}`);
  // Avoid rendering malformed data: report structural errors first.
  if (errors.length) return errors;
  for (const lang of ['tr', 'en']) {
    const name = `prompts/AUDIT_PROMPT.${lang}.md`, text = files.get(name) ?? '';
    const marker = /<!-- CATALOG_START -->\n\n([\s\S]*?)\n\n<!-- CATALOG_END -->/g;
    const catalogs = [...text.matchAll(marker)];
    if (catalogs.length !== 1 || catalogs[0]?.[1] !== renderCatalog(data.groups, lang)) errors.push(`Catalog drift: ${lang}`);
    const headings = [...text.matchAll(/^## (\d+)\./gm)].map(m => Number(m[1]));
    if (JSON.stringify(headings) !== JSON.stringify(Array.from({length:11}, (_, i) => i+1))) errors.push(`Missing/duplicate workflow section: ${lang}`);
    for (const token of [...STATUSES, 'STATIC', 'DYNAMIC_LOCAL', 'DYNAMIC_STAGING', 'CONFIG_REVIEW', 'OWNER_ATTESTED',
      'PRODUCTION_VERIFIED', 'SUSPECTED', 'CONFIRMED', 'DISPROVED', 'FIXED_UNVERIFIED', 'VERIFIED_FIXED',
      'ACCEPTED_RISK', 'READY_WITHIN_SCOPE', 'CONDITIONAL', 'AUDIT_STATE.md', 'EXT-001', 'audit-only', 'audit-and-safe-fix', 'retest']) {
      if (!text.includes(token)) errors.push(`Missing contract term ${token}: ${lang}`);
    }
  }
  for (const [name, text] of files) {
    if (!name.endsWith('.md')) continue;
    if ((text.match(/^```/gm) ?? []).length % 2) errors.push(`Unbalanced code fences: ${name}`);
    const prose = text.replace(/```[^\n]*\n[\s\S]*?```/g, '');
    for (const match of prose.matchAll(/\[[^\]]*\]\(([^)]+)\)/g)) {
      const link = match[1];
      if (/^(?:https?:|mailto:|#)/i.test(link)) continue;
      const target = path.posix.normalize(path.posix.join(path.posix.dirname(name), decodeURIComponent(link.split('#')[0])));
      if (target.startsWith('../') || target.startsWith('/') || !files.has(target)) errors.push(`Broken/escaping local link: ${name} -> ${link}`);
    }
  }
  return errors;
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const errors = validateBundle(readBundle());
  if (errors.length) { for (const error of errors) console.error(error); process.exitCode = 1; }
  else console.log('PASS: 24 domains, 144 bilingual controls, workflow contracts, required files, fences, and local file links. Application security is not assessed.');
}
