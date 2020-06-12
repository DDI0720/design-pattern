"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mp3_1 = require("./mp3");
var mp4_1 = require("./mp4");
var mkv_1 = require("./mkv");
var formatAdapter_1 = require("./formatAdapter");
var Main = /** @class */ (function () {
    function Main() {
    }
    Main.main = function () {
        var player = new mp3_1.MP3();
        player.play('music.mp3');
        player = new formatAdapter_1.FormatAdapter(new mp4_1.MP4());
        player.play('movie.mp4');
        player = new formatAdapter_1.FormatAdapter(new mkv_1.MKV());
        player.play('file.mkv');
    };
    return Main;
}());
Main.main();
//# sourceMappingURL=main.js.map