const add = (a: number, b: number): number => {
  return a + b;
};

const subtract = (a: number, b: number): number => {
  return a - b;
};

function divide(a: number, b: number): number {
  return a / b;
}

function multiply(a: number, b: number): number {
  return a * b;
}

const logger = (message: string): void => {
  console.log(message);
};

const throwError = (message: string): never => {
  throw new Error(message);
};

const throwError2 = (message: string): string => {
  if (!message) throw new Error(message);

  return message;
};
