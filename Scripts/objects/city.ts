module objects {
    export class City extends objects.GameObject {
       
        constructor() {
            super("night");
            this.speed.x = 3;
            this.reset(0);
            this.regX = 0;
            this.regY = 0;
        }

        protected reset(value:number): void {
            this.x = value;
        }

        protected _checkBound(value:number): void {
            
            if (this.x <= value) {
                this.reset(0);
            }
        }

        public update(): void {
            //console.log(this.x+" "+ this.y)            
            this.x -= this.speed.x;            
            this._checkBound(-3800);
        }
    }
}