// static 정적 프로퍼티, 메서드 
class Fruit{
    static MAX_FRUITS = 4;

    // 생성자: new 키워드로 객체를 생성할 때 호출되는 함수 
    constructor(name, emoji){
        this.name = name;
        this.emoji = emoji;
    }

    // 클래스 레벨의 메서드
    static makeRandomFruit(){
        // 클레스 레벨의 메서드에서는 this를 참조할 수 없음 
        return new Fruit('banana', '🍌');
    }
    // 인스턴스 레벨의 메서드 
    display = () => {
        console.log(`${this.name}: ${this.emoji}`);
    };
}

// console.log(Fruit.name);
// console.log(Fruit.display());

const banana = Fruit.makeRandomFruit();
// apple은 Fruit 클래스의 인스턴스이다.
const apple = new Fruit('apple', '🍎');
// orange은 Fruit 클래스의 인스턴스이다.
const orange = new Fruit('orange', '🍊');

console.log(Fruit.MAX_FRUITS);
console.log(banana);
console.log(apple);
console.log(orange);
apple.display();

// 사용예제 
Math.pow();
Number.isFinite(1);




