// BJJ Translator term library, generated from the term spreadsheet.
// Each term's id is used in links, e.g. term.html?id=guard

const CATEGORIES = [
  "Positions",
  "Submissions",
  "Sweeps",
  "Takedowns",
  "Anatomy",
  "Concepts & Movements",
  "Commands & Phrases",
  "Competition",
  "Belt System"
];

const TERMS = [
  {
    "id": "back-control",
    "category": "Positions",
    "english": "Back Control",
    "portuguese": "Costas",
    "pronunciation": "KOHS-tahs",
    "description": "A dominant position where you are behind your opponent, controlling them with hooks (feet inside their thighs) and seatbelt grip. Considered the most dominant position in BJJ.",
    "related": [
      "rear-naked-choke",
      "hook"
    ],
    "examplePt": "Pegar as costas",
    "exampleEn": "Take the back"
  },
  {
    "id": "butterfly-guard",
    "category": "Positions",
    "english": "Butterfly Guard",
    "portuguese": "Guarda Borboleta",
    "pronunciation": "GWAR-dah bor-boh-LEH-tah",
    "description": "A seated open guard where both feet are hooked inside your opponent's thighs, using your shins as frames.",
    "related": [
      "open-guard",
      "butterfly-sweep"
    ],
    "examplePt": "Jogar borboleta",
    "exampleEn": "Play butterfly"
  },
  {
    "id": "closed-guard",
    "category": "Positions",
    "english": "Closed Guard",
    "portuguese": "Guarda Fechada",
    "pronunciation": "GWAR-dah feh-SHAH-dah",
    "description": "A guard variation where your legs are locked around your opponent's waist, controlling their posture and distance.",
    "related": [
      "guard",
      "open-guard"
    ],
    "examplePt": "Fechar a guarda",
    "exampleEn": "Close the guard"
  },
  {
    "id": "de-la-riva-guard",
    "category": "Positions",
    "english": "De La Riva Guard",
    "portuguese": "Guarda De La Riva",
    "pronunciation": "GWAR-dah deh lah HEE-vah",
    "description": "An open guard variation where you hook your foot around the outside of your opponent's lead leg while gripping their ankle. Named after Ricardo De La Riva.",
    "related": [
      "open-guard",
      "berimbolo"
    ],
    "examplePt": "Jogar De La Riva",
    "exampleEn": "Play De La Riva"
  },
  {
    "id": "guard",
    "category": "Positions",
    "english": "Guard",
    "portuguese": "Guarda",
    "pronunciation": "GWAR-dah",
    "description": "A ground position where you control your opponent using your legs. The foundation of BJJ with many variations including closed guard, open guard, and half guard.",
    "related": [
      "half-guard",
      "open-guard",
      "closed-guard"
    ],
    "examplePt": "Puxar para guarda",
    "exampleEn": "Pull to guard"
  },
  {
    "id": "half-guard",
    "category": "Positions",
    "english": "Half Guard",
    "portuguese": "Meia Guarda",
    "pronunciation": "MAY-ah GWAR-dah",
    "description": "A guard position where you have one of your opponent's legs trapped between yours.",
    "related": [
      "guard"
    ],
    "examplePt": "Jogar meia guarda",
    "exampleEn": "Play half guard"
  },
  {
    "id": "knee-on-belly",
    "category": "Positions",
    "english": "Knee on Belly",
    "portuguese": "Joelho na Barriga",
    "pronunciation": "zhoh-EL-yoh nah bah-HEE-gah",
    "description": "A dominant position where you place your knee on your opponent's stomach while keeping one foot on the ground for base. Generates heavy pressure and creates submission opportunities.",
    "related": [
      "side-control",
      "mount"
    ],
    "examplePt": "Colocar o joelho na barriga",
    "exampleEn": "Put the knee on the belly"
  },
  {
    "id": "lasso-guard",
    "category": "Positions",
    "english": "Lasso Guard",
    "portuguese": "Guarda Laço",
    "pronunciation": "GWAR-dah LAH-soh",
    "description": "An open guard where you wrap your leg around the opponent's arm from the outside while gripping their sleeve, creating a lasso-like control.",
    "related": [
      "spider-guard",
      "open-guard",
      "sleeve"
    ],
    "examplePt": "Jogar laço",
    "exampleEn": "Play lasso guard"
  },
  {
    "id": "mount",
    "category": "Positions",
    "english": "Mount",
    "portuguese": "Montada",
    "pronunciation": "mohn-TAH-dah",
    "description": "A dominant top position where you sit on your opponent's torso with knees on either side. One of the most controlling positions in BJJ.",
    "related": [
      "side-control",
      "back-control"
    ],
    "examplePt": "Montar",
    "exampleEn": "To mount"
  },
  {
    "id": "north-south",
    "category": "Positions",
    "english": "North-South",
    "portuguese": "Norte-Sul",
    "pronunciation": "NOR-chee SOOW",
    "description": "A top control position where you are chest to chest with your opponent but facing opposite directions (head to head). Strong control position with submission options.",
    "related": [
      "side-control",
      "kimura"
    ],
    "examplePt": "Ir para norte-sul",
    "exampleEn": "Go to north-south"
  },
  {
    "id": "open-guard",
    "category": "Positions",
    "english": "Open Guard",
    "portuguese": "Guarda Aberta",
    "pronunciation": "GWAR-dah ah-BEHR-tah",
    "description": "Any guard variation where your legs are not locked around your opponent. Includes spider guard, de la Riva, lasso guard, and more.",
    "related": [
      "guard",
      "closed-guard",
      "de-la-riva-guard"
    ],
    "examplePt": "Abrir a guarda",
    "exampleEn": "Open the guard"
  },
  {
    "id": "side-control",
    "category": "Positions",
    "english": "Side Control",
    "portuguese": "Cem Quilos",
    "pronunciation": "seng KEE-lohs",
    "description": "A dominant top position where you control your opponent from the side, chest to chest, without being in their guard. Literally means '100 kilos' — describing how heavy the pressure feels.",
    "related": [
      "mount",
      "north-south",
      "knee-on-belly"
    ],
    "examplePt": "Passar para cem quilos",
    "exampleEn": "Pass to side control"
  },
  {
    "id": "spider-guard",
    "category": "Positions",
    "english": "Spider Guard",
    "portuguese": "Guarda Aranha",
    "pronunciation": "GWAR-dah ah-RAHN-yah",
    "description": "An open guard variation where you grip both sleeves and place your feet on the opponent's biceps, controlling their arms and posture like a spider's web.",
    "related": [
      "open-guard",
      "lasso-guard",
      "sleeve"
    ],
    "examplePt": "Jogar aranha",
    "exampleEn": "Play spider guard"
  },
  {
    "id": "turtle",
    "category": "Positions",
    "english": "Turtle",
    "portuguese": "Tartaruga",
    "pronunciation": "tar-tah-ROO-gah",
    "description": "A defensive position where you are on all fours (hands and knees), protecting your neck and limbs. Common transition position when guard is passed.",
    "related": [
      "back-control",
      "headlock"
    ],
    "examplePt": "Virar tartaruga",
    "exampleEn": "Turn to turtle"
  },
  {
    "id": "americana",
    "category": "Submissions",
    "english": "Americana",
    "portuguese": "Chave Americana",
    "pronunciation": "SHAH-vee ah-meh-ree-KAH-nah",
    "description": "A shoulder lock similar to the Kimura but rotating the arm in the opposite direction (outward). Often applied from mount or side control.",
    "related": [
      "mount",
      "side-control",
      "kimura"
    ],
    "examplePt": "Aplicar a americana",
    "exampleEn": "Apply the Americana"
  },
  {
    "id": "anaconda-choke",
    "category": "Submissions",
    "english": "Anaconda Choke",
    "portuguese": "Estrangulamento Anaconda",
    "pronunciation": "ehs-trahn-goo-lah-MEN-toh ah-nah-KOHN-dah",
    "description": "An arm triangle choke applied from the front headlock position, threading your arm around the neck and under the arm.",
    "related": [
      "d-arce-choke",
      "headlock"
    ],
    "examplePt": "Encaixar a anaconda",
    "exampleEn": "Lock in the anaconda"
  },
  {
    "id": "ankle-lock",
    "category": "Submissions",
    "english": "Ankle Lock",
    "portuguese": "Chave de Tornozelo",
    "pronunciation": "SHAH-vee deh tor-noh-ZEH-loh",
    "description": "A straight foot lock compressing the Achilles tendon by hugging the foot and arching the hips. The most basic and commonly allowed leg lock.",
    "related": [
      "leg-lock",
      "heel-hook"
    ],
    "examplePt": "Aplicar a chave de tornozelo",
    "exampleEn": "Apply the ankle lock"
  },
  {
    "id": "arm-triangle",
    "category": "Submissions",
    "english": "Arm Triangle",
    "portuguese": "Triângulo de Braço",
    "pronunciation": "tree-AHN-goo-loh deh BRAH-soh",
    "description": "A choke using your arms to form a triangle around the opponent's neck and their own arm, compressing from side control or mount.",
    "related": [
      "side-control",
      "mount",
      "d-arce-choke"
    ],
    "examplePt": "Fechar o triângulo de braço",
    "exampleEn": "Close the arm triangle"
  },
  {
    "id": "armbar",
    "category": "Submissions",
    "english": "Armbar",
    "portuguese": "Chave de Braço",
    "pronunciation": "SHAH-vee deh BRAH-soh",
    "description": "A joint lock hyperextending the elbow by controlling the opponent's arm between your thighs and lifting your hips against the elbow joint. One of the most fundamental submissions.",
    "related": [
      "guard",
      "mount",
      "triangle-choke"
    ],
    "examplePt": "Aplicar a chave de braço",
    "exampleEn": "Apply the armbar"
  },
  {
    "id": "baseball-bat-choke",
    "category": "Submissions",
    "english": "Baseball Bat Choke",
    "portuguese": "Estrangulamento Taco de Beisebol",
    "pronunciation": "ehs-trahn-goo-lah-MEN-toh TAH-koh deh bay-zeh-BOL",
    "description": "A gi choke using a cross grip on the collar with hands positioned like holding a baseball bat, often set up from knee on belly.",
    "related": [
      "knee-on-belly",
      "collar"
    ],
    "examplePt": "Fazer o estrangulamento taco de beisebol",
    "exampleEn": "Do the baseball bat choke"
  },
  {
    "id": "bicep-slicer",
    "category": "Submissions",
    "english": "Bicep Slicer",
    "portuguese": "Chave de Bíceps",
    "pronunciation": "SHAH-vee deh BEE-seps",
    "description": "A compression lock that wedges a bone (usually the forearm or shin) into the opponent's bicep, creating intense pressure on the elbow joint.",
    "related": [
      "armbar",
      "calf-slicer"
    ],
    "examplePt": "Aplicar a chave de bíceps",
    "exampleEn": "Apply the bicep slicer"
  },
  {
    "id": "bow-and-arrow-choke",
    "category": "Submissions",
    "english": "Bow and Arrow Choke",
    "portuguese": "Estrangulamento Arco e Flecha",
    "pronunciation": "ehs-trahn-goo-lah-MEN-toh AR-koo ee FLEH-shah",
    "description": "A powerful gi choke from back control where you grip the collar with one hand and the pants/leg with the other, stretching the opponent out.",
    "related": [
      "back-control",
      "collar"
    ],
    "examplePt": "Aplicar arco e flecha",
    "exampleEn": "Apply the bow and arrow"
  },
  {
    "id": "calf-slicer",
    "category": "Submissions",
    "english": "Calf Slicer",
    "portuguese": "Chave de Panturrilha",
    "pronunciation": "SHAH-vee deh pahn-too-HEEL-yah",
    "description": "A compression lock that wedges a bone (usually the shin) into the back of the opponent's calf muscle, creating intense pressure.",
    "related": [
      "knee-bar",
      "leg-lock"
    ],
    "examplePt": "Aplicar a chave de panturrilha",
    "exampleEn": "Apply the calf slicer"
  },
  {
    "id": "cross-collar-choke",
    "category": "Submissions",
    "english": "Cross Collar Choke",
    "portuguese": "Estrangulamento Cruzado",
    "pronunciation": "ehs-trahn-goo-lah-MEN-toh kroo-ZAH-doh",
    "description": "A gi-based choke using cross grips on the opponent's collar to apply pressure to both sides of the neck. Can be performed from guard or mount.",
    "related": [
      "mount",
      "guard",
      "collar"
    ],
    "examplePt": "Fazer o estrangulamento cruzado",
    "exampleEn": "Do the cross collar choke"
  },
  {
    "id": "d-arce-choke",
    "category": "Submissions",
    "english": "D'Arce Choke",
    "portuguese": "Estrangulamento D'Arce",
    "pronunciation": "ehs-trahn-goo-lah-MEN-toh DARS",
    "description": "An arm triangle variation where you thread your arm under the opponent's neck and through their armpit, locking a figure-four grip to choke.",
    "related": [
      "anaconda-choke",
      "arm-triangle"
    ],
    "examplePt": "Encaixar o D'Arce",
    "exampleEn": "Lock in the D'Arce"
  },
  {
    "id": "ezekiel-choke",
    "category": "Submissions",
    "english": "Ezekiel Choke",
    "portuguese": "Estrangulamento Ezequiel",
    "pronunciation": "ehs-trahn-goo-lah-MEN-toh eh-zeh-kee-EL",
    "description": "A choke using the sleeve of your own gi to apply pressure across the opponent's neck. Can be applied from mount or inside guard.",
    "related": [
      "mount",
      "guard"
    ],
    "examplePt": "Fazer o ezequiel",
    "exampleEn": "Do the Ezekiel"
  },
  {
    "id": "gogoplata",
    "category": "Submissions",
    "english": "Gogoplata",
    "portuguese": "Gogoplata",
    "pronunciation": "goh-goh-PLAH-tah",
    "description": "A choke from guard using the shin bone across the opponent's throat while pulling their head down with both hands. A rare and flashy submission.",
    "related": [
      "guard",
      "omoplata",
      "triangle-choke"
    ],
    "examplePt": "Encaixar a gogoplata",
    "exampleEn": "Lock in the gogoplata"
  },
  {
    "id": "guillotine",
    "category": "Submissions",
    "english": "Guillotine",
    "portuguese": "Guilhotina",
    "pronunciation": "gee-yoh-CHEE-nah",
    "description": "A front headlock choke where you wrap your arm around the opponent's neck and squeeze, often applied from guard or during a sprawl.",
    "related": [
      "headlock",
      "guard"
    ],
    "examplePt": "Aplicar a guilhotina",
    "exampleEn": "Apply the guillotine"
  },
  {
    "id": "heel-hook",
    "category": "Submissions",
    "english": "Heel Hook",
    "portuguese": "Chave de Calcanhar",
    "pronunciation": "SHAH-vee deh kahl-kahn-YAR",
    "description": "A powerful and dangerous leg lock that attacks the knee by twisting the heel, generating rotational force on the knee ligaments.",
    "related": [
      "knee-bar",
      "leg-lock"
    ],
    "examplePt": "Aplicar a chave de calcanhar",
    "exampleEn": "Apply the heel hook"
  },
  {
    "id": "kimura",
    "category": "Submissions",
    "english": "Kimura",
    "portuguese": "Kimura",
    "pronunciation": "kee-MOO-rah",
    "description": "A shoulder lock using a figure-four grip to rotate the opponent's arm behind their back. Named after Masahiko Kimura who used it to defeat Hélio Gracie.",
    "related": [
      "side-control",
      "guard",
      "north-south"
    ],
    "examplePt": "Encaixar a kimura",
    "exampleEn": "Lock in the Kimura"
  },
  {
    "id": "knee-bar",
    "category": "Submissions",
    "english": "Knee Bar",
    "portuguese": "Chave de Joelho",
    "pronunciation": "SHAH-vee deh zhoh-EL-yoh",
    "description": "A leg lock hyperextending the knee joint, similar in principle to an armbar but applied to the leg.",
    "related": [
      "leg-lock",
      "heel-hook"
    ],
    "examplePt": "Aplicar a chave de joelho",
    "exampleEn": "Apply the knee bar"
  },
  {
    "id": "loop-choke",
    "category": "Submissions",
    "english": "Loop Choke",
    "portuguese": "Estrangulamento de Lapela",
    "pronunciation": "ehs-trahn-goo-lah-MEN-toh deh lah-PEH-lah",
    "description": "A sneaky choke using the opponent's own lapel, often caught during transitions or guard passing attempts.",
    "related": [
      "lapel",
      "guard"
    ],
    "examplePt": "Fazer o estrangulamento de lapela",
    "exampleEn": "Do the loop choke"
  },
  {
    "id": "omoplata",
    "category": "Submissions",
    "english": "Omoplata",
    "portuguese": "Omoplata",
    "pronunciation": "oh-moh-PLAH-tah",
    "description": "A shoulder lock using your legs to isolate and rotate the opponent's arm behind their back. Applied from guard, the name refers to the shoulder blade (scapula).",
    "related": [
      "guard",
      "triangle-choke",
      "kimura"
    ],
    "examplePt": "Encaixar a omoplata",
    "exampleEn": "Lock in the omoplata"
  },
  {
    "id": "rear-naked-choke",
    "category": "Submissions",
    "english": "Rear Naked Choke",
    "portuguese": "Mata Leão",
    "pronunciation": "MAH-tah leh-OWN",
    "description": "A chokehold applied from back control using your arms to compress the opponent's neck. Literally means 'Lion Killer' — one of the most iconic submissions in BJJ.",
    "related": [
      "back-control",
      "hook"
    ],
    "examplePt": "Encaixar o mata leão",
    "exampleEn": "Lock in the rear naked choke"
  },
  {
    "id": "toe-hold",
    "category": "Submissions",
    "english": "Toe Hold",
    "portuguese": "Chave de Pé",
    "pronunciation": "SHAH-vee deh PEH",
    "description": "A foot lock that twists the foot and ankle using a figure-four grip, putting pressure on the ankle joint.",
    "related": [
      "knee-bar",
      "heel-hook"
    ],
    "examplePt": "Aplicar a chave de pé",
    "exampleEn": "Apply the toe hold"
  },
  {
    "id": "triangle-choke",
    "category": "Submissions",
    "english": "Triangle Choke",
    "portuguese": "Triângulo",
    "pronunciation": "tree-AHN-goo-loh",
    "description": "A choke performed using your legs, forming a triangle shape around the opponent's neck and one arm. Typically applied from guard.",
    "related": [
      "guard",
      "armbar"
    ],
    "examplePt": "Fechar o triângulo",
    "exampleEn": "Close the triangle"
  },
  {
    "id": "wrist-lock",
    "category": "Submissions",
    "english": "Wrist Lock",
    "portuguese": "Chave de Punho",
    "pronunciation": "SHAH-vee deh POON-yoh",
    "description": "A joint lock targeting the wrist by bending it beyond its normal range of motion. Can be applied from many positions.",
    "related": [
      "guard",
      "mount"
    ],
    "examplePt": "Aplicar a chave de punho",
    "exampleEn": "Apply the wrist lock"
  },
  {
    "id": "berimbolo",
    "category": "Sweeps",
    "english": "Berimbolo",
    "portuguese": "Berimbolo",
    "pronunciation": "beh-reem-BOH-loh",
    "description": "An inverted spinning sweep/back take typically initiated from De La Riva guard. A hallmark of modern sport BJJ.",
    "related": [
      "de-la-riva-guard",
      "back-control"
    ],
    "examplePt": "Fazer o berimbolo",
    "exampleEn": "Do the berimbolo"
  },
  {
    "id": "butterfly-sweep",
    "category": "Sweeps",
    "english": "Butterfly Sweep",
    "portuguese": "Raspagem Borboleta",
    "pronunciation": "hahs-PAH-zheng bor-boh-LEH-tah",
    "description": "A sweep using butterfly guard hooks to elevate and tip the opponent to the side while controlling their upper body.",
    "related": [
      "butterfly-guard",
      "mount"
    ],
    "examplePt": "Fazer a borboleta",
    "exampleEn": "Do the butterfly sweep"
  },
  {
    "id": "flower-sweep",
    "category": "Sweeps",
    "english": "Flower Sweep",
    "portuguese": "Raspagem Pendulum",
    "pronunciation": "hahs-PAH-zheng pen-DOO-loom",
    "description": "A sweep from closed guard where you swing your leg like a pendulum to off-balance the opponent and come up to mount.",
    "related": [
      "guard",
      "mount"
    ],
    "examplePt": "Fazer a pendulum",
    "exampleEn": "Do the pendulum sweep"
  },
  {
    "id": "hip-bump-sweep",
    "category": "Sweeps",
    "english": "Hip Bump Sweep",
    "portuguese": "Raspagem de Quadril",
    "pronunciation": "hahs-PAH-zheng deh kwah-DREEL",
    "description": "A sweep from closed guard where you sit up explosively and bump the opponent with your hip to reverse position to mount.",
    "related": [
      "guard",
      "mount",
      "kimura"
    ],
    "examplePt": "Fazer a raspagem de quadril",
    "exampleEn": "Do the hip bump sweep"
  },
  {
    "id": "lumberjack-sweep",
    "category": "Sweeps",
    "english": "Lumberjack Sweep",
    "portuguese": "Raspagem Lenhador",
    "pronunciation": "hahs-PAH-zheng len-yah-DOR",
    "description": "A sweep from closed guard where you open your guard, push the opponent's knee, and sweep them sideways like felling a tree.",
    "related": [
      "guard",
      "side-control"
    ],
    "examplePt": "Fazer a raspagem lenhador",
    "exampleEn": "Do the lumberjack sweep"
  },
  {
    "id": "overhead-sweep",
    "category": "Sweeps",
    "english": "Overhead Sweep",
    "portuguese": "Raspagem por Cima",
    "pronunciation": "hahs-PAH-zheng por SEE-mah",
    "description": "A sweep where you roll your opponent directly over your head using your feet on their hips.",
    "related": [
      "butterfly-guard",
      "guard"
    ],
    "examplePt": "Fazer a raspagem por cima",
    "exampleEn": "Do the overhead sweep"
  },
  {
    "id": "scissor-sweep",
    "category": "Sweeps",
    "english": "Scissor Sweep",
    "portuguese": "Raspagem Tesoura",
    "pronunciation": "hahs-PAH-zheng teh-ZOH-rah",
    "description": "A fundamental sweep from closed guard using a cross collar grip and a knee shield to off-balance and roll the opponent.",
    "related": [
      "guard",
      "mount"
    ],
    "examplePt": "Fazer a raspagem tesoura",
    "exampleEn": "Do the scissor sweep"
  },
  {
    "id": "tripod-sweep",
    "category": "Sweeps",
    "english": "Tripod Sweep",
    "portuguese": "Raspagem Tripé",
    "pronunciation": "hahs-PAH-zheng tree-PEH",
    "description": "An open guard sweep where you place one foot on the opponent's hip and hook behind their ankle with the other foot, then push and pull to topple them.",
    "related": [
      "open-guard",
      "sweep-score"
    ],
    "examplePt": "Fazer a raspagem tripé",
    "exampleEn": "Do the tripod sweep"
  },
  {
    "id": "waiter-sweep",
    "category": "Sweeps",
    "english": "Waiter Sweep",
    "portuguese": "Raspagem do Garçom",
    "pronunciation": "hahs-PAH-zheng doh gar-SOHM",
    "description": "A sweep from half guard or deep half guard where you use your leg to elevate the opponent like a waiter carrying a tray. Effective against heavy top pressure.",
    "related": [
      "half-guard"
    ],
    "examplePt": "Fazer a raspagem do garçom",
    "exampleEn": "Do the waiter sweep"
  },
  {
    "id": "arm-drag",
    "category": "Takedowns",
    "english": "Arm Drag",
    "portuguese": "Arrasto de Braço",
    "pronunciation": "ah-HAHS-toh deh BRAH-soh",
    "description": "A grip fighting technique where you pull the opponent's arm across their body to off-balance them and create angles for takedowns or back takes.",
    "related": [
      "back-control",
      "single-leg"
    ],
    "examplePt": "Fazer o arrasto",
    "exampleEn": "Do the arm drag"
  },
  {
    "id": "body-lock-takedown",
    "category": "Takedowns",
    "english": "Body Lock Takedown",
    "portuguese": "Queda com Abraço",
    "pronunciation": "KEH-dah kohm ah-BRAH-soh",
    "description": "A takedown where you lock your arms around the opponent's torso (body lock) and use trips, lifts, or drives to bring them down.",
    "related": [
      "takedown-score"
    ],
    "examplePt": "Fazer a queda com abraço",
    "exampleEn": "Do the body lock takedown"
  },
  {
    "id": "double-leg",
    "category": "Takedowns",
    "english": "Double Leg",
    "portuguese": "Queda Dupla",
    "pronunciation": "KEH-dah DOO-plah",
    "description": "A takedown where you shoot in and grab both of the opponent's legs, driving through them to take them to the ground.",
    "related": [
      "single-leg",
      "sprawl"
    ],
    "examplePt": "Fazer a queda dupla",
    "exampleEn": "Do the double leg"
  },
  {
    "id": "foot-sweep",
    "category": "Takedowns",
    "english": "Foot Sweep",
    "portuguese": "Rasteira",
    "pronunciation": "hahs-TAY-rah",
    "description": "A throwing technique where you sweep the opponent's foot or ankle while they are stepping, using timing rather than strength.",
    "related": [
      "takedown-score",
      "hip-throw"
    ],
    "examplePt": "Fazer a rasteira",
    "exampleEn": "Do the foot sweep"
  },
  {
    "id": "hip-throw",
    "category": "Takedowns",
    "english": "Hip Throw",
    "portuguese": "Arremesso de Quadril",
    "pronunciation": "ah-heh-MEH-soh deh kwah-DREEL",
    "description": "A throw where you load the opponent onto your hip and rotate them over it to the ground. Adapted from Judo (O Goshi).",
    "related": [
      "takedown-score"
    ],
    "examplePt": "Fazer o arremesso",
    "exampleEn": "Do the hip throw"
  },
  {
    "id": "pull-guard",
    "category": "Takedowns",
    "english": "Pull Guard",
    "portuguese": "Puxar para Guarda",
    "pronunciation": "poo-SHAR PAH-rah GWAR-dah",
    "description": "A technique where you deliberately pull your opponent down into your guard rather than wrestling for a takedown. Common in sport BJJ.",
    "related": [
      "guard",
      "closed-guard"
    ],
    "examplePt": "Vou puxar guarda",
    "exampleEn": "I'm going to pull guard"
  },
  {
    "id": "single-leg",
    "category": "Takedowns",
    "english": "Single Leg",
    "portuguese": "Queda com Uma Perna",
    "pronunciation": "KEH-dah kohm OO-mah PEHR-nah",
    "description": "A takedown where you grab one of the opponent's legs and drive forward or trip them to bring them to the ground.",
    "related": [
      "double-leg",
      "sprawl"
    ],
    "examplePt": "Fazer a queda com uma perna",
    "exampleEn": "Do the single leg"
  },
  {
    "id": "sprawl",
    "category": "Takedowns",
    "english": "Sprawl",
    "portuguese": "Defesa de Queda",
    "pronunciation": "deh-FEH-zah deh KEH-dah",
    "description": "A defensive technique against takedowns where you drive your hips back and legs away while pushing down on the opponent's head or shoulders.",
    "related": [
      "single-leg",
      "double-leg"
    ],
    "examplePt": "Fazer a defesa de queda",
    "exampleEn": "Sprawl"
  },
  {
    "id": "academy",
    "category": "Concepts & Movements",
    "english": "Academy",
    "portuguese": "Academia",
    "pronunciation": "ah-kah-DEH-mee-ah",
    "description": "A BJJ school or training facility. In Brazilian culture, the term 'academia' carries deep respect — it's not just a gym, it's a place of learning and community.",
    "related": [
      "professor",
      "training"
    ],
    "examplePt": "Eu treino nessa academia",
    "exampleEn": "I train at this academy"
  },
  {
    "id": "back-take",
    "category": "Concepts & Movements",
    "english": "Back Take",
    "portuguese": "Pegar as Costas",
    "pronunciation": "peh-GAR ahs KOHS-tahs",
    "description": "The act of getting behind your opponent and establishing back control with hooks. Considered one of the most important skills in BJJ, as back control is the most dominant position.",
    "related": [
      "back-control",
      "hook",
      "berimbolo"
    ],
    "examplePt": "Ele pegou as costas",
    "exampleEn": "He took the back"
  },
  {
    "id": "backward-roll",
    "category": "Concepts & Movements",
    "english": "Backward Roll",
    "portuguese": "Rolamento para Trás",
    "pronunciation": "hoh-lah-MEN-toh PAH-rah TRAHS",
    "description": "A roll backward over your shoulder, used in warm-ups and to recover guard or escape certain positions.",
    "related": [
      "warm-up",
      "shrimp-hip-escape"
    ],
    "examplePt": "Fazer o rolamento para trás",
    "exampleEn": "Do the backward roll"
  },
  {
    "id": "base",
    "category": "Concepts & Movements",
    "english": "Base",
    "portuguese": "Base",
    "pronunciation": "BAH-zee",
    "description": "Stability and balance. Having good base means being difficult to sweep or off-balance. A fundamental concept in both top and bottom positions.",
    "related": [
      "self-defense",
      "technical-stand-up"
    ],
    "examplePt": "Ter boa base",
    "exampleEn": "Have good base"
  },
  {
    "id": "block",
    "category": "Concepts & Movements",
    "english": "Block",
    "portuguese": "Bloquear",
    "pronunciation": "bloh-kee-AR",
    "description": "To block or obstruct an opponent's movement or technique. Includes blocking the hip to prevent guard recovery or blocking an arm to set up a pass.",
    "related": [
      "frame",
      "guard-pass"
    ],
    "examplePt": "Bloqueia!",
    "exampleEn": "Block!"
  },
  {
    "id": "break",
    "category": "Concepts & Movements",
    "english": "Break",
    "portuguese": "Quebrar",
    "pronunciation": "keh-BRAR",
    "description": "To break — as in breaking a grip, breaking posture, or breaking guard open. A fundamental action in offensive BJJ.",
    "related": [
      "grip",
      "posture",
      "guard"
    ],
    "examplePt": "Quebrar a pegada",
    "exampleEn": "Break the grip"
  },
  {
    "id": "breakfall",
    "category": "Concepts & Movements",
    "english": "Breakfall",
    "portuguese": "Queda",
    "pronunciation": "KEH-dah",
    "description": "A technique for falling safely by slapping the ground with your arm and rolling to distribute impact. Essential for receiving throws safely.",
    "related": [
      "hip-throw",
      "takedown-score"
    ],
    "examplePt": "Fazer a queda",
    "exampleEn": "Do the breakfall"
  },
  {
    "id": "bridge",
    "category": "Concepts & Movements",
    "english": "Bridge",
    "portuguese": "Ponte",
    "pronunciation": "POHN-chee",
    "description": "An explosive upward hip thrust used to off-balance an opponent from mount or to escape bottom positions. Drive off your feet and arch your back.",
    "related": [
      "mount",
      "escape",
      "shrimp-hip-escape"
    ],
    "examplePt": "Fazer a ponte",
    "exampleEn": "Do the bridge"
  },
  {
    "id": "choke",
    "category": "Concepts & Movements",
    "english": "Choke",
    "portuguese": "Estrangulamento",
    "pronunciation": "ehs-trahn-goo-lah-MEN-toh",
    "description": "The general term for any choking technique that restricts blood flow or air to force a submission.",
    "related": [
      "rear-naked-choke",
      "guillotine",
      "triangle-choke"
    ],
    "examplePt": "Cuidado com o estrangulamento!",
    "exampleEn": "Watch out for the choke!"
  },
  {
    "id": "collar",
    "category": "Concepts & Movements",
    "english": "Collar",
    "portuguese": "Gola",
    "pronunciation": "GOH-lah",
    "description": "The reinforced collar/neckline of the gi jacket. One of the most important grip locations in gi BJJ, used for chokes and controlling posture.",
    "related": [
      "cross-collar-choke",
      "grip"
    ],
    "examplePt": "Pegar na gola",
    "exampleEn": "Grab the collar"
  },
  {
    "id": "cross-face",
    "category": "Concepts & Movements",
    "english": "Cross Face",
    "portuguese": "Cruz de Face",
    "pronunciation": "KROOZ deh FAH-see",
    "description": "A controlling technique where you drive your forearm across the opponent's face or jaw to turn their head away, limiting their movement and ability to escape. Essential for maintaining side control.",
    "related": [
      "side-control",
      "pressure",
      "forearm"
    ],
    "examplePt": "Fazer a cruz de face",
    "exampleEn": "Do the cross face"
  },
  {
    "id": "distance-management",
    "category": "Concepts & Movements",
    "english": "Distance Management",
    "portuguese": "Controle de Distância",
    "pronunciation": "kohn-TROH-leh deh dees-TAHN-see-ah",
    "description": "The skill of maintaining the appropriate distance from your opponent — either closing distance to engage or creating distance to disengage. Fundamental to both standing and ground work.",
    "related": [
      "guard",
      "takedown-score",
      "self-defense"
    ],
    "examplePt": "Controla a distância!",
    "exampleEn": "Control the distance!"
  },
  {
    "id": "drilling",
    "category": "Concepts & Movements",
    "english": "Drilling",
    "portuguese": "Repetição",
    "pronunciation": "heh-peh-chee-SOWNG",
    "description": "Practicing a technique repeatedly with a cooperative partner to build muscle memory. Essential for improvement.",
    "related": [
      "warm-up",
      "shrimp-hip-escape"
    ],
    "examplePt": "Vamos fazer repetição",
    "exampleEn": "Let's drill"
  },
  {
    "id": "escape",
    "category": "Concepts & Movements",
    "english": "Escape",
    "portuguese": "Fuga",
    "pronunciation": "FOO-gah",
    "description": "Getting out of a bad position (mount, side control, back control) to a neutral or advantageous position.",
    "related": [
      "shrimp-hip-escape",
      "bridge"
    ],
    "examplePt": "Fazer a fuga",
    "exampleEn": "Do the escape"
  },
  {
    "id": "flow",
    "category": "Concepts & Movements",
    "english": "Flow",
    "portuguese": "Fluir",
    "pronunciation": "floo-EER",
    "description": "Moving smoothly between techniques and positions without forcing anything. The goal of advanced BJJ.",
    "related": [
      "transition",
      "sparring-rolling",
      "drilling"
    ],
    "examplePt": "Vamos fluir",
    "exampleEn": "Let's flow"
  },
  {
    "id": "forward-roll",
    "category": "Concepts & Movements",
    "english": "Forward Roll",
    "portuguese": "Rolamento para Frente",
    "pronunciation": "hoh-lah-MEN-toh PAH-rah FREHN-chee",
    "description": "A basic roll forward over your shoulder, used in warm-ups and as part of many transitions and techniques.",
    "related": [
      "warm-up",
      "shrimp-hip-escape"
    ],
    "examplePt": "Fazer o rolamento para frente",
    "exampleEn": "Do the forward roll"
  },
  {
    "id": "frame",
    "category": "Concepts & Movements",
    "english": "Frame",
    "portuguese": "Enquadramento",
    "pronunciation": "en-kwah-drah-MEN-toh",
    "description": "Using your skeletal structure (forearms, shins, knees) to create barriers and maintain distance from an opponent. Essential for defense.",
    "related": [
      "forearm",
      "shin",
      "guard-retention"
    ],
    "examplePt": "Fazer o enquadramento",
    "exampleEn": "Set the frame"
  },
  {
    "id": "granby-roll",
    "category": "Concepts & Movements",
    "english": "Granby Roll",
    "portuguese": "Rolamento Granby",
    "pronunciation": "hoh-lah-MEN-toh GRAHN-bee",
    "description": "An inverted shoulder roll used to escape bottom positions or reguard. You roll over your shoulder to create space and face your opponent.",
    "related": [
      "turtle",
      "guard-recovery"
    ],
    "examplePt": "Fazer o rolamento",
    "exampleEn": "Do the Granby roll"
  },
  {
    "id": "grip",
    "category": "Concepts & Movements",
    "english": "Grip",
    "portuguese": "Pegada",
    "pronunciation": "peh-GAH-dah",
    "description": "How you hold the gi or your opponent's body. Grip fighting is a fundamental aspect of BJJ.",
    "related": [
      "collar",
      "sleeve",
      "lapel"
    ],
    "examplePt": "Fazer a pegada",
    "exampleEn": "Get the grip"
  },
  {
    "id": "guard-pass",
    "category": "Concepts & Movements",
    "english": "Guard Pass",
    "portuguese": "Passagem de Guarda",
    "pronunciation": "pah-SAH-zheng deh GWAR-dah",
    "description": "The act of getting past the opponent's legs (guard) to achieve a dominant position like side control.",
    "related": [
      "guard",
      "side-control"
    ],
    "examplePt": "Passar a guarda",
    "exampleEn": "Pass the guard"
  },
  {
    "id": "guard-recovery",
    "category": "Concepts & Movements",
    "english": "Guard Recovery",
    "portuguese": "Recomposição de Guarda",
    "pronunciation": "heh-kohm-poh-zee-SOWNG deh GWAR-dah",
    "description": "The act of getting back to guard after having it passed. Uses shrimping, framing, and hip movement.",
    "related": [
      "guard",
      "shrimp-hip-escape",
      "frame"
    ],
    "examplePt": "Recompor a guarda",
    "exampleEn": "Recover the guard"
  },
  {
    "id": "guard-retention",
    "category": "Concepts & Movements",
    "english": "Guard Retention",
    "portuguese": "Retenção de Guarda",
    "pronunciation": "heh-ten-SOWNG deh GWAR-dah",
    "description": "The skill of maintaining your guard position when an opponent is trying to pass. Uses frames, hip movement, and grip fighting to prevent the guard from being passed.",
    "related": [
      "guard",
      "frame",
      "shrimp-hip-escape"
    ],
    "examplePt": "Reter a guarda",
    "exampleEn": "Retain the guard"
  },
  {
    "id": "headlock",
    "category": "Concepts & Movements",
    "english": "Headlock",
    "portuguese": "Gravata",
    "pronunciation": "grah-VAH-tah",
    "description": "A control position wrapping your arm around the opponent's head. In BJJ, the headlock can be a controlling position or a submission setup, though it can also expose your back.",
    "related": [
      "guillotine"
    ],
    "examplePt": "Fazer a gravata",
    "exampleEn": "Do the headlock"
  },
  {
    "id": "hook",
    "category": "Concepts & Movements",
    "english": "Hook",
    "portuguese": "Gancho",
    "pronunciation": "GAHN-shoh",
    "description": "Using your foot or heel as a hook inside the opponent's thigh or body to maintain control, especially from back control or butterfly guard.",
    "related": [
      "back-control",
      "butterfly-guard"
    ],
    "examplePt": "Colocar os ganchos",
    "exampleEn": "Put in the hooks"
  },
  {
    "id": "inversion",
    "category": "Concepts & Movements",
    "english": "Inversion",
    "portuguese": "Inversão",
    "pronunciation": "een-vehr-SOWNG",
    "description": "Turning upside down by going to your shoulders, used in modern guard play to create angles and attack.",
    "related": [
      "berimbolo",
      "de-la-riva-guard"
    ],
    "examplePt": "Fazer a inversão",
    "exampleEn": "Do the inversion"
  },
  {
    "id": "knee-slide",
    "category": "Concepts & Movements",
    "english": "Knee Slide",
    "portuguese": "Passagem de Joelho",
    "pronunciation": "pah-SAH-zheng deh zhoh-EL-yoh",
    "description": "A guard passing technique where you slide your knee across the opponent's thigh to get past their guard and establish side control. One of the most fundamental and high-percentage guard passes.",
    "related": [
      "guard-pass",
      "side-control"
    ],
    "examplePt": "Fazer a passagem de joelho",
    "exampleEn": "Do the knee slide pass"
  },
  {
    "id": "lapel",
    "category": "Concepts & Movements",
    "english": "Lapel",
    "portuguese": "Lapela",
    "pronunciation": "lah-PEH-lah",
    "description": "The front flap of the gi jacket that extends from the collar down. Used for creative grips, wraps, and chokes.",
    "related": [
      "collar",
      "loop-choke"
    ],
    "examplePt": "Usar a lapela",
    "exampleEn": "Use the lapel"
  },
  {
    "id": "leg-lock",
    "category": "Concepts & Movements",
    "english": "Leg Lock",
    "portuguese": "Chave de Perna",
    "pronunciation": "SHAH-vee deh PEHR-nah",
    "description": "A category of submissions targeting the joints of the leg — knee, ankle, heel, or foot. Includes heel hooks, knee bars, toe holds, ankle locks, and calf slicers.",
    "related": [
      "heel-hook",
      "knee-bar",
      "ankle-lock",
      "toe-hold"
    ],
    "examplePt": "Cuidado com a chave de perna!",
    "exampleEn": "Watch out for the leg lock!"
  },
  {
    "id": "lift",
    "category": "Concepts & Movements",
    "english": "Lift",
    "portuguese": "Levantar",
    "pronunciation": "leh-vahn-TAR",
    "description": "To lift or raise up. Used for lifting hips during sweeps, standing up, or elevating an opponent.",
    "related": [
      "elevate",
      "bridge",
      "stand"
    ],
    "examplePt": "Levanta!",
    "exampleEn": "Lift!"
  },
  {
    "id": "lock",
    "category": "Concepts & Movements",
    "english": "Lock",
    "portuguese": "Trava",
    "pronunciation": "TRAH-vah",
    "description": "To lock or secure a position or submission hold. Refers to locking in a grip, position, or finishing a submission.",
    "related": [
      "submission",
      "grip"
    ],
    "examplePt": "Travar a posição",
    "exampleEn": "Lock the position"
  },
  {
    "id": "mats",
    "category": "Concepts & Movements",
    "english": "Mats",
    "portuguese": "Tatame",
    "pronunciation": "tah-TAH-mee",
    "description": "The training surface in a BJJ academy. Derived from the Japanese word 'tatami.' The mats are considered sacred space — always bow before stepping on and keep them clean.",
    "related": [
      "academy"
    ],
    "examplePt": "Pisar no tatame",
    "exampleEn": "Step on the mats"
  },
  {
    "id": "open-mat",
    "category": "Concepts & Movements",
    "english": "Open Mat",
    "portuguese": "Treino Livre",
    "pronunciation": "TRAY-noh LEE-vreh",
    "description": "An unstructured training session where students can spar, drill, or practice freely without formal instruction.",
    "related": [
      "training",
      "sparring-rolling",
      "academy"
    ],
    "examplePt": "Sábado tem treino livre",
    "exampleEn": "There's open mat on Saturday"
  },
  {
    "id": "overhook",
    "category": "Concepts & Movements",
    "english": "Overhook",
    "portuguese": "Gancho por Cima",
    "pronunciation": "GAHN-shoh por SEE-mah",
    "description": "Wrapping your arm over the opponent's arm from the outside. Used for control and to set up submissions.",
    "related": [
      "underhook",
      "body-lock-takedown"
    ],
    "examplePt": "Pega o gancho por cima",
    "exampleEn": "Get the overhook"
  },
  {
    "id": "pants",
    "category": "Concepts & Movements",
    "english": "Pants",
    "portuguese": "Calça",
    "pronunciation": "KAHL-sah",
    "description": "The gi pants. Pant grips are used for guard passing, sweeps, and controlling the opponent's legs.",
    "related": [
      "grip",
      "guard-pass",
      "sweep-score"
    ],
    "examplePt": "Pegar na calça",
    "exampleEn": "Grab the pants"
  },
  {
    "id": "position",
    "category": "Concepts & Movements",
    "english": "Position",
    "portuguese": "Posição",
    "pronunciation": "poh-zee-SOWNG",
    "description": "A general term for any configuration of bodies during grappling. BJJ is built on the concept of positional hierarchy — some positions are more dominant than others.",
    "related": [
      "mount",
      "guard",
      "side-control",
      "back-control"
    ],
    "examplePt": "Posição antes da finalização",
    "exampleEn": "Position before submission"
  },
  {
    "id": "posture",
    "category": "Concepts & Movements",
    "english": "Posture",
    "portuguese": "Postura",
    "pronunciation": "pohs-TOO-rah",
    "description": "Body alignment, especially important when in someone's guard. Good posture prevents submissions and creates passing opportunities.",
    "related": [
      "closed-guard",
      "guard-pass",
      "break"
    ],
    "examplePt": "Manter a postura",
    "exampleEn": "Keep your posture"
  },
  {
    "id": "pressure",
    "category": "Concepts & Movements",
    "english": "Pressure",
    "portuguese": "Pressão",
    "pronunciation": "preh-SOWNG",
    "description": "Using body weight and positioning to make your opponent uncomfortable and control them. A hallmark of effective BJJ.",
    "related": [
      "side-control",
      "knee-on-belly",
      "cross-face"
    ],
    "examplePt": "Fazer pressão",
    "exampleEn": "Apply pressure"
  },
  {
    "id": "scramble",
    "category": "Concepts & Movements",
    "english": "Scramble",
    "portuguese": "Disputa",
    "pronunciation": "dees-POO-tah",
    "description": "A fast, chaotic exchange where both practitioners are fighting for position simultaneously. Common during transitions.",
    "related": [
      "transition",
      "turtle",
      "granby-roll"
    ],
    "examplePt": "Ganhar a disputa",
    "exampleEn": "Win the scramble"
  },
  {
    "id": "self-defense",
    "category": "Concepts & Movements",
    "english": "Self Defense",
    "portuguese": "Defesa Pessoal",
    "pronunciation": "deh-FEH-zah peh-soh-AHL",
    "description": "Techniques for protecting yourself in a real-world confrontation. BJJ's self-defense curriculum includes punch defense, clinch work, takedowns, and controlling an attacker on the ground.",
    "related": [
      "punch",
      "kick",
      "takedown-score",
      "distance-management"
    ],
    "examplePt": "Aula de defesa pessoal",
    "exampleEn": "Self-defense class"
  },
  {
    "id": "shrimp-hip-escape",
    "category": "Concepts & Movements",
    "english": "Shrimp / Hip Escape",
    "portuguese": "Fuga de Quadril",
    "pronunciation": "FOO-gah deh kwah-DREEL",
    "description": "A fundamental ground movement where you push off with your feet and slide your hips away from the opponent to create space. The most important defensive movement in BJJ.",
    "related": [
      "guard-recovery",
      "escape"
    ],
    "examplePt": "Fazer a fuga de quadril",
    "exampleEn": "Do the hip escape"
  },
  {
    "id": "sleeve",
    "category": "Concepts & Movements",
    "english": "Sleeve",
    "portuguese": "Manga",
    "pronunciation": "MAHN-gah",
    "description": "The sleeve of the gi jacket. Sleeve grips are fundamental for guard play, especially spider and lasso guards.",
    "related": [
      "spider-guard",
      "lasso-guard",
      "grip"
    ],
    "examplePt": "Pegar na manga",
    "exampleEn": "Grab the sleeve"
  },
  {
    "id": "sparring-rolling",
    "category": "Concepts & Movements",
    "english": "Sparring / Rolling",
    "portuguese": "Rolar",
    "pronunciation": "hoh-LAR",
    "description": "Live training with a partner at varying intensity. The word literally means 'to roll' and is the cornerstone of BJJ training.",
    "related": [
      "training-partner",
      "rounds",
      "let-s-roll"
    ],
    "examplePt": "Vamos rolar!",
    "exampleEn": "Let's roll!"
  },
  {
    "id": "stretch",
    "category": "Concepts & Movements",
    "english": "Stretch",
    "portuguese": "Alongamento",
    "pronunciation": "ah-lohn-gah-MEN-toh",
    "description": "Stretching exercises to improve flexibility and prevent injury. Typically done during warm-up or cool-down. Flexibility is important for guard play and injury prevention.",
    "related": [
      "warm-up"
    ],
    "examplePt": "Fazer alongamento",
    "exampleEn": "Do the stretching"
  },
  {
    "id": "technical-stand-up",
    "category": "Concepts & Movements",
    "english": "Technical Stand-up",
    "portuguese": "Base Técnica",
    "pronunciation": "BAH-zee TEK-nee-kah",
    "description": "A safe method of standing up from the ground by posting one hand behind you and one foot forward, keeping your other hand up to defend.",
    "related": [
      "self-defense"
    ],
    "examplePt": "Fazer a base técnica",
    "exampleEn": "Do the technical stand-up"
  },
  {
    "id": "technique-class",
    "category": "Concepts & Movements",
    "english": "Technique / Class",
    "portuguese": "Aula",
    "pronunciation": "OW-lah",
    "description": "A structured BJJ class, typically including warm-up, technique instruction, drilling, and sparring.",
    "related": [
      "warm-up",
      "drilling",
      "professor"
    ],
    "examplePt": "A aula começa às sete",
    "exampleEn": "Class starts at seven"
  },
  {
    "id": "training",
    "category": "Concepts & Movements",
    "english": "Training",
    "portuguese": "Treino",
    "pronunciation": "TRAY-noh",
    "description": "General term for a training session or practice.",
    "related": [
      "technique-class",
      "drilling",
      "open-mat"
    ],
    "examplePt": "Bom treino!",
    "exampleEn": "Good training!"
  },
  {
    "id": "training-partner",
    "category": "Concepts & Movements",
    "english": "Training Partner",
    "portuguese": "Parceiro de Treino",
    "pronunciation": "par-SAY-roh deh TRAY-noh",
    "description": "Your partner during drilling or sparring. Mutual respect and safety with your training partner is a core value in BJJ.",
    "related": [
      "sparring-rolling",
      "drilling"
    ],
    "examplePt": "Trocar de parceiro",
    "exampleEn": "Switch partners"
  },
  {
    "id": "transition",
    "category": "Concepts & Movements",
    "english": "Transition",
    "portuguese": "Transição",
    "pronunciation": "trahn-zee-SOWNG",
    "description": "Moving from one position to another fluidly during a roll. Good transitions are the mark of an experienced practitioner.",
    "related": [
      "flow",
      "scramble",
      "position"
    ],
    "examplePt": "Trabalhar a transição",
    "exampleEn": "Work the transition"
  },
  {
    "id": "underhook",
    "category": "Concepts & Movements",
    "english": "Underhook",
    "portuguese": "Gancho por Baixo",
    "pronunciation": "GAHN-shoh por BYE-shoh",
    "description": "Reaching your arm under the opponent's armpit to control their upper body. A dominant grip in many positions.",
    "related": [
      "overhook",
      "body-lock-takedown"
    ],
    "examplePt": "Pega o gancho por baixo",
    "exampleEn": "Get the underhook"
  },
  {
    "id": "warm-up",
    "category": "Concepts & Movements",
    "english": "Warm-up",
    "portuguese": "Aquecimento",
    "pronunciation": "ah-keh-see-MEN-toh",
    "description": "Physical exercises performed at the beginning of class to prepare the body for training.",
    "related": [
      "stretch",
      "forward-roll",
      "shrimp-hip-escape"
    ],
    "examplePt": "Vamos fazer o aquecimento",
    "exampleEn": "Let's do the warm-up"
  },
  {
    "id": "again-one-more-time",
    "category": "Commands & Phrases",
    "english": "Again / One more time",
    "portuguese": "De novo",
    "pronunciation": "deh NOH-voh",
    "description": "Instruction to repeat a drill or technique.",
    "related": [
      "drilling",
      "technique-class"
    ],
    "examplePt": "De novo!",
    "exampleEn": "Again!"
  },
  {
    "id": "back-behind",
    "category": "Commands & Phrases",
    "english": "Back / Behind",
    "portuguese": "Atrás",
    "pronunciation": "ah-TRAHS",
    "description": "Direction: backward or behind. Used to indicate direction of movement or positioning.",
    "related": [
      "forward",
      "front"
    ],
    "examplePt": "Para trás",
    "exampleEn": "To the back"
  },
  {
    "id": "bend",
    "category": "Commands & Phrases",
    "english": "Bend",
    "portuguese": "Dobrar",
    "pronunciation": "doh-BRAR",
    "description": "To bend or fold. Used when instructing to bend a limb or fold an opponent during a technique.",
    "related": [
      "straighten",
      "arm"
    ],
    "examplePt": "Dobra o braço!",
    "exampleEn": "Bend the arm!"
  },
  {
    "id": "bow",
    "category": "Commands & Phrases",
    "english": "Bow",
    "portuguese": "Cumprimentar",
    "pronunciation": "koom-pree-men-TAR",
    "description": "Instruction to bow, showing respect at the start and end of class.",
    "related": [
      "oss",
      "line-up",
      "professor"
    ],
    "examplePt": "Cumprimentar o professor",
    "exampleEn": "Bow to the professor"
  },
  {
    "id": "close",
    "category": "Commands & Phrases",
    "english": "Close",
    "portuguese": "Fechar",
    "pronunciation": "feh-SHAR",
    "description": "To close. Used when instructing to close the guard (lock ankles), close distance, or tighten a grip.",
    "related": [
      "closed-guard",
      "open"
    ],
    "examplePt": "Fecha a guarda!",
    "exampleEn": "Close the guard!"
  },
  {
    "id": "do-you-understand",
    "category": "Commands & Phrases",
    "english": "Do you understand?",
    "portuguese": "Entendeu?",
    "pronunciation": "en-ten-DEW",
    "description": "Instructor checking if the class understood the technique shown.",
    "related": [
      "pay-attention",
      "oss"
    ],
    "examplePt": "Entendeu? Entendi!",
    "exampleEn": "Do you understand? I understand!"
  },
  {
    "id": "elevate",
    "category": "Commands & Phrases",
    "english": "Elevate",
    "portuguese": "Elevar",
    "pronunciation": "eh-leh-VAR",
    "description": "To lift or raise. Used when instructing to lift hips, elevate an opponent for a sweep, or raise a leg.",
    "related": [
      "lift",
      "bridge",
      "hip"
    ],
    "examplePt": "Eleva o quadril!",
    "exampleEn": "Elevate your hips!"
  },
  {
    "id": "far",
    "category": "Commands & Phrases",
    "english": "Far",
    "portuguese": "Longe",
    "pronunciation": "LOHN-zhee",
    "description": "Far or distant. Used to describe the side furthest from you — 'far arm' or 'far leg' are common instructions.",
    "related": [
      "near"
    ],
    "examplePt": "Braço longe",
    "exampleEn": "Far arm"
  },
  {
    "id": "fast",
    "category": "Commands & Phrases",
    "english": "Fast",
    "portuguese": "Rápido",
    "pronunciation": "HAH-pee-doh",
    "description": "Quick or fast. Used as instruction to increase speed or intensity during drilling or sparring.",
    "related": [
      "slow"
    ],
    "examplePt": "Mais rápido!",
    "exampleEn": "Faster!"
  },
  {
    "id": "forward",
    "category": "Commands & Phrases",
    "english": "Forward",
    "portuguese": "Para Frente",
    "pronunciation": "PAH-rah FREHN-chee",
    "description": "Direction of movement: moving forward. Common instruction during drills and positional training.",
    "related": [
      "back-behind",
      "front"
    ],
    "examplePt": "Vai para frente",
    "exampleEn": "Go forward"
  },
  {
    "id": "front",
    "category": "Commands & Phrases",
    "english": "Front",
    "portuguese": "Frente",
    "pronunciation": "FREHN-chee",
    "description": "Direction: forward or the front. Used to indicate facing direction or which side of the body.",
    "related": [
      "forward",
      "back-behind"
    ],
    "examplePt": "Para frente",
    "exampleEn": "To the front"
  },
  {
    "id": "good-job",
    "category": "Commands & Phrases",
    "english": "Good job!",
    "portuguese": "Boa!",
    "pronunciation": "BOH-ah",
    "description": "Expression of approval or encouragement. Short for 'Boa trabalho' (good work). You'll hear this constantly in a Brazilian academy.",
    "related": [
      "well-done-excellent",
      "oss"
    ],
    "examplePt": "Boa, continua assim!",
    "exampleEn": "Good job, keep it up!"
  },
  {
    "id": "grab",
    "category": "Commands & Phrases",
    "english": "Grab",
    "portuguese": "Agarrar",
    "pronunciation": "ah-gah-HAR",
    "description": "To grab or seize. A general gripping action, often the first step in establishing control.",
    "related": [
      "grip",
      "collar",
      "sleeve"
    ],
    "examplePt": "Agarra!",
    "exampleEn": "Grab!"
  },
  {
    "id": "here",
    "category": "Commands & Phrases",
    "english": "Here",
    "portuguese": "Aqui",
    "pronunciation": "ah-KEE",
    "description": "Here / right here. Used to indicate a specific position, grip placement, or location on the body.",
    "related": [
      "near",
      "far"
    ],
    "examplePt": "Coloca aqui",
    "exampleEn": "Put it here"
  },
  {
    "id": "hop",
    "category": "Commands & Phrases",
    "english": "Hop",
    "portuguese": "Saltar",
    "pronunciation": "sahl-TAR",
    "description": "To hop or bounce. Used in warm-up drills and movement exercises on the mat.",
    "related": [
      "jump",
      "warm-up"
    ],
    "examplePt": "Salta!",
    "exampleEn": "Hop!"
  },
  {
    "id": "jump",
    "category": "Commands & Phrases",
    "english": "Jump",
    "portuguese": "Pular",
    "pronunciation": "poo-LAR",
    "description": "To jump. Used in instructions for guard jumping, jumping to mount, or warm-up exercises.",
    "related": [
      "hop",
      "pull-guard",
      "warm-up"
    ],
    "examplePt": "Pula!",
    "exampleEn": "Jump!"
  },
  {
    "id": "kick",
    "category": "Commands & Phrases",
    "english": "Kick",
    "portuguese": "Chute",
    "pronunciation": "SHOO-chee",
    "description": "A striking technique with the foot or leg. Like punching, kick defense is part of self-defense BJJ training.",
    "related": [
      "punch",
      "self-defense"
    ],
    "examplePt": "Defesa de chute",
    "exampleEn": "Kick defense"
  },
  {
    "id": "left",
    "category": "Commands & Phrases",
    "english": "Left",
    "portuguese": "Esquerda",
    "pronunciation": "ehs-KEHR-dah",
    "description": "Direction: left side. Used frequently in instruction to indicate which side to perform a technique.",
    "related": [
      "right"
    ],
    "examplePt": "Lado esquerdo",
    "exampleEn": "Left side"
  },
  {
    "id": "let-s-go",
    "category": "Commands & Phrases",
    "english": "Let's go!",
    "portuguese": "Vamos!",
    "pronunciation": "VAH-mohs",
    "description": "General encouragement to start or keep going.",
    "related": [
      "start-go",
      "let-s-roll"
    ],
    "examplePt": "Vamos, não para!",
    "exampleEn": "Let's go, don't stop!"
  },
  {
    "id": "let-s-roll",
    "category": "Commands & Phrases",
    "english": "Let's roll!",
    "portuguese": "Vamos rolar!",
    "pronunciation": "VAH-mohs hoh-LAR",
    "description": "The call to start sparring. 'Rolar' literally means 'to roll,' which is what BJJ practitioners call sparring.",
    "related": [
      "sparring-rolling",
      "rounds"
    ],
    "examplePt": "Vamos rolar?",
    "exampleEn": "Shall we roll?"
  },
  {
    "id": "line-up",
    "category": "Commands & Phrases",
    "english": "Line up",
    "portuguese": "Faz fila",
    "pronunciation": "fahz FEE-lah",
    "description": "Instruction to line up, usually at the start or end of class for bowing.",
    "related": [
      "bow",
      "professor"
    ],
    "examplePt": "Faz fila por faixa",
    "exampleEn": "Line up by belt"
  },
  {
    "id": "move",
    "category": "Commands & Phrases",
    "english": "Move",
    "portuguese": "Mexer",
    "pronunciation": "meh-SHEHR",
    "description": "To move. General instruction to keep moving and not stay static during sparring or drilling.",
    "related": [
      "flow",
      "shrimp-hip-escape"
    ],
    "examplePt": "Mexe!",
    "exampleEn": "Move!"
  },
  {
    "id": "near",
    "category": "Commands & Phrases",
    "english": "Near",
    "portuguese": "Perto",
    "pronunciation": "PEHR-toh",
    "description": "Close or nearby. Used to describe proximity — 'near side' or 'near arm' refers to the side closest to you.",
    "related": [
      "far"
    ],
    "examplePt": "Braço perto",
    "exampleEn": "Near arm"
  },
  {
    "id": "open",
    "category": "Commands & Phrases",
    "english": "Open",
    "portuguese": "Abrir",
    "pronunciation": "ah-BREER",
    "description": "To open. Used when instructing to open the guard, open a grip, or create space.",
    "related": [
      "open-guard",
      "close"
    ],
    "examplePt": "Abre a guarda!",
    "exampleEn": "Open the guard!"
  },
  {
    "id": "oss",
    "category": "Commands & Phrases",
    "english": "Oss!",
    "portuguese": "Oss!",
    "pronunciation": "OSS",
    "description": "A multipurpose expression of respect, acknowledgment, and greeting used widely in martial arts. Can mean 'hello,' 'thank you,' 'I understand,' or 'let's go.'",
    "related": [
      "bow",
      "good-job"
    ],
    "examplePt": "Oss, professor!",
    "exampleEn": "Oss, professor!"
  },
  {
    "id": "pay-attention",
    "category": "Commands & Phrases",
    "english": "Pay attention",
    "portuguese": "Presta atenção",
    "pronunciation": "PREHS-tah ah-ten-SOWNG",
    "description": "Instructor calling for the class to watch and listen.",
    "related": [
      "do-you-understand",
      "technique-class"
    ],
    "examplePt": "Presta atenção no detalhe",
    "exampleEn": "Pay attention to the detail"
  },
  {
    "id": "pull",
    "category": "Commands & Phrases",
    "english": "Pull",
    "portuguese": "Puxar",
    "pronunciation": "poo-SHAR",
    "description": "To pull toward you. Essential for breaking posture, executing sweeps, and controlling grips.",
    "related": [
      "push",
      "pull-guard",
      "break"
    ],
    "examplePt": "Puxa!",
    "exampleEn": "Pull!"
  },
  {
    "id": "punch",
    "category": "Commands & Phrases",
    "english": "Punch",
    "portuguese": "Soco",
    "pronunciation": "SOH-koh",
    "description": "A striking technique with the fist. While not used in sport BJJ, punch defense is fundamental to self-defense BJJ curriculum.",
    "related": [
      "kick",
      "self-defense"
    ],
    "examplePt": "Defesa de soco",
    "exampleEn": "Punch defense"
  },
  {
    "id": "push",
    "category": "Commands & Phrases",
    "english": "Push",
    "portuguese": "Empurrar",
    "pronunciation": "em-poo-HAR",
    "description": "To push away from you. A fundamental action used in frames, guard retention, and creating distance.",
    "related": [
      "pull",
      "frame"
    ],
    "examplePt": "Empurra!",
    "exampleEn": "Push!"
  },
  {
    "id": "right",
    "category": "Commands & Phrases",
    "english": "Right",
    "portuguese": "Direita",
    "pronunciation": "dee-RAY-tah",
    "description": "Direction: right side. Used frequently in instruction to indicate which side to perform a technique.",
    "related": [
      "left"
    ],
    "examplePt": "Lado direito",
    "exampleEn": "Right side"
  },
  {
    "id": "rotate",
    "category": "Commands & Phrases",
    "english": "Rotate",
    "portuguese": "Girar",
    "pronunciation": "zhee-RAR",
    "description": "To rotate or turn. Common instruction during technique drilling to indicate a rotational movement of the hips, body, or limbs.",
    "related": [
      "inversion",
      "granby-roll"
    ],
    "examplePt": "Gira!",
    "exampleEn": "Rotate!"
  },
  {
    "id": "shake",
    "category": "Commands & Phrases",
    "english": "Shake",
    "portuguese": "Sacudir",
    "pronunciation": "sah-koo-DEER",
    "description": "To shake or rattle. Can refer to shaking off a grip, shaking an opponent's base, or shaking out tension.",
    "related": [
      "grip",
      "base"
    ],
    "examplePt": "Sacude!",
    "exampleEn": "Shake!"
  },
  {
    "id": "shake-hands",
    "category": "Commands & Phrases",
    "english": "Shake Hands",
    "portuguese": "Apertar a Mão",
    "pronunciation": "ah-pehr-TAR ah MOWNG",
    "description": "To shake hands. A sign of respect before and after sparring rounds. Often combined with a fist bump in BJJ culture.",
    "related": [
      "rounds",
      "sparring-rolling",
      "oss"
    ],
    "examplePt": "Aperta a mão",
    "exampleEn": "Shake hands"
  },
  {
    "id": "sit",
    "category": "Commands & Phrases",
    "english": "Sit",
    "portuguese": "Sentar",
    "pronunciation": "sen-TAR",
    "description": "To sit or sit down. Used in instructions for sitting to guard, sitting up for sweeps, or positional commands.",
    "related": [
      "guard",
      "pull-guard"
    ],
    "examplePt": "Senta!",
    "exampleEn": "Sit!"
  },
  {
    "id": "slow",
    "category": "Commands & Phrases",
    "english": "Slow",
    "portuguese": "Devagar",
    "pronunciation": "deh-vah-GAR",
    "description": "Slow or slowly. Used as instruction to reduce speed and focus on technique precision.",
    "related": [
      "fast",
      "drilling"
    ],
    "examplePt": "Mais devagar!",
    "exampleEn": "Slower!"
  },
  {
    "id": "stand",
    "category": "Commands & Phrases",
    "english": "Stand",
    "portuguese": "Levantar / Ficar em Pé",
    "pronunciation": "leh-vahn-TAR / fee-KAR eng PEH",
    "description": "To stand up. Used when instructing students to return to standing position or to stand up in base.",
    "related": [
      "technical-stand-up",
      "base"
    ],
    "examplePt": "Levanta!",
    "exampleEn": "Stand up!"
  },
  {
    "id": "start-go",
    "category": "Commands & Phrases",
    "english": "Start / Go!",
    "portuguese": "Começa!",
    "pronunciation": "koh-MEH-sah",
    "description": "Command to begin a drill, round, or match.",
    "related": [
      "stop-time",
      "rounds",
      "referee"
    ],
    "examplePt": "Prontos? Começa!",
    "exampleEn": "Ready? Go!"
  },
  {
    "id": "stop-time",
    "category": "Commands & Phrases",
    "english": "Stop / Time!",
    "portuguese": "Parou! / Tempo!",
    "pronunciation": "pah-ROH / TEM-poh",
    "description": "Command to stop or pause training.",
    "related": [
      "start-go",
      "rounds",
      "referee"
    ],
    "examplePt": "Parou! Tempo!",
    "exampleEn": "Stop! Time!"
  },
  {
    "id": "straighten",
    "category": "Commands & Phrases",
    "english": "Straighten",
    "portuguese": "Esticar",
    "pronunciation": "ehs-chee-KAR",
    "description": "To straighten or extend. Used when instructing to extend a limb, often to finish an armbar or break a grip.",
    "related": [
      "bend",
      "armbar"
    ],
    "examplePt": "Estica o braço!",
    "exampleEn": "Straighten the arm!"
  },
  {
    "id": "switch-partners",
    "category": "Commands & Phrases",
    "english": "Switch partners",
    "portuguese": "Trocar de parceiro",
    "pronunciation": "troh-KAR deh par-SAY-roh",
    "description": "Instruction to change training partners.",
    "related": [
      "training-partner",
      "rounds"
    ],
    "examplePt": "Troca de parceiro!",
    "exampleEn": "Switch partners!"
  },
  {
    "id": "tap",
    "category": "Commands & Phrases",
    "english": "Tap!",
    "portuguese": "Bate!",
    "pronunciation": "BAH-chee",
    "description": "The command to submit — tap your partner or the mat to signal you give up. Safety is the top priority.",
    "related": [
      "submission",
      "choke"
    ],
    "examplePt": "Bate antes de se machucar",
    "exampleEn": "Tap before you get hurt"
  },
  {
    "id": "tie-your-belt",
    "category": "Commands & Phrases",
    "english": "Tie Your Belt",
    "portuguese": "Amarrar a Faixa",
    "pronunciation": "ah-mah-HAR ah FYE-shah",
    "description": "Instruction to tie your belt. A common command during class when a student's belt comes undone.",
    "related": [
      "white-belt",
      "stripe"
    ],
    "examplePt": "Amarra a faixa!",
    "exampleEn": "Tie your belt!"
  },
  {
    "id": "well-done-excellent",
    "category": "Commands & Phrases",
    "english": "Well done / Excellent",
    "portuguese": "Muito bem",
    "pronunciation": "MWEEN-toh BENG",
    "description": "Strong praise from the instructor.",
    "related": [
      "good-job",
      "oss"
    ],
    "examplePt": "Muito bem, perfeito!",
    "exampleEn": "Well done, perfect!"
  },
  {
    "id": "black-belt",
    "category": "Belt System",
    "english": "Black Belt",
    "portuguese": "Faixa Preta",
    "pronunciation": "FYE-shah PREH-tah",
    "description": "The expert rank in BJJ, typically requiring 8-15 years of dedicated training. Black belts are considered professors of the art.",
    "related": [
      "stripe",
      "white-belt",
      "coral-belt"
    ],
    "examplePt": "Ele é faixa preta",
    "exampleEn": "He's a black belt"
  },
  {
    "id": "blue-belt",
    "category": "Belt System",
    "english": "Blue Belt",
    "portuguese": "Faixa Azul",
    "pronunciation": "FYE-shah ah-ZOOL",
    "description": "The second rank in BJJ. Demonstrates solid fundamental knowledge and ability to link techniques. Typically 2-3 years at this level.",
    "related": [
      "stripe",
      "white-belt"
    ],
    "examplePt": "Ela pegou a faixa azul",
    "exampleEn": "She got her blue belt"
  },
  {
    "id": "brown-belt",
    "category": "Belt System",
    "english": "Brown Belt",
    "portuguese": "Faixa Marrom",
    "pronunciation": "FYE-shah mah-HOHNG",
    "description": "The advanced rank just below black belt. Brown belts refine their techniques and prepare for black belt. Typically 1-2 years.",
    "related": [
      "stripe",
      "white-belt"
    ],
    "examplePt": "Faltam dois graus para a faixa marrom",
    "exampleEn": "Two stripes to go until brown belt"
  },
  {
    "id": "coral-belt",
    "category": "Belt System",
    "english": "Coral Belt",
    "portuguese": "Faixa Coral",
    "pronunciation": "FYE-shah koh-RAHL",
    "description": "An honorary belt for 7th and 8th degree black belts, featuring alternating red and black (7th) or red and white (8th) sections.",
    "related": [
      "black-belt",
      "red-belt"
    ],
    "examplePt": "Mestre faixa coral",
    "exampleEn": "Coral belt master"
  },
  {
    "id": "professor",
    "category": "Belt System",
    "english": "Professor",
    "portuguese": "Professor",
    "pronunciation": "proh-feh-SOR",
    "description": "Title for a BJJ black belt instructor. In Brazilian culture, this is a term of deep respect.",
    "related": [
      "black-belt"
    ],
    "examplePt": "Obrigado, professor!",
    "exampleEn": "Thank you, professor!"
  },
  {
    "id": "purple-belt",
    "category": "Belt System",
    "english": "Purple Belt",
    "portuguese": "Faixa Roxa",
    "pronunciation": "FYE-shah HOH-shah",
    "description": "The intermediate rank. Purple belts develop their own game and can effectively teach beginners. Typically 1.5-3 years at this level.",
    "related": [
      "stripe",
      "white-belt"
    ],
    "examplePt": "Treinar com um faixa roxa",
    "exampleEn": "Train with a purple belt"
  },
  {
    "id": "red-belt",
    "category": "Belt System",
    "english": "Red Belt",
    "portuguese": "Faixa Vermelha",
    "pronunciation": "FYE-shah vehr-MEL-yah",
    "description": "The highest rank in BJJ (9th and 10th degree). Reserved for grandmasters who have made extraordinary contributions to the art.",
    "related": [
      "coral-belt"
    ],
    "examplePt": "Grande mestre faixa vermelha",
    "exampleEn": "Red belt grandmaster"
  },
  {
    "id": "stripe",
    "category": "Belt System",
    "english": "Stripe",
    "portuguese": "Grau",
    "pronunciation": "GRAHW",
    "description": "A piece of tape added to the belt to mark progress within a belt level. Typically 4 stripes before promotion to the next belt.",
    "related": [
      "white-belt"
    ],
    "examplePt": "Ele ganhou um grau",
    "exampleEn": "He earned a stripe"
  },
  {
    "id": "student",
    "category": "Belt System",
    "english": "Student",
    "portuguese": "Aluno",
    "pronunciation": "ah-LOO-noh",
    "description": "A BJJ student or practitioner. Used to refer to anyone training under a professor, regardless of belt level.",
    "related": [
      "professor",
      "academy"
    ],
    "examplePt": "Ele é meu aluno",
    "exampleEn": "He's my student"
  },
  {
    "id": "white-belt",
    "category": "Belt System",
    "english": "White Belt",
    "portuguese": "Faixa Branca",
    "pronunciation": "FYE-shah BRAHN-kah",
    "description": "The beginner rank in BJJ. Focuses on learning fundamental positions, escapes, and basic submissions. Typically 1-2 years.",
    "related": [
      "stripe"
    ],
    "examplePt": "Todo faixa preta já foi faixa branca",
    "exampleEn": "Every black belt was once a white belt"
  },
  {
    "id": "advantage",
    "category": "Competition",
    "english": "Advantage",
    "portuguese": "Vantagem",
    "pronunciation": "vahn-TAH-zheng",
    "description": "A half-point awarded for nearly completing a scoring technique. Used as a tiebreaker when points are equal.",
    "related": [
      "points",
      "penalty"
    ],
    "examplePt": "Ganhou por vantagem",
    "exampleEn": "Won by advantage"
  },
  {
    "id": "back-control-score",
    "category": "Competition",
    "english": "Back Control (score)",
    "portuguese": "Costas (pontuação)",
    "pronunciation": "KOHS-tahs",
    "description": "In competition, taking the opponent's back with hooks scores 4 points — the highest-scoring position.",
    "related": [
      "points",
      "back-control",
      "hook"
    ],
    "examplePt": "Pegou as costas: quatro pontos",
    "exampleEn": "Took the back: four points"
  },
  {
    "id": "disqualified",
    "category": "Competition",
    "english": "Disqualified",
    "portuguese": "Desqualificado",
    "pronunciation": "dehs-kwah-lee-fee-KAH-doh",
    "description": "Removed from a match or tournament for serious rule violations such as illegal techniques, accumulated penalties, or unsportsmanlike conduct.",
    "related": [
      "penalty",
      "referee"
    ],
    "examplePt": "Ele foi desqualificado",
    "exampleEn": "He was disqualified"
  },
  {
    "id": "guard-pass-score",
    "category": "Competition",
    "english": "Guard Pass (score)",
    "portuguese": "Passagem de Guarda",
    "pronunciation": "pah-SAH-zheng deh GWAR-dah",
    "description": "In competition, passing the opponent's guard to a dominant position scores 3 points.",
    "related": [
      "points",
      "guard",
      "side-control"
    ],
    "examplePt": "Passou a guarda: três pontos",
    "exampleEn": "Passed the guard: three points"
  },
  {
    "id": "match-fight",
    "category": "Competition",
    "english": "Match / Fight",
    "portuguese": "Luta",
    "pronunciation": "LOO-tah",
    "description": "A competitive bout between two practitioners. Can also refer to sparring or rolling in training.",
    "related": [
      "tournament",
      "sparring-rolling"
    ],
    "examplePt": "Boa luta!",
    "exampleEn": "Good match!"
  },
  {
    "id": "mount-score",
    "category": "Competition",
    "english": "Mount (score)",
    "portuguese": "Montada (pontuação)",
    "pronunciation": "mohn-TAH-dah",
    "description": "In competition, achieving the mount position scores 4 points.",
    "related": [
      "points",
      "mount"
    ],
    "examplePt": "Montou: quatro pontos",
    "exampleEn": "Mounted: four points"
  },
  {
    "id": "penalty",
    "category": "Competition",
    "english": "Penalty",
    "portuguese": "Punição",
    "pronunciation": "poo-nee-SOWNG",
    "description": "A negative mark given for stalling, illegal techniques, or unsportsmanlike conduct. Accumulated penalties can result in disqualification.",
    "related": [
      "points",
      "advantage"
    ],
    "examplePt": "Tomou punição por falta de combatividade",
    "exampleEn": "Got a penalty for stalling"
  },
  {
    "id": "points",
    "category": "Competition",
    "english": "Points",
    "portuguese": "Pontos",
    "pronunciation": "POHN-tohs",
    "description": "The scoring unit in BJJ competition. Different positions and actions earn different point values.",
    "related": [
      "advantage",
      "penalty"
    ],
    "examplePt": "Ganhou nos pontos",
    "exampleEn": "Won on points"
  },
  {
    "id": "referee",
    "category": "Competition",
    "english": "Referee",
    "portuguese": "Árbitro",
    "pronunciation": "AR-bee-troh",
    "description": "The official who oversees a BJJ match, awards points, and ensures rules are followed.",
    "related": [
      "tournament"
    ],
    "examplePt": "O árbitro parou a luta",
    "exampleEn": "The referee stopped the match"
  },
  {
    "id": "rounds",
    "category": "Competition",
    "english": "Rounds",
    "portuguese": "Rounds",
    "pronunciation": "HOWNDS",
    "description": "Timed periods of sparring or competition. Training rounds are typically 5-6 minutes, competition matches vary by belt level and tournament.",
    "related": [
      "sparring-rolling",
      "match-fight"
    ],
    "examplePt": "Vamos fazer cinco rounds",
    "exampleEn": "Let's do five rounds"
  },
  {
    "id": "submission",
    "category": "Competition",
    "english": "Submission",
    "portuguese": "Finalização",
    "pronunciation": "fee-nah-lee-zah-SOWNG",
    "description": "Winning a match by making your opponent tap. The ultimate victory in BJJ competition.",
    "related": [
      "tap",
      "points"
    ],
    "examplePt": "Ele ganhou por finalização",
    "exampleEn": "He won by submission"
  },
  {
    "id": "sweep-score",
    "category": "Competition",
    "english": "Sweep (score)",
    "portuguese": "Raspagem (pontuação)",
    "pronunciation": "hahs-PAH-zheng",
    "description": "In competition, a sweep scores 2 points when you reverse your opponent from guard to a top position.",
    "related": [
      "points",
      "guard"
    ],
    "examplePt": "Raspou: dois pontos",
    "exampleEn": "Swept: two points"
  },
  {
    "id": "takedown-score",
    "category": "Competition",
    "english": "Takedown (score)",
    "portuguese": "Queda (pontuação)",
    "pronunciation": "KEH-dah",
    "description": "In competition, a takedown scores 2 points when you bring your standing opponent to the ground and establish control.",
    "related": [
      "points"
    ],
    "examplePt": "Queda: dois pontos",
    "exampleEn": "Takedown: two points"
  },
  {
    "id": "tournament",
    "category": "Competition",
    "english": "Tournament",
    "portuguese": "Campeonato",
    "pronunciation": "kahm-pee-oh-NAH-toh",
    "description": "An organized BJJ competition event where practitioners compete against each other in their weight class and belt division.",
    "related": [
      "match-fight",
      "weight-class"
    ],
    "examplePt": "Vou lutar o campeonato",
    "exampleEn": "I'm competing in the tournament"
  },
  {
    "id": "weight-class",
    "category": "Competition",
    "english": "Weight Class",
    "portuguese": "Categoria de Peso",
    "pronunciation": "kah-teh-goh-REE-ah deh PEH-zoh",
    "description": "Divisions based on body weight to ensure fair competition. Each federation has specific weight limits.",
    "related": [
      "tournament"
    ],
    "examplePt": "Qual é a sua categoria de peso?",
    "exampleEn": "What's your weight class?"
  },
  {
    "id": "ankle",
    "category": "Anatomy",
    "english": "Ankle",
    "portuguese": "Tornozelo",
    "pronunciation": "tor-noh-ZEH-loh",
    "description": "The joint connecting the foot and leg. Target for ankle locks and important for hook control.",
    "related": [
      "ankle-lock",
      "hook"
    ],
    "examplePt": "Protege o tornozelo",
    "exampleEn": "Protect your ankle"
  },
  {
    "id": "arm",
    "category": "Anatomy",
    "english": "Arm",
    "portuguese": "Braço",
    "pronunciation": "BRAH-soh",
    "description": "The upper limb from shoulder to hand. Central to many grips, controls, and submissions in BJJ.",
    "related": [
      "armbar",
      "kimura"
    ],
    "examplePt": "Cuidado com o braço!",
    "exampleEn": "Watch your arm!"
  },
  {
    "id": "back-body",
    "category": "Anatomy",
    "english": "Back (body)",
    "portuguese": "Costas (corpo)",
    "pronunciation": "KOHS-tahs",
    "description": "The posterior torso. Important for posture, back exposure (giving up the back), and back control.",
    "related": [
      "back-control",
      "posture"
    ],
    "examplePt": "Costas no chão",
    "exampleEn": "Back on the mat"
  },
  {
    "id": "bicep",
    "category": "Anatomy",
    "english": "Bicep",
    "portuguese": "Bíceps",
    "pronunciation": "BEE-seps",
    "description": "The upper arm muscle between shoulder and elbow. Bicep control is used in many submissions and grip breaks.",
    "related": [
      "arm",
      "elbow"
    ],
    "examplePt": "Pega no bíceps",
    "exampleEn": "Grab the bicep"
  },
  {
    "id": "body",
    "category": "Anatomy",
    "english": "Body",
    "portuguese": "Corpo",
    "pronunciation": "KOR-poh",
    "description": "The physical body. Understanding body mechanics and positioning is the foundation of all BJJ technique.",
    "related": [
      "core",
      "posture",
      "base"
    ],
    "examplePt": "Corpo colado",
    "exampleEn": "Keep your body tight"
  },
  {
    "id": "chest",
    "category": "Anatomy",
    "english": "Chest",
    "portuguese": "Peito",
    "pronunciation": "PAY-toh",
    "description": "The front of the torso. Chest-to-chest pressure is fundamental in top control positions like side control.",
    "related": [
      "side-control",
      "pressure"
    ],
    "examplePt": "Peito com peito",
    "exampleEn": "Chest to chest"
  },
  {
    "id": "chin",
    "category": "Anatomy",
    "english": "Chin",
    "portuguese": "Queixo",
    "pronunciation": "KAY-shoh",
    "description": "The chin is a key reference point for defending chokes — tucking your chin protects the neck.",
    "related": [
      "neck",
      "choke",
      "rear-naked-choke"
    ],
    "examplePt": "Queixo para baixo!",
    "exampleEn": "Chin down!"
  },
  {
    "id": "core",
    "category": "Anatomy",
    "english": "Core",
    "portuguese": "Tronco",
    "pronunciation": "TROHN-koh",
    "description": "The midsection of the body including abdominals and lower back. Core strength is essential for guard retention, sweeps, and overall BJJ movement.",
    "related": [
      "hip",
      "bridge",
      "guard"
    ],
    "examplePt": "Tronco firme",
    "exampleEn": "Keep your core tight"
  },
  {
    "id": "ear",
    "category": "Anatomy",
    "english": "Ear",
    "portuguese": "Orelha",
    "pronunciation": "oh-REL-yah",
    "description": "The ear. 'Cauliflower ear' is a common BJJ condition caused by repeated friction and pressure on the ear.",
    "related": [
      "head",
      "headlock"
    ],
    "examplePt": "Orelha de couve-flor",
    "exampleEn": "Cauliflower ear"
  },
  {
    "id": "elbow",
    "category": "Anatomy",
    "english": "Elbow",
    "portuguese": "Cotovelo",
    "pronunciation": "koh-toh-VEH-loh",
    "description": "The joint connecting the upper and lower arm. Target for armbars and important for framing.",
    "related": [
      "armbar",
      "frame"
    ],
    "examplePt": "Cotovelo colado!",
    "exampleEn": "Elbows tight!"
  },
  {
    "id": "eye",
    "category": "Anatomy",
    "english": "Eye",
    "portuguese": "Olho",
    "pronunciation": "OHL-yoh",
    "description": "The eye. Eye protection is important in training — accidental eye pokes can occur during scrambles.",
    "related": [
      "head",
      "nose"
    ],
    "examplePt": "Olho no adversário",
    "exampleEn": "Eyes on your opponent"
  },
  {
    "id": "finger",
    "category": "Anatomy",
    "english": "Finger",
    "portuguese": "Dedo",
    "pronunciation": "DEH-doh",
    "description": "Used for gripping the gi. Finger injuries are common in BJJ from heavy gi gripping.",
    "related": [
      "grip",
      "collar"
    ],
    "examplePt": "Cuidado com os dedos",
    "exampleEn": "Watch your fingers"
  },
  {
    "id": "foot",
    "category": "Anatomy",
    "english": "Foot",
    "portuguese": "Pé",
    "pronunciation": "PEH",
    "description": "The bottom of the leg. Used for hooks in guard, pushing, and is targeted in foot locks.",
    "related": [
      "hook",
      "toe-hold"
    ],
    "examplePt": "Pé no quadril",
    "exampleEn": "Foot on the hip"
  },
  {
    "id": "forearm",
    "category": "Anatomy",
    "english": "Forearm",
    "portuguese": "Antebraço",
    "pronunciation": "ahn-chee-BRAH-soh",
    "description": "The lower arm between elbow and wrist. Used extensively for frames, cross-face pressure, and choke defense.",
    "related": [
      "frame",
      "cross-face",
      "chin"
    ],
    "examplePt": "Antebraço no pescoço",
    "exampleEn": "Forearm on the neck"
  },
  {
    "id": "hand",
    "category": "Anatomy",
    "english": "Hand",
    "portuguese": "Mão",
    "pronunciation": "MOWNG",
    "description": "Used for gripping the gi, controlling the opponent, and posting for base.",
    "related": [
      "grip",
      "wrist-lock"
    ],
    "examplePt": "Mão no chão",
    "exampleEn": "Hand on the mat"
  },
  {
    "id": "head",
    "category": "Anatomy",
    "english": "Head",
    "portuguese": "Cabeça",
    "pronunciation": "kah-BEH-sah",
    "description": "The head is used for pressure, posting, and its position determines posture. Controlling the head often means controlling the body.",
    "related": [
      "posture",
      "headlock"
    ],
    "examplePt": "Cabeça para cima!",
    "exampleEn": "Head up!"
  },
  {
    "id": "hip",
    "category": "Anatomy",
    "english": "Hip",
    "portuguese": "Quadril",
    "pronunciation": "kwah-DREEL",
    "description": "The joint connecting the torso to the legs. Hip movement is the foundation of all BJJ technique — escapes, sweeps, and submissions all rely on the hips.",
    "related": [
      "shrimp-hip-escape",
      "bridge",
      "sweep-score"
    ],
    "examplePt": "Quadril para cima!",
    "exampleEn": "Hips up!"
  },
  {
    "id": "knee",
    "category": "Anatomy",
    "english": "Knee",
    "portuguese": "Joelho",
    "pronunciation": "zhoh-EL-yoh",
    "description": "The joint connecting the thigh and shin. Important for frames, shields, and is a target for leg locks.",
    "related": [
      "knee-bar",
      "shin"
    ],
    "examplePt": "Joelho no chão",
    "exampleEn": "Knee on the mat"
  },
  {
    "id": "leg",
    "category": "Anatomy",
    "english": "Leg",
    "portuguese": "Perna",
    "pronunciation": "PEHR-nah",
    "description": "The lower limb from hip to foot. Used for guards, hooks, sweeps, and leg locks.",
    "related": [
      "guard",
      "leg-lock"
    ],
    "examplePt": "Passa a perna!",
    "exampleEn": "Step your leg over!"
  },
  {
    "id": "mouth",
    "category": "Anatomy",
    "english": "Mouth",
    "portuguese": "Boca",
    "pronunciation": "BOH-kah",
    "description": "The mouth. Wearing a mouthguard to protect teeth is recommended during sparring.",
    "related": [
      "chin",
      "head"
    ],
    "examplePt": "Protetor bucal na boca",
    "exampleEn": "Mouthguard in your mouth"
  },
  {
    "id": "neck",
    "category": "Anatomy",
    "english": "Neck",
    "portuguese": "Pescoço",
    "pronunciation": "peh-SKOH-soh",
    "description": "The area between the head and shoulders. Primary target for chokes and strangles.",
    "related": [
      "choke",
      "guillotine"
    ],
    "examplePt": "Protege o pescoço!",
    "exampleEn": "Protect your neck!"
  },
  {
    "id": "nose",
    "category": "Anatomy",
    "english": "Nose",
    "portuguese": "Nariz",
    "pronunciation": "nah-REEZ",
    "description": "The nose. Commonly referenced in cross-face pressure where the forearm pushes across the nose.",
    "related": [
      "cross-face",
      "pressure"
    ],
    "examplePt": "Nariz sangrando",
    "exampleEn": "Bloody nose"
  },
  {
    "id": "palm",
    "category": "Anatomy",
    "english": "Palm",
    "portuguese": "Palma",
    "pronunciation": "PAHL-mah",
    "description": "The inner surface of the hand. Palm-up vs. palm-down grip orientation affects many techniques.",
    "related": [
      "grip",
      "hand"
    ],
    "examplePt": "Pegada palma com palma",
    "exampleEn": "Palm-to-palm grip"
  },
  {
    "id": "rib",
    "category": "Anatomy",
    "english": "Rib",
    "portuguese": "Costela",
    "pronunciation": "kohs-TEH-lah",
    "description": "The bones protecting the torso. Knee-on-belly targets the ribs, and controlling the ribcage is key to effective top pressure.",
    "related": [
      "knee-on-belly",
      "pressure"
    ],
    "examplePt": "Joelho nas costelas",
    "exampleEn": "Knee in the ribs"
  },
  {
    "id": "shin",
    "category": "Anatomy",
    "english": "Shin",
    "portuguese": "Canela",
    "pronunciation": "kah-NEH-lah",
    "description": "The front of the lower leg. Used for frames (knee shield), calf slicers, and as a guard retention tool.",
    "related": [
      "calf-slicer"
    ],
    "examplePt": "Canela no quadril",
    "exampleEn": "Shin on the hip"
  },
  {
    "id": "shoulder",
    "category": "Anatomy",
    "english": "Shoulder",
    "portuguese": "Ombro",
    "pronunciation": "OHM-broh",
    "description": "The joint connecting the arm to the torso. Target for Kimura, Americana, and omoplata.",
    "related": [
      "kimura",
      "americana",
      "omoplata"
    ],
    "examplePt": "Ombro no queixo",
    "exampleEn": "Shoulder under the chin"
  },
  {
    "id": "stomach",
    "category": "Anatomy",
    "english": "Stomach",
    "portuguese": "Barriga",
    "pronunciation": "bah-HEE-gah",
    "description": "The abdomen/belly area. Referenced in knee on belly and body triangle positions.",
    "related": [
      "knee-on-belly",
      "core"
    ],
    "examplePt": "Joelho na barriga",
    "exampleEn": "Knee on belly"
  },
  {
    "id": "thigh",
    "category": "Anatomy",
    "english": "Thigh",
    "portuguese": "Coxa",
    "pronunciation": "KOH-shah",
    "description": "The upper leg between hip and knee. Important for guard control, squeezing in triangles, and knee shield positioning.",
    "related": [
      "triangle-choke",
      "guard",
      "shin"
    ],
    "examplePt": "Pegar na coxa",
    "exampleEn": "Grab the thigh"
  },
  {
    "id": "thumb",
    "category": "Anatomy",
    "english": "Thumb",
    "portuguese": "Polegar",
    "pronunciation": "poh-leh-GAR",
    "description": "Important for grip strength and grip fighting. Thumb-in vs. thumb-out grips are a key concept.",
    "related": [
      "grip",
      "collar"
    ],
    "examplePt": "Polegar dentro da gola",
    "exampleEn": "Thumb inside the collar"
  },
  {
    "id": "toe",
    "category": "Anatomy",
    "english": "Toe",
    "portuguese": "Dedo do Pé",
    "pronunciation": "DEH-doh doh PEH",
    "description": "The digits of the foot. Relevant in toe hold submissions and maintaining grip with feet.",
    "related": [
      "toe-hold",
      "foot"
    ],
    "examplePt": "Cuidado com o dedo do pé",
    "exampleEn": "Watch your toe"
  },
  {
    "id": "wrist",
    "category": "Anatomy",
    "english": "Wrist",
    "portuguese": "Punho",
    "pronunciation": "POON-yoh",
    "description": "The joint connecting the hand and forearm. Target for wrist locks.",
    "related": [
      "wrist-lock",
      "grip"
    ],
    "examplePt": "Controla o punho",
    "exampleEn": "Control the wrist"
  }
];
