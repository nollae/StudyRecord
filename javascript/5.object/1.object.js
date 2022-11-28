// 객체 만드는 방법
// 1. Object literal { key: value }
// 2. new Object()
// 3. Object.create();
// key - 문자, 숫자, 문자열, 심볼
// value - 원시값, 객체(함수)
let apple = {
    name: 'apple',
    'hello': '😀',
    'hello-bye': '😀-bye',
    0: 1,
    ['hello-bye1']: '✅'
};

// 속성, 데이터에 접근 하기 위해서는 
console.log(apple);
console.log(apple.name);        // 마침표 표기법 dot notation
console.log(apple.hello);
console.log(apple['hello-bye']);// 대괄호 표기법 bracket notation
console.log(apple['name']);
console.log(apple[0]);
console.log(apple['hello-bye1']);

// 속성 추가 
apple.emoji = '🍎';
console.log(apple.emoji);
console.log(apple['emoji']);

// 속성 삭제
delete apple.emoji;
console.log(apple);


