const translations = {
  en: {
    metaTitle: 'Kenan Ibragimov - Unity Developer',
    metaDescription: 'Kenan Ibragimov - Senior Unity Developer / DevOps & Build Automation portfolio.',
    'nav.about': 'About',
    'nav.impact': 'Impact',
    'nav.projects': 'Projects',
    'nav.skills': 'Skills',
    'hero.eyebrow': 'Senior Unity Developer',
    'hero.title': 'Kenan Ibragimov',
    'hero.text': 'I build production Unity systems for AA, midcore, casual and mobile RPG projects: gameplay architecture, performance optimization, AI integrations, tooling and release automation.',
    'hero.emailCta': 'Email',
    'hero.pdfCta': 'Download PDF',
    'impact.eyebrow': 'Selected results',
    'impact.title': 'Strongest production metrics',
    'impact.loadTitle': 'Hub loading time',
    'impact.loadText': 'Reworked Addressables groups and loading order to reduce blocking asset initialization.',
    'impact.missionTitle': 'Mission loading time',
    'impact.missionText': 'Split heavy content into cleaner loading stages and reduced redundant dependency pulls.',
    'impact.memoryTitle': 'Memory pressure',
    'impact.memoryText': 'Tracked shader/rendering and lifecycle leaks with Unity profiling tools and removed retained runtime objects.',
    'impact.fpsTitle': 'FPS degradation fixed',
    'impact.fpsText': 'Found gameplay-side bottlenecks behind drops from 100-120 FPS to 15-20 FPS and removed the root causes.',
    'impact.sizeTitle': 'Build size reduction',
    'impact.sizeText': 'Cut the package by about 48% through Addressables cleanup, asset audit and build pipeline discipline.',
    'impact.deliveryTitle': 'Delivery automation',
    'impact.deliveryText': 'Moved build handoffs into TeamCity, Cloudflare R2, n8n delivery pages and Discord notifications.',
    'about.eyebrow': 'About',
    'about.title': 'Who I am',
    'about.text1': 'Senior Unity Developer with 5+ years of commercial production experience across AA, midcore, casual and mobile RPG projects. I focus on systems that directly affect delivery quality: gameplay architecture, UI frameworks, optimization, SDK integrations, build pipelines and AI-assisted internal tools.',
    'about.text2': 'My strongest area is turning complex Unity projects into predictable production systems: faster loading, stable FPS, lower memory pressure, cleaner feature architecture and automated delivery for QA and releases.',
    'focus.productionTitle': 'Production range',
    'focus.productionText': 'PC, consoles, Steam Deck, mobile RPG, midcore and casual games.',
    'focus.optimizationTitle': 'Optimization',
    'focus.optimizationText': 'Build size, loading time, FPS drops, memory leaks and rendering bottlenecks.',
    'focus.aiTitle': 'AI and tooling',
    'focus.aiText': 'AI systems integration, internal tools, code review workflows and rapid prototyping.',
    'focus.deliveryTitle': 'Delivery',
    'focus.deliveryText': 'TeamCity, Cloudflare R2, n8n, Discord notifications and QA build distribution.',
    'projects.eyebrow': 'Projects',
    'projects.title': 'Production work and technology stacks',
    'projects.criticalTag': 'AA tactical RPG',
    'projects.criticalText': 'Hardcore turn-based RPG for PC, PlayStation and Xbox. Gameplay systems, UI/meta, URP rendering features, SDK integrations, build automation and QA delivery workflows.',
    'projects.forgeTag': 'Midcore RPG',
    'projects.forgeText': 'Turn-based mobile RPG with server-connected gameplay modules, chat, social features, quests, leaderboards and cloud saves.',
    'projects.watchVideo': 'watch video',
    'projects.mahjongTag': 'Mobile puzzle',
    'projects.mahjongText': 'Mobile puzzle production work with UI flow, SDK integrations, localization and release-oriented polishing.',
    'projects.busyTag': 'Casual and simulator',
    'projects.busyText': 'Casual and simulator projects focused on gameplay loops, UI, editor tooling, platform SDKs and production integrations.',
    'skills.eyebrow': 'Core skills',
    'skills.title': 'Most important technical areas',
    'skills.archTitle': 'Unity architecture',
    'skills.archText': 'C#, .NET, Unity Engine, ECS, Entitas, LeoECS, OOP, SOLID, Clean Code, MVP, MVVM, GoF patterns, Zenject, VContainer.',
    'skills.gameplayTitle': 'Gameplay and UI systems',
    'skills.gameplayText': 'uGUI, UI Toolkit, IMGUI, responsive layouts, Addressables, Asset Bundles, Spine, Animancer, DOTween, Odin Inspector.',
    'skills.performanceTitle': 'Performance and rendering',
    'skills.performanceText': 'Unity Profiler, Memory Profiler, Frame Debugger, CPU/GPU/RAM profiling, draw call reduction, URP Renderer Features, highlight and outline effects.',
    'skills.networkTitle': 'Networking and services',
    'skills.networkText': 'REST API, SignalR, WebSockets, Photon Fusion, Firebase, Adjust, Facebook SDK, Unity Analytics, Remote Config, Crashlytics, IAP, Localization.',
    'skills.cicdTitle': 'CI/CD and automation',
    'skills.cicdText': 'Git, GitHub, GitLab, TeamCity, n8n, Unity build automation, Cloudflare R2, build distribution, Discord integrations.',
    'skills.testingTitle': 'Testing and AI tooling',
    'skills.testingText': 'NUnit, TDD, AltTester, Claude Code, Cursor, Codex CLI, Gemini CLI, prompt engineering and AI-assisted code review.',
    'experience.eyebrow': 'Experience',
    'experience.title': 'Production responsibility',
    'experience.currentDate': 'Feb 2025 - Present',
    'experience.currentRole': 'Senior Unity Developer / DevOps & Build Automation',
    'experience.currentCompany': 'Rhinotales · Critical Shift - AA tactical RPG for PC, PlayStation and Xbox',
    'experience.currentItem1': 'Owned production-critical Unity areas across gameplay, UI/meta systems, performance, rendering features and build delivery.',
    'experience.currentItem2': 'Stabilized legacy UI and feature architecture by reducing lifecycle risks, hidden dependencies and maintenance cost.',
    'experience.currentItem3': 'Delivered URP Renderer Features for gameplay-facing visual systems, including object highlight and outline pipelines.',
    'experience.currentItem4': 'Built CI/CD delivery around TeamCity, Cloudflare R2, QA distribution and Discord notifications to remove manual release handoffs.',
    'experience.currentItem5': 'Introduced internal n8n and AI-assisted workflows for build distribution, code review support and project-documentation access.',
    'experience.previousDate': 'Jan 2021 - Feb 2025',
    'experience.previousRole': 'Unity Developer',
    'experience.previousCompany': 'GameFlinker / FlinkStudio · Midcore and casual mobile projects',
    'experience.previousItem1': 'Delivered gameplay architecture, MVP-based UI and client-server features for mobile production projects.',
    'experience.previousItem2': 'Implemented real-time chat, friends, groups, cloud saves, leaderboards and quest systems through REST API and SignalR.',
    'experience.previousItem3': 'Designed reusable async state-machine flows for infrastructure, UI transitions and network-connected features.',
    'experience.previousItem4': 'Integrated production SDKs including Firebase, Adjust, Facebook SDK, Unity Analytics, IAP and Localization.',
    'education.eyebrow': 'Education',
    'education.title': 'Background',
    'education.collegeTitle': 'Volzhsky Polytechnic Technical College',
    'education.collegeText': 'Mathematical Support and Administration of Information Systems · 2020 - 2024',
    'education.ksTitle': 'KSyndicate - Unity Development',
    'education.ksText': 'Specialization Courses: ECS & Architecture · 2024 - 2025',
    'education.languagesTitle': 'Languages',
    'education.languagesText': 'English B2 · Russian Native · Azerbaijani Native / Fluent',
    'contact.eyebrow': 'Contact',
    'contact.title': "Let's build production-ready Unity systems.",
    'contact.text': 'Open to Unity development roles focused on gameplay architecture, performance, tooling, CI/CD and production automation.',
    'footer.back': 'Back to top'
  },
  ru: {
    metaTitle: 'Кенан Ибрагимов - Senior Unity Developer',
    metaDescription: 'Портфолио Кенана Ибрагимова: Unity-разработка, игровая архитектура, оптимизация и автоматизация сборок.',
    'nav.about': 'Обо мне',
    'nav.impact': 'Результаты',
    'nav.projects': 'Проекты',
    'nav.skills': 'Навыки',
    'hero.eyebrow': 'Senior Unity Developer',
    'hero.title': 'Kenan Ibragimov',
    'hero.text': 'Проектирую production-ready Unity-системы для AA, midcore, casual и mobile RPG-проектов: gameplay-архитектуру, оптимизацию производительности, AI-интеграции, tooling и релизную автоматизацию.',
    'hero.emailCta': 'Email',
    'hero.pdfCta': 'Download PDF',
    'impact.eyebrow': 'Ключевые результаты',
    'impact.title': 'Самые сильные production-метрики',
    'impact.loadTitle': 'Загрузка хаба',
    'impact.loadText': 'Переработал Addressables-группы и порядок загрузки, чтобы уменьшить блокирующую инициализацию ассетов.',
    'impact.missionTitle': 'Загрузка миссии',
    'impact.missionText': 'Разделил тяжелый контент на более чистые стадии загрузки и сократил лишние dependency pulls.',
    'impact.memoryTitle': 'Нагрузка на память',
    'impact.memoryText': 'Через Unity profiling tools отследил shader/rendering и lifecycle leaks, затем убрал удерживаемые runtime-объекты.',
    'impact.fpsTitle': 'Просадки FPS',
    'impact.fpsText': 'По Profiler traces нашел gameplay-side bottlenecks за просадками со 100-120 FPS до 15-20 FPS и убрал root causes.',
    'impact.sizeTitle': 'Размер билда',
    'impact.sizeText': 'Сократил пакет примерно на 48% через Addressables cleanup, asset audit и дисциплину build pipeline.',
    'impact.deliveryTitle': 'Автоматизация доставки',
    'impact.deliveryText': 'Перенес передачу билдов в TeamCity, Cloudflare R2, n8n delivery pages и Discord notifications.',
    'about.eyebrow': 'Обо мне',
    'about.title': 'Кто я',
    'about.text1': 'Senior Unity Developer с 5+ годами коммерческого production-опыта в AA, midcore, casual и mobile RPG-проектах. Основной фокус - системы, которые напрямую влияют на качество разработки и релизов: gameplay-архитектура, UI frameworks, оптимизация, SDK-интеграции, build pipelines и AI-assisted internal tools.',
    'about.text2': 'Моя сильная зона - превращать сложные Unity-проекты в предсказуемые production-системы: быстрее загрузка, стабильнее FPS, ниже нагрузка на память, чище feature-архитектура и автоматизированная доставка для QA и релизов.',
    'focus.productionTitle': 'Production range',
    'focus.productionText': 'PC, консоли, Steam Deck, mobile RPG, midcore и casual games.',
    'focus.optimizationTitle': 'Optimization',
    'focus.optimizationText': 'Build size, loading time, FPS drops, memory leaks и rendering bottlenecks.',
    'focus.aiTitle': 'AI and tooling',
    'focus.aiText': 'AI systems integration, internal tools, code review workflows и rapid prototyping.',
    'focus.deliveryTitle': 'Delivery',
    'focus.deliveryText': 'TeamCity, Cloudflare R2, n8n, Discord notifications и QA build distribution.',
    'projects.eyebrow': 'Проекты',
    'projects.title': 'Production work и технологические стеки',
    'projects.criticalTag': 'AA tactical RPG',
    'projects.criticalText': 'Хардкорная пошаговая RPG для PC, PlayStation и Xbox. Gameplay systems, UI/meta, URP rendering features, SDK integrations, build automation и QA delivery workflows.',
    'projects.forgeTag': 'Midcore RPG',
    'projects.forgeText': 'Пошаговая mobile RPG с server-connected gameplay modules, чатом, social features, quests, leaderboards и cloud saves.',
    'projects.watchVideo': 'смотреть видео',
    'projects.mahjongTag': 'Mobile puzzle',
    'projects.mahjongText': 'Mobile puzzle production work: UI flow, SDK integrations, localization и release-oriented polishing.',
    'projects.busyTag': 'Casual and simulator',
    'projects.busyText': 'Casual и simulator-проекты с фокусом на gameplay loops, UI, editor tooling, platform SDKs и production integrations.',
    'skills.eyebrow': 'Ключевые навыки',
    'skills.title': 'Самые важные технические зоны',
    'skills.archTitle': 'Unity architecture',
    'skills.archText': 'C#, .NET, Unity Engine, ECS, Entitas, LeoECS, OOP, SOLID, Clean Code, MVP, MVVM, GoF patterns, Zenject, VContainer.',
    'skills.gameplayTitle': 'Gameplay and UI systems',
    'skills.gameplayText': 'uGUI, UI Toolkit, IMGUI, responsive layouts, Addressables, Asset Bundles, Spine, Animancer, DOTween, Odin Inspector.',
    'skills.performanceTitle': 'Performance and rendering',
    'skills.performanceText': 'Unity Profiler, Memory Profiler, Frame Debugger, CPU/GPU/RAM profiling, draw call reduction, URP Renderer Features, highlight и outline effects.',
    'skills.networkTitle': 'Networking and services',
    'skills.networkText': 'REST API, SignalR, WebSockets, Photon Fusion, Firebase, Adjust, Facebook SDK, Unity Analytics, Remote Config, Crashlytics, IAP, Localization.',
    'skills.cicdTitle': 'CI/CD and automation',
    'skills.cicdText': 'Git, GitHub, GitLab, TeamCity, n8n, Unity build automation, Cloudflare R2, build distribution, Discord integrations.',
    'skills.testingTitle': 'Testing and AI tooling',
    'skills.testingText': 'NUnit, TDD, AltTester, Claude Code, Cursor, Codex CLI, Gemini CLI, prompt engineering и AI-assisted code review.',
    'experience.eyebrow': 'Опыт',
    'experience.title': 'Production responsibility',
    'experience.currentDate': 'Февраль 2025 - настоящее время',
    'experience.currentRole': 'Senior Unity Developer / DevOps & Build Automation',
    'experience.currentCompany': 'Rhinotales · Critical Shift - AA tactical RPG для PC, PlayStation и Xbox',
    'experience.currentItem1': 'Отвечал за production-critical Unity areas: gameplay, UI/meta systems, performance, rendering features и build delivery.',
    'experience.currentItem2': 'Стабилизировал legacy UI и feature architecture, снижая lifecycle risks, hidden dependencies и стоимость поддержки.',
    'experience.currentItem3': 'Доставил URP Renderer Features для gameplay-facing visual systems, включая object highlight и outline pipelines.',
    'experience.currentItem4': 'Построил CI/CD delivery вокруг TeamCity, Cloudflare R2, QA distribution и Discord notifications, убрав ручные release handoffs.',
    'experience.currentItem5': 'Внедрил internal n8n и AI-assisted workflows для build distribution, code review support и доступа к project documentation.',
    'experience.previousDate': 'Январь 2021 - февраль 2025',
    'experience.previousRole': 'Unity Developer',
    'experience.previousCompany': 'GameFlinker / FlinkStudio · midcore и casual mobile-проекты',
    'experience.previousItem1': 'Доставлял gameplay architecture, MVP-based UI и client-server features для mobile production-проектов.',
    'experience.previousItem2': 'Реализовал real-time chat, friends, groups, cloud saves, leaderboards и quest systems через REST API и SignalR.',
    'experience.previousItem3': 'Проектировал reusable async state-machine flows для infrastructure, UI transitions и network-connected features.',
    'experience.previousItem4': 'Интегрировал production SDKs: Firebase, Adjust, Facebook SDK, Unity Analytics, IAP и Localization.',
    'education.eyebrow': 'Образование',
    'education.title': 'Образование и языки',
    'education.collegeTitle': 'Волжский политехнический техникум',
    'education.collegeText': 'Математическое обеспечение и администрирование информационных систем · 2020 - 2024',
    'education.ksTitle': 'KSyndicate - Unity Development',
    'education.ksText': 'Профильные курсы: ECS и архитектура · 2024 - 2025',
    'education.languagesTitle': 'Языки',
    'education.languagesText': 'Английский B2 · русский родной · азербайджанский родной / свободный',
    'contact.eyebrow': 'Контакты',
    'contact.title': 'Связь по вопросам Unity-разработки.',
    'contact.text': 'Приоритетные направления: gameplay architecture, performance, tooling, CI/CD и автоматизация production-процессов.',
    'footer.back': 'Наверх'
  }
};

