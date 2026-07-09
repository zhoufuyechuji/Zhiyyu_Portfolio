const projects = [
  {
    id: "about",
    channel: "00",
    title: "About Me",
    kicker: "SELF SIGNAL",
    image: "assets/about-persona.png",
    description:
      "Hi, I'm Zhiyun Yu. You can also call me Valentine. I work between game systems, interaction design, occult lore, fantasy, and stories that linger between the real and the unreal.",
    tags: ["Game Design", "Interaction", "SCAD", "Valentine"],
    position: { x: "18%", y: "24%", w: "210px", r: "-6deg", s: 0.92, camX: 260, camY: 110 },
    media: { type: "image", src: "assets/about-persona.png" },
    actions: [{ label: "Original About Page", href: "https://sites.google.com/view/yuzhiyunnnn/about-me" }]
  },
  {
    id: "thesis",
    channel: "01",
    title: "Tension through Surveillance Restriction",
    kicker: "MFA THESIS PROTOTYPE",
    image: "thesis-site/assets/monitor-inside-root.png",
    description:
      "A pet simulation thesis prototype about working, watching, and stopping trouble from a distance. The project studies how restricted surveillance creates tension, prediction, risk assessment, and strategy.",
    tags: ["UE 5.5", "Research", "UI", "Blueprint"],
    position: { x: "42%", y: "20%", w: "230px", r: "2deg", s: 0.94, camX: 70, camY: 180 },
    media: { type: "iframe", src: "thesis-site/index.html?nav-horizontal=1779369800000#top" },
    actions: [
      { label: "Open Full Thesis Site", href: "thesis-site/index.html#top" },
      { label: "Thesis PDF", href: "thesis-site/assets/thesis-paper.pdf" }
    ]
  },
  {
    id: "office",
    channel: "02",
    title: "Office Drift",
    kicker: "ARCADE REMAKE",
    image: "assets/projects/officedrift-2025-03-05/image-03.png",
    description:
      "A surreal UE5 arcade shooter that transforms office anxiety into a dreamlike combat stage. Work objects become enemies, dive patterns become pressure rhythms, and red-black UI amplifies the stress signal.",
    tags: ["Unreal Engine 5", "Gameplay", "System", "UI"],
    position: { x: "78%", y: "27%", w: "235px", r: "5deg", s: 0.96, camX: -270, camY: 95 },
    media: { type: "image", src: "assets/projects/officedrift-2025-03-05/image-04.png" }
  },
  {
    id: "erebus",
    channel: "03",
    title: "Erebus",
    kicker: "INDIE GAME",
    image: "assets/projects/indiegame-erebus-2022-03-08/image-03.jpg",
    description:
      "A dark 2D side-scrolling platform game in Unity, built around gothic aesthetics, myth-inspired narrative, Corgi Engine customization, combat tuning, level rhythm, and original character/UI art.",
    tags: ["Unity", "Corgi Engine", "Combat", "Level Design"],
    position: { x: "15%", y: "58%", w: "225px", r: "4deg", s: 0.9, camX: 280, camY: -85 },
    media: { type: "video", src: "assets/projects/indiegame-erebus-2022-03-08/intro.mp4", poster: "assets/projects/indiegame-erebus-2022-03-08/image-03.jpg" },
    actions: [{ label: "Open itch.io", href: "https://yzy-jinn.itch.io/erebus" }]
  },
  {
    id: "city",
    channel: "04",
    title: "City of Illusions",
    kicker: "GAME DESIGN DOCUMENT",
    image: "assets/projects/gdd-city-of-illusion-english-2024/image-06.jpg",
    description:
      "A narrative puzzle-adventure GDD set in an illusionary Pompeii. Players move between a luxurious false city and a decayed reality through fragile points, environmental puzzles, and hidden truth fragments.",
    tags: ["GDD", "Puzzle", "Narrative", "Dual World"],
    position: { x: "83%", y: "60%", w: "205px", r: "-7deg", s: 0.9, camX: -310, camY: -95 },
    media: { type: "image", src: "assets/projects/gdd-city-of-illusion-english-2024/image-07.png" }
  },
  {
    id: "dessert",
    channel: "05",
    title: "Dessert Dash",
    kicker: "UE5 BLUEPRINT PRACTICE",
    image: "assets/projects/ue5-2024/image-01.png",
    description:
      "A modular UE5 Blueprint platformer framework in a dessert world. It tests reusable actors for coins, health pickups, cannons, spikes, moving platforms, teleporters, thresholds, and exit progression.",
    tags: ["UE5", "Blueprint", "Platformer", "Reusable Actors"],
    position: { x: "33%", y: "76%", w: "215px", r: "-4deg", s: 0.9, camX: 150, camY: -250 },
    media: { type: "video", src: "assets/projects/ue5-2024/demo.mp4", poster: "assets/projects/ue5-2024/image-01.png" }
  },
  {
    id: "eye",
    channel: "06",
    title: "Children's Eye Care Knowledge Game",
    kicker: "SERIOUS GAME",
    image: "assets/projects/2021-01-08/image-02.png",
    description:
      "A commercial Unity serious game for children's eye-care knowledge, translating visual direction recognition, eye structure, eye-drop steps, glasses habits, symptoms, and injury prevention into touch-based mini games.",
    tags: ["Unity", "Serious Game", "Touch UI", "Education"],
    position: { x: "62%", y: "78%", w: "220px", r: "7deg", s: 0.92, camX: -95, camY: -260 },
    media: { type: "video", src: "assets/projects/2021-01-08/demo.mp4", poster: "assets/projects/2021-01-08/image-01.png" }
  }
];

