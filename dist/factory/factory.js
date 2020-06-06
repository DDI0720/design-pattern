"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/* -------생산자 클래스-------- */
var ShoeStore = /** @class */ (function () {
    function ShoeStore() {
    }
    ShoeStore.prototype.orderShoes = function (name) {
        var shoes = this.makeShoes(name);
        shoes.prepare();
        shoes.packing();
        return shoes;
    };
    return ShoeStore;
}());
var KRShoeStore = /** @class */ (function (_super) {
    __extends(KRShoeStore, _super);
    function KRShoeStore() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    KRShoeStore.prototype.makeShoes = function (name) {
        if (name === "blackShoes") {
            return new KR_blackShoe();
        }
        else if (name === "pinkShoes") {
            return new KR_pinkShoe();
        }
        else {
            return null;
        }
    };
    return KRShoeStore;
}(ShoeStore));
var FRShoeStore = /** @class */ (function (_super) {
    __extends(FRShoeStore, _super);
    function FRShoeStore() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FRShoeStore.prototype.makeShoes = function (name) {
        if (name === "blackShoes") {
            return new FR_blackShoe();
        }
        else if (name === "pinkShoes") {
            return new FR_pinkShoe();
        }
        else {
            return null;
        }
    };
    return FRShoeStore;
}(ShoeStore));
var StoreFactory = /** @class */ (function () {
    function StoreFactory() {
    }
    StoreFactory.getFactory = function (shoeStore) {
        return shoeStore;
    };
    return StoreFactory;
}());
/* -------제품 클래스------- */
var Shoes = /** @class */ (function () {
    function Shoes() {
    }
    Shoes.prototype.prepare = function () {
        console.log('완성된 신발 준비 중 ..');
    };
    Shoes.prototype.packing = function () {
        console.log('준비된 신발 포장 중 ..');
    };
    Shoes.prototype.getName = function () {
        return this.name;
    };
    return Shoes;
}());
var KR_pinkShoe = /** @class */ (function (_super) {
    __extends(KR_pinkShoe, _super);
    function KR_pinkShoe() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = '한국 스타일의 핑크 구두';
        _this.bottom = '옅은 하얀색의 고무';
        _this.leather = "인조가죽";
        _this.hasPattern = false;
        return _this;
    }
    return KR_pinkShoe;
}(Shoes));
var KR_blackShoe = /** @class */ (function (_super) {
    __extends(KR_blackShoe, _super);
    function KR_blackShoe() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = '한국 스타일의 검은 구두';
        _this.bottom = '옅은 검은색의 플라스틱과 고무 혼용';
        _this.leather = "양가죽";
        _this.hasPattern = false;
        return _this;
    }
    return KR_blackShoe;
}(Shoes));
var FR_pinkShoe = /** @class */ (function (_super) {
    __extends(FR_pinkShoe, _super);
    function FR_pinkShoe() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = '프랑스 스타일의 핑크 구두';
        _this.bottom = '짙은 핑크색의 플라스틱';
        _this.leather = "소가죽";
        _this.hasPattern = true;
        return _this;
    }
    return FR_pinkShoe;
}(Shoes));
var FR_blackShoe = /** @class */ (function (_super) {
    __extends(FR_blackShoe, _super);
    function FR_blackShoe() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = '프랑스 스타일의 검은 구두';
        _this.bottom = '짙은 핑크색의 플라스틱';
        _this.leather = "말가죽";
        _this.hasPattern = true;
        return _this;
    }
    return FR_blackShoe;
}(Shoes));
var ShoeTest = /** @class */ (function () {
    function ShoeTest() {
    }
    ShoeTest.prototype.main = function () {
        var krStore = StoreFactory.getFactory(new KRShoeStore());
        var frStore = StoreFactory.getFactory(new FRShoeStore());
        //let krStore: ShoeStore = new KRShoeStore();
        //let frStore: ShoeStore = new FRShoeStore();
        var shoes = krStore.orderShoes("blackShoes");
        console.log('한국매장에서 산 신발 ->', shoes.getName());
        shoes = frStore.orderShoes('pinkShoes');
        console.log('프랑스 매장에서 산 신발 -> ', shoes.getName());
    };
    return ShoeTest;
}());
var krblackshoe = new ShoeTest();
krblackshoe.main();
//# sourceMappingURL=factory.js.map