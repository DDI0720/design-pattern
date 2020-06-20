import { ImageListView } from "./imageListView";
import { RealImage } from "./realImage";

export class ProxyImage implements ImageListView {
    private imageName: string;
    private image: RealImage | null;

    constructor (imageName: string) {
        this.imageName = imageName;
        this.image = null;
    }

    draw(): void {
        if (this.image === null) {
            this.image = new RealImage(this.imageName);
            this.image.draw();
        } else {
            this.image.diskImage();
        }
    }
}