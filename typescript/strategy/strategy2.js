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
var gamanhee = /** @class */ (function () {
    function gamanhee() {
    }
    gamanhee.prototype.doPlan = function () {
        return '가만히 있어요';
    };
    return gamanhee;
}());
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
        this.plan = new gamanhee();
    }
    Person.prototype.setPlan = function (plan) {
        this.plan = plan;
    };
    Person.prototype.doPlan = function () {
        console.log(this.name + " (\uC774)\uAC00 " + this.plan.doPlan());
    };
    return Person;
}());
var amber = new Person('amber');
amber.doPlan();
