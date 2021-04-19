//console.log("Hello World");

function sayHello(name: String) {
  console.log('Hello ' + name);
}

sayHello('John');

// passing incorrect type throws compilation error
sayHello('Jane');
