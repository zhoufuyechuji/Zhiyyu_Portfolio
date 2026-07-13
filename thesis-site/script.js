const scenes = [
  {
    label: "Menu",
    caption: "Main menu and entry state",
    src: "assets/thesis-media-v6/image13.png",
    alt: "Main menu screen with title and start buttons"
  },
  {
    label: "Monitor",
    caption: "Restricted camera view for spatial surveillance",
    src: "assets/thesis-media-v6/image23.png",
    alt: "Monitor UI with restricted camera controls"
  },
  {
    label: "Work",
    caption: "Work menu that trades money for surveillance absence",
    src: "assets/thesis-media-v6/image14.png",
    alt: "Work screen with work duration cards"
  },
  {
    label: "Pet State",
    caption: "Mood, hunger, and mischief values",
    src: "assets/pet-status-reference.png",
    alt: "Pet status detection interface"
  },
  {
    label: "Lock",
    caption: "Temporal lock while work is in progress",
    src: "assets/thesis-media-v6/image15.png",
    alt: "Locked work interface with remaining time"
  },
  {
    label: "Result",
    caption: "End-of-session result and loss summary",
    src: "assets/thesis-media-v6/image19.png",
    alt: "Result screen showing task log and total loss"
  }
];

const chartSets = [
  {
    label: "Temporal",
    title: "Temporal Constraint Test",
    type: "line",
    unit: "",
    max: 0.4,
    yLabel: "DER",
    xLabel: "Work Duration (seconds)",
    yTicks: [0, 0.1, 0.2, 0.3, 0.4],
    values: [
      { label: "5s", value: 0.12 },
      { label: "10s", value: 0.16 },
      { label: "15s", value: 0.26 },
      { label: "20s", value: 0.34 }
    ]
  },
  {
    label: "Spatial",
    title: "Spatial Restriction Metrics",
    unit: "/ 7",
    max: 7,
    values: [
      { label: "Limited-view tension", value: 6.5 },
      { label: "Off-screen uncertainty", value: 6.4 },
      { label: "Fear of missing events", value: 6.1 },
      { label: "Camera-search pressure", value: 5.8 }
    ]
  },
  {
    label: "Integrated",
    title: "Integrated Constraint Findings",
    unit: "%",
    max: 100,
    values: [
      { label: "Higher pressure", value: 62.5 },
      { label: "Predictive monitoring", value: 55 },
      { label: "Checked during risk", value: 57.5 },
      { label: "Missed interventions", value: 65 }
    ]
  }
];

const galleryImage = document.querySelector("#galleryImage");
const galleryCaption = document.querySelector("#galleryCaption");
const sceneTabs = document.querySelector(".scene-tabs");
const previousButton = document.querySelector(".arrow-left");
const nextButton = document.querySelector(".arrow-right");
const chartTabs = document.querySelector(".chart-tabs");
const chartTitle = document.querySelector("#chartTitle");
const chart = document.querySelector(".bar-chart");
const validationPhaseButtons = document.querySelectorAll("[data-validation-phase]");
const phaseInsights = document.querySelectorAll("[data-phase-insight]");
const phaseQuestionnaires = document.querySelectorAll("[data-phase-questionnaire]");
const phaseSetups = document.querySelectorAll("[data-phase-setup]");
const phaseSetupWrap = document.querySelector("[data-phase-setup-wrap]");
const derFormula = document.querySelector("[data-der-formula]");
const frameStickers = document.querySelectorAll("[data-frame-sequence]");
const ueScreenName = document.querySelector("#ueScreenName");
const ueMoney = document.querySelector("#ueMoney");
const ueMessage = document.querySelector("#ueMessage");
const ueMonitorImage = document.querySelector("#ueMonitorImage");
const ueFeedback = document.querySelector("#ueFeedback");
const ueFeedbackTitle = document.querySelector("#ueFeedbackTitle");
const ueFeedbackVideo = document.querySelector("#ueFeedbackVideo");
const ueBehavior = document.querySelector("#ueBehavior");
const ueCameraLabel = document.querySelector("#ueCameraLabel");
const ueWorkState = document.querySelector("#ueWorkState");
const ueWorkRemaining = document.querySelector("#ueWorkRemaining");
const ueScreens = document.querySelectorAll("[data-ue-screen]");
const ueScreenButtons = document.querySelectorAll("[data-screen]");
const ueActionButtons = document.querySelectorAll("[data-pet-action]");
const ueCameraButtons = document.querySelectorAll("[data-camera]");
const ueWorkButtons = document.querySelectorAll("[data-work]");
const petMeters = {
  mood: document.querySelector("#moodMeter"),
  hunger: document.querySelector("#hungerMeter"),
  mischief: document.querySelector("#mischiefMeter")
};
const petValues = {
  mood: document.querySelector("#moodValue"),
  hunger: document.querySelector("#hungerValue"),
  mischief: document.querySelector("#mischiefValue")
};

