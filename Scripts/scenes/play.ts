/*
 ***************************************************************************************
 * Source file name : play.ts                                                          *
 * Author's name : Duc Minh Tran (300771859)                                           *
 * Last Modified by : Duc Minh Tran (300771859)                                        *
 * Last Modified date : March 29 2016                                                  *
 * Program description : This is a webgame that use  a Side Scroller background        * 
 *                                                                                     *  
 * Revision History : 1 - Update Internal Documentation                                *
 *                    2 - Change Winning Score                                         *
 *                    3 - Adding Comments                                              *
 *                                                                                     *
 ***************************************************************************************
*/

// PLAY SCENE
module scenes {
    export class Play extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _city: objects.City;
        private _health: objects.Health[];
        private _captainShields: objects.CaptainShield[];
        private _captainShieldCount: number;
        private _healthCount: number;

        //game objects
        private _bullet: objects.Bullet;
        private _player: objects.Player;
        private _collision: managers.Collision;

        //score and health
        private _score: objects.Label;
        public point: number;
        public health: number;


        public healthIMG: createjs.Bitmap;

        //game labels
        private _healthLabel: objects.Label;
        private _deadLabel: objects.Label;

        private static _counter;

        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();

        }

        // PUBLIC METHODS +++++++++++++++++++++

        // Start Method
        public start(): void {
            //init static variable
            Play._counter = 0;

            //adding scrolling background
            this._city = new objects.City();
            this.addChild(this._city);

            this._setupBackground('blank');

            //health count
            this._health = new Array<objects.Health>();
            this._healthCount = 1;
            for (var h = 0; h < this._healthCount; h++) {
                this._health[h] = new objects.Health();
                this.addChild(this._health[h]);
            }

            //player object
            this._player = new objects.Player();
            this._bullet = new objects.Bullet(this._player);
            this.addChild(this._bullet);
            this.addChild(this._player);

            //adding captain shields
            this._captainShieldCount = 10;//number of shields
            this._captainShields = new Array<objects.CaptainShield>();


            for (var shield = 0; shield < this._captainShieldCount; shield++) {
                this._captainShields[shield] = new objects.CaptainShield();
                this.addChild(this._captainShields[shield]);
            }

            //init collision manager
            this._collision = new managers.Collision(this._player, this);

            //score label
            this.point = 0;
            this._score = new objects.Label("Score: ", "30px Orbitron",
                "#adffff",
                10, 0, false);
            this.addChild(this._score);

            //health label
            this.health = 100;
            this._healthLabel = new objects.Label("%", "35px Orbitron",
                "#adffff",
                config.Screen.WIDTH - 230, 0, false);
            this.addChild(this._healthLabel);


            //dead message
            this._deadLabel = new objects.Label("You are Dead !", "Bold 50px Orbitron",
                "#ff1a1a",
                config.Screen.CENTER_X, config.Screen.CENTER_Y, true);
            this._deadLabel.visible = false;
            this.addChild(this._deadLabel);

            //adding health symbol
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
            //update scrolling background  heref
            this._city.update();

            //check collision here
            if (this._player.isShooting) {
                this._bullet.update();
            }
            else {
                this._bullet.reset(config.Screen.WIDTH + (this._bullet.width) * 5);
            }

            //update player location
            this._player.update();

            //update shields locations and check collision
            this._captainShields.forEach(shield => {
                shield.update();
                this._collision.check(shield);
                this._collision.bulletCollision(this._bullet, shield);
            });

            //update health locations and check collision
            this._health.forEach(h => {
                h.update();
                this._collision.check(h);
            });


            //update lables here
            this._score.text = "Score: " + this.point.toFixed(2);
            if (!this._player.isDead) {
                this.point = this.point + 0.01;
            }
            this._healthLabel.text = this.health.toFixed(2) + " %";

            if (this.point < 0) {
                this.point = 0;
            }

            //when player is dead, change to lose scene
            if (this.health <= 0) {
                this.health = 0;
                this._player.isDead = true;
                this._bullet.reset(-this._bullet.width);
                this._deadLabel.visible = true;


                if (Play._counter === 240) {
                    this._fadeOut(500, () => {
                        // Switch to the lose Scene
                        scene = config.Scene.END;
                        changeScene();
                    });

                    Play._counter = 0;
                }

                Play._counter++;
                //console.log(Play._counter);
            }

            //desired score to win
            if (this.point > 5000) {
                window.onmousedown = function() {
                    console.log("Mouse disabled");
                };

                if (Play._counter === 180) {
                    this._fadeOut(500, () => {
                        // Switch to the win Scene                
                        scene = config.Scene.WIN;
                        changeScene();
                    });
                    Play._counter = 0;
                }
                Play._counter++;
            }

        }

    }
}