import { ImageListView } from "./imageListView";
import { RealImage } from "./realImage";

export class ProxyImage implements ImageListView {
    private imageName: string;
    private image: RealImage | undefined;

    constructor (imageName: string) {
        this.imageName = imageName;
    }

    draw(): void {
        if (!this.image) {
            this.image = new RealImage(this.imageName);
            this.image.draw();
        } else {
            this.image.diskImage();
        }
    }
}