module objects {
    export class Island extends objects.GameObject {

        constructor() {
            super("island");
            this._speed.y = 2;
            this._reset(this._topBound);
            this.name = "island";
        }

        protected _reset(value: number): void {
           

            this.y = value;
            this.x = Math.floor(Math.random() * this._rightBound + this._leftBound);
        }

        protected _checkBound(value: number): void {
            //check if the top of island is top of scene
            if (this.y >= value) {
                this._reset(this._topBound);
            }
        }

        public update(): void {
            this.y += this._speed.y;
            this._checkBound(this._bottomBound);
        }
    }
}