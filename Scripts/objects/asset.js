var objects;
(function (objects) {
    // ASSET CLASS ++++++++++++++++++++++++++
    var Asset = (function () {
        // CONSTRUCTOR +++++++++++++++++++++
        function Asset(id, src) {
            this.id = id;
            this.src = src;
        }
        return Asset;
    })();
    objects.Asset = Asset;
})(objects || (objects = {}));
//# sourceMappingURL=asset.js.map