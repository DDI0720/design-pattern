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

interface Payment{
    pay(): void;
}

class CardPayment implements Payment {
    pay():void {
        console.log('500원도 카드되죠?');
    }
}

class CashPayment implements Payment {
    pay(): void {
        console.log('어 저 500원이 모자란데...');
    }
}

class Customer {
    payment: Payment;
    constructor(payment: Payment) {
        this.payment = payment;
    }
    pay(): void {
        this.payment.pay();
    }
}

let customer = new Customer(new CashPayment);
customer.pay();