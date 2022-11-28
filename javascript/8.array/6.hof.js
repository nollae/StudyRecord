const fruits = ['🍌', '🍓', '🍇', '🍓'];
// 배열을 빙글빙글 돌면서 원하는 것(콜백함수)을 할 때 
fruits.forEach(function(value, index, array){
    console.log('--------------');
    console.log(value); // 특정 요소
    console.log(index); // 특정 인덱스 : 생략가능
    console.log(array); // 배열      : 생략가능 
});
fruits.forEach((value) => { console.log('hi'); });
fruits.forEach((value) => console.log('1line'));

// 조건에 맞는(콜백함수) 아이템을 찾을 때 
// find : 제일 먼저 조건에 맞는 아이템을 반환 
const item1 = { name: '🥛', price: 1 };
const item2 = { name: '🍪', price: 3 };
const item3 = { name: '🍙', price: 1 };
const products = [item1, item2, item3, item2];
let result = products.find((value) => { return value.name === '🍪'; });
result = products.find((value) => value.name === '🍪');
console.log(result);                         // { name: '🍪', price: 3 }

// findIndex: 제일 먼저 조건에 맞는 아이템의 인덱스를 반환
result = products.findIndex((value) => value.name === '🍪'); 
console.log(result);                         // 1

// 배열의 아이템들이 부분적으로 조건(콜백함수)에 맞는지 확인 
result = products.some((item) => item.name === '🍪');
console.log(result);                        // true

// 배열의 아이템들이 전부 조건(콜백함수)에 맞는지 확인 
result = products.every((item) => item.name === '🍪');
console.log(result);                        // false

// 조건에 맞는 모든 아이템들을 새로운 배열로!
result = products.filter((item) => item.name === '🍪');
console.log(result);                        // [ { name: '🍪', price: 3 }, { name: '🍪', price: 3 } ]

console.clear();

// Map 배열의 아이템들을 각각 다른 아이템으로 매핑할 수 있는, 변환해서 새로운 배열 생성! 
const nums = [1, 2, 3, 4, 5];
result = nums.map(item => item * 2);
console.log(result);                    // [ 2, 4, 6, 8, 10 ]
result = nums.map((item) => {
    if(item % 2 === 0){
        return item * 2;
    }else{
        return item;
    }
});
console.log(result);                    // [ 1, 4, 3, 8, 5 ]

// Flatmap: 중첩된 배열을 쫙 펴준다.
result = nums.map(item => [1,2]);
console.log(result);                    // [ [ 1, 2 ], [ 1, 2 ], [ 1, 2 ], [ 1, 2 ], [ 1, 2 ] ]

result = nums.flatMap((item) => [1,2]);
console.log(result);                    // [  1, 2, 1, 2, 1, 2, 1, 2, 1, 2 ]

result = ['nxde', 'idle'].map((text) => text.split(''));    // [ [ 'n', 'x', 'd', 'e' ], [ 'i', 'd', 'l', 'e' ] ]
console.log(result); 

result = ['nxde', 'idle'].flatMap((text) => text.split(''));    //[ 'n', 'x', 'd', 'e', 'i', 'd', 'l', 'e' ]
console.log(result); 

// sort 배열의 아이템들을 정렬
// 문자열 형태의 오름차순으로 요소를 정렬하고, 기존의 배열을 변경 
const texts = [ 'hi', 'abc'];
texts.sort();
console.log(texts);                     // [ 'abc', 'hi' ]

const numbers = [0, 5, 4, 2, 1, 10];
numbers.sort();
console.log(numbers);                   // [ 0, 1, 10, 2, 4, 5 ] : 문자열로 변환된 후 정렬되어서 10이 먼저 나옴
// < 0 a가 앞으로 정렬, 오름차순 
// > 0 b가 앞으로 정렬, 내림차순
numbers.sort((a, b) => a - b);           
console.log(numbers);                   // [ 0, 1, 2, 4, 5, 10 ]           

// reduce 배열의 요소들을 접어서 접어서 값을 하나로!
result = [1, 2, 3, 4, 5].reduce((sum, value) => {
    sum += value;
    return sum;
}, 0); // 0은 초기값 
result = [1, 2, 3, 4, 5].reduce((sum, value) => (sum += value), 0); // 0은 초기값 
console.log(result);                   // 15