const room = document.querySelector("[data-room]");
const monitorField = document.querySelector("[data-monitor-field]");
const bootPopup = document.querySelector("[data-boot-popup]");
const terminalLine = document.querySelector("[data-terminal-line]");
const projectInterface = document.querySelector("[data-project-interface]");
const closeInterfaceButton = document.querySelector("[data-close-interface]");
const mediaTarget = document.querySelector("[data-interface-media]");
const kickerTarget = document.querySelector("[data-interface-kicker]");
const titleTarget = document.querySelector("[data-interface-title]");
const descriptionTarget = document.querySelector("[data-interface-description]");
const tagsTarget = document.querySelector("[data-interface-tags]");
const actionsTarget = document.querySelector("[data-interface-actions]");
const channelCount = document.querySelector("[data-channel-count]");
const caseLines = document.querySelector("[data-case-lines]");
const enterProjectButton = document.querySelector("[data-enter-project]");
const projectDeepView = document.querySelector("[data-project-deep-view]");
const deepBackButton = document.querySelector("[data-deep-back]");
const deepRoomButton = document.querySelector("[data-deep-room]");
const deepMediaTarget = document.querySelector("[data-deep-media]");
const deepKickerTarget = document.querySelector("[data-deep-kicker]");
const deepTitleTarget = document.querySelector("[data-deep-title]");
const deepDescriptionTarget = document.querySelector("[data-deep-description]");
const deepTagsTarget = document.querySelector("[data-deep-tags]");
const deepActionsTarget = document.querySelector("[data-deep-actions]");
const deepPrevButton = document.querySelector("[data-deep-prev]");
const deepNextButton = document.querySelector("[data-deep-next]");
const deepCounterTarget = document.querySelector("[data-deep-counter]");
const goldfish = document.querySelector("[data-goldfish]");

let activeProject = null;
let transitionTimers = [];
let deepMediaIndex = 0;
let activeGallery = [];
let fishTargetIndex = 0;

function clearTransitionTimers() {
  transitionTimers.forEach((timer) => window.clearTimeout(timer));
  transitionTimers = [];
}

