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
            this.y = stage.mouseY;
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
            this.isShooting = false;
            this.isDead = false;
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
            window.onmouseup = function () {
                Player.flag = false;
            };
            if (this.isDead) {
                this.y = this._bottomBounds - this.height;
                this.image = this.shuffleImages("dead");
                window.onmousedown = function () {
                    console.log("die");
                };
            }
            else {
                window.onmousedown = function () {
                    console.log("Shoot");
                    Player.flag = true;
                    createjs.Sound.play("leftClick");
                    createjs.Sound.play("shoot").volume = 0.5;
                };
                if (this.hitHealth) {
                    this.image = this.shuffleImages("health");
                }
                else {
                    if (this.hitShield) {
                        this.image = this.shuffleImages("hit");
                    }
                    else {
                        if (!Player.flag) {
                            this.image = this.shuffleImages("");
                            this.isShooting = false;
                        }
                        else {
                            this.image = this.shuffleImages("shoot");
                            this.isShooting = true;
                        }
                    }
                }
            }
            this._checkBounds();
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
            //hit animation
            obj[8] = assets.getResult("ironmanHit");
            obj[9] = assets.getResult("ironmanHit1");
            obj[10] = assets.getResult("ironmanHit2");
            obj[11] = assets.getResult("ironmanHit3");
            //die
            obj[12] = assets.getResult("dead");
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
                rand = Math.round(Math.random() * 3) + 8;
                return obj[rand];
            }
            else if (val === "dead") {
                return obj[12];
            }
        };
        return Player;
    })(createjs.Bitmap);
    objects.Player = Player;
})(objects || (objects = {}));
//# sourceMappingURL=player.js.map