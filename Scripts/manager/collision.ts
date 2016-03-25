module managers {
    export class Collision {
        private _player: objects.Player;

        private static _counter: number;

        private playScn: scenes.Play;



        constructor(player: objects.Player, playScene: scenes.Play) {
            this._player = player;
            Collision._counter = 0;
            this.playScn = playScene;
        }

        public distance(startPoint: createjs.Point, endPoint: createjs.Point): number {
            return Math.sqrt(Math.pow(endPoint.x - startPoint.x, 2) + Math.pow(endPoint.y - startPoint.y, 2));
        }

        public check(obj: objects.GameObject): void {
            var startPoint: createjs.Point = new createjs.Point();
            var endPoint: createjs.Point = new createjs.Point();

            var playerHalfWidth: number = this._player.width * 0.5;
            var objHalfWidth: number = obj.width * 0.5;

            var minDistance: number = playerHalfWidth + objHalfWidth;

            startPoint.x = this._player.x;
            startPoint.y = this._player.y;

            endPoint.x = obj.x;
            endPoint.y = obj.y;

            if (!this._player.isDead) {
                if (this.distance(startPoint, endPoint) < minDistance) {
                    // check if it's an health hit
                    if (obj.name === "health") {
                        this._player.hitHealth = true;
                        obj.setImage("blank");
                        this.playScn.point += 1;
                        this.playScn.healthIMG.rotation += 4;
                        if (this.playScn.health < 100) {
                            this.playScn.health += 0.5;
                        }
                        if (this.playScn.health > 100) {
                            this.playScn.health = 100;
                        }
                    }                
                    // check if it's a captainShield hit
                    else if (obj.name === "captainShield") {
                        this._player.hitShield = true;
                        this.playScn.point -= 2;
                        this.playScn.healthIMG.rotation -= 2;
                        this.playScn.health -= 0.1;
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
            }


            Collision._counter++;
        }


        public bulletCollision(obj1: objects.GameObject, obj2: objects.CaptainShield) {
            var startPoint: createjs.Point = new createjs.Point();
            var endPoint: createjs.Point = new createjs.Point();

            var obj1HalfWidth: number = obj1.width * 0.5;
            var obj2HalfWidth: number = obj2.width * 0.5;

            var minDistance: number = obj1HalfWidth + obj2HalfWidth;

            startPoint.x = obj1.x;
            startPoint.y = obj1.y;

            endPoint.x = obj2.x;
            endPoint.y = obj2.y;

            if (!this._player.isDead) {
                if (this.distance(startPoint, endPoint) < minDistance) {
                    //console.log("hit");
                    obj2.speed.y = Math.round((Math.random() * 30) - 15);
                    obj2.speed.x += 2;
                    this.playScn.point += 10;
                }
                else {

                }
            }


        }
    }
}