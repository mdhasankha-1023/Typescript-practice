// Problem 1: Create a type called `Car` with `brand` and `model`. Create a type called `Electric` with
// `batteryLife`. Create a type `ElectricCar` using intersection. Then, create an object of type
// `ElectricCar`.

{
    type Car = {
        brand: string;
        model: string;
    }

    type Electric = {
        batteryLIfe: string;
    }

    type ElectricCar = Car | Electric;

    const carBuild : ElectricCar = {
        batteryLIfe : "good",
        brand : "Tyota",
        model: "Bw457"
    }
    
    console.log(carBuild)
}