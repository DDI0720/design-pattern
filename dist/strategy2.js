"use strict";
var eatVitamin = /** @class */ (function () {
    function eatVitamin() {
    }
    eatVitamin.prototype.doPlan = function () {
        return '비타민을 먹어요';
    };
    return eatVitamin;
}());
var spendMoney = /** @class */ (function () {
    function spendMoney() {
    }
    spendMoney.prototype.doPlan = function () {
        return '돈을써요';
    };
    return spendMoney;
}());
var sleep = /** @class */ (function () {
    function sleep() {
    }
    sleep.prototype.doPlan = function () {
        return '자요';
    };
    return sleep;
}());
var touchDog = /** @class */ (function () {
    function touchDog() {
    }
    touchDog.prototype.doPlan = function () {
        return '강아지를 쓰다듬어요';
    };
    return touchDog;
}());
var takeAWalk = /** @class */ (function () {
    function takeAWalk() {
    }
    takeAWalk.prototype.doPlan = function () {
        return '산책을 해요';
    };
    return takeAWalk;
}());
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.setPlan = function (planName) {
        this.planName = planName;
    };
    Person.prototype.doPlan = function () {
        var _a;
        console.log(this.name + " (\uC774)\uAC00 " + ((_a = this.planName) === null || _a === void 0 ? void 0 : _a.doPlan()));
    };
    return Person;
}());
var amber = new Person('amber');
amber.setPlan(new eatVitamin());
amber.doPlan();
amber.setPlan(new takeAWalk());
amber.doPlan();
//# sourceMappingURL=strategy2.js.map