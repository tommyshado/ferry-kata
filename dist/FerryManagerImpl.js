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
    carsWithColor(color) {
        let colorCount = 0;
        for (let car of this.cars) {
            if (car.colour === color) {
                colorCount++;
            }
        }
        return colorCount;
    }
    leaveFerry(id) {
        if (!id)
            return false;
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
    handleBoarding(car) {
        const boardingResult = super.board(car);
        if (boardingResult === "accepted") {
            super.incrementCarTrips(car.id);
            const trips = super.getCarTrips(car.id);
            if (trips % 7 === 0) {
                return "you go free!";
            }
            else if (trips % 3 === 0) {
                return "half price!";
            }
            return "accepted";
        }
        else {
            return boardingResult;
        }
    }
}
exports.default = FerryManager;
