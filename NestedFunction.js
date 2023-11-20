function a(){
    var x = 9;
    function b(){
        console.log(x);
        var x = 99;//if we use this inside a function first it checks for x in this function
    }
    b();
}
a();

var x = 23;
(function(){
    var x = 43;
    (function random(){
        x++;
        console.log(x);
        var x = 55;
    })();
})();