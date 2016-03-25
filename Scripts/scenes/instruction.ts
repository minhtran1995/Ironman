// MENU SCENE
module scenes {
    export class Instruction extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        
        private _startButton: objects.Button;
        
        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();
        }
        
        // PUBLIC METHODS +++++++++++++++++++++
        
        // Start Method
        public start(): void {
            this._setupBackground("instruction");
            this._fadeIn(500);
            
            
            
            
            // add the Start button to the MENU scene
            this._startButton = new objects.Button(
                "StartButton",
                config.Screen.CENTER_X,
                config.Screen.CENTER_Y +260, true);
            this.addChild(this._startButton);
            
            // Start Button event listener
            this._startButton.on("click", this._startButtonClick, this);
            
            
            // add this scene to the global stage container
            stage.addChild(this);
        }

        // INTRO Scene updates here
        public update(): void {

        }
        
        
        //EVENT HANDLERS ++++++++++++++++++++
        
        // LEFT_CAVE Button click event handler
        private _startButtonClick(event: createjs.MouseEvent) {
            // Switch to the LEFT_CAVE Scene
            
            this._fadeOut(500, () => {
                // Switch to the menu Scene
                scene = config.Scene.PLAY;
                changeScene();
            });
            
        }

    }
}