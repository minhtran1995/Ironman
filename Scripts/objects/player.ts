module objects {
    export class Player extends createjs.Bitmap {

        public width: number;
        public height: number;

        private _topBounds: number;
        private _bottomBounds: number;

        private static flag: boolean;

        public hitHealth: boolean;
        public hitShield: boolean;

        public isShooting: boolean;
        public isDead: boolean;

        constructor() {
            super(assets.getResult("ironman"));
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

        private _checkBounds(): void {

            if (this.y < this._topBounds) {
                this.y = this._topBounds;
            }
            if (this.y > this._bottomBounds) {
                this.y = this._bottomBounds;
            }
        }



        public update(): void {
            this.y = stage.mouseY;



            window.onmouseup = function() {
                Player.flag = false;
            }

            window.onmousedown = function() {
                console.log("Shoot");
                Player.flag = true;

            };


            if (this.isDead) {
                this.y = this._bottomBounds- this.height;
                this.image = this.shuffleImages("dead");

            }
            else {

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

        }





        public shuffleImages(val: string): Object {
            var obj = new Array<Object>();

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



            var rand: number = Math.round(Math.random() * 2);

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
        }

    }
}