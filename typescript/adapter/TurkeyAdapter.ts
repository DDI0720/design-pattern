import { Duck } from './Duck';
import { Turkey } from './Turkey';

class TurkeyAdapter implements Duck {
    turkey: Turkey;
    constructor(turkey: Turkey) {
        this.turkey = turkey;
    }

    quack(): void {
        this.turkey.gooble();
    }
    fly(): void {
        this.turkey.fly();
    }
}