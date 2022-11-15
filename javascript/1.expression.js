let b;  // 선언문
b = 2;  // 표현식, 할당문 

// let a = let b; 선언문이라서 에러 : 선언문은 표현식이 아니라는 것을 증명 
let a = (b = 2);

console.log(a);     // 2

