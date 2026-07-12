import {
  contactLinks as portfolioContactLinks,
  profile as portfolioProfile,
  projects as portfolioProjects,
  skillGroups as portfolioSkillGroups
} from "./data/projects.js";

const root = document.getElementById("root");
const BASE_URL = import.meta.env.BASE_URL || "/";
let contactLinks = [];
let profile = {};
let projects = [];
let skillGroups = [];

function asset(path = "") {
  if (!path.startsWith("/assets/") && !path.startsWith("/thesis-site/")) return path;
  return `${BASE_URL.replace(/\/$/, "")}${path}`;
}

function normalizeAssetPaths(value) {
  if (Array.isArray(value)) return value.map((item) => normalizeAssetPaths(item));
  if (value && typeof value === "object") {
    return Object.fromEntries(Object.entries(value).map(([key, item]) => [key, normalizeAssetPaths(item)]));
  }
  return typeof value === "string" ? asset(value) : value;
}

function htmlWithAssetBase(markup) {
  return markup
    .replaceAll('src="/assets/', `src="${asset("/assets/").replace(/\/$/, "")}/`)
    .replaceAll('href="/assets/', `href="${asset("/assets/").replace(/\/$/, "")}/`)
    .replaceAll('src="/thesis-site/', `src="${asset("/thesis-site/").replace(/\/$/, "")}/`)
    .replaceAll('href="/thesis-site/', `href="${asset("/thesis-site/").replace(/\/$/, "")}/`);
}

function setRootHtml(markup) {
  root.innerHTML = htmlWithAssetBase(markup);
}

async function loadPortfolioData() {
  contactLinks = portfolioContactLinks;
  profile = portfolioProfile;
  projects = normalizeAssetPaths(portfolioProjects);
  skillGroups = portfolioSkillGroups;
}

function tagList(items) {
  return items.map((item) => `<span class="skill-tag">${item}</span>`).join("");
}

function renderNavigation() {
  return `
    <header class="navigation-bar">
      <a class="navigation-bar__brand" href="#">ZY / Vaporwave System</a>
      <nav aria-label="Primary navigation">
        <a href="#profile-room">Profile Room</a>
        <a href="#projects">Project Wall</a>
        <a href="#skills">Project Archive</a>
        <a href="#transmission">Transmission</a>
      </nav>
    </header>
  `;
}

function renderHome() {
  setRootHtml(`
    <div class="app-shell surveillance-shell">
      ${renderEntryGate()}
      ${renderNavigation()}
      ${renderButterflyGuide()}
      <main class="scene-camera" data-scene-camera>
        ${renderButterflyField()}
        ${renderVaporAssetLayer("home")}
        <section class="hero-section profile-room scene-panel" id="profile-room" aria-labelledby="profile-room-title">
          <div class="profile-room__depth" aria-hidden="true">
            <span></span><span></span><span></span>
          </div>
          <div class="hero-section__copy profile-room__copy">
            <span class="status-chip">PROFILE ROOM / OBSERVED PORTFOLIO SIGNAL</span>
            <h1 class="glitch-text" data-text="${profile.name}">${profile.name}</h1>
            <img class="name-cursor-guide" src="/assets/vapor-assets/cropped/floppy-backup-cursor.png" alt="" aria-hidden="true" />
            <p class="hero-section__title">${profile.title}</p>
            <p>${profile.intro}</p>
          </div>
          <section class="profile-room__stage" aria-label="Profile room scene">
            <figure class="profile-avatar">
              <img src="/assets/about-persona.png" alt="Stylized avatar placeholder for Zhiyun Yu" />
            </figure>
            <div class="profile-fragments" aria-label="Profile fragments">
              ${field("Name", profile.name)}
              ${field("Education", profile.education || profile.role)}
              ${field("Design Focus", profile.focus)}
              ${field("Tools", profile.tools)}
              ${field("Interests", profile.interests)}
              ${field("Current Mission", profile.mission)}
            </div>
          </section>
        </section>

        <section class="evidence-wall project-wall scene-panel" id="projects" data-project-wall>
          <div class="room-perspective" aria-hidden="true">
            <span class="room-perspective__ceiling"></span>
            <span class="room-perspective__floor"></span>
            <span class="room-perspective__left"></span>
            <span class="room-perspective__right"></span>
          </div>
          <div class="section-heading"><span>DREAM ARCHIVE / DESIGN LOGS</span><h2>PROJECT WALL</h2></div>
          <p class="project-wall__direction">Select a floating project window. The lens will move closer, the signal will break, then the full project page will open.</p>
          <div class="evidence-wall__board" data-project-board>
            <div class="wall-lamp" aria-hidden="true"></div>
            <svg class="connection-lines" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
              <path class="connection-lines__thread" d="M 18 30 C 32 12, 42 18, 50 28" />
              <path class="connection-lines__thread muted" d="M 50 28 C 62 42, 74 34, 84 26" />
              <path class="connection-lines__thread" d="M 18 30 C 24 54, 34 63, 44 72" />
              <path class="connection-lines__thread muted" d="M 44 72 C 54 54, 67 57, 84 68" />
              <path class="connection-lines__thread" d="M 50 28 C 57 50, 63 60, 67 82" />
              <path class="connection-lines__thread muted" d="M 84 26 C 78 44, 84 56, 84 68" />
            </svg>
            ${projects.map((project, index) => renderCard(project, index)).join("")}
            <div class="project-focus-view" data-project-focus-view aria-live="polite">
              <span>Lens locked</span>
              <strong>OPEN CASE FILE</strong>
            </div>
          </div>
        </section>

        <section class="skill-archive scene-panel" id="skills">
          <div class="section-heading"><span>CASE FILES / PROJECT ARCHIVE</span><h2>Skills Archive</h2></div>
          <div class="skill-archive__grid">
            ${skillGroups.map((group) => `
              <article class="skill-group"><h3>${group.label}</h3><div class="tag-row">${tagList(group.skills)}</div></article>
            `).join("")}
          </div>
        </section>

        <section class="terminal-contact contact-transmission scene-panel" id="transmission">
          <span>CONTACT / TRANSMISSION AREA</span>
          <h2>Secure Transmission</h2>
          <p>Open a channel for collaborations, design roles, or portfolio conversations.</p>
        </section>
      </main>
      <div class="glitch-transition" data-glitch-transition aria-hidden="true"></div>
    </div>
  `);
  bindProjectWallInteractions();
  bindButterflyGuide();
  bindTransmissionCleanup();
  bindEntryGate();
}

