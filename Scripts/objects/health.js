var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    var Health = (function (_super) {
        __extends(Health, _super);
        function Health() {
            _super.call(this, "arcReactorFixed");
            this._speed.x = 2;
            this._reset(this._rightBound);
            this.name = "health";
        }
        Health.prototype._reset = function (value) {
            this.x = value;
            this.y = Math.floor(Math.random() * this._bottomBound + this._topBound);
        };
        Health.prototype._checkBound = function (value) {
            //check if the top of island is top of scene
            if (this.x <= value) {
                this._reset(this._rightBound);
            }
        };
        Health.prototype.update = function () {
            this.x -= this._speed.x;
            this._checkBound(this._leftBound);
        };
        return Health;
    })(objects.GameObject);
    objects.Health = Health;
})(objects || (objects = {}));
//# sourceMappingURL=health.js.map