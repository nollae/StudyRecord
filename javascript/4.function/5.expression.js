// 함수 선언문 function name() { }
// 함수 표현식 const name = function () { }
let add = function(a, b){
    return a + b;
}
console.log(add(1,2));
add = (a,b) => {
    return a + b;
}
// 화살표 함수 const name = () => {}
console.log(add(1,2));
// 바로 리턴하면 다음 처럼 작성해된다.
add = (a,b) => a + b;

// 생성자 함수 const object = new Function(); // 뒤 객체편에서 다룸 

// IIFE (Immedicately-Invoked Function Expressions)
(function run(){
    console.log('😀');
})();

