# Doğrulama kapsamı / Validation scope

Bu repodaki komutlar **belge paketini** kontrol eder. Bir uygulamanın zafiyet taraması, hukuk denetimi veya penetrasyon testi değildir. / Repository checks validate the documentation pack, not an application's security or legal compliance.

## Commands

Node.js 20+; no dependency installation:

```sh
node scripts/check.mjs
node --test scripts/check.test.mjs
```

## What the checks establish

- 24 distinct catalog domains and 144 stable, distinct control IDs.
- Required TR/EN text fields and Markdown-safe catalog cells.
- Exact agreement between the shared catalog and both standalone prompt sections.
- Presence of eleven workflow sections and required evidence/status/lifecycle terms in each prompt.
- Required distribution files, balanced fenced code blocks, and existing local Markdown file targets.
- Negative cases: duplicate/missing IDs, missing translation, injected table delimiters, translation drift, removed evidence states/sections, missing files, malformed JSON, broken/escaping links, and unbalanced fences.

## Limits

Automated checks do not prove semantic translation quality, exhaustive risk coverage, legal accuracy, external URL availability, the truth of audit evidence, or behavior of a coding agent. They do not check heading anchors or enforce report completeness in an actual application. Manual review remains necessary. Future users must execute the application's actual tests and record environment-specific limitations.

Türkçe: otomasyon, dil eşleşmesinin yapısını ve paket bütünlüğünü sınar. Çevirinin anlamı, uygulamanın güvenliği, hukuki sonuçlar ve gerçek test kanıtı ayrıca incelenmelidir. Dış bağlantılar kontrol komutunda ağa çıkılarak yeniden taranmaz.

## Continuous integration

The GitHub workflow runs the same checks with read-only repository permissions, no supplied secrets, no dependency installer, and a pinned checkout action. Pull requests cannot publish or deploy through this workflow. The runner's Node runtime is used; the action SHA was resolved from the official actions/checkout v4 reference on 2026-11-01. Revisit the runtime and action during maintenance.