const projectGalleries = {
  about: [
    { type: "image", src: "assets/about-persona.png", label: "Personal signal" }
  ],
  thesis: [
    { type: "iframe", src: "thesis-site/index.html?nav-horizontal=1779369800000#top", label: "Interactive thesis website" }
  ],
  office: [
    { type: "image", src: "assets/projects/officedrift-2025-03-05/image-01.png", label: "Office Drift screen 01" },
    { type: "image", src: "assets/projects/officedrift-2025-03-05/image-02.png", label: "Office Drift screen 02" },
    { type: "image", src: "assets/projects/officedrift-2025-03-05/image-03.png", label: "Office Drift screen 03" },
    { type: "image", src: "assets/projects/officedrift-2025-03-05/image-04.png", label: "Office Drift screen 04" },
    { type: "image", src: "assets/projects/officedrift-2025-03-05/image-05.png", label: "Office Drift screen 05" }
  ],
  erebus: [
    { type: "video", src: "assets/projects/indiegame-erebus-2022-03-08/intro.mp4", poster: "assets/projects/indiegame-erebus-2022-03-08/image-03.jpg", label: "Erebus intro" },
    { type: "video", src: "assets/projects/indiegame-erebus-2022-03-08/demo.mp4", poster: "assets/projects/indiegame-erebus-2022-03-08/image-04.jpg", label: "Erebus demo" },
    { type: "image", src: "assets/projects/indiegame-erebus-2022-03-08/image-01.png", label: "Erebus screen 01" },
    { type: "image", src: "assets/projects/indiegame-erebus-2022-03-08/image-03.jpg", label: "Erebus screen 02" },
    { type: "image", src: "assets/projects/indiegame-erebus-2022-03-08/image-06.png", label: "Erebus screen 03" }
  ],
  city: [
    { type: "image", src: "assets/projects/gdd-city-of-illusion-english-2024/image-01.png", label: "City of Illusions page 01" },
    { type: "image", src: "assets/projects/gdd-city-of-illusion-english-2024/image-02.png", label: "City of Illusions page 02" },
    { type: "image", src: "assets/projects/gdd-city-of-illusion-english-2024/image-05.png", label: "City of Illusions page 03" },
    { type: "image", src: "assets/projects/gdd-city-of-illusion-english-2024/image-06.jpg", label: "City of Illusions page 04" },
    { type: "image", src: "assets/projects/gdd-city-of-illusion-english-2024/image-07.png", label: "City of Illusions page 05" },
    { type: "image", src: "assets/projects/gdd-city-of-illusion-english-2024/image-10.png", label: "City of Illusions page 06" }
  ],
  dessert: [
    { type: "video", src: "assets/projects/ue5-2024/demo.mp4", poster: "assets/projects/ue5-2024/image-01.png", label: "Dessert Dash demo" },
    { type: "image", src: "assets/projects/ue5-2024/image-01.png", label: "Dessert Dash screen" }
  ],
  eye: [
    { type: "video", src: "assets/projects/2021-01-08/demo.mp4", poster: "assets/projects/2021-01-08/image-01.png", label: "Eye care game demo" },
    { type: "image", src: "assets/projects/2021-01-08/image-01.png", label: "Eye care game screen 01" },
    { type: "image", src: "assets/projects/2021-01-08/image-02.png", label: "Eye care game screen 02" },
    { type: "image", src: "assets/projects/2021-01-08/image-03.png", label: "Eye care game screen 03" },
    { type: "image", src: "assets/projects/2021-01-08/image-04.png", label: "Eye care game screen 04" },
    { type: "image", src: "assets/projects/2021-01-08/image-09.png", label: "Eye care game screen 05" }
  ]
};

function getGallery(project) {
  return projectGalleries[project.id] || [project.media];
}

