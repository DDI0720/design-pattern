"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormatAdapter = void 0;
var FormatAdapter = /** @class */ (function () {
    function FormatAdapter(m) {
        this.media = m;
    }
    FormatAdapter.prototype.play = function (filename) {
        console.log('어댑터를 사용하였습니다');
        this.media.playFile(filename);
    };
    return FormatAdapter;
}());
exports.FormatAdapter = FormatAdapter;
//# sourceMappingURL=formatAdapter.js.map