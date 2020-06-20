"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var proxyImage_1 = require("./proxyImage");
var main = /** @class */ (function () {
    function main() {
    }
    main.main = function () {
        var image = new proxyImage_1.ProxyImage("file");
        var image1 = new proxyImage_1.ProxyImage("file2");
        image.draw();
        image.draw();
        image.draw();
        image1.draw();
        image1.draw();
        image1.draw();
    };
    return main;
}());
main.main();
//# sourceMappingURL=main.js.map