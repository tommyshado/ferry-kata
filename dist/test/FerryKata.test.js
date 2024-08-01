"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = __importDefault(require("assert"));
const CarImpl_1 = __importDefault(require("../CarImpl"));
const FerryImpl_1 = __importDefault(require("../FerryImpl"));
const FerryManagerImpl_1 = __importDefault(require("../FerryManagerImpl"));
let car;
let ferry;
let ferryManager;
describe("FerryKata", function () {
    beforeEach(() => {
        car = new CarImpl_1.default();
        ferry = new FerryImpl_1.default();
        ferryManager = new FerryManagerImpl_1.default();
    });
    describe("The Car Implementation", () => {
        it("should set & get the colour", () => {
            car = new CarImpl_1.default("red", 0);
            assert_1.default.equal("red", car.colour);
            car = new CarImpl_1.default("blue", 0);
            assert_1.default.equal("blue", car.colour);
        });
        it("should set & get both the passenger count & colour", () => {
            car = new CarImpl_1.default("red", 2);
            assert_1.default.deepEqual({ colour: "red", passengerCount: 2 }, car);
            car = new CarImpl_1.default("blue", 4);
            assert_1.default.deepEqual({ colour: "blue", passengerCount: 4 }, car);
        });
    });
    describe("The Ferry Implementation", () => {
        it("should set & get the number of cars", () => {
            ferry = new FerryImpl_1.default(2, 0);
            assert_1.default.equal(2, ferry.numberOfCars);
        });
        it("should set & get both the number of cars & people", () => {
            ferry = new FerryImpl_1.default(2, 8);
            assert_1.default.deepEqual({
                numberOfCars: 2,
                numberOfPeople: 8,
                car_count: 0,
                cars: [],
                people_count: 0,
            }, ferry);
        });
        it("should board cars", () => {
            ferry = new FerryImpl_1.default(10, 25);
            const car = ferry.board({ colour: "red", passengerCount: 4 });
            assert_1.default.equal("accepted", car);
            assert_1.default.deepEqual([{ colour: "red", passengerCount: 4 }], ferry.carsList());
            // Check for people count
            assert_1.default.equal(4, ferry.people_count);
            // Check for car count
            assert_1.default.equal(1, ferry.car_count);
        });
        it("should reject boarding cars", () => {
            ferry = new FerryImpl_1.default(1, 4);
            ferry.board({ colour: "red", passengerCount: 4 });
            assert_1.default.equal(1, ferry.carsList().length);
            const car = ferry.board({ colour: "blue", passengerCount: 4 });
            assert_1.default.equal("rejected", car);
        });
    });
    describe("The FerryManager implementation", () => {
        it("should find the number of cars with a color", () => {
            const carsList = [
                { colour: "orange", passengerCount: 2 },
                { colour: "red", passengerCount: 4 },
                { colour: "black", passengerCount: 2 },
                { colour: "green", passengerCount: 4 },
            ];
            ferryManager = new FerryManagerImpl_1.default(10, 15, carsList);
            assert_1.default.equal(1, ferryManager.numberOfCarsWithColor("black"));
        });
        it("should return false if a car is not found", () => {
            const carsList = [
                { colour: "orange", passengerCount: 2 },
                { colour: "red", passengerCount: 4 },
                { colour: "black", passengerCount: 2 },
                { colour: "green", passengerCount: 4 },
            ];
            ferryManager = new FerryManagerImpl_1.default(10, 15, carsList);
            assert_1.default.equal(false, ferryManager.numberOfCarsWithColor("brown"));
        });
    });
});
