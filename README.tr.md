# Vibe Audit Prompt — Türkçe kullanım

[Ana sayfa](README.md) · [English](README.en.md) · [Tam Türkçe prompt](prompts/AUDIT_PROMPT.tr.md)

Bu paket, bir projenin güvenlik, kalite, gizlilik, hukukla bağlantılı teknik konular ve üretime hazırlık durumunu düzenli incelemek için hazırlanmıştır. Belirli bir framework'e veya tek bir uygulamaya bağlı değildir. Kendi projelerinde ve izinli müşteri/ekip projelerinde tekrar kullanabilirsin.

## İlk kullanım

1. Projeni kaynak kodu ve terminal erişimi olan kodlama ajanında aç. Mevcut kullanıcı değişikliklerini ve proje talimatlarını koru.
2. [Türkçe promptun](prompts/AUDIT_PROMPT.tr.md) **tamamını** görev olarak ver. Dosyayı projeye eklediysen ajana dosyayı okuyup uygulamasını söyle. Sadece README'yi vermek tam kapsamı başlatmaz.
3. Prompt içindeki proje kartını gerekirse doldur. Sırların değerini yazma; yalnızca değişken/rol/ortam adlarını belirt. Bilmediğin alanları ajanın keşfetmesine izin ver.
4. `audit-and-safe-fix` güvenli yerel düzeltmeler içindir; `audit-only` uygulama kodunu değiştirmez; `retest` önceki bulguları ve etkilenen akışları yeniden doğrular.
5. Ajanın ürettiği raporlarda kapsamı, gerçekten yürütülen testleri, engelleri ve açık bulguları incele. Gerekli ortam/erişim sağlanınca eksik testleri tamamlat. Public repoya ham güvenlik kanıtı yükleme.

Dosyayı yalnızca projeye koymak otomatik denetim başlatmaz. Aşağıdaki gibi açık görev ver:

```text
prompts/AUDIT_PROMPT.tr.md dosyasının tamamını oku ve bu projede uygula.
Mod: audit-and-safe-fix. Yerel sentetik test ortamını kullan.
Önce mimariyi ve mevcut test durumunu keşfet.
Yetkili, geri alınabilir yerel düzeltmeleri yap ve tekrar test et.
Denetim raporlarını promptta belirtilen yapıda teslim et.
```

Projeye promptu farklı yola kopyaladıysan dosya yolunu buna göre değiştir. Otomatik uygulanmasını istemediğin denetimi kalıcı AGENTS/CLAUDE talimatına dönüştürmek yerine görev olarak kullan.

## Ortama göre örnekler

| Proje | Ekleyeceğin bilgi |
|---|---|
| Basit public site | Üyelik/ödeme/veri toplama yoksa ajan bunu kanıtla NOT_APPLICABLE yapsın; form, analytics, script, header, erişilebilirlik ve build'i yine incelesin. |
| Supabase SaaS | Sentetik tenant A/B, normal üye/yönetici hesapları ve local/test veritabanı; RLS işlemleri, view/function ve storage yolları dahil. |
| Ödemeli ürün | Sağlayıcı test modu, sahte müşteri ve test ürünleri; gerçek ödeme ve ileti gönderimi olmadan abonelik/webhook testi. |
| Mobil uygulama | Android/iOS build komutları, cihaz/emülatör erişimi ve kritik yolculuklar; erişilemeyen platform doğrulanmış sayılmasın. |
| AI/RAG/ajan | Test dokümanları, tenant ACL'leri, mock araçlar, harcama/token sınırları ve onay gerektiren eylemler. |

Yetkili staging kullanacaksan host/port/protokol/yol, izinli hesaplar, test türleri ve istek sınırını açıkça belirt. Public URL bulunması tek başına tarama yetkisi değildir. Yük testi, aktif tarama ve ücretli sağlayıcı işlemlerinin kapsamı ayrı olmalıdır.

## Sonucu nasıl okuyacaksın?

- `PASS`: belirtilen kapsam/yöntem için kanıt var. `STATIC` kanıtı çalışan uygulamanın dinamik testi değildir.
- `FAIL`: beklenen kontrol sağlanmıyor; bulgu ve kanıtı oku.
- `BLOCKED` / `NOT_EXECUTED`: doğrulama eksik; temiz sonuç sayma.
- `MANUAL_REVIEW`: panel/cihaz/hukukçu veya insan kararı gerekiyor.
- `NOT_APPLICABLE`: özellik uygulanmıyor; gerekçesini kontrol et.

Yayın kararı `BLOCKED`, `CONDITIONAL` veya `READY_WITHIN_SCOPE` olur. Yüksek PASS oranı kritik bir erişim testinin eksikliğini kapatmaz. Kod düzeltmesi ile canlı ortam doğrulaması ayrıdır. Sızmış sırın satırını silmek rotasyon yerine geçmez.

## Rapor ve tekrar kullanım

Tam prompt sekiz ana rapor ister: ana değerlendirme, kontrol matrisi, bulgu kaydı, test sonuçları, düzeltmeler, gizlilik/hukuk incelemesi, araç incelemesi ve sonraki işler. [Rapor iskeleti](templates/REPORT_TEMPLATE.tr.md) ortak alanları gösterir; gerçek denetimde ayrıntıları ilgili dosyalara ayır.

Her önemli yayın ve kimlik/yetki/ödeme/veri/altyapı değişiminde yeniden kullan. Eski raporun commit'ini ve yeni commit'i kaydet. Kontrol ID'lerini değiştirme; projeye özel maddeleri EXT kimliğiyle ekle. Çok büyük projede `AUDIT_STATE.md` üzerinden kaldığı yerden devam ettir. Yapılmamış işi tamamlandı diye kabul etme.

Promptu kullanmak haricî skill, MCP sunucusu veya tarayıcı kurmaz. Ajanın seçtiği araçlar ayrıca incelenir. [vibe-check değerlendirmesi](docs/THIRD_PARTY_REVIEW.md) ayrı projeye yönelik kaynak incelemesidir; bu repo o projenin fork'u değildir.

## Hukuki kapsam

Hedef pazarları ve iş modelini belirt. KVKK/GDPR, çerez, ticari ileti, İYS, tüketici/abonelik, içerik ve lisans başlıkları uygulanabilirlik değerlendirmesi gerektirir. Bu paket avukat görüşü veya uygunluk sertifikası üretmez. Ceza tutarı veya bildirim süresi gibi değişen bilgiler resmî kaynaktan olay özelinde doğrulanmalıdır. Kaynaklar ve sınırlamalar [araştırma notlarında](docs/SOURCES.md) bulunur.

MIT lisansı ile kullanabilir ve uyarlayabilirsin; lisans bildirimini koru. Üçüncü tarafların belge, marka ve lisansları ayrıca geçerlidir.
