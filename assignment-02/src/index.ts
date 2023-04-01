abstract class Vehicle
{
    private _make:number;
    private _model:number;
    private _year:number;
    private _rented:boolean;
    
    constructor(make:number,model:number,year:number,rented:boolean)
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
    set make(m:number)
    {
        this._make = m;
    }
    set model(m:number)
    {
        this._model = m;
    }
    set year(m:number)
    {
        this._year = m;
    }
    set rented(m:boolean)
    {
        this._rented = m;
    }


    abstract rentalRate():number;

    rent():void
    {
        if(this.rented)
        {
            console.log("This vehicle is already rented.");
        }
        else
        {
            this.rented= true;
            console.log("This vehicle is now rented.");
        }
    }
    return():void
    {
        if(this.rented)
        {
            this.rented= false;
            console.log("This vehicle has now been returned.");
        }
        else
        {
            console.log("This vehicle has already been returned.");
        }
    }

}

class Car extends Vehicle
{

    rentalRate(): number 
    {
        return 60;
    }
}

class Truck extends Vehicle
{

    rentalRate(): number 
    {
        return 80;
    }
}

class Bike extends Vehicle
{
    private _qual:string;

    constructor(make:number,model:number,year:number,rented:boolean,qual:string)
    {
       super(make,model,year,rented);
       this._qual = qual;
    }

    get()
    {
        console.log(this.make);
    }

    rentalRate(): number {
        return 30;
    }
}

let b1 = new Bike(13,45,67,false,"good");

b1.rent();
b1.return();
b1.return();

console.log(b1.rented);