module objects {
    export class Player extends createjs.Bitmap {

        public width: number;
        public height: number;

        private _topBounds: number;
        private _bottomBounds: number;

        private static flag: boolean;

        constructor() {
            super(assets.getResult("ironman"));

            this.width = this.getBounds().width;
            this.height = this.getBounds().height;

            this.regX = this.width * 0.5;
            this.regY = this.height * 0.5;

            this._topBounds = this.height * 0.5;
            this._bottomBounds = config.Screen.HEIGHT - this.height * 0.5;
            this.x = this.regX;

            Player.flag = false;

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
            this._checkBounds();


            window.onmouseup = function() {
                Player.flag = false;
            }

            window.onmousedown = function() {
                console.log("Shoot");
                Player.flag = true;
            };


            if (Player.flag === false) {
                this.image = this.shuffleImages("");
            }
            else {
                this.image = this.shuffleImages("shoot");
            }


        }





        public shuffleImages(val: string): Object {
            var obj = new Array<Object>();

            obj[0] = assets.getResult("ironman1");
            obj[1] = assets.getResult("ironman2");
            obj[2] = assets.getResult("ironman3");
            obj[3] = assets.getResult("ironmanShoot");

            var rand: number = Math.round(Math.random() * 2);

            if (val === "") {
                return obj[rand];
            }
            else if (val === "shoot") {
                return obj[3];
            }
        }

    }
}