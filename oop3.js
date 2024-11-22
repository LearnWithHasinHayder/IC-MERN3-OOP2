class Person{
    fname
    lname
    constructor(firstName = "Guest", lastName = "Guest"){
        this.fname = firstName
        this.lname = lastName
        console.log("Person constructor called")
    }
    getFullName(){
        return this.fname + " " + this.lname
    }
}


const p1  = new Person("John", "Doe") //instantiate
const p2 = new Person()
console.log(p1.getFullName()) //John Doe
console.log(p2.getFullName()) //undefined undefined