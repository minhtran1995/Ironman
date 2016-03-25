// LEFT_CAVE SCENE
module scenes {
    export class End extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _endLabel: objects.Label;
        private _restartButton: objects.Button;
        
        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();
        }
        
        // PUBLIC METHODS ++++++++++++++++++++
        
        
        // Start Method
        public start(): void {

            this._setupBackground('end');
            this._fadeIn(500);
            
            
            
            // add the BACK button to the OVER scene
            this._restartButton = new objects.Button(
                "RestartButton",
                config.Screen.CENTER_X - 310,
                config.Screen.CENTER_Y, true);
            this.addChild(this._restartButton);
           
            // START_OVER Button event listener
            this._restartButton.on("click", this._restartButtonClick, this);


            // add this scene to the global stage container
            stage.addChild(this);
        }

        // PLAY Scene updates here
        public update(): void {

        }
        
        
        //EVENT HANDLERS ++++++++++++++++++++
        
        // START_OVER Button click event handler
        private _restartButtonClick(event: createjs.MouseEvent) {
            // Switch to the INTRO Scene
            this._fadeOut(500, () => {
                // Switch to the menu Scene
                scene = config.Scene.MENU;
                changeScene();
            });

        }
    }
}