const translations = {
  en: {
    metaTitle: 'Kenan Ibragimov - Senior Unity Developer / Build Automation',
    metaDescription: 'Kenan Ibragimov - Senior Unity Developer / Build Automation portfolio.',
    metaShareDescription: 'Kenan Ibragimov - Senior Unity Developer / Build Automation portfolio.',
    'aria.mainNav': 'Main navigation',
    'aria.languageSelector': 'Language selector',
    'aria.contactLinks': 'Contact links',
    'nav.about': 'About',
    'nav.impact': 'Impact',
    'nav.projects': 'Projects',
    'nav.skills': 'Skills',
    'hero.eyebrow': 'Senior Unity Developer',
    'hero.title': 'Kenan Ibragimov',
    'hero.text': 'Senior Unity Developer with 5+ years of commercial experience across AA, midcore, casual and mobile RPG projects. Areas of responsibility include gameplay architecture, multiplayer and client-server systems, UI and meta systems, rendering, performance engineering, SDK integrations, internal tools and build automation.',
    'hero.emailCta': 'Email',
    'hero.pdfCta': 'Download CV',
    'hero.casesCta': 'View case studies',
    'impact.title': 'RECENT ACHIEVEMENTS',
    'impact.projectContext': 'Project: Critical Shift',
    'impact.loadTitle': 'Scene loading reduced by up to 51%',
    'impact.hubLabel': 'Hub',
    'impact.hubDelta': '40% faster',
    'impact.missionLabel': 'Mission',
    'impact.missionDelta': '51% faster',
    'impact.loadText': 'Restructured Addressables dependencies, separated scene-owned content and deferred the creation of non-critical world objects.',
    'impact.memoryTitle': 'RAM reduced by up to 40%',
    'impact.menuLabel': 'Menu',
    'impact.missionsLabel': 'Missions',
    'impact.memoryText': 'Eliminated accumulated mission data, corrected ECS context cleanup and removed duplicated content from bundles.',
    'impact.fpsTitle': 'Critical frame drops eliminated',
    'impact.fpsAbilityLabel': 'Ability simulation',
    'impact.fpsAbilityDelta': 'Baseline performance restored',
    'impact.fpsEnemyLabel': 'Enemy turns',
    'impact.fpsEnemyDelta': 'Severe turn stalls removed',
    'impact.fpsText': 'Eliminated duplicate ability evaluation, redundant pathfinding and temporary allocations; replaced allocation-heavy collections with custom thread-safe pools.',
    'impact.sizeTitle': 'Build size reduced by 48%',
    'impact.sizeDelta': 'Production build',
    'impact.sizeText': 'Audited Addressables bundles, removed duplicated assets and shaders, and separated bootstrap dependencies from initial build content.',
    'impact.deliveryMetric': 'Automatic upload, download pages and notifications',
    'impact.deliveryTitle': 'Build publishing and distribution automated',
    'impact.deliveryText': 'Connected TeamCity, Cloudflare R2, n8n and Discord into one pipeline for build publication, download-page generation and team notifications.',
    'cases.problem': 'Problem',
    'cases.solution': 'Engineering changes',
    'cases.result': 'Result',
    'cases.loadingTitle': 'Scene loading optimization',
    'cases.loadingProblem': 'Hub and mission loads pulled oversized dependency sets while enemies, loot and interactable objects were all created before the player needed them.',
    'cases.loadingSolution': 'Separated scene content from shared resources, reorganized Addressables dependencies and configured independent asset packing. Deferred non-critical object creation until it was required near the player.',
    'cases.loadingResult': 'Hub loading dropped from 30s to 18s; mission loading from 47s to 23s.',
    'cases.memoryTitle': 'Memory leak removal',
    'cases.memoryProblem': 'Data from completed missions was never released and accumulated on every subsequent mission entry. Static-event subscriptions, closures, references in global services and an undisposed ECS context retained the complete mission object graph.',
    'cases.memorySolution': 'Traced retention paths with Memory Profiler, corrected subscriptions and lifecycle cleanup, disposed the mission context and removed duplicated shaders and assets from bundles.',
    'cases.memoryResult': 'Hub memory fell from 6 GB to 3 GB, and missions from 7-10 GB to 4.5-5.3 GB.',
    'cases.performanceTitle': 'FPS stabilization',
    'cases.performanceProblem': 'Ability simulation repeated the same evaluation and allocations; enemy turns repeatedly recalculated abilities and pathfinding, producing severe frame stalls.',
    'cases.performanceSolution': 'Removed duplicate calculations, reduced pathfinding calls, optimized pathfinding and replaced temporary collections with the project\'s custom thread-safe pools.',
    'cases.performanceResult': 'Ability simulation no longer collapsed from about 110 to 15 FPS; enemy turns no longer fell from 80-100 to 1-5 FPS.',
    'cases.buildProblem': 'The production build included duplicated assets and shaders, while bootstrap dependencies pulled unnecessary content into the initial build.',
    'cases.buildSolution': 'Audited Addressables Build Report, removed duplicated content, separated bootstrap dependencies and excluded unused shader resources.',
    'cases.buildResult': 'Reduced the production build from 23 GB to 12 GB (-48%).',
    'cases.deliveryProblem': 'Build publishing, download-page preparation and team notifications required repeated manual steps.',
    'cases.deliverySolution': 'Connected TeamCity, Cloudflare R2, n8n and Discord into one automated publication and distribution workflow.',
    'cases.deliveryResult': 'Build delivery and access no longer required manual archive uploads, link preparation or team notifications.',
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
    'experience.currentItem4': 'Developed Unity Editor tools for debugging ECS entities, contexts and UI windows, as well as a URP Renderer Feature for highlighting and outlining mission objects.',
    'experience.currentItem5': 'Automated Unity builds, publishing, team distribution, QA, AI-assisted code review and ClickUp workflows through TeamCity, Cloudflare R2, n8n, Discord and GitHub.',
    'experience.previousDate': 'Jan 2021 - Feb 2025',
    'experience.previousRole': 'Unity Developer',
    'experience.previousCompany': 'GameFlinker / FlinkStudio · Midcore multiplayer and casual mobile projects',
    'experience.previousItem1': 'Built the gameplay architecture and MVP-based UI for Forge of Heroes, a turn-based multiplayer mobile RPG.',
    'experience.previousItem2': 'Implemented real-time chat, friends, groups, cloud saves, leaderboards and quest systems through REST API and SignalR.',
    'experience.previousItem3': 'Designed a reusable asynchronous state machine for application infrastructure, UI navigation and network-connected features.',
    'experience.previousItem4': 'Developed Unity editor tools and integrated analytics and platform SDKs across multiple production projects.',
    'experience.previousItem5': 'Reduced build size from 700 MB to 190 MB (-73%) and scene loading from 30s to 12s (-60%); reduced RAM usage by 20%, CPU load by 10% and GPU load by 35%.',
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
    'education.levelAzerbaijani': 'Native',
    'contact.title': 'Contact me',
    'contact.text': 'Open to Senior Unity Developer opportunities.',
    'footer.back': '↑ Back to top'
  },
  ru: {
    metaTitle: 'Kenan Ibragimov - Senior Unity Developer / Build Automation',
    metaDescription: 'Kenan Ibragimov - Senior Unity Developer / Build Automation portfolio.',
    metaShareDescription: 'Kenan Ibragimov - Senior Unity Developer / Build Automation portfolio.',
    'aria.mainNav': 'Основная навигация',
    'aria.languageSelector': 'Выбор языка',
    'aria.contactLinks': 'Ссылки для связи',
    'nav.about': 'Обо мне',
    'nav.impact': 'Результаты',
    'nav.projects': 'Проекты',
    'nav.skills': 'Навыки',
    'hero.eyebrow': 'Senior Unity Developer',
    'hero.title': 'Kenan Ibragimov',
    'hero.text': 'Senior Unity Developer с опытом коммерческой разработки более 5 лет. Проектирую игровые, многопользовательские, клиент-серверные, интерфейсные и мета-системы, занимаюсь оптимизацией, рендерингом, внутренними инструментами и автоматизацией билдов для ПК, консолей и мобильных платформ.',
    'hero.emailCta': 'Почта',
    'hero.pdfCta': 'Скачать CV',
    'hero.casesCta': 'Посмотреть кейсы',
    'impact.title': 'ПОСЛЕДНИЕ ДОСТИЖЕНИЯ',
    'impact.projectContext': 'Проект: Critical Shift',
    'impact.loadTitle': 'Сократил время загрузки сцен до 51%',
    'impact.hubLabel': 'Хаб',
    'impact.hubDelta': 'На 40% быстрее',
    'impact.missionLabel': 'Миссия',
    'impact.missionDelta': 'На 51% быстрее',
    'impact.loadText': 'Переработал зависимости Addressables, отделил ресурсы сцен от общих данных и отложил создание второстепенных объектов до момента, когда они потребуются игроку.',
    'impact.memoryTitle': 'Снизил потребление памяти до 40%',
    'impact.menuLabel': 'Меню',
    'impact.missionsLabel': 'Миссии',
    'impact.memoryText': 'Устранил накопление данных миссий, исправил очистку ECS-контекста и удалил дубликаты контента в бандлах.',
    'impact.fpsTitle': 'Устранил критические просадки FPS',
    'impact.fpsAbilityLabel': 'Расчёт способностей',
    'impact.fpsAbilityDelta': 'Восстановлена стабильная частота кадров',
    'impact.fpsEnemyLabel': 'Ходы противника',
    'impact.fpsEnemyDelta': 'Устранены зависания при ходе противника',
    'impact.fpsText': 'Убрал повторные расчёты способностей, оптимизировал поиск пути и заменил временные коллекции собственными потокобезопасными пулами.',
    'impact.sizeTitle': 'Сократил размер билда на 48%',
    'impact.sizeDelta': 'Готовый билд',
    'impact.sizeText': 'По результатам Addressables Build Report устранил дублирование ассетов, вынес bootstrap-контент в отдельную группу и исключил неиспользуемые шейдерные ресурсы.',
    'impact.deliveryMetric': 'Доставка и получение билда без ручных действий',
    'impact.deliveryTitle': 'Автоматизировал доставку билдов',
    'impact.deliveryText': 'Объединил TeamCity, Cloudflare R2, n8n и Discord в единый процесс публикации билдов, создания страниц загрузки и уведомления команды.',
    'cases.problem': 'Проблема',
    'cases.solution': 'Решение',
    'cases.result': 'Результат',
    'cases.loadingTitle': 'Оптимизация загрузки сцен',
    'cases.loadingProblem': 'Хаб и миссии подтягивали избыточные зависимости, а враги, лут и интерактивные объекты создавались до того, как становились нужны игроку.',
    'cases.loadingSolution': 'Разделил контент сцен и общие ресурсы, реорганизовал зависимости Addressables и настроил раздельную упаковку ассетов. Создание второстепенных объектов перенёс на момент, когда они приближаются к игроку.',
    'cases.loadingResult': 'Загрузка хаба сократилась с 30 до 18 секунд, миссии - с 47 до 23 секунд.',
    'cases.memoryTitle': 'Устранение утечек памяти',
    'cases.memoryProblem': 'Данные завершённых миссий не освобождались и накапливались при каждом повторном входе. Причиной были подписки на статические события, замыкания, ссылки в глобальных сервисах и неуничтоженный ECS-контекст, удерживавший весь граф объектов миссии.',
    'cases.memorySolution': 'С помощью Memory Profiler отследил цепочки удержания, исправил отписки и очистку состояния, уничтожил контекст миссии и удалил дубликаты шейдеров и ассетов.',
    'cases.memoryResult': 'Хаб: с 6 до 3 ГБ; миссии: с 7-10 до 4,5-5,3 ГБ.',
    'cases.performanceTitle': 'Стабилизация FPS',
    'cases.performanceProblem': 'При расчёте способностей повторялись одинаковые операции и аллокации, а во время хода противника многократно запускались оценка действий и поиск пути.',
    'cases.performanceSolution': 'Убрал повторные расчёты, сократил количество вызовов поиска пути, оптимизировал pathfinding и заменил временные коллекции самописными в проекте потокобезопасными пулами.',
    'cases.performanceResult': 'Симуляция абилок перестала падать примерно со 110 до 15 FPS, а ходы противника - с 80-100 до 1-5 FPS.',
    'cases.buildProblem': 'В билд попадали дубликаты ассетов и шейдеров, а зависимости bootstrap-сцены добавляли лишний контент.',
    'cases.buildSolution': 'Провёл аудит Addressables Build Report, удалил дубликаты, отделил зависимости bootstrap-сцены и исключил неиспользуемые шейдерные ресурсы.',
    'cases.buildResult': 'Сократил размер билда с 23 до 12 ГБ (-48%).',
    'cases.deliveryProblem': 'Публикация билдов, подготовка страниц загрузки и уведомление команды выполнялись вручную.',
    'cases.deliverySolution': 'Объединил TeamCity, Cloudflare R2, n8n и Discord в единый процесс публикации и распространения билдов.',
    'cases.deliveryResult': 'Доставка и получение билдов выполняются без ручной загрузки архивов, подготовки ссылок и отправки уведомлений.',
    'projects.title': 'ПРОЕКТЫ',
    'projects.criticalTag': 'AA tactical RPG',
    'projects.criticalText': 'Тактическая пошаговая AA RPG для Windows, Steam Deck и Xbox.',
    'projects.contributionTitle': 'Моя ответственность',
    'projects.criticalContribution': 'Разрабатывал игровые, интерфейсные и мета-системы, оптимизировал игровые системы и Addressables, создавал функции рендеринга на URP и автоматизировал публикацию билдов.',
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
    'skills.performanceTitle': 'Оптимизация и профилирование',
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
    'experience.currentItem3': 'Рефакторил устаревшие UI и игровые системы, устраняя скрытые зависимости, ошибки управления состоянием и риски поддержки.',
    'experience.currentItem4': 'Разработал editor tools для отладки ECS-сущностей, контекстов и UI-окон, а также URP Renderer Feature для подсветки и контурной обводки объектов в миссиях.',
    'experience.currentItem5': 'Автоматизировал подготовку, публикацию, тестирование и распространение билдов, а также процессы code review и ClickUp с помощью TeamCity, Cloudflare R2, n8n, Discord и GitHub.',
    'experience.previousDate': 'Январь 2021 - февраль 2025',
    'experience.previousRole': 'Unity Developer',
    'experience.previousCompany': 'GameFlinker / FlinkStudio · многопользовательские midcore- и казуальные мобильные проекты',
    'experience.previousItem1': 'Разработал игровую архитектуру и UI на основе MVP для Forge of Heroes — пошаговой многопользовательской мобильной RPG.',
    'experience.previousItem2': 'Реализовал чат, друзей, группы, облачные сохранения, рейтинги и задания с использованием REST API и SignalR.',
    'experience.previousItem3': 'Спроектировал переиспользуемую асинхронную машину состояний для инфраструктуры приложения, навигации и сетевых функций.',
    'experience.previousItem4': 'Разрабатывал редакторские инструменты Unity и интегрировал аналитические и платформенные SDK в нескольких проектах.',
    'experience.previousItem5': 'Сократил размер билда с 700 до 190 МБ (-73%) и время загрузки сцен с 30 до 12 секунд (-60%); снизил потребление ресурсов: RAM на 20%, CPU на 10% и GPU на 35%.',
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
    'contact.text': 'Открыт к предложениям на позицию Senior Unity Developer.',
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

const entranceItems = Array.from(document.querySelectorAll('.entrance-slide, .entrance-flip, .entrance-spin, .entrance-flow'));

const entranceObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;

    const target = entry.target;
    const isCard = target.classList.contains('entrance-flip') || target.classList.contains('entrance-spin');

    target.classList.add('is-entrance-scheduled');
    entranceObserver.unobserve(entry.target);

    target.classList.add('is-entered');

    if (isCard || target.classList.contains('entrance-flow')) {
      window.setTimeout(() => target.classList.add('entrance-settled'), 380);
    }
  });
}, { threshold: 0.16, rootMargin: '0px 0px -6% 0px' });

