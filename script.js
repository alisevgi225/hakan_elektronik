const defaultConfig = {
  company_name: "Hakan Elektronik",
  tagline: "POS ve Barkod Çözümleri",
  hero_title: "Teknoloji ve Güvenin Buluştuğu Adres",
  hero_subtitle: "POS sistemleri, barkod yazıcılar ve okuyucular ile işletmenizi bir adım öteye taşıyın. Profesyonel çözümler ve güvenilir hizmet için doğru yerdesiniz.",
  products_title: "Tüm Ürünlerimiz",
  about_title: "Hakkımızda",
  about_description: "Hakan Elektronik olarak, sektörde 15 yılı aşkın tecrübemizle işletmelere en kaliteli POS sistemleri, barkod yazıcılar ve okuyucular sunuyoruz. Müşteri memnuniyetini ön planda tutarak, güvenilir ürünler ve profesyonel hizmet anlayışımızla yanınızdayız.",
  contact_title: "İletişim",
  footer_text: "© 2024 Hakan Elektronik - Tüm Hakları Saklıdır",
  background_color: "#f5f5f5",
  primary_color: "#dc2626",
  text_color: "#333333",
  navbar_color: "#000000",
  card_color: "#ffffff"
};

async function onConfigChange(config) {
  const companyName = config.company_name || defaultConfig.company_name;
  const heroTitle = config.hero_title || defaultConfig.hero_title;
  const heroSubtitle = config.hero_subtitle || defaultConfig.hero_subtitle;
  const productsTitle = config.products_title || defaultConfig.products_title;
  const aboutTitle = config.about_title || defaultConfig.about_title;
  const aboutDescription = config.about_description || defaultConfig.about_description;
  const contactTitle = config.contact_title || defaultConfig.contact_title;
  const footerText = config.footer_text || defaultConfig.footer_text;
  
  const backgroundColor = config.background_color || defaultConfig.background_color;
  const primaryColor = config.primary_color || defaultConfig.primary_color;
  const textColor = config.text_color || defaultConfig.text_color;
  const navbarColor = config.navbar_color || defaultConfig.navbar_color;
  const cardColor = config.card_color || defaultConfig.card_color;

  const companyNameEl = document.getElementById('company-name');
  if (companyNameEl) {
    // Logo'yu koruyarak sadece metni güncelle
    const logoImg = companyNameEl.querySelector('.logo-img');
    const logoImgHTML = logoImg ? logoImg.outerHTML : '';
    companyNameEl.innerHTML = logoImgHTML + '<span class="logo-text">' + companyName.split(' ')[0] + ' <span>' + companyName.split(' ').slice(1).join(' ') + '</span></span>';
  }
  
  const heroTitleEl = document.getElementById('hero-title');
  if (heroTitleEl) heroTitleEl.textContent = heroTitle;
  
  const heroSubtitleEl = document.getElementById('hero-subtitle');
  if (heroSubtitleEl) heroSubtitleEl.textContent = heroSubtitle;
  
  const productsTitleEl = document.getElementById('products-title');
  if (productsTitleEl) productsTitleEl.textContent = productsTitle;
  
  const aboutTitleHome = document.getElementById('about-title-home');
  if (aboutTitleHome) aboutTitleHome.textContent = aboutTitle;
  
  const aboutDescHome = document.getElementById('about-description-home');
  if (aboutDescHome) aboutDescHome.textContent = aboutDescription;
  
  const contactTitleHome = document.getElementById('contact-title-home');
  if (contactTitleHome) contactTitleHome.textContent = contactTitle;
  
  const footerTextEl = document.getElementById('footer-text');
  if (footerTextEl) footerTextEl.textContent = footerText;
  
  document.body.style.background = backgroundColor;
  document.body.style.color = textColor;
  
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    navbar.style.background = `linear-gradient(135deg, ${navbarColor} 0%, #1a1a1a 100%)`;
  }
  
  document.querySelectorAll('.cta-button').forEach(btn => {
    btn.style.background = primaryColor;
  });
  
  document.querySelectorAll('.product-price').forEach(price => {
    price.style.color = primaryColor;
  });
  
  const style = document.createElement('style');
  style.textContent = `
    .section-title::after { background: ${primaryColor} !important; }
    .nav-link:hover, .nav-link.active { background: ${primaryColor} !important; }
    .contact-info strong { color: ${primaryColor} !important; }
    .social-links a:hover { color: ${primaryColor} !important; }
    .products-category-header { border-left-color: ${primaryColor} !important; }
  `;
  document.head.appendChild(style);
  
  document.querySelectorAll('.product-card, .feature-card, .about-content, .contact-form').forEach(card => {
    card.style.background = cardColor;
  });
}

