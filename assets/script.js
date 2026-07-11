const translations = {
  en: {
    metaTitle: 'Kenan Ibragimov - Senior Unity Developer',
    metaDescription: 'Senior Unity Developer with 5+ years in gameplay architecture, performance optimization, Addressables, tooling and CI/CD for PC, console and mobile games.',
    metaShareDescription: 'Production Unity engineering: gameplay architecture, performance, tooling and delivery automation.',
    'aria.mainNav': 'Main navigation',
    'aria.languageSelector': 'Language selector',
    'aria.contactLinks': 'Contact links',
    'nav.about': 'About',
    'nav.impact': 'Impact',
    'nav.projects': 'Projects',
    'nav.skills': 'Skills',
    'hero.eyebrow': 'Senior Unity Developer',
    'hero.title': 'Kenan Ibragimov',
    'hero.text': 'Senior Unity Developer with 5+ years of commercial experience across AA, midcore, casual and mobile RPG projects. Areas of responsibility include gameplay architecture, UI and meta systems, rendering, performance engineering, SDK integrations, internal tools and build automation.',
    'hero.emailCta': 'Email',
    'hero.pdfCta': 'Download CV - EN',
    'hero.casesCta': 'View case studies',
    'impact.title': 'Selected production results',
    'impact.loadTitle': 'Faster scene loading',
    'impact.hubLabel': 'Hub',
    'impact.hubDelta': '40% faster',
    'impact.missionLabel': 'Mission',
    'impact.missionDelta': '51% faster',
    'impact.loadText': 'Restructured Addressables dependencies and deferred non-critical world initialization.',
    'impact.memoryTitle': 'Optimized RAM usage and reduced severe memory leaks',
    'impact.memoryDelta': 'Up to 40% lower',
    'impact.memoryText': 'Identified unintended object retention in legacy mission code and duplicated bundle content through Memory Profiler analysis; corrected lifecycle cleanup and ECS context disposal.',
    'impact.fpsMetric': 'Critical FPS drops eliminated',
    'impact.fpsTitle': 'Improved FPS performance',
    'impact.fpsScope': 'Ability simulation and enemy turns',
    'impact.fpsText': 'Eliminated duplicate ability evaluation, redundant pathfinding and temporary allocations; custom thread-safe pools replaced allocation-heavy collections.',
    'impact.sizeTitle': 'Reduced build size',
    'impact.sizeDelta': '48% smaller',
    'impact.sizeText': 'Removed duplicated Addressables dependencies, relocated bootstrap content and eliminated unnecessary shader resources following build-report analysis.',
    'impact.deliveryMetric': 'Automated CI/CD pipeline',
    'impact.deliveryTitle': 'Automated build delivery',
    'impact.deliveryText': 'Implemented a TeamCity-to-Cloudflare R2 delivery pipeline with n8n-generated download pages and Discord notifications, replacing manual archive publication and link management.',
    'cases.eyebrow': 'Selected case studies',
    'cases.title': 'Implementation details',
    'cases.intro': 'Results were measured on production builds using Unity Profiler, Memory Profiler snapshots and Addressables Build Report.',
    'cases.problem': 'Problem',
    'cases.solution': 'Solution',
    'cases.result': 'Result',
    'cases.loadingLabel': 'Loading and Addressables',
    'cases.loadingTitle': 'Reduced scene dependencies and up-front world creation',
    'cases.loadingProblem': 'Hub and mission loads pulled oversized dependency sets while enemies, loot and interactable objects were all created before the player needed them.',
    'cases.loadingSolution': 'Separated scene-owned content from shared assets, audited bundle dependencies and deferred world-object creation according to distance from the player.',
    'cases.loadingResult': 'Hub loading dropped from 30s to 18s; mission loading from 47s to 23s.',
    'cases.memoryLabel': 'Memory lifecycle',
    'cases.memoryTitle': 'Eliminated unintended mission retention and duplicated content',
    'cases.memoryProblem': 'Legacy mission scripts remained reachable through static events, closures and singleton services; the undisposed ECS context retained the full mission graph. Bundles also duplicated shaders and assets.',
    'cases.memorySolution': 'Used Memory Profiler snapshots to trace retention paths, refactored lifecycle cleanup and subscriptions, disposed the mission context and removed duplicated bundle content.',
    'cases.memoryResult': 'Menu memory fell from 3-4 GB to about 1.8 GB, hub from 7-8 GB to 4-4.5 GB, missions from 10-12 GB to 6-8 GB.',
    'cases.performanceLabel': 'Combat performance',
    'cases.performanceTitle': 'Removed duplicate combat evaluation and pathfinding work',
    'cases.performanceProblem': 'Ability simulation repeated the same evaluation and allocations; enemy turns repeatedly recalculated abilities and pathfinding, producing severe frame stalls.',
    'cases.performanceSolution': 'Removed duplicate evaluation passes and redundant path searches, then replaced allocation-heavy temporary collections with custom thread-safe pools.',
    'cases.performanceResult': 'Ability simulation no longer collapsed from about 110 to 15 FPS; enemy turns no longer fell from 80-100 to 1-5 FPS.',
    'about.eyebrow': 'About',
    'about.title': 'Professional profile',
    'about.text1': 'Experience covers the complete delivery cycle for complex Unity systems: diagnosis, architecture, implementation, profiling and deployment. Technical scope includes gameplay, UI and meta systems, rendering, client-server features, SDK integrations, internal tools and CI/CD.',
    'about.text2': 'Primary competencies include stabilization of legacy systems, performance analysis, maintainable feature architecture and automation of build and distribution workflows.',
    'projects.eyebrow': 'Projects',
    'projects.title': 'Selected projects and technology stacks',
    'projects.criticalTag': 'AA tactical RPG',
    'projects.criticalText': 'AA tactical RPG for Windows PC, Steam Deck and Xbox. Scope included gameplay, UI and meta systems, URP rendering features, SDK integrations, build automation and distribution.',
    'projects.contributionTitle': 'My contribution',
    'projects.criticalContribution': 'Implemented gameplay and UI/meta systems, optimized performance and Addressables usage, developed URP features and automated build delivery.',
    'projects.forgeTag': 'Midcore RPG',
    'projects.forgeText': 'Turn-based mobile RPG with server-connected gameplay modules, chat, social features, quests, leaderboards and cloud saves.',
    'projects.forgeContribution': 'Implemented gameplay architecture, MVP-based UI and real-time social features using REST API and SignalR.',
    'projects.watchVideo': 'Watch video',
    'projects.playCritical': 'Watch video: Critical Shift trailer',
    'projects.playForge': 'Watch video: Forge of Heroes gameplay',
    'projects.playMahjong': 'Watch video: Mahjong Solitaire Classic gameplay',
    'projects.playBusyBrain': 'Watch video: BusyBrain gameplay',
    'projects.playStore': 'Watch video: Store Mania gameplay',
    'projects.mahjongTag': 'Mobile puzzle',
    'projects.mahjongText': 'Mobile puzzle title. Scope included UI flows, SDK integrations, localization and release preparation.',
    'projects.mahjongContribution': 'Implemented gameplay and UI flows, integrated localization, analytics and monetization SDKs, and prepared release builds.',
    'projects.busyBrainTag': 'Mobile casual',
    'projects.busyBrainText': 'Casual mobile title with gameplay systems, UI flows and platform integrations.',
    'projects.busyBrainContribution': 'Implemented gameplay and responsive UI flows, integrated platform SDKs and resolved release-stage defects.',
    'projects.storeTag': 'Mobile simulator',
    'projects.storeText': 'Mobile simulation title with gameplay loops, UI systems and platform integrations.',
    'projects.storeContribution': 'Implemented gameplay loops and UI systems, integrated platform services and prepared release builds.',
    'skills.eyebrow': 'Technical skills',
    'skills.title': 'Technology stack and technical competencies',
    'skills.foundationTitle': 'Unity & C#',
    'skills.archTitle': 'Architecture & Gameplay',
    'skills.contentTitle': 'UI, Content & Rendering',
    'skills.archText': 'C#, .NET, Unity Engine, ECS, Entitas, LeoECS, MVP/MVVM, Zenject, VContainer, uGUI, UI Toolkit, Addressables, Spine, Animancer and DOTween.',
    'skills.gameplayTitle': 'Gameplay and UI systems',
    'skills.gameplayText': 'uGUI, UI Toolkit, IMGUI, responsive layouts, Addressables, Asset Bundles, Spine, Animancer, DOTween, Odin Inspector.',
    'skills.performanceTitle': 'Performance & Profiling',
    'skills.performanceText': 'Unity Profiler, Memory Profiler, Frame Debugger, CPU/GPU/RAM profiling, draw call reduction, URP Renderer Features, highlight and outline effects.',
    'skills.networkTitle': 'Networking & SDKs',
    'skills.networkText': 'REST API, SignalR, WebSockets, Photon Fusion, Firebase, Adjust, Facebook SDK, Unity Analytics, Remote Config, Crashlytics, IAP, Localization.',
    'skills.deliveryTitle': 'Delivery, Testing & Tooling',
    'skills.cicdText': 'Git, GitHub, GitLab, TeamCity, n8n, Unity build automation, Cloudflare R2, NUnit, AltTester and AI-assisted code review workflows.',
    'skills.testingTitle': 'Testing and AI tooling',
    'skills.testingText': 'NUnit, TDD, AltTester, Claude Code, Cursor, Codex CLI, Gemini CLI, prompt engineering and AI-assisted code review.',
    'experience.eyebrow': 'Experience',
    'experience.title': 'Professional experience',
    'experience.currentDate': 'Feb 2025 - Present',
    'experience.currentRole': 'Senior Unity Developer / Build Automation',
    'experience.currentCompany': 'Rhinotales · Critical Shift - AA tactical RPG for Windows PC, Steam Deck and Xbox',
    'experience.currentItem1': 'Responsible for gameplay, UI and meta systems, performance, rendering features and build delivery.',
    'experience.currentItem2': 'Stabilized legacy UI and feature architecture by reducing lifecycle risks, hidden dependencies and maintenance cost.',
    'experience.currentItem3': 'Delivered URP Renderer Features for gameplay-facing visual systems, including object highlight and outline pipelines.',
    'experience.currentItem4': 'Built a TeamCity-to-Cloudflare R2 delivery pipeline with n8n download pages and Discord notifications, replacing manual archive uploads and link sharing.',
    'experience.currentItem5': 'Introduced n8n and AI-assisted workflows for build distribution, code review and project documentation.',
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
    'contact.title': 'Contact and availability',
    'contact.text': 'Available for Senior Unity Developer roles involving gameplay architecture, performance engineering, tooling and CI/CD.',
    'footer.back': '↑ Back to top'
  },
  ru: {
    metaTitle: 'Кенан Ибрагимов - Senior Unity Developer',
    metaDescription: 'Портфолио Кенана Ибрагимова: Unity-разработка, игровая архитектура, оптимизация и автоматизация сборок.',
    metaShareDescription: 'Production Unity-разработка: gameplay-архитектура, производительность, инструменты и автоматизация доставки.',
    'aria.mainNav': 'Основная навигация',
    'aria.languageSelector': 'Выбор языка',
    'aria.contactLinks': 'Ссылки для связи',
    'nav.about': 'Обо мне',
    'nav.impact': 'Результаты',
    'nav.projects': 'Проекты',
    'nav.skills': 'Навыки',
    'hero.eyebrow': 'Senior Unity Developer',
    'hero.title': 'Kenan Ibragimov',
    'hero.text': 'Senior Unity Developer с 5+ годами коммерческого опыта в AA, midcore, casual и mobile RPG-проектах. Зоны ответственности: gameplay-архитектура, UI и meta-системы, рендеринг, производительность, SDK-интеграции, внутренние инструменты и автоматизация сборок.',
    'hero.emailCta': 'Почта',
    'hero.pdfCta': 'Скачать CV - EN',
    'hero.casesCta': 'Посмотреть кейсы',
    'impact.title': 'Основные результаты',
    'impact.loadTitle': 'Ускоренная загрузка сцен',
    'impact.hubLabel': 'Хаб',
    'impact.hubDelta': 'На 40% быстрее',
    'impact.missionLabel': 'Миссия',
    'impact.missionDelta': 'На 51% быстрее',
    'impact.loadText': 'Переработаны зависимости Addressables и отложена инициализация второстепенных объектов мира.',
    'impact.memoryTitle': 'Оптимизация RAM и устранение критических утечек памяти',
    'impact.memoryDelta': 'Снижение до 40%',
    'impact.memoryText': 'По данным Memory Profiler выявлены непреднамеренное удержание объектов в legacy-коде и дубликаты контента в бандлах; исправлены очистка жизненного цикла и уничтожение ECS-контекста.',
    'impact.fpsMetric': 'Критические просадки FPS устранены',
    'impact.fpsTitle': 'Повышенная производительность FPS',
    'impact.fpsScope': 'Симуляция абилок и ходы противника',
    'impact.fpsText': 'Устранены повторные расчёты абилок, избыточный поиск пути и временные аллокации; временные коллекции заменены самописными потокобезопасными пулами.',
    'impact.sizeTitle': 'Уменьшенный размер билда',
    'impact.sizeDelta': 'На 48% меньше',
    'impact.sizeText': 'По результатам анализа build report удалены дубликаты зависимостей Addressables, перенесён bootstrap-контент и исключены неиспользуемые shader resources.',
    'impact.deliveryMetric': 'Автоматизированный CI/CD pipeline',
    'impact.deliveryTitle': 'Автоматизированная доставка билдов',
    'impact.deliveryText': 'Реализован пайплайн из TeamCity в Cloudflare R2 со страницами загрузки n8n и уведомлениями Discord; ручная публикация архивов и управление ссылками исключены.',
    'cases.eyebrow': 'Избранные кейсы',
    'cases.title': 'Техническая реализация',
    'cases.intro': 'Результаты измерялись на production-билдах с помощью Unity Profiler, снимков Memory Profiler и Addressables Build Report.',
    'cases.problem': 'Проблема',
    'cases.solution': 'Решение',
    'cases.result': 'Результат',
    'cases.loadingLabel': 'Загрузка и Addressables',
    'cases.loadingTitle': 'Сократил зависимости сцен и начальную инициализацию мира',
    'cases.loadingProblem': 'Хаб и миссии подтягивали избыточные зависимости, а враги, лут и интерактивные объекты создавались до того, как становились нужны игроку.',
    'cases.loadingSolution': 'Отделил контент сцен от общих ресурсов, проверил зависимости бандлов и добавил отложенное создание объектов по расстоянию до игрока.',
    'cases.loadingResult': 'Загрузка хаба сократилась с 30 до 18 секунд, миссии - с 47 до 23 секунд.',
    'cases.memoryLabel': 'Жизненный цикл памяти',
    'cases.memoryTitle': 'Устранил непреднамеренное удержание миссий и дубликаты контента',
    'cases.memoryProblem': 'Legacy-скрипты миссий оставались достижимыми через статические события, замыкания и singleton-сервисы; неуничтоженный ECS-контекст удерживал весь граф миссии. В бандлах также дублировались шейдеры и ассеты.',
    'cases.memorySolution': 'По снимкам Memory Profiler отследил пути удержания, переработал очистку жизненного цикла и отписки, корректно уничтожил контекст миссии и удалил дубли контента в бандлах.',
    'cases.memoryResult': 'Меню: 3-4 ГБ до примерно 1,8 ГБ; хаб: 7-8 до 4-4,5 ГБ; миссии: 10-12 до 6-8 ГБ.',
    'cases.performanceLabel': 'Производительность боя',
    'cases.performanceTitle': 'Убрал повторные расчёты боя и поиска пути',
    'cases.performanceProblem': 'Симуляция абилок повторяла одни и те же расчёты и аллокации, а во время хода противника заново пересчитывались абилки и поиск пути, вызывая критические просадки.',
    'cases.performanceSolution': 'Убрал дублирующиеся проходы и лишние поиски пути, а временные коллекции заменил самописными потокобезопасными пулами.',
    'cases.performanceResult': 'Симуляция абилок перестала падать примерно со 110 до 15 FPS, а ходы противника - с 80-100 до 1-5 FPS.',
    'about.eyebrow': 'Обо мне',
    'about.title': 'Профессиональный профиль',
    'about.text1': 'Опыт охватывает полный цикл разработки сложных Unity-систем: диагностику, проектирование, реализацию, профилирование и поставку. Технические направления включают gameplay, UI и meta-системы, рендеринг, клиент-серверные функции, SDK-интеграции, внутренние инструменты и CI/CD.',
    'about.text2': 'Основные компетенции: стабилизация legacy-систем, анализ производительности, проектирование поддерживаемой архитектуры и автоматизация сборки и дистрибуции.',
    'projects.eyebrow': 'Проекты',
    'projects.title': 'Избранные проекты и технологические стеки',
    'projects.criticalTag': 'AA tactical RPG',
    'projects.criticalText': 'AA tactical RPG для Windows PC, Steam Deck и Xbox. Области работы: gameplay, UI и meta-системы, URP rendering features, SDK-интеграции, автоматизация сборок и дистрибуция.',
    'projects.contributionTitle': 'Мой вклад',
    'projects.criticalContribution': 'Реализовал gameplay и UI/meta-системы, выполнил оптимизацию производительности и Addressables, разработал URP-функции и автоматизировал доставку билдов.',
    'projects.forgeTag': 'Midcore RPG',
    'projects.forgeText': 'Пошаговая mobile RPG с server-connected gameplay modules, чатом, social features, quests, leaderboards и cloud saves.',
    'projects.forgeContribution': 'Реализовал gameplay-архитектуру, MVP-интерфейсы и social-функции реального времени с использованием REST API и SignalR.',
    'projects.watchVideo': 'Смотреть видео',
    'projects.playCritical': 'Смотреть видео: трейлер Critical Shift',
    'projects.playForge': 'Смотреть видео: Forge of Heroes',
    'projects.playMahjong': 'Смотреть видео: Mahjong Solitaire Classic',
    'projects.playBusyBrain': 'Смотреть видео: BusyBrain',
    'projects.playStore': 'Смотреть видео: Store Mania',
    'projects.mahjongTag': 'Mobile puzzle',
    'projects.mahjongText': 'Мобильная puzzle-игра. Области работы: UI flows, SDK-интеграции, локализация и подготовка релизов.',
    'projects.mahjongContribution': 'Реализовал gameplay и UI flows, интегрировал локализацию, аналитику и SDK монетизации, подготовил релизные сборки.',
    'projects.busyBrainTag': 'Mobile casual',
    'projects.busyBrainText': 'Мобильная casual-игра с gameplay-системами, UI flows и платформенными интеграциями.',
    'projects.busyBrainContribution': 'Реализовал gameplay и адаптивные UI flows, интегрировал платформенные SDK и устранил дефекты на этапе подготовки релизов.',
    'projects.storeTag': 'Mobile simulator',
    'projects.storeText': 'Мобильный симулятор с gameplay loops, UI-системами и платформенными интеграциями.',
    'projects.storeContribution': 'Реализовал gameplay loops и UI-системы, интегрировал платформенные сервисы и подготовил релизные сборки.',
    'skills.eyebrow': 'Технические навыки',
    'skills.title': 'Технологический стек и технические компетенции',
    'skills.foundationTitle': 'Unity и C#',
    'skills.archTitle': 'Архитектура и gameplay',
    'skills.contentTitle': 'UI, контент и рендеринг',
    'skills.archText': 'C#, .NET, Unity Engine, ECS, Entitas, LeoECS, MVP/MVVM, Zenject, VContainer, uGUI, UI Toolkit, Addressables, Spine, Animancer и DOTween.',
    'skills.gameplayTitle': 'Gameplay and UI systems',
    'skills.gameplayText': 'uGUI, UI Toolkit, IMGUI, responsive layouts, Addressables, Asset Bundles, Spine, Animancer, DOTween, Odin Inspector.',
    'skills.performanceTitle': 'Производительность и профилирование',
    'skills.performanceText': 'Unity Profiler, Memory Profiler, Frame Debugger, CPU/GPU/RAM profiling, draw call reduction, URP Renderer Features, highlight и outline effects.',
    'skills.networkTitle': 'Сеть и SDK',
    'skills.networkText': 'REST API, SignalR, WebSockets, Photon Fusion, Firebase, Adjust, Facebook SDK, Unity Analytics, Remote Config, Crashlytics, IAP, Localization.',
    'skills.deliveryTitle': 'Доставка, тестирование и tooling',
    'skills.cicdText': 'Git, GitHub, GitLab, TeamCity, n8n, Unity build automation, Cloudflare R2, NUnit, AltTester и AI-assisted code review workflows.',
    'skills.testingTitle': 'Testing and AI tooling',
    'skills.testingText': 'NUnit, TDD, AltTester, Claude Code, Cursor, Codex CLI, Gemini CLI, prompt engineering и AI-assisted code review.',
    'experience.eyebrow': 'Опыт',
    'experience.title': 'Профессиональный опыт',
    'experience.currentDate': 'Февраль 2025 - настоящее время',
    'experience.currentRole': 'Senior Unity Developer / Build Automation',
    'experience.currentCompany': 'Rhinotales · Critical Shift - AA tactical RPG для Windows PC, Steam Deck и Xbox',
    'experience.currentItem1': 'Отвечал за gameplay, UI и meta-системы, производительность, rendering features и доставку билдов.',
    'experience.currentItem2': 'Стабилизировал legacy UI и feature architecture, снижая lifecycle risks, hidden dependencies и стоимость поддержки.',
    'experience.currentItem3': 'Доставил URP Renderer Features для gameplay-facing visual systems, включая object highlight и outline pipelines.',
    'experience.currentItem4': 'Построил пайплайн доставки из TeamCity в Cloudflare R2 со страницами загрузки n8n и уведомлениями в Discord, заменив ручную загрузку архивов и передачу ссылок.',
    'experience.currentItem5': 'Внедрил n8n и AI-assisted workflows для дистрибуции билдов, code review и проектной документации.',
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
    'contact.title': 'Контакты и доступность',
    'contact.text': 'Рассматриваю позиции Senior Unity Developer с задачами в области gameplay-архитектуры, производительности, tooling и CI/CD.',
    'footer.back': '↑ Наверх'
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
const socialTitleMeta = document.querySelectorAll('meta[property="og:title"], meta[name="twitter:title"]');
const socialDescriptionMeta = document.querySelectorAll('meta[property="og:description"], meta[name="twitter:description"]');
const socialLocaleMeta = document.querySelector('meta[property="og:locale"]');
const videoPosters = document.querySelectorAll('.video-poster');
const navLinks = Array.from(document.querySelectorAll('.nav a'));
const navTargets = navLinks
  .map((link) => ({ link, target: document.querySelector(link.getAttribute('href')) }))
  .filter((item) => item.target);
const languageTransitionMs = 170;
const compactHeaderStart = 35;
const compactHeaderEnd = 210;
const mobileCompactEnter = 96;
const mobileCompactExit = 48;
const mobileExpandDistance = 28;
const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
let headerFrame = null;
let lastMobileScrollY = window.scrollY;
let mobileScrollDirection = 0;
let mobileScrollDistance = 0;

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
  socialTitleMeta.forEach((meta) => meta.setAttribute('content', dictionary.metaTitle));
  socialDescriptionMeta.forEach((meta) => meta.setAttribute('content', dictionary.metaShareDescription));
  socialLocaleMeta.setAttribute('content', language === 'ru' ? 'ru_RU' : 'en_US');

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

videoPosters.forEach((poster) => {
  poster.addEventListener('click', () => {
    const videoId = poster.dataset.videoId;
    const start = Number.parseInt(poster.dataset.videoStart || '0', 10);
    const params = new URLSearchParams({ autoplay: '1', rel: '0' });

    if (start > 0) {
      params.set('start', String(start));
    }

    const iframe = document.createElement('iframe');
    iframe.src = `https://www.youtube-nocookie.com/embed/${videoId}?${params.toString()}`;
    iframe.title = poster.dataset.videoTitle || 'Project video';
    iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
    iframe.allowFullscreen = true;
    poster.parentElement.replaceChildren(iframe);
  });
});

function updateActiveNav() {
  const activationLine = window.scrollY + window.innerHeight * 0.36;
  const firstTargetTop = navTargets[0]?.target.offsetTop ?? 0;
  let activeLink = null;

  if (activationLine >= firstTargetTop - 120) {
    navTargets.forEach(({ link, target }) => {
      if (target.offsetTop <= activationLine) {
        activeLink = link;
      }
    });
  }

  if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 8) {
    activeLink = navTargets[navTargets.length - 1]?.link ?? activeLink;
  }

  navLinks.forEach((link) => {
    link.classList.toggle('is-active', link === activeLink);
  });
}

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    window.setTimeout(updateActiveNav, 260);
    window.setTimeout(updateActiveNav, 720);
  });
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
    const currentScrollY = window.scrollY;
    const scrollDelta = currentScrollY - lastMobileScrollY;
    const scrollDirection = Math.sign(scrollDelta);

    document.body.classList.remove('is-header-collapsed');

    if (scrollDirection !== 0) {
      if (scrollDirection !== mobileScrollDirection) {
        mobileScrollDirection = scrollDirection;
        mobileScrollDistance = 0;
      }

      mobileScrollDistance += Math.abs(scrollDelta);
    }

    lastMobileScrollY = currentScrollY;

    if (!isMobileCompact && currentScrollY > mobileCompactEnter && scrollDirection > 0) {
      document.body.classList.add('is-mobile-header-compact');
      mobileScrollDistance = 0;
    }

    if (isMobileCompact && (
      currentScrollY < mobileCompactExit ||
      (scrollDirection < 0 && mobileScrollDistance >= mobileExpandDistance)
    )) {
      document.body.classList.remove('is-mobile-header-compact');
      mobileScrollDistance = 0;
    }

    return;
  }

  document.body.classList.remove('is-mobile-header-compact');
  lastMobileScrollY = window.scrollY;
  mobileScrollDirection = 0;
  mobileScrollDistance = 0;

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
  setPx('--actions-width', lerp(620, viewportWidth));
  setPx('--nav-gap', lerp(6, 3));
  setPx('--nav-padding-y', lerp(10, 7));
  setPx('--nav-padding-x', lerp(14, 12));
  setPx('--nav-padding-x-mobile', lerp(8, 4));
  setPx('--nav-width', lerp(480, Math.min(viewportWidth, 720)));
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
    updateAmbientBackground();
    updateHeaderState();
    updateActiveNav();
  });
}

