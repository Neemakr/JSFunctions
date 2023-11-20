//a is just a reference in the inner function
function x (){
    var a = 7;
    function y(){
        console.log(a);
    }
    var a = 100;
    return y;
}
let z = x();
z();

//Accessing parent's parent's variable
function a(){
    var i = 900;
    function b(){
        var j = 500;
        function c(){
            console.log(i,j);
        }
        c();
    }
    b();
}
a();