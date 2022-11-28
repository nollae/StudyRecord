const fruits = ['🍌', '🍎', '🍇', '🍑'];

// 배열 아이템을 참조하는 방법
for(let i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
}
console.log(fruits.length);

// 추가, 삭제 - 좋지 않은 방식 (최대한 사용하지 않기)
fruits[6] = '🍓';                   // 중간에 아이템이 비어져 있을 수 있음
console.log(fruits);                // [ '🍌', '🍎', '🍇', '🍑', <2 empty items>, '🍓' ]

delete fruits[1];                   // 값은 삭제되었지만 공간이 그대로 남아있음 
console.log(fruits);                // [ '🍌', <1 empty item>, '🍇', '🍑', <2 empty items>, '🍓' ]
