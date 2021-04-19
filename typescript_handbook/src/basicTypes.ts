// Reference: https://www.typescriptlang.org/docs/handbook/2/everyday-types.html

// string, number and boolean are primitive types
const someName = 'John Doe';
const someNumber: number = 42;
const someBool: boolean = true;

console.log(typeof someName, typeof someNumber, typeof someBool);

const numericValues: number[] = [1, 2, 3];

let anyObj: any = { x: 0 };

// typescript can infer the return type. But remember explicit is always
// better than implicit
function lowercase(text: string): string {
  return text.toLowerCase();
}

console.log(lowercase('ABC'));

// anonymous functions
// in the below anonymous functions and lambdas, typescript
// infers the parameter types
const names: string[] = ['John', 'Jane', 'Josh'];

// we could use anonymous functions
names.forEach(function (s) {
  console.log(s.toUpperCase());
});

// we could also use arrow functions/lambdas
names.forEach((s) => {
  console.log(s.toUpperCase());
});

names.map((s) => s.toUpperCase()).forEach((s) => console.log(s));

// object type
// javascript object with properties
function printCoord(pt: { x: number; y: number }): void {
  console.log(pt.x, pt.y);
}

printCoord({ x: 3, y: 7 });

// default parameters
// we cannot use named arguments like we do in python
function sayHelloTo(name: string, greet: string = 'Hi') {
  console.log(`${greet}, ${name}`);
}

// variable arguments
function sayHelloToAll(greet: string, ...names: string[]) {
  console.log(`${greet}, ${names.join(',')}`);
}

// optional parameters
function printName1(first: string, last?: string): void {
  console.log(first);

  // to compare undefined we need to use !== and ===
  if (last !== undefined) {
    console.log(last);
  }

  // modern syntax
  console.log(last?.toUpperCase());
}

// optional properties
// similar to python typing.Optional
function printName2(name: { first: string; last?: string }): void {
  console.log(name.first);

  // to compare undefined we need to use !== and ===
  if (name.last !== undefined) {
    console.log(name.last);
  }

  // modern syntax
  console.log(name.last?.toUpperCase());
}

// union type
// similar to python typing.Union
function printId(id: number | string): void {
  // this is referred to as narrowing
  if (typeof id === 'string') {
    console.log(id.toUpperCase());
  } else {
    console.log(id);
  }
}

// type aliases

type Point = {
  x: number;
  y: number;
};

type ID = number | string;

function printPoint(pt: Point): void {
  console.log(pt.x, pt.y);
}

// Interfaces
interface Person {
  name: string;
  age: number;
}

// type conversions
const mustBeANumber = 44 as number;

// literal types
const defaultName: 'John Doe' = 'John Doe';

// with union types and literal types we can accomplish the default
// values acceptable for a variable/parameter

enum Alignment {
  Left,
  Right,
  Center
}

// union of literal types and other types is allowed
function printText(s: string, alignment: Alignment | 'left' | 'right' | 'center') {
  //do something
}

// null and undefined are available in typescript but with strict
// type checking we disallow assigning null or undefined to variables

// non null assertion operator
function liveDangerously(x?: number | undefined) {
  // it is similar to assert x !== undefined
  console.log(x!.toFixed());
}

//bigint available from es2020
const earthSunDistance: bigint = BigInt(150_250_000);
//bigint literal requires suffixing n
const bigintLiteral: bigint = 150250000n;

//symbol - globally unique reference
// 1. symbols are immutable and unique
// 2. symbols can be used as keys in object properties
// 3. Symbols can be used to declare class properties/members
const someSymbol = Symbol('name');
const someOtherSymbol = Symbol('name');

let person = {
  [someSymbol]: 'John Doe'
};
// this will always return false
console.log(someSymbol === someOtherSymbol);
