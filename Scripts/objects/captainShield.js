var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    var CaptainShield = (function (_super) {
        __extends(CaptainShield, _super);
        function CaptainShield() {
            _super.call(this, "captainShield");
            this._reset(this._rightBound);
            this.name = "captainShield";
        }
        CaptainShield.prototype._reset = function (value) {
            this._speed.x = Math.round((Math.random() * 5) + 5);
            this._speed.y = Math.round((Math.random() * 6) - 3);
            this.x = value;
            this.y = Math.round((Math.random() * this._bottomBound) + this._topBound);
        };
        CaptainShield.prototype._checkBound = function (value) {
            if (this.x <= value) {
                this._reset(this._rightBound);
            }
        };
        CaptainShield.prototype.update = function () {
            this.y -= this._speed.y;
            this.x -= this._speed.x;
            this.rotation -= 7;
            this._checkBound(this._leftBound);
        };
        return CaptainShield;
    })(objects.GameObject);
    objects.CaptainShield = CaptainShield;
})(objects || (objects = {}));
//# sourceMappingURL=captainShield.js.map