
let pages = [Quad, JYC, dorm, Library, wilkens];
let campus_bg;
let lobby_bg;
let trashcan;
let player;
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

function preload () {
  campus_bg = loadImage('PH.png');
  lobby_bg = loadImage('ECQ.png');
  trashcan = loadImage('game_designs/universal/trashcan.jpg');
  buttonClickSound = loadSound('project_music/ButtonClick.mp3');
  deathNoise = loadSound('project_music/DeathNoise.mp3');
  stJuliesMus = loadSound('project_music/Dorm.mp3');
  jycMusic = loadSound('project_music/JYC.mp3');
  libraryMus = loadSound('project_music/Library.mp3');
  connectSound = loadSound('project_music/OnConnect.mp3');
  proxPing = loadSound('project_music/ProxPing.mp3');
  quadMus = loadSound('project_music/Quad.mp3');
  tocatta = loadSound('project_music/Tocatta.mp3');
  victoryJam = loadSound('project_music/Victory.mp3');
  walkingMus = loadSound('project_music/Walking.mp3');
  wilkensMus = loadSound('project_music/Wilkens.mp3');
  lobbyMus = loadSound('project_music/Lobby.mp3');
}

function setup () {
  createCanvas(400, 600);
  player = new Sprite(trashcan, 100, 100, 30, 30, true);
  var mgr = new SceneManager();
    // mgr.bkImage = bkImage; // inject bkImage property
    mgr.wire();
    mgr.showScene( StartScreen );
}



// create an array of all the pages 
// then create a variable to keep track of what page you're on 
// identify what areas on the map are 'transporation zones'
// when the sprite enters a transporation zone, 
// alter the 'current' variable to match the corresponding map/page