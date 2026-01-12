# Işın Efekti Özelleştirme Rehberi

## 1. YÖN VE HAREKET YÖNÜ (CSS - @keyframes moveStar)

**Dosya:** `index.html` - Satır 62-77

### Şu Anki Durum (Aşağıdan Yukarıya):
```css
@keyframes moveStar {
  0% {
    transform: translateY(100vh) translateX(0) rotate(0deg);
    opacity: 0;
  }
  100% {
    transform: translateY(-100vh) translateX(100px) rotate(5deg);
    opacity: 0;
  }
}
```

### Değişiklik Seçenekleri:

#### A) Yukarıdan Aşağıya:
```css
0% { transform: translateY(-100vh) translateX(0) rotate(0deg); }
100% { transform: translateY(100vh) translateX(100px) rotate(5deg); }
```

#### B) Soldan Sağa (Yatay):
```css
0% { transform: translateX(-100px) translateY(0) rotate(90deg); }
100% { transform: translateX(100vw) translateY(100px) rotate(90deg); }
```

#### C) Sağdan Sola:
```css
0% { transform: translateX(100vw) translateY(0) rotate(-90deg); }
100% { transform: translateX(-100px) translateY(100px) rotate(-90deg); }
```

#### D) Çapraz - Sol Üstten Sağ Alta:
```css
0% { transform: translate(-100px, -100px) rotate(45deg); }
100% { transform: translate(calc(100vw + 100px), calc(100vh + 100px)) rotate(45deg); }
```

#### E) Çapraz - Sağ Üstten Sol Alta:
```css
0% { transform: translate(calc(100vw + 100px), -100px) rotate(-45deg); }
100% { transform: translate(-100px, calc(100vh + 100px)) rotate(-45deg); }
```

#### F) Merkezden Dışa (Patlama Efekti):
```css
0% { transform: translate(50vw, 50vh) scale(0) rotate(0deg); }
100% { transform: translate(calc(50vw + 200px), calc(50vh - 200px)) scale(1) rotate(360deg); }
```

---

## 2. IŞIN BOYUTLARI (CSS - .star.small, .medium, .large)

**Dosya:** `index.html` - Satır 47-60

### Şu Anki Değerler:
```css
.star.small {
  width: 1px;    /* Genişlik */
  height: 40px;  /* Uzunluk */
}

.star.medium {
  width: 2px;
  height: 60px;
}

.star.large {
  width: 2px;
  height: 80px;
}
```

### Örnek Değişiklikler:
```css
/* Daha kalın ve uzun ışınlar */
.star.small { width: 3px; height: 80px; }
.star.medium { width: 4px; height: 120px; }
.star.large { width: 5px; height: 160px; }

/* Daha ince ve kısa ışınlar */
.star.small { width: 1px; height: 20px; }
.star.medium { width: 1px; height: 30px; }
.star.large { width: 2px; height: 40px; }
```

---

## 3. RENK VE GÖRÜNÜM (CSS - .star)

**Dosya:** `index.html` - Satır 40-45

### Şu Anki Durum:
```css
.star {
  background: linear-gradient(to bottom, rgba(220, 38, 38, 0.8), rgba(220, 38, 38, 0.2));
  border-radius: 2px;
  box-shadow: 0 0 6px rgba(220, 38, 38, 0.6), 0 0 12px rgba(220, 38, 38, 0.4);
}
```

### Renk Değişiklikleri:

#### Mavi Işınlar:
```css
background: linear-gradient(to bottom, rgba(59, 130, 246, 0.8), rgba(59, 130, 246, 0.2));
box-shadow: 0 0 6px rgba(59, 130, 246, 0.6), 0 0 12px rgba(59, 130, 246, 0.4);
```

#### Yeşil Işınlar:
```css
background: linear-gradient(to bottom, rgba(34, 197, 94, 0.8), rgba(34, 197, 94, 0.2));
box-shadow: 0 0 6px rgba(34, 197, 94, 0.6), 0 0 12px rgba(34, 197, 94, 0.4);
```

#### Beyaz Işınlar:
```css
background: linear-gradient(to bottom, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.3));
box-shadow: 0 0 6px rgba(255, 255, 255, 0.8), 0 0 12px rgba(255, 255, 255, 0.6);
```