entranceItems.forEach((item) => {
  if (item.classList.contains('entrance-flip') || item.classList.contains('entrance-spin')) {
    const spinItems = Array.from(item.parentElement.querySelectorAll(':scope > .entrance-flip, :scope > .entrance-spin'));
    item.style.setProperty('--entrance-delay', `${(spinItems.indexOf(item) % 2) * 45}ms`);
  }
  if (item.classList.contains('entrance-flow')) {
    const flowItems = Array.from(item.parentElement.querySelectorAll(':scope > .entrance-flow'));
    item.style.setProperty('--flow-entrance-delay', `${Math.max(0, flowItems.indexOf(item)) * 45}ms`);
  }
  entranceObserver.observe(item);
});

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
const mobileExpandDistance = 14;
const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
const ambientBackground = document.querySelector('.ambient-background');
const finePointerQuery = window.matchMedia('(hover: hover) and (pointer: fine)');
const particleDefinitions = [
  [10, 18, 54, 0.32, '216, 242, 117', 0.12],
  [28, 66, 88, 0.56, '142, 230, 209', 0.09],
  [44, 30, 42, 0.78, '87, 183, 255', 0.13],
  [62, 76, 70, 0.42, '175, 140, 255', 0.08],
  [78, 20, 110, 0.64, '142, 230, 209', 0.07],
  [88, 58, 48, 0.9, '216, 242, 117', 0.11],
  [18, 84, 76, 0.48, '175, 140, 255', 0.08],
  [52, 52, 34, 1, '142, 230, 209', 0.14],
  [70, 42, 58, 0.7, '87, 183, 255', 0.09],
  [36, 10, 96, 0.38, '216, 242, 117', 0.07]
];
const particleField = document.createElement('div');
particleField.className = 'cursor-particle-field';
particleField.setAttribute('aria-hidden', 'true');
const isBeigeParticleTheme = document.documentElement.classList.contains('theme-beige-prototype');
const cursorAura = isBeigeParticleTheme ? document.createElement('span') : null;
if (cursorAura) {
  cursorAura.className = 'cursor-aura';
  particleField.appendChild(cursorAura);
}
const cursorParticles = particleDefinitions.map(([left, top, size, depth, color, opacity], index) => {
  const element = document.createElement('span');
  element.className = 'cursor-particle';
  element.style.setProperty('--particle-size', `${size}px`);
  element.style.setProperty('--particle-color', color);
  element.style.setProperty('--particle-opacity', opacity);
  particleField.appendChild(element);
  return {
    element,
    left,
    top,
    depth,
    phase: index * 0.83,
    x: 0,
    y: 0,
    impulseX: 0,
    impulseY: 0,
    impulseTargetX: 0,
    impulseTargetY: 0
  };
});
ambientBackground?.appendChild(particleField);

