interface GetHealthy {
    doPlan (): void;
}


class eatVitamin implements GetHealthy{
    doPlan() {
        return '비타민을 먹어요'
    }
}

class spendMoney implements GetHealthy{
    doPlan() {
        return '돈을써요'
    }
}

class sleep implements GetHealthy {
    doPlan() {
        return '자요'
    }
}

class touchDog implements GetHealthy {
    doPlan() {
        return '강아지를 쓰다듬어요'
    }
}

class takeAWalk implements GetHealthy {
    doPlan() {
        return '산책을 해요'
    }
}

class Person implements GetHealthy {
    planName: GetHealthy|undefined;
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    setPlan(planName: GetHealthy|undefined){
        this.planName = planName;
    }
    doPlan(){
        console.log(`${this.name} (이)가 ${this.planName?.doPlan()}`)
    }
}

let amber = new Person('amber');
amber.setPlan(new eatVitamin());
amber.doPlan();
amber.setPlan(new takeAWalk());
amber.doPlan();