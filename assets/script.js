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
    'metrics.size': 'build size reduction through Addressables',
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
    'impact.sizeText': 'Reduced build size from 700 MB to 190 MB through Addressables remote delivery and systematic asset auditing.',
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
    'metrics.size': 'сокращение размера билда за счет Addressables',
    'metrics.delivery': 'TeamCity, R2, n8n и внутренние пайплайны доставки',
    'experience.eyebrow': 'Опыт',
    'experience.title': 'Работа в проектах',
    'experience.currentDate': 'Февраль 2025 - настоящее время',
    'experience.currentRole': 'Senior Unity Developer / DevOps & Build Automation',
    'experience.currentCompany': 'Rhinotales · Critical Shift - хардкорная пошаговая RPG для PC, PlayStation и Xbox',
    'experience.currentItem1': 'Разрабатываю gameplay-, UI- и meta-системы для крупной пошаговой RPG.',
    'experience.currentItem2': 'Привожу в порядок legacy UI-код: жизненный цикл экранов, зависимости и проблемные архитектурные участки.',
    'experience.currentItem3': 'Реализую URP Renderer Features, включая подсветку объектов и outline-эффекты.',
    'experience.currentItem4': 'Настроил Unity CI/CD на TeamCity: публикация артефактов в Cloudflare R2, выдача билдов QA и уведомления в Discord.',
    'experience.currentItem5': 'Собрал внутренние n8n-процессы для дистрибуции билдов и AI-assisted code review с привязкой к GitHub и проектной документации.',
    'experience.previousDate': 'Январь 2021 - февраль 2025',
    'experience.previousRole': 'Unity Developer',
    'experience.previousCompany': 'GameFlinker / FlinkStudio · midcore и casual mobile-проекты',
    'experience.previousItem1': 'Разрабатывал ключевые gameplay-системы, MVP-based UI и клиент-серверные модули.',
    'experience.previousItem2': 'Реализовал real-time чат, друзей, группы, cloud saves, лидерборды и квестовые системы через REST API и SignalR.',
    'experience.previousItem3': 'Проектировал обобщенную асинхронную state-machine архитектуру для инфраструктуры и UI-flow.',
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
    'impact.sizeText': 'Сократил размер билда с 700 МБ до 190 МБ с помощью remote delivery через Addressables и системного аудита ассетов.',
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
    'contact.title': 'Готов подключиться к Unity-проектам, где важны архитектура, производительность и надежный build flow.',
    'contact.text': 'Рассматриваю роли в Unity-разработке с фокусом на gameplay architecture, performance, tooling, CI/CD и автоматизацию production-процессов.',
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

function applyLanguage(language) {
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

languageButtons.forEach((button) => {
  button.addEventListener('click', () => applyLanguage(button.dataset.lang));
});

applyLanguage(getSavedLanguage() || 'en');
