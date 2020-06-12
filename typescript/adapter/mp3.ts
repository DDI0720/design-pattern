import { MediaPlayer } from "./media-player";

export class MP3 implements MediaPlayer {
    public play(filename: string): void {
        console.log('mp3 --->' + filename + ' 재생합니다');
    }
}