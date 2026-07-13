// Replace text, links, and image paths here when you want to customize the portfolio content.
export const projects = [
  {
    id: "thesis",
    title: "Pet is also busy today",
    slug: "tension-through-surveillance-restriction",
    role: "Game Designer / Technical Designer",
    type: "MFA Thesis Prototype",
    tools: ["Unreal Engine 5.5", "Blueprint", "UX Research", "UI Design"],
    timeline: "2026",
    thumbnail: "/thesis-site/assets/pet-status-board.png",
    heroImage: "/thesis-site/assets/pet-status-board.png",
    shortDescription:
      "A pet simulation thesis prototype about distant watching, restricted information, and risk prediction.",
    fullDescription:
      "This thesis explores how restricted surveillance can create tension in a pet simulation game. The player cannot directly control every event, so they must read partial signals, judge risk, and decide when to intervene.",
    designGoal:
      "Turn limitation into pressure: make the player feel responsible while never giving them perfect information.",
    playerExperienceGoal:
      "Players should feel alert, uneasy, and strategic as they interpret small behavioral clues from a distance.",
    breakdownSections: [
      {
        title: "Surveillance Loop",
        body: "The core loop asks players to observe, infer, prioritize, and respond before small problems become irreversible."
      },
      {
        title: "Restriction System",
        body: "Information is intentionally partial, making timing, attention, and pattern recognition central to the experience."
      },
      {
        title: "Interface Direction",
        body: "The UI is built around monitor views, status readouts, warning states, and low-level ambiguity."
      }
    ],
    galleryImages: [
      {
        type: "video",
        src: "/thesis-site/assets/studio-component-itgm-spring2026.mp4",
        poster: "/thesis-site/assets/pet-status-board.png",
        label: "Studio Component gameplay video"
      },
      { type: "frameSequence", sequence: "walk", count: 20, delay: 80, label: "Cat walk animation" },
      { type: "frameSequence", sequence: "sleep", count: 60, delay: 100, label: "Cat sleep animation" },
      { type: "frameSequence", sequence: "warning", count: 30, delay: 80, label: "Cat warning animation" },
      "/thesis-site/assets/pet-status-reference.png",
      "/thesis-site/assets/UI_Work_BG.png",
      "/thesis-site/assets/UI_monitor_Insidebg_ALERTED.png"
    ],
    contribution:
      "Designed the concept, research framing, interaction loop, UI direction, Unreal prototype structure, and thesis website integration.",
    reflection:
      "I learned how surveillance mechanics can create emotional stakes without giving players total agency.",
    tags: ["Surveillance", "Research", "UE5", "Systems"],
    theme: {
      themeName: "pet-electronic",
      backgroundStyle: "soft pink-purple electronic pet room",
      primaryColor: "#160f24",
      secondaryColor: "#2c1a42",
      accentColor: "#f2a7d8",
      accentSecondary: "#9cc7ff",
      textColor: "#fff3fb",
      panelStyle: "soft rounded pet monitor panels",
      decorativeMotifs: ["pet status", "soft monitor UI", "pink signal", "care alert"],
      imageTreatment: "cute pink-purple electronic glow",
      pageMood: "cute, tense, soft electronic"
    },
    links: [{ label: "Open Thesis Site", href: "/thesis-site/index.html#top" }]
  },
  {
    id: "office",
    title: "Office Drift",
    slug: "office-drift",
    role: "Gameplay Designer / UI Designer",
    type: "Arcade Shooter Prototype",
    tools: ["Unreal Engine 5", "Blueprint", "UI", "Gameplay Tuning"],
    timeline: "2025",
    thumbnail: "/assets/projects/officedrift-2025-03-05/image-03.png",
    heroImage: "/assets/projects/officedrift-2025-03-05/image-04.png",
    shortDescription:
      "A surreal arcade shooter where office anxiety becomes a combat arena.",
    fullDescription:
      "Office Drift transforms everyday office objects and pressure into enemies, motion rhythms, and red-black interface feedback.",
    designGoal:
      "Build an arcade remake that communicates stress through movement, enemy behavior, and visual rhythm.",
    playerExperienceGoal:
      "The player should feel trapped inside a fast, anxious office dream while still reading clear gameplay states.",
    breakdownSections: [
      { title: "Combat Rhythm", body: "Enemy pacing and projectile pressure create a constant push-pull between panic and control." },
      { title: "Visual Language", body: "Office props, red UI states, and compressed spaces turn routine work objects into threat signals." }
    ],
    galleryImages: [
      "/assets/projects/officedrift-2025-03-05/image-01.png",
      "/assets/projects/officedrift-2025-03-05/image-02.png",
      "/assets/projects/officedrift-2025-03-05/image-03.png",
      "/assets/projects/officedrift-2025-03-05/image-04.png",
      "/assets/projects/officedrift-2025-03-05/image-05.png"
    ],
    contribution:
      "Created the gameplay concept, combat direction, level mood, and UI presentation.",
    reflection:
      "The project helped me connect emotional theme with readable arcade systems.",
    tags: ["Arcade", "UE5", "Combat", "UI"],
    theme: {
      themeName: "office-pressure",
      backgroundStyle: "charcoal office panic",
      primaryColor: "#120d12",
      secondaryColor: "#251722",
      accentColor: "#c84a3d",
      accentSecondary: "#e0a24f",
      textColor: "#f4eee7",
      panelStyle: "compressed red-black report panels",
      decorativeMotifs: ["warning stamp", "office grid", "stress pulse"],
      imageTreatment: "high contrast red shadow",
      pageMood: "surreal, anxious, kinetic"
    },
    links: []
  },
  {
    id: "erebus",
    title: "Erebus",
    slug: "erebus",
    role: "Game Designer / 2D Artist",
    type: "Indie Platformer",
    tools: ["Unity", "Corgi Engine", "2D Art", "Level Design"],
    timeline: "2022",
    thumbnail: "/assets/projects/indiegame-erebus-2022-03-08/image-03.jpg",
    heroImage: "/assets/projects/indiegame-erebus-2022-03-08/image-04.jpg",
    shortDescription:
      "A gothic side-scrolling platform game with myth-inspired atmosphere and combat.",
    fullDescription:
      "Erebus uses gothic spaces, character art, and side-scrolling combat to build a dark mythic journey.",
    designGoal:
      "Create a compact platforming experience where combat, level rhythm, and visual tone support one mood.",
    playerExperienceGoal:
      "Players should feel like they are moving through a dangerous, theatrical underworld.",
    breakdownSections: [
      { title: "Level Flow", body: "Levels alternate between navigation pressure, enemy encounters, and atmospheric pauses." },
      { title: "Combat Tuning", body: "Corgi Engine systems were adjusted to fit the intended pace and character feel." }
    ],
    galleryImages: [
      { type: "video", src: "/assets/projects/indiegame-erebus-2022-03-08/intro.mp4", poster: "/assets/projects/indiegame-erebus-2022-03-08/image-04.jpg", label: "Erebus introduction video" },
      { type: "video", src: "/assets/projects/indiegame-erebus-2022-03-08/demo.mp4", poster: "/assets/projects/indiegame-erebus-2022-03-08/image-03.jpg", label: "Erebus gameplay demo" },
      "/assets/projects/indiegame-erebus-2022-03-08/image-03.jpg",
      "/assets/projects/indiegame-erebus-2022-03-08/image-04.jpg",
      "/assets/projects/indiegame-erebus-2022-03-08/image-06.png"
    ],
    contribution:
      "Worked on design direction, level rhythm, character/UI art, and Unity implementation.",
    reflection:
      "I learned how much level pacing depends on the relationship between enemy placement and visual expectation.",
    tags: ["Unity", "Platformer", "Gothic", "Level Design"],
    theme: {
      themeName: "gothic-underworld",
      backgroundStyle: "dark fantasy parchment",
      primaryColor: "#120b14",
      secondaryColor: "#221525",
      accentColor: "#b88a45",
      accentSecondary: "#7e2f3d",
      textColor: "#f3eadc",
      panelStyle: "aged parchment and ornamental borders",
      decorativeMotifs: ["mist", "gothic border", "myth annotation"],
      imageTreatment: "warm shadowed fantasy",
      pageMood: "dark, mythic, theatrical"
    },
    links: [{ label: "Open itch.io", href: "https://yzy-jinn.itch.io/erebus" }]
  },
  {
    id: "city",
    title: "City of Illusions",
    slug: "city-of-illusions",
    role: "Narrative / Puzzle Designer",
    type: "Game Design Document",
    tools: ["GDD", "Narrative Design", "Puzzle Design", "Worldbuilding"],
    timeline: "2024",
    thumbnail: "/assets/projects/gdd-city-of-illusion-english-2024/image-06.jpg",
    heroImage: "/assets/projects/gdd-city-of-illusion-english-2024/image-07.png",
    shortDescription:
      "A puzzle-adventure GDD set between a luxurious false city and decayed reality.",
    fullDescription:
      "City of Illusions is a narrative puzzle-adventure concept where players move through fragile points between illusion and truth.",
    designGoal:
      "Use environmental contrast to make truth discovery feel spatial and interactive.",
    playerExperienceGoal:
      "Players should feel curiosity, unease, and satisfaction as the world reveals its hidden structure.",
    breakdownSections: [
      { title: "Dual World Logic", body: "The false city and the decayed reality create parallel readings of the same spaces." },
      { title: "Puzzle Structure", body: "Environmental puzzles use fragile points, hidden fragments, and layered clues." }
    ],
    galleryImages: [
      "/assets/projects/gdd-city-of-illusion-english-2024/image-05.png",
      "/assets/projects/gdd-city-of-illusion-english-2024/image-06.jpg",
      "/assets/projects/gdd-city-of-illusion-english-2024/image-07.png",
      "/assets/projects/gdd-city-of-illusion-english-2024/image-10.png"
    ],
    contribution:
      "Created the world concept, puzzle structure, player flow, and design document presentation.",
    reflection:
      "This project sharpened how I use environmental logic to guide narrative discovery.",
    tags: ["Puzzle", "Narrative", "GDD", "Worldbuilding"],
    theme: {
      themeName: "illusion-archive",
      backgroundStyle: "misty ruined archive",
      primaryColor: "#0b0d16",
      secondaryColor: "#1f2030",
      accentColor: "#d3a76b",
      accentSecondary: "#7aa6bf",
      textColor: "#f5efe5",
      panelStyle: "soft parchment over blue ruin",
      decorativeMotifs: ["dual-world seam", "map fragment", "faded clock"],
      imageTreatment: "soft haze and warm highlights",
      pageMood: "mysterious, elegant, uncanny"
    },
    links: []
  },
  {
    id: "dessert",
    title: "Dessert Dash",
    slug: "dessert-dash",
    role: "Technical Designer",
    type: "UE5 Blueprint Practice",
    tools: ["Unreal Engine 5", "Blueprint", "Platformer Systems"],
    timeline: "2024",
    thumbnail: "/assets/projects/ue5-2024/image-01.png",
    heroImage: "/assets/projects/ue5-2024/image-01.png",
    heroVideo: "/assets/projects/ue5-2024/demo.mp4",
    shortDescription:
      "A modular Blueprint platformer framework built around reusable gameplay actors.",
    fullDescription:
      "Dessert Dash tests coins, health pickups, cannons, spikes, moving platforms, teleporters, thresholds, and exits in a dessert-themed space.",
    designGoal:
      "Build reusable Blueprint actors that can support fast platformer iteration.",
    playerExperienceGoal:
      "Players should quickly understand hazards and rewards while moving through readable platforming challenges.",
    breakdownSections: [
      { title: "Reusable Actors", body: "Systems were structured as modular Blueprint elements for easy recombination." },
      { title: "Challenge Layout", body: "The level tests how small mechanics can layer into a readable progression." }
    ],
    galleryImages: [
      { type: "video", src: "/assets/projects/ue5-2024/demo.mp4", poster: "/assets/projects/ue5-2024/image-01.png", label: "Dessert Dash gameplay demo" },
      "/assets/projects/ue5-2024/image-01.png"
    ],
    contribution:
      "Built Blueprint systems, level tests, interaction logic, and prototype presentation.",
    reflection:
      "I learned to keep technical design modular so levels can change without rewriting core behavior.",
    tags: ["Blueprint", "UE5", "Platformer", "Systems"],
    theme: {
      themeName: "blueprint-dessert",
      backgroundStyle: "structured blueprint board",
      primaryColor: "#07111d",
      secondaryColor: "#12263a",
      accentColor: "#72b7d2",
      accentSecondary: "#e1ad57",
      textColor: "#eef3f2",
      panelStyle: "clean blueprint system cards",
      decorativeMotifs: ["grid lines", "node diagram", "system label"],
      imageTreatment: "clean technical clarity",
      pageMood: "structured, modular, technical"
    },
    links: []
  },
  {
    id: "eye-care",
    title: "Children's Eye Care Knowledge Game",
    slug: "children-eye-care-game",
    role: "Unity Game Designer",
    type: "Serious Game",
    tools: ["Unity", "Touch UI", "Mini Games", "Education Design"],
    timeline: "2021",
    thumbnail: "/assets/projects/2021-01-08/children-source/children-cover.png",
    heroImage: "/assets/projects/2021-01-08/children-source/children-cover.png",
    contentSectionTitle: "Content",
    shortDescription:
      "A commercial serious game translating eye-care knowledge into touch-based mini games.",
    fullDescription:
      "This project explores an interactive serious game experience for preschool children's eye-care education. It translates eye-care knowledge into short touch-based games, positive feedback, colorful UI, simple gestures, and a classroom-friendly interactive whiteboard format.",
    designGoal:
      "Make eye-care education easier to understand and remember through short interactive tasks, visual guidance, sound feedback, rewards, and simple touch interactions designed for preschool children.",
    playerExperienceGoal:
      "Children should feel guided, praised, and motivated. The experience should reduce text-heavy instruction and use bright visuals, animations, voice, sound effects, medals, and immediate feedback to help them understand right and wrong through play.",
    breakdownSections: [
      { title: "Mini Game Translation", body: "Eye-care knowledge points become tactile interactions instead of static explanations, including direction recognition, eye structure, eye-drop steps, glasses habits, symptoms, and injury prevention." },
      { title: "Touch UI", body: "The interface supports quick comprehension through bright color, cartoon-style visuals, simple hierarchy, clear layouts, and feedback that preschool children can understand without relying on dense text." },
      { title: "Feedback Loop", body: "The game uses preparation prompts, operation checks, positive animations, encouragement voice, score increases, medals, and post-game praise to keep children motivated." }
    ],
    contentBlocks: [
      {
        kicker: "Research Context",
        title: "Preschool Eye-Care Education",
        body: "The project responds to the need for more engaging eye-care education for children aged 3-6. Instead of lecture-style instruction, it uses serious games to help children learn eye-care knowledge through exploration, repetition, and immediate feedback.",
        points: ["Target users: preschool children aged 3-6", "Learning topic: eye-care knowledge and visual health habits", "Format: interactive serious game with touch-based play"]
      },
      {
        kicker: "Experience Strategy",
        title: "Simple, Bright, and Playable",
        body: "The design reduces complex text and multi-layered interfaces. It uses clear visual structure, colorful cartoon graphics, dynamic effects, video, voice, and sound to match preschool children's cognitive habits.",
        points: ["Simple hierarchy and clear layout", "Replace text with graphics, video, voice, and sound effects", "Use bright color and cartoon UI to attract attention"]
      },
      {
        kicker: "Interaction Rules",
        title: "Click, Drag, Feedback",
        body: "The interaction design focuses on gestures preschool children can already understand, mainly clicking, dragging, and dropping. Every action gives visible feedback so children can recognize correct and incorrect operations.",
        points: ["Simple operation, mainly click and drag", "Timely visual feedback for every judgment", "Gradual difficulty increase after correct answers"]
      },
      {
        kicker: "Motivation",
        title: "Positive Reinforcement",
        body: "The project emphasizes encouragement because preschool children are sensitive to praise and positive emotion. Correct answers trigger cheerful animation, sound effects, praise voice, score increases, and medal rewards.",
        points: ["Preparation voice: 3, 2, 1, go", "Positive feedback after correct answers", "Medals, score increases, and after-play praise"]
      },
      {
        kicker: "Game Content",
        title: "Mini Games for Eye-Care Knowledge",
        body: "The project contains multiple short games that turn eye-care education into direct actions. Children practice recognizing visual directions, choosing healthy habits, learning eye structure, using eye drops, judging safe and unsafe scenarios, and matching correct visual-health choices through quick touch interactions.",
        points: ["Direction and visual-recognition games train observation and response", "Eye structure and eye-drop games explain body knowledge through drag-and-match play", "Scene judgment games help children identify healthy behavior, unsafe habits, and prevention choices"]
      },
      {
        kicker: "Mini Game 01",
        title: "Slide to the Gap",
        body: "Children learn to recognize the opening direction of eye-chart symbols by dragging each optotype up, down, left, or right. The game trains direction recognition, simple graphic cognition, memory, and hand operation.",
        points: ["Correct slides trigger reward feedback and score increases", "Symbols become smaller after several rounds to gently raise difficulty", "Bronze, silver, and gold medals motivate repeated practice"]
      },
      {
        kicker: "Mini Game 02",
        title: "Direction Recognition",
        body: "Children select the correct direction button according to the highlighted eye-chart symbol. The goal is to help them cooperate with vision tests by practicing up, down, left, and right recognition.",
        points: ["Highlighted symbols appear randomly in rows of different sizes", "Children advance after several correct answers", "Scores and medals summarize performance without relying on text-heavy ranking"]
      },
      {
        kicker: "Mini Game 03",
        title: "Get to Know Our Eyes",
        body: "Children build an eye by choosing and dragging parts such as eyebrows, eyelids, irises, and eyelashes. The activity introduces eye structure while giving children room for visual preference and creativity.",
        points: ["Question and answer areas are separated for clarity", "Children submit their assembled eye when satisfied", "Missing parts are highlighted with friendly feedback"]
      },
      {
        kicker: "Mini Game 04",
        title: "Using Eye Drops Correctly",
        body: "Children practice the steps of using eye drops on a left or right eye: open the eyelid, place the drop correctly, and press the corner of the eye. The interaction supports trial, correction, and repeated learning.",
        points: ["Left and right eyes appear randomly", "Each step gives sound and animation feedback", "A complete correct sequence awards a point and moves to the next eye"]
      },
      {
        kicker: "Mini Game 05",
        title: "Eyeballs Are Like Cameras",
        body: "Children drag eye-structure parts into the correct positions on an eyeball outline. The game explains important eye anatomy while exercising graphic recognition and hand-eye coordination.",
        points: ["Required pieces stay colorful while reference silhouettes stay gray", "Wrong placements return to the starting position", "A complete eyeball triggers encouraging feedback"]
      },
      {
        kicker: "Mini Game 06",
        title: "Why Eyes Cannot See Clearly",
        body: "Children identify whether a visual symptom looks like myopia, hyperopia, or astigmatism. The goal is to help them recognize vision problems and communicate with parents or teachers in time.",
        points: ["Symptom icons appear randomly", "Children choose the matching answer within a short time limit", "Correct and incorrect prompts appear immediately before the next question"]
      },
      {
        kicker: "Mini Game 07",
        title: "Why Wear Glasses",
        body: "Children match blurry or distorted visual symptoms with the correct glasses icon. The game helps them understand the purpose of glasses and accept themselves or classmates who wear them.",
        points: ["Glasses fly onto the image after selection", "Correct choices make the image clearer", "Wrong choices keep the question active until children find the right lens"]
      },
      {
        kicker: "Mini Game 08",
        title: "How to Use Glasses Correctly",
        body: "Children watch short behavior animations about wearing or maintaining glasses, then judge whether each behavior is correct. The activity builds practical habits through quick visual decisions.",
        points: ["Behavior clips are randomly selected from a question bank", "Children answer with correct or incorrect buttons", "Buttons change color to show judgment feedback"]
      },
      {
        kicker: "Mini Game 09",
        title: "Prevent Accidental Injury",
        body: "Children judge safety behaviors from pictures and voice prompts. The game teaches basic accident-prevention knowledge and encourages children to make quick, logical decisions.",
        points: ["Images and voices create clear situational prompts", "Answers are hidden after judgment to reduce copying in group play", "Countdown feedback keeps the multiplayer rhythm moving"]
      },
      {
        kicker: "Mini Game 10",
        title: "Protect Your Eyes and Prevent Myopia",
        body: "Healthy and unhealthy eye-use behavior images fall from the top of the screen. Children click the correct habits, avoid incorrect ones, and train concentration while learning myopia-prevention behavior.",
        points: ["Falling icons create a simple action challenge", "Correct choices add points and wrong choices subtract points", "The falling speed increases after repeated correct answers"]
      },
      {
        kicker: "Device Context",
        title: "Interactive Whiteboard Setting",
        body: "The serious game is designed for an interactive electronic whiteboard environment. This supports classroom play, larger body-scale interaction, and multiplayer partitioning while staying easier to use than wearable immersive devices.",
        points: ["Supports 1-4 players", "Four answering areas for group play", "Lower learning cost for preschool classroom use"]
      }
    ],
    galleryImages: [
      { type: "video", src: "/assets/projects/2021-01-08/children-source/eye-care-demo-en.mp4", poster: "/assets/projects/2021-01-08/children-source/children-cover.png", label: "English demo video" },
      { type: "video", src: "/assets/projects/2021-01-08/children-source/eye-care-serious-game-cn.mp4", poster: "/assets/projects/2021-01-08/children-source/children-cover.png", label: "Chinese gameplay video" },
      { type: "image", src: "/assets/projects/2021-01-08/children-source/design-ideas.png", label: "Design Ideas and Features" },
      { type: "image", src: "/assets/projects/2021-01-08/children-source/interactive-process-flow.png", label: "Interactive Process Design" },
      { type: "image", src: "/assets/projects/2021-01-08/children-source/child-gameplay-overview.png", label: "Gameplay overview: mini games for preschool eye-care knowledge", variant: "overview" }
    ],
    documentationLinks: [
      { label: "Read Design Research Document", href: "/assets/projects/2021-01-08/children-source/eye-care-design-research-en.docx" }
    ],
    contribution:
      "Designed the serious-game interaction flow, child-friendly feedback loop, touch UI direction, mini-game structure, visual learning logic, and research documentation for preschool eye-care education.",
    reflection:
      "This project taught me that educational interaction for young children needs clear structure, immediate feedback, positive emotion, and sensory clarity. A good learning game is not only correct in content; it must also fit how children perceive, touch, remember, and stay motivated.",
    tags: ["Unity", "Serious Game", "Education", "Touch UI"],
    theme: {
      themeName: "soft-learning",
      backgroundStyle: "gentle warm learning desk",
      primaryColor: "#15131a",
      secondaryColor: "#292230",
      accentColor: "#d88aa6",
      accentSecondary: "#d9a957",
      textColor: "#fff4ed",
      panelStyle: "soft rounded learning cards",
      decorativeMotifs: ["soft sticker", "health note", "gentle cursor"],
      imageTreatment: "soft contrast and warm tint",
      pageMood: "cozy, clear, accessible"
    },
    links: []
  },
  {
    id: "tick",
    title: "Tick",
    slug: "tick",
    role: "Game Designer / UI Designer",
    type: "Time-Based Narrative Prototype",
    tools: ["Unity", "UI Design", "Puzzle Design", "Narrative Design"],
    timeline: "2026",
    thumbnail: "/assets/projects/tick-2026/clock-ui.png",
    heroImage: "/assets/projects/tick-2026/image-111.png",
    contentSectionTitle: "Content",
    shortDescription:
      "A fairytale time-puzzle prototype built around a pocket watch, observation points, and shifting world states.",
    fullDescription:
      "Tick: The Fixer of Broken Fairytales explores time as a playable interface. Players use a pocket watch to shift states, observe how the world changes, and restore a collapsing fairytale space through three encounter areas.",
    designGoal:
      "Turn time manipulation into a readable design language through clock UI, observation points, and encounter-specific puzzle rules.",
    playerExperienceGoal:
      "Players should feel curiosity, pressure, and quiet discovery as they adjust time, inspect changes, and repair the fairytale world step by step.",
    breakdownSections: [
      {
        title: "Pocket Watch Interface",
        body: "The watch mode connects time adjustment, confirmation, and cancel states through a central clock interaction."
      },
      {
        title: "Encounter Progression",
        body: "The level moves from Floating Garden to Tilting Teacup to Clock Sanctum, increasing puzzle complexity from structure to movement to perception."
      },
      {
        title: "Observation Points",
        body: "Observation markers guide players toward moments where time states reveal environmental changes and story clues."
      }
    ],
    contentBlocks: [
      {
        kicker: "PPT / Game Introduction",
        title: "Narrative Puzzle Pitch",
        body: "Tick is designed as a fixed-camera 15-30 minute narrative puzzle where the player becomes a Tale World Fixer. The core fantasy is repairing fragmented time with a pocket watch and restoring distorted fairytale spaces.",
        points: ["Genre: Narrative Puzzle", "Camera: fixed perspective with puzzle framing", "Core verb: enter Watch Mode, adjust time, observe change, repair the path"]
      },
      {
        kicker: "Interaction System",
        title: "Pocket Watch Control Loop",
        body: "The interaction language is deliberately simple so the player can focus on reading time states. TAB enters Watch Mode, mouse wheel adjusts time, E handles interaction and pickup, and the watch becomes both UI and mechanic.",
        points: ["WASD movement", "E interact / pick up", "TAB toggle Watch Mode", "Mouse wheel adjusts time", "Enter exits Watch Mode"]
      },
      {
        kicker: "Encounter 01",
        title: "Floating Garden",
        body: "The garden introduces time-based environmental logic in a low-pressure space. Flower growth stages make time readable through natural metaphors: buds block progress, blooms become jumpable platforms, and the restored garden becomes a reward state.",
        points: ["Bud: closed flower, no interaction", "Bloom: glowing open flower, jumpable platform", "Reward: access to Afternoon Tea, all flowers bloom, narrative petal"]
      },
      {
        kicker: "Encounter 02",
        title: "Afternoon Tea",
        body: "The tea encounter builds on time switching with parallax observation. Teacups and porcelain fragments are frozen in different moments; from the correct observation point, the pieces align and reveal how the cup state should be restored.",
        points: ["Inverted cup: safe platform", "Pouring cup: upward water stream lift", "Upright cup: hazard and reset", "Reward: access to Clock Sanctum"]
      },
      {
        kicker: "Encounter 03",
        title: "Clock Sanctum",
        body: "The final encounter turns time into a mechanical system. Hour and minute gears are connected to the world, and only the correct moment, 3:00 AM, aligns the structure and opens the exit.",
        points: ["Gear A controls large hour movement", "Gear B controls fine minute movement", "Clock hands and platforms rotate together", "3:00 AM unlocks the final exit"]
      },
      {
        kicker: "Shared Production Notes",
        title: "UI, Feedback, and Asset Needs",
        body: "The PPT frames the project around clear feedback systems: watch interface, subtitle system, collectible fragments, glow/highlight VFX, gear sounds, ticking audio, and portal activation feedback.",
        points: ["Watch Interface as the core player interaction", "Subtitle system for narrative delivery", "Glow and highlight effects for usability", "Time Control System as the mechanic backbone"]
      }
    ],
    galleryImages: [
      { type: "video", src: "/assets/projects/tick-2026/tick-demo-video.mp4", poster: "/assets/projects/tick-2026/image-111.png", label: "Tick demo video" },
      "/assets/projects/tick-2026/image-333.jpg",
      "/assets/projects/tick-2026/pocket-watch.png",
      "/assets/projects/tick-2026/observe-point.png"
    ],
    contribution:
      "Designed the time-based concept, encounter flow, pocket-watch interface, observation feedback, narrative UI, and presentation assets.",
    reflection:
      "This project helped me treat time as a full interaction system instead of only a countdown. The clock became both a mechanic and the visual language of the world.",
    tags: ["Time", "Puzzle", "Narrative", "UI"],
    theme: {
      themeName: "tick-clock",
      backgroundStyle: "warm paper clock archive",
      primaryColor: "#171017",
      secondaryColor: "#2d1f25",
      accentColor: "#c99643",
      accentSecondary: "#496f8b",
      textColor: "#fff7e8",
      panelStyle: "aged parchment panels with clock ornaments",
      decorativeMotifs: ["pocket watch", "clock hands", "fairytale map", "observation marker"],
      imageTreatment: "soft paper grain and warm gold highlights",
      pageMood: "fairytale, time-focused, mysterious"
    },
    links: []
  },
  {
    id: "dream-fallen",
    title: "Dream Fallen",
    slug: "dream-fallen",
    role: "Level Designer / UI Designer / Systems Designer",
    type: "FPS Puzzle Adventure",
    tools: ["Unreal Engine 5", "Level Design", "UI Design", "Puzzle Design", "Combat Design"],
    timeline: "2026",
    thumbnail: "/assets/projects/dream-fallen-2026/ui-1x/ui-main-menu-bg.png",
    heroImage: "/assets/projects/dream-fallen-2026/ui-1x/ui-main-menu-bg.png",
    contentSectionTitle: "Content",
    shortDescription:
      "A narrative-driven FPS puzzle adventure about escaping an unfinished dream-based stress intervention system.",
    fullDescription:
      "Dream Fallen places the player in the role of a researcher who accidentally enters an unfinished dream-based experimental stress intervention system. The project combines first-person combat, exploration, resource management, circuit puzzles, and environmental narrative. Each dream layer turns a different kind of pressure into space: school pressure, work pressure, daily-life pressure, and finally a factory-like system that produces suppressed emotion.",
    designGoal:
      "Translate abstract emotional states such as fear, control, repetition, commercialization, and exploitation into readable level layouts, encounter pacing, puzzle gates, UI screens, and environmental story beats.",
    playerExperienceGoal:
      "Players should feel trapped inside a system that promises healing but actually manufactures pressure. The rhythm moves between unsettling exploration, sudden danger, limited-resource combat, puzzle-solving, and short moments of relief inside the White Room.",
    breakdownSections: [
      {
        title: "Pressure-Layer Level Structure",
        body: "The game progresses through School, Laboratory, Street, and Factory spaces. Each level escalates pressure through spatial structure, route complexity, enemy placement, and the player's changing sense of control."
      },
      {
        title: "White Room Checkpoint Hub",
        body: "The White Room works as a dream buffer layer between levels. It gives the player a quiet checkpoint while reinforcing that the system is still running even when the player appears to be safe."
      },
      {
        title: "Combat and Resource Loop",
        body: "The FPS loop asks players to explore, evade or fight enemies, search for health and ammo, collect weapon attachments, and make route decisions under pressure instead of relying on constant arena shooting."
      },
      {
        title: "Circuit Puzzle System",
        body: "Circuit-rotation puzzles act as power and connection devices. Rotatable modules reconnect the circuit, light up target nodes, unlock mechanisms, and keep puzzle moments tied to physical progress in the level."
      },
      {
        title: "Environmental Narrative",
        body: "Story is delivered through locations, notes, terminals, posters, inner monologue, and visual contradictions between commercial promises and hidden exploitation."
      },
      {
        title: "Encounter Integration",
        body: "Normal and elite enemies are placed to control sightlines, interrupt safe routes, and create pressure over time. Encounters are designed around cover, verticality, route choice, and readable escalation."
      }
    ],
    galleryImages: [
      { type: "video", src: "/assets/projects/dream-fallen-2026/game-trailer.mp4", poster: "/assets/projects/dream-fallen-2026/ui-1x/ui-main-menu-bg.png", label: "Dream Fallen trailer" },
      "/assets/projects/dream-fallen-2026/game-poster-web.jpg",
      "/assets/projects/dream-fallen-2026/ui-1x/ui-main-menu-bg.png",
      "/assets/projects/dream-fallen-2026/ui-1x/artboard-5.png",
      "/assets/projects/dream-fallen-2026/ui-1x/artboard-6.png",
      "/assets/projects/dream-fallen-2026/ui-1x/artboard-7.png",
      "/assets/projects/dream-fallen-2026/ui-1x/artboard-16.png",
      "/assets/projects/dream-fallen-2026/ui-1x/artboard-19.png"
    ],
    documentationLinks: [
      { label: "Read Design Documentation", href: "/assets/projects/dream-fallen-2026/docs/dreamfallen-gdd.docx" },
      { label: "Read Level Design Document", href: "/assets/projects/dream-fallen-2026/docs/level-design.docx" },
      { label: "Read Puzzle Document", href: "/assets/projects/dream-fallen-2026/docs/puzzle.docx" }
    ],
    contribution:
      "Owned the level design direction, player flow, pacing, encounter implementation planning, world/region structure, Level 2 and Level 3 puzzle design, UI direction, UI SFX direction, project documentation, press kit presentation, and trailer-facing project materials.",
    reflection:
      "Dream Fallen pushed me to treat theme as a playable system. Pressure is not only written into the story; it is built through corridor length, blocked routes, machine logic, enemy sightlines, resource scarcity, UI interruption, and the relief of returning to a temporary safe room.",
    tags: ["FPS", "Puzzle", "UE5", "Level Design"],
    theme: {
      themeName: "dream-fallen-signal",
      backgroundStyle: "black industrial dream system",
      primaryColor: "#05070a",
      secondaryColor: "#10141b",
      accentColor: "#f5f7fb",
      accentSecondary: "#4fb8d8",
      textColor: "#f5f7fb",
      panelStyle: "sharp sci-fi interface panels",
      decorativeMotifs: ["circuit trace", "pressure gauge", "dream system", "weapon module"],
      imageTreatment: "high contrast black-white cyan signal",
      pageMood: "industrial, tense, systemic"
    },
    links: [
      { label: "Read Design Documentation", href: "/assets/projects/dream-fallen-2026/docs/dreamfallen-gdd.docx" },
      { label: "Watch Trailer", href: "/assets/projects/dream-fallen-2026/game-trailer.mp4" },
      { label: "Press Kit PDF", href: "/assets/projects/dream-fallen-2026/docs/game-press-kit-dream-fallen.pdf" },
      { label: "Level Design Document", href: "/assets/projects/dream-fallen-2026/docs/level-design.docx" },
      { label: "Puzzle Document", href: "/assets/projects/dream-fallen-2026/docs/puzzle.docx" },
      { label: "Enemy Document", href: "/assets/projects/dream-fallen-2026/docs/enemy-except-boss.docx" }
    ]
  }
];