function createTv(project, index) {
  const button = document.createElement("button");
  const xPercent = Number.parseFloat(project.position.x);
  const yPercent = Number.parseFloat(project.position.y);
  const yaw = Number.isFinite(xPercent) ? Math.max(-18, Math.min(18, (50 - xPercent) * 0.45)) : 0;
  const pitch = Number.isFinite(yPercent) ? Math.max(-8, Math.min(8, (yPercent - 50) * -0.12)) : 0;
  const depth = Number.isFinite(yPercent) ? Math.max(-90, Math.min(70, (yPercent - 52) * 2.1)) : 0;

  button.className = "tv clue-card";
  button.type = "button";
  button.dataset.projectId = project.id;
  button.style.setProperty("--x", project.position.x);
  button.style.setProperty("--y", project.position.y);
  button.style.setProperty("--w", project.position.w);
  button.style.setProperty("--r", project.position.r);
  button.style.setProperty("--s", project.position.s);
  button.style.setProperty("--yaw", `${yaw.toFixed(1)}deg`);
  button.style.setProperty("--pitch", `${pitch.toFixed(1)}deg`);
  button.style.setProperty("--depth", `${depth.toFixed(0)}px`);
  button.style.setProperty("--tape-r", `${index % 2 === 0 ? -5 : 6}deg`);
  button.setAttribute("aria-label", `Open ${project.title}`);

  button.innerHTML = `
    <span class="clue-pin" aria-hidden="true"></span>
    <span class="clue-tape clue-tape-top" aria-hidden="true"></span>
    <span class="clue-paper">
      <span class="clue-photo">
        <img src="${project.image}" alt="">
      </span>
      <span class="clue-meta">
        <span>CAM ${project.channel}</span>
        <strong>${project.title}</strong>
      </span>
    </span>
    <span class="monitor-label">
      <span>${project.kicker}</span>
      <span>${String(index + 1).padStart(2, "0")}</span>
    </span>
  `;

  button.addEventListener("click", () => startProject(project, button));
  monitorField.appendChild(button);
}

function setMedia(media) {
  mediaTarget.innerHTML = "";

  if (media.type === "video") {
    const video = document.createElement("video");
    video.controls = true;
    video.preload = "metadata";
    video.poster = media.poster || "";
    video.innerHTML = `<source src="${media.src}" type="video/mp4">`;
    mediaTarget.appendChild(video);
    return;
  }

  if (media.type === "iframe") {
    const iframe = document.createElement("iframe");
    iframe.src = media.src;
    iframe.title = "Selected project preview";
    iframe.loading = "lazy";
    mediaTarget.appendChild(iframe);
    return;
  }

  const image = document.createElement("img");
  image.src = media.src;
  image.alt = "";
  mediaTarget.appendChild(image);
}

function renderProject(project) {
  activeProject = project;
  kickerTarget.textContent = project.kicker;
  titleTarget.textContent = project.title;
  descriptionTarget.textContent = project.description;
  tagsTarget.innerHTML = project.tags.map((tag) => `<span>${tag}</span>`).join("");
  actionsTarget.innerHTML = (project.actions || [])
    .map((action) => `<a href="${action.href}" target="_blank" rel="noreferrer">${action.label}</a>`)
    .join("");
  setMedia(project.media);
  channelCount.textContent = `${project.channel}/${String(projects.length - 1).padStart(2, "0")}`;
}

function setDeepMedia(media) {
  deepMediaTarget.innerHTML = "";

  if (media.type === "video") {
    const video = document.createElement("video");
    video.controls = true;
    video.preload = "metadata";
    video.poster = media.poster || "";
    video.innerHTML = `<source src="${media.src}" type="video/mp4">`;
    deepMediaTarget.appendChild(video);
    return;
  }

  if (media.type === "iframe") {
    const iframe = document.createElement("iframe");
    iframe.src = media.src;
    iframe.title = media.label || "Project page";
    deepMediaTarget.appendChild(iframe);
    return;
  }

  const image = document.createElement("img");
  image.src = media.src;
  image.alt = media.label || "";
  deepMediaTarget.appendChild(image);
}

