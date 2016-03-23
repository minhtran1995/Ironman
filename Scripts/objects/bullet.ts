module objects {
    export class Bullet extends objects.GameObject {

        private _player: Player;
        private doneTheStuff: boolean;
        constructor(player: Player) {
            super("bullet");
            this.name = "bullet";
            this._player = player;
            this.speed.x = 180;
            this.y = this._player.y;
            this.reset(this._leftBound);

        }

        public reset(value: number): void {
            this.y = this._player.y;
            this.x = value;

        }

        protected _checkBound(value: number): void {
            var resetVal = this._leftBound;
            if (this.x >= value) {
                this.reset(resetVal);
            }
        }

        public update(): void {
            if (!this.doneTheStuff) {
                this.doneTheStuff = true;
                this.y = this._player.y;
            }


            var boundVal = this._rightBound;
            this.x += this.speed.x;
            this._checkBound(boundVal);


        }
    }
}