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
    donerEkmek:    FAV + '20053885_1783765519952.jpg',
    soslıDurum:    FAV + '20053890_1783092054856.jpg',
    kofteEkmek:    FAV + '20053904_1783765250723.jpg',
    ciğerServis:   FAV + '20053911_1783092164668.jpg',
    kasarliDurum:  FAV + '20053893_1783092252246.jpg',
    donerServis:   FAV + '20053910_1783092176751.jpg',

    tavukDonerDurum: DUR + '20053888_1783091981352.jpg',
    kasarliDurum2:   DUR + '20053892_1783091952246.jpg',
    ciğerDurum:      DUR + '20053894_1783092243225.jpg',
    adanaDurum:      DUR + '20053896_1783092262460.jpg',
    urfaDurum:       DUR + '20053898_1783092281452.jpg',
    tavukSisDurum:   DUR + '20053900_1783092291482.jpg',
    kofteDurum:      DUR + '20053902_1783092309397.jpg',
    neyesemDurum:    DUR + '20053906_1783092329329.jpg',

    adanaServis:     SRV + '20053912_1783092157181.jpg',
    urfaServis:      SRV + '20053913_1783092156828.jpg',
    tavukSisServis:  SRV + '20053914_1783092149971.jpg',
    kanatServis:     SRV + '20053915_1783092120757.jpg',
    kofteServis:     SRV + '20053916_1783092136257.jpg',
    kulbastiServis:  SRV + '20053917_1783764340737.jpg',

    karisik:  KAR + '20053922_1783757686810.jpg',
    ezogelin: COR + '20053923_1783083814778.jpg',
    mercimek: COR + '20053924_1783083821407.jpg',

    cola330:   ICE + '20053925_1783083832189.jpg',
    fanta:     ICE + '20053926_1783083838858.jpg',
    sprite:    ICE + '20053927_1783083846868.jpg',
    cappy:     ICE + '20053928_1783085857435.jpg',
    ayran275:  ICE + '20053929_1783083864779.jpg',
    salgam:    ICE + '20053930_1783085324372.jpg',
    su:        ICE + '20053931_1783083874436.jpg',
    soda:      ICE + '20053932_1783083881239.jpg',
    ayran1lt:  ICE + '20053935_1783083900792.jpg',
    cola1lt:   ICE + '20053936_1783083912067.jpg',
    cola25lt:  ICE + '20053937_1783083920836.jpg',
  };

  /* Sık tekrar eden açıklamalar */
  const D = {
    donerEkmek: '100 gr tavuk döner, kıvırcık, domates, turşu, soğan ile servis edilir.',
    donerDurumA: '100 gr tavuk döner, domates, turşu, patates kızartması + ayran ile servis edilir.',
    donerDurumP: '100 gr tavuk döner, domates, turşu, patates kızartması + 330 ml Coca Cola ile servis edilir.',
    soslu: 'Domates, turşu, patates kızartması, özel sos ile servis edilir.',
    sosluKasar: 'Domates, turşu, patates kızartması, özel sos, kaşar ile servis edilir.',
    ciger: 'Domates, turşu, patates kızartması, soğan ile servis edilir.',
    kozBiber: 'Közlenmiş biber, sumaklı soğan, maydanoz ile servis edilir.',
    tavukSis: 'Közlenmiş biber, domates, soğan ile servis edilir.',
    kofteEkmek: 'Kıvırcık, domates, turşu, soğan, patates kızartması ile servis edilir.',
    neyesem: 'Tavada özel marine edilmiş fileto tavuk, kapya biber ile servis edilir.',
    servis: 'Közde domates, biber, pilav, soğan söğüş, salata, turşu ile servis edilir.',
    servisEzme: 'Közde domates, biber, pilav, soğan söğüş, salata, turşu, ezme ile servis edilir.',
    servisTam: 'Közde domates, biber, pilav, soğan söğüş, salata, turşu, ezme, yoğurtlu meze ile servis edilir.',
    corba: 'Tırnaklı pide, turşu ile servis edilir.',
  };

  /* -----------------------------------------------------
     2) MENÜ VERİSİ
     price: güncel fiyat, oldPrice: varsa üzeri çizili fiyat
  ----------------------------------------------------- */
  const menuItems = [
    /* --- Bu Restoranın En Sevilenleri (7) --- */
    { c: 'favoriler', n: 'Tavuk Döner Ekmek Arası (Ayranlı)',            d: D.donerEkmek,  p: 247.5, img: img.donerEkmek },
    { c: 'favoriler', n: 'Tavuk Döner Ekmek Arası (Patates + Cola)',     d: D.donerEkmek,  p: 324,   img: img.donerEkmek },
    { c: 'favoriler', n: 'Soslu Tavuk Döner Dürüm (Ayranlı)',            d: D.soslu,       p: 270,   img: img.soslıDurum },
    { c: 'favoriler', n: 'Köfte Ekmek Arası (Ayranlı)',                  d: D.kofteEkmek,  p: 360, o: 396, img: img.kofteEkmek },
    { c: 'favoriler', n: 'Arnavut Ciğeri (Dana) Servis',                 d: D.servis,      p: 378, o: 420, img: img.ciğerServis },
    { c: 'favoriler', n: 'Soslu Tavuk Döner Kaşarlı Dürüm (Patates + Cola)', d: D.sosluKasar, p: 333, img: img.kasarliDurum },
    { c: 'favoriler', n: 'Tavuk Döner Servis',                           d: D.servis,      p: 315, o: 350, img: img.donerServis },

    /* --- Dürüm Menüsü (22) --- */
    { c: 'durum', n: 'Tavuk Döner Ekmek Arası (Ayranlı)',                d: D.donerEkmek,   p: 247.5, img: img.donerEkmek },
    { c: 'durum', n: 'Tavuk Döner Ekmek Arası (Patates + Cola)',         d: D.donerEkmek,   p: 324,   img: img.donerEkmek },
    { c: 'durum', n: 'Tavuk Döner Dürüm (Ayranlı)',                      d: D.donerDurumA,  p: 270,   img: img.tavukDonerDurum },
    { c: 'durum', n: 'Tavuk Döner Dürüm (Patates + Cola)',               d: D.donerDurumP,  p: 324,   img: img.tavukDonerDurum },
    { c: 'durum', n: 'Soslu Tavuk Döner Dürüm (Ayranlı)',                d: D.soslu,        p: 270,   img: img.soslıDurum },
    { c: 'durum', n: 'Soslu Tavuk Döner Dürüm (Patates + Cola)',         d: D.soslu,        p: 324, o: 333, img: img.soslıDurum },
    { c: 'durum', n: 'Soslu Tavuk Döner Kaşarlı Dürüm (Ayranlı)',        d: D.sosluKasar,   p: 288,   img: img.kasarliDurum2 },
    { c: 'durum', n: 'Soslu Tavuk Döner Kaşarlı Dürüm (Patates + Cola)', d: D.sosluKasar,   p: 333,   img: img.kasarliDurum2 },
    { c: 'durum', n: 'Arnavut Ciğeri (Dana) Dürüm (Ayranlı)',            d: D.ciger,        p: 306, o: 315, img: img.ciğerDurum },
    { c: 'durum', n: 'Arnavut Ciğeri (Dana) Dürüm (Patates + Cola)',     d: D.ciger,        p: 360, o: 378, img: img.ciğerDurum },
    { c: 'durum', n: 'Adana Dürüm (Ayranlı)',                            d: D.kozBiber,     p: 450, o: 468, img: img.adanaDurum },
    { c: 'durum', n: 'Adana Dürüm (Patates + Cola)',                     d: D.kozBiber,     p: 513, o: 531, img: img.adanaDurum },
    { c: 'durum', n: 'Urfa Dürüm (Ayranlı)',                             d: D.kozBiber,     p: 513,   img: img.urfaDurum },
    { c: 'durum', n: 'Urfa Dürüm (Patates + Cola)',                      d: D.kozBiber,     p: 513, o: 531, img: img.urfaDurum },
    { c: 'durum', n: 'Tavuk Şiş Dürüm (Ayranlı)',                        d: D.tavukSis,     p: 378, o: 420, img: img.tavukSisDurum },
    { c: 'durum', n: 'Tavuk Şiş Dürüm (Patates + Cola)',                 d: D.kozBiber,     p: 405, o: 441, img: img.tavukSisDurum },
    { c: 'durum', n: 'Köfte Dürüm (Ayranlı)',                            d: D.kozBiber,     p: 396, o: 440, img: img.kofteDurum },
    { c: 'durum', n: 'Köfte Dürüm (Patates + Cola)',                     d: D.kozBiber,     p: 441, o: 459, img: img.kofteDurum },
    { c: 'durum', n: 'Köfte Ekmek Arası (Ayranlı)',                      d: D.kofteEkmek,   p: 360, o: 396, img: img.kofteEkmek },
    { c: 'durum', n: 'Köfte Ekmek Arası (Patates + Cola)',               d: D.kofteEkmek,   p: 459, o: 510, img: img.kofteEkmek },
    { c: 'durum', n: 'Neyesem Tavuk Dürüm (Ayranlı)',                    d: D.neyesem,      p: 315, o: 350, img: img.neyesemDurum },
    { c: 'durum', n: 'Neyesem Tavuk Dürüm (Patates + Cola)',             d: D.neyesem,      p: 378, o: 420, img: img.neyesemDurum },

    /* --- Servisler (8) --- */
    { c: 'servisler', n: 'Tavuk Döner Servis',          d: D.servis,     p: 315, o: 350, img: img.donerServis },
    { c: 'servisler', n: 'Arnavut Ciğeri (Dana) Servis', d: D.servis,     p: 378, o: 420, img: img.ciğerServis },
    { c: 'servisler', n: 'Adana Servis',                d: D.servisEzme, p: 504, o: 560, img: img.adanaServis },
    { c: 'servisler', n: 'Urfa Servis',                 d: D.servisEzme, p: 504, o: 560, img: img.urfaServis },
    { c: 'servisler', n: 'Tavuk Şiş Servis',            d: D.servisTam,  p: 450, o: 500, img: img.tavukSisServis },
    { c: 'servisler', n: 'Kanat Servis',                d: D.servisTam,  p: 504, o: 560, img: img.kanatServis },
    { c: 'servisler', n: 'Köfte Servis',                d: D.servisTam,  p: 486, o: 540, img: img.kofteServis },
    { c: 'servisler', n: 'Tavuk Külbastı Servis',       d: D.servisTam,  p: 450, o: 500, img: img.kulbastiServis },

    /* --- Karışık Menü (1) --- */
    { c: 'karisik', n: 'Ne Yesem Karışık (2 Kişilik)',
      d: 'Adana, tavuk şiş, kanat, köfte, et külbastı ile servis edilir. Közde biber, domates, pilav, soğan söğüş, salata, turşu, yoğurtlu meze, ezme.',
      p: 1260, o: 1400, img: img.karisik },

    /* --- Çorbalar (2) --- */
    { c: 'corba', n: 'Ezogelin Çorbası',  d: D.corba, p: 270, o: 300, img: img.ezogelin },
    { c: 'corba', n: 'Mercimek Çorbası',  d: D.corba, p: 270, o: 300, img: img.mercimek },

    /* --- İçecekler (11) --- */
    { c: 'icecek', n: 'Coca Cola (330 ml)',      d: '', p: 72,   o: 80,  img: img.cola330 },
    { c: 'icecek', n: 'Fanta (330 ml)',          d: '', p: 72,   o: 80,  img: img.fanta },
    { c: 'icecek', n: 'Sprite',                  d: '', p: 72,   o: 80,  img: img.sprite },
    { c: 'icecek', n: 'Cappy (330 ml)',          d: '', p: 72,   o: 80,  img: img.cappy },
    { c: 'icecek', n: 'Büyük Ayran (275 ml)',    d: '', p: 54,   o: 60,  img: img.ayran275 },
    { c: 'icecek', n: 'Şalgam (300 ml)',         d: '', p: 63,   o: 70,  img: img.salgam },
    { c: 'icecek', n: 'Su (0.5 lt)',             d: '', p: 22.5, o: 25,  img: img.su },
    { c: 'icecek', n: 'Soda (200 ml)',           d: '', p: 31.5, o: 35,  img: img.soda },
    { c: 'icecek', n: 'Ayran (1 lt)',            d: '', p: 81,   o: 90,  img: img.ayran1lt },
    { c: 'icecek', n: 'Cola (1 lt)',             d: '', p: 90,   o: 100, img: img.cola1lt },
    { c: 'icecek', n: 'Cola (2.5 lt)',           d: '', p: 126,  o: 140, img: img.cola25lt },
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

    return `
      <article class="food-card">
        <div class="food-card-media">
          <img src="${item.img}" alt="${escapeHtml(item.n)}" decoding="async">
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
    { key: 'favoriler', label: 'Bu Restoranın En Sevilenleri' },
    { key: 'durum',     label: 'Dürüm Menüsü' },
    { key: 'servisler', label: 'Servisler' },
    { key: 'karisik',   label: 'Karışık Menü' },
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

  function syncNavHeight() {
    const h = Math.round(topNav.getBoundingClientRect().height);
    document.documentElement.style.setProperty('--nav-h', h + 'px');
  }

  function handleNavScroll() {
    topNav.classList.toggle('scrolled', window.scrollY > window.innerHeight * 0.7);
  }

  window.addEventListener('scroll', handleNavScroll, { passive: true });
  window.addEventListener('resize', syncNavHeight);
  syncNavHeight();
  handleNavScroll();

  /* -----------------------------------------------------
     9) FOOTER — güncel yıl
  ----------------------------------------------------- */
  document.getElementById('year').textContent = new Date().getFullYear();

});
