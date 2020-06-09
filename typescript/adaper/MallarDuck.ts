import {Duck} from './Duck'
class MarallrdDuck implements Duck {
    quack(): void {
        console.log("QUACK");
    }
    fly(): void {
        console.log('FLYING');
    }
}