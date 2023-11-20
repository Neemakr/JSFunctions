//Counter Dilemma
//It can be easily overwritten by other code without calling count() function
let counter = 0;
function count(){
    counter += 1;
} 
count();
count();
count();
console.log(counter);

//It prints the global counter1 value instead of local counter
let counter1 = 0;
function count1(){
    let counter1 = 0;
    counter1 += 1; 
}
count1();
count1();
count1();
console.log(counter1);

//It resets the counter value everytime it is called
function Count2(){
    let counter2 = 0;
    counter2 += 1;
    console.log(counter2)
}
Count2();
Count2();
Count2();

//Self invoking functions for counter
let add = (function() {
    let counter = 0;
    return function(){
        counter += 1;
        return counter;
    }
})();
console.log(add());
console.log(add());
console.log(add());
console.log(add());

//Without self invoking we can store the function in one variable and access it
function sum(){
    let a = 0;
    return function increaseSum(){
        a += 1;
        return a;
    }
}
let x = sum();
console.log(x);
console.log(x());
console.log(x());
let a = 55;
console.log(x());
console.log(x());
console.log(a);