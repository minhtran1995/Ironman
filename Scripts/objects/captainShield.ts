module objects {
    export class CaptainShield extends objects.GameObject {

        constructor() {
            super("captainShield");
            this._reset(this._rightBound);
            this.name = "captainShield";
        }

        protected _reset(value: number): void {
            this._speed.x = Math.round((Math.random() * 5) + 5)
            this._speed.y = Math.round((Math.random() * 6) - 3);

            this.x = value;
            this.y = Math.round((Math.random() * this._bottomBound) + this._topBound);

        }

        protected _checkBound(value: number): void {

            if (this.x <= value) {
                this._reset(this._rightBound);
            }
        }

        public update(): void {
            this.y -= this._speed.y;
            this.x -= this._speed.x;

            this.rotation -= 7;
            this._checkBound(this._leftBound);
        }
    }
}