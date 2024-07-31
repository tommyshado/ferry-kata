import { ICar } from "./ICar";
import { IFerry } from "./IFerry";

export default class FerryImpl implements IFerry {
  public people_count: number = 0;
  public car_count: number = 0;
  // @Constructor variable numberOfCars specifies the number of cars allowed into the ferry
  // @Constructor variable numberOfPeopl specifies the number of people allowed into the ferry
  constructor(
    public numberOfCars: number = 0,
    public numberOfPeople: number = 0,
    private cars: ICar[] = []
  ) {}
  board(car: ICar): string {
    if (this.car_count >= this.numberOfCars || this.people_count >= this.numberOfPeople) {
        return "rejected";
    }
    this.cars.push(car);
    this.car_count++;
    this.people_count += car.passengerCount;
    return "accepted";
  }
  carsList(): ICar[] {
    return this.cars;
  }
  get peopleCount(): number {
    return this.people_count;
  }
  get carCount(): number {
    return this.car_count;
  }
}
