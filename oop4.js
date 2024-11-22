class Person{
    fname
    lname
    age
    constructor(firstName = "Guest", lastName = "Guest", age=18){
        this.fname = firstName
        this.lname = lastName
        this.age = age
        console.log("Person constructor called")
    }
    getFullName(){
        return this.fname + " " + this.lname + " " + this.age
    }
}


const p1  = new Person("John", "Doe", 25) //instantiate
const p2 = new Person("Jane", "Doe", 23)
console.log(p1.getFullName()) //John Doe
console.log(p2.getFullName()) //undefined undefined
console.log(p1)