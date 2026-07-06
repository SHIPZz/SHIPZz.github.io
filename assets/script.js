const translations = {
  en: {
    metaTitle: 'Kenan Ibragimov - Unity Developer',
    metaDescription: 'Kenan Ibragimov - Senior Unity Developer / DevOps & Build Automation portfolio.',
    'nav.work': 'Work',
    'nav.impact': 'Impact',
    'nav.skills': 'Skills',
    'nav.contact': 'Contact',
    'hero.eyebrow': 'Senior Unity Developer · DevOps & Build Automation',
    'hero.title': 'Building gameplay systems, scalable Unity architecture, and release automation for production teams.',
    'hero.text': 'Unity Developer with 5+ years of commercial experience across AA, midcore, hypercasual and casual projects. Focused on gameplay architecture, UI systems, performance optimization, Unity tooling, CI/CD and AI-assisted development workflows.',
    'hero.impactCta': 'View impact',
    'hero.contactCta': 'Contact me',
    'profile.aria': 'Profile summary',
    'profile.kicker': 'Current profile',
    'profile.role': 'Senior Unity Developer',
    'profile.projectLabel': 'Project',
    'profile.focusLabel': 'Focus',
    'profile.focus': 'Gameplay, UI, CI/CD, optimization',
    'profile.automationLabel': 'Automation',
    'profile.automation': 'TeamCity, Cloudflare R2, n8n, Discord',
    'profile.locationLabel': 'Location',
    'profile.location': 'Baku, Azerbaijan',
    'metrics.years': 'years in commercial Unity development',
    'metrics.platforms': 'PC, PlayStation and Xbox production experience',
    'metrics.size': 'build size reduction from 23 GB to 12 GB',
    'metrics.delivery': 'TeamCity, R2, n8n and internal delivery flows',
    'experience.eyebrow': 'Experience',
    'experience.title': 'Production roles',
    'experience.currentDate': 'Feb 2025 - Present',
    'experience.currentRole': 'Senior Unity Developer / DevOps & Build Automation',
    'experience.currentCompany': 'Rhinotales · Critical Shift - Hardcore turn-based RPG for PC, PlayStation and Xbox',
    'experience.currentItem1': 'Worked on gameplay, UI and meta systems for a large-scale turn-based RPG.',
    'experience.currentItem2': 'Refactored legacy UI code, improved lifecycle handling and cleaned architecture issues.',
    'experience.currentItem3': 'Implemented URP Renderer Features, including object highlight and outline effects.',
    'experience.currentItem4': 'Configured Unity CI/CD with TeamCity, Cloudflare R2 artifact publishing, QA delivery and Discord notifications.',
    'experience.currentItem5': 'Built n8n-based internal build distribution and AI-assisted code review workflows connected to GitHub and project documentation.',
    'experience.previousDate': 'Jan 2021 - Feb 2025',
    'experience.previousRole': 'Unity Developer',
    'experience.previousCompany': 'GameFlinker / FlinkStudio · Midcore and casual mobile projects',
    'experience.previousItem1': 'Delivered core gameplay systems, MVP-based UI and client-server modules.',
    'experience.previousItem2': 'Implemented real-time chat, friends, groups, cloud saves, leaderboards and quest systems via REST API and SignalR.',
    'experience.previousItem3': 'Designed generic async state-machine architecture for infrastructure and UI flows.',
    'experience.previousItem4': 'Integrated Firebase, Adjust, Facebook SDK, Unity Analytics, IAP and Localization.',
    'projects.eyebrow': 'Projects',
    'projects.title': 'Selected shipped and production work',
    'projects.criticalTag': 'AA · Turn-based RPG',
    'projects.criticalText': 'Hardcore turn-based RPG for PC, PlayStation and Xbox. Gameplay, UI/meta systems, URP features, tooling, SDKs, build automation and QA delivery workflows.',
    'projects.forgeTag': 'Midcore · Client-server',
    'projects.forgeText': 'ECS and SignalR-based turn-based RPG with server-connected gameplay modules, chat, social systems, quests and cloud saves.',
    'projects.watchVideo': 'watch video',
    'projects.mahjongTag': 'Mobile · Puzzle',
    'projects.mahjongText': 'Tile-matching puzzle game with mobile-focused UI and production SDK integrations.',
    'projects.busyTag': 'Mobile · Casual',
    'projects.busyText': 'Puzzle and simulator projects with gameplay, UI, editor tooling and platform integrations.',
    'impact.eyebrow': 'Measured impact',
    'impact.title': 'Performance, delivery and automation improvements',
    'impact.loadTitle': 'Load time optimization',
    'impact.loadText': 'Reduced hub load time from 30s to 18s and mission load time from 47s to 23s by changing Addressables loading strategy and asset grouping.',
    'impact.memoryTitle': 'Memory and rendering fixes',
    'impact.memoryText': 'Reduced peak RAM usage by about 7.5 GB after fixing shader/rendering-related leaks and lifecycle issues.',
    'impact.fpsTitle': 'FPS drop root-cause analysis',
    'impact.fpsText': 'Fixed two major gameplay-related FPS drops where performance degraded from 100-120 FPS to 15-20 FPS.',
    'impact.deliveryTitle': 'Build delivery automation',
    'impact.deliveryText': 'Removed manual build handoffs through TeamCity -> Cloudflare R2 uploads, n8n delivery page and Discord notifications.',
    'impact.sizeTitle': 'Mobile build size reduction',
    'impact.sizeText': 'Reduced build size from 23 GB to 12 GB, cutting the package by approximately 48% through Addressables and asset auditing.',
    'impact.qaTitle': 'QA workflow support',
    'impact.qaText': 'Automated part of QA verification with AltTester UI tests and improved review consistency with AI-assisted checks.',
    'skills.eyebrow': 'Stack',
    'skills.title': 'Technical toolkit',
    'skills.archTitle': 'Unity & Architecture',
    'skills.archText': 'C#, .NET, Unity Engine, ECS, Entitas, LeoECS, OOP, SOLID, Clean Code, MVP, MVVM, GoF patterns, Zenject, VContainer.',
    'skills.gameplayTitle': 'Gameplay, UI & Content',
    'skills.gameplayText': 'uGUI, UI Toolkit, IMGUI, responsive layouts, Addressables, Asset Bundles, Spine, Animancer, DOTween, Odin Inspector.',
    'skills.performanceTitle': 'Performance & Rendering',
    'skills.performanceText': 'Unity Profiler, Memory Profiler, Frame Debugger, CPU/GPU/RAM profiling, draw call reduction, URP Renderer Features, highlight and outline effects.',
    'skills.networkTitle': 'Networking & Services',
    'skills.networkText': 'REST API, SignalR, WebSockets, Photon Fusion, Firebase, Adjust, Facebook SDK, Unity Analytics, Remote Config, Crashlytics, IAP, Localization.',
    'skills.cicdTitle': 'CI/CD & Automation',
    'skills.cicdText': 'Git, GitHub, GitLab, TeamCity, n8n, Unity build automation, Cloudflare R2, build distribution, Discord/GitHub integrations.',
    'skills.testingTitle': 'Testing & AI tooling',
    'skills.testingText': 'NUnit, TDD, AltTester, Claude Code, Cursor, Codex CLI, Gemini CLI, prompt engineering and AI-assisted code review.',
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
    'nav.work': 'Опыт',
    'nav.impact': 'Результаты',
    'nav.skills': 'Навыки',
    'nav.contact': 'Контакты',
    'hero.eyebrow': 'Senior Unity Developer · DevOps и автоматизация билдов',
    'hero.title': 'Проектирую игровые системы, Unity-архитектуру и релизные пайплайны для production-команд.',
    'hero.text': 'Unity-разработчик с 5+ годами коммерческого опыта в AA, midcore, hypercasual и casual-проектах. Работаю с gameplay-архитектурой, UI-системами, оптимизацией производительности, Unity tooling, CI/CD и AI-assisted процессами разработки.',
    'hero.impactCta': 'Смотреть результаты',
    'hero.contactCta': 'Связаться',
    'profile.aria': 'Краткое описание профиля',
    'profile.kicker': 'Текущий профиль',
    'profile.role': 'Senior Unity Developer',
    'profile.projectLabel': 'Проект',
    'profile.focusLabel': 'Направления',
    'profile.focus': 'Gameplay, UI, CI/CD, performance',
    'profile.automationLabel': 'CI/CD',
    'profile.automation': 'TeamCity, Cloudflare R2, n8n, Discord',
    'profile.locationLabel': 'Город',
    'profile.location': 'Баку, Азербайджан',
    'metrics.years': 'лет коммерческой Unity-разработки',
    'metrics.platforms': 'production-опыт для PC, PlayStation и Xbox',
    'metrics.size': 'сокращение размера билда с 23 ГБ до 12 ГБ',
    'metrics.delivery': 'TeamCity, R2, n8n и внутренние пайплайны доставки',
    'experience.eyebrow': 'Опыт',
    'experience.title': 'Профессиональный опыт',
    'experience.currentDate': 'Февраль 2025 - настоящее время',
    'experience.currentRole': 'Senior Unity Developer / DevOps & Build Automation',
    'experience.currentCompany': 'Rhinotales · Critical Shift - хардкорная пошаговая RPG для PC, PlayStation и Xbox',
    'experience.currentItem1': 'Участие в разработке gameplay-, UI- и meta-систем для крупного пошагового RPG-проекта.',
    'experience.currentItem2': 'Рефакторинг legacy UI-кода, улучшение lifecycle-логики экранов и устранение архитектурных проблем.',
    'experience.currentItem3': 'Реализация URP Renderer Features, включая подсветку объектов и outline-эффекты.',
    'experience.currentItem4': 'Настройка Unity CI/CD на базе TeamCity: публикация артефактов в Cloudflare R2, доставка билдов для QA и уведомления в Discord.',
    'experience.currentItem5': 'Разработка внутренних n8n-процессов для дистрибуции билдов и AI-assisted code review с интеграцией GitHub и проектной документации.',
    'experience.previousDate': 'Январь 2021 - февраль 2025',
    'experience.previousRole': 'Unity Developer',
    'experience.previousCompany': 'GameFlinker / FlinkStudio · midcore и casual mobile-проекты',
    'experience.previousItem1': 'Разработка основных gameplay-систем, MVP-based UI и клиент-серверных модулей.',
    'experience.previousItem2': 'Реализация real-time чата, социальных функций, cloud saves, лидербордов и квестовых систем через REST API и SignalR.',
    'experience.previousItem3': 'Проектирование обобщенной асинхронной state-machine архитектуры для инфраструктурных и UI-flow процессов.',
    'experience.previousItem4': 'Интеграция Firebase, Adjust, Facebook SDK, Unity Analytics, IAP и Localization.',
    'projects.eyebrow': 'Проекты',
    'projects.title': 'Избранные проекты в релизе и production',
    'projects.criticalTag': 'AA · Пошаговая RPG',
    'projects.criticalText': 'Хардкорная пошаговая RPG для PC, PlayStation и Xbox. Gameplay, UI/meta-системы, URP features, tooling, SDK, автоматизация сборок и доставка билдов для QA.',
    'projects.forgeTag': 'Midcore · Клиент-сервер',
    'projects.forgeText': 'Пошаговая RPG на ECS и SignalR: server-connected gameplay-модули, чат, социальные системы, квесты и cloud saves.',
    'projects.watchVideo': 'смотреть видео',
    'projects.mahjongTag': 'Mobile · Puzzle',
    'projects.mahjongText': 'Tile-matching puzzle с мобильным UI и production-интеграциями SDK.',
    'projects.busyTag': 'Mobile · Casual',
    'projects.busyText': 'Puzzle- и simulator-проекты: gameplay, UI, editor tooling и платформенные интеграции.',
    'impact.eyebrow': 'Результаты',
    'impact.title': 'Оптимизация, автоматизация и улучшение production-процессов',
    'impact.loadTitle': 'Оптимизация времени загрузки',
    'impact.loadText': 'Сократил загрузку хаба с 30 до 18 секунд, а загрузку миссии - с 47 до 23 секунд за счет переработки стратегии Addressables и группировки ассетов.',
    'impact.memoryTitle': 'Память и рендеринг',
    'impact.memoryText': 'Снизил пиковое потребление RAM примерно на 7,5 ГБ после исправления утечек и lifecycle-проблем, связанных с shader/rendering pipeline.',
    'impact.fpsTitle': 'Анализ просадок FPS',
    'impact.fpsText': 'Нашел и исправил две крупные gameplay-related причины просадок, из-за которых FPS падал со 100-120 до 15-20.',
    'impact.deliveryTitle': 'Автоматизация доставки билдов',
    'impact.deliveryText': 'Заменил ручную передачу билдов пайплайном TeamCity -> Cloudflare R2 -> n8n delivery page -> Discord notifications.',
    'impact.sizeTitle': 'Сокращение размера мобильного билда',
    'impact.sizeText': 'Сократил размер билда с 23 ГБ до 12 ГБ, то есть примерно на 48%, за счет Addressables и системного аудита ассетов.',
    'impact.qaTitle': 'QA automation',
    'impact.qaText': 'Автоматизировал часть QA-проверок через AltTester UI tests и повысил стабильность ревью с помощью AI-assisted checks.',
    'skills.eyebrow': 'Стек',
    'skills.title': 'Технический стек',
    'skills.archTitle': 'Unity и архитектура',
    'skills.archText': 'C#, .NET, Unity Engine, ECS, Entitas, LeoECS, OOP, SOLID, Clean Code, MVP, MVVM, GoF patterns, Zenject, VContainer.',
    'skills.gameplayTitle': 'Gameplay, UI и content',
    'skills.gameplayText': 'uGUI, UI Toolkit, IMGUI, responsive layouts, Addressables, Asset Bundles, Spine, Animancer, DOTween, Odin Inspector.',
    'skills.performanceTitle': 'Производительность и рендеринг',
    'skills.performanceText': 'Unity Profiler, Memory Profiler, Frame Debugger, CPU/GPU/RAM profiling, draw call reduction, URP Renderer Features, highlight и outline effects.',
    'skills.networkTitle': 'Networking и сервисы',
    'skills.networkText': 'REST API, SignalR, WebSockets, Photon Fusion, Firebase, Adjust, Facebook SDK, Unity Analytics, Remote Config, Crashlytics, IAP, Localization.',
    'skills.cicdTitle': 'CI/CD и автоматизация',
    'skills.cicdText': 'Git, GitHub, GitLab, TeamCity, n8n, автоматизация Unity-сборок, Cloudflare R2, дистрибуция билдов, интеграции Discord/GitHub.',
    'skills.testingTitle': 'Testing и AI tooling',
    'skills.testingText': 'NUnit, TDD, AltTester, Claude Code, Cursor, Codex CLI, Gemini CLI, prompt engineering и AI-assisted code review.',
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
  const fullSideSpace = Math.max((viewportWidth - 1160) / 2, 16);
  const startTop = isMobile ? 10 : 18;
  const startRadius = isMobile ? 26 : 999;
  const startActionGap = isMobile ? 10 : 12;

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
  setPx('--actions-width', lerp(isMobile ? viewportWidth - 32 : 474, viewportWidth));
  setPx('--nav-gap', lerp(6, 3));
  setPx('--nav-padding-y', lerp(10, 7));
  setPx('--nav-padding-x', lerp(14, 12));
  setPx('--nav-padding-x-mobile', lerp(8, 4));
  setPx('--nav-width', lerp(isMobile ? viewportWidth - 32 : 376, Math.min(viewportWidth, 620)));
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
