const person = {
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
}
  
const person1 = {
    firstName: "Mary",
    lastName: "Doe"
}
  
// This will return "Mary Doe":
console.log(person.fullName.apply(person1)); 

//Apply with arguments
const person2 = {
    fullName: function(city, country) {
      return this.firstName + " " + this.lastName + "," + city + "," + country;
    }
}
  
const person3 = {
    firstName:"John",
    lastName: "Doe"
}
  
console.log(person2.fullName.apply(person3, ["Oslo", "Norway"]));