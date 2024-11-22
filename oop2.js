class Person{
    fname
    lname
    getFullName(){
        return this.fname + " " + this.lname
    }
}


const p1  = new Person() //instantiate
p1.fname = "John"
p1.lname = "Doe"
console.log(p1.getFullName()) //John Doe