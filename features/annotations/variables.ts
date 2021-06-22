let apples = 5; // type inference, we don't need to do as the ones that folow.
let speed: string = "fast";
let hasName: boolean = true;
let nothingMuch: null = null;
let nothing: undefined = undefined;

// built in objects:
let now: Date = new Date();

// array:
let colors: string[] = ["red", "green", "blue"];
let myNumbers: number[] = [1, 2, 3, 4, 5, 6, 7];
let myBooleans: boolean[] = [true, false, true];

// Classes
class Car {}
let car: Car = new Car();

// Object literal:
let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

// Function:
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};
