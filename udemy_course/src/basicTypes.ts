let isCorrect: boolean = false;
let isCorrect2: Boolean = false;

let count: number = 1;
let count2: Number = 1;

let planets: Array<string> = ['Mercury', 'Venus'];

enum Planets {
  Mercury,
  Venus,
  Earth
}

let myplanet: Planets = Planets.Earth;

function getPlanetName(planetPosition: number): String {
  return planets[planetPosition];
}

console.log(getPlanetName(1));
