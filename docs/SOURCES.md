# Araştırma kaynakları / Research sources

İnceleme tarihi / Reviewed: **2026-11-01**. Web içeriği değişebilir. Bu dosya kaynak günlüğüdür; bağlantı verilmesi ürün onayı veya hukuki doğruluk garantisi değildir. / This is a source ledger, not a vendor endorsement or guarantee of legal accuracy.

## Kullanıcının verdiği sekiz kaynak / Eight requested sources

| Kaynak / Source | Erişim / Access | İnceleme notu / Review note |
|---|---|---|
| [CodeBaseHub 6977](https://www.codebasehub.pro/tr/source/6977) | Doğrudan HTTP, 200; araştırma aracı ilk istekte erişemedi. / Direct HTTP succeeded after browser research failure. | “App launch fine traps: KVKK, GDPR, Supabase RLS” başlıklı rehber. Araç değil. Hukuki iddialar koşullu resmî doğrulamaya yönlendirildi; ceza rakamları kopyalanmadı. / A guide, not a scanner; no fine amounts reproduced. |
| [barkinsarikartal/vibe-check](https://github.com/barkinsarikartal/vibe-check) | README ve sabit commit'teki kaynaklar okundu. / README and pinned source inspected. | 84 maddeli bağımsız skill; [ayrı inceleme](THIRD_PARTY_REVIEW.md). / Independent 84-item skill; separate review. |
| [Axiean kontrol listesi](https://axiean.com/tr/blog/vibe-coding-guvenlik-kontrol-listesi) | Doğrudan HTTP, 200. / Direct HTTP. | 20 kontrol sunan yayın öncesi rehber. Bu paketteki kontrol kataloğu bağımsız yazıldı; canlı deneme örnekleri varsayılan test yetkisi kabul edilmedi. / Launch guidance, not default authorization to probe live systems. |
| [Invicti checklist](https://www.invicti.com/blog/web-security/vibe-coding-security-checklist-how-to-secure-ai-generated-apps) | Araştırma aracı, tam sayfa. / Research browser, full page. | Çalışma zamanı doğrulaması vurgusu değerlendirildi. Tek bir tarama yaklaşımının bütün test sınıflarının yerini aldığı kabul edilmedi. / Runtime verification is useful alongside other methods. |
| [Detartech Türkçe rehber](https://detartech.com/tr/blog/vibe-code-production-guvenlik-kontrol-listesi) | Doğrudan HTTP, 200; [İngilizce sayfa](https://detartech.com/en/blog/vibe-code-to-production-security-checklist) da açıldı. | Yayın öncesi temel kontroller değerlendirildi. İstatistikler veya garanti iddiaları prompta aktarılmadı. / Basic prelaunch checks considered; statistics not reproduced. |
| [Cycode vibe coding security](https://cycode.com/blog/vibe-coding-security/) | Araştırma aracı, tam sayfa. / Research browser, full page. | Ajan izinleri ve bağımlılık kökeni gibi geliştirme süreci riskleri değerlendirildi. Ürün karşılaştırmaları bağımsız benchmark kabul edilmedi. / Vendor comparisons were not treated as independent benchmarks. |
| [Supabase master checklist](https://supabase.com/blog/the-vibe-coding-master-checklist) | Araştırma aracı, tam sayfa. / Research browser, full page. | Prototipten üretime geçiş rehberi. RLS davranışı için ayrıca sağlayıcının teknik belgesi kullanıldı; auth sağlayıcısı seçmek doğru uygulamayı tek başına kanıtlamaz. / Provider choice alone is not verification. |
| [Xygeni Türkçe yazı](https://xygeni.io/tr/blog/vibe-coding-security-why-traditional-appsec-breaks/) | Doğrudan HTTP, 200; [İngilizce sayfa](https://xygeni.io/blog/vibe-coding-security-why-traditional-appsec-breaks/) da açıldı. | Prompt/araç/CI güven zinciri incelendi. Geleneksel SAST/SCA kaldırılmadı; iş akışı sınırlarıyla tamamlandı. / Workflow safeguards complement SAST/SCA. |

Tüm sekiz kaynak erişilebilir içerikle değerlendirildi. İlk erişim hataları, içeriğin olmadığı anlamına gelmedi; alternatif erişim yöntemi kaydedildi. Ham HTML ve kullanıcının yapıştırdığı özel metin public repoya eklenmedi. / All eight sources were accessible through the documented methods; raw pages and the user's pasted attachment are not redistributed.

## Birincil teknik referanslar / Primary technical references

Bu paket standartların metinlerini veya tam gereksinim tablolarını dağıtmaz. Aşağıdaki kaynaklara yönlendirir; gerçek denetimde sürüm ve kullanılan madde ayrıca doğrulanmalıdır. / This pack links to standards rather than reproducing them. Verify versions and individual requirements during each audit.

| Kaynak / Source | İncelenen temel / Baseline and use |
|---|---|
| [OWASP ASVS](https://asvs.owasp.org/) | Açılan sayfada 5.0.0 kararlı sürüm olarak gösterildi. Gereksinim doğrulaması için. / Opened page identifies stable 5.0.0; requirements reference. |
| [OWASP WSTG](https://owasp.org/www-project-web-security-testing-guide/) | Açılan sayfada 4.2 yayımlanmış sürüm, 5.0 geliştirme olarak ayrılmıştı. / Page distinguishes released 4.2 and developing 5.0; test methods. |
| [OWASP Top 10](https://owasp.org/www-project-top-ten/) | Açılan sayfa 2025'i güncel yayımlanmış sürüm olarak belirtiyordu. Farkındalık listesi; tam doğrulama kapsamı değil. / 2025 awareness reference, not full verification coverage. |
| [OWASP API Security](https://owasp.org/www-project-api-security/) | API Security Top 10 2023; API risk sınıfları. / API risk classes. |
| [OWASP MASVS](https://mas.owasp.org/MASVS/) ve [MASTG](https://mas.owasp.org/MASTG/) | Mobil depolama, ağ, platform ve doğrulama yöntemleri. MASVS sayfası ve MASTG yönlendirmesi incelendi; belirli test numarası bu pakette iddia edilmez. / Mobile requirements and testing reference, without invented test IDs. |
| [OWASP GenAI Top 10](https://genai.owasp.org/llm-top-10/) | Açılan sayfada 2025 listesi. AI özelliklerinin veri/araç sınırları için. / 2025 AI risk reference. |
| [NIST SSDF](https://csrc.nist.gov/Projects/ssdf) | Açılan sayfada SP 800-218 v1.1 final ve AI profili SP 800-218A ayrılmıştı. / Secure development lifecycle reference. |
| [WCAG 2.2](https://www.w3.org/TR/WCAG22/) | Test edilebilir erişilebilirlik ölçütleri; otomatik tarama kapsamının sınırları ayrıca korunur. / Accessibility reference with manual review requirements. |
| [Supabase RLS belgesi](https://supabase.com/docs/guides/database/postgres/row-level-security) | Veri erişim kurallarını sağlayıcı düzeyinde doğrulama referansı. / Primary provider reference for data policy review. |
| [GitHub Actions secure use](https://docs.github.com/en/actions/reference/security/secure-use) | İş akışlarında asgari yetki ve güvenilmeyen kod sınırı. / Workflow privilege and untrusted-code boundaries. |

## Hukuki kaynaklar ve yorum sınırı / Legal sources and limits

- [KVKK resmî sitesi](https://www.kvkk.gov.tr/): mevzuat, işleme şartları, aktarım, haklar ve rehberler için başlangıç. İlk denenen kanun içeriği URL'si ana sayfaya yönlendi; doğrudan mevzuat PDF isteği araştırma aracında zaman aşımına uğradı. Kanunun tam metni bu istekle okundu diye iddia edilmez. / Official entry point; the attempted law page redirected and PDF timed out, so full-law review is not claimed.
- [KVKK ihlal bildirimi, 2019/10](https://www.kvkk.gov.tr/Icerik/5362/Veri-Ihlali-Bildirimi): Kurul bildirimi bağlamı için resmî kaynak. Bu pakette tek bir sürenin tüm ülkeler, olaylar ve alıcılar için geçerli olduğu söylenmez. / Official breach-notification source; no universal cross-jurisdiction deadline is asserted.
- [GDPR, EUR-Lex](https://eur-lex.europa.eu/eli/reg/2016/679/oj/eng): resmî metin açıldı; ülke kapsamı ve koşullu yükümlülükler için birincil kaynak. İlk kısa URL robot kontrolü döndürdüğü için İngilizce resmî URL kullanıldı. / Official text accessed through the English URL after a challenge on the initial URL.
- [FTC CAN-SPAM rehberi](https://www.ftc.gov/business-guidance/resources/can-spam-act-compliance-guide-business): ABD ticari e-posta bağlamında resmî kaynak. Türkiye veya başka ülkenin izin rejiminin yerine kullanılmaz. / US commercial-email guidance does not replace other jurisdictions' rules.
- Tüketici, elektronik ticaret, İYS, mağaza veya sektörel kurallar için bu sürümde tam mevzuat analizi yapılmadı. Prompt, gerçek proje/pazar için güncel resmî doğrulama ve gerektiğinde uzman incelemesi ister. / Full consumer, messaging/IYS, store, and sector-law analysis is deferred to actual project applicability and official verification.

## Tasarım kararları / Design decisions

Ortak hata sınıfları, kullanıcının mevcut taslağındaki koruma ilkeleri ve yukarıdaki birincil referanslar temelinde özgün bir görev akışı yazıldı. 144 kontrol, herhangi bir kaynağın listesinin çevirisi değildir; kaynak ID'leriyle birebir eşdeğerlik veya tam standart uygunluğu iddia edilmez. Bir kaynakta geçen istatistik, araç başarısı, ceza veya olay iddiası bağımsız doğrulanmış gerçek gibi tekrar edilmedi.

The workflow and catalog are original instructions. They are not a translation of another checklist, a claim of complete standard conformance, or independent confirmation of vendor statistics/incidents. Third-party code, evaluation fixtures, installers, and articles are not bundled. Referenced works retain their own licenses and trademarks.
