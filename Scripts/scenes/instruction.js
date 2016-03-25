var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// MENU SCENE
var scenes;
(function (scenes) {
    var Instruction = (function (_super) {
        __extends(Instruction, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function Instruction() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        Instruction.prototype.start = function () {
            this._setupBackground("instruction");
            this._fadeIn(500);
            // add the Start button to the MENU scene
            this._startButton = new objects.Button("StartButton", config.Screen.CENTER_X, config.Screen.CENTER_Y + 260, true);
            this.addChild(this._startButton);
            // Start Button event listener
            this._startButton.on("click", this._startButtonClick, this);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // INTRO Scene updates here
        Instruction.prototype.update = function () {
        };
        //EVENT HANDLERS ++++++++++++++++++++
        // LEFT_CAVE Button click event handler
        Instruction.prototype._startButtonClick = function (event) {
            // Switch to the LEFT_CAVE Scene
            this._fadeOut(500, function () {
                // Switch to the menu Scene
                scene = config.Scene.PLAY;
                changeScene();
            });
        };
        return Instruction;
    })(objects.Scene);
    scenes.Instruction = Instruction;
})(scenes || (scenes = {}));
//# sourceMappingURL=instruction.js.map