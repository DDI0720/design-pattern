"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MilkMachine = exports.CoffeeMachine = void 0;
var CoffeeMachine = /** @class */ (function () {
    function CoffeeMachine() {
    }
    CoffeeMachine.prototype.process = function () {
        console.log('커피 없인 못살아 정말못살아!쿵짝!');
    };
    return CoffeeMachine;
}());
exports.CoffeeMachine = CoffeeMachine;
var MilkMachine = /** @class */ (function () {
    function MilkMachine() {
    }
    MilkMachine.prototype.process = function () {
        console.log('카스테라 우유 찍먹 옴뇸뇸');
    };
    return MilkMachine;
}());
exports.MilkMachine = MilkMachine;
//# sourceMappingURL=beverageMachine.js.map