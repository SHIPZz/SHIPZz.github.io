(() => {
  if (document.documentElement.dataset.preview !== 'achievements') return;

  const section = document.querySelector('#cases');
  const impactList = section?.querySelector('.impact-list');
  const caseWrapper = section?.querySelector('#case-studies');
  const impactCards = impactList ? Array.from(impactList.querySelectorAll('.impact-card')) : [];
  const caseCards = caseWrapper ? Array.from(caseWrapper.querySelectorAll('.case-study-card')) : [];
  const useBeigeCardRedesign = document.documentElement.classList.contains('theme-beige-prototype')
    && !document.documentElement.classList.contains('theme-gamedev-prototype');

  if (!section || !impactList || impactCards.length !== 5 || caseCards.length !== 3) return;

  const layout = document.createElement('div');
  layout.className = 'achievement-concept-layout';

  const primaryStack = document.createElement('div');
  primaryStack.className = 'achievement-primary-stack';

  const appendDetails = (card, details) => {
    if (!useBeigeCardRedesign) {
      card.appendChild(details);
      return;
    }

    const toggle = document.createElement('button');
    toggle.type = 'button';
    toggle.className = 'achievement-details-toggle';
    toggle.setAttribute('aria-expanded', 'false');
    toggle.innerHTML = '<span data-i18n="impact.details">Technical details</span><span class="achievement-details-icon" aria-hidden="true">+</span>';
    toggle.addEventListener('click', () => {
      const isOpen = card.classList.toggle('is-details-open');
      toggle.setAttribute('aria-expanded', String(isOpen));
      toggle.querySelector('.achievement-details-icon').textContent = isOpen ? '−' : '+';
    });

    card.append(toggle, details);
  };

  impactCards.slice(0, 3).forEach((card, index) => {
    card.classList.add('achievement-combined-card');

    const summary = Array.from(card.children).find((element) => element.tagName === 'P');
    summary?.classList.add('achievement-summary');

    const details = caseCards[index].querySelector('.case-study-details');
    if (details) {
      details.classList.add('achievement-inline-details');
      appendDetails(card, details);
    }

    primaryStack.appendChild(card);
  });

  const secondaryGrid = document.createElement('div');
  secondaryGrid.className = 'achievement-secondary-grid';

  const secondaryDetails = [
    {
      prefix: 'build',
      problem: 'The production build included duplicated assets and shaders, while bootstrap dependencies pulled unnecessary content into the initial build.',
      solution: 'Audited Addressables Build Report, removed duplicated content, separated bootstrap dependencies and excluded unused shader resources.',
      result: 'Reduced the production build from 23 GB to 12 GB (-48%).'
    },
    {
      prefix: 'delivery',
      problem: 'Build publishing, download-page preparation and team notifications required repeated manual steps.',
      solution: 'Connected TeamCity, Cloudflare R2, n8n and Discord into one automated publication and distribution workflow.',
      result: 'Build delivery and access no longer required manual archive uploads, link preparation or team notifications.'
    }
  ];

  impactCards.slice(3).forEach((card, index) => {
    card.classList.add('achievement-combined-card', 'achievement-secondary-card');

    const summary = Array.from(card.children).find((element) => element.tagName === 'P');
    summary?.classList.add('achievement-summary');

    const detailContent = secondaryDetails[index];
    const details = document.createElement('dl');
    details.className = 'case-study-details achievement-inline-details';

    ['problem', 'solution', 'result'].forEach((type) => {
      const item = document.createElement('div');
      const term = document.createElement('dt');
      const description = document.createElement('dd');

      term.dataset.i18n = type === 'solution' ? 'cases.solution' : `cases.${type}`;
      term.textContent = type === 'problem' ? 'Problem' : type === 'solution' ? 'Engineering changes' : 'Result';
      description.dataset.i18n = `cases.${detailContent.prefix}${type[0].toUpperCase()}${type.slice(1)}`;
      description.textContent = detailContent[type];

      item.append(term, description);
      details.appendChild(item);
    });

    appendDetails(card, details);
    secondaryGrid.appendChild(card);
  });

  layout.append(primaryStack, secondaryGrid);
  impactList.replaceWith(layout);
  caseWrapper.remove();
})();
