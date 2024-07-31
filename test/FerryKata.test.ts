import assert from "assert";
import CarImpl from "../CarImpl";
import FerryImpl from "../FerryImpl";
import { ICar } from "../ICar";
import { IFerry } from "../IFerry";

let car: ICar;
let ferry: IFerry;

describe("FerryKata", function () {
  beforeEach(() => {
    car = new CarImpl();
    ferry = new FerryImpl();
  });
  describe("The Car Implementation", () => {
    it("should set & get the colour", () => {
      car = new CarImpl("red", 0);
      assert.equal("red", car.colour);
      car = new CarImpl("blue", 0);
      assert.equal("blue", car.colour);
    });
    it("should set & get both the passenger count & colour", () => {
      car = new CarImpl("red", 2);
      assert.deepEqual({ colour: "red", passengerCount: 2 }, car);
      car = new CarImpl("blue", 4);
      assert.deepEqual({ colour: "blue", passengerCount: 4 }, car);
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
      const car = ferry.board({ colour: "red", passengerCount: 4 });
      assert.equal("accepted", car);
      assert.deepEqual(
        [{ colour: "red", passengerCount: 4 }],
        ferry.carsList()
      );
      // Check for people count
      assert.equal(4, ferry.people_count);
      // Check for car count
      assert.equal(1, ferry.car_count);
    });
    it("should reject boarding cars", () => {
        ferry = new FerryImpl(1, 4);
        ferry.board({ colour: "red", passengerCount: 4 });
        assert.equal(1, ferry.carsList().length);
        const car = ferry.board({ colour: "blue", passengerCount: 4 });
        assert.equal("rejected", car);
    });
  });
});
