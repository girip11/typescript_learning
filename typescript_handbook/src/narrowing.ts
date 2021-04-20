// typescript compiler understands typeof type guards and
// narrows down types

// In TypeScript, checking against the value returned by `typeof`
// is a **type guard**
function padLeft(padding: number | string, input: string) {
  // this is a type guard
  if (typeof padding === 'number') {
    // here padding will be checked against number type
    return new Array(padding + 1).join(' ') + input;
  }

  // here the padding is considered as string type
  return padding + input;
}

// arrays are of type object
console.log(typeof new Array('hello', 'world'));

// Values like 0, NaN, "", undefined, null, 0n are evaluated to false
// in boolean conditions
console.log(!!'');
console.log(!!'world');

// for type and value check use === and !==
// for only value comparison use == and !=

// Narrowing using instanceof
// instanceof is another type guard
console.log(new Date() instanceof Date);

// type predicates
// object is Type - syntax
// function isFish(pet: Fish | Bird): pet is Fish {
//   return (pet as Fish).swim !== undefined;
// }

// Discriminated unions
// When every type in a union contains a common property with
// literal types, TypeScript considers that to be a
//discriminated union, and can narrow out the members of the union.

interface Circle {
  kind: 'circle';
  radius: number;
}

interface Square {
  kind: 'square';
  sideLength: number;
}

type Shape = Circle | Square;

function getArea(shape: Shape) {
  // common property with literal types
  // kind propetry discriminates the shape
  if (shape.kind === 'circle') {
    return Math.PI * shape.radius ** 2;
  }
}

function getArea2(shape: Shape) {
  switch (shape.kind) {
    case 'circle':
      return Math.PI * shape.radius ** 2;
    case 'square':
      return shape.sideLength ** 2;
  }
}

// never type
// When narrowing, you can reduce the options of a union to a point
// where you have removed all possibilities and have nothing left.
// In those cases, TypeScript will use a never type to represent
// a state which shouldn’t exist.
// The never type is assignable to every type; however,
// no type is assignable to never

function getAreaWithNever(shape: Shape) {
  switch (shape.kind) {
    case 'circle':
      return Math.PI * shape.radius ** 2;
    case 'square':
      return shape.sideLength ** 2;
    default:
      // never here means we have exhausted all possible types
      // in the shape type(both circle and square)
      // if there are any other types in the Shape that we havent checked
      // then never will raise error when compiling, because never is used
      // when we have exhausted the type checks
      const _exhaustiveCheck: never = shape;
      return _exhaustiveCheck;
  }
}
