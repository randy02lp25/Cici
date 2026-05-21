// ═══════════════════════════════════════════
//  SCRIPT.JS — Animasi Cici
// ═══════════════════════════════════════════

document.addEventListener('DOMContentLoaded', () => {

  // ─────────────────────────────────────────
  // 1. NAVBAR — shadow saat scroll
  // ─────────────────────────────────────────
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
  }, { passive: true });


  // ─────────────────────────────────────────
  // 2. MOBILE MENU TOGGLE
  // ─────────────────────────────────────────
  const burger   = document.getElementById('burger');
  const navLinks = document.getElementById('navLinks');

  burger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });

  // Tutup menu saat link diklik
  navLinks.querySelectorAll('.nav-a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
    });
  });


  // ─────────────────────────────────────────
  // 3. ANIMASI SCROLL MASUK (reveal)
  // ─────────────────────────────────────────
  // Tambahkan class "reveal" ke elemen yang ingin dianimasikan
  const revealTargets = [
    '.tentang-inner',
    '.koleksi-header',
    '.underline-heart',
    '.card',
  ];

  revealTargets.forEach(selector => {
    document.querySelectorAll(selector).forEach(el => {
      el.classList.add('reveal');
    });
  });

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, i * 100);
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.reveal').forEach(el => {
    revealObserver.observe(el);
  });


  // ─────────────────────────────────────────
  // 4. TOMBOL "Putar Detail" — efek klik
  // ─────────────────────────────────────────
  document.querySelectorAll('.btn-card').forEach(btn => {
    btn.addEventListener('click', function () {
      const card  = this.closest('.card');
      const title = card.querySelector('.card-title').textContent;

      // Animasi kecil pada kartu
      card.style.transform = 'scale(0.97)';
      setTimeout(() => { card.style.transform = ''; }, 200);

      // Notifikasi sederhana
      showToast('🎬 Memutar: ' + title);
    });
  });


  // ─────────────────────────────────────────
  // 5. TOAST NOTIFIKASI
  // ─────────────────────────────────────────
  function showToast(msg) {
    // Hapus toast lama jika ada
    const old = document.querySelector('.toast');
    if (old) old.remove();

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = msg;
    toast.style.cssText = `
      position: fixed;
      bottom: 2rem; left: 50%;
      transform: translateX(-50%) translateY(20px);
      background: #ff6b9d;
      color: #fff;
      padding: 0.75rem 1.8rem;
      border-radius: 50px;
      font-family: 'Nunito', sans-serif;
      font-weight: 700;
      font-size: 0.9rem;
      box-shadow: 0 6px 24px rgba(255,107,157,0.4);
      z-index: 999;
      opacity: 0;
      transition: opacity 0.3s, transform 0.3s;
    `;
    document.body.appendChild(toast);

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        toast.style.opacity = '1';
        toast.style.transform = 'translateX(-50%) translateY(0)';
      });
    });

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateX(-50%) translateY(10px)';
      setTimeout(() => toast.remove(), 300);
    }, 2500);
  }


  // ─────────────────────────────────────────
  // 6. SMOOTH SCROLL untuk link navigasi
  // ─────────────────────────────────────────
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const offset = 70; // tinggi navbar
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });

});