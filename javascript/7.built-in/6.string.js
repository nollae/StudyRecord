const textObj = new String('Hello World!');
const text = 'Hello World!';

console.log(textObj);           // [String: 'Hello World!']
console.log(text);              // Hello World!

// 문자열 길이 
console.log(text.length);       // 12

// 함수로 접근하는 것과 배열의 인덱스로 접근하는 것 두 가지 방법은 동일하다.
console.log(text[0]);           // H
console.log(text[1]);           // e
console.log(text[2]);           // l
console.log(text.charAt(0));    // H
console.log(text.charAt(1));    // e
console.log(text.charAt(2));    // l

// 특정문자 인덱스 찾기 ( 정주행, 역주행 )
console.log(text.indexOf('l'));     // 2
console.log(text.lastIndexOf('l')); // 9

// 특정문자 포함 여부 
console.log(text.includes('tx'));   // false
console.log(text.includes('h'));    // false
console.log(text.includes('H'));    // true

// 특정한 문자로 시작하는지 여부 
console.log(text.startsWith('h'));  // false
console.log(text.startsWith('H'));  // true
// 특정한 문자로 끝나는지 여부
console.log(text.endsWith('!'));    // true
console.log(text.endsWith('o'));    // false

// 전부 대문자로 변환하기
console.log(text.toUpperCase());        // HELLO WORLD!
// 전부 소문자로 변환하기 
console.log(text.toLocaleLowerCase());  // hello world!

// 특정 위치의 문자열 삭제
console.log(text.substring(0, 2));      // He
// 앞에서부터 문자열 삭제 
console.log(text.slice(2));             // llo World!
// 뒤에서부터 문자열 삭제 
console.log(text.slice(-2));            // d!

const space = '            space ';
// 공백 제거
console.log(space.trim());              // space

const longText = 'Get to the, point';
// 공백별로 문자를 나눠주고 싶을 때 
console.log(longText.split(' '));       // [ 'Get', 'to', 'the', 'point' ]
console.log(longText.split(' ', 2));    // [ 'Get', 'to' ]




