let userName: string = 'Steve';
let hasLoggedIn: boolean = true;

userName = 'Steve';

console.log(hasLoggedIn);

let myNumber: number = 10;

let myRegex: RegExp = /foo/;

// Arrays
const names: string[] = userName.split('');
// generic array
const myValues: Array<number> = [1, 2, 3];

// use Interface so you don't have to define the type multiple times
interface Person {
  first: string;
  last: string;
}
const myPerson: Person = {
  first: 'Steve',
  last: 'Larsen',
};

// objects
// const myPerson: {
//   first: string;
//   last: string;
// } = {
//   first: 'Steve',
//   last: 'Larsen',
// };
console.log(myPerson.first);

// utility types
const ids: Record<number, string> = {
  10: 'a',
  20: 'b',
};
ids[30] = 'c';

// conditionals
if (ids[30] === 'd') {
}
// Loops
for (let i = 0; i < 10; i++) {
  console.log(i);
}

[1, 2, 3].forEach((v) => console.log(v));
const out = [4, 5, 6].map((v) => v * 10);
console.log(out);
