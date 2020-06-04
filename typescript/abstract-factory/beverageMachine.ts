interface BeverageMachine {
    process(): void;
}

export class CoffeeMachine implements BeverageMachine {
    process(): void {
        console.log('커피 없인 못살아 정말못살아!쿵짝!');
    }
}

export class MilkMachine implements BeverageMachine {
    process(): void {
        console.log('카스테라 우유 찍먹 옴뇸뇸');
    }
}