function showDeepMedia(index) {
  if (!activeGallery.length) return;

  deepMediaIndex = (index + activeGallery.length) % activeGallery.length;
  setDeepMedia(activeGallery[deepMediaIndex]);
  deepCounterTarget.textContent = `${String(deepMediaIndex + 1).padStart(2, "0")}/${String(activeGallery.length).padStart(2, "0")}`;
  deepPrevButton.disabled = activeGallery.length <= 1;
  deepNextButton.disabled = activeGallery.length <= 1;
}

function openDeepProject() {
  if (!activeProject) return;

  activeGallery = getGallery(activeProject);
  deepMediaIndex = 0;
  deepKickerTarget.textContent = `${activeProject.kicker} // FULL PROJECT`;
  deepTitleTarget.textContent = activeProject.title;
  deepDescriptionTarget.textContent = activeProject.description;
  deepTagsTarget.innerHTML = activeProject.tags.map((tag) => `<span>${tag}</span>`).join("");
  deepActionsTarget.innerHTML = (activeProject.actions || [])
    .map((action) => `<a href="${action.href}" target="_blank" rel="noreferrer">${action.label}</a>`)
    .join("");
  showDeepMedia(0);
  projectDeepView.classList.add("is-visible");
  projectDeepView.setAttribute("aria-hidden", "false");
}

function closeDeepProject() {
  projectDeepView.classList.remove("is-visible");
  projectDeepView.setAttribute("aria-hidden", "true");
}

function startProject(project, tvButton) {
  clearTransitionTimers();
  projectInterface.classList.remove("is-visible");
  projectInterface.setAttribute("aria-hidden", "true");
  document.querySelectorAll(".tv").forEach((tv) => tv.classList.remove("is-selected"));
  tvButton.classList.add("is-selected");

  const roomRect = room.getBoundingClientRect();
  const tvShell = tvButton.querySelector(".clue-paper");
  const tvRect = (tvShell || tvButton).getBoundingClientRect();
  const scale = project.id === "thesis" ? 1.92 : 1.78;
  const tvCenterX = tvRect.left + tvRect.width / 2;
  const tvCenterY = tvRect.top + tvRect.height / 2;
  const viewportCenterX = roomRect.left + roomRect.width / 2;
  const viewportCenterY = roomRect.top + roomRect.height / 2;
  const originX = roomRect.left + roomRect.width * 0.5;
  const originY = roomRect.top + roomRect.height * 0.54;
  const cameraX = viewportCenterX - originX - scale * (tvCenterX - originX);
  const cameraY = viewportCenterY - originY - scale * (tvCenterY - originY);

  room.style.setProperty("--camera-x", `${cameraX}px`);
  room.style.setProperty("--camera-y", `${cameraY}px`);
  room.style.setProperty("--camera-scale", scale);
  room.classList.add("is-zooming");

  transitionTimers.push(window.setTimeout(() => {
    room.classList.add("is-glitching");
  }, 1720));

  transitionTimers.push(window.setTimeout(() => {
    terminalLine.textContent = `cam ${project.channel} locked / ${project.title} / signal fragment found`;
    bootPopup.classList.add("is-visible");
    bootPopup.setAttribute("aria-hidden", "false");
  }, 1880));

  transitionTimers.push(window.setTimeout(() => {
    renderProject(project);
    bootPopup.classList.remove("is-visible");
    bootPopup.setAttribute("aria-hidden", "true");
    projectInterface.classList.add("is-visible");
    projectInterface.setAttribute("aria-hidden", "false");
    room.classList.remove("is-glitching");
  }, 2820));
}

function closeInterface() {
  clearTransitionTimers();
  closeDeepProject();
  projectInterface.classList.remove("is-visible");
  projectInterface.setAttribute("aria-hidden", "true");
  bootPopup.classList.remove("is-visible");
  bootPopup.setAttribute("aria-hidden", "true");
  room.classList.remove("is-zooming", "is-glitching");
  room.style.setProperty("--camera-x", "0px");
  room.style.setProperty("--camera-y", "0px");
  room.style.setProperty("--camera-scale", "1");
  document.querySelectorAll(".tv").forEach((tv) => tv.classList.remove("is-selected"));
}