let particleFrame = null;
let particlePointerX = window.innerWidth * 0.5;
let particlePointerY = window.innerHeight * 0.5;
let particleFollowX = particlePointerX;
let particleFollowY = particlePointerY;
let cursorAuraX = particlePointerX;
let cursorAuraY = particlePointerY;

function renderCursorParticles(time) {
  const width = window.innerWidth;
  const height = window.innerHeight;
  const pointerActive = finePointerQuery.matches;
  const followBoost = isBeigeParticleTheme ? 2.15 : 1;

  particleFollowX += (particlePointerX - particleFollowX) * 0.055;
  particleFollowY += (particlePointerY - particleFollowY) * 0.055;

  if (cursorAura) {
    cursorAuraX += (particlePointerX - cursorAuraX) * 0.075;
    cursorAuraY += (particlePointerY - cursorAuraY) * 0.075;
    cursorAura.style.transform = `translate3d(${cursorAuraX.toFixed(1)}px, ${cursorAuraY.toFixed(1)}px, 0) translate(-50%, -50%)`;
  }

  cursorParticles.forEach((particle) => {
    const baseX = width * particle.left / 100;
    const baseY = height * particle.top / 100;
    const driftX = Math.sin(time * 0.00024 + particle.phase) * (12 + particle.depth * 18);
    const driftY = Math.cos(time * 0.00019 + particle.phase * 1.4) * (10 + particle.depth * 14);
    const distance = Math.hypot(particleFollowX - baseX, particleFollowY - baseY);
    const proximity = Math.max(0.18, 1 - distance / Math.max(width, height));
    const follow = pointerActive ? (0.025 + particle.depth * 0.055) * proximity * followBoost : 0;
    const targetX = driftX + (particleFollowX - baseX) * follow;
    const targetY = driftY + (particleFollowY - baseY) * follow + Math.sin(window.scrollY * 0.0012 + particle.phase) * 14 * particle.depth;

    particle.x += (targetX - particle.x) * (0.012 + particle.depth * 0.01);
    particle.y += (targetY - particle.y) * (0.012 + particle.depth * 0.01);
    particle.impulseTargetX *= 0.94;
    particle.impulseTargetY *= 0.94;
    particle.impulseX += (particle.impulseTargetX - particle.impulseX) * 0.11;
    particle.impulseY += (particle.impulseTargetY - particle.impulseY) * 0.11;
    particle.element.style.transform = `translate3d(${(baseX + particle.x + particle.impulseX).toFixed(1)}px, ${(baseY + particle.y + particle.impulseY).toFixed(1)}px, 0)`;
  });

  particleFrame = window.requestAnimationFrame(renderCursorParticles);
}