let currentScene = 0;
let currentChart = 0;
let feedbackTimer = null;
const uiLabels = {
  monitor: "MonitorUI",
  pet: "PetUI",
  work: "WorkUI"
};
const cameraFeed = {
  label: "Camera",
  src: "assets/UI_monitor_Insidebg_ALERTED.png",
  alt: "Camera monitor view of the full pet room"
};
const actionConfigs = {
  feed: {
    video: "assets/animation/Feedback_Feed.mp4",
    title: "Feed",
    message: "Feed increases Hungry value to Full value.",
    delta: { mood: 1, hunger: 3, mischief: -1 }
  },
  toy: {
    video: "assets/animation/Feedback_Toy.mp4",
    title: "Toy",
    message: "Toy improves Mood and lowers Mischief, so it is best before risk becomes extreme.",
    delta: { mood: 2, hunger: -1, mischief: -2 }
  },
  notice: {
    video: "assets/animation/Feedback_Notice.mp4",
    title: "Notice",
    message: "Notice suppresses Mischief strongly, but Mood drops because the intervention is harsh.",
    delta: { mood: -2, hunger: 0, mischief: -3 }
  }
};
const workConfigs = {
  short: { label: "15Min-Work", duration: 3, reward: 5, hunger: -1, mischief: 1, mood: -1 },
  half: { label: "0.5Hour-Work", duration: 4, reward: 15, hunger: -2, mischief: 2, mood: -1 },
  one: { label: "1Hour-Work", duration: 5, reward: 35, hunger: -3, mischief: 3, mood: -2 },
  two: { label: "2hour-Work", duration: 6, reward: 80, hunger: -4, mischief: 4, mood: -3 }
};
const statRanges = {
  mood: { min: -5, max: 5 },
  hunger: { min: -5, max: 5 },
  mischief: { min: 0, max: 10 }
};
const petState = {
  screen: "monitor",
  mood: 1,
  hunger: -1,
  mischief: 3,
  behavior: "Peaceful",
  cameraX: 0,
  cameraY: 0,
  money: 0,
  virtualMinutes: 8 * 60 + 30,
  workLocked: false,
  workRemaining: 0,
  workTotal: 0,
  workReward: 0,
  workImpact: null,
  idleTicks: 0,
  poopTimer: null,
  feedbackPlaying: false
};

function renderSceneTabs() {
  if (!sceneTabs || !galleryImage || !galleryCaption) {
    return;
  }

  scenes.forEach((scene, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.role = "tab";
    button.textContent = scene.label;
    button.setAttribute("aria-selected", index === currentScene ? "true" : "false");
    button.addEventListener("click", () => setScene(index));
    sceneTabs.appendChild(button);
  });
}

function setScene(index) {
  if (!sceneTabs || !galleryImage || !galleryCaption) {
    return;
  }

  currentScene = (index + scenes.length) % scenes.length;
  const scene = scenes[currentScene];

  galleryImage.src = scene.src;
  galleryImage.alt = scene.alt;
  galleryCaption.textContent = scene.caption;

  [...sceneTabs.children].forEach((button, buttonIndex) => {
    button.setAttribute("aria-selected", buttonIndex === currentScene ? "true" : "false");
  });
}

function renderChartTabs() {
  chartSets.forEach((set, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.role = "tab";
    button.textContent = set.label;
    button.setAttribute("aria-selected", index === currentChart ? "true" : "false");
    button.addEventListener("click", () => setChart(index));
    chartTabs.appendChild(button);
  });
}

function bindValidationPhaseButtons() {
  validationPhaseButtons.forEach((button) => {
    button.addEventListener("click", () => {
      setChart(Number(button.dataset.validationPhase));
    });
  });
}

