import { MediaPlayer } from "./media-player";
import { MediaPackage } from "./media-Package";

export class FormatAdapter implements MediaPlayer {
    private media: MediaPackage;
    constructor (m: MediaPackage) {
        this.media = m;
    }
    play(filename: string) {
        console.log('어댑터를 사용하였습니다');
        this.media.playFile(filename);
    }
}