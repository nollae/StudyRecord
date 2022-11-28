// 동등 비교 관계 연산자 (Equality Operators)
// == 값이 같음
// != 값이 다름
// === 값과 타입이 둘 다 같음
// !== 값과 타입이 다름
console.log(2 === 2);       // true
console.log(2 != 2);        // false
console.log(2 != 3);        // true 
console.log(2 == 3);        // flase
console.log(2 == '2');      // true : 값만 비교하고 싶을 때 == 사용
console.log(2 === '2');     // false
console.log(true == 1);     // true
console.log(true === 1);    // false
console.log(false == 0);    // true
console.log(false === 0);   // false

const obj1 = {
    name: 'js',
};
const obj2 = {
    name: 'js',
};
console.log(obj1 == obj2);              // false : obj1과 obj2는 서로 다른 메모리 주소라서 false
console.log(obj1 === obj2);             // false : 값 자체가 달라서 타입이 같아도 false 
console.log(obj1.name == obj2.name);    // true : 동일한 값을 갖고 있어서 true
console.log(obj1.name === obj2.name);   // true : 동일한 값, 타입을 갖고 있어서 true

let obj3 = obj2;
console.log(obj3 == obj2);              // true
console.log(obj3 === obj2);             // true : 동일한 메모리 주소를 갖고 있어서 true 
