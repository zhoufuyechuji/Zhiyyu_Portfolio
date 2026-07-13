(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function a(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(o){if(o.ep)return;o.ep=!0;const n=a(o);fetch(o.href,n)}})();const D=[{id:"thesis",title:"Pet is also busy today",slug:"tension-through-surveillance-restriction",role:"Game Designer / Technical Designer",type:"MFA Thesis Prototype",tools:["Unreal Engine 5.5","Blueprint","UX Research","UI Design"],timeline:"2026",thumbnail:"/thesis-site/assets/UI_MainMenu_BG_2.png",heroImage:"/thesis-site/assets/UI_MainMenu_BG_2.png",shortDescription:"A pet simulation thesis prototype about distant watching, restricted information, and risk prediction.",fullDescription:"This thesis explores how restricted surveillance can create tension in a pet simulation game. The player cannot directly control every event, so they must read partial signals, judge risk, and decide when to intervene.",designGoal:"Turn limitation into pressure: make the player feel responsible while never giving them perfect information.",playerExperienceGoal:"Players should feel alert, uneasy, and strategic as they interpret small behavioral clues from a distance.",breakdownSections:[{title:"Surveillance Loop",body:"The core loop asks players to observe, infer, prioritize, and respond before small problems become irreversible."},{title:"Restriction System",body:"Information is intentionally partial, making timing, attention, and pattern recognition central to the experience."},{title:"Interface Direction",body:"The UI is built around monitor views, status readouts, warning states, and low-level ambiguity."}],galleryImages:[{type:"video",src:"/thesis-site/assets/studio-component-itgm-spring2026.mp4",poster:"/thesis-site/assets/pet-status-board.png",label:"Studio Component gameplay video"},{type:"frameSequence",sequence:"walk",count:20,delay:80,label:"Cat walk animation"},{type:"frameSequence",sequence:"sleep",count:60,delay:100,label:"Cat sleep animation"},{type:"frameSequence",sequence:"warning",count:30,delay:80,label:"Cat warning animation"},"/thesis-site/assets/pet-status-reference.png","/thesis-site/assets/UI_Work_BG.png","/thesis-site/assets/UI_monitor_Insidebg_ALERTED.png"],contribution:"Designed the concept, research framing, interaction loop, UI direction, Unreal prototype structure, and thesis website integration.",reflection:"I learned how surveillance mechanics can create emotional stakes without giving players total agency.",tags:["Surveillance","Research","UE5","Systems"],theme:{themeName:"pet-electronic",backgroundStyle:"soft pink-purple electronic pet room",primaryColor:"#160f24",secondaryColor:"#2c1a42",accentColor:"#f2a7d8",accentSecondary:"#9cc7ff",textColor:"#fff3fb",panelStyle:"soft rounded pet monitor panels",decorativeMotifs:["pet status","soft monitor UI","pink signal","care alert"],imageTreatment:"cute pink-purple electronic glow",pageMood:"cute, tense, soft electronic"},links:[{label:"Open Thesis Site",href:"/thesis-site/index.html#top"}]},{id:"office",title:"Office Drift",slug:"office-drift",role:"Gameplay Designer / UI Designer",type:"Arcade Shooter Prototype",tools:["Unreal Engine 5","Blueprint","UI","Gameplay Tuning"],timeline:"2025",thumbnail:"/assets/projects/officedrift-2025-03-05/image-03.png",heroImage:"/assets/projects/officedrift-2025-03-05/image-04.png",shortDescription:"A surreal arcade shooter where office anxiety becomes a combat arena.",fullDescription:"Office Drift transforms everyday office objects and pressure into enemies, motion rhythms, and red-black interface feedback.",designGoal:"Build an arcade remake that communicates stress through movement, enemy behavior, and visual rhythm.",playerExperienceGoal:"The player should feel trapped inside a fast, anxious office dream while still reading clear gameplay states.",breakdownSections:[{title:"Combat Rhythm",body:"Enemy pacing and projectile pressure create a constant push-pull between panic and control."},{title:"Visual Language",body:"Office props, red UI states, and compressed spaces turn routine work objects into threat signals."}],galleryImages:["/assets/projects/officedrift-2025-03-05/image-01.png","/assets/projects/officedrift-2025-03-05/image-02.png","/assets/projects/officedrift-2025-03-05/image-03.png","/assets/projects/officedrift-2025-03-05/image-04.png","/assets/projects/officedrift-2025-03-05/image-05.png"],contribution:"Created the gameplay concept, combat direction, level mood, and UI presentation.",reflection:"The project helped me connect emotional theme with readable arcade systems.",tags:["Arcade","UE5","Combat","UI"],theme:{themeName:"office-pressure",backgroundStyle:"charcoal office panic",primaryColor:"#120d12",secondaryColor:"#251722",accentColor:"#c84a3d",accentSecondary:"#e0a24f",textColor:"#f4eee7",panelStyle:"compressed red-black report panels",decorativeMotifs:["warning stamp","office grid","stress pulse"],imageTreatment:"high contrast red shadow",pageMood:"surreal, anxious, kinetic"},links:[]},{id:"erebus",title:"Erebus",slug:"erebus",role:"Game Designer / 2D Artist",type:"Indie Platformer",tools:["Unity","Corgi Engine","2D Art","Level Design"],timeline:"2022",thumbnail:"/assets/projects/indiegame-erebus-2022-03-08/image-03.jpg",heroImage:"/assets/projects/indiegame-erebus-2022-03-08/image-04.jpg",shortDescription:"A gothic side-scrolling platform game with myth-inspired atmosphere and combat.",fullDescription:"Erebus uses gothic spaces, character art, and side-scrolling combat to build a dark mythic journey.",designGoal:"Create a compact platforming experience where combat, level rhythm, and visual tone support one mood.",playerExperienceGoal:"Players should feel like they are moving through a dangerous, theatrical underworld.",breakdownSections:[{title:"Level Flow",body:"Levels alternate between navigation pressure, enemy encounters, and atmospheric pauses."},{title:"Combat Tuning",body:"Corgi Engine systems were adjusted to fit the intended pace and character feel."}],galleryImages:[{type:"video",src:"/assets/projects/indiegame-erebus-2022-03-08/intro.mp4",poster:"/assets/projects/indiegame-erebus-2022-03-08/image-04.jpg",label:"Erebus introduction video"},{type:"video",src:"/assets/projects/indiegame-erebus-2022-03-08/demo.mp4",poster:"/assets/projects/indiegame-erebus-2022-03-08/image-03.jpg",label:"Erebus gameplay demo"},"/assets/projects/indiegame-erebus-2022-03-08/image-03.jpg","/assets/projects/indiegame-erebus-2022-03-08/image-04.jpg","/assets/projects/indiegame-erebus-2022-03-08/image-06.png"],contribution:"Worked on design direction, level rhythm, character/UI art, and Unity implementation.",reflection:"I learned how much level pacing depends on the relationship between enemy placement and visual expectation.",tags:["Unity","Platformer","Gothic","Level Design"],theme:{themeName:"gothic-underworld",backgroundStyle:"dark fantasy parchment",primaryColor:"#120b14",secondaryColor:"#221525",accentColor:"#b88a45",accentSecondary:"#7e2f3d",textColor:"#f3eadc",panelStyle:"aged parchment and ornamental borders",decorativeMotifs:["mist","gothic border","myth annotation"],imageTreatment:"warm shadowed fantasy",pageMood:"dark, mythic, theatrical"},links:[{label:"Open itch.io",href:"https://yzy-jinn.itch.io/erebus"}]},{id:"city",title:"City of Illusions",slug:"city-of-illusions",role:"Narrative / Puzzle Designer",type:"Game Design Document",tools:["GDD","Narrative Design","Puzzle Design","Worldbuilding"],timeline:"2024",thumbnail:"/assets/projects/gdd-city-of-illusion-english-2024/image-06.jpg",heroImage:"/assets/projects/gdd-city-of-illusion-english-2024/image-07.png",shortDescription:"A puzzle-adventure GDD set between a luxurious false city and decayed reality.",fullDescription:"City of Illusions is a narrative puzzle-adventure concept where players move through fragile points between illusion and truth.",designGoal:"Use environmental contrast to make truth discovery feel spatial and interactive.",playerExperienceGoal:"Players should feel curiosity, unease, and satisfaction as the world reveals its hidden structure.",breakdownSections:[{title:"Dual World Logic",body:"The false city and the decayed reality create parallel readings of the same spaces."},{title:"Puzzle Structure",body:"Environmental puzzles use fragile points, hidden fragments, and layered clues."}],galleryImages:["/assets/projects/gdd-city-of-illusion-english-2024/image-05.png","/assets/projects/gdd-city-of-illusion-english-2024/image-06.jpg","/assets/projects/gdd-city-of-illusion-english-2024/image-07.png","/assets/projects/gdd-city-of-illusion-english-2024/image-10.png"],contribution:"Created the world concept, puzzle structure, player flow, and design document presentation.",reflection:"This project sharpened how I use environmental logic to guide narrative discovery.",tags:["Puzzle","Narrative","GDD","Worldbuilding"],theme:{themeName:"illusion-archive",backgroundStyle:"misty ruined archive",primaryColor:"#0b0d16",secondaryColor:"#1f2030",accentColor:"#d3a76b",accentSecondary:"#7aa6bf",textColor:"#f5efe5",panelStyle:"soft parchment over blue ruin",decorativeMotifs:["dual-world seam","map fragment","faded clock"],imageTreatment:"soft haze and warm highlights",pageMood:"mysterious, elegant, uncanny"},links:[]},{id:"dessert",title:"Dessert Dash",slug:"dessert-dash",role:"Technical Designer",type:"UE5 Blueprint Practice",tools:["Unreal Engine 5","Blueprint","Platformer Systems"],timeline:"2024",thumbnail:"/assets/projects/ue5-2024/image-01.png",heroImage:"/assets/projects/ue5-2024/image-01.png",heroVideo:"/assets/projects/ue5-2024/demo.mp4",shortDescription:"A modular Blueprint platformer framework built around reusable gameplay actors.",fullDescription:"Dessert Dash tests coins, health pickups, cannons, spikes, moving platforms, teleporters, thresholds, and exits in a dessert-themed space.",designGoal:"Build reusable Blueprint actors that can support fast platformer iteration.",playerExperienceGoal:"Players should quickly understand hazards and rewards while moving through readable platforming challenges.",breakdownSections:[{title:"Reusable Actors",body:"Systems were structured as modular Blueprint elements for easy recombination."},{title:"Challenge Layout",body:"The level tests how small mechanics can layer into a readable progression."}],galleryImages:[{type:"video",src:"/assets/projects/ue5-2024/demo.mp4",poster:"/assets/projects/ue5-2024/image-01.png",label:"Dessert Dash gameplay demo"},"/assets/projects/ue5-2024/image-01.png"],contribution:"Built Blueprint systems, level tests, interaction logic, and prototype presentation.",reflection:"I learned to keep technical design modular so levels can change without rewriting core behavior.",tags:["Blueprint","UE5","Platformer","Systems"],theme:{themeName:"blueprint-dessert",backgroundStyle:"structured blueprint board",primaryColor:"#07111d",secondaryColor:"#12263a",accentColor:"#72b7d2",accentSecondary:"#e1ad57",textColor:"#eef3f2",panelStyle:"clean blueprint system cards",decorativeMotifs:["grid lines","node diagram","system label"],imageTreatment:"clean technical clarity",pageMood:"structured, modular, technical"},links:[]},{id:"eye-care",title:"Children's Eye Care Knowledge Game",slug:"children-eye-care-game",role:"Unity Game Designer",type:"Serious Game",tools:["Unity","Touch UI","Mini Games","Education Design"],timeline:"2021",thumbnail:"/assets/projects/2021-01-08/children-source/children-cover.png",heroImage:"/assets/projects/2021-01-08/children-source/children-cover.png",contentSectionTitle:"Content",shortDescription:"A commercial serious game translating eye-care knowledge into touch-based mini games.",fullDescription:"This project explores an interactive serious game experience for preschool children's eye-care education. It translates eye-care knowledge into short touch-based games, positive feedback, colorful UI, simple gestures, and a classroom-friendly interactive whiteboard format.",designGoal:"Make eye-care education easier to understand and remember through short interactive tasks, visual guidance, sound feedback, rewards, and simple touch interactions designed for preschool children.",playerExperienceGoal:"Children should feel guided, praised, and motivated. The experience should reduce text-heavy instruction and use bright visuals, animations, voice, sound effects, medals, and immediate feedback to help them understand right and wrong through play.",breakdownSections:[{title:"Mini Game Translation",body:"Eye-care knowledge points become tactile interactions instead of static explanations, including direction recognition, eye structure, eye-drop steps, glasses habits, symptoms, and injury prevention."},{title:"Touch UI",body:"The interface supports quick comprehension through bright color, cartoon-style visuals, simple hierarchy, clear layouts, and feedback that preschool children can understand without relying on dense text."},{title:"Feedback Loop",body:"The game uses preparation prompts, operation checks, positive animations, encouragement voice, score increases, medals, and post-game praise to keep children motivated."}],contentBlocks:[{kicker:"Research Context",title:"Preschool Eye-Care Education",body:"The project responds to the need for more engaging eye-care education for children aged 3-6. Instead of lecture-style instruction, it uses serious games to help children learn eye-care knowledge through exploration, repetition, and immediate feedback.",points:["Target users: preschool children aged 3-6","Learning topic: eye-care knowledge and visual health habits","Format: interactive serious game with touch-based play"]},{kicker:"Experience Strategy",title:"Simple, Bright, and Playable",body:"The design reduces complex text and multi-layered interfaces. It uses clear visual structure, colorful cartoon graphics, dynamic effects, video, voice, and sound to match preschool children's cognitive habits.",points:["Simple hierarchy and clear layout","Replace text with graphics, video, voice, and sound effects","Use bright color and cartoon UI to attract attention"]},{kicker:"Interaction Rules",title:"Click, Drag, Feedback",body:"The interaction design focuses on gestures preschool children can already understand, mainly clicking, dragging, and dropping. Every action gives visible feedback so children can recognize correct and incorrect operations.",points:["Simple operation, mainly click and drag","Timely visual feedback for every judgment","Gradual difficulty increase after correct answers"]},{kicker:"Motivation",title:"Positive Reinforcement",body:"The project emphasizes encouragement because preschool children are sensitive to praise and positive emotion. Correct answers trigger cheerful animation, sound effects, praise voice, score increases, and medal rewards.",points:["Preparation voice: 3, 2, 1, go","Positive feedback after correct answers","Medals, score increases, and after-play praise"]},{kicker:"Game Content",title:"Mini Games for Eye-Care Knowledge",body:"The project contains multiple short games that turn eye-care education into direct actions. Children practice recognizing visual directions, choosing healthy habits, learning eye structure, using eye drops, judging safe and unsafe scenarios, and matching correct visual-health choices through quick touch interactions.",points:["Direction and visual-recognition games train observation and response","Eye structure and eye-drop games explain body knowledge through drag-and-match play","Scene judgment games help children identify healthy behavior, unsafe habits, and prevention choices"]},{kicker:"Mini Game 01",title:"Slide to the Gap",body:"Children learn to recognize the opening direction of eye-chart symbols by dragging each optotype up, down, left, or right. The game trains direction recognition, simple graphic cognition, memory, and hand operation.",points:["Correct slides trigger reward feedback and score increases","Symbols become smaller after several rounds to gently raise difficulty","Bronze, silver, and gold medals motivate repeated practice"]},{kicker:"Mini Game 02",title:"Direction Recognition",body:"Children select the correct direction button according to the highlighted eye-chart symbol. The goal is to help them cooperate with vision tests by practicing up, down, left, and right recognition.",points:["Highlighted symbols appear randomly in rows of different sizes","Children advance after several correct answers","Scores and medals summarize performance without relying on text-heavy ranking"]},{kicker:"Mini Game 03",title:"Get to Know Our Eyes",body:"Children build an eye by choosing and dragging parts such as eyebrows, eyelids, irises, and eyelashes. The activity introduces eye structure while giving children room for visual preference and creativity.",points:["Question and answer areas are separated for clarity","Children submit their assembled eye when satisfied","Missing parts are highlighted with friendly feedback"]},{kicker:"Mini Game 04",title:"Using Eye Drops Correctly",body:"Children practice the steps of using eye drops on a left or right eye: open the eyelid, place the drop correctly, and press the corner of the eye. The interaction supports trial, correction, and repeated learning.",points:["Left and right eyes appear randomly","Each step gives sound and animation feedback","A complete correct sequence awards a point and moves to the next eye"]},{kicker:"Mini Game 05",title:"Eyeballs Are Like Cameras",body:"Children drag eye-structure parts into the correct positions on an eyeball outline. The game explains important eye anatomy while exercising graphic recognition and hand-eye coordination.",points:["Required pieces stay colorful while reference silhouettes stay gray","Wrong placements return to the starting position","A complete eyeball triggers encouraging feedback"]},{kicker:"Mini Game 06",title:"Why Eyes Cannot See Clearly",body:"Children identify whether a visual symptom looks like myopia, hyperopia, or astigmatism. The goal is to help them recognize vision problems and communicate with parents or teachers in time.",points:["Symptom icons appear randomly","Children choose the matching answer within a short time limit","Correct and incorrect prompts appear immediately before the next question"]},{kicker:"Mini Game 07",title:"Why Wear Glasses",body:"Children match blurry or distorted visual symptoms with the correct glasses icon. The game helps them understand the purpose of glasses and accept themselves or classmates who wear them.",points:["Glasses fly onto the image after selection","Correct choices make the image clearer","Wrong choices keep the question active until children find the right lens"]},{kicker:"Mini Game 08",title:"How to Use Glasses Correctly",body:"Children watch short behavior animations about wearing or maintaining glasses, then judge whether each behavior is correct. The activity builds practical habits through quick visual decisions.",points:["Behavior clips are randomly selected from a question bank","Children answer with correct or incorrect buttons","Buttons change color to show judgment feedback"]},{kicker:"Mini Game 09",title:"Prevent Accidental Injury",body:"Children judge safety behaviors from pictures and voice prompts. The game teaches basic accident-prevention knowledge and encourages children to make quick, logical decisions.",points:["Images and voices create clear situational prompts","Answers are hidden after judgment to reduce copying in group play","Countdown feedback keeps the multiplayer rhythm moving"]},{kicker:"Mini Game 10",title:"Protect Your Eyes and Prevent Myopia",body:"Healthy and unhealthy eye-use behavior images fall from the top of the screen. Children click the correct habits, avoid incorrect ones, and train concentration while learning myopia-prevention behavior.",points:["Falling icons create a simple action challenge","Correct choices add points and wrong choices subtract points","The falling speed increases after repeated correct answers"]},{kicker:"Device Context",title:"Interactive Whiteboard Setting",body:"The serious game is designed for an interactive electronic whiteboard environment. This supports classroom play, larger body-scale interaction, and multiplayer partitioning while staying easier to use than wearable immersive devices.",points:["Supports 1-4 players","Four answering areas for group play","Lower learning cost for preschool classroom use"]}],galleryImages:[{type:"video",src:"/assets/projects/2021-01-08/children-source/eye-care-demo-en.mp4",poster:"/assets/projects/2021-01-08/children-source/children-cover.png",label:"English demo video"},{type:"video",src:"/assets/projects/2021-01-08/children-source/eye-care-serious-game-cn.mp4",poster:"/assets/projects/2021-01-08/children-source/children-cover.png",label:"Chinese gameplay video"},{type:"image",src:"/assets/projects/2021-01-08/children-source/design-ideas.png",label:"Design Ideas and Features"},{type:"image",src:"/assets/projects/2021-01-08/children-source/interactive-process-flow.png",label:"Interactive Process Design"},{type:"image",src:"/assets/projects/2021-01-08/children-source/child-gameplay-overview.png",label:"Gameplay overview: mini games for preschool eye-care knowledge",variant:"overview"}],documentationLinks:[{label:"Read Design Research Document",href:"/assets/projects/2021-01-08/children-source/eye-care-design-research-en.docx"}],contribution:"Designed the serious-game interaction flow, child-friendly feedback loop, touch UI direction, mini-game structure, visual learning logic, and research documentation for preschool eye-care education.",reflection:"This project taught me that educational interaction for young children needs clear structure, immediate feedback, positive emotion, and sensory clarity. A good learning game is not only correct in content; it must also fit how children perceive, touch, remember, and stay motivated.",tags:["Unity","Serious Game","Education","Touch UI"],theme:{themeName:"soft-learning",backgroundStyle:"gentle warm learning desk",primaryColor:"#15131a",secondaryColor:"#292230",accentColor:"#d88aa6",accentSecondary:"#d9a957",textColor:"#fff4ed",panelStyle:"soft rounded learning cards",decorativeMotifs:["soft sticker","health note","gentle cursor"],imageTreatment:"soft contrast and warm tint",pageMood:"cozy, clear, accessible"},links:[]},{id:"tick",title:"Tick",slug:"tick",role:"Game Designer / UI Designer",type:"Time-Based Narrative Prototype",tools:["Unity","UI Design","Puzzle Design","Narrative Design"],timeline:"2026",thumbnail:"/assets/projects/tick-2026/clock-ui.png",heroImage:"/assets/projects/tick-2026/image-111.png",contentSectionTitle:"Content",shortDescription:"A fairytale time-puzzle prototype built around a pocket watch, observation points, and shifting world states.",fullDescription:"Tick: The Fixer of Broken Fairytales explores time as a playable interface. Players use a pocket watch to shift states, observe how the world changes, and restore a collapsing fairytale space through three encounter areas.",designGoal:"Turn time manipulation into a readable design language through clock UI, observation points, and encounter-specific puzzle rules.",playerExperienceGoal:"Players should feel curiosity, pressure, and quiet discovery as they adjust time, inspect changes, and repair the fairytale world step by step.",breakdownSections:[{title:"Pocket Watch Interface",body:"The watch mode connects time adjustment, confirmation, and cancel states through a central clock interaction."},{title:"Encounter Progression",body:"The level moves from Floating Garden to Tilting Teacup to Clock Sanctum, increasing puzzle complexity from structure to movement to perception."},{title:"Observation Points",body:"Observation markers guide players toward moments where time states reveal environmental changes and story clues."}],contentBlocks:[{kicker:"PPT / Game Introduction",title:"Narrative Puzzle Pitch",body:"Tick is designed as a fixed-camera 15-30 minute narrative puzzle where the player becomes a Tale World Fixer. The core fantasy is repairing fragmented time with a pocket watch and restoring distorted fairytale spaces.",points:["Genre: Narrative Puzzle","Camera: fixed perspective with puzzle framing","Core verb: enter Watch Mode, adjust time, observe change, repair the path"]},{kicker:"Interaction System",title:"Pocket Watch Control Loop",body:"The interaction language is deliberately simple so the player can focus on reading time states. TAB enters Watch Mode, mouse wheel adjusts time, E handles interaction and pickup, and the watch becomes both UI and mechanic.",points:["WASD movement","E interact / pick up","TAB toggle Watch Mode","Mouse wheel adjusts time","Enter exits Watch Mode"]},{kicker:"Encounter 01",title:"Floating Garden",body:"The garden introduces time-based environmental logic in a low-pressure space. Flower growth stages make time readable through natural metaphors: buds block progress, blooms become jumpable platforms, and the restored garden becomes a reward state.",points:["Bud: closed flower, no interaction","Bloom: glowing open flower, jumpable platform","Reward: access to Afternoon Tea, all flowers bloom, narrative petal"]},{kicker:"Encounter 02",title:"Afternoon Tea",body:"The tea encounter builds on time switching with parallax observation. Teacups and porcelain fragments are frozen in different moments; from the correct observation point, the pieces align and reveal how the cup state should be restored.",points:["Inverted cup: safe platform","Pouring cup: upward water stream lift","Upright cup: hazard and reset","Reward: access to Clock Sanctum"]},{kicker:"Encounter 03",title:"Clock Sanctum",body:"The final encounter turns time into a mechanical system. Hour and minute gears are connected to the world, and only the correct moment, 3:00 AM, aligns the structure and opens the exit.",points:["Gear A controls large hour movement","Gear B controls fine minute movement","Clock hands and platforms rotate together","3:00 AM unlocks the final exit"]},{kicker:"Shared Production Notes",title:"UI, Feedback, and Asset Needs",body:"The PPT frames the project around clear feedback systems: watch interface, subtitle system, collectible fragments, glow/highlight VFX, gear sounds, ticking audio, and portal activation feedback.",points:["Watch Interface as the core player interaction","Subtitle system for narrative delivery","Glow and highlight effects for usability","Time Control System as the mechanic backbone"]}],galleryImages:[{type:"video",src:"/assets/projects/tick-2026/tick-demo-video.mp4",poster:"/assets/projects/tick-2026/image-111.png",label:"Tick demo video"},"/assets/projects/tick-2026/image-333.jpg","/assets/projects/tick-2026/pocket-watch.png","/assets/projects/tick-2026/observe-point.png"],contribution:"Designed the time-based concept, encounter flow, pocket-watch interface, observation feedback, narrative UI, and presentation assets.",reflection:"This project helped me treat time as a full interaction system instead of only a countdown. The clock became both a mechanic and the visual language of the world.",tags:["Time","Puzzle","Narrative","UI"],theme:{themeName:"tick-clock",backgroundStyle:"warm paper clock archive",primaryColor:"#171017",secondaryColor:"#2d1f25",accentColor:"#c99643",accentSecondary:"#496f8b",textColor:"#fff7e8",panelStyle:"aged parchment panels with clock ornaments",decorativeMotifs:["pocket watch","clock hands","fairytale map","observation marker"],imageTreatment:"soft paper grain and warm gold highlights",pageMood:"fairytale, time-focused, mysterious"},links:[]},{id:"dream-fallen",title:"Dream Fallen",slug:"dream-fallen",role:"Level Designer / UI Designer / Systems Designer",type:"FPS Puzzle Adventure",tools:["Unreal Engine 5","Level Design","UI Design","Puzzle Design","Combat Design"],timeline:"2026",thumbnail:"/assets/projects/dream-fallen-2026/ui-1x/ui-main-menu-bg.png",heroImage:"/assets/projects/dream-fallen-2026/ui-1x/ui-main-menu-bg.png",contentSectionTitle:"Content",shortDescription:"A narrative-driven FPS puzzle adventure about escaping an unfinished dream-based stress intervention system.",fullDescription:"Dream Fallen places the player in the role of a researcher who accidentally enters an unfinished dream-based experimental stress intervention system. The project combines first-person combat, exploration, resource management, circuit puzzles, and environmental narrative. Each dream layer turns a different kind of pressure into space: school pressure, work pressure, daily-life pressure, and finally a factory-like system that produces suppressed emotion.",designGoal:"Translate abstract emotional states such as fear, control, repetition, commercialization, and exploitation into readable level layouts, encounter pacing, puzzle gates, UI screens, and environmental story beats.",playerExperienceGoal:"Players should feel trapped inside a system that promises healing but actually manufactures pressure. The rhythm moves between unsettling exploration, sudden danger, limited-resource combat, puzzle-solving, and short moments of relief inside the White Room.",breakdownSections:[{title:"Pressure-Layer Level Structure",body:"The game progresses through School, Laboratory, Street, and Factory spaces. Each level escalates pressure through spatial structure, route complexity, enemy placement, and the player's changing sense of control."},{title:"White Room Checkpoint Hub",body:"The White Room works as a dream buffer layer between levels. It gives the player a quiet checkpoint while reinforcing that the system is still running even when the player appears to be safe."},{title:"Combat and Resource Loop",body:"The FPS loop asks players to explore, evade or fight enemies, search for health and ammo, collect weapon attachments, and make route decisions under pressure instead of relying on constant arena shooting."},{title:"Circuit Puzzle System",body:"Circuit-rotation puzzles act as power and connection devices. Rotatable modules reconnect the circuit, light up target nodes, unlock mechanisms, and keep puzzle moments tied to physical progress in the level."},{title:"Environmental Narrative",body:"Story is delivered through locations, notes, terminals, posters, inner monologue, and visual contradictions between commercial promises and hidden exploitation."},{title:"Encounter Integration",body:"Normal and elite enemies are placed to control sightlines, interrupt safe routes, and create pressure over time. Encounters are designed around cover, verticality, route choice, and readable escalation."}],galleryImages:[{type:"video",src:"/assets/projects/dream-fallen-2026/game-trailer.mp4",poster:"/assets/projects/dream-fallen-2026/ui-1x/ui-main-menu-bg.png",label:"Dream Fallen trailer"},"/assets/projects/dream-fallen-2026/game-poster-web.jpg","/assets/projects/dream-fallen-2026/ui-1x/ui-main-menu-bg.png","/assets/projects/dream-fallen-2026/ui-1x/artboard-5.png","/assets/projects/dream-fallen-2026/ui-1x/artboard-6.png","/assets/projects/dream-fallen-2026/ui-1x/artboard-7.png","/assets/projects/dream-fallen-2026/ui-1x/artboard-16.png","/assets/projects/dream-fallen-2026/ui-1x/artboard-19.png"],documentationLinks:[{label:"Read Design Documentation",href:"/assets/projects/dream-fallen-2026/docs/dreamfallen-gdd.docx"},{label:"Read Level Design Document",href:"/assets/projects/dream-fallen-2026/docs/level-design.docx"},{label:"Read Puzzle Document",href:"/assets/projects/dream-fallen-2026/docs/puzzle.docx"}],contribution:"Owned the level design direction, player flow, pacing, encounter implementation planning, world/region structure, Level 2 and Level 3 puzzle design, UI direction, UI SFX direction, project documentation, press kit presentation, and trailer-facing project materials.",reflection:"Dream Fallen pushed me to treat theme as a playable system. Pressure is not only written into the story; it is built through corridor length, blocked routes, machine logic, enemy sightlines, resource scarcity, UI interruption, and the relief of returning to a temporary safe room.",tags:["FPS","Puzzle","UE5","Level Design"],theme:{themeName:"dream-fallen-signal",backgroundStyle:"black industrial dream system",primaryColor:"#05070a",secondaryColor:"#10141b",accentColor:"#f5f7fb",accentSecondary:"#4fb8d8",textColor:"#f5f7fb",panelStyle:"sharp sci-fi interface panels",decorativeMotifs:["circuit trace","pressure gauge","dream system","weapon module"],imageTreatment:"high contrast black-white cyan signal",pageMood:"industrial, tense, systemic"},links:[{label:"Read Design Documentation",href:"/assets/projects/dream-fallen-2026/docs/dreamfallen-gdd.docx"},{label:"Watch Trailer",href:"/assets/projects/dream-fallen-2026/game-trailer.mp4"},{label:"Press Kit PDF",href:"/assets/projects/dream-fallen-2026/docs/game-press-kit-dream-fallen.pdf"},{label:"Level Design Document",href:"/assets/projects/dream-fallen-2026/docs/level-design.docx"},{label:"Puzzle Document",href:"/assets/projects/dream-fallen-2026/docs/puzzle.docx"},{label:"Enemy Document",href:"/assets/projects/dream-fallen-2026/docs/enemy-except-boss.docx"}]}],I=["tension-through-surveillance-restriction","dream-fallen","children-eye-care-game","tick","office-drift","erebus","city-of-illusions","dessert-dash"];D.sort((e,t)=>{const a=I.indexOf(e.slug),r=I.indexOf(t.slug);return(a===-1?999:a)-(r===-1?999:r)});const O={name:"Zhiyun Yu",title:"Game Designer / Technical Designer / Environment & Systems Designer",intro:"Game designer and passionate game enthusiast focused on gameplay systems, level design, and narrative puzzle experiences. Skilled in Unreal Engine, Blueprint, Unity, and 3D art workflows, with hands-on experience in concept design, prototyping, playtesting, and iteration.",education:"M.F.A. Game Design candidate, Savannah College of Art and Design (SCAD)",role:"M.F.A. Game Design candidate, Savannah College of Art and Design (SCAD)",focus:"Gameplay design, mission design, system design, level flow, puzzle mechanics, UI feedback, player experience, and atmospheric interaction",tools:"Unreal Engine 5, Unity, Blueprint, C#, UMG, Corgi Engine, Maya, Blender, Substance Painter, Photoshop, Illustrator, Figma, Premiere Pro, After Effects, HTML/CSS, JavaScript, Git, Miro, Notion",interests:"Occult lore, fantasy, dreamlike spaces, player psychology, and readable interaction",mission:"Build gameplay missions and systemic worlds where mechanics, UI feedback, level structure, and player decisions work together to create emotional pressure."},B=[{label:"Design",skills:["Gameplay Design","Mission Design","Systems Design","Level Design","Puzzle Design","Narrative Design","UI/UX"]},{label:"Engine",skills:["Unreal Engine 5","Blueprint","UMG","Unity","Corgi Engine"]},{label:"Art Tools",skills:["Maya","Blender","Substance Painter","Photoshop","Illustrator","Figma"]},{label:"Research",skills:["Playtesting","User Observation","Thesis Writing","Design Documentation","Miro","Notion"]}],L=document.getElementById("root"),N="/Zhiyyu_Portfolio/";let u={},y=[],M=[];function m(e=""){return!e.startsWith("/assets/")&&!e.startsWith("/thesis-site/")?e:`${N.replace(/\/$/,"")}${e}`}function _(e){return Array.isArray(e)?e.map(t=>_(t)):e&&typeof e=="object"?Object.fromEntries(Object.entries(e).map(([t,a])=>[t,_(a)])):typeof e=="string"?m(e):e}function W(e){return e.replaceAll('src="/assets/',`src="${m("/assets/").replace(/\/$/,"")}/`).replaceAll('href="/assets/',`href="${m("/assets/").replace(/\/$/,"")}/`).replaceAll('src="/thesis-site/',`src="${m("/thesis-site/").replace(/\/$/,"")}/`).replaceAll('href="/thesis-site/',`href="${m("/thesis-site/").replace(/\/$/,"")}/`)}function A(e){L.innerHTML=W(e)}async function H(){u=O,y=_(D),M=B}function G(e){return e.map(t=>`<span class="skill-tag">${t}</span>`).join("")}function U(){return`
    <header class="navigation-bar">
      <a class="navigation-bar__brand" href="#">ZY / Vaporwave System</a>
      <nav aria-label="Primary navigation">
        <a href="#profile-room">Profile Room</a>
        <a href="#projects">Project Wall</a>
        <a href="#skills">Project Archive</a>
        <a href="#transmission">Contact</a>
      </nav>
    </header>
  `}function Y(){A(`
    <div class="app-shell surveillance-shell">
      ${V()}
      ${U()}
      ${z()}
      ${q("home")}
      <main class="scene-camera" data-scene-camera>
        ${R()}
        ${Z("home")}
        <section class="hero-section profile-room scene-panel" id="profile-room" aria-labelledby="profile-room-title">
          <div class="profile-room__depth" aria-hidden="true">
            <span></span><span></span><span></span>
          </div>
          <div class="hero-section__copy profile-room__copy">
            <span class="status-chip">PROFILE ROOM / OBSERVED PORTFOLIO SIGNAL</span>
            <h1 class="glitch-text" data-text="${u.name}">${u.name}</h1>
            <img class="name-cursor-guide" src="/assets/vapor-assets/cropped/floppy-backup-cursor.png" alt="" aria-hidden="true" />
            <p class="hero-section__title">${u.title}</p>
            <p>${u.intro}</p>
          </div>
          <section class="profile-room__stage" aria-label="Profile room scene">
            <figure class="profile-avatar">
              <img src="/assets/about-persona.png" alt="Stylized avatar placeholder for Zhiyun Yu" />
            </figure>
            <div class="profile-fragments" aria-label="Profile fragments">
              ${w("Name",u.name)}
              ${w("Education",u.education||u.role)}
              ${w("Design Focus",u.focus)}
              ${w("Tools",u.tools)}
              ${w("Interests",u.interests)}
              ${w("Current Mission",u.mission)}
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
            ${y.map((e,t)=>X(e,t)).join("")}
            <div class="project-focus-view" data-project-focus-view aria-live="polite">
              <span>Lens locked</span>
              <strong>OPEN CASE FILE</strong>
            </div>
          </div>
        </section>

        <section class="skill-archive scene-panel" id="skills">
          <div class="section-heading"><span>CASE FILES / PROJECT ARCHIVE</span><h2>Skills Archive</h2></div>
          <div class="skill-archive__grid">
            ${M.map(e=>`
              <article class="skill-group"><h3>${e.label}</h3><div class="tag-row">${G(e.skills)}</div></article>
            `).join("")}
          </div>
        </section>

        <section class="terminal-contact contact-transmission scene-panel" id="transmission">
          <span>CONTACT / PORTFOLIO CHANNEL</span>
          <h2>Contact</h2>
          <p>Open a channel for collaborations, design roles, or portfolio conversations.</p>
          <div class="contact-lines" aria-label="Contact information">
            <a href="tel:+118052096260">Phone: +1 18052096260</a>
            <a href="mailto:zhoufuyechuji@gmail.com">Email: zhoufuyechuji@gmail.com</a>
          </div>
        </section>
      </main>
      <div class="glitch-transition" data-glitch-transition aria-hidden="true"></div>
    </div>
  `),me(),F(),ue(),pe()}function V(){return`
    <section class="entry-gate" data-entry-gate role="dialog" aria-modal="true" aria-labelledby="entry-gate-title">
      <div class="entry-gate__noise" aria-hidden="true"></div>
      <div class="entry-gate__popups" aria-hidden="true">
        <img class="entry-gate__popup entry-gate__popup--player" src="/assets/vapor-assets/cropped/window-now-playing.png" alt="" />
        <img class="entry-gate__popup entry-gate__popup--note" src="/assets/vapor-assets/cropped/window-note.png" alt="" />
        <img class="entry-gate__popup entry-gate__popup--dialog" src="/assets/vapor-assets/cropped/ui-dialog.png" alt="" />
        <img class="entry-gate__popup entry-gate__popup--system" src="/assets/vapor-assets/cropped/ui-system.png" alt="" />
      </div>
      <div class="entry-gate__cursor" data-entry-cursor aria-hidden="true"></div>
      <div class="entry-gate__window">
        <div class="entry-gate__titlebar">
          <span>PORTFOLIO_START.EXE</span>
          <span aria-hidden="true">X</span>
        </div>
        <div class="entry-gate__screen">
          <span class="entry-gate__eyebrow">SYSTEM MESSAGE / USER CONFIRMATION</span>
          <h2 id="entry-gate-title">Would you like to get to know me?</h2>
          <p>Signal detected. Select YES to load Zhiyun Yu's project world.</p>
          <div class="entry-gate__actions" aria-label="Enter portfolio choices">
            <button type="button" data-enter-portfolio>YES</button>
            <button type="button" data-enter-portfolio>YES</button>
            <button type="button" data-enter-portfolio>YES</button>
          </div>
        </div>
        <div class="entry-gate__glitch-particles" aria-hidden="true">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </section>
  `}function X(e,t){return`
    <a class="evidence-card evidence-card--${t+1}" href="#project/${e.slug}" data-project-card data-slug="${e.slug}" onclick="window.openPortfolioProject?.(event, '${e.slug}')" aria-label="Open project: ${e.title}">
      <span class="evidence-card__pin" aria-hidden="true"></span>
      <span class="evidence-card__tape" aria-hidden="true"></span>
      <article class="evidence-card__paper">
        <div class="evidence-card__image">
          <img src="${e.thumbnail}" alt="${e.title} project thumbnail" />
          <span class="evidence-card__scan">ARCHIVE NODE</span>
        </div>
        <div class="evidence-card__meta">
          <span>CASE FILE / ${e.type}</span>
          <h3>${e.title}</h3>
          <strong>${e.role}</strong>
          <p>${e.shortDescription}</p>
          <div class="evidence-card__tags">${e.tags.slice(0,3).map(a=>`<em>${a}</em>`).join("")}</div>
        </div>
        <span class="project-open-prompt">OPEN CASE FILE</span>
      </article>
    </a>
  `}function w(e,t){return`<article class="dossier-field"><span>${e}</span><p>${t}</p></article>`}function K(e){const t=y.find(n=>n.slug===e)||y[0],a=y.findIndex(n=>n.id===t.id),r=y[(a+1)%y.length],o=t.theme||{};A(`
    <div class="app-shell project-page-shell project-theme project-theme--${o.themeName||"default"}" style="${J(o)}" data-page-mood="${o.pageMood||""}">
      ${U()}
      ${z()}
      ${R()}
      ${q("project")}
      <main class="project-page">
        <a class="back-link" href="#projects">Back to Project Wall</a>
        <header class="project-hero">
          <div>
            <span class="project-hero__eyebrow">CLASSIFIED CASE FILE / SIGNAL STABLE</span>
            <h1 class="glitch-text" data-text="${t.title}">${t.title}</h1>
            <div class="project-theme-readout">
              <span>${o.pageMood||"project archive"}</span>
              <span>${o.panelStyle||"case file panels"}</span>
            </div>
            <p>${t.fullDescription}</p>
          </div>
          <section class="monitor-frame">
            <div class="monitor-frame__bar"><span>PROJECT SIGNAL / HERO CAPTURE</span><span class="record-dot">REC</span></div>
            <div class="monitor-frame__body">${se(t)}</div>
          </section>
        </header>
        ${re(t)}
        <section class="project-meta-grid">
          ${$("Role",t.role)}
          ${$("Project Type",t.type)}
          ${$("Timeline",t.timeline)}
          ${$("Tools",t.tools.join(" / "))}
        </section>
        ${b("REPORT 01","Design Goal",`<p>${t.designGoal}</p>`,"Design note: mechanics, mood, and player behavior should point to the same feeling.")}
        ${b("REPORT 02","Player Experience Goal",`<p>${t.playerExperienceGoal}</p>`)}
        ${b("REPORT 03","Gameplay / System Breakdown",`<div class="project-motifs">${(o.decorativeMotifs||[]).map(n=>`<span>${n}</span>`).join("")}</div><div class="breakdown-list">${t.breakdownSections.map(n=>`<article><h3>${n.title}</h3><p>${n.body}</p></article>`).join("")}</div>`)}
        ${t.documentationLinks?.length?b("READ","Design Documentation",te(t)):""}
        ${b("REPORT 04",t.contentSectionTitle||"Content",ee(t))}
        ${b("REPORT 05","My Contribution",`<p>${t.contribution}</p><div class="tag-row">${G(t.tags)}</div>`)}
        ${b("REPORT 06","Reflection / What I Learned",`<p>${t.reflection}</p>${ie(t)}`)}
        <nav class="project-bottom-nav">
          <a href="#">Back Home</a>
          <a href="#project/${r.slug}">Next Case: ${r.title}</a>
        </nav>
      </main>
    </div>
  `),F(),S(),ne(),ce()}function z(){return`
    <button class="guide-butterfly vapor-guide" type="button" data-guide-butterfly aria-label="Follow the cursor to the next section">
      <span class="vapor-guide__cursor"></span>
      <span class="vapor-guide__window">NEXT.EXE</span>
      <span class="guide-butterfly__label">open</span>
    </button>
  `}function R(){return`
    <div class="butterfly-field" aria-hidden="true">
      <span></span><span></span><span></span><span></span><span></span>
      <span></span><span></span><span></span><span></span><span></span>
    </div>
  `}function q(e="home"){return`
    <div class="ambient-glitch-particles ambient-glitch-particles--${e}" aria-hidden="true">
      ${Array.from({length:e==="project"?16:24},(a,r)=>`<span class="ambient-glitch-particle ambient-glitch-particle--${r+1}"></span>`).join("")}
    </div>
  `}function Z(e="home"){const t=m("/assets/vapor-assets/cropped");return`
    <div class="vapor-asset-layer vapor-asset-layer--${e}" aria-hidden="true">
      ${(e==="project"?[["asset-ui-player","ui-player.png"],["asset-ui-explorer","ui-explorer.png"],["asset-ui-note","ui-note-small.png"],["asset-ui-icons","ui-icons.png"],["asset-cat-monitor","cat-monitor.png"],["asset-cat-fish","cat-fish.png"]]:[["asset-window-system","window-system.png"],["asset-window-player","window-now-playing.png"],["asset-cassette","cassette-code-mix.png"],["asset-desktop-folders","desktop-folders.png"],["asset-desktop-disks","desktop-disks.png"],["asset-desktop-hearts","desktop-hearts.png"],["asset-taskbar","taskbar.png"]]).map(([n,c])=>`<img class="vapor-asset ${n}" src="${t}/${c}" alt="" loading="lazy" />`).join("")}
    </div>
  `}function J(e){return[["--project-bg",e.primaryColor],["--project-panel",e.secondaryColor],["--project-text",e.textColor],["--project-accent",e.accentColor],["--project-accent-secondary",e.accentSecondary],["--project-border",`${e.accentColor||"#86bdd0"}55`],["--project-glow",`${e.accentColor||"#86bdd0"}33`],["--project-texture",e.backgroundStyle]].filter(([,t])=>t).map(([t,a])=>`${t}: ${a}`).join("; ")}function $(e,t){return`<div><span>${e}</span><strong>${t}</strong></div>`}function b(e,t,a,r=""){return`
    <section class="case-file-section">
      <div><span class="case-file-section__eyebrow">${e}</span><h2>${t}</h2></div>
      <div class="case-file-section__body">${a}</div>
      ${r?`<aside class="case-file-section__note">${r}</aside>`:""}
    </section>
  `}function Q(e){return`
    <div class="image-gallery">
      ${e.galleryImages.map((t,a)=>`
        <figure class="image-gallery__item">
          ${oe(t,e,a)}
          ${ae(t)}
        </figure>
      `).join("")}
    </div>
  `}function ee(e){return`${e.contentBlocks?.length?`
      <div class="project-content-grid">
        ${e.contentBlocks.map(a=>`
          <article class="project-content-card">
            <span>${a.kicker||"Design note"}</span>
            <h3>${a.title}</h3>
            <p>${a.body}</p>
            ${a.points?.length?`<ul>${a.points.map(r=>`<li>${r}</li>`).join("")}</ul>`:""}
          </article>
        `).join("")}
      </div>
    `:""}${Q(e)}`}function te(e){return`
    <p class="document-links__intro">Click to open or download the project design documentation.</p>
    <div class="project-links document-links">
      ${e.documentationLinks.map(t=>`<a href="${t.href}" target="_blank" rel="noreferrer" download>${t.label}</a>`).join("")}
    </div>
  `}function ae(e){return typeof e=="object"&&e?.label?`<figcaption>${e.label}</figcaption>`:""}function oe(e,t,a){if(typeof e=="string"){const r=`${t.title} process or result screenshot ${a+1}`;return`
      <button class="gallery-lightbox-trigger" type="button" data-lightbox-src="${e}" data-lightbox-alt="${r}" aria-label="Open full image: ${r}">
        <img src="${e}" alt="${r}" />
        <span>Open full image</span>
      </button>
    `}if(e?.type==="image"){const r=e.label||`${t.title} process or result screenshot ${a+1}`;return`
      <button class="gallery-lightbox-trigger${e.variant?` gallery-lightbox-trigger--${e.variant}`:""}" type="button" data-lightbox-src="${e.src}" data-lightbox-alt="${r}" aria-label="Open full image: ${r}">
        <img src="${e.src}" alt="${r}" />
        <span>Open full image</span>
      </button>
    `}if(e?.type==="video")return`
      <video class="gallery-video" src="${e.src}" poster="${e.poster||t.heroImage}" controls playsinline preload="metadata">
        <img src="${e.poster||t.heroImage}" alt="${e.label||`${t.title} video capture ${a+1}`}" />
      </video>
    `;if(e?.type==="frameSequence"){const r=m(`/thesis-site/assets/sticker-frames/${e.sequence}/${e.sequence}_00.png`),o=e.label||`${t.title} animated process capture ${a+1}`;return`
      <button class="gallery-lightbox-trigger" type="button" data-lightbox-src="${r}" data-lightbox-alt="${o}" aria-label="Open full image: ${o}">
        <img
          src="${r}"
          alt="${o}"
          data-frame-sequence="${e.sequence}"
          data-frame-count="${e.count}"
          data-frame-delay="${e.delay||90}"
        />
        <span>Open full image</span>
      </button>
    `}return""}function se(e){return e.slug==="tension-through-surveillance-restriction"?`<img src="${e.heroImage}" alt="${e.title} hero visual" />`:e.heroVideo?`
      <div class="hero-video-wrap">
        <video src="${e.heroVideo}" poster="${e.heroImage}" controls playsinline preload="metadata">
          <img src="${e.heroImage}" alt="${e.title} hero visual" />
        </video>
        ${e.heroVideoLabel?`<span class="hero-video-label">${e.heroVideoLabel}</span>`:""}
      </div>
    `:`<img src="${e.heroImage}" alt="${e.title} hero visual" />`}function re(e){return e.slug!=="tension-through-surveillance-restriction"?"":`
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
                ${x("Mood","mood",1,-5,5)}
                ${x("Hungry","hunger",-1,-5,5)}
                ${x("Mischief","mischief",3,0,10)}
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
  `}function x(e,t,a,r,o,n=""){const c=Math.round((a-r)/(o-r)*100);return n?`
      <div class="ue-pet-slider ue-pet-slider-${t}" aria-label="${e}: ${a}">
        <span data-pet-meter="${t}" style="width: ${c}%">
          <img src="${m(`/thesis-site/assets/${n}`)}" alt="" />
        </span>
      </div>
      <strong class="ue-pet-value ue-pet-value-${t}" data-pet-value="${t}">${a}</strong>
    `:`
    <div class="ue-status-row">
      <span>${e}</span>
      <div class="ue-status-meter" aria-hidden="true"><span data-pet-meter="${t}" style="width: ${c}%"></span></div>
      <strong data-pet-value="${t}">${a}</strong>
    </div>
  `}function S(){const e=document.querySelector("[data-pet-demo]");if(!e)return;const t={screen:"monitor",mood:1,hunger:-1,mischief:3,money:0,behavior:"Peaceful",cameraX:0,cameraY:0,workLocked:!1,workRemaining:0,workReward:0,workImpact:null,feedbackPlaying:!1,title:"Idle",message:"Monitor is open. Feed, Toy, and Notice are available only from this camera UI."},a={feed:{title:"Feed",video:m("/thesis-site/assets/animation/Feedback_Feed.mp4"),delta:{mood:1,hunger:3,mischief:-1},message:"Feed increases Hungry value to Full value."},toy:{title:"Toy",video:m("/thesis-site/assets/animation/Feedback_Toy.mp4"),delta:{mood:2,hunger:-1,mischief:-2},message:"Toy improves Mood and lowers Mischief, so it is best before risk becomes extreme."},notice:{title:"Notice",video:m("/thesis-site/assets/animation/Feedback_Notice.mp4"),delta:{mood:-2,hunger:0,mischief:-3},message:"Notice suppresses Mischief strongly, but Mood drops because the intervention is harsh."}},r={short:{duration:3,reward:5,delta:{mood:-1,hunger:-1,mischief:1},label:"15Min-Work"},half:{duration:4,reward:15,delta:{mood:-1,hunger:-2,mischief:2},label:"0.5Hour-Work"},one:{duration:5,reward:35,delta:{mood:-2,hunger:-3,mischief:3},label:"1Hour-Work"},two:{duration:6,reward:80,delta:{mood:-3,hunger:-4,mischief:4},label:"2hour-Work"}},o={mood:{min:-5,max:5},hunger:{min:-5,max:5},mischief:{min:0,max:10}},n=(i,s,l)=>Math.max(s,Math.min(l,i)),c=i=>{t.mood=n(t.mood+i.mood,-5,5),t.hunger=n(t.hunger+i.hunger,-5,5),t.mischief=n(t.mischief+i.mischief,0,10),t.behavior=t.mischief>=7?"Warning":t.mood<=-3?"Stressed":"Peaceful"},p=i=>{t.workLocked&&i!=="work"?(t.screen="work",t.message="WorkUI is locked until the current work session finishes."):t.screen=i,e.querySelectorAll("[data-pet-demo-screen]").forEach(l=>{l.classList.toggle("is-active",l.dataset.petDemoScreen===t.screen)}),e.querySelectorAll("[data-pet-demo-panel]").forEach(l=>{l.classList.toggle("is-active",l.dataset.petDemoPanel===t.screen)});const s=e.querySelector("[data-pet-demo-screen-name]");s&&(s.textContent=`${t.screen[0].toUpperCase()}${t.screen.slice(1)}UI`)},g=()=>{e.querySelectorAll("[data-pet-demo-action]").forEach(i=>{i.disabled=t.workLocked||t.screen!=="monitor"||t.feedbackPlaying}),e.querySelectorAll("[data-pet-demo-work]").forEach(i=>{i.disabled=t.workLocked}),e.querySelectorAll("[data-pet-demo-screen]").forEach(i=>{i.disabled=t.workLocked})},d=i=>{const s=e.querySelector("[data-pet-demo-video]"),l=e.querySelector("[data-pet-demo-feedback]");if(!s||!l)return;let v=!1;window.clearTimeout(d.timer),s.pause(),s.classList.remove("is-active"),s.removeAttribute("style"),s.onended=null,s.onerror=null,s.onloadedmetadata=null,l.classList.remove("is-active"),l.offsetWidth,l.classList.add("is-active"),t.feedbackPlaying=!0,g();const f=()=>{v||(v=!0,window.clearTimeout(d.timer),s.pause(),s.classList.remove("is-active"),s.removeAttribute("style"),t.feedbackPlaying=!1,g())};d.timer=window.setTimeout(f,3600),s.loop=!1,s.onended=f,s.onerror=f,s.onloadedmetadata=()=>{const k=Number.isFinite(s.duration)?s.duration:3.6;window.clearTimeout(d.timer),d.timer=window.setTimeout(f,Math.min(Math.max(k*1e3+400,1800),5e3))},s.src=i.video,s.currentTime=0,s.classList.add("is-active"),s.style.display="block",s.load(),window.requestAnimationFrame(()=>{v||s.play().catch(()=>{})})},h=()=>{e.querySelector("[data-pet-demo-money]").textContent=`$${t.money}`,e.querySelector("[data-pet-demo-behavior]").textContent=t.behavior,e.querySelector("[data-pet-demo-action-title]").textContent=t.title,e.querySelector("[data-pet-demo-message]").textContent=t.message,e.querySelector("[data-pet-demo-camera-image]")?.style.setProperty("--camera-x",`${t.cameraX}%`),e.querySelector("[data-pet-demo-camera-image]")?.style.setProperty("--camera-y",`${t.cameraY}%`),e.querySelector("[data-pet-demo-work-state]").textContent=t.workLocked?"Locked":"Ready",e.querySelector("[data-pet-demo-work-remaining]").textContent=t.workLocked?`${t.workRemaining}s remaining | Reward $${t.workReward}`:"Choose a duration",Object.entries(o).forEach(([i,s])=>{const l=t[i],v=Math.round((l-s.min)/(s.max-s.min)*100),f=e.querySelector(`[data-pet-meter="${i}"]`);f&&(f.style.width=`${v}%`,f.style.setProperty("--meter",`${v}%`));const k=e.querySelector(`[data-pet-value="${i}"]`);k&&(k.textContent=l)}),g()};e.querySelectorAll("[data-pet-demo-screen]").forEach(i=>{i.addEventListener("click",()=>{p(i.dataset.petDemoScreen),h()})}),e.querySelectorAll("[data-pet-demo-action]").forEach(i=>{i.addEventListener("click",()=>{const s=a[i.dataset.petDemoAction];!s||t.workLocked||t.screen!=="monitor"||t.feedbackPlaying||(c(s.delta),t.title=s.title,t.message=s.message,p("monitor"),h(),d(s))})}),e.querySelectorAll("[data-pet-demo-work]").forEach(i=>{i.addEventListener("click",()=>{const s=r[i.dataset.petDemoWork];!s||t.workLocked||(t.workLocked=!0,t.workRemaining=s.duration,t.workReward=s.reward,t.workImpact=s,t.title=s.label,t.message=`${s.label} started. Monitor controls are locked until the countdown finishes.`,p("work"),h())})}),e.querySelectorAll("[data-pet-demo-camera]").forEach(i=>{i.addEventListener("click",()=>{const s=i.dataset.petDemoCamera,l=10;s==="left"&&(t.cameraX=Math.min(14,t.cameraX+l)),s==="right"&&(t.cameraX=Math.max(-14,t.cameraX-l)),s==="up"&&(t.cameraY=Math.min(12,t.cameraY+l)),s==="down"&&(t.cameraY=Math.max(-12,t.cameraY-l)),h()})}),window.clearInterval(S.timer),S.timer=window.setInterval(()=>{if(!document.body.contains(e)){window.clearInterval(S.timer);return}if(!t.workLocked)return;if(t.workRemaining-=1,t.workRemaining>0){h();return}const i=t.workImpact;t.workLocked=!1,t.money+=t.workReward,i&&c(i.delta),t.workRemaining=0,t.workReward=0,t.workImpact=null,t.message="Work finished. The pet changed while attention was locked, so check PetUI or Monitor next.",h()},1e3),p("monitor"),h()}function ne(){window.__portfolioFrameTimers?.forEach(e=>window.clearInterval(e)),window.__portfolioFrameTimers=[],document.querySelectorAll("[data-frame-sequence]").forEach(e=>{const t=e.dataset.frameSequence,a=Number(e.dataset.frameCount),r=Number(e.dataset.frameDelay)||90;if(!t||!Number.isFinite(a)||a<2)return;const o=Array.from({length:a},(g,d)=>{const h=String(d).padStart(2,"0");return m(`/thesis-site/assets/sticker-frames/${t}/${t}_${h}.png`)}),n=o.map(g=>{const d=new Image;return d.src=g,d});let c=0;const p=window.setInterval(()=>{if(!document.body.contains(e)){window.clearInterval(p);return}c=(c+1)%o.length,n[c].complete&&(e.src=o[c])},r);window.__portfolioFrameTimers.push(p)})}function ie(e){return e.links?.length?`<div class="project-links">${e.links.map(t=>`<a href="${t.href}" target="_blank" rel="noreferrer">${t.label}</a>`).join("")}</div>`:""}function ce(){const e=[...document.querySelectorAll("[data-lightbox-src]")];if(!e.length)return;const t=le(),a=t.querySelector("[data-lightbox-image]"),r=t.querySelector("[data-lightbox-caption]"),o=()=>{t.classList.remove("is-open"),t.setAttribute("aria-hidden","true"),a.removeAttribute("src"),r.textContent="",document.body.classList.remove("has-gallery-lightbox")};e.forEach(n=>{n.addEventListener("click",()=>{a.src=n.dataset.lightboxSrc,a.alt=n.dataset.lightboxAlt||"Expanded project image",r.textContent=n.dataset.lightboxAlt||"",t.classList.add("is-open"),t.setAttribute("aria-hidden","false"),document.body.classList.add("has-gallery-lightbox"),t.querySelector("[data-lightbox-close]")?.focus({preventScroll:!0})})}),t.querySelectorAll("[data-lightbox-close], [data-lightbox-backdrop]").forEach(n=>{n.onclick=o}),window.__portfolioLightboxKeyBound||(window.__portfolioLightboxKeyBound=!0,window.addEventListener("keydown",n=>{n.key==="Escape"&&document.querySelector(".gallery-lightbox.is-open [data-lightbox-close]")?.click()}))}function le(){const e=document.querySelector(".gallery-lightbox");if(e)return e;const t=document.createElement("div");return t.className="gallery-lightbox",t.setAttribute("aria-hidden","true"),t.innerHTML=`
    <button class="gallery-lightbox__backdrop" type="button" data-lightbox-backdrop aria-label="Close full image"></button>
    <figure class="gallery-lightbox__stage" role="dialog" aria-modal="true" aria-label="Expanded project image">
      <button class="gallery-lightbox__close" type="button" data-lightbox-close aria-label="Close full image">Close</button>
      <img data-lightbox-image alt="" />
      <figcaption data-lightbox-caption></figcaption>
    </figure>
  `,document.body.appendChild(t),t}function C(){const e=window.location.hash.match(/^#project\/(.+)$/);if(e){K(e[1]),window.scrollTo(0,0);return}Y(),de()}window.addEventListener("hashchange",()=>{y.length&&C()});H().then(C).catch(e=>{console.error(e),L.innerHTML='<main class="app-shell"><p>Portfolio data failed to load.</p></main>'});function de(){!window.location.hash||window.location.hash==="#"||window.setTimeout(()=>{const e=document.querySelector(window.location.hash);e?.scrollIntoView({behavior:"smooth",block:"start"}),e?.setAttribute("tabindex","-1"),e?.focus({preventScroll:!0})},50)}function F(){const e=document.querySelector("[data-guide-butterfly]");e&&e.addEventListener("click",()=>{if(window.location.hash.startsWith("#project/")){window.location.hash="#projects";return}const t=["#profile-room","#projects","#skills","#transmission"],a=window.location.hash&&t.includes(window.location.hash)?window.location.hash:"#profile-room",r=t[(t.indexOf(a)+1)%t.length];window.location.hash=r,window.setTimeout(()=>{document.querySelector(r)?.scrollIntoView({behavior:"smooth",block:"start"})},40)})}function pe(){const e=document.querySelector("[data-entry-gate]");if(!e)return;const t=e.querySelector("[data-entry-cursor]"),a=()=>{e.classList.add("is-leaving"),e.setAttribute("aria-hidden","true"),window.setTimeout(()=>e.remove(),520)},r=o=>{t&&(e.style.setProperty("--entry-cursor-x",`${o.clientX}px`),e.style.setProperty("--entry-cursor-y",`${o.clientY}px`),e.classList.toggle("is-cursor-active",!!o.target.closest("[data-enter-portfolio]")))};e.addEventListener("pointermove",r),e.addEventListener("pointerleave",()=>e.classList.remove("is-cursor-active")),e.querySelectorAll("[data-enter-portfolio]").forEach(o=>{o.addEventListener("click",a)}),e.addEventListener("keydown",o=>{o.key==="Enter"&&a()})}function ue(){document.body.classList.remove("is-transmission-visible");const e=document.querySelector("#transmission");if(!e||!("IntersectionObserver"in window))return;new IntersectionObserver(([a])=>{document.body.classList.toggle("is-transmission-visible",a.isIntersecting&&a.intersectionRatio>.28)},{threshold:[0,.28,.55]}).observe(e)}let E="",T=0,j=!1;function me(){E="",j=!1,window.clearTimeout(T);const e=document.querySelector("[data-project-wall]"),t=document.querySelector("[data-project-board]"),a=[...document.querySelectorAll("[data-project-card]")],r=document.querySelector("[data-project-focus-view]");!e||!t||!a.length||(t.addEventListener("click",o=>{const n=o.target.closest("[data-project-card]");n&&P(o,n.dataset.slug,n,a,e,t,r)}),window.openPortfolioProject=(o,n)=>{const c=o.currentTarget||document.querySelector(`[data-project-card][data-slug="${n}"]`);P(o,n,c,a,e,t,r)})}function P(e,t,a,r,o,n,c){e?.preventDefault(),!(!t||!a||j)&&(E!==t&&he({slug:t,card:a,cards:r,wall:o,board:n,focusView:c}),window.clearTimeout(T),T=window.setTimeout(()=>ge(t),360))}function he({slug:e,card:t,cards:a,wall:r,board:o,focusView:n}){E=e;const c=t.getBoundingClientRect(),p=o.getBoundingClientRect(),g=c.left+c.width/2,d=c.top+c.height/2,h=p.left+p.width/2,i=p.top+p.height/2;if(o.style.setProperty("--focus-x",`${Math.round((h-g)*.72)}px`),o.style.setProperty("--focus-y",`${Math.round((i-d)*.72)}px`),r.classList.add("is-focusing"),a.forEach(s=>{const l=s===t;s.classList.toggle("is-focused",l),s.classList.toggle("is-dimmed",!l),s.setAttribute("aria-label",`${l?"Open project case file":"Focus project"}: ${s.querySelector("h3")?.textContent||"project"}`)}),n){const s=t.querySelector("h3")?.textContent||"Selected project";n.innerHTML=`<span>Lens moving toward</span><strong>${s}</strong><small>Signal opening project page</small>`}}function ge(e){if(j)return;j=!0;const t=document.querySelector(".surveillance-shell"),a=document.querySelector("[data-project-wall]");t?.classList.add("is-opening-project"),a?.classList.add("is-opening-project"),window.setTimeout(()=>{const r=`#project/${e}`;if(window.location.hash===r){C();return}window.location.hash=r,window.setTimeout(()=>{document.querySelector(".project-page")||C()},80)},520)}