#### Çok Renkli (Gökkuşağı):
```css
background: linear-gradient(to bottom, 
  rgba(255, 0, 0, 0.8),    /* Kırmızı */
  rgba(255, 165, 0, 0.8),   /* Turuncu */
  rgba(255, 255, 0, 0.8),   /* Sarı */
  rgba(0, 255, 0, 0.8),     /* Yeşil */
  rgba(0, 0, 255, 0.8),     /* Mavi */
  rgba(75, 0, 130, 0.8),    /* İndigo */
  rgba(238, 130, 238, 0.8)  /* Mor */
);
```

### Glow Efekti (Parlaklık):
```css
/* Daha parlak */
box-shadow: 0 0 10px rgba(220, 38, 38, 0.8), 
            0 0 20px rgba(220, 38, 38, 0.6),
            0 0 30px rgba(220, 38, 38, 0.4);

/* Daha sönük */
box-shadow: 0 0 3px rgba(220, 38, 38, 0.4), 
            0 0 6px rgba(220, 38, 38, 0.2);
```

---

## 4. HIZ VE ANİMASYON (JavaScript)

**Dosya:** `index.html` - Satır 1441-1446

### Şu Anki Durum:
```javascript
const duration = 3 + Math.random() * 4; // 3-7 saniye arası
star.style.animationDelay = Math.random() * 2 + 's';
```

### Hız Değişiklikleri:

#### Çok Hızlı (1-3 saniye):
```javascript
const duration = 1 + Math.random() * 2; // 1-3 saniye
```

#### Çok Yavaş (10-20 saniye):
```javascript
const duration = 10 + Math.random() * 10; // 10-20 saniye
```

#### Sabit Hız (Hep aynı):
```javascript
const duration = 5; // Hep 5 saniye
```

#### Gecikme Ayarları:
```javascript
// Daha fazla gecikme (0-5 saniye)
star.style.animationDelay = Math.random() * 5 + 's';

// Gecikme yok
star.style.animationDelay = '0s';

// Sabit gecikme
star.style.animationDelay = '1s';
```

---

## 5. IŞIN SAYISI (JavaScript)

**Dosya:** `index.html` - Satır 1430

### Şu Anki Durum:
```javascript
const starCount = 50;
```

### Değişiklikler:
```javascript
const starCount = 20;  // Az ışın (daha sade)
const starCount = 100; // Çok ışın (yoğun)
const starCount = 200; // Çok yoğun (performans düşebilir)
```

---

## 6. ROTASYON (DÖNÜŞ) (JavaScript)

**Dosya:** `index.html` - Satır 1449

### Şu Anki Durum:
```javascript
star.style.transform = `rotate(${Math.random() * 10 - 5}deg)`;
// -5 ile +5 derece arası rastgele dönüş
```

### Değişiklikler:
```javascript
// Daha fazla dönüş (-30 ile +30 derece)
star.style.transform = `rotate(${Math.random() * 60 - 30}deg)`;

// Dönüş yok (düz)
star.style.transform = `rotate(0deg)`;

// Sabit açı (45 derece)
star.style.transform = `rotate(45deg)`;

// Sürekli dönen ışınlar (CSS'e ekle)
.star.moving {
  animation: moveStar linear infinite, rotate 2s linear infinite;
}
@keyframes rotate {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
```

---

## 7. BAŞLANGIÇ POZİSYONU (JavaScript)

**Dosya:** `index.html` - Satır 1437-1439

### Şu Anki Durum (Alt kenardan):
```javascript
star.style.left = Math.random() * 100 + '%';
star.style.top = '100%';
```

### Değişiklikler:

#### Üst kenardan:
```javascript
star.style.left = Math.random() * 100 + '%';
star.style.top = '-10%'; // veya '0%'
```

#### Sol kenardan:
```javascript
star.style.left = '-10%';
star.style.top = Math.random() * 100 + '%';
```

#### Sağ kenardan:
```javascript
star.style.left = '110%';
star.style.top = Math.random() * 100 + '%';
```

#### Merkezden:
```javascript
star.style.left = '50%';
star.style.top = '50%';
```

#### Rastgele her yerden:
```javascript
star.style.left = Math.random() * 120 - 10 + '%'; // -10% ile 110% arası
star.style.top = Math.random() * 120 - 10 + '%';
```

---