function renderEntryGate() {
  return `
    <section class="entry-gate" data-entry-gate role="dialog" aria-modal="true" aria-labelledby="entry-gate-title">
      <div class="entry-gate__noise" aria-hidden="true"></div>
      <div class="entry-gate__window">
        <div class="entry-gate__titlebar">
          <span>PORTFOLIO_START.EXE</span>
          <span aria-hidden="true">_ □ ×</span>
        </div>
        <div class="entry-gate__screen">
          <span class="entry-gate__eyebrow">SYSTEM MESSAGE / USER CONFIRMATION</span>
          <h2 id="entry-gate-title">Do you want to enter this portfolio?</h2>
          <p>Signal detected. Select YES to load Zhiyun Yu's project world.</p>
          <div class="entry-gate__actions">
            <button type="button" data-enter-portfolio>YES</button>
            <button type="button" data-enter-portfolio>YES</button>
            <button type="button" data-enter-portfolio>YES</button>
          </div>
        </div>
      </div>
    </section>
  `;
}

function renderCard(project, index) {
  return `
    <a class="evidence-card evidence-card--${index + 1}" href="#project/${project.slug}" data-project-card data-slug="${project.slug}" onclick="window.openPortfolioProject?.(event, '${project.slug}')" aria-label="Open project: ${project.title}">
      <span class="evidence-card__pin" aria-hidden="true"></span>
      <span class="evidence-card__tape" aria-hidden="true"></span>
      <article class="evidence-card__paper">
        <div class="evidence-card__image">
          <img src="${project.thumbnail}" alt="${project.title} project thumbnail" />
          <span class="evidence-card__scan">ARCHIVE NODE</span>
        </div>
        <div class="evidence-card__meta">
          <span>CASE FILE / ${project.type}</span>
          <h3>${project.title}</h3>
          <strong>${project.role}</strong>
          <p>${project.shortDescription}</p>
          <div class="evidence-card__tags">${project.tags.slice(0, 3).map((tag) => `<em>${tag}</em>`).join("")}</div>
        </div>
        <span class="project-open-prompt">OPEN CASE FILE</span>
      </article>
    </a>
  `;
}

function field(label, value) {
  return `<article class="dossier-field"><span>${label}</span><p>${value}</p></article>`;
}

function renderProject(slug) {
  const project = projects.find((item) => item.slug === slug) || projects[0];
  const index = projects.findIndex((item) => item.id === project.id);
  const nextProject = projects[(index + 1) % projects.length];
  const theme = project.theme || {};

  setRootHtml(`
    <div class="app-shell project-page-shell project-theme project-theme--${theme.themeName || "default"}" style="${themeVars(theme)}" data-page-mood="${theme.pageMood || ""}">
      ${renderNavigation()}
      ${renderButterflyGuide()}
      ${renderButterflyField()}
      <main class="project-page">
        <a class="back-link" href="#projects">Back to Project Wall</a>
        <header class="project-hero">
          <div>
            <span class="project-hero__eyebrow">CLASSIFIED CASE FILE / SIGNAL STABLE</span>
            <h1 class="glitch-text" data-text="${project.title}">${project.title}</h1>
            <div class="project-theme-readout">
              <span>${theme.pageMood || "project archive"}</span>
              <span>${theme.panelStyle || "case file panels"}</span>
            </div>
            <p>${project.fullDescription}</p>
          </div>
          <section class="monitor-frame">
            <div class="monitor-frame__bar"><span>PROJECT SIGNAL / HERO CAPTURE</span><span class="record-dot">REC</span></div>
            <div class="monitor-frame__body">${renderHeroMedia(project)}</div>
          </section>
        </header>
        ${renderProjectInteractive(project)}
        <section class="project-meta-grid">
          ${meta("Role", project.role)}
          ${meta("Project Type", project.type)}
          ${meta("Timeline", project.timeline)}
          ${meta("Tools", project.tools.join(" / "))}
        </section>
        ${caseSection("REPORT 01", "Design Goal", `<p>${project.designGoal}</p>`, "Design note: mechanics, mood, and player behavior should point to the same feeling.")}
        ${caseSection("REPORT 02", "Player Experience Goal", `<p>${project.playerExperienceGoal}</p>`)}
        ${caseSection("REPORT 03", "Gameplay / System Breakdown", `<div class="project-motifs">${(theme.decorativeMotifs || []).map((motif) => `<span>${motif}</span>`).join("")}</div><div class="breakdown-list">${project.breakdownSections.map((section) => `<article><h3>${section.title}</h3><p>${section.body}</p></article>`).join("")}</div>`)}
        ${project.documentationLinks?.length ? caseSection("READ", "Design Documentation", renderDocumentLinks(project)) : ""}
        ${caseSection("REPORT 04", project.contentSectionTitle || "Content", renderProjectContent(project))}
        ${caseSection("REPORT 05", "My Contribution", `<p>${project.contribution}</p><div class="tag-row">${tagList(project.tags)}</div>`)}
        ${caseSection("REPORT 06", "Reflection / What I Learned", `<p>${project.reflection}</p>${renderLinks(project)}`)}
        <nav class="project-bottom-nav">
          <a href="#">Back Home</a>
          <a href="#project/${nextProject.slug}">Next Case: ${nextProject.title}</a>
        </nav>
      </main>
    </div>
  `);
  bindButterflyGuide();
  bindPetPortfolioDemo();
  bindFrameSequences();
  bindGalleryLightbox();
}

