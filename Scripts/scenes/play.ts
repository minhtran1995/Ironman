// PLAY SCENE
module scenes {
    export class Play extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _city: objects.City;
        private _health: objects.Health[];
        private _captainShields: objects.CaptainShield[];
        private _captainShieldCount: number;
        private _islandCount: number;

        private _player: objects.Player;

        private _collision: managers.Collision;
        
        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();

        }
        
        // PUBLIC METHODS +++++++++++++++++++++
        
        // Start Method
        public start(): void {
            this._captainShieldCount = 10;
            this._islandCount = 1;
            this._captainShields = new Array<objects.CaptainShield>();
            this._health = new Array<objects.Health>();

            this._city = new objects.City();
            this.addChild(this._city);


            for (var h = 0; h < this._islandCount; h++) {
                this._health[h] = new objects.Health();
                this.addChild(this._health[h]);
            }



            this._player = new objects.Player();
            this.addChild(this._player);

            for (var shield = 0; shield < this._captainShieldCount; shield++) {
                this._captainShields[shield] = new objects.CaptainShield();
                this.addChild(this._captainShields[shield]);
            }


            this._collision = new managers.Collision(this._player);
            
            // add this scene to the global stage container
            stage.addChild(this);
        }

        // PLAY Scene updates here
        public update(): void {
            this._city.update();

            this._health.forEach(h => {
                h.update();
                this._collision.check(h);
            });


            this._player.update();

            /*
                        for (var cloud in this._clouds) {
                            this._clouds[cloud].update();                
                            this._collision.check(this._clouds[cloud]);
                        }
                        */

            this._captainShields.forEach(shield => {
                shield.update();
                this._collision.check(shield);
            });


          


        }
        
        
        //EVENT HANDLERS ++++++++++++++++++++
        
    }
}