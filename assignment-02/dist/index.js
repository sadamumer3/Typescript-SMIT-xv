"use strict";
class Vehicle {
    constructor(make, model, year, rented) {
        this._make = make;
        this._model = model;
        this._year = year;
        this._rented = rented;
    }
    get make() {
        return this._make;
    }
    get model() {
        return this._model;
    }
    get year() {
        return this._year;
    }
    get rented() {
        return this._rented;
    }
    // ---------
    set make(newMake) {
        this._make = newMake;
    }
    set model(newModel) {
        this._model = newModel;
    }
    set year(newYear) {
        this._year = newYear;
    }
    set rented(newRented) {
        this._rented = newRented;
    }
    rent() {
        if (this.rented) {
            console.log("The vehicle (" + this._make + " " + this._model + ") is already rented.");
        }
        else {
            this.rented = true;
            console.log("The vehicle (" + this._make + " " + this._model + ") is now rented.");
        }
    }
    return() {
        if (this.rented) {
            this.rented = false;
            console.log("The vehicle (" + this._make + " " + this._model + ") has now been returned.");
        }
        else {
            console.log("The vehicle (" + this._make + " " + this._model + ") has already been returned.");
        }
    }
}
class Car extends Vehicle {
    constructor(make, model, year, rented, fuelType, numOfSeats) {
        super(make, model, year, rented);
        this._fuelType = fuelType;
        this._numOfSeats = numOfSeats;
    }
    get fuelType() {
        return this._fuelType;
    }
    get numOfSeats() {
        return this._numOfSeats;
    }
    // ---------
    set fuelType(newFuelType) {
        this.fuelType = newFuelType;
    }
    set numOfSeats(newNumOfSeats) {
        this._numOfSeats = newNumOfSeats;
    }
    rentalRate() {
        return 50;
    }
}
class Truck extends Vehicle {
    constructor(make, model, year, rented, loadCapacity, numOfTyres) {
        super(make, model, year, rented);
        this._loadCapacity = loadCapacity;
        this._numOfTyres = numOfTyres;
    }
    get loadCapacity() {
        return this._loadCapacity;
    }
    get numOfTyres() {
        return this._numOfTyres;
    }
    // ---------
    set loadCapacity(newLoadCapacity) {
        this._loadCapacity = newLoadCapacity;
    }
    set numOfTyres(newNumOfTyres) {
        this._numOfTyres = newNumOfTyres;
    }
    rentalRate() {
        return 90;
    }
}
class Bike extends Vehicle {
    constructor(make, model, year, rented, tankCapacity, rideStyle, breakType) {
        super(make, model, year, rented);
        this._tankCapacity = tankCapacity;
        this._rideStyle = rideStyle;
        this._breakType = breakType;
    }
    get rideStyle() {
        return this._rideStyle;
    }
    get breakType() {
        return this._breakType;
    }
    get tankCapacity() {
        return this._tankCapacity;
    }
    // ---------
    set rideStyle(newRideStyle) {
        this.rideStyle = newRideStyle;
    }
    set breakType(newBreakType) {
        this.breakType = newBreakType;
    }
    set tankCapacity(newTankCapacity) {
        this._tankCapacity = newTankCapacity;
    }
    rentalRate() {
        return 20;
    }
}
let car1 = new Car("Honda", "Civic", 2016, false, "Diesel", 4);
console.log(car1.model);
console.log("type of fuel: " + car1.fuelType);
car1.rent();
car1.return();
console.log("");
let truck1 = new Truck("Foton", "Master M-280", 2021, false, 3, 8);
console.log(truck1.model);
truck1.return();
truck1.rent();
console.log("rental rate for truck: " + truck1.rentalRate());
console.log("");
let bike1 = new Bike("Unique", "CD-125", 2017, false, 18, "Upright", "Drum");
console.log(bike1.model);
bike1.rent();
bike1.return();
bike1.return();
console.log("is bike rented: " + bike1.rented);
//# sourceMappingURL=index.js.map