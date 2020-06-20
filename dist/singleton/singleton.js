"use strict";
// 어떤 한 클래스에 대해서 최초 한번만 메모리를 할당하도록 해 부하를 줄일 수 있도록 만들어진 디자인 패턴
// 조건1: 프로그램내에서 인스턴스가 오직 하나만 생성되는것을 보장해야함 (기존에 사용했던 동일한 인스턴스를 다시 사용할 수 있도록 한다는 의미)
// 조건2: 프로그램 어디서든 이 인스턴스에 접근가능해야함
var Normal = /** @class */ (function () {
    function Normal() {
        console.log('노말버전 is called');
    }
    return Normal;
}());
var Singleton = /** @class */ (function () {
    function Singleton() {
        console.log("singleton instance creatated");
    }
    Singleton.getInstance = function () {
        if (this.singleton === null) {
            this.singleton = new Singleton();
        }
        return this.singleton;
    };
    Singleton.singleton = null;
    return Singleton;
}());
var Main = /** @class */ (function () {
    function Main() {
    }
    Main.main = function () {
        console.log('1');
        var normal1 = new Normal();
        console.log('2');
        var normal2 = new Normal();
        console.log('3');
        var singleton1 = Singleton.getInstance();
        var singleton2 = Singleton.getInstance();
    };
    return Main;
}());
Main.main();
/*
1
노말버전 is called
2
노말버전 is called
3
singleton instance creatated
*/ 
//# sourceMappingURL=singleton.js.map