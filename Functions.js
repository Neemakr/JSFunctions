//Normal functions are hoisted
console.log(sum(2,3));
function sum(x, y){
    return x + y; 
}

//Functions with expressions are not hoisted 
/*console.log(i(8,9));
let i = function(x, y){
    return x * y;
}*/

//Arguments length
function Division(a,b,v,w){
    console.log(arguments);
    console.log(arguments.length);
}
Division(20,5,45,2);