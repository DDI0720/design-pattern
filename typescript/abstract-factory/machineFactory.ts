import {CheeseCakeMachine, CreamCakeMachine} from './cakeMachine';
import {CoffeeMachine, MilkMachine} from './beverageMachine';

interface MachineFactory {
    getCake();
    getBeverage();
}

export class SetA implements MachineFactory {
    getCake () {
        return new CheeseCakeMachine();
    }
    getBeverage () {
        return new CoffeeMachine();
    }
}

export class SetB implements MachineFactory {
    getCake () {
        return new CreamCakeMachine();
    }
    getBeverage () {
        return new MilkMachine();
    }
}