
let pages = [Quad, JYC, dorm, Library, wilkens];
let campus_bg;
let lobby_bg;
let trashcan;
let player;
let libraryMap;
let quadMap;
let JYCMap;
let stJuliesMap;
let wilkensMap;

let speed = 3;
let buttonClick;
let deathNoise;
let stJuliesMus;
let jycMus;
let libraryMus;
let connectSound;
let proxPing;
let quadMusic;
let tocatta;
let victoryJam;
let walkingMus;
let wilkensMus;
let lobbyMus;

//sprites
let squirrel;
let chair1;
let chair2;
let chair3;
let chair4;
let plant1;
let plant2;
let plant3;
let table1;
let table2;
let blue_chair;
let yellow_chair;
let umbrella_chair;
let tree1;
let tree2;
let tree3;
let tree4;
let beaker;
let brain;
let microscope;
let basketball;
let basketballs;
let dodgeball;
let bed;
let plasticwb;
let reusablewb;

let music;

function preload() {
  libraryMap = loadImage('mapImages/libraryMap.png');
  quadMap = loadImage('mapImages/quadMap.png');
  JYCMap = loadImage('mapImages/JYCMap.png');
  wilkensMap = loadImage('mapImages/wilkensMap.png');
  stJuliesMap = loadImage('mapImages/stJuliesMap.png');
  campus_bg = loadImage('PH.png');
  lobby_bg = loadImage('ECQ.png');
  buttonClickSound = loadSound('project_music/ButtonClick.mp3');
  deathNoise = loadSound('project_music/DeathNoise.mp3');
  connectSound = loadSound('project_music/OnConnect.mp3');
  proxPing = loadSound('project_music/ProxPing.mp3');
  tocatta = loadSound('project_music/Tocatta.mp3');
  victoryJam = loadSound('project_music/Victory.mp3');
  walkingMus = loadSound('project_music/Walking.mp3');

  music = new MusicManager();

  //sprites
  squirrel = loadImage('game_designs/quad/squirrel.png');
  trashcan = loadImage('game_designs/universal/Trashcan.png');
  chair1 = loadImage('game_designs/universal/Chair1.png');
  chair2 = loadImage('game_designs/universal/Chair2.png');
  chair3 = loadImage('game_designs/universal/Chair3.png');
  chair4 = loadImage('game_designs/universal/Chair4.png');
  plant1 = loadImage('game_designs/universal/Plant1.png');
  plant2 = loadImage('game_designs/universal/Plant2.png');
  plant3 = loadImage('game_designs/universal/Plant3.png');
  table1 = loadImage('game_designs/universal/Table1.png');
  table2 = loadImage('game_designs/universal/Table2.png');
  blue_chair = loadImage('game_designs/quad/blue_chairs.png');
  yellow_chair = loadImage('game_designs/quad/yellow_chair.png');
  umbrella_chair = loadImage('game_designs/quad/umbrella_chair.png');
  tree1 = loadImage('game_designs/quad/Tree1.png');
  tree2 = loadImage('game_designs/quad/Tree2.png');
  tree3 = loadImage('game_designs/quad/Tree3.png');
  tree4 = loadImage('game_designs/quad/Tree4.png');
  beaker = loadImage('game_designs/lab room/beaker.png');
  brain = loadImage('game_designs/lab room/Brain.png');
  brainjar = loadImage('game_designs/lab room/Brainjar.png');
  microscope = loadImage('game_designs/lab room/microscope.png');
  basketball = loadImage('game_designs/gym/Basketball .png');
  basketballs = loadImage('game_designs/gym/Basketballs.png');
  dodgeball = loadImage('game_designs/gym/dodgeball.png');
  bed = loadImage('game_designs/dorm/bed.png');
  plasticwb = loadImage('game_designs/universal/Waterbottle.png');
  reusablewb = loadImage('game_designs/universal/Rewaterbottle.png');
}

function setup() {
  createCanvas(400, 600);

  // character creation
  player = new Sprite (trashcan, 100, 100, 30, 30, true, 5.0);

  // zone creations for quad
  JYCZone = new Zone (380, 20, 70, 'blue');
  dormZone = new Zone (516, 50, 70, 'green');
  wilkensZone = new Zone (-30, 580, 70, 'yellow');
  libraryZone = new Zone (-30, 35, 70, 'pink');

  // zone creations for the 4 side maps
  QuadJYCZone = new Zone (1050, 890, 120, 'red');
  QuadDormZone = new Zone (322, 558, 50, 'red');
  QuadWilkensZone = new Zone (410, 550, 40, 'red');
  QuadLibraryZone = new Zone (385, 270, 120, 'red');

  // displays (not being used atm)
  quadDisplay = new Display (556, 619, quadMap);
  JYCDisplay = new Display (1386, 1014, JYCMap);
  dormDisplay = new Display (618, 619, stJuliesMap);
  wilkensDisplay = new Display (475, 619, wilkensMap);
  libraryDisplay = new Display (1366, 1026, libraryMap);

  // array of displays (not being used atm)
  displays = [quadDisplay, JYCDisplay, dormDisplay, wilkensDisplay, libraryDisplay];

  // seeker = new Seeker (50, 50, 30, 30, true, 4, reusablewb);
  
  // player = new Sprite(trashcan, 100, 100, 30, 30, true);
  var mgr = new SceneManager();
  // mgr.bkImage = bkImage; // inject bkImage property
  mgr.wire();
  mgr.showScene(StartScreen);
}

// does nothing atm
function draw() {
  
}