function renderButterflyGuide() {
  return `
    <button class="guide-butterfly vapor-guide" type="button" data-guide-butterfly aria-label="Follow the cursor to the next section">
      <span class="vapor-guide__cursor"></span>
      <span class="vapor-guide__window">NEXT.EXE</span>
      <span class="guide-butterfly__label">open</span>
    </button>
  `;
}

function renderButterflyField() {
  return `
    <div class="butterfly-field" aria-hidden="true">
      <span></span><span></span><span></span><span></span><span></span>
      <span></span><span></span><span></span><span></span><span></span>
    </div>
  `;
}

function renderVaporAssetLayer(context = "home") {
  const base = asset("/assets/vapor-assets/cropped");
  const homeAssets = [
    ["asset-window-system", "window-system.png"],
    ["asset-window-player", "window-now-playing.png"],
    ["asset-cassette", "cassette-code-mix.png"],
    ["asset-desktop-folders", "desktop-folders.png"],
    ["asset-desktop-disks", "desktop-disks.png"],
    ["asset-desktop-hearts", "desktop-hearts.png"],
    ["asset-taskbar", "taskbar.png"]
  ];
  const projectAssets = [
    ["asset-ui-player", "ui-player.png"],
    ["asset-ui-explorer", "ui-explorer.png"],
    ["asset-ui-note", "ui-note-small.png"],
    ["asset-ui-icons", "ui-icons.png"],
    ["asset-cat-monitor", "cat-monitor.png"],
    ["asset-cat-fish", "cat-fish.png"]
  ];
  const assets = context === "project" ? projectAssets : homeAssets;
  return `
    <div class="vapor-asset-layer vapor-asset-layer--${context}" aria-hidden="true">
      ${assets.map(([className, file]) => `<img class="vapor-asset ${className}" src="${base}/${file}" alt="" loading="lazy" />`).join("")}
    </div>
  `;
}

function themeVars(theme) {
  return [
    ["--project-bg", theme.primaryColor],
    ["--project-panel", theme.secondaryColor],
    ["--project-text", theme.textColor],
    ["--project-accent", theme.accentColor],
    ["--project-accent-secondary", theme.accentSecondary],
    ["--project-border", `${theme.accentColor || "#86bdd0"}55`],
    ["--project-glow", `${theme.accentColor || "#86bdd0"}33`],
    ["--project-texture", theme.backgroundStyle]
  ]
    .filter(([, value]) => value)
    .map(([key, value]) => `${key}: ${value}`)
    .join("; ");
}

function meta(label, value) {
  return `<div><span>${label}</span><strong>${value}</strong></div>`;
}

function caseSection(eyebrow, title, body, note = "") {
  return `
    <section class="case-file-section">
      <div><span class="case-file-section__eyebrow">${eyebrow}</span><h2>${title}</h2></div>
      <div class="case-file-section__body">${body}</div>
      ${note ? `<aside class="case-file-section__note">${note}</aside>` : ""}
    </section>
  `;
}

function renderGallery(project) {
  return `
    <div class="image-gallery">
      ${project.galleryImages.map((image, index) => `
        <figure class="image-gallery__item">
          ${renderGalleryImage(image, project, index)}
          ${renderGalleryCaption(image)}
        </figure>
      `).join("")}
    </div>
  `;
}

function renderProjectContent(project) {
  const contentBlocks = project.contentBlocks?.length
    ? `
      <div class="project-content-grid">
        ${project.contentBlocks.map((block) => `
          <article class="project-content-card">
            <span>${block.kicker || "Design note"}</span>
            <h3>${block.title}</h3>
            <p>${block.body}</p>
            ${block.points?.length ? `<ul>${block.points.map((point) => `<li>${point}</li>`).join("")}</ul>` : ""}
          </article>
        `).join("")}
      </div>
    `
    : "";

  return `${contentBlocks}${renderGallery(project)}`;
}

function renderDocumentLinks(project) {
  return `
    <p class="document-links__intro">Click to open or download the project design documentation.</p>
    <div class="project-links document-links">
      ${project.documentationLinks.map((link) => `<a href="${link.href}" target="_blank" rel="noreferrer" download>${link.label}</a>`).join("")}
    </div>
  `;
}

function renderGalleryCaption(image) {
  if (typeof image === "object" && image?.label) {
    return `<figcaption>${image.label}</figcaption>`;
  }

  return "";
}

