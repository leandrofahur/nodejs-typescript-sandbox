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

// When to use annotations:
// 1) function that returns the 'any' type
const json = '{"x":10,"y":20}';
const coordinates: { x: number; y: number } = JSON.parse(json);
console.log(coordinates);

// 2) when we declare a variable on one line
// and initialize it laters
let words = ["red", "green", "blue"];
let foundWord = false;

for (let i = 0; i < words.length; i++) {
  if (words[i] === "green") {
    foundWord = true;
  }
}

// 3) Whenever we have a variable whoose type cannot be inferred
let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i];
  }
}