## 8. OLUŞTURMA HIZI (JavaScript)

**Dosya:** `index.html` - Satır 1464

### Şu Anki Durum:
```javascript
setTimeout(() => {
  createStar();
}, i * 100); // Her 100ms'de bir
```

### Değişiklikler:
```javascript
// Daha hızlı oluşturma (her 50ms)
}, i * 50);

// Daha yavaş oluşturma (her 200ms)
}, i * 200);

// Aynı anda hepsi
}, 0); // veya i * 0
```

---

## 9. OPACITY (ŞEFFAFLIK) AYARLARI (CSS)

**Dosya:** `index.html` - Satır 65, 68, 71, 75

### Şu Anki Durum:
```css
0% { opacity: 0; }    /* Başlangıçta görünmez */
10% { opacity: 1; }  /* %10'da görünür ol */
90% { opacity: 1; }  /* %90'a kadar görünür */
100% { opacity: 0; } /* Sonda kaybol */
```

### Değişiklikler:
```css
/* Daha yumuşak geçiş */
0% { opacity: 0; }
20% { opacity: 1; }
80% { opacity: 1; }
100% { opacity: 0; }

/* Daha hızlı görünme/kaybolma */
0% { opacity: 0; }
5% { opacity: 1; }
95% { opacity: 1; }
100% { opacity: 0; }

/* Hep görünür */
0% { opacity: 1; }
100% { opacity: 1; }
```

---

## 10. YATAY HAREKET MİKTARI (CSS)

**Dosya:** `index.html` - Satır 74

### Şu Anki Durum:
```css
100% { transform: translateY(-100vh) translateX(100px) rotate(5deg); }
/* Yukarı çıkarken 100px sağa kayıyor */
```

### Değişiklikler:
```css
/* Daha fazla yatay kayma (200px) */
100% { transform: translateY(-100vh) translateX(200px) rotate(5deg); }

/* Daha az kayma (50px) */
100% { transform: translateY(-100vh) translateX(50px) rotate(5deg); }

/* Yatay kayma yok (düz yukarı) */
100% { transform: translateY(-100vh) translateX(0) rotate(0deg); }

/* Rastgele yatay kayma (JavaScript'te) */
100% { transform: translateY(-100vh) translateX(var(--random-x)) rotate(5deg); }
```

---

## ÖRNEK: TAMAMEN FARKLI BİR EFEKT

### Örnek 1: Merkezden Dışa Patlama
```css
@keyframes moveStar {
  0% {
    transform: translate(50vw, 50vh) scale(0) rotate(0deg);
    opacity: 1;
  }
  100% {
    transform: translate(
      calc(50vw + ${Math.random() * 500 - 250}px), 
      calc(50vh + ${Math.random() * 500 - 250}px)
    ) scale(1) rotate(360deg);
    opacity: 0;
  }
}
```

### Örnek 2: Dairesel Hareket
```css
@keyframes moveStar {
  0% {
    transform: translate(50vw, 50vh) rotate(0deg) translateX(300px) rotate(0deg);
  }
  100% {
    transform: translate(50vw, 50vh) rotate(360deg) translateX(300px) rotate(-360deg);
  }
}
```

---

## HIZLI AYARLAR İÇİN ÖNERİLER

### Daha Dramatik Görünüm:
- Işın sayısı: 100
- Hız: 2-4 saniye
- Boyut: Daha büyük (height: 100-150px)
- Glow: Daha parlak

### Daha Sade Görünüm:
- Işın sayısı: 20-30
- Hız: 5-8 saniye
- Boyut: Daha küçük (height: 30-50px)
- Glow: Daha sönük

### Performans İçin:
- Işın sayısı: 30-50
- Animasyon süresi: 4-6 saniye
- Glow efektini azalt

---

## NOTLAR

- `vh` = viewport height (ekran yüksekliği)
- `vw` = viewport width (ekran genişliği)
- `100vh` = Ekranın tam yüksekliği
- `100vw` = Ekranın tam genişliği
- `rgba(220, 38, 38, 0.8)` = Kırmızı renk, %80 opaklık
- `rotate(45deg)` = 45 derece döndürme
- `translateX(100px)` = 100px sağa kaydırma
- `translateY(-100vh)` = Ekran yüksekliği kadar yukarı kaydırma










