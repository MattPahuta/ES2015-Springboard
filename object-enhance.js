// **** Object Enhancement Exercises **** //

// Same keys and values
// function createInstructor(firstName, lastName){
//   return {
//     firstName: firstName,
//     lastName: lastName
//   }
// }

// Same keys and values - ES2015
function createInstructor(firstName, lastName) {
  return {
    firstName, lastName
  };
}

// Computed property names 
// var favoriteNumber = 42;
// var instructor = {
//   firstName: "Colt"
// }
// instructor[favoriteNumber] = "That is my favorite!"

// ES2015
const favoriteNumber = 42;
const instructor = {
  firstName: 'Colt',
  [favoriteNumber]: 'That is my favorite!'
}

// Object methods
// var instructor = {
//   firstName: "Colt",
//   sayHi: function(){
//     return "Hi!";
//   },
//   sayBye: function(){
//     return this.firstName + " says bye!";
//   }
// }

const instructor = {
  firstName: 'Colt',
  sayHi() {
    return 'Hi!';
  },
  sayBye() {
    return this.firstName + ' says bye!';
  }
}

// Create animal function 

const createAnimal = function (species, verb, noise) {
  return {
    species,
    [verb](){
      return noise;
    }
  }
}



