module managers {
    export class Collision {
        private _player: objects.Player;

        private static _counter: number;

        constructor(player: objects.Player) {
            this._player = player;
            Collision._counter = 0;
        }

        public distance(startPoint: createjs.Point, endPoint: createjs.Point): number {
            return Math.sqrt(Math.pow(endPoint.x - startPoint.x, 2) + Math.pow(endPoint.y - startPoint.y, 2));
        }

        public check(obj: objects.GameObject):void {
            var startPoint: createjs.Point = new createjs.Point();
            var endPoint: createjs.Point = new createjs.Point();

            var playerHalfWidth: number = this._player.width * 0.5;
            var objHalfWidth: number = obj.width * 0.5;

            var minDistance: number = playerHalfWidth + objHalfWidth;

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
                // check if it's a captainShield hit
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
        }
        
        
        public check1(obj1: objects.GameObject,obj2: objects.GameObject) {
            var startPoint: createjs.Point = new createjs.Point();
            var endPoint: createjs.Point = new createjs.Point();

            var obj1HalfWidth: number = obj1.width * 0.5;
            var obj2HalfWidth: number = obj2.width * 0.5;

            var minDistance: number = obj1HalfWidth + obj2HalfWidth;

            startPoint.x = obj1.x;
            startPoint.y = obj1.y;

            endPoint.x = obj2.x;
            endPoint.y = obj2.y;

            if (this.distance(startPoint, endPoint) < minDistance) {
                
            }
            else {
               
            }

            
        }
    }
}