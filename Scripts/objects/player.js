var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    var Player = (function (_super) {
        __extends(Player, _super);
        function Player() {
            _super.call(this, assets.getResult("ironman"));
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.regX = this.width * 0.5;
            this.regY = this.height * 0.5;
            this._topBounds = this.height * 0.5;
            this._bottomBounds = config.Screen.HEIGHT - this.height * 0.5;
            this.x = this.regX;
            Player.flag = false;
            this.hitHealth = false;
            this.hitShield = false;
        }
        Player.prototype._checkBounds = function () {
            if (this.y < this._topBounds) {
                this.y = this._topBounds;
            }
            if (this.y > this._bottomBounds) {
                this.y = this._bottomBounds;
            }
        };
        Player.prototype.update = function () {
            this.y = stage.mouseY;
            this._checkBounds();
            window.onmouseup = function () {
                Player.flag = false;
            };
            window.onmousedown = function () {
                console.log("Shoot");
                Player.flag = true;
            };
            if (this.hitHealth === true) {
                this.image = this.shuffleImages("health");
            }
            else {
                if (this.hitShield === true) {
                    this.image = this.shuffleImages("hit");
                }
                else {
                    if (Player.flag === false) {
                        this.image = this.shuffleImages("");
                    }
                    else {
                        this.image = this.shuffleImages("shoot");
                    }
                }
            }
            //console.log(this.hitShield+"shield");
        };
        Player.prototype.shuffleImages = function (val) {
            var obj = new Array();
            obj[0] = assets.getResult("ironman1");
            obj[1] = assets.getResult("ironman2");
            obj[2] = assets.getResult("ironman3");
            obj[3] = assets.getResult("ironmanShoot");
            //healed animation
            obj[4] = assets.getResult("healed");
            obj[5] = assets.getResult("healed1");
            obj[6] = assets.getResult("healed2");
            obj[7] = assets.getResult("healed3");
            obj[8] = assets.getResult("ironmanHit");
            var rand = Math.round(Math.random() * 2);
            if (val === "") {
                return obj[rand];
            }
            else if (val === "shoot") {
                return obj[3];
            }
            else if (val === "health") {
                rand = Math.round(Math.random() * 3) + 4;
                return obj[rand];
            }
            else if (val === "hit") {
                return obj[8];
            }
        };
        return Player;
    })(createjs.Bitmap);
    objects.Player = Player;
})(objects || (objects = {}));
//# sourceMappingURL=player.js.map