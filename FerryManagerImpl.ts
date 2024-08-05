import FerryImpl from "./FerryImpl";
import { ICar } from "./ICar";
import { IFerry } from "./IFerry";

export default class FerryManager extends FerryImpl implements IFerry {
    constructor(numberOfCars: number = 0, numberOfPeople: number = 0, cars: ICar[] = []){
        super(numberOfCars, numberOfPeople, cars);
    };
    public carsWithColor(color: string): number {
        let colorCount: number = 0;
        for (let car of this.cars) {
            if (car.colour === color) {
                colorCount++;
            }
        }
        return colorCount;
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
    public handleBoarding(car: ICar): string {
        const boardingResult = super.board(car);
        if (boardingResult === "accepted") {
            super.incrementCarTrips(car.id);
            const trips = super.getCarTrips(car.id);
            if (trips >= 7) {
                return "you go free!";
            } else if (trips >= 3) {
                return "half price!";
            }
            return "accepted";
        } else {
            return boardingResult;
        }
    }
}