import {ImageListView} from './imageListView';

export class RealImage implements ImageListView {
    private imageName: string;
    constructor (imageString: string) {
        this.imageName = imageString;
    }

    draw(): void {
        console.log('이미지 로딩', this.imageName);
    }

    diskImage(): void {
        console.log('이미지 캐싱' , this.imageName);
    }
}