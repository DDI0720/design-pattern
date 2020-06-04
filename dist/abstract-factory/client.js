"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var machineFactory_1 = require("./machineFactory");
var Client = /** @class */ (function () {
    function Client() {
    }
    Client.main = function () {
        console.log('세트 A 에는');
        var setA = new machineFactory_1.SetA();
        setA.getCake().process();
        setA.getBeverage().process();
        console.log('세트 B 에는');
        var setB = new machineFactory_1.SetB();
        setB.getCake().process();
        setB.getBeverage().process();
    };
    return Client;
}());
Client.main();
//# sourceMappingURL=client.js.map