function renderGalleryImage(image, project, index) {
  if (typeof image === "string") {
    const alt = `${project.title} process or result screenshot ${index + 1}`;
    return `
      <button class="gallery-lightbox-trigger" type="button" data-lightbox-src="${image}" data-lightbox-alt="${alt}" aria-label="Open full image: ${alt}">
        <img src="${image}" alt="${alt}" />
        <span>Open full image</span>
      </button>
    `;
  }

  if (image?.type === "image") {
    const alt = image.label || `${project.title} process or result screenshot ${index + 1}`;
    const modifier = image.variant ? ` gallery-lightbox-trigger--${image.variant}` : "";
    return `
      <button class="gallery-lightbox-trigger${modifier}" type="button" data-lightbox-src="${image.src}" data-lightbox-alt="${alt}" aria-label="Open full image: ${alt}">
        <img src="${image.src}" alt="${alt}" />
        <span>Open full image</span>
      </button>
    `;
  }

  if (image?.type === "video") {
    return `
      <video class="gallery-video" src="${image.src}" poster="${image.poster || project.heroImage}" controls playsinline preload="metadata">
        <img src="${image.poster || project.heroImage}" alt="${image.label || `${project.title} video capture ${index + 1}`}" />
      </video>
    `;
  }

  if (image?.type === "frameSequence") {
    const src = asset(`/thesis-site/assets/sticker-frames/${image.sequence}/${image.sequence}_00.png`);
    const alt = image.label || `${project.title} animated process capture ${index + 1}`;
    return `
      <button class="gallery-lightbox-trigger" type="button" data-lightbox-src="${src}" data-lightbox-alt="${alt}" aria-label="Open full image: ${alt}">
        <img
          src="${src}"
          alt="${alt}"
          data-frame-sequence="${image.sequence}"
          data-frame-count="${image.count}"
          data-frame-delay="${image.delay || 90}"
        />
        <span>Open full image</span>
      </button>
    `;
  }

  return "";
}

function renderHeroMedia(project) {
  if (project.heroVideo) {
    return `
      <div class="hero-video-wrap">
        <video src="${project.heroVideo}" poster="${project.heroImage}" controls playsinline preload="metadata">
          <img src="${project.heroImage}" alt="${project.title} hero visual" />
        </video>
        ${project.heroVideoLabel ? `<span class="hero-video-label">${project.heroVideoLabel}</span>` : ""}
      </div>
    `;
  }

  return `<img src="${project.heroImage}" alt="${project.title} hero visual" />`;
}

function renderProjectInteractive(project) {
  if (project.slug !== "tension-through-surveillance-restriction") return "";

  return `
    <section class="pet-interactive-lab" data-pet-demo>
      <div class="pet-interactive-lab__intro">
        <span class="case-file-section__eyebrow">INTERACTIVE PART / PET MONITOR</span>
        <h2>Try the restricted surveillance loop</h2>
        <p>This part follows the original thesis website demo: camera first, PetUI for status reading, and WorkUI for attention lock. Feed, Toy, and Notice play the original prototype feedback videos.</p>
      </div>
      <div class="pet-demo-window ue-demo ue-clean-demo">
        <div class="pet-demo-window__bar ue-hud">
          <span data-pet-demo-screen-name>MonitorUI</span>
          <span>Money <b data-pet-demo-money>$0</b></span>
          <span>Behavior <b data-pet-demo-behavior>Peaceful</b></span>
        </div>
        <div class="pet-demo-tabs ue-screen-switcher" aria-label="Pet prototype screen switcher">
          <button class="is-active" type="button" data-screen="monitor" data-pet-demo-screen="monitor">MonitorUI</button>
          <button type="button" data-screen="pet" data-pet-demo-screen="pet">PetUI</button>
          <button type="button" data-screen="work" data-pet-demo-screen="work">WorkUI</button>
        </div>
        <div class="pet-demo-stage ue-body ue-stage">
          <section class="pet-demo-screen ue-screen is-active" data-ue-screen="monitor" data-pet-demo-panel="monitor" aria-label="MonitorUI interaction">
            <div class="ue-camera-ui">
              <img class="ue-camera-bg" src="/thesis-site/assets/BG_CameraUI.png" alt="Camera UI frame from the Unreal prototype" />
              <div class="ue-camera-feed">
                <img id="ueMonitorImage" data-pet-demo-camera-image src="/thesis-site/assets/UI_monitor_Insidebg_ALERTED.png" alt="Camera monitor view of the full pet room" />
                <video id="ueFeedbackVideo" data-pet-demo-video class="ue-feedback-video" src="/thesis-site/assets/animation/sleep.mp4" muted playsinline preload="auto"></video>
                <div id="ueFeedback" class="ue-feedback" data-pet-demo-feedback>
                  <strong id="ueFeedbackTitle" data-pet-demo-action-title>Idle</strong>
                </div>
                <span id="ueCameraLabel" class="ue-camera-label">Camera</span>
              </div>
              <button class="ue-camera-arrow ue-camera-left" type="button" data-camera="left" data-pet-demo-camera="left" aria-label="Camera move left">
                <img src="/thesis-site/assets/Click_Right.png" alt="" />
              </button>
              <button class="ue-camera-arrow ue-camera-right" type="button" data-camera="right" data-pet-demo-camera="right" aria-label="Camera move right">
                <img src="/thesis-site/assets/Click_Left.png" alt="" />
              </button>
              <button class="ue-camera-arrow ue-camera-up" type="button" data-camera="up" data-pet-demo-camera="up" aria-label="Camera move up">
                <img src="/thesis-site/assets/Click_Left.png" alt="" />
              </button>
              <button class="ue-camera-arrow ue-camera-down" type="button" data-camera="down" data-pet-demo-camera="down" aria-label="Camera move down">
                <img src="/thesis-site/assets/Click_Left.png" alt="" />
              </button>
              <div class="pet-demo-actions ue-camera-actions" aria-label="Monitor actions">
                <button class="ue-round-action" type="button" data-pet-action="feed" data-pet-demo-action="feed" aria-label="Feed"><img src="/thesis-site/assets/UI_Monitor_Button_Feed.png" alt="" /><small></small></button>
                <button class="ue-round-action" type="button" data-pet-action="toy" data-pet-demo-action="toy" aria-label="Toy"><img src="/thesis-site/assets/UI_Monitor_Button_Toy.png" alt="" /><small></small></button>
                <button class="ue-round-action" type="button" data-pet-action="notice" data-pet-demo-action="notice" aria-label="Notice"><img src="/thesis-site/assets/UI_Monitor_Button_Notice.png" alt="" /><small></small></button>
              </div>
            </div>
          </section>
          <section class="pet-demo-screen ue-screen" data-ue-screen="pet" data-pet-demo-panel="pet" aria-label="PetUI status screen">
            <div class="ue-status-screen">
              <div class="ue-status-art">
                <img src="/thesis-site/assets/pet-status-reference.png" alt="Pet status detection interface from the original prototype" />
              </div>
              <div class="ue-status-panel">
                ${petMeter("Mood", "mood", 1, -5, 5)}
                ${petMeter("Hungry", "hunger", -1, -5, 5)}
                ${petMeter("Mischief", "mischief", 3, 0, 10)}
              </div>
            </div>
          </section>
          <section class="pet-demo-screen ue-screen" data-ue-screen="work" data-pet-demo-panel="work" aria-label="WorkUI screen">
            <div class="ue-work-screen">
              <img class="ue-work-bg" src="/thesis-site/assets/UI_Work_BG.png" alt="Work interface from the pet prototype" />
              <div class="ue-work-status">
                <strong id="ueWorkState" data-pet-demo-work-state>Ready</strong>
                <span id="ueWorkRemaining" data-pet-demo-work-remaining>Choose a duration</span>
              </div>
              <div class="ue-work-actions" aria-label="Work duration choices">
                <button class="ue-work-card is-short" type="button" data-work="short" data-pet-demo-work="short"><span>15Min-Work</span><strong>+$5</strong></button>
                <button class="ue-work-card is-half" type="button" data-work="half" data-pet-demo-work="half"><span>0.5Hour-Work</span><strong>+$15</strong></button>
                <button class="ue-work-card is-one" type="button" data-work="one" data-pet-demo-work="one"><span>1Hour-Work</span><strong>+$35</strong></button>
                <button class="ue-work-card is-two" type="button" data-work="two" data-pet-demo-work="two"><span>2hour-Work</span><strong>+$80</strong></button>
              </div>
            </div>
          </section>
        </div>
        <div class="ue-message-card">
          <span>Behavior</span>
          <p data-pet-demo-message>Monitor is open. Feed, Toy, and Notice are available only from this camera UI.</p>
        </div>
      </div>
    </section>
  `;
}

