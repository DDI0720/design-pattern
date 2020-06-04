"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SetB = exports.SetA = void 0;
var cakeMachine_1 = require("./cakeMachine");
var beverageMachine_1 = require("./beverageMachine");
var SetA = /** @class */ (function () {
    function SetA() {
    }
    SetA.prototype.getCake = function () {
        return new cakeMachine_1.CheeseCakeMachine();
    };
    SetA.prototype.getBeverage = function () {
        return new beverageMachine_1.CoffeeMachine();
    };
    return SetA;
}());
exports.SetA = SetA;
var SetB = /** @class */ (function () {
    function SetB() {
    }
    SetB.prototype.getCake = function () {
        return new cakeMachine_1.CreamCakeMachine();
    };
    SetB.prototype.getBeverage = function () {
        return new beverageMachine_1.MilkMachine();
    };
    return SetB;
}());
exports.SetB = SetB;
//# sourceMappingURL=machineFactory.js.map