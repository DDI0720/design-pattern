/*
1. 스트레터지 패턴이란? :
    기존 전략을 변경할 때 중복되거나 제외시켜야 하는 로직들이 생겨 적용시키기 복잡해지는데,
    이것을 방지하기 위해 해당 알고리즘들을 클래스로 캡슐화 시키고 이곳 저곳 알맞게 호출할 수 있게 하여
    자유롭게 전략을 바꿀 수 있도록 하는 디자인패턴이다..
    행위패턴 중 하나라고 한다.

    (1) 행위 패턴이란? : 
        한 객체가 혼자 수행하기 버거운 작업을 여러개로 쪼개어
        < 중복되는 부분을 얼마나 최소화 하였는지를 중점으로 어떻게 작업을 분배하는지 >
        에 관련된 패턴
*/


//타입스크립트로 따라하기
//1. https://gmlwjd9405.github.io/2018/07/06/strategy-pattern.html
// abstract class Robot {
//     name: string;
//     constructor(name: string){ this.name = name; }
//     public getName(): string { return this.name; }
//     public abstract move(): void;
//     public abstract attack(): void;   
// }

// class TaekwonV extends Robot {
//     constructor(name: string){ super(name); }
//     public attack() { console.log("나에겐 미사일이 있지"); }
//     public move() { console.log("난 걷기만 가능하지!"); }
// }

// class Atom extends Robot {
//     constructor(name: string){ super(name); }
//     public attack() { console.log("나에겐 강한 주먹이 있지!"); }
//     public move() { console.log("나는 날수도 있지!"); }
// }

// class Client {
//     public static main(args: string): void {
//         const taekwonV: Robot =  new TaekwonV("TaekwonV");
//         const atom: Robot =  new Atom("Atom");

//         console.log(`my name is ${taekwonV.getName()}`);
//         taekwonV.move();
//         taekwonV.attack();
//         console.log(`my name is ${atom.getName()}`);
//         atom.move();
//         atom.attack();
//     }
// }