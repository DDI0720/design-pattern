"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RealImage = void 0;
var RealImage = /** @class */ (function () {
    function RealImage(imageString) {
        this.imageName = imageString;
    }
    RealImage.prototype.draw = function () {
        console.log('이미지 로딩', this.imageName);
    };
    RealImage.prototype.diskImage = function () {
        console.log('이미지 캐싱', this.imageName);
    };
    return RealImage;
}());
exports.RealImage = RealImage;
//# sourceMappingURL=realImage.js.map