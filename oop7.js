class Car{
    constructor(brand, model, year){
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
    getCarInfo(){
        return `Normal Car - ${this.brand} ${this.model} (${this.year})`;
    }    
}

class RacingCar extends Car{
    constructor(brand, model, year, nitro){
        super(brand, model, year);
        this.nitro = nitro;
    }

    useNitro(){
        return "Nitro used!";
    }

    getCarInfo(){
        return `Racing Car - ${this.brand} ${this.model} (${this.year})`;
    } 
}


const rc1 = new RacingCar("Ferrari", "F1", 2021);
console.log(rc1.getCarInfo()); //Ferrari F1 (2021)
console.log(rc1.useNitro()); //Nitro used!


const c1 = new Car("Toyota", "Corolla", 2015);
console.log(c1.getCarInfo()); //Toyota Corolla (2015)
