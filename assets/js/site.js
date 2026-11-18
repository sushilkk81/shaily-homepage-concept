/* Shaily website concept — shared components */
(function () {
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var PAGE = window.PAGE || { id: 'home', business: null };
  var src = function (n) { return /^https?:/.test(n) ? n : IMG(n); };
  var esc = function (s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); };
  var ARROW = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M5 12h14M13 6l6 6-6 6"/></svg>';
  var CHEV = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M6 9l6 6 6-6"/></svg>';
  var X = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M6 6l12 12M18 6L6 18"/></svg>';
  var PIN = '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M12 21s-7-6.3-7-11a7 7 0 0114 0c0 4.7-7 11-7 11z"/><circle cx="12" cy="10" r="2.5"/></svg>';
  var CLOCK = '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>';
  window.SH = { $: $, $$: $$, src: src, esc: esc, ARROW: ARROW };

  /* ---------- S super-graphic symbol ---------- */
  var sprite = document.createElement('div');
  sprite.innerHTML = '<svg width="0" height="0" style="position:absolute"><symbol id="S" viewBox="0 0 166.68 164.3"><path fill="currentColor" d="M83.34,83.27v.06H0v-49.92C0,21.98,5.74,11.89,14.5,5.87,19.88,2.17,26.4,0,33.42,0h8.25v36.41l41.67,46.86Z"/><path fill="currentColor" d="M83.34,83.42v-.06h83.34v49.92c0,11.43-5.74,21.52-14.5,27.54-5.38,3.7-11.9,5.87-18.92,5.87h-8.25v-36.41l-41.67-46.86Z"/><path fill="currentColor" d="M166.68,32.77v6.5h-64.17L63.41,1.18V0h70.51c18.09,0,32.76,14.67,32.76,32.77Z"/><path fill="currentColor" d="M0,131.53v-6.5h64.17l39.1,38.09v1.18H32.76c-18.09,0-32.76-14.67-32.76-32.77Z"/></symbol></svg>';
  document.body.insertBefore(sprite.firstChild, document.body.firstChild);
  var SG = function (cls, style) { return '<svg class="sg ' + (cls || '') + '" style="' + (style || '') + '"><use href="#S"/></svg>'; };
  window.SH.SG = SG;

  /* ---------- Header ---------- */
  var home = R || './';
  var H = $('#site-header');
  if (H) {
    var bizCards = BUSINESSES.map(function (b) {
      return '<a class="mega-card" href="' + R + b.url + '"><div class="mimg" style="background-image:url(' + IMG(b.img) + ')"></div><div class="mtxt"><h4>' + b.name + '</h4><p>' + b.tagline + '</p></div></a>';
    }).join('');
    H.innerHTML = '<div class="wrap nav"><a href="' + home + '" class="logo" aria-label="Shaily home"><img src="' + IMG('logo.png') + '" alt="Shaily"></a>' +
      '<nav class="nav-links"><div class="has-mega"><button aria-expanded="false" class="' + (PAGE.business ? 'current' : '') + '">Businesses ' + CHEV + '</button>' +
      '<div class="mega"><div class="wrap mega-grid">' + bizCards + '<div class="mega-side">' + SG('', 'width:180px;right:-40px;bottom:-40px;color:#fff;opacity:.12') +
      '<div class="eyebrow">One precision platform</div><h4>Shaping the critical</h4><p>Design, tooling, moulding and assembly for healthcare, consumer and industry — from one integrated base.</p><a class="link-arrow" style="color:#fff" href="' + home + '#businesses">All businesses ' + ARROW + '</a></div></div></div></div>' +
      '<a href="' + home + '#capabilities">Capabilities</a><a href="' + home + '#sustainability">Sustainability</a><a href="' + home + '#leadership">About</a><a href="' + home + '#investors">Investors</a><a href="#careers">Careers</a></nav>' +
      '<div class="nav-tools"><button class="icon-btn" id="searchBtn" aria-label="Search"><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="7"/><path d="M20 20l-3.5-3.5"/></svg></button>' +
      '<button class="menu-btn" id="menuBtn"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 7h16M4 12h16M4 17h10"/></svg><span>Menu</span></button></div></div>';
    var hm = $('.has-mega', H), hmBtn = $('button', hm), closeT;
    var openMega = function () { clearTimeout(closeT); hm.classList.add('open'); hmBtn.setAttribute('aria-expanded', 'true'); };
    var closeMega = function () { closeT = setTimeout(function () { hm.classList.remove('open'); hmBtn.setAttribute('aria-expanded', 'false'); }, 160); };
    hm.addEventListener('mouseenter', openMega); hm.addEventListener('mouseleave', closeMega);
    hmBtn.addEventListener('click', function () { hm.classList.contains('open') ? hm.classList.remove('open') : openMega(); });
  }

  /* ---------- Overlay menu + search ---------- */
  var ov = document.createElement('div'); ov.className = 'overlay'; ov.id = 'overlay';
  ov.innerHTML = '<div class="wrap"><div class="overlay-top"><a href="' + home + '" class="logo"><img src="' + IMG('logo.png') + '" alt="Shaily"></a><button class="menu-btn" data-close-menu>' + X + '<span>Close</span></button></div>' +
    '<div class="overlay-grid"><div><h4>Businesses</h4><ul>' + BUSINESSES.map(function (b) { return '<li><a href="' + R + b.url + '">' + b.name + '</a></li>'; }).join('') + '</ul></div>' +
    '<div><h4>Company</h4><ul><li><a href="' + home + '#capabilities">Capabilities</a></li><li><a href="' + home + '#leadership">Leadership</a></li><li><a href="' + home + '#sustainability">Sustainability</a></li><li><a href="' + home + '#heritage">Heritage</a></li><li><a href="' + home + '#investors">Investors</a></li></ul></div>' +
    '<div><h4>Connect</h4><ul><li><a href="' + home + '#news">Newsroom</a></li><li><a href="#careers">Careers</a></li><li><a href="#contact">Contact us</a></li><li><a href="' + home + '#shorts">Tech shorts</a></li></ul></div>' +
    '<div class="overlay-card">' + SG('', 'width:200px;right:-40px;bottom:-40px;color:#fff;opacity:.12') + '<h4>Talk to us</h4><p>Healthcare partnerships</p><a href="mailto:' + SITE.pharma.email + '">' + SITE.pharma.email + '</a><p style="margin-top:14px">Consumer &amp; Key Segments</p><a href="mailto:' + SITE.sales + '">' + SITE.sales + '</a></div></div></div>';
  document.body.appendChild(ov);
  var sp = document.createElement('div'); sp.className = 'search-panel'; sp.id = 'searchPanel';
  sp.innerHTML = '<div class="wrap"><div style="display:flex;gap:16px;align-items:center"><input type="text" id="searchInput" placeholder="Search Shaily — platforms, businesses, people, careers…" aria-label="Search"><button class="icon-btn" data-close-search aria-label="Close search">' + X + '</button></div>' +
    '<div class="chips">' + ['GLP-1', 'Auto-injector', 'Home furnishings', 'Semiconductors', 'Sustainability', 'Leadership', 'Careers'].map(function (c) { return '<button class="chip">' + c + '</button>'; }).join('') + '</div><div class="sresults" id="sresults"></div></div>';
  document.body.appendChild(sp);
  var INDEX = [].concat(
    BUSINESSES.map(function (b) { return { k: 'Business', t: b.name, d: b.tagline + ' ' + b.summary, href: R + b.url }; }),
    PLATFORMS.map(function (p) { return { k: 'Platform', t: p.name, d: p.kind + ' ' + p.tag + ' ' + p.desc + ' GLP-1 insulin', href: R + 'healthcare/#platforms', act: function () { if (window.openPlatform) window.openPlatform(p.id); } }; }),
    ROLES.map(function (r) { return { k: 'Career', t: r.title, d: r.fn + ' ' + r.sum + ' careers jobs', act: function () { FW.open(r.id, 'pick'); } }; }),
    NEWS.map(function (n) { return { k: 'News', t: n.title, d: n.text, act: function () { openNews(NEWS.indexOf(n)); } }; }),
    BOARD.map(function (b) { return { k: 'Leadership', t: b.name, d: b.role + ' ' + b.bio + ' board leadership', act: function () { openBoard(BOARD.indexOf(b)); } }; }),
    [{ k: 'Page', t: 'Sustainability', d: 'renewable solar recycled ESG environment', href: home + '#sustainability' }, { k: 'Page', t: 'Semiconductor chip trays', d: 'semiconductors electronics', href: R + 'key-segments/' }, { k: 'Page', t: 'Home furnishings', d: 'consumer kitchen storage furniture', href: R + 'consumer/' }]
  );
  var doSearch = function (q) {
    q = q.trim().toLowerCase(); var out = $('#sresults');
    if (!q) { out.innerHTML = ''; return; }
    var hits = INDEX.filter(function (i) { return (i.t + ' ' + i.d).toLowerCase().indexOf(q) >= 0; }).slice(0, 10);
    out.innerHTML = hits.length ? hits.map(function (h, i) { return '<a class="sres" href="' + (h.href || '#') + '" data-i="' + INDEX.indexOf(h) + '"><span>' + esc(h.t) + '</span><small>' + h.k + '</small></a>'; }).join('') : '<p>No results yet — try another word.</p>';
    $$('.sres', out).forEach(function (a) { a.addEventListener('click', function (e) { var it = INDEX[+a.dataset.i]; sp.classList.remove('open'); if (it.act && (!it.href || location.pathname.indexOf('healthcare') >= 0 || it.k !== 'Platform')) { e.preventDefault(); it.act(); } }); });
  };
  $('#searchInput').addEventListener('input', function (e) { doSearch(e.target.value); });
  $$('.chip', sp).forEach(function (c) { c.addEventListener('click', function () { $('#searchInput').value = c.textContent; doSearch(c.textContent); }); });
  var sb = $('#searchBtn'); if (sb) sb.addEventListener('click', function () { sp.classList.add('open'); setTimeout(function () { $('#searchInput').focus(); }, 300); });
  $('[data-close-search]').addEventListener('click', function () { sp.classList.remove('open'); });
  var mb = $('#menuBtn'); if (mb) mb.addEventListener('click', function () { ov.classList.add('open'); });
  $$('[data-close-menu], .overlay li a').forEach(function (a) { a.addEventListener('click', function () { ov.classList.remove('open'); }); });

  /* ---------- Footer ---------- */
  var F = $('#site-footer');
  if (F) {
    F.innerHTML = '<div class="wrap"><div class="fgrid">' +
      '<div><h5>Registered Office</h5><p>' + SITE.regOffice + '</p></div>' +
      '<div><h5>Correspondence Office</h5><p>' + SITE.corrOffice + '</p><p style="margin-top:10px">' + SITE.phonesGroup.join('<br>') + '</p></div>' +
      '<div><h5>Plants</h5><ul>' + SITE.plants.map(function (p) { return '<li>' + p + '</li>'; }).join('') + '</ul></div>' +
      '<div><h5>Businesses</h5><ul>' + BUSINESSES.map(function (b) { return '<li><a href="' + R + b.url + '">' + b.name + '</a></li>'; }).join('') + '<li><a href="' + home + '#investors">Investors</a></li><li><a href="#careers">Careers</a></li></ul></div>' +
      '<div class="flogo"><img src="' + IMG('logo.png') + '" alt="Shaily"><span>shaily.com</span><div class="socials"><a href="#" aria-label="LinkedIn"><svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5a2.5 2.5 0 110 5 2.5 2.5 0 010-5zM3 9h4v12H3zM9 9h3.8v1.7h.1c.5-1 1.8-2 3.8-2 4 0 4.8 2.6 4.8 6V21h-4v-5.4c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9V21H9z"/></svg></a><a href="#" aria-label="X"><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18.2 2H21l-6.5 7.4L22 22h-6l-4.7-6.1L5.8 22H3l7-8L2 2h6.1l4.2 5.6zM17.2 20h1.6L7 3.9H5.3z"/></svg></a></div></div>' +
      '</div><div class="flinks"><span>© 2026 Shaily Engineering Plastics Ltd. · Website concept</span><div><a href="' + home + '#investors">Investors</a><a href="#">Privacy policy</a><a href="#">Disclaimer</a><a href="#">Cookie settings</a></div></div></div>';
  }

  /* ---------- Rich pop-up ---------- */
  var rp = document.createElement('div'); rp.className = 'rp'; rp.setAttribute('aria-hidden', 'true');
  rp.innerHTML = '<div class="rp-box" role="dialog" aria-modal="true"><button class="rp-x" aria-label="Close">' + X + '</button><div class="rp-nav"></div><div class="rp-media"></div><div class="rp-copy"></div></div>';
  document.body.appendChild(rp);
  var RP = {
    open: function (o) {
      var m = $('.rp-media', rp), c = $('.rp-copy', rp), n = $('.rp-nav', rp);
      rp.classList.toggle('video', !!o.video);
      m.className = 'rp-media' + (o.contain ? ' contain' : ''); m.style.backgroundImage = ''; m.style.backgroundColor = o.bg || ''; m.innerHTML = '';
      if (o.video) m.innerHTML = '<video src="' + o.video + '" autoplay controls playsinline></video>';
      else if (o.devs) m.innerHTML = SG() + '<div class="devs">' + o.devs.map(function (d) { return '<img class="' + (o.wide ? 'wide' : '') + '" src="' + DEV(d) + '" alt="">'; }).join('') + '</div>';
      else if (o.img) m.style.backgroundImage = 'url(' + src(o.img) + ')';
      var h = '';
      if (o.eyebrow) h += '<div class="eyebrow">' + o.eyebrow + '</div>';
      if (o.title) h += '<h3>' + o.title + '</h3>';
      if (o.html) h += o.html;
      if (o.facts) h += '<div class="rp-facts">' + o.facts.map(function (f) { return '<div><b>' + f[0] + '</b><span>' + f[1] + '</span></div>'; }).join('') + '</div>';
      if (o.list) h += '<ul class="rp-list">' + o.list.map(function (l) { return '<li>' + l + '</li>'; }).join('') + '</ul>';
      if (o.chips) h += '<div class="rp-chips">' + o.chips.map(function (l) { return '<span>' + l + '</span>'; }).join('') + '</div>';
      if (o.table) h += '<table class="rp-table">' + Object.keys(o.table).map(function (k) { return '<tr><th>' + k + '</th><td>' + o.table[k] + '</td></tr>'; }).join('') + '</table>';
      if (o.ctas) h += '<div class="rp-cta">' + o.ctas.map(function (b, i) { return '<a class="btn ' + (i ? 'btn-outline' : 'btn-primary') + ' btn-sm" href="' + (b.href || '#') + '" data-cta="' + i + '">' + b.label + '</a>'; }).join('') + '</div>';
      c.innerHTML = h; c.scrollTop = 0;
      if (o.ctas) $$('[data-cta]', c).forEach(function (a) { var b = o.ctas[+a.dataset.cta]; if (b.fn) a.addEventListener('click', function (e) { e.preventDefault(); RP.close(); b.fn(); }); else a.addEventListener('click', RP.close); });
      n.innerHTML = o.prev ? '<button aria-label="Previous"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M15 6l-6 6 6 6"/></svg></button><button aria-label="Next"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M9 6l6 6-6 6"/></svg></button>' : '';
      if (o.prev) { $$('button', n)[0].onclick = o.prev; $$('button', n)[1].onclick = o.next; }
      rp.classList.add('open'); rp.setAttribute('aria-hidden', 'false'); document.body.style.overflow = 'hidden'; FW.sync();
    },
    close: function () { rp.classList.remove('open'); rp.setAttribute('aria-hidden', 'true'); document.body.style.overflow = ''; var v = $('video', rp); if (v) v.pause(); FW.sync(); }
  };
  $('.rp-x', rp).addEventListener('click', RP.close);
  rp.addEventListener('click', function (e) { if (e.target === rp) RP.close(); });
  window.RP = RP;

  /* shared pop-up builders */
  window.openBusiness = function (id) {
    var b = BUSINESSES.filter(function (x) { return x.id === id; })[0];
    RP.open({ img: b.img, eyebrow: 'Our businesses', title: b.name, html: '<p>' + b.summary + '</p>', facts: b.facts, list: b.points,
      ctas: [{ label: 'Visit ' + b.name, href: R + b.url }, { label: 'Open roles', fn: function () { FW.open(null, 'pick', b.id); } }] });
  };
  var openBoard = window.openBoard = function (i) {
    var b = BOARD[i];
    RP.open({ img: 'board-' + b.id + '.webp', eyebrow: 'Board of Directors', title: b.name, html: '<p style="font-family:var(--head);font-weight:700;color:var(--teal)">' + b.role + '</p><p>' + b.bio + '</p>',
      prev: function () { openBoard((i - 1 + BOARD.length) % BOARD.length); }, next: function () { openBoard((i + 1) % BOARD.length); } });
  };
  var openNews = window.openNews = function (i) {
    var n = NEWS[i];
    RP.open({ img: n.img, eyebrow: n.tag + ' · ' + n.date, title: n.title, html: '<p>' + n.text + '</p>',
      prev: function () { openNews((i - 1 + NEWS.length) % NEWS.length); }, next: function () { openNews((i + 1) % NEWS.length); } });
  };
  window.openShort = function (file) { RP.open({ video: R + 'assets/video/' + file + '.mp4' }); };

  /* ---------- Lightbox ---------- */
  var lb = document.createElement('div'); lb.className = 'lb';
  lb.innerHTML = '<button class="round lb-close" aria-label="Close">' + X + '</button><button class="round" data-p aria-label="Previous"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M15 6l-6 6 6 6"/></svg></button><figure><img alt=""><figcaption></figcaption></figure><button class="round" data-n aria-label="Next"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M9 6l6 6-6 6"/></svg></button>';
  document.body.appendChild(lb);
  var lbSet = [], lbI = 0;
  var lbShow = function () { var it = lbSet[lbI], im = $('img', lb); im.onerror = it.fb ? function () { im.onerror = null; im.src = src(it.fb); } : null; im.src = src(it.src); $('figcaption', lb).innerHTML = esc(it.cap) + '<small>' + (lbI + 1) + ' / ' + lbSet.length + '</small>'; };
  window.LB = { open: function (set, i) { lbSet = set; lbI = i || 0; lbShow(); lb.classList.add('open'); document.body.style.overflow = 'hidden'; FW.sync(); } };
  var lbClose = function () { lb.classList.remove('open'); document.body.style.overflow = ''; FW.sync(); };
  $('.lb-close', lb).onclick = lbClose; $('[data-p]', lb).onclick = function () { lbI = (lbI - 1 + lbSet.length) % lbSet.length; lbShow(); }; $('[data-n]', lb).onclick = function () { lbI = (lbI + 1) % lbSet.length; lbShow(); };
  lb.addEventListener('click', function (e) { if (e.target === lb) lbClose(); });

  /* ---------- Capability explorer ---------- */
  window.capExplorer = function (root, CAP) {
    var g = 0, i = 0;
    root.innerHTML = '<div class="capx-tabs">' + CAP.map(function (c, k) { return '<button data-k="' + k + '">' + c.label + '<small>' + c.items.length + '</small></button>'; }).join('') + '</div>' +
      '<div class="capx-body"><div><button class="capx-main" aria-label="Open image"><img alt=""><span class="capx-cap"></span><span class="capx-zoom"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/></svg></span></button>' +
      '<div class="capx-nav"><button class="round" data-p aria-label="Previous"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M15 6l-6 6 6 6"/></svg></button><span class="cnt"></span><button class="round" data-n aria-label="Next"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M9 6l6 6-6 6"/></svg></button></div><div class="capx-thumbs"></div></div>' +
      '<div class="capx-copy"><div class="eyebrow"></div><h3></h3><p class="cdesc"></p><ul class="flist"></ul></div></div>';
    var draw = function () {
      var G = CAP[g], it = G.items[i], im = $('.capx-main img', root);
      $$('.capx-tabs button', root).forEach(function (b, k) { b.classList.toggle('active', k === g); });
      im.style.opacity = 0;
      setTimeout(function () { im.onerror = it.fb ? function () { im.onerror = null; im.src = src(it.fb); } : null; im.src = src(it.src); im.onload = function () { im.style.opacity = 1; }; if (im.complete) im.style.opacity = 1; }, 120);
      $('.capx-cap', root).textContent = it.cap; $('.cnt', root).textContent = (i + 1) + ' / ' + G.items.length;
      $('.capx-copy .eyebrow', root).textContent = G.eyebrow; $('.capx-copy h3', root).textContent = G.title; $('.cdesc', root).textContent = G.desc;
      $('.flist', root).innerHTML = G.facts.map(function (f, k) { return '<li style="animation-delay:' + k * 60 + 'ms">' + f + '</li>'; }).join('');
      $('.capx-thumbs', root).innerHTML = G.items.map(function (x, k) { return '<button data-k="' + k + '" class="' + (k === i ? 'active' : '') + '"><img src="' + src(x.src) + '" alt="' + esc(x.cap) + '"' + (x.fb ? ' onerror="this.onerror=null;this.src=\'' + src(x.fb) + '\'"' : '') + '></button>'; }).join('');
      $$('.capx-thumbs button', root).forEach(function (b) { b.onclick = function () { i = +b.dataset.k; draw(); }; });
    };
    $$('.capx-tabs button', root).forEach(function (b) { b.onclick = function () { g = +b.dataset.k; i = 0; draw(); }; });
    $('[data-p]', root).onclick = function () { var n = CAP[g].items.length; i = (i - 1 + n) % n; draw(); };
    $('[data-n]', root).onclick = function () { var n = CAP[g].items.length; i = (i + 1) % n; draw(); };
    $('.capx-main', root).onclick = function () { LB.open(CAP[g].items, i); };
    draw();
  };

  /* ---------- Carousel ---------- */
  window.carousel = function (root, DUR) {
    DUR = DUR || 7000; var slides = $('.slides', root), dots = $$('.dot', root), prog = $('.progress', root), idx = 0, playing = true, timer;
    var restart = function () { clearTimeout(timer); prog.style.transition = 'none'; prog.style.width = '0'; if (!playing) return; requestAnimationFrame(function () { requestAnimationFrame(function () { prog.style.transition = 'width ' + DUR + 'ms linear'; prog.style.width = '100%'; }); }); timer = setTimeout(function () { go(idx + 1); }, DUR); };
    var go = function (k) { idx = (k + dots.length) % dots.length; slides.style.transform = 'translateX(-' + idx * 100 + '%)'; dots.forEach(function (d, j) { d.classList.toggle('active', j === idx); }); restart(); };
    dots.forEach(function (d, j) { d.onclick = function () { go(j); }; });
    var pb = $('.pause', root); if (pb) pb.onclick = function () { playing = !playing; pb.innerHTML = playing ? '<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="5" width="4" height="14"/><rect x="14" y="5" width="4" height="14"/></svg>' : '<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>'; restart(); };
    restart();
  };

  /* ---------- Did you know ---------- */
  window.didYouKnow = function (factEl, btn, list) {
    var f = 0; list = list || FACTS; factEl.textContent = list[0];
    btn.onclick = function () { btn.classList.add('spin'); factEl.style.opacity = 0; setTimeout(function () { f = (f + 1) % list.length; factEl.textContent = list[f]; factEl.style.opacity = 1; btn.classList.remove('spin'); }, 350); };
  };

  /* ---------- Careers: role list + floating window ---------- */
  var FN_COLOR = { 'Business Development': ['var(--orange-t)', 'var(--orange)'], 'Engineering': ['var(--teal-t)', 'var(--teal)'], 'Quality': ['var(--green-t)', 'var(--deep)'], 'Tooling': ['var(--grey10)', 'var(--grey)'], 'Programme Management': ['var(--deep-t)', 'var(--deep)'], 'Digital': ['var(--teal-t)', 'var(--teal)'] };
  var chip = function (r) { var c = FN_COLOR[r.fn] || ['var(--grey10)', 'var(--grey)']; return '<span class="rfunc" style="background:' + c[0] + ';color:' + c[1] + '">' + r.fn + '</span><span class="rfunc" style="background:var(--grey06)">' + BUSINESS_NAMES[r.business] + '</span>'; };
  window.careersList = function (root, startBiz) {
    var FUNCS = ROLES.map(function (r) { return r.fn; }).filter(function (v, i, a) { return a.indexOf(v) === i; });
    var LOCS = ROLES.reduce(function (a, r) { r.loc.forEach(function (l) { if (a.indexOf(l) < 0) a.push(l); }); return a; }, []);
    root.innerHTML = '<h3>Open roles</h3><div class="cfilters"><label class="sel">Business<select data-f="biz"><option value="all">All businesses</option>' + Object.keys(BUSINESS_NAMES).map(function (k) { return '<option value="' + k + '"' + (k === startBiz ? ' selected' : '') + '>' + BUSINESS_NAMES[k] + '</option>'; }).join('') + '</select></label>' +
      '<label class="sel">Function<select data-f="fn"><option value="all">All functions</option>' + FUNCS.map(function (f) { return '<option>' + f + '</option>'; }).join('') + '</select></label>' +
      '<label class="sel">Location<select data-f="loc"><option value="all">All locations</option>' + LOCS.map(function (l) { return '<option>' + l + '</option>'; }).join('') + '</select></label></div>' +
      '<div class="ccount"></div><div class="rolelist"></div><p class="note">Sample roles for this concept — replace with live openings.</p>';
    var open = null;
    var draw = function () {
      var biz = $('[data-f=biz]', root).value, fn = $('[data-f=fn]', root).value, loc = $('[data-f=loc]', root).value;
      var list = ROLES.filter(function (r) { return (biz === 'all' || r.business === biz) && (fn === 'all' || r.fn === fn) && (loc === 'all' || r.loc.indexOf(loc) >= 0); });
      $('.ccount', root).innerHTML = '<b>' + list.length + '</b> ' + (list.length === 1 ? 'role' : 'roles') + ' found';
      $('.rolelist', root).innerHTML = list.map(function (r, i) {
        return '<div class="rrow ' + (open === r.id ? 'open' : '') + '" id="role-' + r.id + '" style="animation-delay:' + i * 50 + 'ms"><button class="rhead" data-id="' + r.id + '"><div>' + chip(r) + '<h4>' + r.title + '</h4><div class="rmeta"><span>' + PIN + r.loc.join(' · ') + '</span><span>' + CLOCK + r.type + '</span></div></div><span class="chev">' + CHEV + '</span></button>' +
          '<div class="rbody"><div class="rinner"><div class="rcontent"><p>' + r.sum + '</p><div class="rcols"><div><h5>What you’ll do</h5><ul>' + r.do.map(function (x) { return '<li>' + x + '</li>'; }).join('') + '</ul></div><div><h5>What you bring</h5><ul>' + r.bring.map(function (x) { return '<li>' + x + '</li>'; }).join('') + '</ul></div></div>' +
          '<div class="rchips"><span>' + r.exp + ' experience</span>' + r.tags.map(function (x) { return '<span>' + x + '</span>'; }).join('') + '</div><div class="ractions"><button class="btn btn-primary btn-sm" data-apply="' + r.id + '">Apply for this role</button><button class="btn btn-outline btn-sm" data-ask="' + r.id + '">Open in quick view</button></div></div></div></div></div>';
      }).join('') || '<p>No roles match these filters yet.</p>';
      $$('.rhead', root).forEach(function (b) { b.onclick = function () { open = open === b.dataset.id ? null : b.dataset.id; $$('.rrow', root).forEach(function (row) { row.classList.toggle('open', row.id === 'role-' + open); }); }; });
      $$('[data-apply]', root).forEach(function (b) { b.onclick = function () { FW.open(b.dataset.apply, 'apply'); }; });
      $$('[data-ask]', root).forEach(function (b) { b.onclick = function () { FW.open(b.dataset.ask, 'pick'); }; });
    };
    $$('select', root).forEach(function (s) { s.onchange = function () { open = null; draw(); }; });
    draw();
    window.showRole = function (id) { $('[data-f=biz]', root).value = 'all'; $('[data-f=fn]', root).value = 'all'; $('[data-f=loc]', root).value = 'all'; open = id; draw(); var el = document.getElementById('role-' + id); if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' }); };
  };

  var FW = (function () {
    var fab = document.createElement('button'); fab.className = 'fab'; fab.setAttribute('aria-label', 'Open careers');
    fab.innerHTML = '<i class="pulse"></i><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V5a2 2 0 012-2h4a2 2 0 012 2v2M3 13h18"/></svg><span>We’re hiring</span><b>' + ROLES.length + '</b>';
    var fw = document.createElement('div'); fw.className = 'fwin'; fw.setAttribute('role', 'dialog');
    fw.innerHTML = '<div class="fwin-head">' + SG() + '<button class="fwin-x" aria-label="Close">' + X + '</button><div class="eyebrow">Careers at Shaily</div><h4>Find your next role</h4><p>Pick a role to see what it involves.</p></div><div class="fwin-body"></div>';
    document.body.appendChild(fab); document.body.appendChild(fw);
    var body = $('.fwin-body', fw), role = null, biz = PAGE.business || 'all';
    var sync = function () { var busy = fw.classList.contains('open') || document.body.style.overflow === 'hidden'; fab.classList.toggle('show', !busy && window.scrollY > 500); };
    window.addEventListener('scroll', sync, { passive: true });
    var pick = function () {
      var r = ROLES.filter(function (x) { return x.id === role; })[0];
      var list = ROLES.filter(function (x) { return biz === 'all' || x.business === biz; });
      body.innerHTML = '<div class="fbiz">' + ['all'].concat(Object.keys(BUSINESS_NAMES)).map(function (k) { return '<button data-b="' + k + '" class="' + (k === biz ? 'on' : '') + '">' + (k === 'all' ? 'All' : BUSINESS_NAMES[k]) + '</button>'; }).join('') + '</div>' +
        '<div class="dd"><button class="dd-btn">' + (r ? '<span>' + r.title + '</span>' : '<span class="ph">Choose a role… (' + list.length + ')</span>') + CHEV + '</button><div class="dd-list" role="listbox">' +
        Object.keys(BUSINESS_NAMES).filter(function (k) { return biz === 'all' || k === biz; }).map(function (k) { var rs = ROLES.filter(function (x) { return x.business === k; }); return rs.length ? '<div class="dd-group">' + BUSINESS_NAMES[k] + '</div>' + rs.map(function (x) { return '<button class="dd-opt ' + (x.id === role ? 'sel' : '') + '" data-id="' + x.id + '">' + x.title.split(' — ')[0] + '<small>' + x.loc.join(' · ') + '</small></button>'; }).join('') : ''; }).join('') + '</div></div>' +
        '<div class="fdetail"><div>' + (r ? '<div class="fcard">' + chip(r) + '<h5>' + r.title + '</h5><p>' + r.sum + '</p><ul>' + r.do.slice(0, 3).map(function (x) { return '<li>' + x + '</li>'; }).join('') + '</ul><div class="rchips"><span>' + r.loc.join(' · ') + '</span><span>' + r.type + '</span><span>' + r.exp + '</span></div><div class="ractions"><button class="btn btn-primary btn-sm" data-go="apply">Apply now</button><button class="btn btn-outline btn-sm" data-go="full">Full details</button></div></div>' : '') + '</div></div>' +
        (r ? '' : '<p class="fhint">' + ROLES.length + ' open roles across ' + Object.keys(BUSINESS_NAMES).length + ' areas, in India, the UK and North America.</p>');
      var dd = $('.dd', body);
      $('.dd-btn', body).onclick = function (e) { e.stopPropagation(); dd.classList.toggle('open'); };
      $$('.dd-opt', body).forEach(function (o) { o.onclick = function () { role = o.dataset.id; pick(); }; });
      $$('.fbiz button', body).forEach(function (b) { b.onclick = function () { biz = b.dataset.b; role = null; pick(); }; });
      if (r) {
        requestAnimationFrame(function () { requestAnimationFrame(function () { $('.fdetail', body).classList.add('open'); }); });
        $('[data-go=apply]', body).onclick = apply;
        $('[data-go=full]', body).onclick = function () { close(); if (window.showRole && document.getElementById('careers')) window.showRole(r.id); else location.href = home + '#careers'; };
      }
    };
    var apply = function () {
      var r = ROLES.filter(function (x) { return x.id === role; })[0];
      body.innerHTML = '<button class="fback">‹ Back to role</button><div class="fcard" style="margin:0 0 14px">' + chip(r) + '<h5 style="margin:0">' + r.title + '</h5></div>' +
        '<form class="fform" novalidate><label>Full name<input name="n" autocomplete="name"></label><label>Email<input name="e" type="email" autocomplete="email"></label><label>LinkedIn or CV link<input name="l" type="url" placeholder="https://"></label><label>Why this role? (optional)<textarea name="m" rows="3"></textarea></label><button class="btn btn-primary" type="submit">Submit application</button><p class="fdemo">Concept demo — nothing is sent from this page.</p></form>';
      $('.fback', body).onclick = pick;
      $('form', body).onsubmit = function (e) {
        e.preventDefault(); var f = e.target, ok = true;
        ['n', 'e'].forEach(function (k) { var el = f.elements[k], bad = !el.value.trim() || (k === 'e' && !/^\S+@\S+\.\S+$/.test(el.value)); el.classList.toggle('err', bad); if (bad) ok = false; });
        if (!ok) return; var nm = esc(f.elements.n.value.trim().split(' ')[0]);
        body.innerHTML = '<div class="fdone"><div class="tick"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M5 12l5 5 9-10"/></svg></div><h4 style="margin-bottom:8px">Thanks, ' + nm + '</h4><p style="font-size:.92rem;margin-bottom:18px">On the live site, your application for <b>' + r.title.split(' — ')[0] + '</b> would go straight to Shaily’s talent team.</p><button class="btn btn-outline btn-sm">Browse other roles</button></div>';
        $('.fdone .btn', body).onclick = function () { role = null; pick(); };
      };
    };
    var open = function (id, view, b) { if (b) biz = b; if (id) { role = id; var rr = ROLES.filter(function (x) { return x.id === id; })[0]; if (rr && biz !== 'all' && rr.business !== biz) biz = 'all'; } (view === 'apply' && role) ? apply() : pick(); fw.classList.add('open'); sync(); };
    var close = function () { fw.classList.remove('open'); sync(); };
    fab.onclick = function () { open(null, 'pick'); }; $('.fwin-x', fw).onclick = close;
    document.addEventListener('click', function (e) { var dd = $('.dd', body); if (dd && !dd.contains(e.target)) dd.classList.remove('open'); });
    return { open: open, close: close, sync: sync };
  })();
  window.FW = FW;

  /* ---------- Reveal + counters ---------- */
  var io = new IntersectionObserver(function (es) {
    es.forEach(function (e) {
      if (!e.isIntersecting) return; e.target.classList.add('in');
      $$('[data-count]', e.target).forEach(function (el) {
        if (el.dataset.done) return; el.dataset.done = 1;
        var end = +el.dataset.count.replace(/,/g, ''), t0 = performance.now(), d = 1300, comma = el.dataset.count.indexOf(',') >= 0, plain = el.dataset.plain;
        var step = function (t) { var p = Math.min((t - t0) / d, 1), v = Math.round((plain ? end - 40 + 40 * (1 - Math.pow(1 - p, 3)) : end * (1 - Math.pow(1 - p, 3)))); el.textContent = comma ? v.toLocaleString('en-IN') : v; if (p < 1) requestAnimationFrame(step); };
        requestAnimationFrame(step);
      });
      io.unobserve(e.target);
    });
  }, { threshold: .12 });
  window.subnavSpy = function () {
    var links = $$('.subnav nav a'); if (!links.length) return;
    var secs = links.map(function (a) { return document.querySelector(a.getAttribute('href')); });
    var on = function () { var y = window.scrollY + 170, k = -1; secs.forEach(function (s, i) { if (s && s.offsetTop <= y) k = i; }); links.forEach(function (a, i) { a.classList.toggle('on', i === k); }); };
    window.addEventListener('scroll', on, { passive: true }); on();
  };
  window.observeReveal = function () { $$('.reveal:not(.in), .stats .stat, .num-grid').forEach(function (el) { io.observe(el); }); };
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') { RP.close(); lbClose(); FW.close(); sp.classList.remove('open'); ov.classList.remove('open'); } });
  document.addEventListener('click', function (e) { var t = e.target.closest('[data-biz]'); if (t) { e.preventDefault(); openBusiness(t.dataset.biz); } var s = e.target.closest('[data-short]'); if (s) { e.preventDefault(); openShort(s.dataset.short); } var bd = e.target.closest('[data-board]'); if (bd) { openBoard(+bd.dataset.board); } var nw = e.target.closest('[data-news]'); if (nw) { openNews(+nw.dataset.news); } });
})();
