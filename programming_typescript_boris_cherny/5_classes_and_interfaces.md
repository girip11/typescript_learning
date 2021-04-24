# Classes and Interfaces

## Basics

Access modifiers supported in typescript for properties and methods on a class.

- Private
- Protected
- Public - default

```Typescript
// This example is just to demonstrate the syntax of class in typescript
type Sex = 'male' | 'female';

class Student {
  protected sex: Sex; // protected member

  // public is the default, so we can omit the public keyword
  public age: number;

  // sex is constructor only parameter
  // access modifier before parameter makes it a property of the object
  constructor(public name: string, private dateOfBirth: Date, sex: Sex) {
    this.age = new Date().getFullYear() - this.dateOfBirth.getFullYear();
    this.sex = sex;
  }

  // public method of the class
  sayHello(anotherStudent: Student): void {
    console.log(`Hello, ${anotherStudent.name}`);
  }
}

let john = new Student('John', new Date(1990, 4, 4), 'male');
let jane = new Student('Jane', new Date(1990, 4, 4), 'female');
console.log(john.name, john.age);
john.sayHello(jane);
```

## Static methods

```Typescript
class ConsoleLogger {
  // we can make a statis member private as well
  static printToConsole(msg: string): void {
    console.log(msg);
  }
}

ConsoleLogger.printToConsole("Hello");
```

## Inheritance

```Typescript
class Base {}

class Derived extends Base {}
```

```Typescript
// snippets to demonstrate the syntax
abstract class AbstractBase {
  abstract abstractMember(): void;

  concretePublicMember(): void {
    console.log("Placeholder code")
  }
}

class ConcreteDerived extends AbstractBase {
  abstractMember(): void {
    this.concretePublicMember()
  }

  // override concretePublicMember
  concretePublicMember(): void {
    // to call base class methods
    super.concretePublicMember()
    console.log("From concrete derived")
  }
}
```

> Note that you can only access a parent class’s methods, and not its properties, with `super`.

We can `return this` from the instance methods. Useful in building `Builder` pattern.

```Typescript
class SomeClass {

  // we specify this as the return type so that in cases of
  // inheritance we don't need to override methods in every
  // subclass with its name as the return type.
  someMethod(arg: string): this {
    // logic
    return this;
  }
}
```

## Interfaces
