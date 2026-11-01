# Vibe Audit Prompt

**Türkçe ve İngilizce, kanıta dayalı uygulama denetim promptları.**

**Evidence-based application audit prompts in Turkish and English.**

[Türkçe kullanım kılavuzu](README.tr.md) · [English guide](README.en.md) · [Kaynaklar / Sources](docs/SOURCES.md) · [MIT License](LICENSE)

| Başla / Start | Dosya / File |
|---|---|
| Türkçe tam prompt | [AUDIT_PROMPT.tr.md](prompts/AUDIT_PROMPT.tr.md) |
| Full English prompt | [AUDIT_PROMPT.en.md](prompts/AUDIT_PROMPT.en.md) |
| Türkçe rapor iskeleti | [REPORT_TEMPLATE.tr.md](templates/REPORT_TEMPLATE.tr.md) |
| English report skeleton | [REPORT_TEMPLATE.en.md](templates/REPORT_TEMPLATE.en.md) |

## Türkçe

AI ile geliştirdiğin web sitesi, SaaS, API, mobil/masaüstü uygulama veya PWA için tekrar kullanılabilir denetim görevi. Kodlama ajanının kaynak kodunu incelemesini, gerçek testler çalıştırmasını, doğrulanmış bulguları önem sırasına koymasını, yetkili güvenli düzeltmeleri yapmasını ve tekrar test etmesini ister. **24 alanda 144 temel kontrol**, proje özelinde ek kontrollerle genişler.

Bir dili seç, tam prompt dosyasını projenin koduna ve terminaline erişebilen ajana ver. Proje kartında kapsamı, test ortamını ve modu ayarla. Varsayılan `audit-and-safe-fix`, güvenli ve geri alınabilir yerel düzeltmelere izin verir. Yalnızca rapor için `audit-only` seç. Secret, gerçek kullanıcı verisi veya üretim parolası paylaşma.

Kapsam: kimlik ve oturum, tenant/nesne yetkileri, enjeksiyon, tarayıcı/API, Supabase/Firebase kuralları, dosya ve depolar, ödeme/iş mantığı, SSRF, maliyet ve kötüye kullanım, bağımlılık/CI/ajan güvenliği, altyapı, olay/kurtarma, AI/RAG, gizlilik/hukuki sorular, mobil/masaüstü/PWA, erişilebilirlik, regresyon ve performans.

Bu repo çalıştırılabilir bir güvenlik tarayıcısı değildir. Sonuç, ajanın yeteneklerine, erişimine ve gerçekten yaptığı testlere bağlıdır. `PASS`, statik inceleme, çalıştırılmamış test ve hukukçu incelemesi ayrı kaydedilir. Hiçbir prompt tüm açıkların bulunmasını veya hukuki uygunluğu garanti edemez. Hukuki başlıklar teknik kanıt ve uzman incelemesi için sorular üretir.

## English

A reusable audit task for AI-built websites, SaaS, APIs, mobile/desktop applications, and PWAs. It instructs a coding agent to inspect source, execute real tests, prioritize evidenced findings, implement authorized safe fixes, and retest. **144 baseline controls across 24 domains**, extensible for the project.

Choose one language and give the complete prompt file to an agent with project source and terminal access. Set scope, environment, and mode in its project configuration. The default `audit-and-safe-fix` allows safe reversible local fixes; choose `audit-only` for reports without application changes. Never provide secrets, real user data, or production passwords.

This repository is an instruction pack, not an executable security scanner. Assurance depends on available capabilities, access, and tests actually performed. It separates passes, static review, unexecuted tests, and legal review. No prompt guarantees discovery of every vulnerability or legal compliance. Legal sections produce technical evidence and questions for qualified review.

## Repository validation

No third-party runtime dependencies or package installation are required to validate this documentation pack. With Node.js 20 or later:

```sh
node scripts/check.mjs
node --test scripts/check.test.mjs
```

These commands check **this pack's** catalog consistency, language parity, local links, and validation behavior. They do not audit your application. See [validation scope](docs/VALIDATION.md).

## Structure

```text
prompts/      Independent, complete TR and EN prompts
data/         Shared bilingual control IDs and content
templates/    TR and EN audit report skeletons
docs/         Research, tool review, validation, maintenance notes
scripts/      Dependency-free documentation checks and tests
```

Research baseline: **2026-11-01**. Version: **1.0.0**. Original instructions; third-party references are attributed, not bundled or installed. See [source review](docs/THIRD_PARTY_REVIEW.md) and [maintenance policy](CONTRIBUTING.md).