function updateAmbientBackground() {
  if (reducedMotionQuery.matches || window.innerWidth <= 700) {
    document.documentElement.style.removeProperty('--ambient-primary-y');
    document.documentElement.style.removeProperty('--ambient-secondary-y');
    document.documentElement.style.removeProperty('--ambient-tertiary-x');
    document.documentElement.style.removeProperty('--ambient-tertiary-y');
    return;
  }

  const scroll = window.scrollY;
  document.documentElement.style.setProperty('--ambient-primary-y', `${(-scroll * 0.045).toFixed(1)}px`);
  document.documentElement.style.setProperty('--ambient-secondary-y', `${(scroll * 0.032).toFixed(1)}px`);
  document.documentElement.style.setProperty('--ambient-tertiary-x', `${(Math.sin(scroll * 0.0014) * 44).toFixed(1)}px`);
  document.documentElement.style.setProperty('--ambient-tertiary-y', `${(-scroll * 0.018).toFixed(1)}px`);
}

window.addEventListener('scroll', scheduleHeaderStateUpdate, { passive: true });
window.addEventListener('scrollend', updateActiveNav);
window.addEventListener('resize', scheduleHeaderStateUpdate);
reducedMotionQuery.addEventListener('change', scheduleHeaderStateUpdate);
updateAmbientBackground();
updateHeaderState();
updateActiveNav();

applyLanguage(getSavedLanguage() || 'en');
