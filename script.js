// =========================================================
// Ne Yesem? — menü verisi, sayfalama ve etkileşimler
// =========================================================

document.addEventListener('DOMContentLoaded', () => {

  /* -----------------------------------------------------
     1) GÖRSEL YOLLARI
     Fotoğraflar klasör içinde menü sırasıyla numaralanmış;
     her ürün kendi görseliyle eşlendi.
  ----------------------------------------------------- */
  const FAV = 'assets/Menu_photos/restoranin_en_sevilenleri/';
  const DUR = 'assets/Menu_photos/durum_menusu/';
  const SRV = 'assets/Menu_photos/servisler/';
  const KAR = 'assets/Menu_photos/karisik_menu/';
  const COR = 'assets/Menu_photos/corba/';
  const ICE = 'assets/Menu_photos/icecekler/';

  const img = {
    /* Ekmek arasi */
    ekmekDoner: FAV + '20053885_1783765519952.jpg',
    ekmekKofte: FAV + '20053904_1783765250723.jpg',

    /* Durumler */
    durumDoner:    DUR + '20053888_1783091981352.jpg',
    durumSoslu:    DUR + '20053890_1783092054856.jpg',
    durumKasarli:  DUR + '20053892_1783091952246.jpg',
    durumCiger:    DUR + '20053894_1783092243225.jpg',
    durumAdana:    DUR + '20053896_1783092262460.jpg',
    durumUrfa:     DUR + '20053898_1783092281452.jpg',
    durumTavukSis: DUR + '20053900_1783092291482.jpg',
    durumKofte:    DUR + '20053902_1783092309397.jpg',
    durumNeYesem:  DUR + '20053906_1783092329329.jpg',

    /* Servisler */
    servisDoner:    SRV + '20053910_1783092176751.jpg',
    servisCiger:    SRV + '20053911_1783092164668.jpg',
    servisAdana:    SRV + '20053912_1783092157181.jpg',
    servisUrfa:     SRV + '20053913_1783092156828.jpg',
    servisTavukSis: SRV + '20053914_1783092149971.jpg',
    servisKanat:    SRV + '20053915_1783092120757.jpg',
    servisKofte:    SRV + '20053916_1783092136257.jpg',
    servisKulbasti: SRV + '20053917_1783764340737.jpg',
    karisikIzgara:  KAR + '20053922_1783757686810.jpg',

    corba: COR + '20053923_1783083814778.jpg',

    /* Icecekler */
    cola:       ICE + '20053925_1783083832189.jpg',
    fanta:      ICE + '20053926_1783083838858.jpg',
    sprite:     ICE + '20053927_1783083846868.jpg',
    karisikIce: ICE + '20053928_1783085857435.jpg',
    ayran:      ICE + '20053929_1783083864779.jpg',
    salgam:     ICE + '20053930_1783085324372.jpg',
    soda:       ICE + '20053932_1783083881239.jpg',
    ayran1lt:   ICE + '20053935_1783083900792.jpg',
    cola1lt:    ICE + '20053936_1783083912067.jpg',
    cola25lt:   ICE + '20053937_1783083920836.jpg',
  };

  /* Sık tekrar eden içerik açıklamaları */
  const D = {
    klasik:      'Kıvırcık, domates, turşu, patates, soğan',
    sosluDurum:  'Kıvırcık, domates, turşu, patates, sos',
    kasarliDurum:'Kıvırcık, domates, turşu, patates, sos, kaşar',
    ciger:       'Soğan, domates, patates',
    kulbasti:    'Soğan, domates, biber',
    kebapDurum:  'Domates, soğan, biber',
    tavukSis:    'Domates, biber, soğan',
    servisSade:  'Pilav, salata, turşu, patates',
    servisKoz:   'Pilav, salata, patates, közde domates ve biber, turşu',
    gozleme:     'Patates, domates, salatalık',
    kiloluk:     'Pilav, salata, turşu ve seçeceğiniz bir litrelik içecek ile servis edilir.',
  };

  /* -----------------------------------------------------
     2) MENÜ VERİSİ  (restoranın güncel basılı menüsü)
     c: kategori, n: ad, d: içindekiler, p: fiyat, img: görsel
     Görseli olmayan ürünler markalı bir yer tutucu ile gösterilir.
  ----------------------------------------------------- */
  const menuItems = [
    /* --- Dürümler (13) --- */
    { c: 'durum', n: 'Tavuk Döner Dürüm',              d: D.klasik,       p: 170, img: img.durumDoner },
    { c: 'durum', n: 'Soslu Tavuk Döner Dürüm',        d: D.sosluDurum,   p: 170, img: img.durumSoslu },
    { c: 'durum', n: 'Soslu-Kaşarlı Tavuk Döner Dürüm',d: D.kasarliDurum, p: 190, img: img.durumKasarli },
    { c: 'durum', n: 'Arnavut Ciğeri (Dana) Dürüm',    d: D.ciger,        p: 250, img: img.durumCiger },
    { c: 'durum', n: 'Adana Dürüm',                    d: D.kebapDurum,   p: 350, img: img.durumAdana },
    { c: 'durum', n: 'Urfa Dürüm',                     d: D.kebapDurum,   p: 350, img: img.durumUrfa },
    { c: 'durum', n: 'Tavuk Şiş Dürüm',                d: D.tavukSis,     p: 250, img: img.durumTavukSis },
    { c: 'durum', n: 'Köfte Dürüm',                    d: D.klasik,       p: 260, img: img.durumKofte },
    { c: 'durum', n: 'Ne Yesem Dürüm (Tavuk)',         d: 'Patates, ayran', p: 260, img: img.durumNeYesem },
    { c: 'durum', n: 'Ne Yesem Dürüm (Tavuk)',         d: 'Patates, kola',  p: 300, img: img.durumNeYesem },
    { c: 'durum', n: 'Ne Yesem Dürüm (Et)',            d: 'Patates, ayran', p: 450 },
    { c: 'durum', n: 'Ne Yesem Dürüm (Et)',            d: 'Patates, kola',  p: 500 },

    /* --- Ekmek Araları (5) --- */
    { c: 'ekmek', n: 'Ekmek Arası Tavuk Döner',           d: D.klasik,    p: 160, img: img.ekmekDoner },
    { c: 'ekmek', n: 'Arnavut Ciğeri (Dana) Ekmek Arası', d: D.ciger,     p: 250 },
    { c: 'ekmek', n: 'Ekmek Arası Köfte',                 d: D.klasik,    p: 260, img: img.ekmekKofte },
    { c: 'ekmek', n: 'Ekmek Arası Tavuk Külbastı',        d: D.kulbasti,  p: 250 },
    { c: 'ekmek', n: 'Ekmek Arası Sucuk',                 d: 'Ne Yesem dana sucuk', p: 250 },

    /* --- Servisler (9) --- */
    { c: 'servisler', n: 'Tavuk Döner Servis',      d: D.servisSade, p: 230, img: img.servisDoner },
    { c: 'servisler', n: 'Arnavut Ciğeri (Dana)',   d: D.ciger,      p: 300, img: img.servisCiger },
    { c: 'servisler', n: 'Adana Servis',            d: D.servisKoz,  p: 380, img: img.servisAdana },
    { c: 'servisler', n: 'Urfa Servis',             d: D.servisKoz,  p: 380, img: img.servisUrfa },
    { c: 'servisler', n: 'Tavuk Şiş Servis',        d: D.servisKoz,  p: 300, img: img.servisTavukSis },
    { c: 'servisler', n: 'Kanat Servis',            d: D.servisKoz,  p: 400, img: img.servisKanat },
    { c: 'servisler', n: 'Köfte Servis',            d: D.servisSade, p: 330, img: img.servisKofte },
    { c: 'servisler', n: 'Tavuk Külbastı',          d: D.servisKoz,  p: 300, img: img.servisKulbasti },
    { c: 'servisler', n: 'Ne Yesem Karışık Izgara (2 Kişilik)',
      d: 'Adana, tavuk şiş, kanat, köfte, tavuk külbastı, pilav, turşu, közde domates ve biber',
      p: 1300, img: img.karisikIzgara },

    /* --- Tostlar (12) --- */
    { c: 'tost', n: 'Beyaz Peynirli Tost (Ekmek)',    d: '', p: 150 },
    { c: 'tost', n: 'Beyaz Peynirli Tost (Bazlama)',  d: '', p: 170 },
    { c: 'tost', n: 'B. Peynirli Domatesli Tost (Ekmek)',   d: '', p: 150 },
    { c: 'tost', n: 'Peynirli Domatesli Tost (Bazlama)',    d: '', p: 170 },
    { c: 'tost', n: 'Kaşarlı Tost (Ekmek)',           d: '', p: 160 },
    { c: 'tost', n: 'Kaşarlı Tost (Bazlama)',         d: '', p: 180 },
    { c: 'tost', n: 'Kaşarlı Sucuklu Tost (Ekmek)',   d: '', p: 200 },
    { c: 'tost', n: 'Kaşarlı Sucuklu Tost (Bazlama)', d: '', p: 220 },
    { c: 'tost', n: 'Kavurmalı Kaşarlı Tost (Ekmek)',   d: '', p: 450 },
    { c: 'tost', n: 'Kavurmalı Kaşarlı Tost (Bazlama)', d: '', p: 470 },
    { c: 'tost', n: 'Karışık Tost (Ekmek)',   d: 'Salam, sucuk, kaşar', p: 250 },
    { c: 'tost', n: 'Karışık Tost (Bazlama)', d: 'Salam, sucuk, kaşar', p: 270 },

    /* --- Gözlemeler (4) --- */
    { c: 'gozleme', n: 'Peynirli Gözleme',           d: D.gozleme, p: 150 },
    { c: 'gozleme', n: 'Kaşarlı Gözleme',            d: D.gozleme, p: 170 },
    { c: 'gozleme', n: 'Patatesli Gözleme',          d: D.gozleme, p: 170 },
    { c: 'gozleme', n: 'Patatesli Kaşarlı Gözleme',  d: D.gozleme, p: 200 },

    /* --- Kiloluk (5) --- */
    { c: 'kiloluk', n: '1 Kilo Köfte',         d: D.kiloluk, p: 1200, img: img.servisKofte },
    { c: 'kiloluk', n: '1 Kilo Kanat',         d: D.kiloluk, p: 1200, img: img.servisKanat },
    { c: 'kiloluk', n: '1 Kilo Külbastı',      d: D.kiloluk, p: 1200, img: img.servisKulbasti },
    { c: 'kiloluk', n: '1 Kilo Tavuk Pirzola', d: D.kiloluk, p: 1200 },
    { c: 'kiloluk', n: '1 Kilo Döner',         d: D.kiloluk, p: 800,  img: img.servisDoner },

    /* --- Çorbalar (1) --- */
    { c: 'corba', n: 'Günün Çorbası', d: '', p: 150, img: img.corba },

    /* --- İçecekler (12) --- */
    { c: 'icecek', n: 'Kola',            d: '', p: 60,  img: img.cola },
    { c: 'icecek', n: 'Fanta',           d: '', p: 60,  img: img.fanta },
    { c: 'icecek', n: 'Sprite',          d: '', p: 60,  img: img.sprite },
    { c: 'icecek', n: 'Karışık İçecekler', d: '', p: 60, img: img.karisikIce },
    { c: 'icecek', n: 'Soda',            d: '', p: 30,  img: img.soda },
    { c: 'icecek', n: 'Büyük Ayran',     d: '', p: 40,  img: img.ayran },
    { c: 'icecek', n: 'Küçük Ayran',     d: '', p: 30,  img: img.ayran },
    { c: 'icecek', n: 'Şalgam',          d: '', p: 50,  img: img.salgam },
    { c: 'icecek', n: '1 Litre Ayran',   d: '', p: 75,  img: img.ayran1lt },
    { c: 'icecek', n: '1 Litre Kola',    d: '', p: 90,  img: img.cola1lt },
    { c: 'icecek', n: '1 Litre Şalgam',  d: '', p: 75,  img: img.salgam },
    { c: 'icecek', n: '2.5 Litre Kola',  d: '', p: 120, img: img.cola25lt },
  ];


  /* -----------------------------------------------------
     3) YARDIMCILAR
  ----------------------------------------------------- */
  function formatPrice(n) {
    const kurusVar = Math.round(n * 100) % 100 !== 0;
    return n.toLocaleString('tr-TR', {
      minimumFractionDigits: kurusVar ? 2 : 0,
      maximumFractionDigits: 2
    }) + ' TL';
  }

  function escapeHtml(s) {
    return s.replace(/[&<>"]/g, ch => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[ch]));
  }

  /* Ekran genişliğine göre bir sayfada kaç kart olacak */
  function itemsPerPage() {
    const w = window.innerWidth;
    if (w >= 1280) return 8;   // 4 sütun x 2 satır
    if (w >= 1024) return 6;   // 3 x 2
    if (w >= 640)  return 6;   // 2 x 3
    return 4;                  // 1 x 4 — telefonda sayfa sayısı makul kalsın
  }

  /* -----------------------------------------------------
     4) KART VE SAYFA OLUŞTURMA
  ----------------------------------------------------- */
  const pager     = document.getElementById('menu-pager');
  const dotsWrap  = document.getElementById('menu-dots');
  const countEl   = document.getElementById('menu-count');
  const prevBtn   = document.querySelector('.deck-prev');
  const nextBtn   = document.querySelector('.deck-next');

  function cardHtml(item) {
    const fiyat = item.o
      ? `<span class="fc-old">${formatPrice(item.o)}</span><span class="fc-price">${formatPrice(item.p)}</span>`
      : `<span class="fc-price">${formatPrice(item.p)}</span>`;

    const aciklama = item.d
      ? `<p class="fc-ingredients">${escapeHtml(item.d)}</p>`
      : '';

    /* Görseli olmayan ürünler için markalı yer tutucu */
    const gorsel = item.img
      ? `<img src="${item.img}" alt="${escapeHtml(item.n)}" decoding="async">`
      : `<span class="media-placeholder" aria-hidden="true">
           <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
             <path d="M6 3v8a2 2 0 002 2v8M6 3v8M10 3v8M18 3c-1.5 0-2.5 1.5-2.5 4v4a2.5 2.5 0 002.5 2.5V21"/>
           </svg>
         </span>`;

    return `
      <article class="food-card">
        <div class="food-card-media${item.img ? '' : ' is-placeholder'}">
          ${gorsel}
        </div>
        <div class="food-card-name">${escapeHtml(item.n)}</div>
        <div class="food-card-panel">
          ${aciklama}
          <div class="fc-bottom">${fiyat}</div>
        </div>
      </article>`;
  }

  /* Menü bir defter gibi: tüm kategoriler sırayla, sayfa sayfa */
  const CATEGORIES = [
    { key: 'durum',     label: 'Dürümler' },
    { key: 'ekmek',     label: 'Ekmek Araları' },
    { key: 'servisler', label: 'Servisler' },
    { key: 'tost',      label: 'Tostlar' },
    { key: 'gozleme',   label: 'Gözlemeler' },
    { key: 'kiloluk',   label: 'Kiloluk Siparişler' },
    { key: 'corba',     label: 'Çorbalar' },
    { key: 'icecek',    label: 'İçecekler' },
  ];

  let pageCount = 0;
  let pages = [];
  /* Aktif sayfa degiskende tutulur: yumusak kaydirma suruyorken
     scrollLeft'ten hesaplamak yanlis sonuc veriyordu. */
  let pageIndex = 0;

  function buildPages() {
    const per = itemsPerPage();
    const out = [];
    CATEGORIES.forEach(cat => {
      const list = menuItems.filter(i => i.c === cat.key);
      const total = Math.max(1, Math.ceil(list.length / per));
      for (let p = 0; p < total; p++) {
        out.push({
          label: cat.label,
          sub: total > 1 ? `${p + 1} / ${total}` : '',
          items: list.slice(p * per, (p + 1) * per)
        });
      }
    });
    return out;
  }

  function render() {
    /* Sayfa duzeni degisse de kullanicinin bulundugu kategoriyi koru */
    const oncekiEtiket = pages[pageIndex] && pages[pageIndex].label;

    pages = buildPages();
    pageCount = pages.length;

    pager.innerHTML = pages.map(pg => `
      <div class="menu-page">
        <div class="page-head">
          <span class="page-cat">${escapeHtml(pg.label)}</span>
          ${pg.sub ? `<span class="page-sub">${pg.sub}</span>` : ''}
        </div>
        <div class="menu-page-grid">${pg.items.map(cardHtml).join('')}</div>
      </div>`).join('');

    /* Sayfa sayisi azsa nokta, coksa sayac goster */
    if (pageCount <= 10) {
      dotsWrap.classList.remove('as-counter');
      dotsWrap.innerHTML = pages.map((pg, i) =>
        `<button type="button" class="menu-dot" role="tab" data-page="${i}" aria-label="${escapeHtml(pg.label)}${pg.sub ? ' ' + pg.sub : ''}"></button>`
      ).join('');
    } else {
      dotsWrap.classList.add('as-counter');
      dotsWrap.innerHTML = `<span class="menu-counter"></span>`;
    }

    /* Onceki kategoriye geri don (yoksa basa) */
    let hedef = 0;
    if (oncekiEtiket) {
      const bulunan = pages.findIndex(p => p.label === oncekiEtiket);
      if (bulunan >= 0) hedef = bulunan;
    }

    pager.style.scrollBehavior = 'auto';
    pager.scrollLeft = hedef * pager.clientWidth;
    void pager.offsetWidth;
    pager.style.scrollBehavior = '';

    pageIndex = hedef;
    updateControls(hedef);
  }

  function currentPage() {
    const w = pager.clientWidth;
    return w ? Math.round(pager.scrollLeft / w) : 0;
  }

  function updateControls(idx) {
    dotsWrap.querySelectorAll('.menu-dot').forEach((d, i) =>
      d.classList.toggle('active', i === idx)
    );

    const counter = dotsWrap.querySelector('.menu-counter');
    if (counter) counter.textContent = `${idx + 1} / ${pageCount}`;

    prevBtn.disabled = idx <= 0;
    nextBtn.disabled = idx >= pageCount - 1;
    dotsWrap.classList.toggle('is-single', pageCount <= 1);

    const pg = pages[idx];
    if (pg) {
      const toplam = pages.filter(p => p.label === pg.label)
        .reduce((n, p) => n + p.items.length, 0);
      countEl.textContent = `${pg.label} · ${toplam} ürün`;
    }
  }

  function goToPage(idx) {
    pageIndex = Math.max(0, Math.min(pageCount - 1, idx));
    pager.scrollTo({ left: pageIndex * pager.clientWidth, behavior: 'smooth' });
    updateControls(pageIndex);
  }

  render();

  /* -----------------------------------------------------
     5) SAYFA GEÇİŞ KONTROLLERİ
  ----------------------------------------------------- */
  prevBtn.addEventListener('click', () => goToPage(pageIndex - 1));
  nextBtn.addEventListener('click', () => goToPage(pageIndex + 1));

  dotsWrap.addEventListener('click', (e) => {
    const dot = e.target.closest('.menu-dot');
    if (dot) goToPage(Number(dot.dataset.page));
  });

  /* Parmakla kaydirma bitince aktif sayfayi guncelle */
  let scrollTimer;
  pager.addEventListener('scroll', () => {
    clearTimeout(scrollTimer);
    scrollTimer = setTimeout(() => {
      pageIndex = currentPage();
      updateControls(pageIndex);
    }, 120);
  }, { passive: true });

  /* Klavye ile de gezilebilsin */
  pager.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') { e.preventDefault(); goToPage(pageIndex + 1); }
    if (e.key === 'ArrowLeft')  { e.preventDefault(); goToPage(pageIndex - 1); }
  });

  /* Masaüstünde mouse ile sürükleyerek çevirme */
  let dragging = false, startX = 0, startScroll = 0, moved = 0;

  pager.addEventListener('pointerdown', (e) => {
    if (e.pointerType === 'touch') return;   // dokunmatikte tarayıcı kendi halleder
    dragging = true; moved = 0;
    startX = e.clientX;
    startScroll = pager.scrollLeft;
    pager.classList.add('dragging');
  });

  window.addEventListener('pointermove', (e) => {
    if (!dragging) return;
    const dx = e.clientX - startX;
    moved = Math.abs(dx);
    pager.scrollLeft = startScroll - dx;
  });

  window.addEventListener('pointerup', () => {
    if (!dragging) return;
    dragging = false;
    pager.classList.remove('dragging');
    /* en yakın sayfaya otur */
    goToPage(Math.round(pager.scrollLeft / pager.clientWidth));
  });

  /* Sürükleme sonrası kartın tıklanmasını engelle */
  pager.addEventListener('click', (e) => {
    if (moved > 6) { e.preventDefault(); e.stopPropagation(); moved = 0; }
  }, true);

  /* Ekran boyutu değişince sayfa düzenini yeniden kur */
  let resizeTimer, lastPer = itemsPerPage();
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      if (itemsPerPage() !== lastPer) {
        lastPer = itemsPerPage();
        render();
      } else {
        goToPage(pageIndex);
      }
    }, 180);
  });

  /* -----------------------------------------------------
     6) DOKUNMATİK: karta dokununca bilgi panelini aç/kapat
  ----------------------------------------------------- */
  const isTouchDevice = window.matchMedia('(hover: none)').matches;

  if (isTouchDevice) {
    pager.addEventListener('click', (e) => {
      const card = e.target.closest('.food-card');
      if (!card) return;
      const wasActive = card.classList.contains('touch-active');
      pager.querySelectorAll('.food-card.touch-active').forEach(c => c.classList.remove('touch-active'));
      if (!wasActive) card.classList.add('touch-active');
    });
  }

  /* -----------------------------------------------------
     7) MASKOT — telefonda hover olmadığı için karın
     guruldaması maskot ekrana girince çalışır.
  ----------------------------------------------------- */
  const mascotStage = document.querySelector('.mascot-stage');

  if (mascotStage && isTouchDevice) {
    if ('IntersectionObserver' in window) {
      const io = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          mascotStage.classList.toggle('rumbling', entry.isIntersecting);
        });
      }, { threshold: 0.45 });
      io.observe(mascotStage);
    } else {
      mascotStage.classList.add('rumbling');
    }

    mascotStage.addEventListener('click', () => {
      mascotStage.classList.remove('rumbling');
      requestAnimationFrame(() => {
        requestAnimationFrame(() => mascotStage.classList.add('rumbling'));
      });
    });
  }

  /* -----------------------------------------------------
     8) ÜST BAR
  ----------------------------------------------------- */
  const topNav = document.getElementById('top-nav');

  /* Sadece ust satirin yuksekligi olculur; telefonda menu acilinca
     bar buyuyor ama hero/filtre hizasi kaymamali. */
  function syncNavHeight() {
    const bar = topNav.querySelector('.site-container');
    const h = Math.round((bar || topNav).getBoundingClientRect().height);
    document.documentElement.style.setProperty('--nav-h', h + 'px');
  }

  function handleNavScroll() {
    topNav.classList.toggle('scrolled', window.scrollY > window.innerHeight * 0.7);
  }

  window.addEventListener('scroll', handleNavScroll, { passive: true });
  window.addEventListener('resize', syncNavHeight);
  syncNavHeight();
  handleNavScroll();

  /* Telefon menüsü aç/kapat */
  const navToggle = document.getElementById('nav-toggle');
  const mobileMenu = document.getElementById('mobile-menu');

  function menuKapat() {
    mobileMenu.hidden = true;
    navToggle.setAttribute('aria-expanded', 'false');
    navToggle.setAttribute('aria-label', 'Menüyü aç');
    syncNavHeight();
  }

  navToggle.addEventListener('click', () => {
    const acik = navToggle.getAttribute('aria-expanded') === 'true';
    if (acik) {
      menuKapat();
    } else {
      mobileMenu.hidden = false;
      navToggle.setAttribute('aria-expanded', 'true');
      navToggle.setAttribute('aria-label', 'Menüyü kapat');
      syncNavHeight();
    }
  });

  /* Bir bağlantıya basınca menü kapansın */
  mobileMenu.addEventListener('click', (e) => {
    if (e.target.closest('a')) menuKapat();
  });

  /* Masaüstüne geçilirse açık kalmasın */
  window.addEventListener('resize', () => {
    if (window.innerWidth > 640 && !mobileMenu.hidden) menuKapat();
  });

  /* -----------------------------------------------------
     9) FOOTER — güncel yıl
  ----------------------------------------------------- */
  document.getElementById('year').textContent = new Date().getFullYear();

});
