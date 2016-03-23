module objects {
    export class Health extends objects.GameObject {

        constructor() {
            super("arcReactorFixed");
            this._speed.x = 2;
            this._reset(this._rightBound);
            this.name = "health";
        }

        protected _reset(value: number): void {  
            this.x = value;
            this.y = Math.floor(Math.random() * this._bottomBound + this._topBound);
            this.image = assets.getResult("arcReactorFixed");
        }

        protected _checkBound(value: number): void {
            //check if the top of island is top of scene
            if (this.x <= value) {
                this._reset(this._rightBound);
            }
        }

        public update(): void {
            this.x -= this._speed.x;
            this._checkBound(this._leftBound);            
        }
        
        
    }
}