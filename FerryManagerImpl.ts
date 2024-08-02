import FerryImpl from "./FerryImpl";
import { ICar } from "./ICar";
import { IFerry } from "./IFerry";

export default class FerryManager extends FerryImpl implements IFerry {
    constructor(numberOfCars: number = 0, numberOfPeople: number = 0, cars: ICar[] = []){
        super(numberOfCars, numberOfPeople, cars);
    };
    public carsWithColor(color: string): number | boolean {
        let colorCount: number = 0;
        for (let car of this.cars) {
            if (car.colour === color) {
                colorCount++;
            }
        }
        if (colorCount) return colorCount;
        return false;
    }
    public leaveFerry(id: number): boolean {
        if (!id) return false;
        for (let i = 0; i < this.cars.length; i++) {
            if (this.cars[i].id === id) {
                // Update the numbersOfCars & numberOfPeople variables
                this.numberOfCars--;
                this.numberOfPeople -= this.cars[i].passengerCount;
                this.cars.splice(i, 1);
                return true;
            }
        }
        return false;
    }
    // giving a car 50% discount after three trips on the same ferry. The board method should return ‘half price!’;
    // giving a free trip after 7 trips on any Ferry. The board method should return ‘you go free!’
}