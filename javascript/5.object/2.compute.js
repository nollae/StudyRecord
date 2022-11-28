const obj = {
    name: '뉴진스',
    age: 18,
};
// 코딩하는 시점에, 정적으로 접근이 확정됨
obj.name;
obj.age;

// 동적으로 속성에 접근하고 싶을 때 대괄호 표기법 사용!
function getValue(obj, key){
    return obj[key];
}

console.log(getValue(obj, 'name'));

function addKey(obj, key, value){
    obj[key] = value;
}
addKey(obj, 'job', 'engineer');
console.log(obj);

function delKey(obj, key){
    delete obj[key];
}
delKey(obj, 'job');
console.log(obj);

