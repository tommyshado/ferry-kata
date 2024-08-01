import assert from "assert";
import CarImpl from "../CarImpl";
import FerryImpl from "../FerryImpl";
import FerryManager from "../FerryManagerImpl";
import { ICar } from "../ICar";
import { IFerry } from "../IFerry";

let car: ICar;
let ferry: IFerry;
let ferryManager: IFerry;

describe("FerryKata", function () {
  beforeEach(() => {
    car = new CarImpl();
    ferry = new FerryImpl();
    ferryManager = new FerryManager();
  });
  describe("The Car Implementation", () => {
    it("should set & get the colour", () => {
      car = new CarImpl(1, "red", 0);
      assert.equal("red", car.colour);
      car = new CarImpl(2, "blue", 0);
      assert.equal("blue", car.colour);
    });
    it("should set & get both the passenger count & colour", () => {
      car = new CarImpl(1, "red", 2);
      assert.deepEqual({ id: 1, colour: "red", passengerCount: 2 }, car);
      car = new CarImpl(2, "blue", 4);
      assert.deepEqual({ id: 2, colour: "blue", passengerCount: 4 }, car);
    });
  });
  describe("The Ferry Implementation", () => {
    it("should set & get the number of cars", () => {
      ferry = new FerryImpl(2, 0);
      assert.equal(2, ferry.numberOfCars);
    });
    it("should set & get both the number of cars & people", () => {
      ferry = new FerryImpl(2, 8);
      assert.deepEqual(
        {
          numberOfCars: 2,
          numberOfPeople: 8,
          car_count: 0,
          cars: [],
          people_count: 0,
        },
        ferry
      );
    });
    it("should board cars", () => {
      ferry = new FerryImpl(10, 25);
      const car = ferry.board({ id: 1, colour: "red", passengerCount: 4 });
      assert.equal("accepted", car);
      assert.deepEqual(
        [{ id: 1, colour: "red", passengerCount: 4 }],
        ferry.carsList()
      );
      // Check for people count
      assert.equal(4, ferry.people_count);
      // Check for car count
      assert.equal(1, ferry.car_count);
    });
    it("should reject boarding cars", () => {
      ferry = new FerryImpl(1, 4);
      ferry.board({ id: 1, colour: "red", passengerCount: 4 });
      assert.equal(1, ferry.carsList().length);
      const car = ferry.board({ id: 2, colour: "blue", passengerCount: 4 });
      assert.equal("rejected", car);
    });
  });
  describe("The FerryManager implementation", () => {
    it("should find the number of cars with a color", () => {
      const carsList = [
        { id: 1, colour: "orange", passengerCount: 2 },
        { id: 2, colour: "red", passengerCount: 4 },
        { id: 3, colour: "black", passengerCount: 2 },
        { id: 4, colour: "green", passengerCount: 4 },
      ];
      ferryManager = new FerryManager(10, 15, carsList);
      assert.equal(1, ferryManager.numberOfCarsWithColor?.("black"));
    });
    it("should return false if a car is not found", () => {
      const carsList = [
        { id: 1,colour: "orange", passengerCount: 2 },
        { id: 2,colour: "red", passengerCount: 4 },
        { id: 3,colour: "black", passengerCount: 2 },
        { id: 4,colour: "green", passengerCount: 4 },
      ];
      ferryManager = new FerryManager(10, 15, carsList);
      assert.equal(false, ferryManager.numberOfCarsWithColor?.("brown"));
    });
    it("should leave a ferry", () => {
      const carsList = [
        { id: 1,colour: "orange", passengerCount: 2 },
        { id: 2,colour: "red", passengerCount: 4 },
        { id: 3,colour: "black", passengerCount: 2 },
        { id: 4,colour: "green", passengerCount: 4 },
      ];
      ferryManager = new FerryManager(10, 15, carsList);
      let leftFerry = ferryManager.leaveFerry?.(5);
      assert.equal(false, leftFerry);
      leftFerry = ferryManager.leaveFerry?.(0);
      assert.equal(false, leftFerry);
      leftFerry = ferryManager.leaveFerry?.(1);
      assert.equal(true, leftFerry);
    });
    it("should leave a ferry & update the number of cars & people", () => {
      const carsList = [
        { id: 1,colour: "orange", passengerCount: 2 },
        { id: 2,colour: "red", passengerCount: 4 },
        { id: 3,colour: "black", passengerCount: 2 },
        { id: 4,colour: "green", passengerCount: 4 },
      ];
      ferryManager = new FerryManager(10, 15, carsList);
      let leftFerry = ferryManager.leaveFerry?.(2)
      assert.equal(true, leftFerry);
      assert.equal(9, ferryManager.numberOfCars);
      assert.equal(11, ferryManager.numberOfPeople);
    });
  });
});
