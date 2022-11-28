// Iterable 하다는건! 순회가 가능하다는 거지!
// [Symbol.iterator](): Iterator;
// 심볼정의를 가진 객체나, 특정한 함수가 Iterator를 리턴한다는 것은 
// 순회 가능한 객체이다 라는걸 알 수 있음
// 순회가 가능하면 무엇을 할 수 있나? for...of, spread
const array = [1, 2, 3];
// 순회가 가능하다면 of를 통해서 하나씩 할당이 가능하다. 
for(const item of array){ console.log(item); }
console.log('----------');
for(const item of array.values()){  console.log(item); }
console.log('----------');
for(const item of array.keys()){ console.log(item); }
console.log('----------');
for(const item of array.entries()){ console.log(item); }

// const obj = { 0: 1, 1: 2};
// for(const item of obj){ console.log(item);} 
// obj is not iterable : 
// 일반객체는 사용불가 그러나 for...in 사용 가능 
// for...in은 키 출력 
console.clear();

const iterator = array.values();
// 수동적으로 사용하는 방법
// console.log(iterator.next().value);       // { value: 1, done: false }
// console.log(iterator.next().value);       // { value: 2, done: false }
// console.log(iterator.next().value);       // { value: 3, done: false }
// console.log(iterator.next().done);        // { value: undefined, done: true(반복 끝났어!) }


while(true){
    const item = iterator.next();
    if(item.done) break;
    console.log(item.value);
}



