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
    'impact.title': 'RECENT ACHIEVEMENTS',
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
    'cases.title': 'TECHNICAL CASE STUDIES',
    'cases.problem': 'Problem',
    'cases.solution': 'Engineering changes',
    'cases.result': 'Result',
    'cases.loadingTitle': 'Scene loading optimization',
    'cases.loadingProblem': 'Hub and mission loads pulled oversized dependency sets while enemies, loot and interactable objects were all created before the player needed them.',
    'cases.loadingSolution': 'Separated scene content from shared resources, reorganized Addressables dependencies and configured independent asset packing. Deferred non-critical object creation until it was required near the player.',
    'cases.loadingResult': 'Hub loading dropped from 30s to 18s; mission loading from 47s to 23s.',
    'cases.memoryTitle': 'Memory leak removal',
    'cases.memoryProblem': 'Legacy mission scripts remained reachable through static events, closures and singleton services; the undisposed ECS context retained the full mission graph. Bundles also duplicated shaders and assets.',
    'cases.memorySolution': 'Traced retention paths with Memory Profiler, corrected subscriptions and lifecycle cleanup, disposed the mission context and removed duplicated shaders and assets from bundles.',
    'cases.memoryResult': 'Menu memory fell from 3-4 GB to about 1.8 GB, hub from 7-8 GB to 4-4.5 GB, missions from 10-12 GB to 6-8 GB.',
    'cases.performanceTitle': 'Combat system FPS stabilization',
    'cases.performanceProblem': 'Ability simulation repeated the same evaluation and allocations; enemy turns repeatedly recalculated abilities and pathfinding, producing severe frame stalls.',
    'cases.performanceSolution': 'Removed duplicate calculations, reduced pathfinding calls, optimized pathfinding and replaced temporary collections with the project\'s custom thread-safe pools.',
    'cases.performanceResult': 'Ability simulation no longer collapsed from about 110 to 15 FPS; enemy turns no longer fell from 80-100 to 1-5 FPS.',
    'projects.title': 'PROJECTS',
    'projects.criticalTag': 'AA tactical RPG',
    'projects.criticalText': 'AA tactical turn-based RPG for Windows PC, Steam Deck and Xbox.',
    'projects.contributionTitle': 'My contribution',
    'projects.criticalContribution': 'Implemented gameplay and UI/meta systems, optimized performance and Addressables usage, developed URP features and automated build delivery.',
    'projects.forgeTag': 'Multiplayer midcore RPG',
    'projects.forgeText': 'Turn-based multiplayer mobile RPG built around tactical combat, client-server progression, real-time chat, social systems, quests, leaderboards and cloud saves.',
    'projects.forgeContribution': 'Implemented gameplay architecture, MVP-based UI and multiplayer client-server systems using REST API and SignalR.',
    'projects.watchVideo': 'Watch video',
    'projects.playCritical': 'Watch video: Critical Shift trailer',
    'projects.playForge': 'Watch video: Forge of Heroes gameplay',
    'projects.playMahjong': 'Watch video: Mahjong Solitaire Classic gameplay',
    'projects.playBusyBrain': 'Watch video: BusyBrain gameplay',
    'projects.playStore': 'Watch video: Store Mania gameplay',
    'projects.mahjongTag': 'Mobile puzzle',
    'projects.mahjongText': 'Mobile tile-matching puzzle game based on the classic Mahjong Solitaire format.',
    'projects.mahjongContribution': 'Implemented gameplay and UI flows, integrated localization, analytics and monetization SDKs, and prepared release builds.',
    'projects.busyBrainTag': 'Mobile casual',
    'projects.busyBrainText': 'Casual mobile puzzle game designed for short play sessions.',
    'projects.busyBrainContribution': 'Implemented gameplay and responsive UI flows, integrated platform SDKs and resolved release-stage defects.',
    'projects.storeTag': 'Mobile simulator',
    'projects.storeText': 'Mobile store-management simulator focused on developing and operating a retail business.',
    'projects.storeContribution': 'Implemented gameplay loops and UI systems, integrated platform services and prepared release builds.',
    'skills.title': 'TECHNICAL SKILLS',
    'skills.foundationTitle': 'Unity & C#',
    'skills.archTitle': 'Architecture & Gameplay',
    'skills.contentTitle': 'UI, Content & Rendering',
    'skills.archText': 'C#, .NET, Unity Engine, ECS, Entitas, LeoECS, MVP/MVVM, Zenject, VContainer, uGUI, UI Toolkit, Addressables, Spine, Animancer and DOTween.',
    'skills.gameplayTitle': 'Gameplay and UI systems',
    'skills.gameplayText': 'uGUI, UI Toolkit, IMGUI, responsive layouts, Addressables, Asset Bundles, Spine, Animancer, DOTween, Odin Inspector.',
    'skills.performanceTitle': 'Performance & Profiling',
    'skills.performanceText': 'Unity Profiler, Memory Profiler, Frame Debugger, CPU/GPU/RAM profiling, draw call reduction, URP Renderer Features, highlight and outline effects.',
    'skills.networkTitle': 'Networking & SDKs',
    'skills.networkText': 'Multiplayer, REST API, SignalR, Photon Fusion, Firebase, Adjust, Facebook SDK, Unity Analytics, Remote Config, Crashlytics, IAP, Localization.',
    'skills.deliveryTitle': 'Delivery, Testing & Tooling',
    'skills.cicdText': 'Git, GitHub, GitLab, TeamCity, n8n, Unity build automation, Cloudflare R2, NUnit, AltTester and AI-assisted code review workflows.',
    'skills.testingTitle': 'Testing and AI tooling',
    'skills.testingText': 'NUnit, TDD, AltTester, Claude Code, Cursor, Codex CLI, Gemini CLI, prompt engineering and AI-assisted code review.',
    'experience.title': 'Professional experience',
    'experience.currentDate': 'Feb 2025 - Present',
    'experience.currentRole': 'Senior Unity Developer / Build Automation',
    'experience.currentCompany': 'Rhinotales · Critical Shift - AA tactical RPG for Windows PC, Steam Deck and Xbox',
    'experience.currentItem1': 'Developed gameplay, UI and meta systems for Critical Shift, an AA turn-based RPG for PC and consoles, within a 35-person production team.',
    'experience.currentItem2': 'Owned performance investigation and stabilization across scene loading, memory usage, combat simulation and runtime lifecycle.',
    'experience.currentItem3': 'Refactored legacy UI and gameplay systems to remove hidden dependencies, lifecycle issues and maintenance risks.',
    'experience.currentItem4': 'Developed internal Unity tools and URP rendering features supporting designers, debugging and gameplay presentation.',
    'experience.currentItem5': 'Automated Unity builds, publishing, team distribution, QA, AI-assisted code review and ClickUp workflows through TeamCity, Cloudflare R2, n8n, Discord and GitHub.',
    'experience.previousDate': 'Jan 2021 - Feb 2025',
    'experience.previousRole': 'Unity Developer',
    'experience.previousCompany': 'GameFlinker / FlinkStudio · Midcore multiplayer and casual mobile projects',
    'experience.previousItem1': 'Built the gameplay architecture and MVP-based UI for Forge of Heroes, a turn-based multiplayer mobile RPG.',
    'experience.previousItem2': 'Implemented real-time chat, friends, groups, cloud saves, leaderboards and quest systems through REST API and SignalR.',
    'experience.previousItem3': 'Designed a reusable asynchronous state machine for application infrastructure, UI navigation and network-connected features.',
    'experience.previousItem4': 'Developed Unity editor tools and integrated analytics and platform SDKs across multiple production projects.',
    'experience.previousItem5': 'Reduced build size from 700 MB to 190 MB, scene loading from 30s to 12s and improved RAM, CPU and GPU usage through asset auditing and runtime optimization.',
    'education.title': 'EDUCATION',
    'education.collegeTitle': 'Volzhsky Polytechnic Technical College',
    'education.collegeText': 'Mathematical Support and Administration of Information Systems · 2020 - 2024',
    'education.ksTitle': 'KSyndicate - Unity Development',
    'education.ksText': 'Specialization Courses: ECS & Architecture · 2024 - 2025',
    'education.languagesTitle': 'Languages',
    'education.languageEnglish': 'English',
    'education.levelEnglish': 'B2 — Upper-Intermediate',
    'education.languageRussian': 'Russian',
    'education.levelRussian': 'Native',
    'education.languageAzerbaijani': 'Azerbaijani',
    'education.levelAzerbaijani': 'Native / Fluent',
    'contact.title': 'Contact me',
    'contact.text': 'Available for Senior Unity Developer roles involving gameplay architecture, performance engineering, tooling and CI/CD.',
    'footer.back': '↑ Back to top'
  },
  ru: {
    metaTitle: 'Кенан Ибрагимов - Senior Unity Developer',
    metaDescription: 'Портфолио Кенана Ибрагимова: Unity-разработка, игровая архитектура, оптимизация и автоматизация билдов.',
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
    'hero.text': 'Senior Unity Developer с опытом коммерческой разработки более 5 лет. Проектирую игровые, интерфейсные и мета-системы, занимаюсь оптимизацией производительности, рендерингом, внутренними инструментами и автоматизацией билдов для ПК, консолей и мобильных платформ.',
    'hero.emailCta': 'Почта',
    'hero.pdfCta': 'Скачать CV - EN',
    'hero.casesCta': 'Посмотреть кейсы',
    'impact.title': 'ПОСЛЕДНИЕ ДОСТИЖЕНИЯ',
    'impact.loadTitle': 'Сократил время загрузки сцен до 51%',
    'impact.hubLabel': 'Хаб',
    'impact.hubDelta': 'На 40% быстрее',
    'impact.missionLabel': 'Миссия',
    'impact.missionDelta': 'На 51% быстрее',
    'impact.loadText': 'Переработал зависимости Addressables, отделил ресурсы сцен от общих данных и отложил создание второстепенных объектов до момента, когда они потребуются игроку.',
    'impact.memoryTitle': 'Снизил потребление памяти до 40%',
    'impact.memoryDelta': 'Память в миссиях',
    'impact.memoryText': 'Исправил очистку состояния миссий, устранил удержание объектов и удалил дубликаты шейдеров и ассетов в бандлах.',
    'impact.fpsTitle': 'Устранил критические просадки FPS',
    'impact.fpsAbilityLabel': 'Расчёт способностей',
    'impact.fpsAbilityDelta': 'Восстановлена исходная производительность',
    'impact.fpsEnemyLabel': 'Ходы противника',
    'impact.fpsEnemyDelta': 'Устранены зависания при ходе противника',
    'impact.fpsText': 'Убрал повторные расчёты способностей, оптимизировал поиск пути и заменил временные коллекции собственными потокобезопасными пулами.',
    'impact.sizeTitle': 'Сократил размер билда на 48%',
    'impact.sizeDelta': 'Готовый билд',
    'impact.sizeText': 'Провёл аудит Addressables, удалил дубликаты ассетов и шейдеров и отделил зависимости стартовой сцены от основного контента.',
    'impact.deliveryMetric': 'Автоматическая публикация, страницы загрузки и уведомления',
    'impact.deliveryTitle': 'Автоматизировал доставку билдов',
    'impact.deliveryText': 'Объединил TeamCity, Cloudflare R2, n8n и Discord в единый процесс публикации билдов, создания страниц загрузки и уведомления команды.',
    'cases.title': 'ТЕХНИЧЕСКИЕ КЕЙСЫ',
    'cases.problem': 'Проблема',
    'cases.solution': 'Выполненные изменения',
    'cases.result': 'Результат',
    'cases.loadingTitle': 'Оптимизация загрузки сцен',
    'cases.loadingProblem': 'Хаб и миссии подтягивали избыточные зависимости, а враги, лут и интерактивные объекты создавались до того, как становились нужны игроку.',
    'cases.loadingSolution': 'Разделил контент сцен и общие ресурсы, реорганизовал зависимости Addressables и настроил раздельную упаковку ассетов. Создание второстепенных объектов перенёс на момент, когда они приближаются к игроку.',
    'cases.loadingResult': 'Загрузка хаба сократилась с 30 до 18 секунд, миссии - с 47 до 23 секунд.',
    'cases.memoryTitle': 'Устранение утечек памяти',
    'cases.memoryProblem': 'Скрипты миссий сохранялись в памяти из-за статических событий, замыканий и ссылок в глобальных сервисах. Неуничтоженный ECS-контекст удерживал весь граф объектов миссии.',
    'cases.memorySolution': 'С помощью Memory Profiler отследил цепочки удержания, исправил отписки и очистку состояния, уничтожил контекст миссии и удалил дубликаты шейдеров и ассетов.',
    'cases.memoryResult': 'Меню: 3-4 ГБ до примерно 1,8 ГБ; хаб: 7-8 до 4-4,5 ГБ; миссии: 10-12 до 6-8 ГБ.',
    'cases.performanceTitle': 'Стабилизация FPS в боевой системе',
    'cases.performanceProblem': 'При расчёте способностей повторялись одинаковые операции и аллокации, а во время хода противника многократно запускались оценка действий и поиск пути.',
    'cases.performanceSolution': 'Убрал повторные расчёты, сократил количество вызовов поиска пути, оптимизировал pathfinding и заменил временные коллекции самописными в проекте потокобезопасными пулами.',
    'cases.performanceResult': 'Симуляция абилок перестала падать примерно со 110 до 15 FPS, а ходы противника - с 80-100 до 1-5 FPS.',
    'projects.title': 'ПРОЕКТЫ',
    'projects.criticalTag': 'AA tactical RPG',
    'projects.criticalText': 'Тактическая пошаговая AA RPG для Windows, Steam Deck и Xbox.',
    'projects.contributionTitle': 'Моя ответственность',
    'projects.criticalContribution': 'Разрабатывал игровые, интерфейсные и мета-системы, оптимизировал производительность и Addressables, создавал функции рендеринга на URP и автоматизировал публикацию билдов.',
    'projects.forgeTag': 'Multiplayer midcore RPG',
    'projects.forgeText': 'Пошаговая многопользовательская мобильная RPG с тактическими боями, клиент-серверной прогрессией, чатом, социальными функциями, заданиями, рейтингами и облачными сохранениями.',
    'projects.forgeContribution': 'Разработал игровую архитектуру, UI на основе MVP и клиент-серверные системы с использованием REST API и SignalR.',
    'projects.watchVideo': 'Смотреть видео',
    'projects.playCritical': 'Смотреть видео: трейлер Critical Shift',
    'projects.playForge': 'Смотреть видео: Forge of Heroes',
    'projects.playMahjong': 'Смотреть видео: Mahjong Solitaire Classic',
    'projects.playBusyBrain': 'Смотреть видео: BusyBrain',
    'projects.playStore': 'Смотреть видео: Store Mania',
    'projects.mahjongTag': 'Mobile puzzle',
    'projects.mahjongText': 'Мобильная головоломка на поиск пар фишек в классическом формате Mahjong Solitaire.',
    'projects.mahjongContribution': 'Разрабатывал игровую логику и UI, интегрировал локализацию, аналитику и SDK монетизации, готовил релизные билды.',
    'projects.busyBrainTag': 'Mobile casual',
    'projects.busyBrainText': 'Казуальная мобильная головоломка для коротких игровых сессий.',
    'projects.busyBrainContribution': 'Разрабатывал игровую логику и адаптивный UI, интегрировал платформенные SDK и устранял ошибки перед выпуском.',
    'projects.storeTag': 'Mobile simulator',
    'projects.storeText': 'Мобильный симулятор управления магазином, построенный вокруг развития торговой точки.',
    'projects.storeContribution': 'Разрабатывал игровые циклы и UI-системы, интегрировал платформенные сервисы и готовил релизные билды.',
    'skills.title': 'ТЕХНИЧЕСКИЕ НАВЫКИ',
    'skills.foundationTitle': 'Unity и C#',
    'skills.archTitle': 'Архитектура и игровая логика',
    'skills.contentTitle': 'UI, контент и рендеринг',
    'skills.archText': 'C#, .NET, Unity Engine, ECS, Entitas, LeoECS, MVP/MVVM, Zenject, VContainer, uGUI, UI Toolkit, Addressables, Spine, Animancer и DOTween.',
    'skills.gameplayTitle': 'Gameplay and UI systems',
    'skills.gameplayText': 'uGUI, UI Toolkit, IMGUI, responsive layouts, Addressables, Asset Bundles, Spine, Animancer, DOTween, Odin Inspector.',
    'skills.performanceTitle': 'Производительность и профилирование',
    'skills.performanceText': 'Unity Profiler, Memory Profiler, Frame Debugger, CPU/GPU/RAM profiling, draw call reduction, URP Renderer Features, highlight и outline effects.',
    'skills.networkTitle': 'Сетевое взаимодействие и SDK',
    'skills.networkText': 'Multiplayer, REST API, SignalR, Photon Fusion, Firebase, Adjust, Facebook SDK, Unity Analytics, Remote Config, Crashlytics, IAP, Localization.',
    'skills.deliveryTitle': 'Билды, тестирование и инструменты',
    'skills.cicdText': 'Git, GitHub, GitLab, TeamCity, n8n, Unity build automation, Cloudflare R2, NUnit, AltTester и AI-assisted code review workflows.',
    'skills.testingTitle': 'Testing and AI tooling',
    'skills.testingText': 'NUnit, TDD, AltTester, Claude Code, Cursor, Codex CLI, Gemini CLI, prompt engineering и AI-assisted code review.',
    'experience.title': 'Опыт работы',
    'experience.currentDate': 'Февраль 2025 - настоящее время',
    'experience.currentRole': 'Senior Unity Developer / Build Automation',
    'experience.currentCompany': 'Rhinotales · Critical Shift — тактическая AA RPG для Windows, Steam Deck и Xbox',
    'experience.currentItem1': 'Разрабатывал игровые, интерфейсные и мета-системы для Critical Shift — пошаговой AA RPG для ПК и консолей, над которой работала команда из 35 человек.',
    'experience.currentItem2': 'Исследовал и устранял проблемы с загрузкой сцен, потреблением памяти, боевой логикой и жизненным циклом объектов.',
    'experience.currentItem3': 'Рефакторил устаревшие UI- и игровые системы, устраняя скрытые зависимости, ошибки управления состоянием и риски поддержки.',
    'experience.currentItem4': 'Разрабатывал внутренние инструменты Unity и функции рендеринга на базе URP для дизайнеров и отладки.',
    'experience.currentItem5': 'Автоматизировал подготовку, публикацию, тестирование и распространение билдов, а также процессы code review и ClickUp с помощью TeamCity, Cloudflare R2, n8n, Discord и GitHub.',
    'experience.previousDate': 'Январь 2021 - февраль 2025',
    'experience.previousRole': 'Unity Developer',
    'experience.previousCompany': 'GameFlinker / FlinkStudio · многопользовательские midcore- и казуальные мобильные проекты',
    'experience.previousItem1': 'Разработал игровую архитектуру и UI на основе MVP для Forge of Heroes — пошаговой многопользовательской мобильной RPG.',
    'experience.previousItem2': 'Реализовал чат, друзей, группы, облачные сохранения, рейтинги и задания с использованием REST API и SignalR.',
    'experience.previousItem3': 'Спроектировал переиспользуемую асинхронную машину состояний для инфраструктуры приложения, навигации и сетевых функций.',
    'experience.previousItem4': 'Разрабатывал редакторские инструменты Unity и интегрировал аналитические и платформенные SDK в нескольких проектах.',
    'experience.previousItem5': 'Сократил размер билда с 700 до 190 МБ и время загрузки сцен с 30 до 12 секунд; снизил нагрузку на RAM, CPU и GPU.',
    'education.title': 'ОБРАЗОВАНИЕ',
    'education.collegeTitle': 'Волжский политехнический техникум',
    'education.collegeText': 'Математическое обеспечение и администрирование информационных систем · 2020 - 2024',
    'education.ksTitle': 'KSyndicate - Unity Development',
    'education.ksText': 'Профильные курсы: ECS и архитектура · 2024 - 2025',
    'education.languagesTitle': 'Языки',
    'education.languageEnglish': 'Английский',
    'education.levelEnglish': 'B2 — Upper-Intermediate',
    'education.languageRussian': 'Русский',
    'education.levelRussian': 'Родной',
    'education.languageAzerbaijani': 'Азербайджанский',
    'education.levelAzerbaijani': 'Родной',
    'contact.title': 'Связаться со мной',
    'contact.text': 'Рассматриваю позиции Senior Unity Developer с задачами в области игровой архитектуры, оптимизации производительности, внутренних инструментов и CI/CD.',
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
let anchorScrollFrame = null;
let isProgrammaticScroll = false;

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

function resetMobileScrollTracking() {
  lastMobileScrollY = window.scrollY;
  mobileScrollDirection = 0;
  mobileScrollDistance = 0;
}

function cancelAnchorScroll() {
  if (anchorScrollFrame !== null) {
    window.cancelAnimationFrame(anchorScrollFrame);
    anchorScrollFrame = null;
  }

  if (!isProgrammaticScroll) {
    return;
  }

  isProgrammaticScroll = false;
  resetMobileScrollTracking();
  scheduleHeaderStateUpdate();
}

function scrollToNavTarget(target, hash) {
  cancelAnchorScroll();

  const scrollMargin = Number.parseFloat(window.getComputedStyle(target).scrollMarginTop) || 0;
  const startY = window.scrollY;
  const targetY = hash === '#top'
    ? 0
    : Math.max(0, target.getBoundingClientRect().top + startY - scrollMargin);
  const distance = targetY - startY;

  if (reducedMotionQuery.matches || Math.abs(distance) < 2) {
    window.scrollTo(0, targetY);
    window.history.replaceState(null, '', hash);
    resetMobileScrollTracking();
    scheduleHeaderStateUpdate();
    return;
  }

  const duration = Math.min(460, Math.max(320, Math.abs(distance) * 0.16));
  const startedAt = performance.now();
  isProgrammaticScroll = true;
  window.history.replaceState(null, '', hash);

  const animate = (now) => {
    const progress = Math.min(1, (now - startedAt) / duration);
    const eased = 1 - Math.pow(1 - progress, 3);
    window.scrollTo(0, startY + distance * eased);

    if (progress < 1 && isProgrammaticScroll) {
      anchorScrollFrame = window.requestAnimationFrame(animate);
      return;
    }

    anchorScrollFrame = null;
    isProgrammaticScroll = false;
    resetMobileScrollTracking();
    updateActiveNav();
    scheduleHeaderStateUpdate();
  };

  anchorScrollFrame = window.requestAnimationFrame(animate);
}

navLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    const target = document.querySelector(link.getAttribute('href'));

    if (!target) {
      return;
    }

    event.preventDefault();
    scrollToNavTarget(target, link.hash);
  });
});

