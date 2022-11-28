// 배열 생성 방법
let array = new Array(2);           // 사이즈만 정해진 배열 만들기 
console.log(array);                 // <2 empty items>

array = new Array(1, 2, 3);         // 실제 아이템을 전달해서 배열 만들기 
console.log(array);                 // [ 1, 2, 3 ]

array = Array.of(1, 2, 3, 4, 5)     // 원하는 개수만큼 전달해서 무한정 넣을 수 있다. 
console.log(array);                 // [ 1, 2, 3, 4, 5 ]

const anotherArray = [1, 2, 3, 4];  // 배열 리터럴 이용해서 만들기 
console.log(anotherArray);          // [ 1, 2, 3, 4 ]

array = Array.from(anotherArray);   // 기존의 배열로 부터 새로운 배열 만들기 
console.log(array);                 // [ 1, 2, 3, 4 ]
array = Array.from('text');         // 순회가 가능한 것은 모두 배열로 만들 수 있다!
console.log(array);                 // [ 't', 'e', 'x', 't' ]

// 일반적으로 배열은 동일한 메모리 크기를 가지며, 연속적으로 이어져 있어야 한다.
// 하지만 자바스크립트에서의 배열은 연속적으로 이어져 있지 않고
// 오브젝트와 유사하다!
// 그래서 자바스크립트의 배열은 일반적인 배열의 동작을 흉내낸 특수한 객체이다. 
// 이걸 보완하기 위해서 타입이 정해져 있는 타입 배열이 있다. (Typed Collections)
array = Array.from({
    0: '안',
    1: '녕',
    length: 2
})
console.log(array);                 // [ '안', '녕' ]
// 이를 통해서 오브젝트를 배열처럼 만들 수 있다는 것을 증명할 수 있다.
