export function printToFile(text: string, callback: () => void): void {
  console.log(text);
  callback();
}

// function types
type MutationFunction = (v: number) => number;

export function arrayMutate(
  numbers: number[],
  mutate: MutationFunction
): number[] {
  return numbers.map(mutate);
}

console.log(arrayMutate([1, 2, 3], (v) => v * 10));

// Functions that return functions
// closure
export function createAdder(num: number): (val: number) => number {
  return (val: number) => val + num;
}
const addOne = createAdder(1);
console.log(addOne(55));