function setChart(index) {
  currentChart = index;
  const set = chartSets[currentChart];
  const maxValue = set.max ?? Math.max(...set.values.map((item) => item.value));

  chartTitle.textContent = set.title;
  chart.replaceChildren();
  chart.className = set.type === "line" ? "bar-chart line-chart" : "bar-chart";

  if (set.type === "line") {
    renderLineChart(set, maxValue);
  } else {
    renderBarChart(set, maxValue);
  }

  [...chartTabs.children].forEach((button, buttonIndex) => {
    button.setAttribute("aria-selected", buttonIndex === currentChart ? "true" : "false");
  });

  validationPhaseButtons.forEach((button, buttonIndex) => {
    const isActive = buttonIndex === currentChart;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-selected", isActive ? "true" : "false");
  });

  phaseInsights.forEach((panel) => {
    panel.hidden = Number(panel.dataset.phaseInsight) !== currentChart;
  });

  phaseQuestionnaires.forEach((panel) => {
    panel.hidden = Number(panel.dataset.phaseQuestionnaire) !== currentChart;
  });

  let hasVisibleSetup = false;
  phaseSetups.forEach((panel) => {
    const isVisible = Number(panel.dataset.phaseSetup) === currentChart;
    panel.hidden = !isVisible;
    hasVisibleSetup ||= isVisible;
  });

  if (phaseSetupWrap) {
    phaseSetupWrap.hidden = !hasVisibleSetup;
  }

  if (derFormula) {
    derFormula.hidden = currentChart !== 0;
  }
}

function formatChartValue(item, set) {
  if (item.displayValue) {
    return item.displayValue;
  }

  if (set.unit === "%") {
    return `${item.value}%`;
  }

  return set.unit ? `${item.value} ${set.unit}` : `${item.value}`;
}

function renderBarChart(set, maxValue) {
  set.values.forEach((item) => {
    const row = document.createElement("div");
    row.className = "chart-row";

    const label = document.createElement("span");
    label.textContent = item.label;

    const track = document.createElement("div");
    track.className = "chart-track";

    const fill = document.createElement("div");
    fill.className = "chart-fill";
    fill.style.width = `${Math.max((item.value / maxValue) * 100, 8)}%`;

    const value = document.createElement("strong");
    value.textContent = formatChartValue(item, set);

    track.appendChild(fill);
    row.append(label, track, value);
    chart.appendChild(row);
  });
}

function svgEl(name) {
  return document.createElementNS("http://www.w3.org/2000/svg", name);
}