window.addEventListener('wheel', cancelAnchorScroll, { passive: true });
window.addEventListener('touchstart', cancelAnchorScroll, { passive: true });
window.addEventListener('keydown', (event) => {
  if (['ArrowUp', 'ArrowDown', 'PageUp', 'PageDown', 'Home', 'End', ' '].includes(event.key)) {
    cancelAnchorScroll();
  }
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

    if (isProgrammaticScroll) {
      document.body.classList.toggle('is-mobile-header-compact', currentScrollY > mobileCompactEnter);
      resetMobileScrollTracking();
      return;
    }

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
  setPx('--language-max-width', 100);
  setPx('--language-max-height', 40);
  setPx('--language-translate-y', 0);
  setPx('--language-padding-y', 3);
  setPx('--language-border-width', 1);
  setPx('--actions-gap', lerp(startActionGap, 0));
  setPx('--actions-width', lerp(620, viewportWidth));
  setPx('--nav-gap', lerp(6, 3));
  setPx('--nav-padding-y', lerp(10, 7));
  setPx('--nav-padding-x', lerp(14, 12));
  setPx('--nav-padding-x-mobile', lerp(8, 4));
  setPx('--nav-width', lerp(480, Math.min(viewportWidth, 720)));
  document.documentElement.style.setProperty('--brand-opacity', (1 - fadeEased).toFixed(3));
  document.documentElement.style.setProperty('--language-opacity', '1');
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
