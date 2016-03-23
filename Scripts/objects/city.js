var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    var City = (function (_super) {
        __extends(City, _super);
        function City() {
            _super.call(this, "night");
            this.speed.x = 3;
            this.reset(0);
            this.regX = 0;
            this.regY = 0;
        }
        City.prototype.reset = function (value) {
            this.x = value;
        };
        City.prototype._checkBound = function (value) {
            if (this.x <= value) {
                this.reset(0);
            }
        };
        City.prototype.update = function () {
            //console.log(this.x+" "+ this.y)            
            this.x -= this.speed.x;
            this._checkBound(-3800);
        };
        return City;
    })(objects.GameObject);
    objects.City = City;
})(objects || (objects = {}));
//# sourceMappingURL=city.js.map