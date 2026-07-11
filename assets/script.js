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
    'impact.title': 'Measured production improvements',
    'impact.loadTitle': 'Scene loading reduced by up to 51%',
    'impact.hubLabel': 'Hub',
    'impact.hubDelta': '40% faster',
    'impact.missionLabel': 'Mission',
    'impact.missionDelta': '51% faster',
    'impact.loadText': 'Restructured Addressables dependencies, separated scene-owned content and deferred the creation of non-critical world objects.',
    'impact.memoryTitle': 'RAM reduced by up to 40%',
    'impact.memoryDelta': 'Mission runtime memory',
    'impact.memoryText': 'Corrected mission lifecycle cleanup, removed retained object graphs and eliminated duplicated shaders and assets from bundles.',
    'impact.fpsTitle': 'Critical frame drops eliminated',
    'impact.fpsAbilityLabel': 'Ability simulation',
    'impact.fpsAbilityDelta': 'Baseline performance restored',
    'impact.fpsEnemyLabel': 'Enemy turns',
    'impact.fpsEnemyDelta': 'Severe turn stalls removed',
    'impact.fpsText': 'Eliminated duplicate ability evaluation, redundant pathfinding and temporary allocations; replaced allocation-heavy collections with custom thread-safe pools.',
    'impact.sizeTitle': 'Build size reduced by 48%',
    'impact.sizeDelta': 'Production package',
    'impact.sizeText': 'Audited Addressables bundles, removed duplicated assets and shaders, and separated bootstrap dependencies from initial build content.',
    'impact.deliveryMetric': 'Automatic upload, download pages and notifications',
    'impact.deliveryTitle': 'Build publishing and distribution automated',
    'impact.deliveryText': 'Connected TeamCity, Cloudflare R2, n8n and Discord into one pipeline for build publication, download-page generation and team notifications.',
    'cases.eyebrow': 'Selected case studies',
    'cases.title': 'How the production improvements were achieved',
    'cases.intro': 'Three production bottlenecks, the engineering changes applied and the measured results.',
    'cases.problem': 'Problem',
    'cases.solution': 'Solution',
    'cases.result': 'Result',
    'cases.loadingLabel': 'Loading and Addressables',
    'cases.loadingTitle': 'Reduced scene dependencies and up-front world creation',
    'cases.loadingProblem': 'Hub and mission loads pulled oversized dependency sets while enemies, loot and interactable objects were all created before the player needed them.',
    'cases.loadingSolution': 'Separated scene-owned content from shared resources, reorganized bundle dependencies and deferred object creation based on player distance.',
    'cases.loadingResult': 'Hub loading dropped from 30s to 18s; mission loading from 47s to 23s.',
    'cases.memoryLabel': 'Memory lifecycle',
    'cases.memoryTitle': 'Eliminated unintended mission retention and duplicated content',
    'cases.memoryProblem': 'Legacy mission scripts remained reachable through static events, closures and singleton services; the undisposed ECS context retained the full mission graph. Bundles also duplicated shaders and assets.',
    'cases.memorySolution': 'Traced retention paths with Memory Profiler, corrected subscriptions and lifecycle cleanup, disposed the mission context and removed duplicated shaders and assets from bundles.',
    'cases.memoryResult': 'Menu memory fell from 3-4 GB to about 1.8 GB, hub from 7-8 GB to 4-4.5 GB, missions from 10-12 GB to 6-8 GB.',
    'cases.performanceLabel': 'Combat performance',
    'cases.performanceTitle': 'Removed duplicate combat evaluation and pathfinding work',
    'cases.performanceProblem': 'Ability simulation repeated the same evaluation and allocations; enemy turns repeatedly recalculated abilities and pathfinding, producing severe frame stalls.',
    'cases.performanceSolution': 'Removed duplicate evaluation passes, optimized pathfinding by eliminating redundant searches, then replaced allocation-heavy temporary collections with custom thread-safe pools.',
    'cases.performanceResult': 'Ability simulation no longer collapsed from about 110 to 15 FPS; enemy turns no longer fell from 80-100 to 1-5 FPS.',
    'projects.eyebrow': 'Projects',
    'projects.title': 'Selected projects and technology stacks',
    'projects.criticalTag': 'AA tactical RPG',
    'projects.criticalText': 'AA tactical RPG for Windows PC, Steam Deck and Xbox. Scope included gameplay, UI and meta systems, URP rendering features, SDK integrations, build automation and distribution.',
    'projects.contributionTitle': 'My contribution',
    'projects.criticalContribution': 'Implemented gameplay and UI/meta systems, optimized performance and Addressables usage, developed URP features and automated build delivery.',
    'projects.forgeTag': 'Multiplayer midcore RPG',
    'projects.forgeText': 'Turn-based multiplayer mobile RPG with client-server gameplay, real-time chat, social systems, quests, leaderboards and cloud saves.',
    'projects.forgeContribution': 'Implemented gameplay architecture, MVP-based UI and multiplayer client-server systems using REST API, SignalR and WebSockets.',
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
    'skills.networkText': 'Multiplayer, REST API, SignalR, WebSockets, Photon Fusion, Firebase, Adjust, Facebook SDK, Unity Analytics, Remote Config, Crashlytics, IAP, Localization.',
    'skills.deliveryTitle': 'Delivery, Testing & Tooling',
    'skills.cicdText': 'Git, GitHub, GitLab, TeamCity, n8n, Unity build automation, Cloudflare R2, NUnit, AltTester and AI-assisted code review workflows.',
    'skills.testingTitle': 'Testing and AI tooling',
    'skills.testingText': 'NUnit, TDD, AltTester, Claude Code, Cursor, Codex CLI, Gemini CLI, prompt engineering and AI-assisted code review.',
    'experience.eyebrow': 'Experience',
    'experience.title': 'Professional experience',
    'experience.currentDate': 'Feb 2025 - Present',
    'experience.currentRole': 'Senior Unity Developer / Build Automation',
    'experience.currentCompany': 'Rhinotales · Critical Shift - AA tactical RPG for Windows PC, Steam Deck and Xbox',
    'experience.currentItem1': 'Develop gameplay, UI and meta systems for Critical Shift, an AA turn-based RPG for PC and consoles, within a 35-person production team.',
    'experience.currentItem2': 'Own performance investigation and stabilization across scene loading, memory usage, combat simulation and runtime lifecycle.',
    'experience.currentItem3': 'Refactor legacy UI and gameplay systems to remove hidden dependencies, lifecycle issues and maintenance risks.',
    'experience.currentItem4': 'Develop internal Unity tools and URP rendering features supporting designers, debugging and gameplay presentation.',
    'experience.currentItem5': 'Automate Unity builds, publishing, team distribution, QA, AI-assisted code review and ClickUp workflows through TeamCity, Cloudflare R2, n8n, Discord and GitHub.',
    'experience.previousDate': 'Jan 2021 - Feb 2025',
    'experience.previousRole': 'Unity Developer',
    'experience.previousCompany': 'GameFlinker / FlinkStudio · Midcore multiplayer and casual mobile projects',
    'experience.previousItem1': 'Built the gameplay architecture and MVP-based UI for Forge of Heroes, a turn-based multiplayer mobile RPG.',
    'experience.previousItem2': 'Implemented real-time chat, friends, groups, cloud saves, leaderboards and quest systems through REST API, SignalR and WebSockets.',
    'experience.previousItem3': 'Designed reusable asynchronous state-machine flows for application infrastructure, UI navigation and network-connected features.',
    'experience.previousItem4': 'Developed Unity editor tools and integrated analytics and platform SDKs across multiple production projects.',
    'experience.previousItem5': 'Reduced build size from 700 MB to 190 MB, scene loading from 30s to 12s and improved RAM, CPU and GPU usage through asset auditing and runtime optimization.',
    'education.eyebrow': 'Education',
    'education.title': 'Background',
    'education.collegeTitle': 'Volzhsky Polytechnic Technical College',
    'education.collegeText': 'Mathematical Support and Administration of Information Systems · 2020 - 2024',
    'education.ksTitle': 'KSyndicate - Unity Development',
    'education.ksText': 'Specialization Courses: ECS & Architecture · 2024 - 2025',
    'education.languagesTitle': 'Languages',
    'education.languagesText': 'English B2 · Russian Native · Azerbaijani Native / Fluent',
    'contact.eyebrow': 'Contact',
    'contact.title': 'Contact me',
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
    'impact.title': 'Измеримые улучшения в production',
    'impact.loadTitle': 'Загрузка сцен ускорена до 51%',
    'impact.hubLabel': 'Хаб',
    'impact.hubDelta': 'На 40% быстрее',
    'impact.missionLabel': 'Миссия',
    'impact.missionDelta': 'На 51% быстрее',
    'impact.loadText': 'Перестроены зависимости Addressables, отделён контент сцен и отложено создание второстепенных объектов мира.',
    'impact.memoryTitle': 'Использование RAM снижено до 40%',
    'impact.memoryDelta': 'Память во время миссий',
    'impact.memoryText': 'Исправлена очистка жизненного цикла миссий, устранено удержание графов объектов и удалены дубликаты шейдеров и ассетов из бандлов.',
    'impact.fpsTitle': 'Критические просадки кадров устранены',
    'impact.fpsAbilityLabel': 'Симуляция абилок',
    'impact.fpsAbilityDelta': 'Восстановлена базовая производительность',
    'impact.fpsEnemyLabel': 'Ходы противника',
    'impact.fpsEnemyDelta': 'Устранены критические зависания хода',
    'impact.fpsText': 'Устранены повторные расчёты абилок, избыточный поиск пути и временные аллокации; тяжёлые временные коллекции заменены самописными потокобезопасными пулами.',
    'impact.sizeTitle': 'Размер билда снижен на 48%',
    'impact.sizeDelta': 'Production package',
    'impact.sizeText': 'Проведён аудит Addressables-бандлов, удалены дубликаты ассетов и шейдеров, а зависимости bootstrap отделены от начального контента билда.',
    'impact.deliveryMetric': 'Автоматическая загрузка, страницы скачивания и уведомления',
    'impact.deliveryTitle': 'Публикация и дистрибуция билдов автоматизированы',
    'impact.deliveryText': 'TeamCity, Cloudflare R2, n8n и Discord объединены в один pipeline публикации билдов, генерации страниц загрузки и уведомлений команды.',
    'cases.eyebrow': 'Избранные кейсы',
    'cases.title': 'Как были достигнуты улучшения в production',
    'cases.intro': 'Три production-проблемы, внесённые инженерные изменения и измеримые результаты.',
    'cases.problem': 'Проблема',
    'cases.solution': 'Решение',
    'cases.result': 'Результат',
    'cases.loadingLabel': 'Загрузка и Addressables',
    'cases.loadingTitle': 'Сократил зависимости сцен и начальную инициализацию мира',
    'cases.loadingProblem': 'Хаб и миссии подтягивали избыточные зависимости, а враги, лут и интерактивные объекты создавались до того, как становились нужны игроку.',
    'cases.loadingSolution': 'Отделил контент сцен от общих ресурсов, реорганизовал зависимости бандлов и добавил отложенное создание объектов по расстоянию до игрока.',
    'cases.loadingResult': 'Загрузка хаба сократилась с 30 до 18 секунд, миссии - с 47 до 23 секунд.',
    'cases.memoryLabel': 'Жизненный цикл памяти',
    'cases.memoryTitle': 'Устранил непреднамеренное удержание миссий и дубликаты контента',
    'cases.memoryProblem': 'Legacy-скрипты миссий оставались достижимыми через статические события, замыкания и singleton-сервисы; неуничтоженный ECS-контекст удерживал весь граф миссии. В бандлах также дублировались шейдеры и ассеты.',
    'cases.memorySolution': 'С помощью Memory Profiler отследил пути удержания, исправил отписки и очистку жизненного цикла, уничтожил контекст миссии и удалил дубликаты шейдеров и ассетов из бандлов.',
    'cases.memoryResult': 'Меню: 3-4 ГБ до примерно 1,8 ГБ; хаб: 7-8 до 4-4,5 ГБ; миссии: 10-12 до 6-8 ГБ.',
    'cases.performanceLabel': 'Производительность боя',
    'cases.performanceTitle': 'Убрал повторные расчёты боя и поиска пути',
    'cases.performanceProblem': 'Симуляция абилок повторяла одни и те же расчёты и аллокации, а во время хода противника заново пересчитывались абилки и поиск пути, вызывая критические просадки.',
    'cases.performanceSolution': 'Убрал дублирующиеся проходы, оптимизировал pathfinding за счёт устранения повторных поисков и заменил тяжёлые временные коллекции самописными потокобезопасными пулами.',
    'cases.performanceResult': 'Симуляция абилок перестала падать примерно со 110 до 15 FPS, а ходы противника - с 80-100 до 1-5 FPS.',
    'projects.eyebrow': 'Проекты',
    'projects.title': 'Избранные проекты и технологические стеки',
    'projects.criticalTag': 'AA tactical RPG',
    'projects.criticalText': 'AA tactical RPG для Windows PC, Steam Deck и Xbox. Области работы: gameplay, UI и meta-системы, URP rendering features, SDK-интеграции, автоматизация сборок и дистрибуция.',
    'projects.contributionTitle': 'Мой вклад',
    'projects.criticalContribution': 'Реализовал gameplay и UI/meta-системы, выполнил оптимизацию производительности и Addressables, разработал URP-функции и автоматизировал доставку билдов.',
    'projects.forgeTag': 'Multiplayer midcore RPG',
    'projects.forgeText': 'Пошаговая multiplayer mobile RPG с клиент-серверным gameplay, real-time chat, социальными системами, quests, leaderboards и cloud saves.',
    'projects.forgeContribution': 'Реализовал gameplay-архитектуру, MVP-интерфейсы и multiplayer клиент-серверные системы с использованием REST API, SignalR и WebSockets.',
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
    'skills.networkText': 'Multiplayer, REST API, SignalR, WebSockets, Photon Fusion, Firebase, Adjust, Facebook SDK, Unity Analytics, Remote Config, Crashlytics, IAP, Localization.',
    'skills.deliveryTitle': 'Доставка, тестирование и tooling',
    'skills.cicdText': 'Git, GitHub, GitLab, TeamCity, n8n, Unity build automation, Cloudflare R2, NUnit, AltTester и AI-assisted code review workflows.',
    'skills.testingTitle': 'Testing and AI tooling',
    'skills.testingText': 'NUnit, TDD, AltTester, Claude Code, Cursor, Codex CLI, Gemini CLI, prompt engineering и AI-assisted code review.',
    'experience.eyebrow': 'Опыт',
    'experience.title': 'Профессиональный опыт',
    'experience.currentDate': 'Февраль 2025 - настоящее время',
    'experience.currentRole': 'Senior Unity Developer / Build Automation',
    'experience.currentCompany': 'Rhinotales · Critical Shift - AA tactical RPG для Windows PC, Steam Deck и Xbox',
    'experience.currentItem1': 'Разрабатывает gameplay, UI и meta-системы для Critical Shift, AA turn-based RPG для PC и консолей, в production-команде из 35 человек.',
    'experience.currentItem2': 'Отвечает за исследование и стабилизацию производительности загрузки сцен, использования памяти, симуляции боя и runtime lifecycle.',
    'experience.currentItem3': 'Рефакторит legacy UI и gameplay-системы, устраняя скрытые зависимости, lifecycle-проблемы и риски поддержки.',
    'experience.currentItem4': 'Разрабатывает внутренние Unity-инструменты и URP rendering features для дизайнеров, отладки и gameplay presentation.',
    'experience.currentItem5': 'Автоматизирует Unity-сборки, публикацию, дистрибуцию, QA, AI-assisted code review и ClickUp workflows через TeamCity, Cloudflare R2, n8n, Discord и GitHub.',
    'experience.previousDate': 'Январь 2021 - февраль 2025',
    'experience.previousRole': 'Unity Developer',
    'experience.previousCompany': 'GameFlinker / FlinkStudio · multiplayer midcore и casual mobile-проекты',
    'experience.previousItem1': 'Построил gameplay-архитектуру и MVP-based UI для Forge of Heroes, пошаговой multiplayer mobile RPG.',
    'experience.previousItem2': 'Реализовал real-time chat, friends, groups, cloud saves, leaderboards и quest systems через REST API, SignalR и WebSockets.',
    'experience.previousItem3': 'Спроектировал переиспользуемые асинхронные state-machine flows для инфраструктуры приложения, UI navigation и сетевых функций.',
    'experience.previousItem4': 'Разрабатывал Unity editor tools и интегрировал аналитику и platform SDKs в нескольких production-проектах.',
    'experience.previousItem5': 'Сократил размер билда с 700 до 190 МБ, загрузку сцен с 30 до 12 секунд и улучшил использование RAM, CPU и GPU за счёт аудита ассетов и runtime-оптимизации.',
    'education.eyebrow': 'Образование',
    'education.title': 'Образование и языки',
    'education.collegeTitle': 'Волжский политехнический техникум',
    'education.collegeText': 'Математическое обеспечение и администрирование информационных систем · 2020 - 2024',
    'education.ksTitle': 'KSyndicate - Unity Development',
    'education.ksText': 'Профильные курсы: ECS и архитектура · 2024 - 2025',
    'education.languagesTitle': 'Языки',
    'education.languagesText': 'Английский B2 · русский родной · азербайджанский родной / свободный',
    'contact.eyebrow': 'Контакты',
    'contact.title': 'Связаться со мной',
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
