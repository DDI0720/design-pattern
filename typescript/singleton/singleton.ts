// 어떤 한 클래스에 대해서 최초 한번만 메모리를 할당하도록 해 부하를 줄일 수 있도록 만들어진 디자인 패턴
// 조건1: 프로그램내에서 인스턴스가 오직 하나만 생성되는것을 보장해야함 (기존에 사용했던 동일한 인스턴스를 다시 사용할 수 있도록 한다는 의미)
// 조건2: 프로그램 어디서든 이 인스턴스에 접근가능해야함

class Normal {
    constructor () {
        console.log('노말버전 is called');
    }
}

class Singleton {
    private static singleton: Singleton | null = null;
    public static getInstance (): Singleton {
        if (this.singleton === null) { this.singleton = new Singleton(); }
        return this.singleton;
    }
    private constructor() {
        console.log(`singleton instance creatated`);
    }
}

class Main {
    static main():void {
        console.log('1');
        const normal1: Normal = new Normal();
        console.log('2');
        const normal2: Normal = new Normal();
        console.log('3');
        const singleton1: Singleton = Singleton.getInstance();
        const singleton2: Singleton = Singleton.getInstance();
    }
}

Main.main();

/*
1
노말버전 is called
2
노말버전 is called
3
singleton instance creatated
*/