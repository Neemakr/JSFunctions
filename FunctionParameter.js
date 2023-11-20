//If a function is called with missing arguments (less than declared), the missing values are set to undefined.
function sum(x,y){
    return x + y;
}
console.log(sum(5));

function sum1(...args){
    let sum = 0;
    for (let arg of args) sum += arg;
    return sum; 
}
console.log(sum1(1,2,3,4,5));

function sum2(a, b, c, d){
    return(a + b + c + d);
}
let Arr = [454, 64, 645, 54, 541, 45]
console.log(sum2(...Arr));

//Sum of numbers using Arguments 
let sumAll = [1, 123, 500, 115, 44, 88];
function SumOfNumbers(){
    let sum = 0;
    for (let i = 0; i < arguments.length; i++){
        sum += arguments[i];
    }
    return sum;
}
console.log((SumOfNumbers(...sumAll)));