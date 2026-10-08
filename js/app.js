/* Plain JavaScript. No build step, dependencies or backend. */
(() => {
  'use strict';
  const C = window.SITE_CONTENT;
  const DICT = window.SITE_UI;
  if (!C || !DICT) return;
  const $ = (s, root = document) => root.querySelector(s);
  const esc = (s) => String(s ?? '').replace(/[&<>"']/g, c => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  }[c]));
  const validUrl = s => /^(https?:\/\/|mailto:|\.\/|#)/i.test(String(s));
  const safeUrl = s => validUrl(s) ? esc(s) : '#';
  const ext = url => `href="${safeUrl(url)}" target="_blank" rel="noopener noreferrer"`;
  const arrow = '<span aria-hidden="true">&#8599;</span>';
  let lang = 'ca';
  let filter = 'featured';
  let query = '';
  let toastTimer;
  try {
    const requested = new URLSearchParams(location.search).get('lang');
    const saved = localStorage.getItem('gh-language');
    lang = ['ca', 'en'].includes(requested) ? requested :
      (['ca', 'en'].includes(saved) ? saved : 'ca');
  } catch (_) { /* Private browsing and file:// may disable storage. */ }
  const t = v => v && !Array.isArray(v) && typeof v === 'object' ? (v[lang] ?? v.ca ?? '') : v;
  const U = () => DICT[lang];
  const cvHref = () => `./cv.html?lang=${lang}`;

  function dateLabel() {
    const d = new Date(C.updated + 'T12:00:00Z');
    if (Number.isNaN(d.getTime())) return '';
    return U().updated + ': ' + new Intl.DateTimeFormat(lang === 'ca' ? 'ca-ES' : 'en-GB', {
      year: 'numeric', month: 'long'
    }).format(d);
  }
  function languages() {
    return `<div class="language-switch" role="group" aria-label="${esc(U().language)}">
      ${['ca','en'].map(l => `<button type="button" data-language="${l}" lang="${l}"
        aria-label="${l === 'ca' ? 'Catal&#224;' : 'English'}" aria-pressed="${l === lang}">${l.toUpperCase()}</button>`).join('')}
    </div>`;
  }
  function social() {
    return C.profile.links.filter(l => l.url).map(l =>
      `<a ${ext(l.url)}>${esc(l.name)} ${arrow}</a>`).join('');
  }
  function header() {
    return `<a class="skip-link" href="#main">${esc(U().skip)}</a>
    <header class="site-header" id="top"><div class="wrap header-inner">
      <a class="brand" href="#perfil">${esc(C.profile.shortName)}</a>
      <nav class="main-nav" id="navigation" aria-label="${lang === 'ca' ? 'Principal' : 'Main'}">
        ${['perfil','recerca','publicacions','trajectoria','contacte'].map((id,i) =>
          `<a href="#${id}">${esc(U().nav[i])}</a>`).join('')}
      </nav>
      <div class="header-tools">${languages()}
        <button class="menu-toggle" type="button" aria-controls="navigation" aria-expanded="false" aria-label="${esc(U().menu)}">
          <span></span><span></span>
        </button>
      </div>
    </div></header>`;
  }
  function portrait() {
    const src = String(C.profile.photo || '');
    const safeImage = /^https:\/\//i.test(src) || /^(\.\/)?[\w/-]+\.(jpe?g|png|webp|avif)$/i.test(src);
    if (!src || !safeImage) return '';
    return `<figure class="portrait">
      <div class="portrait-frame">
        <img id="portrait-image" src="${esc(src)}" alt="${esc(t(C.profile.photoAlt))}"
          width="270" height="336" fetchpriority="high" decoding="async" referrerpolicy="no-referrer">
        <div class="photo-fallback" hidden>
          <p>${esc(U().photoMissing)}</p>
          <a ${ext(C.profile.photoSource)}>${esc(U().viewPhoto)} ${arrow}</a>
        </div>
      </div>
      ${C.profile.photoSource ? `<figcaption><a ${ext(C.profile.photoSource)}>${esc(t(C.profile.photoCredit))} ${arrow}</a></figcaption>` : ''}
    </figure>`;
  }
  function hero() {
    const name = C.profile.name;
    const short = C.profile.shortName;
    const nameHtml = name.startsWith(short) && name !== short
      ? `${esc(short)}<br>${esc(name.slice(short.length).trim())}` : esc(name);
    return `<section class="intro-section wrap" id="perfil">
      <div class="intro-copy">
        <p class="intro-kicker">${esc(t(C.profile.heroKicker))}</p>
        <h1>${nameHtml}</h1>
        <p class="intro-role">${esc(t(C.profile.role))} <span class="separator">/</span> ${esc(C.profile.degree)}</p>
        <p class="intro-lead">${esc(t(C.profile.intro))}</p>
        <div class="intro-bio">${t(C.profile.bio).map(p => `<p>${esc(p)}</p>`).join('')}</div>
        <div class="profile-links"><a class="cv-link" href="${cvHref()}">${esc(U().cv)} ${arrow}</a>${social()}</div>
      </div>
      <aside class="profile-aside">${portrait()}
        <p class="location">${esc(t(C.profile.location))}</p>
        <div class="affiliations">${C.affiliations.map(a => `<p><a ${ext(a.url)}>${esc(a.name)}</a><small>${esc(t(a.detail))}</small></p>`).join('')}</div>
      </aside>
    </section>`;
  }
  function section(id, title, body, side = '') {
    return `<section id="${id}" class="content-section wrap">
      <header class="section-label"><h2>${esc(title)}</h2>${side}</header>
      <div class="section-body">${body}</div>
    </section>`;
  }
  function research() {
    const body = C.research.map(r => `<article class="research-item">
      <h3>${esc(t(r.title))}</h3><p>${esc(t(r.text))}</p>
      <a class="small-link" ${ext(r.source)}>${esc(U().source)} ${arrow}</a>
    </article>`).join('');
    return section('recerca', U().researchTitle, body);
  }
  function projects() {
    const body = C.projects.map(p => `<article class="project-item">
      <h3>${esc(p.name)}</h3><div><p>${esc(t(p.description))}</p>
      <a class="small-link" ${ext(p.url)}>${esc(t(p.linkLabel))} ${arrow}</a></div>
    </article>`).join('');
    const optional = C.optionalProjects?.enabled ? `<article class="project-item">
      <h3>${esc(C.optionalProjects.name)}</h3><div><p>${esc(t(C.optionalProjects.description))}</p>
      <a class="small-link" ${ext(C.optionalProjects.url)}>${esc(U().more)} ${arrow}</a></div></article>` : '';
    return section('projectes', U().projectTitle, body + optional);
  }
  function authorLine(authors) {
    return esc(authors).replace(esc(C.profile.name), `<strong>${esc(C.profile.name)}</strong>`);
  }
  function publication(p) {
    const url = p.doi ? 'https://doi.org/' + p.doi : p.source;
    return `<article class="publication">
      <div class="pub-year">${esc(p.year)}</div>
      <div class="pub-content">
        <h3><a ${ext(p.source || url)}>${esc(p.title)}</a></h3>
        <p class="pub-authors">${authorLine(p.authors)}</p>
        <p class="pub-venue">${esc(p.venue)}</p>
        ${t(p.note) ? `<p class="pub-note">${esc(t(p.note))}</p>` : ''}
        <div class="pub-actions"><a ${ext(url)}>${esc(U().paper)} ${arrow}</a>
          <button type="button" class="text-button" data-cite="${esc(p.id)}" aria-label="${esc(U().citation + ': ' + p.title)}">${esc(U().citation)}</button>
        </div>
      </div>
    </article>`;
  }
  function publications() {
    const scholar = C.profile.links.find(l => l.name === 'Google Scholar');
    const body = `<p class="section-intro">${esc(U().pubSub)}</p>
      <div class="pub-filters" role="group" aria-label="${lang === 'ca' ? 'Filtrar publicacions' : 'Filter publications'}">
        ${Object.entries(U().filters).map(([key,label]) => `<button class="filter-button" type="button" data-filter="${key}" aria-pressed="${filter === key}">${esc(label)}</button>`).join('')}
      </div>
      <div class="search-row"><label class="sr-only" for="pub-search">${esc(U().search)}</label>
        <input type="search" id="pub-search" placeholder="${esc(U().search)}" value="${esc(query)}" autocomplete="off">
        <span id="pub-count" role="status" aria-live="polite"></span>
      </div>
      <div id="pub-list"></div>
      <p class="pub-end">${esc(U().pubNote)}</p>`;
    return section('publicacions', U().pubTitle, body,
      scholar ? `<a class="small-link" ${ext(scholar.url)}>${esc(U().scholar)} ${arrow}</a>` : '');
  }
  function role(r) {
    return `<article class="role"><h4>${esc(t(r.title))}</h4>
      <p class="institution">${esc(r.institution)}</p><p>${esc(t(r.description))}</p></article>`;
  }
  function education(e) {
    return `<article class="education-item"><p class="education-period">${esc(e.period)}</p>
      <div><h4>${esc(t(e.title))}</h4><p class="institution">${esc(e.institution)}</p>
      <p>${esc(t(e.description))}</p>${e.url ? `<a class="small-link" ${ext(e.url)}>${esc(U().more)} ${arrow}</a>` : ''}</div>
    </article>`;
  }
  function events() {
    return `<details class="conference-details"><summary>${esc(U().eventsTitle)} <span>(${C.events.length})</span></summary>
      <div class="conference-list">${C.events.map(e => `<article class="event">
        <time>${esc(e.year)}</time><div><h4><a ${ext(e.url)}>${esc(e.title)} ${arrow}</a></h4><p>${esc(t(e.description))}</p></div>
      </article>`).join('')}<p class="fineprint">${esc(U().eventsNote)}</p></div>
    </details>`;
  }
  function career() {
    const body = `<h3 class="subheading">${esc(U().roles)}</h3>${C.roles.map(role).join('')}
      <h3 class="subheading education-heading">${esc(U().education)}</h3>${C.education.map(education).join('')}
      <div class="thesis"><p class="thesis-label">${esc(U().thesisLabel)}</p>
        <h3>${esc(C.thesis.title)}</h3><a class="small-link" ${ext(C.thesis.url)}>${esc(U().thesisLink)} ${arrow}</a></div>
      ${events()}
      ${C.personal?.enabled ? `<div class="personal-note"><h3>${esc(t(C.personal.title))}</h3><p>${esc(t(C.personal.text))}</p></div>` : ''}`;
    return section('trajectoria', U().careerTitle, body);
  }
  function contact() {
    return section('contacte', U().contactTitle, `<p>${esc(t(C.profile.contactText))}</p>
      <a class="contact-email" href="mailto:${esc(C.profile.email)}">${esc(C.profile.email)}</a>
      <button type="button" class="text-button" data-copy-email>${esc(U().copyEmail)}</button>
      <div class="contact-links">${social()}</div>`);
  }
  function footer() {
    return `<footer class="site-footer wrap"><p>&copy; ${new Date().getFullYear()} ${esc(C.profile.name)}</p>
      <p>${esc(dateLabel())} <span aria-hidden="true">&middot;</span> <a href="./docs/FONTS_I_REVISIO.md">${esc(U().sources)}</a></p></footer>`;
  }
  function cv() {
    return `<main class="cv-page" id="main"><div class="cv-tools">
      <a href="./index.html?lang=${lang}">&#8592; ${esc(U().back)}</a>
      <div class="header-tools">${languages()}<button class="print-button" type="button" data-print>${esc(U().print)}</button></div>
      </div><p class="intro-kicker">${esc(U().cvTitle)}</p>
      <h1>${esc(C.profile.name)}</h1><p class="cv-subtitle">${esc(C.profile.degree)} / ${esc(t(C.profile.role))}</p>
      <div class="cv-contact"><a href="mailto:${esc(C.profile.email)}">${esc(C.profile.email)}</a>${social()}</div>
      <section class="cv-section"><h2>${esc(U().nav[0])}</h2>${t(C.profile.bio).map(p => `<p>${esc(p)}</p>`).join('')}</section>
      <section class="cv-section"><h2>${esc(U().roles)}</h2>${C.roles.map(role).join('')}</section>
      <section class="cv-section"><h2>${esc(U().education)}</h2>${C.education.map(education).join('')}</section>
      <section class="cv-section"><h2>${esc(U().thesisLabel)}</h2><p>${esc(C.thesis.title)}</p><a ${ext(C.thesis.url)}>${esc(U().thesisLink)} ${arrow}</a></section>
      <section class="cv-section"><h2>${esc(U().pubTitle)}</h2>${C.publications.map(publication).join('')}</section>
      <p class="fineprint">${esc(dateLabel())}. ${esc(U().cvNote)}</p></main>`;
  }
  const normalise = s => String(s).normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
  function updatePublications() {
    if (!$('#pub-list')) return;
    const q = normalise(query.trim());
    const pubs = C.publications.filter(p =>
      (filter === 'all' || (filter === 'featured' ? p.featured : p.category === filter)) &&
      (!q || normalise([p.title,p.authors,p.year,p.venue,p.doi].join(' ')).includes(q)));
    $('#pub-list').innerHTML = pubs.length ? pubs.map(publication).join('') : `<p class="empty-state">${esc(U().empty)}</p>`;
    $('#pub-count').textContent = `${pubs.length} / ${C.publications.length} ${U().results}`;
    document.querySelectorAll('[data-filter]').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.filter === filter)));
  }
  function toast(text) {
    const box = $('#toast');
    clearTimeout(toastTimer);
    box.textContent = text; box.hidden = false;
    toastTimer = setTimeout(() => { box.hidden = true; }, 3500);
  }
  async function copy(text, success) {
    try {
      if (navigator.clipboard && window.isSecureContext) await navigator.clipboard.writeText(text);
      else {
        const area = document.createElement('textarea');
        area.value = text; area.style.position = 'fixed'; area.style.left = '-9999px';
        document.body.appendChild(area); area.select();
        const copied = document.execCommand('copy'); area.remove();
        if (!copied) throw new Error('Clipboard unavailable');
      }
      toast(success);
    } catch (_) { toast(U().copyFailed); }
  }
  function metadata() {
    document.documentElement.lang = lang;
    const isCV = document.body.dataset.page === 'cv';
    document.title = `${C.profile.name} | ${isCV ? U().cvTitle : t(C.profile.role)}`;
    const description = $('meta[name="description"]');
    if (description) description.content = t(C.profile.intro);
    for (const [selector,value] of [
      ['meta[property="og:title"]',document.title],
      ['meta[property="og:description"]',t(C.profile.intro)],
      ['meta[property="og:image"]',C.profile.photo.startsWith('https://') ? C.profile.photo : new URL(C.profile.photo,C.profile.siteUrl).href]
    ]) { const element = $(selector); if (element) element.content = value; }
    const canonical = $('link[rel="canonical"]');
    if (canonical && /^https:\/\//.test(C.profile.siteUrl)) canonical.href = C.profile.siteUrl + (isCV ? 'cv.html' : '');
    const schema = $('#person-data');
    if (schema) schema.textContent = JSON.stringify({
      '@context':'https://schema.org', '@type':'Person', name:C.profile.name,
      url:C.profile.siteUrl, jobTitle:t(C.profile.role), sameAs:C.profile.links.map(x => x.url), knowsAbout:C.profile.keywords
    });
  }
  function watchPortrait() {
    const img = $('#portrait-image');
    if (!img) return;
    const onError = () => {
      img.hidden = true;
      img.closest('.portrait-frame').classList.add('photo-unavailable');
      const fallback = $('.photo-fallback');
      if (fallback) fallback.hidden = false;
    };
    img.addEventListener('error', onError, {once:true});
    if (img.complete && img.naturalWidth === 0) onError();
  }
  function render() {
    $('#app').innerHTML = document.body.dataset.page === 'cv' ? cv() :
      `${header()}<main id="main">${hero()}${research()}${projects()}${publications()}${career()}${contact()}</main>${footer()}`;
    updatePublications(); metadata(); watchPortrait();
  }
  function closeMenu() {
    const button = $('.menu-toggle');
    if (button) {button.setAttribute('aria-expanded','false'); button.setAttribute('aria-label',U().menu);}
    $('#navigation')?.classList.remove('open');
  }
  document.addEventListener('click', e => {
    const language = e.target.closest('[data-language]');
    if (language) {
      lang = language.dataset.language;
      try { localStorage.setItem('gh-language',lang); } catch (_) { /* Optional persistence. */ }
      try { const url = new URL(location.href); url.searchParams.set('lang',lang); history.replaceState(null,'',url); } catch (_) {}
      render(); document.querySelector(`[data-language="${lang}"]`)?.focus({preventScroll:true}); return;
    }
    const f = e.target.closest('[data-filter]');
    if (f) { filter = f.dataset.filter; updatePublications(); return; }
    const cite = e.target.closest('[data-cite]');
    if (cite) {
      const p = C.publications.find(x => x.id === cite.dataset.cite);
      if (p) copy(`${p.authors} (${p.year}). ${p.title}. ${p.venue}. ${p.doi ? 'https://doi.org/' + p.doi : p.source}`,U().copied);
      return;
    }
    if (e.target.closest('[data-copy-email]')) {copy(C.profile.email,U().emailCopied); return;}
    if (e.target.closest('[data-print]')) {window.print(); return;}
    const menu = e.target.closest('.menu-toggle');
    if (menu) {
      const open = menu.getAttribute('aria-expanded') !== 'true';
      menu.setAttribute('aria-expanded',String(open)); menu.setAttribute('aria-label',open ? U().close : U().menu);
      $('#navigation').classList.toggle('open',open); return;
    }
    if (e.target.closest('.main-nav a')) closeMenu();
  });
  document.addEventListener('input', e => {
    if (e.target.id === 'pub-search') {
      query = e.target.value;
      if (query.trim()) filter = 'all';
      updatePublications();
    }
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && $('#navigation')?.classList.contains('open')) {
      closeMenu(); $('.menu-toggle')?.focus();
    }
  });
  render();
})();
