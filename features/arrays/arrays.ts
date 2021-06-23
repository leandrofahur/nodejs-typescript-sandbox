const carMakers = ["ford", "toyota", "chevy"];
const date = [new Date(), new Date()];

const carsByMake = [["ford"], ["corolla"], ["camaro"]];

// help with inference when extracting values:
const car = carMakers[0];
const myCar = carMakers.pop();

// prevent incompatible values:
// carMakers.push(100);

carMakers.map((car: string): string => {
  return car.toUpperCase();
});

// different values inside an array: (just hover the variable)
const importantDates: (Date | string)[] = [new Date(), "2030-10-10"];