const preferredProjectOrder = [
  "tension-through-surveillance-restriction",
  "dream-fallen",
  "children-eye-care-game",
  "tick",
  "office-drift",
  "erebus",
  "city-of-illusions",
  "dessert-dash"
];

projects.sort((a, b) => {
  const aIndex = preferredProjectOrder.indexOf(a.slug);
  const bIndex = preferredProjectOrder.indexOf(b.slug);
  return (aIndex === -1 ? 999 : aIndex) - (bIndex === -1 ? 999 : bIndex);
});

export const profile = {
  name: "Zhiyun Yu",
  title: "Game Designer / Technical Designer / Environment & Systems Designer",
  intro:
    "Game designer and passionate game enthusiast focused on gameplay systems, level design, and narrative puzzle experiences. Skilled in Unreal Engine, Blueprint, Unity, and 3D art workflows, with hands-on experience in concept design, prototyping, playtesting, and iteration.",
  education: "M.F.A. Game Design candidate, Savannah College of Art and Design (SCAD)",
  role: "M.F.A. Game Design candidate, Savannah College of Art and Design (SCAD)",
  focus: "Gameplay design, mission design, system design, level flow, puzzle mechanics, UI feedback, player experience, and atmospheric interaction",
  tools: "Unreal Engine 5, Unity, Blueprint, C#, UMG, Corgi Engine, Maya, Blender, Substance Painter, Photoshop, Illustrator, Figma, Premiere Pro, After Effects, HTML/CSS, JavaScript, Git, Miro, Notion",
  interests: "Occult lore, fantasy, dreamlike spaces, player psychology, and readable interaction",
  mission: "Build gameplay missions and systemic worlds where mechanics, UI feedback, level structure, and player decisions work together to create emotional pressure."
};

export const skillGroups = [
  { label: "Design", skills: ["Gameplay Design", "Mission Design", "Systems Design", "Level Design", "Puzzle Design", "Narrative Design", "UI/UX"] },
  { label: "Engine", skills: ["Unreal Engine 5", "Blueprint", "UMG", "Unity", "Corgi Engine"] },
  { label: "Art Tools", skills: ["Maya", "Blender", "Substance Painter", "Photoshop", "Illustrator", "Figma"] },
  { label: "Research", skills: ["Playtesting", "User Observation", "Thesis Writing", "Design Documentation", "Miro", "Notion"] }
];

export const contactLinks = [
  // Replace these placeholder links with your real contact links.
  { label: "Email", href: "mailto:your-email@example.com" },
  { label: "LinkedIn", href: "https://www.linkedin.com/" },
  { label: "Resume", href: "#" }
];
