// LOADING SCENE
module scenes {
    export class Loading extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _mainBG: createjs.Bitmap;
        private _preloader: createjs.Bitmap;
        private _lodingLable: objects.Label;
        private _loadingBG: createjs.Bitmap;

        private _queue: createjs.LoadQueue;
        private static _flag: boolean;
        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();
        }
        
        // PUBLIC METHODS +++++++++++++++++++++
        
        // Start Method
        public start(): void {
            Loading._flag = false;
            
            
              
            //this part require a preload
            this._queue = new createjs.LoadQueue();
            this._queue.installPlugin(createjs.Sound);
            this._queue.loadManifest([
                { id: "loading", src: "../../Assets/images/loading.png" },
                { id: "PreloaderImage", src: "../../Assets/images/preloading.png" },
            ]);
            this._queue.on("complete", this.addBitMaps, this);

            
            
            // add this scene to the global stage container
            stage.addChild(this);
        }

        // INTRO Scene updates here
        public update(): void {
            //im making sure that the preloader images is loaded, and then it will be modified here
            if (Loading._flag) {
                this._preloader.rotation += 6;
            }
        }


        public addBitMaps(): void {
            //add background
            
            this._loadingBG = new createjs.Bitmap(this._queue.getResult("loading"));
            this._loadingBG.regX = this._loadingBG.getBounds().width * 0.5;
            this._loadingBG.regY = this._loadingBG.getBounds().height * 0.5;
            this._loadingBG.x = config.Screen.CENTER_X;
            this._loadingBG.y = config.Screen.CENTER_Y;
            this.addChild(this._loadingBG);


            this._preloader = new createjs.Bitmap(this._queue.getResult("PreloaderImage"));
            //i tried to get height and width of a bitmap            
            this._preloader.regX = this._preloader.getBounds().width * 0.5;
            this._preloader.regY = this._preloader.getBounds().height * 0.5;

            this._preloader.x = config.Screen.CENTER_X + 35;
            this._preloader.y = config.Screen.CENTER_Y - 20;
            this.addChild(this._preloader);
            Loading._flag = true;

        }
        
        //EVENT HANDLERS ++++++++++++++++++++
        
       
    }
}