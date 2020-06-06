/* -------생산자 클래스-------- */
abstract class ShoeStore {
    orderShoes (name: string) {
        let shoes:Shoes = this.makeShoes(name);
        shoes.prepare();
        shoes.packing();
        return shoes;
    }
    abstract makeShoes (name: string);
}
class KRShoeStore extends ShoeStore {
    makeShoes(name: string){
        if (name === "blackShoes") {
            return new KR_blackShoe();
        } else if (name === "pinkShoes") {
            return new KR_pinkShoe();
        } else {
            return null;
        }
    }
}

class FRShoeStore extends ShoeStore {
    makeShoes(name: string){
        if (name === "blackShoes") {
            return new FR_blackShoe();
        } else if (name === "pinkShoes") {
            return new FR_pinkShoe();
        } else {
            return null;
        }
    }
}


interface StoreFactory { //팩토리 -> 추상팩토리
    getFactory();
}


class StoreFactory implements StoreFactory { //팩토리 -> 추상팩토리
    static getFactory(shoeStore: ShoeStore) {
        return shoeStore;
    }
}


/* -------제품 클래스------- */
abstract class Shoes {
    name: string|undefined;
    bottom: string|undefined;
    leather: string|undefined;
    color: string|undefined;
    hasPattern: boolean|undefined;

    prepare(): void {
        console.log('완성된 신발 준비 중 ..');
    }

    packing(): void {
        console.log('준비된 신발 포장 중 ..');
    }

    getName() {
        return this.name;
    }
}
class KR_pinkShoe extends Shoes {
    name = '한국 스타일의 핑크 구두';
    bottom = '옅은 하얀색의 고무';
    leather = "인조가죽";
    hasPattern = false;
}
class KR_blackShoe extends Shoes {
    name = '한국 스타일의 검은 구두';
    bottom = '옅은 검은색의 플라스틱과 고무 혼용';
    leather = "양가죽";
    hasPattern = false;
}
class FR_pinkShoe extends Shoes {
    name = '프랑스 스타일의 핑크 구두';
    bottom = '짙은 핑크색의 플라스틱';
    leather = "소가죽";
    hasPattern = true;
}
class FR_blackShoe extends Shoes {
    name = '프랑스 스타일의 검은 구두';
    bottom = '짙은 핑크색의 플라스틱';
    leather = "말가죽";
    hasPattern = true;
}

class ShoeTest {
    main() {
        const krStore = StoreFactory.getFactory(new KRShoeStore()); //팩토리 -> 추상팩토리
        const frStore = StoreFactory.getFactory(new FRShoeStore()); //팩토리 -> 추상팩토리
        //let krStore: ShoeStore = new KRShoeStore();
        //let frStore: ShoeStore = new FRShoeStore();
        let shoes: Shoes = krStore.orderShoes("blackShoes");
        console.log('한국매장에서 산 신발 ->', shoes.getName());
        shoes = frStore.orderShoes('pinkShoes');
        console.log('프랑스 매장에서 산 신발 -> ',shoes.getName());
    }
}

let krblackshoe = new ShoeTest();
krblackshoe.main();