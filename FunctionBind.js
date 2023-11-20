/*Function Borrowing is done by bind so we have to first store the bind method into one variable and use that variable as a function 
and invoke the function by using parenthesis*/
const person = {
    display : function(place, age) {
        return this.firstName + " " + this.lastName + " " + place + " " + age;
    }
}
const person1 = {
    firstName : "John",
    lastName : "Joe"
}
let Name = person.display.bind(person1, "Norway", 55);
console.log(Name());