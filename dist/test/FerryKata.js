"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = __importDefault(require("assert"));
const CarImpl_1 = __importDefault(require("../CarImpl"));
let car;
describe("FerryKata", function () {
    beforeEach(() => {
        car = new CarImpl_1.default();
    });
    it("should set and get a colour", () => {
        assert_1.default.equal("red", car.colour);
    });
});
