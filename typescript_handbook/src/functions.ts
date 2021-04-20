// reference: https://www.typescriptlang.org/docs/handbook/2/functions.html

// simple function
function printToConsole(input: string): void {
  console.log(input);
}

// function with default args
function defaultArgsFunc(input: string = 'foo'): void {
  console.log(input);
}

// NOTE: Functions with fewer parameters (of the same types) can
// always take the place of functions with more parameters.
// function with optional parameters
function f(x?: number) {
  if (typeof x !== undefined) {
    console.log(x);
  }
}

// consider this as a higher order function.
// A function that accepts another function
function greeter(greetFunc: (name: string) => void): void {
  greetFunc('Hello world');
}

greeter(printToConsole);

// arrow function as type alias
type GreeterFunc = (s: string) => void;

function yetAnotherGreeter(greetFunc: GreeterFunc): void {
  greetFunc('Hello world');
}

// callable object with properties
type DescribableFunction = {
  description: string;
  // this is how we write callable functions inside objects
  (someArg: number): boolean;
};

// generic functions

function firstElement<Type>(arr: Type[]): Type {
  return arr[0];
}
const firstEl = firstElement(['a', 'b', 'c']);

// function with multiple generic parameters
function map<Input, Output>(arr: Input[], func: (arg: Input) => Output): Output[] {
  return arr.map(func);
}

// constraints on the generic types
function longest<Type extends { length: number }>(a: Type, b: Type) {
  if (a.length >= b.length) {
    return a;
  } else {
    return b;
  }
}

// unknown type represents any value. Its not legal to do any
// operationson the variable with unknown value.

// function safeParse(s: string): unknown {
//   return JSON.parse(s);
// }

// The never type represents values which are never observed.
// never also appears when TypeScript determines there’s nothing left in a union.
// function fail(msg: string): never {
//   throw new Error(msg);
// }

// If need to accept an arbitrary function but don’t intend to
// call it, the type () => void is generally safer than Function

// variable args function called rest arguments
function someFunc(...args: string[]): void {
  args.forEach((s) => console.log(s));
}

// unpacking array to pass to a function that accepts variable arguments is
// spread syntax
let personNames: string[] = ['John', 'Jane'];
someFunc(...personNames);

// parameter destructuring - `{a, b, c}`
type SumArgs = { a: number; b: number; c: number };

function sum({ a, b, c }: SumArgs) {
  console.log(a + b + c);
}

sum({ a: 10, b: 3, c: 9 });

// returning any value from a void function will be ignored

const someVoidFunc: () => void = () => {
  return true;
};

// arg is assigned void type.
const arg = someVoidFunc();
// compiler treats arg as void though arg is boolean in this case
// because the boolean is returned from a void function which is unexpected
console.log(typeof arg, arg);

function someFunctionAcceptingBool(arg: boolean): void {
  console.log(arg);
}

// below statement will raise compilation error
// since arg is of type void
//someFunctionAcceptingBool(arg);

// There is one other special case to be aware of,
// when a literal function definition has a void return type,
// that function must not return anything.
// below snippet raises compilation error
// function someVoidFunc(): void {
//   return true;
// };
