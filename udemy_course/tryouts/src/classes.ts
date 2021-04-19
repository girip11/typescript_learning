class Person {
  // property
  name: string;

  // class level property
  static personCount: number = 0;

  constructor(name: string) {
    this.name = name;
    Person.personCount += 1;
  }

  greet(personName: string) {
    console.log('Hello ' + personName);
  }
}

let person1 = new Person('John Doe');
console.log(person1.name);
person1.greet('Jane');
