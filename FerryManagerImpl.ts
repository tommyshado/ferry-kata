import FerryImpl from "./FerryImpl";
import { ICar } from "./ICar";
import { IFerryManager } from "./IFerryManager";

export default class FerryManager extends FerryImpl implements IFerryManager {
    constructor(numberOfCars: number = 0, numberOfPeople: number = 0, cars: ICar[] = []){
        super(numberOfCars, numberOfPeople, cars);
    };
    public numberOfCarsWithColor(color: string): number | boolean {
        let colorCount: number = 0;
        for (let car of this.cars) {
            if (car.colour === color) {
                colorCount++;
            }
        }
        if (colorCount) return colorCount;
        return false;
    }
}