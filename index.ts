// Basic Types
let id: number = 5;
let company: string = 'Stelar Ventures';
let isActive: boolean = true;

console.log('ID:', id);

// Tuple
let person: [number, string, boolean] = [5, 'Steve', true];
// Tuple Array
let employee: [number, string][];

employee = [
  [1, 'Steve'],
  [2, 'John'],
  [3, 'Larsen'],
];

// Union
let productId: string | number = 22;

productId = '22';

// Enum
enum Direction {
  Up,
  Down,
  Left,
  Right = 'Right',
}
console.log(Direction.Up);
console.log(Direction.Down);
console.log(Direction.Left);
console.log(Direction.Right);

// Objects
type User = {
  id: number;
  name: string;
};

const user: User = {
  id: 1,
  name: 'Steve',
};

console.log(user);

// Type Assertion
let cid: any = 1;
// let customerId = <number>cid;
let customerId = cid as number;

customerId = 22;

// Functions
function addNum(x: number, y: number): number {
  return x + y;
}
console.log(addNum(10, 15));

// Void
function log(message: string | number): void {
  console.log(message);
}

log('Hello');

// Interfaces
interface Player {
  readonly id: number; // readonly cannot be changed
  name: string;
  age?: number; // question mark makes it optional
}

const player: Player = {
  id: 42,
  name: 'Steve',
};

console.log(player);

interface MathFunction {
  (x: number, y: number): number;
}

const add: MathFunction = (x, y) => x + y;

// Interface for class below
interface PersonInterface {
  id: number;
  name: string;
  register(): string;
}

// Classes
class Person implements PersonInterface {
  id: number;
  name: string;

  constructor(id: number, name: string) {
    // constructor method runs when class is instantiated
    this.id = id;
    this.name = name;
  }

  register() {
    return `${this.name} is registered`;
  }
}

const steve = new Person(1, 'Steve');
const dawn = new Person(2, 'Dawn');

console.log(steve.register());

console.log(steve);
console.log(dawn);

// Subclasses - class inheritance
class Employee extends Person {
  position: string;

  constructor(id: number, name: string, position: string) {
    super(id, name);
    this.position = position;
  }
}

const emp = new Employee(3, 'John', 'Manager');

console.log(emp.register());

// Generics - build reusable components
function getArray<T>(items: T[]): T[] {
  return new Array().concat(items);
}

let numArray = getArray<number>([1, 2, 3, 4]);
let strArray = getArray<string>(['a', 'b', 'c', 'd']);

strArray.push('string');
console.log(strArray);

// Static Properties
class Utils {
  width: number = 100;
  static height: number = 200;
}

let utils = new Utils();
console.log(Utils.height);

// Abstract Classes cannot be instantiated
abstract class StreetFighter {
  constructor() {}

  move() {}
  fight() {
    console.log(`attack with ${this.getSpecialMove()}`);
  }

  abstract getSpecialMove(): string; // method is of type abstract
}

class Ryu extends StreetFighter {
  getSpecialMove(): string {
    return 'Hadouken';
  }
}

const ryu = new Ryu();
console.log(ryu.getSpecialMove());
ryu.fight();

// Duck-Typing provides type safety in Typescript code
// Is a method to compare one object to another by checking if they have the same type matching names
class Swimmer {
  sport = 'swimming';
}

class Sprinter {
  sport = 'running';
}

class Athlete {
  sport = 'running';

  poleVault() {
    console.log('I can pole vault');
  }
}

let sprinter: Sprinter = new Swimmer();
let swimmer: Swimmer = new Sprinter();
// let athlete: Athlete = new Sprinter(); // cannot substtitute Sprinter for Athlete because Athlete has a poleVault method

// Excess property checks
// When TypeScript encounters object literal in assignments or when passed as an argument to functions it triggers an action called excess property checking.
class Person2 {
  name = 'Steve';
}

function sayMyName(person: Person2): void {
  console.log(person.name);
}

const personWithAge = { name: 'Steve', age: 22 };
sayMyName(personWithAge); // OK

sayMyName({ name: 'Steve' /* age: 47 */ }); // error because age does not exist on Person2

// Indexable Types
interface StringIndexed {
  [index: string]: string; // index is in brackets and type is outside brackets
}

function valByKey(values: StringIndexed, key: string): string {
  return values[key];
}

const rgb = {
  red: '100',
  blue: '010',
  green: '001',
};

// const relative = {
//   name: 'Steve',
//   age: 47,
// }

console.log(valByKey(rgb, 'red'));
// console.log(valByKey(relative, 'name')); // Error because age is a number, not a string

// Extending Interfaces
interface Animal {
  name: string;
}

interface Bear extends Animal {
  honey: boolean
}

let bear = {} as Bear;
bear.name = 'Yogi';
bear.honey = true;
console.log(bear);
console.log(bear.name);
console.log(bear.honey);