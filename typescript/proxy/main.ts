import { ImageListView } from "./imageListView";
import { ProxyImage } from "./proxyImage";

class main {
    public static main(): void {
        const image: ImageListView = new ProxyImage("file");
        const image1: ImageListView = new ProxyImage("file2");

        image.draw();
        image.draw();
        image.draw();
        image1.draw();
        image1.draw();
        image1.draw();
    }
}

main.main();