function updateParticleAnimation() {
  const shouldAnimate = !reducedMotionQuery.matches && window.innerWidth > 700;
  particleField.hidden = !shouldAnimate;

  if (shouldAnimate && particleFrame === null) {
    particleFrame = window.requestAnimationFrame(renderCursorParticles);
  } else if (!shouldAnimate && particleFrame !== null) {
    window.cancelAnimationFrame(particleFrame);
    particleFrame = null;
  }
}

window.addEventListener('pointermove', (event) => {
  particlePointerX = event.clientX;
  particlePointerY = event.clientY;
}, { passive: true });

window.addEventListener('resize', updateParticleAnimation);
reducedMotionQuery.addEventListener('change', updateParticleAnimation);
updateParticleAnimation();

const hoverCards = isBeigeParticleTheme
  ? Array.from(document.querySelectorAll([
    '.project-card',
    '.achievement-combined-card',
    '.achievement-secondary-card',
    '.skills-layout article',
    '.timeline-item',
    '.education-grid article',
    '.contact'
  ].join(',')))
  : [];
const cardHoverAura = isBeigeParticleTheme ? document.createElement('div') : null;
if (cardHoverAura) {
  cardHoverAura.className = 'card-hover-aura';
  cardHoverAura.setAttribute('aria-hidden', 'true');
  document.body.appendChild(cardHoverAura);
}

