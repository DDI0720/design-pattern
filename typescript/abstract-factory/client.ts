import {SetA, SetB} from './machineFactory';

class Client {
    static main(): void {
        console.log('세트 A 에는');
        const setA = new SetA();
        setA.getCake().process();
        setA.getBeverage().process();

        console.log('세트 B 에는');
        const setB = new SetB();
        setB.getCake().process();
        setB.getBeverage().process();
    }
}

Client.main();