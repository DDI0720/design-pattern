interface BeverageMachine {
    process(): void;
}

export class CoffeeMachine implements BeverageMachine {
    process(): void {
        console.log('커피');
    }
}

export class MilkMachine implements BeverageMachine {
    process(): void {
        console.log('우유');
    }
}
