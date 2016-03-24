/// <reference path = "_reference.ts" />

// global variables
var assets: createjs.LoadQueue;
var canvas: HTMLElement;
var stage: createjs.Stage;
var stats: Stats;

var currentScene: objects.Scene;
var scene: number;

// Game Scenes
var loading: scenes.Loading;
var menu: scenes.Menu;
var play: scenes.Play;
var end: scenes.End;

var assetData:objects.Asset[] = [
    // Add your Assets here
    {id: "StartButton", src:"../../Assets/images/StartButton.png"},
    {id: "RestartButton", src:"../../Assets/images/RestartButton.png"},
    {id: "BackButton", src:"../../Assets/images/BackButton.png"},
    {id: "night", src:"../../Assets/images/night.png"},
    {id: "bullet", src:"../../Assets/images/bullet.png"},
    {id: "menuBG", src:"../../Assets/images/menuBG-fixed.jpg"},
    
    //fly effect
    {id: "ironman", src:"../../Assets/images/ironman.png"},
    {id: "ironman1", src:"../../Assets/images/ironman1.png"},
    {id: "ironman2", src:"../../Assets/images/ironman2.png"},
    {id: "ironman3", src:"../../Assets/images/ironman3.png"},
    
    {id: "ironmanShoot", src:"../../Assets/images/ironmanShoot.png"},
    {id: "arcReactorFixed", src:"../../Assets/images/arcReactor-fixed.png"},
    {id: "captainShield", src:"../../Assets/images/captainShield.png"},
    
    //hit effect
    {id: "ironmanHit", src:"../../Assets/images/getHit.png"},
    {id: "ironmanHit1", src:"../../Assets/images/getHit1.png"},
    {id: "ironmanHit2", src:"../../Assets/images/getHit2.png"},
    {id: "ironmanHit3", src:"../../Assets/images/getHit3.png"},
    {id: "dead", src:"../../Assets/images/dead.png"},
    
    //healing effect
    {id: "healed", src:"../../Assets/images/ironmanHealed.png"},
    {id: "healed1", src:"../../Assets/images/ironmanHealed1.png"},
    {id: "healed2", src:"../../Assets/images/ironmanHealed2.png"},
    {id: "healed3", src:"../../Assets/images/ironmanHealed3.png"},
    {id: "health", src:"../../Assets/images/health-fixed.png"},
    
    
    {id: "blank", src:"../../Assets/images/blank.png"},
    
];

function preload() {
    
    scene = config.Scene.MENU;
    
    assets = new createjs.LoadQueue();
    assets.installPlugin(createjs.Sound);
    assets.on("complete", changeScene, this);
    assets.loadManifest(assetData);
}

function init(): void {
    // create a reference the HTML canvas Element
    canvas = document.getElementById("canvas");
    
    // create our main display list container
    stage = new createjs.Stage(canvas);
    
    // Enable mouse events
    stage.enableMouseOver(20);
    
    // set the framerate to 60 frames per second
    createjs.Ticker.setFPS(config.Game.FPS);
    
    // create an event listener to count off frames
    createjs.Ticker.on("tick", gameLoop, this);
    
    // sets up our stats counting workflow
    setupStats(); 
    
    // set initial scene
    scene = config.Scene.LOADING;
    changeScene();
    preload();
}

// Main Game Loop function that handles what happens each "tick" or frame
function gameLoop(event: createjs.Event): void {
    // start collecting stats for this frame
    stats.begin(); 
    
    // calling State's update method
    currentScene.update(); 
    
    // redraw/refresh stage every frame
    stage.update();
    
    // stop collecting stats for this frame
    stats.end();
}

// Setup Game Stats
function setupStats(): void {
    stats = new Stats();
    stats.setMode(0); // shows fps
    stats.domElement.style.position = "absolute";
    stats.domElement.style.left = "0px";
    stats.domElement.style.top = "0px";
    document.body.appendChild(stats.domElement);
}

// Finite State Machine used to change Scenes
function changeScene(): void {
    
    // Launch various scenes
    switch (scene) {
        case config.Scene.LOADING:
            // show the loading scene
            stage.removeAllChildren();
            loading = new scenes.Loading();
            currentScene = loading;
            console.log("Starting loading Scene");
            break;
        case config.Scene.MENU:
            // show the MENU scene
            stage.removeAllChildren();
            menu = new scenes.Menu();
            currentScene = menu;
            console.log("Starting MENU Scene");
            break;
        case config.Scene.PLAY:
            // show the PLAY scene
            stage.removeAllChildren();
            play = new scenes.Play();
            currentScene = play;
            console.log("Starting PLAY Scene");
            break;
        case config.Scene.END:
            // show the END scene
            stage.removeAllChildren();
            end = new scenes.End();
            currentScene = end;
            console.log("Starting END Scene");
            break;
    }

    console.log(currentScene.numChildren);
}

window.onload = init;