projects.forEach(createTv);
channelCount.textContent = `00/${String(projects.length - 1).padStart(2, "0")}`;

function drawCaseLines() {
  if (!caseLines) return;

  const links = [
    ["about", "thesis"],
    ["thesis", "office"],
    ["thesis", "city"],
    ["about", "erebus"],
    ["erebus", "dessert"],
    ["dessert", "eye"],
    ["city", "eye"],
    ["office", "city"]
  ];
  const stageRect = caseLines.parentElement.getBoundingClientRect();

  caseLines.setAttribute("viewBox", `0 0 ${Math.round(stageRect.width)} ${Math.round(stageRect.height)}`);
  caseLines.innerHTML = "";

  links.forEach(([fromId, toId], index) => {
    const from = document.querySelector(`[data-project-id="${fromId}"]`);
    const to = document.querySelector(`[data-project-id="${toId}"]`);
    if (!from || !to) return;

    const fromRect = from.getBoundingClientRect();
    const toRect = to.getBoundingClientRect();
    const x1 = fromRect.left + fromRect.width / 2 - stageRect.left;
    const y1 = fromRect.top + fromRect.height / 2 - stageRect.top;
    const x2 = toRect.left + toRect.width / 2 - stageRect.left;
    const y2 = toRect.top + toRect.height / 2 - stageRect.top;
    const midX = (x1 + x2) / 2 + (index % 2 === 0 ? 24 : -22);
    const midY = (y1 + y2) / 2 + (index % 3 === 0 ? -18 : 16);
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");

    path.setAttribute("d", `M ${x1} ${y1} Q ${midX} ${midY} ${x2} ${y2}`);
    path.setAttribute("class", index % 3 === 0 ? "case-thread case-thread-alt" : "case-thread");
    caseLines.appendChild(path);
  });
}

window.addEventListener("load", drawCaseLines);
window.addEventListener("resize", drawCaseLines);
window.setTimeout(drawCaseLines, 120);

function moveGoldfish() {
  if (!goldfish) return;

  const screens = Array.from(document.querySelectorAll(".tv-screen"));
  if (!screens.length) return;

  const roomRect = room.getBoundingClientRect();
  const screen = screens[fishTargetIndex % screens.length];
  const screenRect = screen.getBoundingClientRect();
  const side = fishTargetIndex % 2 === 0 ? -1 : 1;
  const x = screenRect.left + screenRect.width / 2 - roomRect.left + side * screenRect.width * 0.38;
  const y = screenRect.top + screenRect.height / 2 - roomRect.top - screenRect.height * 0.2;

  goldfish.style.setProperty("--fish-x", `${Math.round(x)}px`);
  goldfish.style.setProperty("--fish-y", `${Math.round(y)}px`);
  goldfish.style.setProperty("--fish-rotate", `${side * 8}deg`);
  goldfish.style.setProperty("--fish-scale", `${fishTargetIndex % 3 === 0 ? 1.16 : 1}`);
  goldfish.classList.add("is-swimming");

  window.setTimeout(() => {
    goldfish.classList.remove("is-swimming");
  }, 1650);

  fishTargetIndex += 1;
}

closeInterfaceButton.addEventListener("click", closeInterface);
enterProjectButton.addEventListener("click", openDeepProject);
deepBackButton.addEventListener("click", closeDeepProject);
deepRoomButton.addEventListener("click", closeInterface);
deepPrevButton.addEventListener("click", () => showDeepMedia(deepMediaIndex - 1));
deepNextButton.addEventListener("click", () => showDeepMedia(deepMediaIndex + 1));

if (goldfish) {
  window.addEventListener("load", () => {
    window.setTimeout(moveGoldfish, 520);
  });
  goldfish.addEventListener("click", moveGoldfish);
}

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    if (projectDeepView.classList.contains("is-visible")) {
      closeDeepProject();
      return;
    }

    closeInterface();
  }
});
