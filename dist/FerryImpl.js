"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class FerryImpl {
    // @Constructor variable numberOfCars specifies the number of cars allowed into the ferry
    // @Constructor variable numberOfPeopl specifies the number of people allowed into the ferry
    constructor(numberOfCars = 0, numberOfPeople = 0, cars = []) {
        this.numberOfCars = numberOfCars;
        this.numberOfPeople = numberOfPeople;
        this.cars = cars;
        this.people_count = 0;
        this.car_count = 0;
    }
    board(car) {
        if (this.car_count >= this.numberOfCars || this.people_count >= this.numberOfPeople) {
            return "rejected";
        }
        this.cars.push(car);
        this.car_count++;
        this.people_count += car.passengerCount;
        return "accepted";
    }
    carsList() {
        return this.cars;
    }
    get peopleCount() {
        return this.people_count;
    }
    get carCount() {
        return this.car_count;
    }
}
exports.default = FerryImpl;
