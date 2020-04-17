// **** Destructuring Exercises **** //
// ********************************* // 

// Object destructuring 1
// What does the following code return/print?

let facts = {numPlanets: 8, yearNeptuneDiscovered: 1846};
let {numPlanets, yearNeptuneDiscovered} = facts;

console.log(numPlanets); // 8
console.log(yearNeptuneDiscovered); // 1846

// Object destructuring 2
// What does the following code return/print?

let planetFacts = {
  numPlanets: 8,
  yearNeptuneDiscovered: 1846,
  yearMarsDiscovered: 1659
};

let {numPlanets, ...discoveryYears} = planetFacts;

console.log(discoveryYears); // {yearNeptuneDiscovered: 1846, yearMarsDiscovered: 1659}

// Object destructuring 3
// What does the following code return/print?

function getUserData({firstName, favoriteColor="green"}){
  return `Your name is ${firstName} and you like ${favoriteColor}`;
}

getUserData({firstName: "Alejandro", favoriteColor: "purple"}) // 'Your name is Alejandro and you like purple'
getUserData({firstName: "Melissa"}) // 'Your name is Melissa and you like green'
getUserData({}) // 'Your name is undefined and you like green'

// Array destructuring 1
// What does the following code return/print?
let [first, second, third] = ["Maya", "Marisa", "Chi"];

console.log(first); // 'Maya'
console.log(second); // 'Marisa'
console.log(third); // 'Chi'

// Array destructuring 2
// What does the following code return/print?
let [raindrops, whiskers, ...aFewOfMyFavoriteThings] = [
  "Raindrops on roses",
  "whiskers on kittens",
  "Bright copper kettles",
  "warm woolen mittens",
  "Brown paper packages tied up with strings"
]

console.log(raindrops); // 'Raindrops on roses'
console.log(whiskers); // 'Whiskers on kittens'
console.log(aFewOfMyFavoriteThings); // [  "Bright copper kettles", "warm woolen mittens","Brown paper packages tied up with strings" ]


// Array destructuring 3
// What does the following code return/print?
let numbers = [10, 20, 30];
[numbers[1], numbers[2]] = [numbers[2], numbers[1]]

console.log(numbers) // [10, 30, 20]

// *** ES2015 Refactoring **** //

// ES5 Assigning Variables to Object Properties 
const obj = {
  numbers: {
    a: 1,
    b: 2
  }
};
// ES2015 Object Destructuring - new version 
// make var a = obj.numbers.a 
// make var b = obj.numbers.b
const { a, b } = obj.numbers;

// ES5 Array Swap
var arr = [1, 2];

var temp = arr[0]; // temp = 1
arr[0] = arr[1]; // assign arr[0] 2
arr[1] = temp; // assign arr[1] 1

// ES2015 One-Line Array Swap with Destructuring
[arr[0], arr[1]] = [arr[1], arr[0]]

// raceResults() 

/*
raceResults(['Tom', 'Margaret', 'Allison', 'David', 'Pierre'])

  {
    first: "Tom",
    second: "Margaret",
    third: "Allison",
    rest: ["David", "Pierre"]
  }
*/

// function raceResults ([first, second, third, ...rest]) {
//   return {first, second, third, rest};
// }

// one line version: 
const raceResults = ([first, second, third, ...rest]) => ({first, second, third, rest});