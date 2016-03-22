var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// PLAY SCENE
var scenes;
(function (scenes) {
    var Play = (function (_super) {
        __extends(Play, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function Play() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        Play.prototype.start = function () {
            this._captainShieldCount = 10;
            this._islandCount = 1;
            this._captainShields = new Array();
            this._islands = new Array();
            this._city = new objects.City();
            this.addChild(this._city);
            for (var island = 0; island < this._islandCount; island++) {
                this._islands[island] = new objects.Island();
                this.addChild(this._islands[island]);
            }
            this._player = new objects.Player();
            this.addChild(this._player);
            for (var shield = 0; shield < this._captainShieldCount; shield++) {
                this._captainShields[shield] = new objects.CaptainShield();
                this.addChild(this._captainShields[shield]);
            }
            this._collision = new managers.Collision(this._player);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // PLAY Scene updates here
        Play.prototype.update = function () {
            var _this = this;
            this._city.update();
            this._islands.forEach(function (island) {
                island.update();
                _this._collision.check(island);
            });
            this._player.update();
            /*
                        for (var cloud in this._clouds) {
                            this._clouds[cloud].update();
                            this._collision.check(this._clouds[cloud]);
                        }
                        */
            this._captainShields.forEach(function (shield) {
                shield.update();
                _this._collision.check(shield);
            });
        };
        return Play;
    })(objects.Scene);
    scenes.Play = Play;
})(scenes || (scenes = {}));
//# sourceMappingURL=play.js.map