function isCardEntranceReady(card) {
  const hasEntranceAnimation = card.matches('.entrance-flip, .entrance-spin, .entrance-flow');
  return !hasEntranceAnimation || card.classList.contains('entrance-settled');
}

function showCardHoverAura(card) {
  if (!cardHoverAura || !isCardEntranceReady(card) || reducedMotionQuery.matches) {
    return;
  }

  const rect = card.getBoundingClientRect();
  cardHoverAura.style.setProperty('--hover-aura-left', `${rect.left}px`);
  cardHoverAura.style.setProperty('--hover-aura-top', `${rect.top}px`);
  cardHoverAura.style.setProperty('--hover-aura-width', `${rect.width}px`);
  cardHoverAura.style.setProperty('--hover-aura-height', `${rect.height}px`);
  cardHoverAura.classList.toggle('is-olive', card.closest('#skills, .education') !== null);
  cardHoverAura.classList.toggle('is-rose', card.closest('#cases') !== null);
  cardHoverAura.classList.add('is-visible');
}

function hideCardHoverAura() {
  cardHoverAura?.classList.remove('is-visible');
}

hoverCards.forEach((card) => {
  card.addEventListener('pointerenter', () => showCardHoverAura(card), { passive: true });
  card.addEventListener('pointerleave', hideCardHoverAura, { passive: true });
});
window.addEventListener('scroll', () => {
  hideCardHoverAura();
}, { passive: true });
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

