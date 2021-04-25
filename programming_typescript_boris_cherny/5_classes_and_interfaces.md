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

- Typescript supports single inheritance only.

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

- Interfaces are similar to type aliases. But type aliases are extended using union and intersection, while interfaces are extended by classes, other interfaces.

- Interaface can extend another interface, object type, or a class

```Typescript
interface Food {
  calories: number
  tasty: boolean
}

interface Sushi extends Food {
  salty: boolean
}
```

### Interface vs type alias

- Interface right side should be a **shape**, type aliases can have type expressions as well as shape.

- An interface extending another interface has to implement/override the **methods with exactly the same signature**. If we have same method names but different signatures, it will raise compilation error while this will lead to overloading the method when using type aliases intersection.

- Multiple interfaces with the same name in the same scope are automatically merged (called as **declaration merging**), while defining multiple type aliases in the same scope will raise error.

**NOTE**: Declaration merging is applicable to interface, enums, namespaces.

```Typescript
// below definitions will be merged
interface User {
  name: string;
}

interface User {
  age: number;
}
```

- Interfaces should have same generic constraints for merging to happen.

## Classes extending interface

- When classes extend another class, we use `extends` keyword.
- When a class implements an interface, we use the `implements` keyword.

```Typescript
interface Animal {
  // properties in the interface are always public
  // we cannot have other access modifiers
  readonly name: string // interface can declare properties
  eat(food: string): void
  sleep(hours: number): void
}

class Cat implements Animal {
  constructor(
    public readonly name: string
  ) {}

  eat(food: string) {
    console.info('Ate some', food, '. Mmm!')
  }
  sleep(hours: number) {
    console.info('Slept for', hours, 'hours')
  }
}
```

- A class can implement any number of interfaces. `class A implements B, C`

> Interfaces do not emit JavaScript code, and only exist at compile time.

- Interfaces cannot have default implementations while abstract classes can provide default implementations.

## Classes are structurally typed

- This is also known as duck typing.

> A class is compatible with any other type that shares its shape.

```Typescript
class Z {
  trot()
  {
    //todo
  }
}

class A {
  trot() {

  }
}

// this is compatible, because the shape of Z matches with A
let z: Z = new A();
```

> The exception to this rule is classes with private or protected fields: when checking whether or not a shape is assignable to a class, if the class has any private or protected fields and the shape is not an instance of that class or a subclass of that class, then the shape is not assignable to the class:

```Typescript
class Z {
  private x: number = 1
  trot()
  {
    //todo
  }
}

class A {
  trot() {

  }
}

// This raises error because the private field in Z is not present in A
let z: Z = new A();
```

A class can be decomposed in to two interfaces, one containing/describing the behaviour of the instance and the other interface describes the class constructur(constructor type).

## Polymorphism

- Polymorphism using generic types.

```Typescript
interface MyMap<K, V> {
  get(key: K): V
  set(key: K, value: V): void
}
```

## Mixins

> A mixin is just a function that takes a class constructor and returns a class constructor.

Mixins

- State(instance properties)
- provide only concrete methods
- Can have constructor.

Constructors of mixins are called in the order in which they are mixed in.

```Typescript
// example illustrated in the book
type ClassConstructor<T> = new (...args: any[]) => T;

interface Debuggable {
  getDebugValue(): object;
}

function withEZDebug<C extends ClassConstructor<Debuggable>>(Class: C) {
  return class extends Class {
    debug() {
      let Name = Class.constructor.name;
      let value = this.getDebugValue();
      return Name + '(' + JSON.stringify(value) + ')';
    }
  };
}

class HardToDebugUser implements Debuggable {
  constructor(private id: number, private firstName: string, private lastName: string) {}
  getDebugValue() {
    return {
      id: this.id,
      name: this.firstName + ' ' + this.lastName
    };
  }
}

// calling the mixin function
let User = withEZDebug(HardToDebugUser);
let user = new User(3, 'Emma', 'Gluzman');
user.debug();
```

**NOTE** - Refer the book for detailed explanation.

## Decorators

> **Until decorators in TypeScript become a more mature feature, I recommend you avoid using them and stick to regular functions(mixin concept) instead.**

- Set `experimentalDecorators: true` to enable the decorators feature.

- We can decorate classes, class methods, properties and method parameters.

```Typescript
// syntax is similar to that of python
@serializable
class APIPayload {

}
```

> For each type of decorator, TypeScript requires that you have a function in scope with the given name and the required signature for that type of decorator.

**NOTE** - Refer the book for detailed explanation.

## Simulating final classes

**NOTE** - `final` in Java - makes class nonextensible and a method nonoverridable.

- When constructors are marked private, we cannot instantiate the class with `new` or extend the class.

-Such classes then require static methods to instantiate them(since new is also prohibited).

```Typescript
class MessageQueue {
  private constructor(private messages: string[]) {}

  static create(messages: string[]) {
    return new MessageQueue(messages);
  }
}
```
