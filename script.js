document.addEventListener('DOMContentLoaded', () => {
  const navbar = document.getElementById('navbar');
  const burger = document.getElementById('burger');
  const navLinks = document.getElementById('navLinks');
  const langButtons = document.querySelectorAll('.lang-btn');

  const translations = {
    id: {
      'nav.home': 'Home',
      'nav.gallery': 'Galeri',
      'nav.about': 'Tentang',
      'nav.services': 'Layanan',
      'nav.contact': 'Kontak',
      'hero.title': 'Selamat Datang<br>di Dunia Cici',
      'hero.desc': 'Jelajahi keindahan animasi bergerak dan<br>karya seni digital terbaru kami.',
      'hero.button': 'Lihat Animasi &nbsp;&rarr;',
      'about.label': 'Tentang',
      'about.title': 'Tentang Animasi Cici',
      'about.desc': 'Website ini adalah galeri resmi yang menampilkan berbagai karya seni digital, karakter ilustrasi, dan animasi stiker custom buatan Cici. Di sini setiap foto dan ide kreatif diubah menjadi animasi ekspresif yang unik, hidup, dan siap digunakan untuk meramaikan media sosial maupun aplikasi pesan digitalmu.',
      'about.cta': 'Cici juga menerima pesanan stiker custom dan animasi.',
      'gallery.title': 'Koleksi Animasi',
      'gallery.button': 'Lihat Galeri &nbsp;&rarr;',
      'gallery.gambar.title': 'Cici Gambar',
      'gallery.gambar.desc': 'Koleksi gambar Cici dengan suasana manis, lembut, dan kreatif.',
      'gallery.stiker.title': 'Cici Stiker',
      'gallery.stiker.desc': 'Kumpulan stiker ekspresif untuk chat, media sosial, dan pesan harian.',
      'gallery.love.title': 'Cici Love',
      'gallery.love.desc': 'Galeri hangat bertema cinta, kasih sayang, dan momen bahagia.',
      'gallery.imajinasi.title': 'Cici Imajinasi',
      'gallery.imajinasi.desc': 'Koleksi imajinatif dengan nuansa unik dan penuh cerita.',
      'services.label': 'Layanan',
      'services.title': 'Pilihan Karya Cici',
      'services.item1.title': 'Stiker Custom',
      'services.item1.desc': 'Ubah foto favorit menjadi stiker ekspresif untuk chat dan media sosial.',
      'services.item2.title': 'Animasi Digital',
      'services.item2.desc': 'Gerakan lembut, warna ceria, dan karakter yang terasa lebih hidup.',
      'services.item3.title': 'Ilustrasi Karakter',
      'services.item3.desc': 'Desain karakter personal untuk hadiah, profil, atau proyek kreatif.',
      'detail.label': 'Detail Galeri',
      'detail.back': 'Kembali ke Galeri',
      'contact.label': 'Kontak',
      'contact.title': 'Buat Pesanan Animasi',
      'contact.desc': 'Pilih konsep, kirim foto referensi, lalu Cici akan membantu membuat animasi yang sesuai dengan gaya kamu.',
      'contact.instagram': 'Instagram @Cicianimasi',
      'contact.services': 'Lihat Layanan',
      'footer.copy': '© 2026 Animasi Cici. Dibuat dengan penuh kreativitas.',
      'footer.instagram': 'Instagram @Cicianimasi',
      'toast.viewing': 'Membuka galeri: ',
    },
    en: {
      'nav.home': 'Home',
      'nav.gallery': 'Gallery',
      'nav.about': 'About',
      'nav.services': 'Services',
      'nav.contact': 'Contact',
      'hero.title': 'Welcome to<br>Cici World',
      'hero.desc': 'Explore moving animation, digital artwork,<br>and the newest creative collection.',
      'hero.button': 'View Animations &nbsp;&rarr;',
      'about.label': 'About',
      'about.title': 'About Animasi Cici',
      'about.desc': 'This website is the official gallery for Cici digital art, character illustrations, and custom animated stickers. Every photo and creative idea becomes a unique, expressive animation ready for social media and chat apps.',
      'about.cta': 'Cici also accepts custom sticker and animation orders.',
      'gallery.title': 'Animation Collection',
      'gallery.button': 'View Gallery &nbsp;&rarr;',
      'gallery.gambar.title': 'Cici Drawing',
      'gallery.gambar.desc': 'A sweet, gentle, and creative collection of Cici artwork.',
      'gallery.stiker.title': 'Cici Stickers',
      'gallery.stiker.desc': 'Expressive stickers for chat, social media, and everyday messages.',
      'gallery.love.title': 'Cici Love',
      'gallery.love.desc': 'A warm gallery about love, affection, and happy moments.',
      'gallery.imajinasi.title': 'Cici Imagination',
      'gallery.imajinasi.desc': 'An imaginative collection with a unique mood and story.',
      'services.label': 'Services',
      'services.title': 'Cici Creative Options',
      'services.item1.title': 'Custom Stickers',
      'services.item1.desc': 'Turn favorite photos into expressive stickers for chat and social media.',
      'services.item2.title': 'Digital Animation',
      'services.item2.desc': 'Soft motion, cheerful color, and characters that feel more alive.',
      'services.item3.title': 'Character Illustration',
      'services.item3.desc': 'Personal character designs for gifts, profiles, or creative projects.',
      'detail.label': 'Gallery Detail',
      'detail.back': 'Back to Gallery',
      'contact.label': 'Contact',
      'contact.title': 'Order an Animation',
      'contact.desc': 'Choose a concept, send reference photos, and Cici will help create animation that matches your style.',
      'contact.instagram': 'Instagram @Cicianimasi',
      'contact.services': 'View Services',
      'footer.copy': '© 2026 Animasi Cici. Created with full creativity.',
      'footer.instagram': 'Instagram @Cicianimasi',
      'toast.viewing': 'Opening gallery: ',
    },
    ja: {
      'nav.home': 'ホーム',
      'nav.gallery': 'ギャラリー',
      'nav.about': '紹介',
      'nav.services': 'サービス',
      'nav.contact': 'お問い合わせ',
      'hero.title': 'Ciciの世界へ<br>ようこそ',
      'hero.desc': '動くアニメーションとデジタルアート、<br>新しい作品コレクションを楽しめます。',
      'hero.button': 'アニメを見る &nbsp;&rarr;',
      'about.label': '紹介',
      'about.title': 'Animasi Ciciについて',
      'about.desc': 'このWebサイトは、Ciciのデジタルアート、キャラクターイラスト、カスタムアニメーションスタンプを紹介する公式ギャラリーです。写真やアイデアを、SNSやチャットで使える表情豊かなアニメーションにします。',
      'about.cta': 'Ciciはカスタムスタンプやアニメーション制作も受け付けています。',
      'gallery.title': 'アニメーション作品',
      'gallery.button': 'ギャラリーを見る &nbsp;&rarr;',
      'gallery.gambar.title': 'Cici イラスト',
      'gallery.gambar.desc': '甘くやさしい雰囲気と創造性のあるCiciのイラスト集です。',
      'gallery.stiker.title': 'Cici スタンプ',
      'gallery.stiker.desc': 'チャット、SNS、毎日のメッセージに使える表情豊かなスタンプ集です。',
      'gallery.love.title': 'Cici ラブ',
      'gallery.love.desc': '愛情、やさしさ、幸せな瞬間をテーマにした温かいギャラリーです。',
      'gallery.imajinasi.title': 'Cici イマジネーション',
      'gallery.imajinasi.desc': '個性的な雰囲気と物語を感じる想像力豊かなコレクションです。',
      'services.label': 'サービス',
      'services.title': 'Ciciの制作メニュー',
      'services.item1.title': 'カスタムスタンプ',
      'services.item1.desc': 'お気に入りの写真を、チャットやSNSで使える表情豊かなスタンプにします。',
      'services.item2.title': 'デジタルアニメーション',
      'services.item2.desc': 'やさしい動き、明るい色、いきいきしたキャラクターを制作します。',
      'services.item3.title': 'キャラクターイラスト',
      'services.item3.desc': 'プレゼント、プロフィール、創作プロジェクト向けのキャラクターを描きます。',
      'detail.label': 'ギャラリー詳細',
      'detail.back': 'ギャラリーへ戻る',
      'contact.label': 'お問い合わせ',
      'contact.title': 'アニメーションを依頼する',
      'contact.desc': 'コンセプトを選び、参考写真を送ると、Ciciがあなたのスタイルに合うアニメーション制作をサポートします。',
      'contact.instagram': 'Instagram @Cicianimasi',
      'contact.services': 'サービスを見る',
      'footer.copy': '© 2026 Animasi Cici. たくさんの創造力を込めて制作しました。',
      'footer.instagram': 'Instagram @Cicianimasi',
      'toast.viewing': 'ギャラリーを開きます: ',
    },
  };

  const imageSizes = {
    'cici1.jpeg': [1024, 1024],
    'foto2jpg.jpeg': [1024, 1024],
    'foto3jpg.jpeg': [1024, 1024],
    'foto4.jpg': [1024, 1024],
    'foto5.jpg': [960, 960],
    'foto6.jpg': [1280, 1280],
    'foto7.jpg': [1280, 1280],
    'foto8.jpg': [1280, 1280],
    'foto9.jpg': [1280, 1280],
    'foto10.jpg': [1280, 1280],
    'foto11.jpg': [1280, 1280],
    'foto12.jpg': [1280, 1280],
    'foto13.jpg': [1280, 1280],
    'foto14.jpg': [1280, 1280],
    'r.jpeg': [886, 886],
    'yuto.JPG': [1280, 1280],
  };

  const detailData = {
    'cici-gambar': {
      cover: 'cici1.jpeg',
      images: ['cici1.jpeg', 'foto4.jpg', 'foto5.jpg', 'foto12.jpg'],
      id: ['Cici Gambar', 'Koleksi gambar Cici yang menampilkan karakter, warna, dan ide kreatif dalam berbagai suasana.'],
      en: ['Cici Drawing', 'A Cici artwork collection with characters, colors, and creative ideas in different moods.'],
      ja: ['Cici イラスト', 'キャラクター、色、創造的なアイデアをさまざまな雰囲気で楽しめるCiciのイラスト集です。'],
    },
    'cici-stiker': {
      cover: 'foto6.jpg',
      images: ['foto6.jpg', 'foto10.jpg', 'foto13.jpg', 'r.jpeg'],
      id: ['Cici Stiker', 'Kumpulan stiker Cici yang ekspresif, ringan, dan cocok untuk pesan harian.'],
      en: ['Cici Stickers', 'An expressive Cici sticker collection that feels light, fun, and perfect for daily messages.'],
      ja: ['Cici スタンプ', '毎日のメッセージに使いやすい、軽やかで表情豊かなCiciのスタンプ集です。'],
    },
    'cici-love': {
      cover: 'foto3jpg.jpeg',
      images: ['foto3jpg.jpeg', 'foto7.jpg', 'foto8.jpg', 'yuto.JPG'],
      id: ['Cici Love', 'Galeri Cici bertema cinta, kehangatan, dan momen penuh perasaan.'],
      en: ['Cici Love', 'A Cici gallery about love, warmth, and emotional moments.'],
      ja: ['Cici ラブ', '愛、温かさ、心に残る瞬間をテーマにしたCiciのギャラリーです。'],
    },
    'cici-imajinasi': {
      cover: 'foto14.jpg',
      images: ['foto14.jpg'],
      id: ['Cici Imajinasi', 'Koleksi imajinasi Cici dengan nuansa unik dan cerita visual yang kuat.'],
      en: ['Cici Imagination', 'A Cici imagination collection with a unique mood and strong visual story.'],
      ja: ['Cici イマジネーション', '個性的な雰囲気と強い物語性を持つ、Ciciの想像力あふれるコレクションです。'],
    },
  };

  let currentLang = localStorage.getItem('cici-lang') || 'id';

  function t(key) {
    return translations[currentLang]?.[key] || translations.id[key] || key;
  }

  function showToast(message) {
    const oldToast = document.querySelector('.toast');
    if (oldToast) oldToast.remove();

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.setAttribute('role', 'status');
    toast.textContent = message;
    document.body.appendChild(toast);

    requestAnimationFrame(() => toast.classList.add('visible'));
    setTimeout(() => {
      toast.classList.remove('visible');
      setTimeout(() => toast.remove(), 300);
    }, 2200);
  }

  function protectImages() {
    document.querySelectorAll('.hero-img, .card-img, .service-card, .detail-gallery-item').forEach((container) => {
      container.classList.add('protected-image');
    });

    document.querySelectorAll('img').forEach((image) => {
      if (image.dataset.protected === 'true') return;
      image.dataset.protected = 'true';
      image.setAttribute('draggable', 'false');
      image.addEventListener('contextmenu', (event) => event.preventDefault());
      image.addEventListener('dragstart', (event) => event.preventDefault());
      image.addEventListener('touchstart', () => {
        image.dataset.touching = 'true';
      }, { passive: true });
      image.addEventListener('touchend', () => {
        delete image.dataset.touching;
      }, { passive: true });
    });
  }

  document.addEventListener('contextmenu', (event) => {
    if (event.target.closest('.protected-image')) {
      event.preventDefault();
    }
  });

  function applyLanguage(lang) {
    currentLang = translations[lang] ? lang : 'id';
    document.documentElement.lang = currentLang;
    localStorage.setItem('cici-lang', currentLang);

    document.querySelectorAll('[data-i18n]').forEach((element) => {
      const key = element.dataset.i18n;
      const value = t(key);
      if (value) element.innerHTML = value;
    });

    langButtons.forEach((button) => {
      const isActive = button.dataset.lang === currentLang;
      button.classList.toggle('active', isActive);
      button.setAttribute('aria-pressed', String(isActive));
    });

    updateDetail(sessionStorage.getItem('cici-detail') || 'cici-gambar');
  }

  function showPage(pageId) {
    const fallback = document.querySelector('[data-page="home"]');
    const nextPage = document.querySelector(`[data-page="${pageId}"]`) || fallback;

    document.querySelectorAll('.page-section').forEach((section) => {
      section.classList.toggle('active-page', section === nextPage);
      section.toggleAttribute('hidden', section !== nextPage);
    });

    document.querySelectorAll('.nav-a').forEach((link) => {
      link.classList.toggle('active', link.dataset.nav === nextPage.dataset.page);
    });

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function createGalleryImage(src, title, index) {
    const [width, height] = imageSizes[src] || [1024, 1024];
    const wrapper = document.createElement('div');
    const image = document.createElement('img');

    wrapper.className = 'detail-gallery-item';
    image.src = src;
    image.alt = `${title} ${index + 1}`;
    image.width = width;
    image.height = height;
    image.loading = 'lazy';
    image.decoding = 'async';

    wrapper.appendChild(image);
    return wrapper;
  }

  function updateDetail(detailKey) {
    const detail = detailData[detailKey] || detailData['cici-gambar'];
    const localized = detail[currentLang] || detail.id;
    const title = document.getElementById('detailTitle');
    const text = document.getElementById('detailText');
    const gallery = document.getElementById('detailGallery');

    if (title) title.textContent = localized[0];
    if (text) text.textContent = localized[1];

    if (gallery) {
      gallery.replaceChildren(...detail.images.map((src, index) => createGalleryImage(src, localized[0], index)));
      protectImages();
    }
  }

  function routeFromHash() {
    const pageId = (window.location.hash || '#home').replace('#', '');
    showPage(pageId);
  }

  if (navbar) {
    window.addEventListener('scroll', () => {
      navbar.classList.toggle('scrolled', window.scrollY > 40);
    }, { passive: true });
  }

  if (burger && navLinks) {
    burger.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('open');
      burger.setAttribute('aria-expanded', String(isOpen));
    });

    navLinks.querySelectorAll('.nav-a').forEach((link) => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        burger.setAttribute('aria-expanded', 'false');
      });
    });
  }

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (event) => {
      const targetId = anchor.getAttribute('href');
      const target = targetId ? document.querySelector(targetId) : null;

      if (!target) return;
      event.preventDefault();
      window.location.hash = target.id;
      showPage(target.id);
    });
  });

  document.querySelectorAll('.btn-card[data-detail]').forEach((button) => {
    button.addEventListener('click', () => {
      const detailKey = button.dataset.detail || 'cici-gambar';
      const title = button.closest('.card')?.querySelector('.card-title')?.textContent || '';

      sessionStorage.setItem('cici-detail', detailKey);
      updateDetail(detailKey);
      showToast(t('toast.viewing') + title);
      if (window.location.hash === '#detail') {
        showPage('detail');
      } else {
        window.location.hash = 'detail';
      }
    });
  });

  langButtons.forEach((button) => {
    button.addEventListener('click', () => applyLanguage(button.dataset.lang));
  });

  document.querySelectorAll('.tentang-inner, .koleksi-header, .underline-heart, .card').forEach((element) => {
    element.classList.add('reveal');
  });

  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (!entry.isIntersecting) return;
        setTimeout(() => entry.target.classList.add('visible'), index * 80);
        revealObserver.unobserve(entry.target);
      });
    }, { threshold: 0.12 });

    document.querySelectorAll('.reveal').forEach((element) => revealObserver.observe(element));
  } else {
    document.querySelectorAll('.reveal').forEach((element) => element.classList.add('visible'));
  }

  window.addEventListener('hashchange', routeFromHash);
  sessionStorage.setItem('cici-detail', sessionStorage.getItem('cici-detail') || 'cici-gambar');
  applyLanguage(currentLang);
  protectImages();
  routeFromHash();
});