function petMeter(label, key, value, min, max, sliderImage = "") {
  const percent = Math.round(((value - min) / (max - min)) * 100);
  if (sliderImage) {
    return `
      <div class="ue-pet-slider ue-pet-slider-${key}" aria-label="${label}: ${value}">
        <span data-pet-meter="${key}" style="width: ${percent}%">
          <img src="${asset(`/thesis-site/assets/${sliderImage}`)}" alt="" />
        </span>
      </div>
      <strong class="ue-pet-value ue-pet-value-${key}" data-pet-value="${key}">${value}</strong>
    `;
  }

  return `
    <div class="ue-status-row">
      <span>${label}</span>
      <div class="ue-status-meter" aria-hidden="true"><span data-pet-meter="${key}" style="width: ${percent}%"></span></div>
      <strong data-pet-value="${key}">${value}</strong>
    </div>
  `;
}

function bindPetPortfolioDemo() {
  const demo = document.querySelector("[data-pet-demo]");
  if (!demo) return;

  const state = {
    screen: "monitor",
    mood: 1,
    hunger: -1,
    mischief: 3,
    money: 0,
    behavior: "Peaceful",
    cameraX: 0,
    cameraY: 0,
    workLocked: false,
    workRemaining: 0,
    workReward: 0,
    workImpact: null,
    feedbackPlaying: false,
    title: "Idle",
    message: "Monitor is open. Feed, Toy, and Notice are available only from this camera UI."
  };

  const actionMap = {
    feed: {
      title: "Feed",
      video: asset("/thesis-site/assets/animation/Feedback_Feed.mp4"),
      delta: { mood: 1, hunger: 3, mischief: -1 },
      message: "Feed increases Hungry value to Full value."
    },
    toy: {
      title: "Toy",
      video: asset("/thesis-site/assets/animation/Feedback_Toy.mp4"),
      delta: { mood: 2, hunger: -1, mischief: -2 },
      message: "Toy improves Mood and lowers Mischief, so it is best before risk becomes extreme."
    },
    notice: {
      title: "Notice",
      video: asset("/thesis-site/assets/animation/Feedback_Notice.mp4"),
      delta: { mood: -2, hunger: 0, mischief: -3 },
      message: "Notice suppresses Mischief strongly, but Mood drops because the intervention is harsh."
    }
  };

  const workMap = {
    short: { duration: 3, reward: 5, delta: { mood: -1, hunger: -1, mischief: 1 }, label: "15Min-Work" },
    half: { duration: 4, reward: 15, delta: { mood: -1, hunger: -2, mischief: 2 }, label: "0.5Hour-Work" },
    one: { duration: 5, reward: 35, delta: { mood: -2, hunger: -3, mischief: 3 }, label: "1Hour-Work" },
    two: { duration: 6, reward: 80, delta: { mood: -3, hunger: -4, mischief: 4 }, label: "2hour-Work" }
  };

  const ranges = {
    mood: { min: -5, max: 5 },
    hunger: { min: -5, max: 5 },
    mischief: { min: 0, max: 10 }
  };

  const clamp = (value, min, max) => Math.max(min, Math.min(max, value));
  const applyDelta = (delta) => {
    state.mood = clamp(state.mood + delta.mood, -5, 5);
    state.hunger = clamp(state.hunger + delta.hunger, -5, 5);
    state.mischief = clamp(state.mischief + delta.mischief, 0, 10);
    state.behavior = state.mischief >= 7 ? "Warning" : state.mood <= -3 ? "Stressed" : "Peaceful";
  };

  const switchScreen = (screen) => {
    if (state.workLocked && screen !== "work") {
      state.screen = "work";
      state.message = "WorkUI is locked until the current work session finishes.";
    } else {
      state.screen = screen;
    }

    demo.querySelectorAll("[data-pet-demo-screen]").forEach((button) => {
      button.classList.toggle("is-active", button.dataset.petDemoScreen === state.screen);
    });
    demo.querySelectorAll("[data-pet-demo-panel]").forEach((panel) => {
      panel.classList.toggle("is-active", panel.dataset.petDemoPanel === state.screen);
    });
    const name = demo.querySelector("[data-pet-demo-screen-name]");
    if (name) name.textContent = `${state.screen[0].toUpperCase()}${state.screen.slice(1)}UI`;
  };

  const renderButtons = () => {
    demo.querySelectorAll("[data-pet-demo-action]").forEach((button) => {
      button.disabled = state.workLocked || state.screen !== "monitor" || state.feedbackPlaying;
    });
    demo.querySelectorAll("[data-pet-demo-work]").forEach((button) => {
      button.disabled = state.workLocked;
    });
    demo.querySelectorAll("[data-pet-demo-screen]").forEach((button) => {
      button.disabled = state.workLocked;
    });
  };

  const showFeedback = (action) => {
    const video = demo.querySelector("[data-pet-demo-video]");
    const feedback = demo.querySelector("[data-pet-demo-feedback]");
    if (!video || !feedback) return;

    let finished = false;
    window.clearTimeout(showFeedback.timer);
    video.pause();
    video.classList.remove("is-active");
    video.removeAttribute("style");
    video.onended = null;
    video.onerror = null;
    video.onloadedmetadata = null;

    feedback.classList.remove("is-active");
    void feedback.offsetWidth;
    feedback.classList.add("is-active");
    state.feedbackPlaying = true;
    renderButtons();

    const finishFeedback = () => {
      if (finished) return;
      finished = true;
      window.clearTimeout(showFeedback.timer);
      video.pause();
      video.classList.remove("is-active");
      video.removeAttribute("style");
      state.feedbackPlaying = false;
      renderButtons();
    };

    showFeedback.timer = window.setTimeout(finishFeedback, 3600);
    video.loop = false;
    video.onended = finishFeedback;
    video.onerror = finishFeedback;
    video.onloadedmetadata = () => {
      const duration = Number.isFinite(video.duration) ? video.duration : 3.6;
      window.clearTimeout(showFeedback.timer);
      showFeedback.timer = window.setTimeout(finishFeedback, Math.min(Math.max(duration * 1000 + 400, 1800), 5000));
    };
    video.src = action.video;
    video.currentTime = 0;
    video.classList.add("is-active");
    video.style.display = "block";
    video.load();
    window.requestAnimationFrame(() => {
      if (!finished) video.play().catch(() => {});
    });
  };

  const render = () => {
    demo.querySelector("[data-pet-demo-money]").textContent = `$${state.money}`;
    demo.querySelector("[data-pet-demo-behavior]").textContent = state.behavior;
    demo.querySelector("[data-pet-demo-action-title]").textContent = state.title;
    demo.querySelector("[data-pet-demo-message]").textContent = state.message;
    demo.querySelector("[data-pet-demo-camera-image]")?.style.setProperty("--camera-x", `${state.cameraX}%`);
    demo.querySelector("[data-pet-demo-camera-image]")?.style.setProperty("--camera-y", `${state.cameraY}%`);
    demo.querySelector("[data-pet-demo-work-state]").textContent = state.workLocked ? "Locked" : "Ready";
    demo.querySelector("[data-pet-demo-work-remaining]").textContent = state.workLocked
      ? `${state.workRemaining}s remaining | Reward $${state.workReward}`
      : "Choose a duration";

    Object.entries(ranges).forEach(([key, range]) => {
      const value = state[key];
      const percent = Math.round(((value - range.min) / (range.max - range.min)) * 100);
      const meter = demo.querySelector(`[data-pet-meter="${key}"]`);
      if (meter) {
        meter.style.width = `${percent}%`;
        meter.style.setProperty("--meter", `${percent}%`);
      }
      const readout = demo.querySelector(`[data-pet-value="${key}"]`);
      if (readout) readout.textContent = value;
    });

    renderButtons();
  };

  demo.querySelectorAll("[data-pet-demo-screen]").forEach((button) => {
    button.addEventListener("click", () => {
      switchScreen(button.dataset.petDemoScreen);
      render();
    });
  });

  demo.querySelectorAll("[data-pet-demo-action]").forEach((button) => {
    button.addEventListener("click", () => {
      const action = actionMap[button.dataset.petDemoAction];
      if (!action || state.workLocked || state.screen !== "monitor" || state.feedbackPlaying) return;
      applyDelta(action.delta);
      state.title = action.title;
      state.message = action.message;
      switchScreen("monitor");
      render();
      showFeedback(action);
    });
  });

  demo.querySelectorAll("[data-pet-demo-work]").forEach((button) => {
    button.addEventListener("click", () => {
      const work = workMap[button.dataset.petDemoWork];
      if (!work || state.workLocked) return;
      state.workLocked = true;
      state.workRemaining = work.duration;
      state.workReward = work.reward;
      state.workImpact = work;
      state.title = work.label;
      state.message = `${work.label} started. Monitor controls are locked until the countdown finishes.`;
      switchScreen("work");
      render();
    });
  });

  demo.querySelectorAll("[data-pet-demo-camera]").forEach((button) => {
    button.addEventListener("click", () => {
      const direction = button.dataset.petDemoCamera;
      const step = 10;
      if (direction === "left") state.cameraX = Math.min(14, state.cameraX + step);
      if (direction === "right") state.cameraX = Math.max(-14, state.cameraX - step);
      if (direction === "up") state.cameraY = Math.min(12, state.cameraY + step);
      if (direction === "down") state.cameraY = Math.max(-12, state.cameraY - step);
      render();
    });
  });

  window.clearInterval(bindPetPortfolioDemo.timer);
  bindPetPortfolioDemo.timer = window.setInterval(() => {
    if (!document.body.contains(demo)) {
      window.clearInterval(bindPetPortfolioDemo.timer);
      return;
    }
    if (!state.workLocked) return;
    state.workRemaining -= 1;
    if (state.workRemaining > 0) {
      render();
      return;
    }
    const impact = state.workImpact;
    state.workLocked = false;
    state.money += state.workReward;
    if (impact) applyDelta(impact.delta);
    state.workRemaining = 0;
    state.workReward = 0;
    state.workImpact = null;
    state.message = "Work finished. The pet changed while attention was locked, so check PetUI or Monitor next.";
    render();
  }, 1000);

  switchScreen("monitor");
  render();
}

