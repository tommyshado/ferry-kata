"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CarImpl {
    // @Constructor variable colour specifies the colour of the car
    // @Constructor variable passengerCount specifies the number of passengers in the car
    constructor(id = 0, colour = "", passengerCount = 0) {
        this.id = id;
        this.colour = colour;
        this.passengerCount = passengerCount;
    }
}
exports.default = CarImpl;
