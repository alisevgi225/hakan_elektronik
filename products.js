// Ürün verileri - products.json dosyasından dönüştürüldü
const productsData = {
  "categories": [
    {
      "id": "yazarkasalar",
      "name": "Yazarkasalar",
      "description": "Profesyonel POS sistemleri ve yazarkasa çözümleri",
      "icon": "fas fa-cash-register",
      "products": [
        {
          "id": "ingenico-5000f",
          "name": "Ingenico Move 5000F",
          "description": "Taşınabilir ve kablosuz POS cihazı. 4G bağlantı desteği, yüksek güvenlik standartları.",
          "price": "₺12.500",
          "image": "assets/image/pos_cihaz/ingenico5000f.png",
          "features": ["4G", "Kablosuz", "Taşınabilir"]
        },
        {
          "id": "hugin-tiger-t300",
          "name": "Hugin Tiger T300",
          "description": "Android tabanlı akıllı POS cihazı. Dokunmatik ekran, hızlı işlemci.",
          "price": "₺8.900",
          "image": "assets/image/pos_cihaz/hugintigert300.png",
          "features": ["Android", "Dokunmatik"]
        },
        {
          "id": "inpos-m530",
          "name": "İnPos M530",
          "description": "Kompakt tasarım, 2G/4G bağlantı destekli yazarkasa. Ekonomik ve güvenilir.",
          "price": "₺6.200",
          "image": "assets/image/pos_cihaz/inposm530.png",
          "features": ["2G/4G", "Kompakt", "Güvenilir"]
        },
        {
          "id": "pax-a910sf",
          "name": "PAX A910 SF",
          "description": "Modern ve şık tasarımlı POS cihazı. Hızlı işlem, güvenli ödeme.",
          "price": "₺9.800",
          "image": "assets/image/pos_cihaz/paxa910sf.png",
          "features": ["Modern", "Hızlı", "Güvenli"]
        },
        {
          "id": "paygo-sp630",
          "name": "PayGo SP630",
          "description": "Kompakt ve taşınabilir POS cihazı. Kolay kullanım, hızlı bağlantı.",
          "price": "₺7.500",
          "image": "assets/image/pos_cihaz/paygosp630.png",
          "features": ["Kompakt", "Taşınabilir", "Hızlı"]
        },
        {
          "id": "propay-p1000",
          "name": "ProPay P1000",
          "description": "Profesyonel kullanım için gelişmiş özellikler. 4G, WiFi, Bluetooth desteği.",
          "price": "₺10.200",
          "image": "assets/image/pos_cihaz/propayp1000.png",
          "features": ["4G", "WiFi", "Bluetooth"]
        },
        {
          "id": "pavon-5",
          "name": "PAVO N5",
          "description": "Android tabanlı akıllı POS terminali. Geniş ekran, yüksek performans.",
          "price": "₺11.500",
          "image": "assets/image/pos_cihaz/pavon5.png",
          "features": ["Android", "Geniş Ekran", "Yüksek Performans"]
        },
        {
          "id": "pavon-6",
          "name": "PAVO N6",
          "description": "Gelişmiş özelliklerle donatılmış profesyonel POS cihazı.",
          "price": "₺12.800",
          "image": "assets/image/pos_cihaz/pavon6.png",
          "features": ["Gelişmiş", "Profesyonel", "4G"]
        },
        {
          "id": "pavon-86",
          "name": "PAVO N86",
          "description": "Büyük ekranlı Android POS terminali. Restoran ve kafe işletmeleri için ideal.",
          "price": "₺14.500",
          "image": "assets/image/pos_cihaz/pavon86.png",
          "features": ["Büyük Ekran", "Android", "Restoran"]
        },
        {
          "id": "pavon-96",
          "name": "PAVO N96",
          "description": "Premium Android POS terminali. En gelişmiş özellikler ve yüksek performans.",
          "price": "₺16.200",
          "image": "assets/image/pos_cihaz/pavon96.png",
          "features": ["Premium", "Android", "Yüksek Performans"]
        },
        {
          "id": "pavoct-20",
          "name": "PAVO CT20",
          "description": "Kompakt ve hafif tasarımlı POS cihazı. Mobil ödemeler için ideal.",
          "price": "₺8.200",
          "image": "assets/image/pos_cihaz/pavoct20.png",
          "features": ["Kompakt", "Hafif", "Mobil"]
        },
        {
          "id": "pavoun-20",
          "name": "PAVO UN20",
          "description": "Ultra kompakt POS cihazı. Küçük işletmeler için ekonomik çözüm.",
          "price": "₺6.800",
          "image": "assets/image/pos_cihaz/pavoun20.png",
          "features": ["Ultra Kompakt", "Ekonomik", "Küçük İşletme"]
        }
      ]
    },
    {
      "id": "para-kasalari",
      "name": "Para Kasaları",
      "description": "Güvenli ve dayanıklı para saklama çözümleri",
      "icon": "fas fa-wallet",
      "products": [
        {
          "id": "psc-para-cekmecesi-4646",
          "name": "PSC Para Çekmecesi 46*46 – 5 Gözlü Metal",
          "description": "46x46 cm boyutlarında 5 gözlü metal para çekmecesi. Dayanıklı yapı ve geniş depolama alanı.",
          "price": "₺1.950",
          "image": "assets/image/para_cekmecesi/psc4646.png",
          "features": ["46x46 cm", "5 Gözlü", "Metal"]
        },
        {
          "id": "psc-para-cekmecesi-4141",
          "name": "PSC Para Çekmecesi 41*41 5 Gözlü Metal",
          "description": "41x41 cm boyutlarında 5 gözlü metal para çekmecesi. Kompakt tasarım ve dayanıklı yapı.",
          "price": "₺1.750",
          "image": "assets/image/para_cekmecesi/psc4141.png",
          "features": ["41x41 cm", "5 Gözlü", "Metal"]
        },
        {
          "id": "psc-ft460-flip-top",
          "name": "PSC FT-460 Flip Top Para Çekmecesi",
          "description": "Flip top açılış mekanizmalı modern para çekmecesi. Kolay kullanım ve güvenli saklama.",
          "price": "₺2.100",
          "image": "assets/image/para_cekmecesi/pscft460.png",
          "features": ["Flip Top", "Modern", "Güvenli"]
        },
        {
          "id": "maken-sk325-para-cekmecesi",
          "name": "Para Çekmecesi Maken SK-325",
          "description": "Maken SK-325 model para çekmecesi. Sağlam yapı ve pratik kullanım. POS cihazları ile uyumlu.",
          "price": "₺1.650",
          "image": "assets/image/para_cekmecesi/makensk325.png",
          "features": ["Sağlam", "Pratik", "POS Uyumlu"]
        }
      ]
    },
    {
      "id": "barkod-yazicilari",
      "name": "Barkod Yazıcıları",
      "description": "Profesyonel baskı kalitesinde barkod ve etiket yazıcıları",
      "icon": "fas fa-print",
      "products": [
        {
          "id": "sbarco-t4de",
          "name": "Sbarco T4de+ 203dpi Ribonsuz",
          "description": "203 DPI çözünürlük, termal direkt baskı teknolojisi. Ribon kullanımına gerek yok, ekonomik ve pratik.",
          "price": "₺3.200",
          "image": "assets/image/barkod_yazici/sbarco.png",
          "features": ["203 DPI", "Ribonsuz"]
        },
        {
          "id": "zebra-zd230",
          "name": "Zebra ZD230 203dpi",
          "description": "Hızlı termal etiket baskısı, USB bağlantı, 203 DPI çözünürlük. Perakende ve lojistik için ideal.",
          "price": "₺3.750",
          "image": "assets/image/barkod_yazici/zebra.png",
          "features": ["203 DPI", "USB"]
        },
        {
          "id": "argox-yazici",
          "name": "Argox Barkod Yazıcı",
          "description": "Yüksek kaliteli termal barkod yazıcı. Hızlı baskı, dayanıklı yapı ve kolay kullanım.",
          "price": "₺2.800",
          "image": "assets/image/barkod_yazici/argox.png",
          "features": ["Termal", "Hızlı", "Dayanıklı"]
        },
        {
          "id": "possify-yazici",
          "name": "Possify Barkod Yazıcı",
          "description": "Modern tasarımlı kompakt barkod yazıcı. USB ve WiFi bağlantı desteği ile esnek kullanım.",
          "price": "₺3.100",
          "image": "assets/image/barkod_yazici/possify.png",
          "features": ["Kompakt", "WiFi", "USB"]
        },
        {
          "id": "tsc-244ce",
          "name": "TSC 244CE",
          "description": "Endüstriyel kullanım için tasarlanmış dayanıklı barkod yazıcı. Yüksek hız ve kaliteli baskı.",
          "price": "₺4.200",
          "image": "assets/image/barkod_yazici/tsc244ce.png",
          "features": ["Endüstriyel", "Yüksek Hız", "Dayanıklı"]
        },
        {
          "id": "tsc-te210",
          "name": "TSC TE210",
          "description": "Kompakt ve ekonomik barkod yazıcı. Küçük işletmeler için ideal çözüm. Kolay kurulum ve kullanım.",
          "price": "₺2.500",
          "image": "assets/image/barkod_yazici/tscte210.png",
          "features": ["Ekonomik", "Kompakt", "Kolay Kullanım"]
        }
      ]
    },
    {
      "id": "barkod-okuyucular",
      "name": "Barkod Okuyucular",
      "description": "Profesyonel barkod ve karekod okuma çözümleri",
      "icon": "fas fa-barcode",
      "products": [
        {
          "id": "vp50-d50bt",
          "name": "VP-50 D50Bt 2D Wireless Bluetooth El Tipi Barkod Okuyucu",
          "description": "Kablosuz Bluetooth bağlantılı el tipi 2D barkod okuyucu. Taşınabilir ve ergonomik tasarım. Yüksek okuma hızı ve geniş okuma mesafesi.",
          "price": "₺1.850",
          "image": "assets/image/barkod_okuyucu/vp50.png",
          "features": ["2D", "Bluetooth", "Kablosuz", "El Tipi"]
        },
        {
          "id": "kodscan-kds2040",
          "name": "KodScan KDS-2040 (1D) Standlı Kablolu Lazer Barkod Okuyucu",
          "description": "USB bağlantılı standlı kablolu lazer barkod okuyucu. 1D barkod okuma desteği. Hızlı ve hassas okuma performansı.",
          "price": "₺1.200",
          "image": "assets/image/barkod_okuyucu/kodscankds2040.png",
          "features": ["1D", "Lazer", "Kablolu", "Standlı"]
        },
        {
          "id": "newland-hr2280",
          "name": "Newland HR2280-S0 (2D) Kablolu Standlı Barkod Okuyucu",
          "description": "USB bağlantılı standlı 2D barkod okuyucu. Yüksek çözünürlüklü okuma, geniş okuma açısı. Perakende ve lojistik için ideal.",
          "price": "₺1.500",
          "image": "assets/image/barkod_okuyucu/newlandhr2280.png",
          "features": ["2D", "Kablolu", "Standlı", "USB"]
        },
        {
          "id": "newland-hr2300-sa",
          "name": "Newland HR2300-SA Kablolu Karekod Okuyucu",
          "description": "USB bağlantılı kablolu karekod okuyucu. Hızlı ve güvenilir karekod okuma. Kompakt tasarım ve kolay kurulum.",
          "price": "₺1.350",
          "image": "assets/image/barkod_okuyucu/newlandhr2300sa.png",
          "features": ["Karekod", "Kablolu", "USB", "Kompakt"]
        },
        {
          "id": "newland-hr2300-bt",
          "name": "Newland HR2300-BT Kablosuz Karekod Okuyucu",
          "description": "USB bağlantılı kablosuz karekod okuyucu. Bluetooth teknolojisi ile esnek kullanım. Mobil cihazlarla uyumlu.",
          "price": "₺1.650",
          "image": "assets/image/barkod_okuyucu/newlandhr2300bt.png",
          "features": ["Karekod", "Kablosuz", "Bluetooth", "USB"]
        },
        {
          "id": "kodscan-kds3040",
          "name": "Kodscan KDS-3040 1D Barkod Okuyucu",
          "description": "Profesyonel 1D barkod okuyucu. Yüksek okuma hızı ve geniş okuma mesafesi. Dayanıklı yapı ve uzun ömür.",
          "price": "₺1.100",
          "image": "assets/image/barkod_okuyucu/kodscankds3040.png",
          "features": ["1D", "Profesyonel", "Yüksek Hız", "Dayanıklı"]
        }
      ]
    },
    {
      "id": "teraziler",
      "name": "Teraziler",
      "description": "Elektronik teraziler, barkodlu teraziler ve tartım çözümleri",
      "icon": "fas fa-balance-scale",
      "products": [
        {
          "id": "digi-sm320p",
          "name": "Digi SM-320P K30 kg Elektronik Barkodlu Terazi",
          "description": "30 kg kapasiteli elektronik barkodlu terazi. Yüksek hassasiyet, barkod yazdırma özelliği. Perakende ve market işletmeleri için ideal.",
          "price": "₺4.500",
          "image": "assets/image/terazi/digism320p.png",
          "features": ["30 kg", "Barkodlu", "Elektronik"]
        },
        {
          "id": "hana-hs5500",
          "name": "Hana HS-5500 LCD Tartım Terazisi 30 Kg Boyunlu",
          "description": "30 kg kapasiteli LCD ekranlı boyunlu tartım terazisi. Büyük ve net ekran, kolay okuma. Kasap ve manav işletmeleri için uygun.",
          "price": "₺3.800",
          "image": "assets/image/terazi/hanahs5500.png",
          "features": ["30 kg", "LCD Ekran", "Boyunlu"]
        },
        {
          "id": "cas-swii-ws",
          "name": "Cas SWII-WS Akülü Su Korumalı Terazi",
          "description": "Akülü ve su korumalı terazi. 6-15-30 kg kapasite seçenekleri. Dayanıklı yapı, nemli ortamlarda güvenle kullanılabilir.",
          "price": "₺3.200",
          "image": "assets/image/terazi/casswii.png",
          "features": ["Akülü", "Su Korumalı", "6-15-30 kg"]
        },
        {
          "id": "hana-airbus",
          "name": "Hana AIRBUS Full Paslanmaz 150 Kg",
          "description": "150 kg kapasiteli tam paslanmaz çelik terazi. Endüstriyel kullanım için dayanıklı yapı. Yüksek hassasiyet ve uzun ömür.",
          "price": "₺5.500",
          "image": "assets/image/terazi/hanaairbus.png",
          "features": ["150 kg", "Paslanmaz", "Endüstriyel"]
        },
        {
          "id": "hana-hs7500",
          "name": "Hana HS-7500 C Sayıcı Terazi 30 Kg Kapasite",
          "description": "30 kg kapasiteli sayıcı terazi. Adet sayma özelliği ile küçük parça sayımı için ideal. Hassas ölçüm ve hızlı işlem.",
          "price": "₺4.200",
          "image": "assets/image/terazi/hanahs7500.png",
          "features": ["30 kg", "Sayıcı", "Hassas"]
        },
        {
          "id": "hana-hs500",
          "name": "Hana HS-500 LED Hassas Terazisi 3 Kg Kapasite",
          "description": "3 kg kapasiteli LED ekranlı hassas terazi. Yüksek hassasiyet, küçük ağırlıklar için ideal. Kuyumcu ve eczane işletmeleri için uygun.",
          "price": "₺2.800",
          "image": "assets/image/terazi/hanahs500.png",
          "features": ["3 kg", "LED", "Hassas"]
        },
        {
          "id": "cas-pw-serisi",
          "name": "Cas PW-Serisi 5 kg Onaylı Paslanmaz Çelik Porsiyon Tartım Terazisi",
          "description": "5 kg kapasiteli onaylı paslanmaz çelik porsiyon tartım terazisi. Gıda sektörü için uygun, hijyenik yapı. Yüksek hassasiyet.",
          "price": "₺3.500",
          "image": "assets/image/terazi/caspw.png",
          "features": ["5 kg", "Onaylı", "Paslanmaz", "Porsiyon"]
        },
        {
          "id": "ca-p",
          "name": "CA-P Fiyat Hesaplamalı Terazi PC Bağlantılı",
          "description": "PC bağlantılı fiyat hesaplamalı terazi. Bilgisayar entegrasyonu, otomatik fiyatlandırma. Perakende ve market işletmeleri için profesyonel çözüm.",
          "price": "₺4.800",
          "image": "assets/image/terazi/ca-p.png",
          "features": ["PC Bağlantılı", "Fiyat Hesaplama", "Entegrasyon"]
        }
      ]
    },
    {
      "id": "dokunmatik-ekranlar",
      "name": "Dokunmatik Ekranlar",
      "description": "Profesyonel dokunmatik ekran çözümleri ve tek ekran dokunmatik PC'ler",
      "icon": "fas fa-tablet-alt",
      "products": [
        {
          "id": "anypay-i5-a2-siyah",
          "name": "Anypay İ5 A2 8GB Ram 128GB SSD HDD Dokunmatik Ekran Siyah",
          "description": "4. Nesil Tek Ekran Dokunmatik PC. Yüksek performanslı i5 işlemci, 8GB RAM ve 128GB SSD HDD kombinasyonu. Siyah renk seçeneği.",
          "price": "₺8.500",
          "image": "assets/image/doknumatik_ekran/anypaya2siyah.png",
          "features": ["i5 İşlemci", "8GB RAM", "128GB SSD", "4. Nesil"]
        },
        {
          "id": "anypay-i5-a2-beyaz",
          "name": "Anypay İ5 A2 8GB Ram 128GB SSD HDD Dokunmatik Ekran Beyaz",
          "description": "7. Nesil Tek Ekran Dokunmatik PC. Yüksek performanslı i5 işlemci, 8GB RAM ve 128GB SSD HDD kombinasyonu. Beyaz renk seçeneği.",
          "price": "₺9.200",
          "image": "assets/image/doknumatik_ekran/anypaya2beyaz.png",
          "features": ["i5 İşlemci", "8GB RAM", "128GB SSD", "7. Nesil"]
        },
        {
          "id": "spenta-sp156i",
          "name": "Spenta SP-156I i5 Dokunmatik PC",
          "description": "Tek Ekran 15.6 inç dokunmatik PC. i5 işlemci ile güçlü performans. Restoran ve perakende işletmeleri için ideal.",
          "price": "₺7.800",
          "image": "assets/image/doknumatik_ekran/spenta.png",
          "features": ["i5 İşlemci", "15.6 inç", "Dokunmatik"]
        },
        {
          "id": "mnt-dm1300",
          "name": "MNT DM-1300 15.6 VGA Dokunmatik Ekran",
          "description": "15.6 inç VGA dokunmatik ekran. Yüksek çözünürlük ve hassas dokunmatik kontrol. Çoklu kullanım senaryoları için uygun.",
          "price": "₺6.500",
          "image": "assets/image/doknumatik_ekran/mnt.png",
          "features": ["15.6 inç", "VGA", "Dokunmatik"]
        }
      ]
    },
    {
      "id": "pos-aksesuarlari",
      "name": "POS Aksesuarları",
      "description": "POS cihazlarınız için özel tasarlanmış aksesuarlar",
      "icon": "fas fa-tools",
      "products": [
        {
          "id": "ingenico-5000f-canta",
          "name": "Ingenico 5000F Çanta",
          "description": "Ingenico 5000F cihazı için özel tasarlanmış koruyucu çanta. Taşıma kolaylığı ve koruma sağlar.",
          "price": "₺450",
          "image": "assets/image/pos_aksesuar/ingenico5000fcanta.png",
          "features": ["Koruyucu", "Taşınabilir"]
        },
        {
          "id": "ingenico-5000f-pinpad",
          "name": "Ingenico 5000F PinPad",
          "description": "Ingenico 5000F için ek güvenlik sağlayan PinPad aksesuarı. EMV sertifikalı.",
          "price": "₺1.200",
          "image": "assets/image/pos_aksesuar/ingenico5000fpinpad.png",
          "features": ["EMV", "Güvenli"]
        },
        {
          "id": "hugin-t300-canta",
          "name": "Hugin Tiger T300 Çanta",
          "description": "Hugin Tiger T300 cihazı için özel koruyucu çanta. Şık tasarım ve dayanıklı yapı.",
          "price": "₺380",
          "image": "assets/image/pos_aksesuar/hugintigert300canta.png",
          "features": ["Koruyucu", "Şık Tasarım"]
        },
        {
          "id": "hugin-t300-pinpad",
          "name": "Hugin Tiger T300 PinPad",
          "description": "Hugin Tiger T300 için ek güvenlik PinPad'i. Kolay kurulum ve kullanım.",
          "price": "₺1.100",
          "image": "assets/image/pos_aksesuar/hugintigert300pinpad.png",
          "features": ["Güvenli", "Kolay Kurulum"]
        },
        {
          "id": "hugin-t300-sarz",
          "name": "Hugin Tiger T300 Şarj Aleti",
          "description": "Hugin Tiger T300 için orijinal şarj aleti. Hızlı şarj özelliği.",
          "price": "₺250",
          "image": "assets/image/pos_aksesuar/hugintigert300sarz.png",
          "features": ["Orijinal", "Hızlı Şarj"]
        },
        {
          "id": "inpos-m530-pinpad",
          "name": "İnPos M530 PinPad",
          "description": "İnPos M530 için güvenli pin girişi sağlayan PinPad aksesuarı. EMV sertifikalı.",
          "price": "₺950",
          "image": "assets/image/pos_aksesuar/inposm530pinpad.png",
          "features": ["EMV", "Güvenli"]
        },
        {
          "id": "pax-a910sf-canta",
          "name": "PAX A910 SF Çanta",
          "description": "PAX A910 SF cihazı için özel tasarlanmış koruyucu çanta. Profesyonel görünüm.",
          "price": "₺420",
          "image": "assets/image/pos_aksesuar/paxa910sfcanta.png",
          "features": ["Koruyucu", "Profesyonel"]
        },
        {
          "id": "pax-a910sf-pinpad",
          "name": "PAX A910 SF PinPad",
          "description": "PAX A910 SF için ek güvenlik PinPad'i. Modern tasarım ve yüksek güvenlik.",
          "price": "₺1.150",
          "image": "assets/image/pos_aksesuar/paxa910sfpinpad.png",
          "features": ["Modern", "Yüksek Güvenlik"]
        },
        {
          "id": "pax-a910sf-sarz",
          "name": "PAX A910 SF Şarj Aleti",
          "description": "PAX A910 SF için orijinal şarj aleti. Uzun ömürlü ve güvenilir.",
          "price": "₺280",
          "image": "assets/image/pos_aksesuar/paxa910sfsarz.png",
          "features": ["Orijinal", "Uzun Ömürlü"]
        },
        {
          "id": "paygo-sp630-canta",
          "name": "PayGo SP630 Çanta",
          "description": "PayGo SP630 cihazı için özel koruyucu çanta. Kompakt ve pratik.",
          "price": "₺350",
          "image": "assets/image/pos_aksesuar/paygosp630canta.png",
          "features": ["Kompakt", "Pratik"]
        },
        {
          "id": "paygo-sp630-pinpad",
          "name": "PayGo SP630 PinPad",
          "description": "PayGo SP630 için güvenli ödeme PinPad'i. Kolay entegrasyon.",
          "price": "₺1.000",
          "image": "assets/image/pos_aksesuar/paygosp630pinpad.png",
          "features": ["Güvenli", "Kolay Entegrasyon"]
        }
      ]
    },
    {
      "id": "para-sayma-makineleri",
      "name": "Para Sayma Makineleri",
      "description": "Profesyonel para sayma ve sıralama çözümleri",
      "icon": "fas fa-money-bill-wave",
      "products": [
        {
          "id": "asys-ap35-sorter",
          "name": "ASYS AP35 Sorter Fitnesslı Karışık Para Sayma Makinesi",
          "description": "Fitness özellikli karışık para sayma ve sıralama makinesi. Hızlı ve hassas sayım, otomatik sıralama özelliği ile profesyonel kullanım için ideal.",
          "price": "Fiyat için iletişime geçin",
          "image": "assets/image/para_sayma_makinesi/asysap35.png",
          "features": ["Fitness", "Karışık Para", "Sıralama", "Hızlı Sayım"]
        },
        {
          "id": "silver-bolt-sb90",
          "name": "Silver Bolt SB90 TL / Euro Üsten beslemeli Kağıt Para Sayma Makinesi",
          "description": "Üsten beslemeli TL ve Euro kağıt para sayma makinesi. Yüksek hız, doğru sayım ve kullanıcı dostu arayüz.",
          "price": "Fiyat için iletişime geçin",
          "image": "assets/image/para_sayma_makinesi/silverboltsb90.png",
          "features": ["TL/Euro", "Üsten Beslemeli", "Yüksek Hız", "Doğru Sayım"]
        },
        {
          "id": "turkuaz-t90",
          "name": "Turkuaz T90 TL / Euro Kağıt Para Sayma Makinesi",
          "description": "TL ve Euro kağıt para sayma makinesi. Kompakt tasarım, hızlı işlem ve güvenilir performans.",
          "price": "Fiyat için iletişime geçin",
          "image": "assets/image/para_sayma_makinesi/turkuazt90.png",
          "features": ["TL/Euro", "Kompakt", "Hızlı", "Güvenilir"]
        },
        {
          "id": "atlas-al622",
          "name": "Atlas AL 622 TL / Euro Kağıt Para Sayma Makinesi",
          "description": "TL ve Euro kağıt para sayma makinesi. Dayanıklı yapı, yüksek kapasite ve profesyonel kullanım.",
          "price": "Fiyat için iletişime geçin",
          "image": "assets/image/para_sayma_makinesi/atlasal622.png",
          "features": ["TL/Euro", "Dayanıklı", "Yüksek Kapasite", "Profesyonel"]
        },
        {
          "id": "glory-gfs220",
          "name": "Glory GFS-220 Cs Para Sayma Makinesi Çift Kat",
          "description": "Çift katlı para sayma makinesi. Yüksek kapasite, hızlı sayım ve otomatik sıralama özellikleri.",
          "price": "Fiyat için iletişime geçin",
          "image": "assets/image/para_sayma_makinesi/glorygsf220.png",
          "features": ["Çift Kat", "Yüksek Kapasite", "Otomatik Sıralama", "Hızlı"]
        },
        {
          "id": "nx900-2cis",
          "name": "Nx-900 2 Cis Para Sayma Makinası 5 Ülke",
          "description": "5 ülke para birimi desteği olan çift cihazlı para sayma makinesi. Çoklu para birimi sayımı ve sıralama özelliği.",
          "price": "Fiyat için iletişime geçin",
          "image": "assets/image/para_sayma_makinesi/nx900.png",
          "features": ["5 Ülke", "Çift Cihaz", "Çoklu Para Birimi", "Sıralama"]
        },
        {
          "id": "alfa-a950",
          "name": "Alfa A-950 TL / Euro Kağıt Para Sayma Makinesi",
          "description": "TL ve Euro kağıt para sayma makinesi. Modern tasarım, yüksek performans ve kolay kullanım.",
          "price": "Fiyat için iletişime geçin",
          "image": "assets/image/para_sayma_makinesi/alfa950.png",
          "features": ["TL/Euro", "Modern Tasarım", "Yüksek Performans", "Kolay Kullanım"]
        },
        {
          "id": "kisan-k5",
          "name": "Kisan K5 4+1 Fitness Sorter Profesyonel Para Sayma Makinesi",
          "description": "4+1 fitness sorter özellikli profesyonel para sayma makinesi. Fitness kontrolü, otomatik sıralama ve yüksek hız.",
          "price": "Fiyat için iletişime geçin",
          "image": "assets/image/para_sayma_makinesi/kisank5.png",
          "features": ["4+1 Fitness", "Sorter", "Profesyonel", "Yüksek Hız"]
        },
        {
          "id": "ksn-ft610",
          "name": "Ksn FT 610 Para Sayma Makinesi 10 Ülke Çift Cıs",
          "description": "10 ülke para birimi desteği olan çift cihazlı para sayma makinesi. Geniş para birimi desteği ve profesyonel sayım.",
          "price": "Fiyat için iletişime geçin",
          "image": "assets/image/para_sayma_makinesi/ksnft610.png",
          "features": ["10 Ülke", "Çift Cihaz", "Geniş Desteği", "Profesyonel"]
        },
        {
          "id": "action-ac100",
          "name": "Action AC100 TL / EURO Kağıt Para Sayma Makinesi",
          "description": "TL ve EURO kağıt para sayma makinesi. Ekonomik çözüm, hızlı sayım ve güvenilir performans.",
          "price": "Fiyat için iletişime geçin",
          "image": "assets/image/para_sayma_makinesi/actionac100.png",
          "features": ["TL/EURO", "Ekonomik", "Hızlı", "Güvenilir"]
        },
        {
          "id": "hitachi-hunter-ih110",
          "name": "Hitachi-Hunter Ih-110 İki Katlı, 20 Ülke Kombinasyonlu Karışık Para Sayma Makinesi",
          "description": "İki katlı, 20 ülke kombinasyonlu karışık para sayma makinesi. En gelişmiş özellikler, yüksek kapasite ve profesyonel kullanım.",
          "price": "Fiyat için iletişime geçin",
          "image": "assets/image/para_sayma_makinesi/hitacihunterih110.png",
          "features": ["İki Katlı", "20 Ülke", "Karışık Para", "Profesyonel"]
        }
      ]
    },
    {
      "id": "genel-aksesuarlar",
      "name": "Genel Aksesuarlar",
      "description": "Tüm cihazlarınız için yedek parça ve aksesuarlar",
      "icon": "fas fa-tools",
      "products": [
        {
          "id": "aparat-ve-tutucular",
          "name": "Aparat ve Tutucular",
          "description": "POS cihazları, barkod yazıcıları ve okuyucular için özel tasarlanmış aparat ve tutucu sistemleri. Güvenli montaj ve düzenli yerleşim sağlar.",
          "price": "₺150",
          "image": "assets/image/genel_aksesuar/aparatvetutucular.png",
          "features": ["Güvenli Montaj", "Düzenli Yerleşim", "Çok Amaçlı"]
        },
        {
          "id": "kablo-ve-adaptorler",
          "name": "Kablo ve Adaptörler",
          "description": "USB, seri port, ethernet kabloları ve güç adaptörleri. Tüm POS cihazları, barkod yazıcıları ve okuyucular için uyumlu bağlantı çözümleri.",
          "price": "₺125",
          "image": "assets/image/genel_aksesuar/kabloveadaptör.png",
          "features": ["USB", "Ethernet", "Seri Port", "Güç Adaptörü"]
        },
        {
          "id": "serit-ve-etiketler",
          "name": "Şerit ve Etiketler",
          "description": "Termal yazıcılar için çeşitli boyut ve malzemelerde termal etiket ruloları ve yazıcı şeritleri. Yüksek kaliteli baskı ve dayanıklı yapı.",
          "price": "₺180",
          "image": "assets/image/genel_aksesuar/serit.png",
          "features": ["Termal", "Çok Boyutlu", "Yüksek Kalite", "Dayanıklı"]
        }
      ]
    }
  ]
};

