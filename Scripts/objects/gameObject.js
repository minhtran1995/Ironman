var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    var GameObject = (function (_super) {
        __extends(GameObject, _super);
        function GameObject(bitmapString) {
            _super.call(this, assets.getResult(bitmapString));
            this.speed = new createjs.Point(0, 0);
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.regX = this.width * 0.5;
            this.regY = this.height * 0.5;
            this._topBound = this.height;
            this._bottomBound = config.Screen.HEIGHT - this.height;
            this._leftBound = -this.width;
            this._rightBound = config.Screen.WIDTH + this.width;
        }
        GameObject.prototype.reset = function (value) {
            this.x = value;
        };
        GameObject.prototype._checkBound = function (value) {
            var resetVal = 0;
            if (this.x >= value) {
                this.reset(resetVal);
            }
        };
        GameObject.prototype.update = function () {
            var boundVal = 0;
            this.x -= this.speed.y;
            this._checkBound(boundVal);
        };
        GameObject.prototype.setImage = function (name) {
            this.image = assets.getResult(name);
        };
        return GameObject;
    })(createjs.Bitmap);
    objects.GameObject = GameObject;
})(objects || (objects = {}));
//# sourceMappingURL=gameObject.js.map