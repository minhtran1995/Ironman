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
            this.reset(this._rightBound);
            this.name = "captainShield";
        }
        CaptainShield.prototype.reset = function (value) {
            this.speed.x = Math.round((Math.random() * 5) + 3);
            this.speed.y = Math.round((Math.random() * 6) - 3);
            this.x = value;
            this.y = Math.round((Math.random() * this._bottomBound) + this._topBound);
        };
        CaptainShield.prototype._checkBound = function (value) {
            if (this.x <= value) {
                this.reset(this._rightBound);
            }
        };
        CaptainShield.prototype.update = function () {
            this.y -= this.speed.y;
            this.x -= this.speed.x;
            this.rotation -= Math.round((Math.random() * 3) + 7);
            this._checkBound(this._leftBound);
        };
        return CaptainShield;
    })(objects.GameObject);
    objects.CaptainShield = CaptainShield;
})(objects || (objects = {}));
//# sourceMappingURL=captainShield.js.map