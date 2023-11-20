function a (){
    var i = 55;
    function b(){
        console.log(i);
    }
    return b();
}
console.log(a());

//Return directly
function d(){
    var j = 66;
    return function e(){
         console.log(j);
    }
}
console.log(d());

function f(){
    let k = 77;
    function g(){
        console.log(k);
    }
    return g;
}
let h = f();
console.log(h);
h();

//Return directly
function l(){
    let n = 88;
    return function m(){
        console.log(n);
    }
}
let o = l();
console.log(o);
o();