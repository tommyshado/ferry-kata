import { ICar } from "./ICar";

export interface IFerry {
    readonly numberOfCars: number;
    readonly numberOfPeople: number;
    readonly people_count: number;
    readonly car_count: number;
    board(car: ICar): string;
    carsList(): ICar[];
}