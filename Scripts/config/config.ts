﻿module config {

    // Scene Constants
    export class Scene {
        public static MENU: number = 0;
        public static PLAY: number = 1;
        public static END: number = 2;
    }
    
    
    // Screen Constants
    export class Screen {
        public static WIDTH: number = 1000;
        public static HEIGHT: number = 600;
        public static CENTER_X: number = Screen.WIDTH/2;
        public static CENTER_Y: number = Screen.HEIGHT/2;
    }
    
    // Game Constants
    export class Game {
        public static FPS: number = 60;
    }
}