const revealItems = document.querySelectorAll('[data-reveal]');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

revealItems.forEach((item) => observer.observe(item));
document.getElementById('year').textContent = new Date().getFullYear();

const languageButtons = document.querySelectorAll('[data-lang]');
const metaDescription = document.querySelector('meta[name="description"]');
const languageTransitionMs = 170;
const compactHeaderStart = 35;
const compactHeaderEnd = 210;
let headerFrame = null;

function getSavedLanguage() {
  try {
    return window.localStorage.getItem('portfolio-language');
  } catch {
    return null;
  }
}

function saveLanguage(language) {
  try {
    window.localStorage.setItem('portfolio-language', language);
  } catch {
    return;
  }
}

function updateLanguageContent(language) {
  const dictionary = translations[language] || translations.en;

  document.documentElement.lang = language;
  document.title = dictionary.metaTitle;
  metaDescription.setAttribute('content', dictionary.metaDescription);

  document.querySelectorAll('[data-i18n]').forEach((element) => {
    const key = element.dataset.i18n;
    if (dictionary[key]) {
      element.textContent = dictionary[key];
    }
  });

  document.querySelectorAll('[data-i18n-aria-label]').forEach((element) => {
    const key = element.dataset.i18nAriaLabel;
    if (dictionary[key]) {
      element.setAttribute('aria-label', dictionary[key]);
    }
  });

  languageButtons.forEach((button) => {
    const isActive = button.dataset.lang === language;
    button.classList.toggle('is-active', isActive);
    button.setAttribute('aria-pressed', String(isActive));
  });

  saveLanguage(language);
}

