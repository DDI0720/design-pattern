interface GetHealthy {
    plan (name: string): void;
}


class eatVitamin{
    plan(name: string) {
        console.log(`${name}이가 비타민을 먹어요`)
    }
}

class spendMoney{
    plan(name: string) {
        console.log(`${name}이가 돈을써요`)
    }
}

class sleep {
    plan(name: string) {
        console.log(`${name}이가 자요`)
    }
}

class touchDog {
    plan(name: string) {
        console.log(`${name}이가 강아지를 만져요`)
    }
}

class takeAWalk {
    plan(name: string) {
        console.log(`${name}이가 산책을 해요`)
    }
}

