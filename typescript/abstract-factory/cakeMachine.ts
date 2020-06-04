interface CakeMachine {
    process():void;
}

export class CheeseCakeMachine implements CakeMachine {
    process ():void {
        console.log('치즈케이크 맛있게 굽고있습니다만?');
    }
}

export class CreamCakeMachine implements CakeMachine {
    process (): void {
        console.log('생크림 바르고 있습니다만?');
    }
}