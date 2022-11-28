// const multiple = {
//     [Symbol.iterator]() {
//         const max = 10;
//         let start = 0;
//         return{
//             next() {
//                 return { value: start++ * 2, done: start > max };
//             },
//         };
//     },
// };

// * 이 있어야 제너레이터로 인식이 가능하다.
function* multipleGenerator(){
    try {
        for(let i = 0; i < 10; i++){
            // return과 비슷한데, return은 바로 리턴하는 반면에
            // yield는 사용자가 원할 때까지 기다렸다가 사용자가 원할 때 하나씩 리턴해준다.
            // 즉, 사용하는 사람에게 제어권을 양도한다!
            console.log(i);
            yield i ** 2;
        }
    } catch (error) {
        console.log(error);
    }
}
const multiple = multipleGenerator();
let next = multiple.next();
console.log(next.value, next.done); 

// 여기서 return()은 종료 역할을 한다. 
//multiple.return();
// error를 던지는 역할을 한다.
multiple.throw('ERROR');

next = multiple.next();
console.log(next.value, next.done); 
