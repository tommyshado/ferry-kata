import { ICar } from "./ICar";

export default class CarImpl implements ICar {
  // @Constructor variable colour specifies the colour of the car
  // @Constructor variable passengerCount specifies the number of passengers in the car
  constructor(public id: number = 0, public colour: string = "", public passengerCount: number = 0) {}
}
