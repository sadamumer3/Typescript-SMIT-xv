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
    set make(m) {
        this._make = m;
    }
    set model(m) {
        this._model = m;
    }
    set year(m) {
        this._year = m;
    }
    set rented(m) {
        this._rented = m;
    }
    rent() {
        if (this.rented) {
            console.log("This vehicle is already rented.");
        }
        else {
            this.rented = true;
            console.log("This vehicle is now rented.");
        }
    }
    return() {
        if (this.rented) {
            this.rented = false;
            console.log("This vehicle has now been returned.");
        }
        else {
            console.log("This vehicle has already been returned.");
        }
    }
}
class Car extends Vehicle {
    rentalRate() {
        return 60;
    }
}
class Truck extends Vehicle {
    rentalRate() {
        return 80;
    }
}
class Bike extends Vehicle {
    constructor(make, model, year, rented, qual) {
        super(make, model, year, rented);
        this._qual = qual;
    }
    get() {
        console.log(this.make);
    }
    rentalRate() {
        return 30;
    }
}
let b1 = new Bike(13, 45, 67, false, "good");
b1.rent();
b1.return();
b1.return();
console.log(b1.rented);
//# sourceMappingURL=index.js.map