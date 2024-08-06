# Ferry-Kata

[![Node.js CI](https://github.com/tommyshado/ferry-kata/actions/workflows/node.js.yml/badge.svg)](https://github.com/tommyshado/ferry-kata/actions/workflows/node.js.yml)

## Overview

This project simulates a ferry system in an island country. The goal is to manage the number of cars and passengers on ferries.

### Project Structure

* **CarImpl.ts**: Defines the Car class with properties for color and passenger count.
* **FerryImpl.ts**: Defines the Ferry class with methods for boarding cars, tracking passenger and car counts, and implementing discount and free trip logic.

### Classes

#### Car

* **Properties:**
  * `color` (string): Color of the car.
  * `passengerCount` (int): Number of passengers in the car.

#### Ferry

* **Properties:**

  * `numberOfCars` (int): Maximum number of cars allowed on the ferry.
  * `numberOfPeople` (int): Maximum number of passengers allowed on the ferry.
  * `car_count` (int): Current number of cars on the ferry.
  * `people_count` (int): Current number of people on the ferry.

* **Methods:**

  * `board(Car car)`: Attempts to board a car onto the ferry. Returns "accepted" if successful, "rejected" if full, "half price!" if the car qualifies for a discount, or "you go free!" if the car qualifies for a free trip.
  * `carsWithColor(string color)`: Returns the number of cars of a specific color on the ferry.
  * `leaveFerry(Car car)`: Removes a car from the ferry and updates passenger and car counts.

### Usage

1. Create Car objects with specified color and passenger count.
2. Create a Ferry object with specified car and passenger capacity.
3. Use the `board` method to attempt to board cars onto the ferry.
4. Use the `carsWithColor` method to check the number of cars of a specific color.
5. Use the `leaveFerry` method to remove a car from the ferry.

### Example Usage

```typescript
const car1 = new Car("red", 4);
const car2 = new Car("blue", 2);

const ferry = new Ferry(3, 10);

console.log(ferry.board(car1)); // Output: accepted
console.log(ferry.board(car2)); // Output: accepted

console.log(ferry.carsWithColor("red")); // Output: 1

ferry.leave(car1);

console.log(ferry.carsWithColor("red")); // Output: 0
```
