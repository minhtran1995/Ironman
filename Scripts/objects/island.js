var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    var Island = (function (_super) {
        __extends(Island, _super);
        function Island() {
            _super.call(this, "island");
            this._speed.y = 2;
            this._reset(this._topBound);
            this.name = "island";
        }
        Island.prototype._reset = function (value) {
            this.y = value;
            this.x = Math.floor(Math.random() * this._rightBound + this._leftBound);
        };
        Island.prototype._checkBound = function (value) {
            //check if the top of island is top of scene
            if (this.y >= value) {
                this._reset(this._topBound);
            }
        };
        Island.prototype.update = function () {
            this.y += this._speed.y;
            this._checkBound(this._bottomBound);
        };
        return Island;
    })(objects.GameObject);
    objects.Island = Island;
})(objects || (objects = {}));
//# sourceMappingURL=island.js.map