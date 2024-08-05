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
        this.carTripsMap = new Map();
    }
    board(car) {
        if (this.car_count >= this.numberOfCars ||
            this.people_count >= this.numberOfPeople) {
            return "rejected";
        }
        this.cars.push(car);
        this.car_count++;
        this.people_count += car.passengerCount;
        // Initialize trips for the car if not already tracked
        if (!this.carTripsMap.has(car.id)) {
            this.carTripsMap.set(car.id, 0);
        }
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
    getCarTrips(carId) {
        return this.carTripsMap.get(carId) || 0;
    }
    incrementCarTrips(carId) {
        let currentTrips = this.getCarTrips(carId);
        this.carTripsMap.set(carId, currentTrips + 1);
    }
}
exports.default = FerryImpl;
