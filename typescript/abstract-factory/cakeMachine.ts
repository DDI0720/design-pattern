interface CakeMachine {
    process():void;
}

export class CheeseCakeMachine implements CakeMachine {
    process ():void {
        console.log('치즈케이크');
    }
}

export class CreamCakeMachine implements CakeMachine {
    process (): void {
        console.log('생크림케이크');
    }
}