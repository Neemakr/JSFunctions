const person = {
    firstName : "John",
    fullName : function(){
        return this.firstName + this.lastName;
    }
}
const person1 = {
    firstName : "Mary",
    lastName : "Doe"
}

//Caliing fullName with person1 as an argument
console.log(person.fullName.call(person1));

//With Arguments
const person2 = {
    FullDetails : function(city, country){
        return this.firstName + " " + this.lastName + " " + city + " " + country;
    }
}
const person3 = {
    firstName : "John",
    lastName : "daniel"
}
console.log(person2.FullDetails.call(person3, "Oslo", "Norway"));