function outer(){
    let arr = [];
    for(let i = 0; i < 4; i++){
        arr[i] = function() {
            return i;
        }
    }
    return arr;
}
let get_arr = outer();
console.log(get_arr[0]());
console.log(get_arr[1]());