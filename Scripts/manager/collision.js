var managers;
(function (managers) {
    var Collision = (function () {
        function Collision(player) {
            this._player = player;
        }
        Collision.prototype.distance = function (startPoint, endPoint) {
            return Math.sqrt(Math.pow(endPoint.x - startPoint.x, 2) + Math.pow(endPoint.y - startPoint.y, 2));
        };
        Collision.prototype.check = function (obj) {
            var startPoint = new createjs.Point();
            var endPoint = new createjs.Point();
            var playerHalfHeight = this._player.height * 0.5;
            var objHalfHeight = obj.height * 0.5;
            var minDistance = playerHalfHeight + objHalfHeight;
            startPoint.x = this._player.x;
            startPoint.y = this._player.y;
            endPoint.x = obj.x;
            endPoint.y = obj.y;
            if (this.distance(startPoint, endPoint) < minDistance) {
                // check if it's an island hit
                if (obj.name === "island") {
                    console.log("island hit!");
                }
                // check if it's a cloud hit
                if (obj.name === "captainShield") {
                    console.log("captainShield hit!");
                }
            }
        };
        return Collision;
    })();
    managers.Collision = Collision;
})(managers || (managers = {}));
//# sourceMappingURL=collision.js.map