function bindFrameSequences() {
  window.__portfolioFrameTimers?.forEach((timer) => window.clearInterval(timer));
  window.__portfolioFrameTimers = [];

  document.querySelectorAll("[data-frame-sequence]").forEach((sticker) => {
    const sequence = sticker.dataset.frameSequence;
    const count = Number(sticker.dataset.frameCount);
    const delay = Number(sticker.dataset.frameDelay) || 90;

    if (!sequence || !Number.isFinite(count) || count < 2) return;

    const frames = Array.from({ length: count }, (_, index) => {
      const frameNumber = String(index).padStart(2, "0");
      return asset(`/thesis-site/assets/sticker-frames/${sequence}/${sequence}_${frameNumber}.png`);
    });
    const cache = frames.map((src) => {
      const image = new Image();
      image.src = src;
      return image;
    });
    let frameIndex = 0;

    const timer = window.setInterval(() => {
      if (!document.body.contains(sticker)) {
        window.clearInterval(timer);
        return;
      }

      frameIndex = (frameIndex + 1) % frames.length;
      if (cache[frameIndex].complete) {
        sticker.src = frames[frameIndex];
      }
    }, delay);

    window.__portfolioFrameTimers.push(timer);
  });
}

function renderLinks(project) {
  if (!project.links?.length) return "";
  return `<div class="project-links">${project.links.map((link) => `<a href="${link.href}" target="_blank" rel="noreferrer">${link.label}</a>`).join("")}</div>`;
}

