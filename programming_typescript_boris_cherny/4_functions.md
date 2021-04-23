# Functions

Functions are first class objects.

## Typescript functions

- parameters have to be explicitly types and the return type is usually inferred.

```Typescript
function add(n1: number, n2: number): number {
  return n1 + n2;
}
```

## Various ways to define functions

```Typescript
function greet(name: string): void {
  console.log(`Hello ${name}`);
}

let greet2 = function(name: string) {
  console.log(`Hello ${name}`);
}

// arrow function with and without braces
let greet3 = (name: string) => {
  console.log(`Hello, ${name}`);
}

// single line arrow statement
let greet4 = (name: string) => console.log(`Hello, ${name}`);

// Function constructor
let greet5 = new Function("name", 'return `Hello, ${name}`')
```

Within the arrow function `() =>`, we don't need to use `return` keyword explicitly. The result of the last expression is returned automatically.

```Typescript
let c = (name: string) => {
  console.log("hello");
  `hello ${name}`;
}
console.log(c("John"));
```

## Optional and default parameters

- Optional parameters end with `?` in their name.
- Required parameters should be placed ahead of optional parameters.

```Typescript
function greetOpt(name: string, msg?: string): string {
  return `${msg || "Hi"}, ${name}`
}

function greetDefault(name: string, msg: string = "Hi"): string {
  return `${msg}, ${name}`;
}
```

## Variable args using rest parameters

```Typescript
function sumNumbers(...values: number[]): number {
  return values.reduce((t, n) => t + n);
}

sumNumbers(1,2,3,4,5);
// unpacking or spread a list to rest arguments
sumNumbers(...[1,2,3,4,5]);
```

> A function can have at most one rest parameter, and that parameter has to be the last one in the function’s parameter list.

## `apply`, `bind`, `call`

- These methods can bind a value to `this` within the function.

```Typescript
function add(a: number, b: number): number {
  return a + b;
}

add(1, 2) // normal invocation
add.apply(null, [1, 2]) // apply spreads the args to add function
add.call(null, 1, 2) // applies the args in order
add.bing(null, 1, 2)() // bind returns a function with fixed arguments that can be called
```

- `apply` accepts an array and spreads the array to the function as arguments.
- `bind` returns a function and does not call the function
- `call` similar to `apply`, accepts parameters and passes them in the same order to the function.

## `this`

- `this` is defined for every function in JS.
- Recommended practice is to use `this` inside the classes.

> The general rule is that `this` will take the value of the thing to the left of the dot when invoking a method.
> `this` depends on the way you called a function, and not on the way that you declared it

`this` is reserved when used in a function signature.

```Typescript
function fancyDate(this: Date) {
  return `${this.getDate()}/${this.getMonth()}/${this.getFullYear()}`
}

fancyDate.call(new Date);

// compilation error
fancyDate()
```

## Generator functions

- Conceptually same as generators in python.
- Returns object of type `IterableIterator`

```Typescript
// function* makes it a generator
function* fibonacciGenerator(n: number): IterableIterator<number> {
  let a = 0;
  let b = 1;
  let i = 1;
  while(i < n) {
    yield a; //send result to consumer. pause execution.
    [a, b] = [b, a + b];
    i += 1;
  }
}

let fibGen = fibonacciGenerator(100);
for (let i = 0; i < 10; i++) {
  console.log(fibGen.next());
}
```

## Iterators

- Iterable - Any object with property `Symbol.iterator` whose value is a function that returns an iterator

Ex- Generators are iterators as well as iterables.

```Typescript
// object with Symbol.iterator method
let simpleIterable = {
  *[Symbol.iterator]() {
    for(let i = 0; i < 10; i++) {
      yield i;
    }
  }
}

let simpleIterable = {
  [Symbol.iterator]: function*() {
    for(let i = 0; i < 10; i++) {
      yield i;
    }
  }
}

for (let i of simpleIterable) {
  console.log(i);
}
```

- Iterator - Any object that defines a method called `next` returns an object with the properties value and done

```Typescript
// spread iterable
let numbers = [...simpleIterable];

// destructure iterable
let [first, second, ...rest] = simpleIterable;
console.log(first, second, rest);
```