function renderLineChart(set, maxValue) {
  const width = 640;
  const height = 360;
  const margin = { top: 34, right: 34, bottom: 68, left: 72 };
  const plotWidth = width - margin.left - margin.right;
  const plotHeight = height - margin.top - margin.bottom;
  const svg = svgEl("svg");

  svg.setAttribute("viewBox", `0 0 ${width} ${height}`);
  svg.setAttribute("role", "img");
  svg.setAttribute("aria-label", `${set.title} line chart`);

  const ticks = set.yTicks ?? [0, maxValue / 4, maxValue / 2, (maxValue / 4) * 3, maxValue];
  ticks.forEach((tick) => {
    const y = margin.top + plotHeight - (tick / maxValue) * plotHeight;
    const grid = svgEl("line");
    grid.setAttribute("x1", margin.left);
    grid.setAttribute("x2", width - margin.right);
    grid.setAttribute("y1", y);
    grid.setAttribute("y2", y);
    grid.setAttribute("class", "line-grid");
    svg.appendChild(grid);

    const label = svgEl("text");
    label.setAttribute("x", margin.left - 14);
    label.setAttribute("y", y + 5);
    label.setAttribute("class", "line-tick");
    label.setAttribute("text-anchor", "end");
    label.textContent = tick.toFixed(2);
    svg.appendChild(label);
  });

  const xAxis = svgEl("line");
  xAxis.setAttribute("x1", margin.left);
  xAxis.setAttribute("x2", width - margin.right);
  xAxis.setAttribute("y1", margin.top + plotHeight);
  xAxis.setAttribute("y2", margin.top + plotHeight);
  xAxis.setAttribute("class", "line-axis");
  svg.appendChild(xAxis);

  const yAxis = svgEl("line");
  yAxis.setAttribute("x1", margin.left);
  yAxis.setAttribute("x2", margin.left);
  yAxis.setAttribute("y1", margin.top);
  yAxis.setAttribute("y2", margin.top + plotHeight);
  yAxis.setAttribute("class", "line-axis");
  svg.appendChild(yAxis);

  const points = set.values.map((item, itemIndex) => {
    const x = margin.left + (plotWidth / (set.values.length - 1)) * itemIndex;
    const y = margin.top + plotHeight - (item.value / maxValue) * plotHeight;
    return { x, y, item };
  });

  const path = svgEl("path");
  path.setAttribute("d", points.map((point, index) => `${index === 0 ? "M" : "L"} ${point.x} ${point.y}`).join(" "));
  path.setAttribute("class", "line-series");
  svg.appendChild(path);

  points.forEach((point) => {
    const dot = svgEl("circle");
    dot.setAttribute("cx", point.x);
    dot.setAttribute("cy", point.y);
    dot.setAttribute("r", 8);
    dot.setAttribute("class", "line-dot");
    svg.appendChild(dot);

    const valueLabel = svgEl("text");
    valueLabel.setAttribute("x", point.x);
    valueLabel.setAttribute("y", point.y - 18);
    valueLabel.setAttribute("class", "line-value");
    valueLabel.setAttribute("text-anchor", "middle");
    valueLabel.textContent = point.item.value.toFixed(2);
    svg.appendChild(valueLabel);

    const xLabel = svgEl("text");
    xLabel.setAttribute("x", point.x);
    xLabel.setAttribute("y", margin.top + plotHeight + 34);
    xLabel.setAttribute("class", "line-tick");
    xLabel.setAttribute("text-anchor", "middle");
    xLabel.textContent = point.item.label;
    svg.appendChild(xLabel);
  });

  const yTitle = svgEl("text");
  yTitle.setAttribute("x", margin.left - 52);
  yTitle.setAttribute("y", margin.top - 12);
  yTitle.setAttribute("class", "line-title");
  yTitle.textContent = set.yLabel;
  svg.appendChild(yTitle);

  const xTitle = svgEl("text");
  xTitle.setAttribute("x", margin.left + plotWidth / 2);
  xTitle.setAttribute("y", height - 14);
  xTitle.setAttribute("class", "line-title");
  xTitle.setAttribute("text-anchor", "middle");
  xTitle.textContent = set.xLabel;
  svg.appendChild(xTitle);

  chart.appendChild(svg);
}

function startFrameStickers() {
  frameStickers.forEach((sticker) => {
    const sequence = sticker.dataset.frameSequence;
    const count = Number(sticker.dataset.frameCount);
    const delay = Number(sticker.dataset.frameDelay) || 90;

    if (!sequence || !Number.isFinite(count) || count < 2) {
      return;
    }

    const frames = Array.from({ length: count }, (_, index) => {
      const frameNumber = String(index).padStart(2, "0");
      return `assets/sticker-frames/${sequence}/${sequence}_${frameNumber}.png`;
    });
    const cache = frames.map((src) => {
      const image = new Image();
      image.src = src;
      return image;
    });
    let frameIndex = 0;

    window.setInterval(() => {
      frameIndex = (frameIndex + 1) % frames.length;

      if (cache[frameIndex].complete) {
        sticker.src = frames[frameIndex];
      }
    }, delay);
  });
}

function clampStat(key, value) {
  const range = statRanges[key];

  if (!range) {
    return value;
  }

  return Math.min(range.max, Math.max(range.min, value));
}

function getMeterWidth(key, value) {
  const range = statRanges[key];

  if (!range) {
    return 0;
  }

  return ((value - range.min) / (range.max - range.min)) * 100;
}

function formatStatValue(value) {
  return Math.round(value).toString();
}

function formatClock(totalMinutes) {
  const minutesInDay = ((totalMinutes % 1440) + 1440) % 1440;
  const hours = Math.floor(minutesInDay / 60).toString().padStart(2, "0");
  const minutes = (minutesInDay % 60).toString().padStart(2, "0");
  return `${hours}:${minutes}`;
}

function setMessage(text) {
  ueMessage.textContent = text;
}

function getBehavior() {
  if (petState.mischief >= 9) {
    return "BiteSofa";
  }

  if (petState.hunger >= 5) {
    return "Poop";
  }

  if (petState.mischief >= 8) {
    return "RunKnock";
  }

  if (petState.hunger <= -3 || petState.mischief >= 7 || petState.mood <= -3) {
    return "Warning";
  }

  return "Peaceful";
}

