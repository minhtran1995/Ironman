var managers;
(function (managers) {
    var Collision = (function () {
        function Collision(player) {
            this._player = player;
            Collision._counter = 0;
        }
        Collision.prototype.distance = function (startPoint, endPoint) {
            return Math.sqrt(Math.pow(endPoint.x - startPoint.x, 2) + Math.pow(endPoint.y - startPoint.y, 2));
        };
        Collision.prototype.check = function (obj) {
            var startPoint = new createjs.Point();
            var endPoint = new createjs.Point();
            var playerHalfWidth = this._player.width * 0.5;
            var objHalfWidth = obj.width * 0.5;
            var minDistance = playerHalfWidth + objHalfWidth;
            startPoint.x = this._player.x;
            startPoint.y = this._player.y;
            endPoint.x = obj.x;
            endPoint.y = obj.y;
            if (this.distance(startPoint, endPoint) < minDistance) {
                // check if it's an health hit
                if (obj.name === "health") {
                    this._player.hitHealth = true;
                    obj.setImage("blank");
                }
                else if (obj.name === "captainShield") {
                    this._player.hitShield = true;
                }
            }
            else {
                //set this line after a while 
                //this is a drity fix
                if (Collision._counter % 120 === 0) {
                    this._player.hitShield = false;
                    Collision._counter = 0;
                }
                this._player.hitHealth = false;
            }
            Collision._counter++;
        };
        Collision.prototype.check1 = function (obj1, obj2) {
            var startPoint = new createjs.Point();
            var endPoint = new createjs.Point();
            var obj1HalfWidth = obj1.width * 0.5;
            var obj2HalfWidth = obj2.width * 0.5;
            var minDistance = obj1HalfWidth + obj2HalfWidth;
            startPoint.x = obj1.x;
            startPoint.y = obj1.y;
            endPoint.x = obj2.x;
            endPoint.y = obj2.y;
            if (this.distance(startPoint, endPoint) < minDistance) {
            }
            else {
            }
        };
        return Collision;
    })();
    managers.Collision = Collision;
})(managers || (managers = {}));
//# sourceMappingURL=collision.js.map