if (window.elementSdk) {
  window.elementSdk.init({
    defaultConfig: defaultConfig,
    onConfigChange: onConfigChange,
    mapToCapabilities: (config) => ({
      recolorables: [
        {
          get: () => config.background_color || defaultConfig.background_color,
          set: (value) => {
            config.background_color = value;
            window.elementSdk.setConfig({ background_color: value });
          }
        },
        {
          get: () => config.card_color || defaultConfig.card_color,
          set: (value) => {
            config.card_color = value;
            window.elementSdk.setConfig({ card_color: value });
          }
        },
        {
          get: () => config.text_color || defaultConfig.text_color,
          set: (value) => {
            config.text_color = value;
            window.elementSdk.setConfig({ text_color: value });
          }
        },
        {
          get: () => config.primary_color || defaultConfig.primary_color,
          set: (value) => {
            config.primary_color = value;
            window.elementSdk.setConfig({ primary_color: value });
          }
        },
        {
          get: () => config.navbar_color || defaultConfig.navbar_color,
          set: (value) => {
            config.navbar_color = value;
            window.elementSdk.setConfig({ navbar_color: value });
          }
        }
      ],
      borderables: [],
      fontEditable: undefined,
      fontSizeable: undefined
    }),
    mapToEditPanelValues: (config) => new Map([
      ["company_name", config.company_name || defaultConfig.company_name],
      ["tagline", config.tagline || defaultConfig.tagline],
      ["hero_title", config.hero_title || defaultConfig.hero_title],
      ["hero_subtitle", config.hero_subtitle || defaultConfig.hero_subtitle],
      ["products_title", config.products_title || defaultConfig.products_title],
      ["about_title", config.about_title || defaultConfig.about_title],
      ["about_description", config.about_description || defaultConfig.about_description],
      ["contact_title", config.contact_title || defaultConfig.contact_title],
      ["footer_text", config.footer_text || defaultConfig.footer_text]
    ])
  });
}

// Sayfa yüklendiğinde aktif link'i belirle
function setActiveNavLink() {
  const currentPath = window.location.pathname;
  const currentHash = window.location.hash;
  const navLinks = document.querySelectorAll('.nav-link');
  
  navLinks.forEach(link => {
    link.classList.remove('active');
    const href = link.getAttribute('href');
    
    if (currentPath.includes('market.html')) {
      if (href && href.includes('market.html')) {
        link.classList.add('active');
      }
    } else {
      if (currentHash) {
        if (href === currentHash || href === `index.html${currentHash}`) {
          link.classList.add('active');
        }
      } else {
        if (href === '#home' || href === 'index.html' || (!href && link.textContent.trim() === 'Ana Sayfa')) {
          link.classList.add('active');
        }
      }
    }
  });
}

const navLinks = document.querySelectorAll('.nav-link');
const pages = document.querySelectorAll('.page');