function updateBehavior() {
  const previousBehavior = petState.behavior;
  petState.behavior = getBehavior();

  if (petState.behavior !== previousBehavior && petState.behavior !== "Peaceful") {
    if (petState.workLocked) {
      setMessage(`${petState.behavior} is pending, but WorkUI stays locked until the current work session finishes.`);
    } else {
      setMessage(`${petState.behavior} is pending. Return to Monitor and choose an intervention before damage escalates.`);
    }
  }

  if (petState.behavior === "Poop") {
    schedulePoopResolution();
  }
}

function schedulePoopResolution() {
  if (petState.poopTimer) {
    return;
  }

  petState.poopTimer = window.setTimeout(() => {
    petState.hunger = clampStat("hunger", petState.hunger - 3);
    petState.poopTimer = null;
    setMessage("Poop finished. Hungry value drops after Full is consumed.");
    renderUI();
  }, 1400);
}

function renderPetState() {
  Object.entries(petState).forEach(([key, value]) => {
    if (!petMeters[key] || !petValues[key]) {
      return;
    }

    const safeValue = clampStat(key, Math.round(value));
    petState[key] = safeValue;
    petMeters[key].style.width = `${getMeterWidth(key, safeValue)}%`;
    petValues[key].textContent = formatStatValue(safeValue);
  });
}

function showFeedback(action) {
  const config = actionConfigs[action];
  let finished = false;

  window.clearTimeout(feedbackTimer);
  ueFeedbackVideo.pause();
  ueFeedbackVideo.classList.remove("is-active");
  ueFeedbackVideo.removeAttribute("style");
  ueFeedbackVideo.onended = null;
  ueFeedbackVideo.onerror = null;
  ueFeedbackVideo.onloadedmetadata = null;

  ueFeedbackTitle.textContent = config.title;
  ueFeedback.classList.remove("is-active");
  void ueFeedback.offsetWidth;
  ueFeedback.classList.add("is-active");

  petState.feedbackPlaying = true;
  renderActionButtons();

  const finishFeedback = () => {
    if (finished) {
      return;
    }

    finished = true;
    window.clearTimeout(feedbackTimer);
    ueFeedbackVideo.pause();
    ueFeedbackVideo.classList.remove("is-active");
    ueFeedbackVideo.removeAttribute("style");
    petState.feedbackPlaying = false;
    renderActionButtons();
  };

  feedbackTimer = window.setTimeout(finishFeedback, 3600);
  ueFeedbackVideo.loop = false;
  ueFeedbackVideo.onended = finishFeedback;
  ueFeedbackVideo.onerror = finishFeedback;
  ueFeedbackVideo.onloadedmetadata = () => {
    const duration = Number.isFinite(ueFeedbackVideo.duration) ? ueFeedbackVideo.duration : 6;
    window.clearTimeout(feedbackTimer);
    feedbackTimer = window.setTimeout(finishFeedback, Math.min(Math.max(duration * 1000 + 400, 1800), 5000));
  };
  ueFeedbackVideo.src = config.video;
  ueFeedbackVideo.currentTime = 0;
  ueFeedbackVideo.classList.add("is-active");
  ueFeedbackVideo.style.display = "block";
  ueFeedbackVideo.load();
  window.requestAnimationFrame(() => {
    if (!finished) {
      ueFeedbackVideo.play().catch(() => {});
    }
  });
}

function renderCamera() {
  ueMonitorImage.src = cameraFeed.src;
  ueMonitorImage.alt = cameraFeed.alt;
  ueMonitorImage.style.setProperty("--camera-x", `${petState.cameraX}%`);
  ueMonitorImage.style.setProperty("--camera-y", `${petState.cameraY}%`);
  ueCameraLabel.textContent = cameraFeed.label;
}

function renderActionButtons() {
  ueActionButtons.forEach((button) => {
    const label = button.querySelector("small");
    const blocked = petState.workLocked || petState.screen !== "monitor" || petState.feedbackPlaying;

    button.disabled = blocked;
    label.textContent = "";
  });
}

function renderWorkState() {
  ueWorkState.textContent = petState.workLocked ? "Locked" : "Ready";
  ueWorkRemaining.textContent = petState.workLocked
    ? `${petState.workRemaining}s remaining | Reward $${petState.workReward}`
    : "Choose a duration";

  ueWorkButtons.forEach((button) => {
    button.disabled = petState.workLocked;
  });

  ueScreenButtons.forEach((button) => {
    button.disabled = petState.workLocked;
  });
}

