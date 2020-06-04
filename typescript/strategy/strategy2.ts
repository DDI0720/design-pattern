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

class gamanhee implements GetHealthy {
    doPlan() {
        return '가만히 있어요';
        //기본값
    }
}

class Person implements GetHealthy {
    plan: GetHealthy;
    name: string;
    constructor(name: string) {
        this.name = name;
        this.plan = new gamanhee();
    }
    setPlan(plan: GetHealthy){
        this.plan = plan;
    }
    doPlan(){
        console.log(`${this.name} (이)가 ${this.plan.doPlan()}`)
    }
}

let amber = new Person('amber');
amber.doPlan();