function bindGalleryLightbox() {
  const triggers = [...document.querySelectorAll("[data-lightbox-src]")];
  if (!triggers.length) return;

  const lightbox = ensureGalleryLightbox();
  const image = lightbox.querySelector("[data-lightbox-image]");
  const caption = lightbox.querySelector("[data-lightbox-caption]");
  const close = () => {
    lightbox.classList.remove("is-open");
    lightbox.setAttribute("aria-hidden", "true");
    image.removeAttribute("src");
    caption.textContent = "";
    document.body.classList.remove("has-gallery-lightbox");
  };

  triggers.forEach((trigger) => {
    trigger.addEventListener("click", () => {
      image.src = trigger.dataset.lightboxSrc;
      image.alt = trigger.dataset.lightboxAlt || "Expanded project image";
      caption.textContent = trigger.dataset.lightboxAlt || "";
      lightbox.classList.add("is-open");
      lightbox.setAttribute("aria-hidden", "false");
      document.body.classList.add("has-gallery-lightbox");
      lightbox.querySelector("[data-lightbox-close]")?.focus({ preventScroll: true });
    });
  });

  lightbox.querySelectorAll("[data-lightbox-close], [data-lightbox-backdrop]").forEach((element) => {
    element.onclick = close;
  });

  if (!window.__portfolioLightboxKeyBound) {
    window.__portfolioLightboxKeyBound = true;
    window.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        document.querySelector(".gallery-lightbox.is-open [data-lightbox-close]")?.click();
      }
    });
  }
}

function ensureGalleryLightbox() {
  const existing = document.querySelector(".gallery-lightbox");
  if (existing) return existing;

  const lightbox = document.createElement("div");
  lightbox.className = "gallery-lightbox";
  lightbox.setAttribute("aria-hidden", "true");
  lightbox.innerHTML = `
    <button class="gallery-lightbox__backdrop" type="button" data-lightbox-backdrop aria-label="Close full image"></button>
    <figure class="gallery-lightbox__stage" role="dialog" aria-modal="true" aria-label="Expanded project image">
      <button class="gallery-lightbox__close" type="button" data-lightbox-close aria-label="Close full image">Close</button>
      <img data-lightbox-image alt="" />
      <figcaption data-lightbox-caption></figcaption>
    </figure>
  `;
  document.body.appendChild(lightbox);
  return lightbox;
}

