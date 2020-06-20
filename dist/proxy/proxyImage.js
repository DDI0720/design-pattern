"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProxyImage = void 0;
var realImage_1 = require("./realImage");
var ProxyImage = /** @class */ (function () {
    function ProxyImage(imageName) {
        this.imageName = imageName;
    }
    ProxyImage.prototype.draw = function () {
        if (!this.image) {
            this.image = new realImage_1.RealImage(this.imageName);
            this.image.draw();
        }
        else {
            this.image.diskImage();
        }
    };
    return ProxyImage;
}());
exports.ProxyImage = ProxyImage;
//# sourceMappingURL=proxyImage.js.map