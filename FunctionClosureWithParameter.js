function add(x){
    return function inner(y){
        return x + y;
    }
}
let a = add(10);
console.log(a(15));

//Example 2 
function foo(outer_arg){
    function inner(inner_arg){
        return outer_arg + inner_arg;
    }
    return inner;
}
let x = foo(12);
console.log(x(45));

//Multiplication
function calculate(x){
    function multiply(y){
        return x *y;
    }
    return multiply;
}
let multiply1 = calculate(3);
console.log(multiply1);
console.log(multiply1());
console.log(multiply1(5));
console.log(multiply1(8));