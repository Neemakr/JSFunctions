class Add{
    constructor(name){
        this.name = name;
    }
    get getName(){
        console.log("Hi world!!!!")
    }
    static hello(){
        console.log("hello")
    }
    static helloAge(age, x){
        console.log("Hi I'm" + age + x.name);
    }
}
class Extender extends Add{
    
}
let a = new Extender("Neema");
console.log(a.name);
a.getName;
Add.hello();
Add.helloAge(55, a);