function applyLanguage(language, options = {}) {
  const currentLanguage = document.documentElement.lang;
  const shouldAnimate = options.animate && currentLanguage !== language;

  if (!shouldAnimate) {
    updateLanguageContent(language);
    return;
  }

  document.body.classList.add('is-language-changing');
  window.setTimeout(() => {
    updateLanguageContent(language);
    window.requestAnimationFrame(() => {
      document.body.classList.remove('is-language-changing');
    });
  }, languageTransitionMs);
}

languageButtons.forEach((button) => {
  button.addEventListener('click', () => applyLanguage(button.dataset.lang, { animate: true }));
});

function updateHeaderState() {
  const rawProgress = (window.scrollY - compactHeaderStart) / (compactHeaderEnd - compactHeaderStart);
  const progress = Math.max(0, Math.min(1, rawProgress));
  const eased = progress * progress * (3 - 2 * progress);
  const fadeProgress = Math.max(0, Math.min(1, progress / 0.32));
  const fadeEased = fadeProgress * fadeProgress * (3 - 2 * fadeProgress);
  const collapseProgress = Math.max(0, Math.min(1, (progress - 0.28) / 0.72));
  const collapseEased = collapseProgress * collapseProgress * (3 - 2 * collapseProgress);
  const viewportWidth = window.innerWidth;
  const isMobile = viewportWidth <= 700;

  if (isMobile) {
    const isMobileCompact = document.body.classList.contains('is-mobile-header-compact');

    document.body.classList.remove('is-header-collapsed');

    if (!isMobileCompact && window.scrollY > 160) {
      document.body.classList.add('is-mobile-header-compact');
    }

    if (isMobileCompact && window.scrollY < 40) {
      document.body.classList.remove('is-mobile-header-compact');
    }

    return;
  }

  document.body.classList.remove('is-mobile-header-compact');

  const fullSideSpace = Math.max((viewportWidth - 1160) / 2, 16);
  const startTop = 18;
  const startRadius = 999;
  const startActionGap = 12;

  const lerp = (from, to) => from + (to - from) * eased;
  const setPx = (name, value) => {
    document.documentElement.style.setProperty(name, `${value.toFixed(2)}px`);
  };

  setPx('--header-top', lerp(startTop, 0));
  setPx('--header-width', viewportWidth - lerp(fullSideSpace, 0) * 2);
  setPx('--header-margin-top', lerp(18, 0));
  setPx('--header-padding-y', lerp(12, 6));
  setPx('--header-padding-x', lerp(14, 6));
  setPx('--header-gap', lerp(18, 0));
  setPx('--header-radius-top', lerp(startRadius, 0));
  setPx('--header-radius-bottom', lerp(startRadius, 18));
  setPx('--brand-max-width', 260 + (0 - 260) * collapseEased);
  setPx('--brand-max-height', 42 + (0 - 42) * collapseEased);
  setPx('--brand-translate-y', 0 + (-8 - 0) * fadeEased);
  setPx('--language-max-width', 100 + (0 - 100) * collapseEased);
  setPx('--language-max-height', 40 + (0 - 40) * collapseEased);
  setPx('--language-translate-y', 0 + (-8 - 0) * fadeEased);
  setPx('--language-padding-y', 3 + (0 - 3) * collapseEased);
  setPx('--language-border-width', 1 + (0 - 1) * collapseEased);
  setPx('--actions-gap', lerp(startActionGap, 0));
  setPx('--actions-width', lerp(474, viewportWidth));
  setPx('--nav-gap', lerp(6, 3));
  setPx('--nav-padding-y', lerp(10, 7));
  setPx('--nav-padding-x', lerp(14, 12));
  setPx('--nav-padding-x-mobile', lerp(8, 4));
  setPx('--nav-width', lerp(376, Math.min(viewportWidth, 620)));
  document.documentElement.style.setProperty('--brand-opacity', (1 - fadeEased).toFixed(3));
  document.documentElement.style.setProperty('--language-opacity', (1 - fadeEased).toFixed(3));
  document.documentElement.style.setProperty('--header-background-alpha', lerp(0.74, 0.48).toFixed(3));
  document.documentElement.style.setProperty('--nav-font-size', `${lerp(1, 0.82).toFixed(3)}rem`);
  document.documentElement.style.setProperty('--nav-font-size-mobile', `${lerp(0.88, 0.78).toFixed(3)}rem`);
  document.body.classList.toggle('is-header-collapsed', eased > 0.98);
}

function scheduleHeaderStateUpdate() {
  if (headerFrame !== null) {
    return;
  }

  headerFrame = window.requestAnimationFrame(() => {
    headerFrame = null;
    updateHeaderState();
  });
}

window.addEventListener('scroll', scheduleHeaderStateUpdate, { passive: true });
window.addEventListener('resize', scheduleHeaderStateUpdate);
updateHeaderState();

applyLanguage(getSavedLanguage() || 'en');
