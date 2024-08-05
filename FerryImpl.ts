import { ICar } from "./ICar";
import { IFerry } from "./IFerry";

export default class FerryImpl implements IFerry {
  public people_count: number = 0;
  public car_count: number = 0;
  private carTripsMap: Map<number, number> = new Map();
  // @Constructor variable numberOfCars specifies the number of cars allowed into the ferry
  // @Constructor variable numberOfPeopl specifies the number of people allowed into the ferry
  constructor(
    public numberOfCars: number = 0,
    public numberOfPeople: number = 0,
    protected cars: ICar[] = []
  ) {}
  public board(car: ICar): string {
    if (
      this.car_count >= this.numberOfCars ||
      this.people_count >= this.numberOfPeople
    ) {
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
  public carsList(): ICar[] {
    return this.cars;
  }
  get peopleCount(): number {
    return this.people_count;
  }
  get carCount(): number {
    return this.car_count;
  }
  public getCarTrips(carId: number): number {
    return this.carTripsMap.get(carId) || 0;
  }
  public incrementCarTrips(carId: number): void {
    let currentTrips = this.getCarTrips(carId);
    this.carTripsMap.set(carId, currentTrips + 1);
  }
}
