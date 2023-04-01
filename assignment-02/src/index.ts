abstract class Vehicle
{
    private _make:string;
    private _model:string;
    private _year:number;
    private _rented:boolean;
    
    constructor(make:string,model:string,year:number,rented:boolean)
    {
        this._make=make;
        this._model=model;
        this._year=year;
        this._rented=rented;
    }

    get make()
    {
        return this._make;
    }
    get model()
    {
        return this._model;
    }
    get year()
    {
        return this._year;
    }
    get rented()
    {
        return this._rented;
    }

    // ---------
    set make(newMake:string)
    {
        this._make = newMake;
    }
    set model(newModel:string)
    {
        this._model = newModel;
    }
    set year(newYear:number)
    {
        this._year = newYear;
    }
    set rented(newRented:boolean)
    {
        this._rented = newRented;
    }


    abstract rentalRate():number;

    rent():void
    {
        if(this.rented)
        {
            console.log("The vehicle ("+this._make+" "+this._model+") is already rented.");
        }
        else
        {
            this.rented= true;
            console.log("The vehicle ("+this._make+" "+this._model+") is now rented.");
        }
    }
    return():void
    {
        if(this.rented)
        {
            this.rented = false;
            console.log("The vehicle ("+this._make+" "+this._model+") has now been returned.");
        }
        else
        {
            console.log("The vehicle ("+this._make+" "+this._model+") has already been returned.");
        }
    }

}

type FuelType= "Gasoline" | "Diesel" | "Electric";
class Car extends Vehicle
{
    private _fuelType:FuelType;
    private _numOfSeats:number;

    constructor(make:string,model:string,year:number,rented:boolean,fuelType:FuelType,numOfSeats:number)
    {
       super(make,model,year,rented);
       this._fuelType = fuelType;
       this._numOfSeats = numOfSeats;
    }

    get fuelType()
    {
        return this._fuelType;
    }
    get numOfSeats()
    {
        return this._numOfSeats;
    }

    // ---------
    set fuelType(newFuelType:FuelType)
    {
        this.fuelType = newFuelType;
    }
    set numOfSeats(newNumOfSeats:number)
    {
        this._numOfSeats = newNumOfSeats;
    }


    rentalRate(): number 
    {
        return 50;
    }
}

class Truck extends Vehicle
{
    private _loadCapacity:number;    
    private _numOfTyres:number;

    constructor(make:string,model:string,year:number,rented:boolean,loadCapacity:number,numOfTyres:number)
    {
       super(make,model,year,rented);
       this._loadCapacity = loadCapacity;
       this._numOfTyres = numOfTyres;
    }

    get loadCapacity()
    {
        return this._loadCapacity;
    }
    get numOfTyres()
    {
        return this._numOfTyres;
    }
    // ---------
    set loadCapacity(newLoadCapacity:number)
    {
        this._loadCapacity = newLoadCapacity;
    }
    set numOfTyres(newNumOfTyres:number)
    {
        this._numOfTyres = newNumOfTyres;
    }


    rentalRate(): number 
    {
        return 90;
    }
}

type RideStyle= "Upright" | "Sport";
type BreakType= "Drum" | "Disc";
class Bike extends Vehicle
{
    private _tankCapacity:number;
    private _rideStyle:RideStyle;
    private _breakType:BreakType;

    constructor(make:string,model:string,year:number,rented:boolean,tankCapacity:number,rideStyle:RideStyle,breakType:BreakType)
    {
       super(make,model,year,rented);
       this._tankCapacity = tankCapacity;
       this._rideStyle = rideStyle;
       this._breakType = breakType;
    }

    get rideStyle()
    {
        return this._rideStyle;
    }
    get breakType()
    {
        return this._breakType;
    }
    get tankCapacity()
    {
        return this._tankCapacity;
    }

    // ---------
    set rideStyle(newRideStyle:RideStyle)
    {
        this.rideStyle = newRideStyle;
    }
    set breakType(newBreakType:BreakType)
    {
        this.breakType = newBreakType;
    }
    set tankCapacity(newTankCapacity:number)
    {
        this._tankCapacity = newTankCapacity;
    }

    
    rentalRate(): number {
        return 20;
    }
}

let car1 = new Car("Honda","Civic",2016,false,"Diesel",4);
console.log(car1.model);
console.log("type of fuel: "+car1.fuelType);
car1.rent();
car1.return();
console.log("");

let truck1 = new Truck("Foton","Master M-280",2021,false,3,8);
console.log(truck1.model);
truck1.return();
truck1.rent();
console.log("rental rate for truck: "+truck1.rentalRate());

console.log("");

let bike1 = new Bike("Unique","CD-125",2017,false,18,"Upright","Drum");
console.log(bike1.model);
bike1.rent();
bike1.return();
bike1.return();
console.log("is bike rented: "+bike1.rented);