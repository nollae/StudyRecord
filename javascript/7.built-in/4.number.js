const num1 = 123;
const num2 = new Number(123);
console.log(typeof num1);                   // number
console.log(typeof num2);                   // object

console.log(Number.MAX_VALUE);              // 1.7976931348623157e+308
console.log(Number.MIN_VALUE);              // 5e-324
console.log(Number.MAX_SAFE_INTEGER);       // 9007199254740991
console.log(Number.MIN_SAFE_INTEGER);       // -9007199254740991
console.log(Number.NaN);                    // NaN
console.log(Number.POSITIVE_INFINITY);      // Infinity
console.log(Number.NEGATIVE_INFINITY);      // -Infinity

// 숫자인지 아닌지 비교할 때 
if(num1 === Number.NaN){}
if(Number.isNaN(num1)){}
// 특정한 숫자가 범위에 존재하는지 확인할 때
if(num1 < Number.MAX_VALUE){}

// 지수표기법 (매우 크거나 작은 숫자를 표기할 때 사용, 10의 n승으로 표기)
const num3 = 102;
console.log(num3.toExponential());          // 1.02e+2

//  실수를 반올림하여 문자열로 변환
const num4 = 1234.12;
console.log(num4.toFixed());                // 1234

// 숫자를 문자열로 변환
console.log(num4.toString());               // 1234.12
// 숫자를 나라별로 표현할 때 
console.log(num4.toLocaleString('ar-EG'));  // ١٬٢٣٤٫١٢

// 원하는 자릿수까지 유효하도록 반올림
console.log(num4.toPrecision(5));           // 1234.1
// 전체 자릿수 표기가 안될 때는 지수표기법 
console.log(num4.toPrecision(2));           // 1.2e+3

if(Number.EPSILON > 0 || Number.EPSILON < 1){   
    // 0과 1사이에서 나타낼 수 있는 가장 작은 숫자 
    console.log(Number.EPSILON);            // 2.220446049250313e-16
}   
const num = 0.1 + 0.2 - 0.2;
console.log(num);                           // 0.10000000000000003

// 자바스크립트에서는 이를 계산할 때 십진수를 이진수로 변환한 후, 계산을 진행한다. 
// 이후 이진수를 다시 십진수로 변환한다. 
// 이 과정에서 정확하게 부동소수까지 계산이 되지 않는다. 
// 즉, 작은 오차가 발생할 수 있다.
// 이런 작은 오차를 나타내는 것이 EPSILON

function isEqual(original, expected){
    return original === expected;
}

console.log(isEqual(1,1));                  // true          
console.log(isEqual(0.1,0.1));              // true
console.log(isEqual(num,0.1));              // false

// 그래서 우리가 작은 미세한 차이를 간주하고 싶지않다면?
// 작은 차이는 같은 것이라고 간주하고 싶다면
function isEqual_(original, expected){
    // 마이너스 값이 되지 않도록 Math에 있는 절댓값 함수를 이용한다.
    return Math.abs(original - expected ) < Number.EPSILON;
}

console.log(isEqual_(1,1));                // true
console.log(isEqual_(0.1,0.1));            // true 
console.log(isEqual_(num,0.1));            // true