function route() {
  const match = window.location.hash.match(/^#project\/(.+)$/);
  if (match) {
    renderProject(match[1]);
    window.scrollTo(0, 0);
    return;
  }

  renderHome();
  scrollToCurrentHash();
}

window.addEventListener("hashchange", () => {
  if (projects.length) route();
});

loadPortfolioData()
  .then(route)
  .catch((error) => {
    console.error(error);
    root.innerHTML = `<main class="app-shell"><p>Portfolio data failed to load.</p></main>`;
  });

function scrollToCurrentHash() {
  if (!window.location.hash || window.location.hash === "#") return;

  window.setTimeout(() => {
    const target = document.querySelector(window.location.hash);
    target?.scrollIntoView({ behavior: "smooth", block: "start" });
    target?.setAttribute("tabindex", "-1");
    target?.focus({ preventScroll: true });
  }, 50);
}

function bindButterflyGuide() {
  const guide = document.querySelector("[data-guide-butterfly]");
  if (!guide) return;

  guide.addEventListener("click", () => {
    if (window.location.hash.startsWith("#project/")) {
      window.location.hash = "#projects";
      return;
    }

    const flow = ["#profile-room", "#projects", "#skills", "#transmission"];
    const current = window.location.hash && flow.includes(window.location.hash) ? window.location.hash : "#profile-room";
    const next = flow[(flow.indexOf(current) + 1) % flow.length];
    window.location.hash = next;
    window.setTimeout(() => {
      document.querySelector(next)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 40);
  });
}

function bindEntryGate() {
  const gate = document.querySelector("[data-entry-gate]");
  if (!gate) return;

  const enterPortfolio = () => {
    gate.classList.add("is-leaving");
    gate.setAttribute("aria-hidden", "true");
    window.setTimeout(() => gate.remove(), 520);
  };

  gate.querySelectorAll("[data-enter-portfolio]").forEach((button) => {
    button.addEventListener("click", enterPortfolio);
  });

  gate.addEventListener("keydown", (event) => {
    if (event.key === "Enter") enterPortfolio();
  });

  window.setTimeout(() => gate.querySelector("[data-enter-portfolio]")?.focus(), 80);
}

function bindTransmissionCleanup() {
  document.body.classList.remove("is-transmission-visible");
  const transmission = document.querySelector("#transmission");
  if (!transmission || !("IntersectionObserver" in window)) return;

  const observer = new IntersectionObserver(
    ([entry]) => {
      document.body.classList.toggle("is-transmission-visible", entry.isIntersecting && entry.intersectionRatio > 0.28);
    },
    { threshold: [0, 0.28, 0.55] }
  );

  observer.observe(transmission);
}

let focusedProjectSlug = "";
let projectOpenTimer = 0;
let isOpeningProject = false;

function bindProjectWallInteractions() {
  focusedProjectSlug = "";
  isOpeningProject = false;
  window.clearTimeout(projectOpenTimer);
  const wall = document.querySelector("[data-project-wall]");
  const board = document.querySelector("[data-project-board]");
  const cards = [...document.querySelectorAll("[data-project-card]")];
  const focusView = document.querySelector("[data-project-focus-view]");

  if (!wall || !board || !cards.length) return;

  board.addEventListener("click", (event) => {
    const card = event.target.closest("[data-project-card]");
    if (!card) return;

    requestProjectOpen(event, card.dataset.slug, card, cards, wall, board, focusView);
  });

  window.openPortfolioProject = (event, slug) => {
    const card = event.currentTarget || document.querySelector(`[data-project-card][data-slug="${slug}"]`);
    requestProjectOpen(event, slug, card, cards, wall, board, focusView);
  };
}

function requestProjectOpen(event, slug, card, cards, wall, board, focusView) {
  event?.preventDefault();
  if (!slug || !card || isOpeningProject) return;

  if (focusedProjectSlug !== slug) {
    focusProjectCard({ slug, card, cards, wall, board, focusView });
  }

  window.clearTimeout(projectOpenTimer);
  projectOpenTimer = window.setTimeout(() => openFocusedProject(slug), 360);
}

function focusProjectCard({ slug, card, cards, wall, board, focusView }) {
  focusedProjectSlug = slug;
  const cardRect = card.getBoundingClientRect();
  const boardRect = board.getBoundingClientRect();
  const cardCenterX = cardRect.left + cardRect.width / 2;
  const cardCenterY = cardRect.top + cardRect.height / 2;
  const boardCenterX = boardRect.left + boardRect.width / 2;
  const boardCenterY = boardRect.top + boardRect.height / 2;

  board.style.setProperty("--focus-x", `${Math.round((boardCenterX - cardCenterX) * 0.72)}px`);
  board.style.setProperty("--focus-y", `${Math.round((boardCenterY - cardCenterY) * 0.72)}px`);
  wall.classList.add("is-focusing");

  cards.forEach((item) => {
    const isFocused = item === card;
    item.classList.toggle("is-focused", isFocused);
    item.classList.toggle("is-dimmed", !isFocused);
    item.setAttribute("aria-label", `${isFocused ? "Open project case file" : "Focus project"}: ${item.querySelector("h3")?.textContent || "project"}`);
  });

  if (focusView) {
    const title = card.querySelector("h3")?.textContent || "Selected project";
    focusView.innerHTML = `<span>Lens moving toward</span><strong>${title}</strong><small>Signal opening project page</small>`;
  }
}

function openFocusedProject(slug) {
  if (isOpeningProject) return;
  isOpeningProject = true;
  const shell = document.querySelector(".surveillance-shell");
  const wall = document.querySelector("[data-project-wall]");
  shell?.classList.add("is-opening-project");
  wall?.classList.add("is-opening-project");
  window.setTimeout(() => {
    const targetHash = `#project/${slug}`;
    if (window.location.hash === targetHash) {
      route();
      return;
    }
    window.location.hash = targetHash;
    window.setTimeout(() => {
      if (!document.querySelector(".project-page")) route();
    }, 80);
  }, 520);
}
