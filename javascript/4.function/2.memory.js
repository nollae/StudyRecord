function add(a, b){
    console.log(a);
    console.log(b);
    return a+b;
}

const sum = add;

console.log(add(1,2));
console.log(sum(1,2));

