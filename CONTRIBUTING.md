# Contributing / Katkı

Keep both prompt languages semantically aligned. Existing control IDs remain stable; add new IDs instead of renumbering. New domains or controls require updating the declared catalog count, templates, guides, and validation expectations together. Material changes need a changelog entry and version update.

Edit the bilingual catalog in data/controls.json, then run:

```sh
node scripts/sync-catalog.mjs
node scripts/check.mjs
node --test scripts/check.test.mjs
```

The sync command changes only the marked catalog sections in both prompts. Review the rendered Markdown and semantic translation manually: structural parity does not prove translation quality. No package installation is necessary. Validation checks do not audit applications.

Use current primary sources for requirements and legal assertions; include source, retrieval date, version, applicability, and uncertainty. Never copy third-party checklists or article passages without compatible permission and attribution. Do not add unverified statistics, universal fine/deadline claims, tool endorsement, or zero-vulnerability promises.

Preserve authorization boundaries, redaction, failure visibility, reversible fixes, meaningful regression tests, and honest incomplete states. Do not add installers, network checks, or scanners to the documentation check. Do not include real audit records in contribution fixtures.

Türkçe ve İngilizce anlamları birlikte güncelle. ID'leri yeniden numaralama. Katalog değişiminde data/controls.json dosyasını düzenle, yukarıdaki komutları çalıştır ve çeviriyi insan gözüyle incele. Hukuki bilgide güncel resmî kaynak/uygulanabilirlik belirt; sır ve gerçek denetim kanıtını public katkıya koyma.
