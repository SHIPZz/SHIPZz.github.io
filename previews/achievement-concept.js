(() => {
  if (document.documentElement.dataset.preview !== 'achievements') return;

  const section = document.querySelector('#cases');
  const impactList = section?.querySelector('.impact-list');
  const caseWrapper = section?.querySelector('#case-studies');
  const impactCards = impactList ? Array.from(impactList.querySelectorAll('.impact-card')) : [];
  const caseCards = caseWrapper ? Array.from(caseWrapper.querySelectorAll('.case-study-card')) : [];

  if (!section || !impactList || impactCards.length !== 5 || caseCards.length !== 3) return;

  const layout = document.createElement('div');
  layout.className = 'achievement-concept-layout';

  const primaryStack = document.createElement('div');
  primaryStack.className = 'achievement-primary-stack';

  impactCards.slice(0, 3).forEach((card, index) => {
    card.classList.add('achievement-combined-card');

    const summary = Array.from(card.children).find((element) => element.tagName === 'P');
    summary?.classList.add('achievement-summary');

    const details = caseCards[index].querySelector('.case-study-details');
    if (details) {
      details.classList.add('achievement-inline-details');
      card.appendChild(details);
    }

    primaryStack.appendChild(card);
  });

  const secondaryGrid = document.createElement('div');
  secondaryGrid.className = 'achievement-secondary-grid';

  impactCards.slice(3).forEach((card) => {
    card.classList.add('achievement-secondary-card');
    secondaryGrid.appendChild(card);
  });

  layout.append(primaryStack, secondaryGrid);
  impactList.replaceWith(layout);
  caseWrapper.remove();
})();