function showPage(pageName) {
  // Sadece index.html'de çalışır (pages elementi varsa)
  if (pages.length === 0) return;
  
  pages.forEach(page => page.classList.remove('active'));
  navLinks.forEach(link => link.classList.remove('active'));
  
  const targetPage = document.getElementById(pageName);
  if (targetPage) {
    targetPage.classList.add('active');
  }
  
  const activeLink = document.querySelector(`.nav-link[data-page="${pageName}"]`) || 
                     document.querySelector(`.nav-link[href="#${pageName}"]`) ||
                     document.querySelector(`.nav-link[href="#"]`);
  if (activeLink) activeLink.classList.add('active');
  
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    const href = link.getAttribute('href');
    const pageName = link.getAttribute('data-page');
    const target = link.getAttribute('data-target');
    
    // Eğer href varsa ve market.html veya index.html'e gidiyorsa, normal link davranışına izin ver
    if (href && (href.includes('market.html') || href.includes('index.html'))) {
      return; // Normal link davranışı
    }
    
    // Eğer href hash içeriyorsa (örn: #categories)
    if (href && href.startsWith('#')) {
      e.preventDefault();
      const targetId = href.substring(1);
      const currentPage = document.querySelector('.page.active');
      
      // URL'e hash ekle
      window.location.hash = href;
      
      if (currentPage && currentPage.id !== 'home') {
        showPage('home');
        setTimeout(() => {
          const section = document.getElementById(targetId);
          if (section) {
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 300);
      } else {
        const section = document.getElementById(targetId);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
      return;
    }
    
    // Eski data-page ve data-target desteği
    e.preventDefault();
    if (pageName) {
      if (pageName === 'products') {
        window.location.href = 'market.html';
      } else {
        showPage(pageName);
      }
    } else if (target) {
      const currentPage = document.querySelector('.page.active');
      if (currentPage && currentPage.id !== 'home') {
        showPage('home');
        setTimeout(() => {
          const section = document.getElementById(target);
          if (section) {
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 300);
      } else {
        const section = document.getElementById(target);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    }
  });
});

document.querySelectorAll('[data-page]').forEach(element => {
  if (!element.classList.contains('nav-link')) {
    element.addEventListener('click', (e) => {
      const pageName = element.getAttribute('data-page');
      if (pageName) {
        if (pageName === 'products') {
          window.location.href = 'market.html';
        } else {
          showPage(pageName);
        }
      }
    });
  }
});

const whatsappLink = document.getElementById('whatsappLink');
const contactForm = document.getElementById('contactForm');

if (whatsappLink && contactForm) {
  whatsappLink.addEventListener('click', (e) => {
    const name = document.getElementById('name').value.trim();
    const message = document.getElementById('message').value.trim();
    
    if (name && message) {
      const whatsappMessage = `Merhaba, ben ${name}. ${message}`;
      const encodedMessage = encodeURIComponent(whatsappMessage);
      whatsappLink.href = `https://wa.me/905459685329?text=${encodedMessage}`;
    } else {
      e.preventDefault();
      alert('Lütfen adınızı ve mesajınızı girin.');
    }
  });
}

if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const whatsappLink = document.getElementById('whatsappLink');
    if (whatsappLink) {
      whatsappLink.click();
    }
  });
}

// Kırmızı ışın efekti oluştur
function createStars() {
  const starsContainer = document.getElementById('starsContainer');
  if (!starsContainer) return;
  
  const starCount = 50;
  const sizes = ['small', 'medium', 'large'];
  
  function createStar() {
    const star = document.createElement('div');
    star.className = `star moving ${sizes[Math.floor(Math.random() * sizes.length)]}`;
    
    // Rastgele başlangıç pozisyonu (ekranın altından)
    star.style.left = Math.random() * 100 + '%';
    star.style.top = '100%';
    
    // Rastgele animasyon süresi (hızlı hareket)
    const duration = 3 + Math.random() * 4; // 3-7 saniye arası
    star.style.animationDuration = duration + 's';
    
    // Rastgele animasyon gecikmesi
    star.style.animationDelay = Math.random() * 2 + 's';
    
    // Rastgele rotasyon
    star.style.transform = `rotate(${Math.random() * 10 - 5}deg)`;
    
    starsContainer.appendChild(star);
    
    // Animasyon bitince yıldızı kaldır ve yeniden oluştur
    setTimeout(() => {
      star.remove();
      createStar();
    }, (duration + 2) * 1000);
  }
  
  // İlk yıldızları oluştur
  for (let i = 0; i < starCount; i++) {
    setTimeout(() => {
      createStar();
    }, i * 100); // Her 100ms'de bir yıldız oluştur
  }
}

// Sayfa yüklendiğinde hash varsa ilgili bölüme scroll et
function handleHashOnLoad() {
  if (window.location.hash) {
    const hash = window.location.hash.substring(1);
    const section = document.getElementById(hash);
    if (section) {
      setTimeout(() => {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  }
}

// Sayfa yüklendiğinde ışınları oluştur
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    createStars();
    setActiveNavLink();
    handleHashOnLoad();
  });
} else {
  createStars();
  setActiveNavLink();
  handleHashOnLoad();
}

// Hash değiştiğinde aktif link'i güncelle ve scroll et
window.addEventListener('hashchange', () => {
  setActiveNavLink();
  handleHashOnLoad();
});

