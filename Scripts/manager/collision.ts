module managers {
    export class Collision {
        private _player: objects.Player;

        constructor(player: objects.Player) {
            this._player = player;
        }

        public distance(startPoint: createjs.Point, endPoint: createjs.Point): number {
            return Math.sqrt(Math.pow(endPoint.x - startPoint.x, 2) + Math.pow(endPoint.y - startPoint.y, 2));
        }

        public check(obj: objects.GameObject) {
            var startPoint: createjs.Point = new createjs.Point();
            var endPoint: createjs.Point = new createjs.Point();

            var playerHalfHeight: number = this._player.height * 0.5;
            var objHalfHeight: number = obj.height * 0.5;

            var minDistance: number = playerHalfHeight + objHalfHeight;

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
        }
    }
}