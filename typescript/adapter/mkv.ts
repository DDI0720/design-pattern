import { MediaPlayer } from "./media-player";
import { MediaPackage } from "./media-Package";

export class MKV implements MediaPackage {
    public playFile(filename: string): void {
        console.log('mkv ---> ' + filename + '를 재생합니다');
    }
}