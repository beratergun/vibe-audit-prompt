import fs from 'node:fs';
import path from 'node:path';
import { ROOT, renderCatalog } from './check.mjs';

const data = JSON.parse(fs.readFileSync(path.join(ROOT, 'data/controls.json'), 'utf8'));
const changes = [];
for (const lang of ['tr', 'en']) {
  const file = path.join(ROOT, `prompts/AUDIT_PROMPT.${lang}.md`);
  const text = fs.readFileSync(file, 'utf8');
  const marker = /<!-- CATALOG_START -->\n\n[\s\S]*?\n\n<!-- CATALOG_END -->/g;
  if ([...text.matchAll(marker)].length !== 1) throw new Error(`Expected one catalog in ${lang}`);
  const replacement = `<!-- CATALOG_START -->\n\n${renderCatalog(data.groups, lang)}\n\n<!-- CATALOG_END -->`;
  changes.push([file, text.replace(marker, () => replacement)]);
}
// Validate both target markers before writing either file.
for (const [file, text] of changes) fs.writeFileSync(file, text);
console.log('Updated both prompt catalogs. Review translations and run checks.');
