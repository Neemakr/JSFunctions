//Global variable
let a = 4;
function display(){
    console.log(a);
}
display();

//Local variable
function show() {
    let b = 5;
    console.log(b);
}
show();

//console.log(b);

//decaring a variable without a declaration keyword (let, var, const) are always global
function hi(){
    c = 6;
}
hi();
console.log(c);

//Closure Example 1
function x(){
    return function y(){
        console.log("HI");
    }
}
console.log(x());

//Closure Example 2
function hello(){
    function b(){
        console.log("Hello!!!!!!");
    }
    return b();
}
hello();

//Closure Example 3
function xx(){
    function yy(){
        return ("HI");
    }
    return yy;
}
let aa = xx(); // returns y, but we aren't calling the y function
console.log(aa);
console.log(aa()); //If we want to call the function y just call the variable which returns the function y

//Closure Example 4
function foo(){
    let b = 100;
    function inner(){
        return b;
    }
    return inner();
}
console.log(foo());