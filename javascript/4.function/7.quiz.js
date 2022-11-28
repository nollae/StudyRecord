// 주어진 숫자만큼 0부터 순회하는 함수
// 순회하면서 주어진 특정한 일을 수행해야 함
// 5, 순회하는 숫자를 다 출력하고 싶음
// 5, 순회하는 숫자의 두 배값을 다 출력하고 싶음

function _iterate(max, action){
    for(let i = 0; i < max; i++){
        action(i);
    }
}

function log(num){
    console.log(num);
}
function doubleAndLog(num){
    console.log(num*2);
}
_iterate(3, log);
_iterate(3, (num) => console.log(num));

_iterate(3, doubleAndLog);
_iterate(3, (num) => console.log(num * 2));

// 실제 사용 예 
setTimeout(() => {
    console.log('1초 뒤 실행됩니다.');
}, 1000);

