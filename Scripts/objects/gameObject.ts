module objects {
    export class GameObject extends createjs.Bitmap {
        protected _speed: createjs.Point;
        public width: number;
        public height: number;

        protected _leftBound: number;
        protected _rightBound: number;
        protected _bottomBound: number;
        protected _topBound: number;

        


        public name: string;
        constructor(bitmapString: String) {
            super(assets.getResult(bitmapString));

            this._speed = new createjs.Point(0, 0);
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;

            this.regX = this.width * 0.5;
            this.regY = this.height * 0.5;

            this._topBound = this.height;
            this._bottomBound = config.Screen.HEIGHT - this.height;
            this._leftBound = -this.width;
            this._rightBound = config.Screen.WIDTH + this.width;
        }

        protected _reset(value: number): void {
            this.x = value;
        }

        protected _checkBound(value: number): void {
            var resetVal = 0;
            if (this.x >= value) {
                this._reset(resetVal);
            }
        }

        public update(): void {
            var boundVal = 0;

            this.x += this._speed.y;
            this._checkBound(boundVal);
        }
    }
}