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
    const resumeLink = document.querySelector('a[href^="resume.html"]');
    if (resumeLink) resumeLink.href = `resume.html?lang=${language}`;
    const description = document.querySelector('meta[name="description"]');
    if (description) description.content = language === 'en'
      ? 'Kenan Ibragimov: n8n workflows, AI-assisted code review, API integrations and internal developer tools.'
      : 'Кенан Ибрагимов — разработчик автоматизаций. Кейсы n8n, AI code review, интеграции API и инструменты для команды.';
    try { localStorage.setItem('automation-language', language); } catch { /* Language changes still work without browser storage. */ }
  }
  languageButtons.forEach(button => button.addEventListener('click', () => setLanguage(button.dataset.language)));
  setLanguage(readLanguage());
  document.querySelectorAll('[data-year]').forEach(element => { element.textContent = String(new Date().getFullYear()); });
  document.querySelector('[data-print]')?.addEventListener('click', () => window.print());

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
