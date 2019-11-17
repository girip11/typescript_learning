interface Stark {
  name: string;
  age: number;

  // optional
  gender?: string;
}

function printName(stark: Stark) {
  console.log(stark.name);
  console.log(stark.age);
}

printName({ name: "Tony Stark", age: 25 });
printName({ name: "Tony Stark Sr", age: 60, gender: "Male" });
