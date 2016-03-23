module objects {
    export class Health extends objects.GameObject {

        constructor() {
            super("arcReactorFixed");
            this.speed.x = 2;
            this.reset(this._rightBound);
            this.name = "health";
        }

        protected reset(value: number): void {  
            this.x = value;
            this.y = Math.floor(Math.random() * this._bottomBound + this._topBound);
            this.image = assets.getResult("arcReactorFixed");
        }

        protected _checkBound(value: number): void {
            //check if the top of island is top of scene
            if (this.x <= value) {
                this.reset(this._rightBound);
            }
        }

        public update(): void {
            this.x -= this.speed.x;
            this._checkBound((-config.Screen.WIDTH)*2);     
            //console.log((-config.Screen.WIDTH)*2)       
        }
        
        
    }
}