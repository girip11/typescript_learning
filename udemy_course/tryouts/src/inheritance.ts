// uses the extends keyword

class GenericPerson {
  // property
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  greet(personName: string) {
    console.log("Hello " + personName);
  }
}

class AwesomePerson extends GenericPerson {
  greet(personName: string) {
    console.log("Hey, " + personName);
    // call parent method
    super.greet(personName);
  }
}

let awesomePerson1: AwesomePerson = new AwesomePerson("John");
awesomePerson1.greet("Jane");

let awesomePerson2: GenericPerson = new AwesomePerson("John");
awesomePerson2.greet("Jane");