const achievementTechPattern = /Addressables Build Report|Memory Profiler|Cloudflare R2|Addressables|TeamCity|Discord|ECS|n8n/gi;
const achievementMetricPattern = /-?\d+(?:[.,]\d+)?(?:-\d+(?:[.,]\d+)?)?(?:\s*(?:GB|ГБ|FPS|%|s|секунд(?:ы|у)?|секунд))?/gi;

function highlightAchievementText(element, includeMetrics) {
  const text = element.textContent || '';
  const highlights = [];

  const collectMatches = (pattern, className) => {
    pattern.lastIndex = 0;
    for (const match of text.matchAll(pattern)) {
      highlights.push({
        start: match.index,
        end: match.index + match[0].length,
        className
      });
    }
  };

  collectMatches(achievementTechPattern, 'inline-tech-highlight');
  if (includeMetrics) {
    collectMatches(achievementMetricPattern, 'inline-metric-highlight');
  }

  if (!highlights.length) {
    return;
  }

  highlights.sort((left, right) => left.start - right.start || right.end - left.end);
  const fragment = document.createDocumentFragment();
  let cursor = 0;

  highlights.forEach((highlight) => {
    if (highlight.start < cursor) {
      return;
    }

    fragment.append(text.slice(cursor, highlight.start));
    const strong = document.createElement('strong');
    strong.className = highlight.className;
    strong.textContent = text.slice(highlight.start, highlight.end);
    fragment.append(strong);
    cursor = highlight.end;
  });

  fragment.append(text.slice(cursor));
  element.replaceChildren(fragment);
}

function updateAchievementHighlights() {
  document.querySelectorAll('#cases .achievement-summary, #cases .achievement-inline-details dd').forEach((element) => {
    const details = element.closest('.achievement-inline-details');
    const isResult = details && details.lastElementChild === element.parentElement;
    highlightAchievementText(element, isResult);
  });
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

  updateAchievementHighlights();

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
