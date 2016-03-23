module objects {
    export class CaptainShield extends objects.GameObject {

        constructor() {
            super("captainShield");
            this.reset(this._rightBound);
            this.name = "captainShield";
        }

        protected reset(value: number): void {
            this.speed.x = Math.round((Math.random() * 5) + 3);
            this.speed.y = Math.round((Math.random() * 6) - 3);

            this.x = value;
            this.y = Math.round((Math.random() * this._bottomBound) + this._topBound);

        }

        protected _checkBound(value: number): void {

            if (this.x <= value) {
                this.reset(this._rightBound);
            }
        }

        public update(): void {
            this.y -= this.speed.y;
            this.x -= this.speed.x;

            this.rotation -= Math.round((Math.random() * 3) + 7 );
            this._checkBound(this._leftBound);
        }
    }
}