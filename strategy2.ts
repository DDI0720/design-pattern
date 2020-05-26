//2. 스트래티지 패턴으로 변경하기
abstract class Robot {
    name: string;
    attackStrategy: AttackStrategy;
    movingStrategy: MovingStrategy;

    constructor(name: string) {
        this.name = name;
    }
    getName(): string { return this.name; }
    attack(): void { this.attackStrategy.attack(); }
    moving(): void { this.movingStrategy.moving(); }

    setAttackStrategy(attackStrategy: AttackStrategy) {
        this.attackStrategy = attackStrategy;
    }
    setMovingStrategy(movingStrategy: MovingStrategy) {
        this.movingStrategy = movingStrategy;
    }
}

interface AttackStrategy { attack(): void; }
class MissileStrategy implements AttackStrategy {
    attack(): void { console.log('반갑소 미사일이오. 나는 강력한것을 좋아하오.') }
}
class PunchStrategy implements AttackStrategy {
    attack(): void { console.log('펀치를 날리신다더니...진짜로 날리시네') }
}

interface MovingStrategy { moving(): void; }
class FlyStrategy implements MovingStrategy {
    moving(): void { console.log('피치못할 사정이생겨.. 난 이만 날아가봐야겠소.') }
}
class WalkingStrategy implements MovingStrategy {
    moving(): void { console.log('기는상 나는상 다 출입허용입니다만.. 유일하게 걷는상은 출입불가입니다') }
}

class TaekwonV extends Robot {
   constructor(name: string) { super(name); }
}
class Atom extends Robot {
    constructor(name: string) { super(name); }
}


class Client {
    static main(args: string[]): void {
        const taekwonV: Robot = new TaekwonV('TAEKWONV');
        const atom: Robot = new Atom('ATOM');

        taekwonV.setMovingStrategy(new WalkingStrategy());
        taekwonV.setAttackStrategy(new PunchStrategy());
        atom.setMovingStrategy(new FlyStrategy());
        atom.setAttackStrategy(new MissileStrategy());

        console.log('반갑소 내이름은 ', taekwonV.getName());
        taekwonV.moving();
        taekwonV.attack();

        console.log('반갑소 내이름은 ', atom.getName());
        atom.moving();
        atom.attack();
}