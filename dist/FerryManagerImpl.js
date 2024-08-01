"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const FerryImpl_1 = __importDefault(require("./FerryImpl"));
class FerryManager extends FerryImpl_1.default {
    constructor(numberOfCars = 0, numberOfPeople = 0, cars = []) {
        super(numberOfCars, numberOfPeople, cars);
    }
    ;
    numberOfCarsWithColor(color) {
        let colorCount = 0;
        for (let car of this.cars) {
            if (car.colour === color) {
                colorCount++;
            }
        }
        if (colorCount)
            return colorCount;
        return false;
    }
    leaveFerry(id) {
        if (!id)
            return false;
        for (let i = 0; i < this.cars.length; i++) {
            if (this.cars[i].id === id) {
                this.cars.splice(i, 1);
                // Update the numbersOfCars & numberOfPeople variables
                this.numberOfCars--;
                this.numberOfPeople -= this.cars[i].passengerCount;
                return true;
            }
        }
        return false;
    }
}
exports.default = FerryManager;