function renderUI() {
  updateBehavior();
  renderPetState();
  renderCamera();
  renderActionButtons();
  renderWorkState();

  ueScreenName.textContent = uiLabels[petState.screen];
  ueMoney.textContent = `$${petState.money}`;
  ueBehavior.textContent = petState.behavior;
}

function switchScreen(screen) {
  if (petState.workLocked && screen !== "work") {
    petState.screen = "work";
    setMessage("WorkUI is locked until the current work session finishes.");
  } else {
    petState.screen = screen;
  }

  ueScreens.forEach((panel) => {
    panel.classList.toggle("is-active", panel.dataset.ueScreen === petState.screen);
  });

  document.querySelectorAll(".ue-screen-switcher [data-screen]").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.screen === petState.screen);
  });

  renderUI();
}

function runPetAction(action) {
  const config = actionConfigs[action];

  if (!config || petState.screen !== "monitor" || petState.workLocked || petState.feedbackPlaying) {
    return;
  }

  Object.entries(config.delta).forEach(([key, amount]) => {
    petState[key] += amount;
  });

  showFeedback(action);
  setMessage(config.message);
  renderUI();
}

function switchCamera(direction) {
  const step = 10;

  if (direction === "left") {
    petState.cameraX = Math.min(14, petState.cameraX + step);
  }

  if (direction === "right") {
    petState.cameraX = Math.max(-14, petState.cameraX - step);
  }

  if (direction === "up") {
    petState.cameraY = Math.min(12, petState.cameraY + step);
  }

  if (direction === "down") {
    petState.cameraY = Math.max(-12, petState.cameraY - step);
  }

  renderCamera();
}

function startWork(workType) {
  const config = workConfigs[workType];

  if (!config || petState.workLocked) {
    return;
  }

  petState.workLocked = true;
  petState.workRemaining = config.duration;
  petState.workTotal = config.duration;
  petState.workReward = config.reward;
  petState.workImpact = config;
  petState.screen = "work";
  switchScreen("work");
  setMessage(`${config.label} started. Monitor controls are locked until the countdown finishes.`);
  renderUI();
}

function finishWork() {
  const impact = petState.workImpact;

  petState.workLocked = false;
  petState.money += petState.workReward;

  if (impact) {
    petState.hunger += impact.hunger;
    petState.mischief += impact.mischief;
    petState.mood += impact.mood;
  }

  petState.workRemaining = 0;
  petState.workTotal = 0;
  petState.workReward = 0;
  petState.workImpact = null;
  setMessage("Work finished. The pet changed while attention was locked, so check PetUI or Monitor next.");
  renderUI();
}

function runTick() {
  petState.virtualMinutes += petState.workLocked ? 15 : 5;

  if (petState.workLocked) {
    petState.workRemaining -= 1;

    if (petState.workRemaining <= 0) {
      finishWork();
      return;
    }
  } else {
    petState.idleTicks += 1;

    if (petState.idleTicks % 8 === 0) {
      petState.hunger -= 1;
    }

    if (petState.idleTicks % 10 === 0) {
      petState.mischief += 1;
    }

    if (petState.idleTicks % 12 === 0 && (petState.hunger < -3 || petState.mischief > 7)) {
      petState.mood -= 1;
    }
  }

  renderUI();
}

if (previousButton && nextButton) {
  previousButton.addEventListener("click", () => setScene(currentScene - 1));
  nextButton.addEventListener("click", () => setScene(currentScene + 1));
}
ueScreenButtons.forEach((button) => {
  button.addEventListener("click", () => switchScreen(button.dataset.screen));
});
ueActionButtons.forEach((button) => {
  button.addEventListener("click", () => runPetAction(button.dataset.petAction));
});
ueCameraButtons.forEach((button) => {
  button.addEventListener("click", () => switchCamera(button.dataset.camera));
});
ueWorkButtons.forEach((button) => {
  button.addEventListener("click", () => startWork(button.dataset.work));
});

renderSceneTabs();
renderChartTabs();
bindValidationPhaseButtons();
setChart(currentChart);
startFrameStickers();
switchScreen("monitor");
window.setInterval(runTick, 1000);
