
let pages = [Quad, JYC, dorm, Library, wilkens];
let campus_bg;
let lobby_bg;
let trashcan;
let campus_bg;
let player;

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
let buttonClick;

function preload () {
  campus_bg = loadImage('PH.png');
  lobby_bg = loadImage('ECQ.png');
  trashcan = loadImage('game_designs/universal/trashcan.jpg');
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