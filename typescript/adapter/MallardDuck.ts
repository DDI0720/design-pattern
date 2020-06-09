import {Duck} from './Duck'
export class MarallrdDuck implements Duck {
    quack(): void {
        console.log("QUACK");
    }
    fly(): void {
        console.log('FLYING');
    }
}