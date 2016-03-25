// PLAY SCENE
module scenes {
    export class Play extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _city: objects.City;
        private _health: objects.Health[];
        private _captainShields: objects.CaptainShield[];
        private _captainShieldCount: number;
        private _healthCount: number;

        private _bullet: objects.Bullet;

        private _player: objects.Player;

        private _collision: managers.Collision;

        private _score: objects.Label;
        public point: number;

        private _healthLabel: objects.Label;
        public healthIMG: createjs.Bitmap;
        public health: number;

        private _deadLabel: objects.Label;

        private static _counter;
        
        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();

        }
        
        // PUBLIC METHODS +++++++++++++++++++++
        
        // Start Method
        public start(): void {
            Play._counter = 0;
            this._captainShieldCount = 10;
            this._healthCount = 1;
            this._captainShields = new Array<objects.CaptainShield>();
            this._health = new Array<objects.Health>();

            this._city = new objects.City();
            this.addChild(this._city);
            
            this._setupBackground('blank');


            for (var h = 0; h < this._healthCount; h++) {
                this._health[h] = new objects.Health();
                this.addChild(this._health[h]);
            }




            this._player = new objects.Player();
            this._bullet = new objects.Bullet(this._player);
            this.addChild(this._bullet);
            this.addChild(this._player);

            for (var shield = 0; shield < this._captainShieldCount; shield++) {
                this._captainShields[shield] = new objects.CaptainShield();
                this.addChild(this._captainShields[shield]);
            }


            this._collision = new managers.Collision(this._player, this);

            this.point = 0;
            this._score = new objects.Label("Score: ", "30px Orbitron",
                "#adffff",
                10, 0, false);
            this.addChild(this._score);


            this.health = 100;
            this._healthLabel = new objects.Label("%", "35px Orbitron",
                "#adffff",
                config.Screen.WIDTH - 230, 0, false);
            this.addChild(this._healthLabel);

            this._deadLabel = new objects.Label("You are Dead !", "Bold 50px Orbitron",
                "#ff1a1a",
                config.Screen.CENTER_X, config.Screen.CENTER_Y, true);
            this._deadLabel.visible = false;
            this.addChild(this._deadLabel);

            this.healthIMG = new createjs.Bitmap(assets.getResult("health"));
            this.healthIMG.x = config.Screen.WIDTH - this.healthIMG.getBounds().width * 0.5;
            this.healthIMG.y = this.healthIMG.getBounds().height * 0.5;
            this.healthIMG.regX = this.healthIMG.getBounds().width * 0.5;
            this.healthIMG.regY = this.healthIMG.getBounds().height * 0.5;
            this.addChild(this.healthIMG);
            
            // add this scene to the global stage container
            stage.addChild(this);
        }

        // PLAY Scene updates here
        public update(): void {
            this._city.update();

            if (this._player.isShooting) {
                this._bullet.update();
            }
            else {
                this._bullet.reset(-this._bullet.width);
            }




            this._player.update();


            this._captainShields.forEach(shield => {
                shield.update();
                this._collision.check(shield);
                this._collision.bulletCollision(this._bullet, shield);
            });


            this._health.forEach(h => {
                h.update();
                this._collision.check(h);
            });


            this._score.text = "Score: " + this.point.toFixed(2);
            if (!this._player.isDead) {
                this.point = this.point + 0.01;
            }
            this._healthLabel.text = this.health.toFixed(2) + " %";

            if (this.point < 0) {
                this.point = 0;
            }

            if (this.health <= 0) {
                this.health = 0;
                this._player.isDead = true;
                this._bullet.reset(-this._bullet.width);
                this._deadLabel.visible = true;


                if (Play._counter === 240) {
                    this._fadeOut(500, () => {
                        // Switch to the final Scene
                        scene = config.Scene.END;
                        changeScene();
                    });

                    Play._counter = 0;
                }

                Play._counter++;
                //console.log(Play._counter);
            }

        }
        
        
        //EVENT HANDLERS ++++++++++++++++++++
        
    }
}