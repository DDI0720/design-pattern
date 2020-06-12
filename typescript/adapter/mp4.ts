import { MediaPackage } from "./media-Package";

export class MP4 implements MediaPackage {
    public playFile(filename: string): void {
        console.log('mp4 ---> ' + filename + ' 재생합니다');
    }
}