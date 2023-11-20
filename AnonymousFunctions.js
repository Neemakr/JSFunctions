let a = function(){
    console.log("Hi I'm anonymus expression function");
}
a();

//Passing arguments to anonymous function
let b = function(name){
    console.log("Hi" + " " + name + " " + "I'm anonymous function with name")
}
b("Sanvyyyy");

//Self executing anonymous function
(function (){
    console.log("Hi I'm Self executing anonymous function")
})();

//Arrow functions
let c = () => {
    console.log("Hi I'm an Arrow function")
}
c();

let d = () => console.log("Hi I'm Arrow function with single statement in the function body")
d();

let e = 44;
let f = () => e;
console.log(f());

( () => {
    console.log("Hi I'm self-invoking Arrow function")
}) ();