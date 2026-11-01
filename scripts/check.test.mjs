import test from 'node:test';
import assert from 'node:assert/strict';
import { readBundle, validateBundle } from './check.mjs';

const baseline = readBundle();
function changedCatalog(edit) {
  const files = new Map(baseline);
  const data = JSON.parse(files.get('data/controls.json'));
  edit(data);
  files.set('data/controls.json', JSON.stringify(data));
  return files;
}
test('real distribution passes structural validation', () => assert.deepEqual(validateBundle(baseline), []));
test('duplicate control IDs are rejected', () => {
  const files = changedCatalog(data => { data.groups[0].controls[1].id = data.groups[0].controls[0].id; });
  assert.ok(validateBundle(files).some(e => e.includes('duplicate control')));
});
test('missing control is rejected', () => {
  const files = changedCatalog(data => { data.groups[0].controls.pop(); });
  assert.ok(validateBundle(files).some(e => e.includes('143')));
});
test('missing English translation is rejected', () => {
  const files = changedCatalog(data => { data.groups[0].controls[0].en = ''; });
  assert.ok(validateBundle(files).some(e => e.includes('Missing/short en')));
});
test('table-delimiter injection is rejected', () => {
  const files = changedCatalog(data => { data.groups[0].controls[0].en += ' | extra cell'; });
  assert.ok(validateBundle(files).some(e => e.includes('Unsafe table cell')));
});
test('unsynchronized prompt translation is rejected', () => {
  const files = new Map(baseline);
  const name = 'prompts/AUDIT_PROMPT.en.md';
  files.set(name, files.get(name).replace('| SCOPE-01 | Record', '| SCOPE-01 | Modified'));
  assert.ok(validateBundle(files).includes('Catalog drift: en'));
});
test('removed evidence-state contract is rejected', () => {
  const files = new Map(baseline), name = 'prompts/AUDIT_PROMPT.en.md';
  files.set(name, files.get(name).replaceAll('OWNER_ATTESTED', 'REMOVED'));
  assert.ok(validateBundle(files).some(e => e.includes('Missing contract term OWNER_ATTESTED')));
});
test('missing workflow section is rejected', () => {
  const files = new Map(baseline), name = 'prompts/AUDIT_PROMPT.tr.md';
  files.set(name, files.get(name).replace('## 9.', '## 99.'));
  assert.ok(validateBundle(files).some(e => e.includes('workflow section: tr')));
});
test('broken local documentation link is rejected', () => {
  const files = new Map(baseline);
  files.set('README.md', files.get('README.md') + '\n[missing](does-not-exist.md)\n');
  assert.ok(validateBundle(files).some(e => e.includes('Broken/escaping local link')));
});
test('link escaping distribution is rejected', () => {
  const files = new Map(baseline);
  files.set('README.md', files.get('README.md') + '\n[escape](../outside.md)\n');
  assert.ok(validateBundle(files).some(e => e.includes('Broken/escaping local link')));
});
test('required file omission is rejected', () => {
  const files = new Map(baseline); files.delete('LICENSE');
  assert.ok(validateBundle(files).some(e => e.includes('Missing required file: LICENSE')));
});
test('malformed JSON produces explicit failure', () => {
  const files = new Map(baseline); files.set('data/controls.json', '{');
  assert.ok(validateBundle(files).includes('Invalid catalog JSON'));
});
test('unbalanced Markdown fence is rejected', () => {
  const files = new Map(baseline); files.set('README.md', files.get('README.md') + '\n```text\n');
  assert.ok(validateBundle(files).some(e => e.includes('Unbalanced code fences')));
});
