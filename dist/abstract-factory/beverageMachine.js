"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MilkMachine = exports.CoffeeMachine = void 0;
var CoffeeMachine = /** @class */ (function () {
    function CoffeeMachine() {
    }
    CoffeeMachine.prototype.process = function () {
        console.log('커피');
    };
    return CoffeeMachine;
}());
exports.CoffeeMachine = CoffeeMachine;
var MilkMachine = /** @class */ (function () {
    function MilkMachine() {
    }
    MilkMachine.prototype.process = function () {
        console.log('우유');
    };
    return MilkMachine;
}());
exports.MilkMachine = MilkMachine;
//# sourceMappingURL=beverageMachine.js.map