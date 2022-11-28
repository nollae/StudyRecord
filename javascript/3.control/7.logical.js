// 논리연산자 Logical Operator
// && 그리고
// || 또는
// ! 부정(단항연산자에서 온 것)
// !! 불리언값으로 변환(단항연산자 응용버전)
let num = 21;
if(num >= 0 && num < 9){
    console.log('hi'); 
}
if(num != 9){
    console.log('notnot');
}

console.log(true && true);      // true
console.log(true && false);     // false
console.log(false && true);     // false
console.log(false && false);    // false

console.log(true || true);      // true
console.log(true || false);     // true
console.log(false || true);     // true
console.log(false || false);    // false

console.log(!'text');           // false
console.log(!!'text');          // true : boolean으로 변환 


