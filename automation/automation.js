(() => {
  const translated = [...document.querySelectorAll('[data-en]')].map(element => ({ element, ru: element.textContent, en: element.dataset.en }));
  const translatedLabels = [...document.querySelectorAll('[data-en-aria]')].map(element => ({ element, ru: element.getAttribute('aria-label'), en: element.dataset.enAria }));
  const languageButtons = [...document.querySelectorAll('[data-language]')];
  const readLanguage = () => {
    const explicit = new URLSearchParams(location.search).get('lang');
    if (explicit === 'ru' || explicit === 'en') return explicit;
    try { return localStorage.getItem('automation-language') === 'en' ? 'en' : 'ru'; }
    catch { return 'ru'; }
  };
  function setLanguage(language) {
    document.documentElement.lang = language;
    translated.forEach(({ element, ru, en }) => { element.textContent = language === 'en' ? en : ru; });
    translatedLabels.forEach(({ element, ru, en }) => { element.setAttribute('aria-label', language === 'en' ? en : ru); });
    languageButtons.forEach(button => {
      const active = button.dataset.language === language;
      button.classList.toggle('is-active', active);
      button.setAttribute('aria-pressed', String(active));
    });
    const nav = document.querySelector('nav');
    if (nav) nav.setAttribute('aria-label', language === 'en' ? 'Main navigation' : 'Основная навигация');
    document.querySelectorAll('[data-resume-download]').forEach(link => {
      const version = link.dataset.resumeVersion;
      const filename = `Kenan_Ibragimov_AI_Automation_Engineer_${language.toUpperCase()}`;
      link.href = `downloads/${filename}.pdf${version ? `?v=${encodeURIComponent(version)}` : ''}`;
      link.download = `${filename}.pdf`;
    });
    const description = document.querySelector('meta[name="description"]');
    if (description) description.content = language === 'en'
      ? 'Kenan Ibragimov — AI Automation Engineer / n8n Developer / Low-code Developer. Business process automation, AI integrations, Python, JavaScript, REST API, webhooks and SQL.'
      : 'Кенан Ибрагимов — AI Automation Engineer / n8n Developer / Low-code Developer. Автоматизация бизнес-процессов, AI-интеграции, Python, JavaScript, REST API, webhooks и SQL.';
    try { localStorage.setItem('automation-language', language); } catch { /* Language changes still work without browser storage. */ }
  }
  languageButtons.forEach(button => button.addEventListener('click', () => setLanguage(button.dataset.language)));
  setLanguage(readLanguage());
  // Read old language links first, then keep the page address canonical.
  const pageUrl = new URL(location.href);
  if (pageUrl.searchParams.has('lang') || pageUrl.searchParams.has('v')) {
    pageUrl.searchParams.delete('lang');
    pageUrl.searchParams.delete('v');
    history.replaceState(history.state, '', `${pageUrl.pathname}${pageUrl.search}${pageUrl.hash}`);
  }
  document.querySelectorAll('[data-year]').forEach(element => { element.textContent = String(new Date().getFullYear()); });
  document.querySelector('[data-print]')?.addEventListener('click', () => window.print());

  document.querySelectorAll('.video-poster').forEach(poster => {
    poster.addEventListener('click', () => {
      const params = new URLSearchParams({ autoplay: '1', rel: '0' });
      const start = Number.parseInt(poster.dataset.videoStart || '0', 10);
      if (start > 0) params.set('start', String(start));
      const iframe = document.createElement('iframe');
      iframe.src = `https://www.youtube-nocookie.com/embed/${poster.dataset.videoId}?${params}`;
      iframe.title = poster.dataset.videoTitle || 'Project video';
      iframe.allow = 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; web-share';
      iframe.allowFullscreen = true;
      poster.parentElement.replaceChildren(iframe);
      iframe.focus();
    });
  });

  const links = [...document.querySelectorAll('.nav a[href^="#"]')];
  const sections = links.map(link => document.getElementById(link.hash.slice(1))).filter(Boolean);
  if ('IntersectionObserver' in window && sections.length) {
    const observer = new IntersectionObserver(entries => {
      const current = entries.filter(entry => entry.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
      if (!current) return;
      links.forEach(link => {
        const active = link.hash === `#${current.target.id}`;
        link.classList.toggle('is-active', active);
        if (active) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      });
    }, { rootMargin: '-12% 0px -55% 0px' });
    sections.forEach(section => observer.observe(section));
  }
})();
