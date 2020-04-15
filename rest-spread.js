// *** Rest / Spread Operator Exercises ***

// Refactor this function to use rest operator & arrow function
// function filterOutOdds() {
//   var nums = Array.prototype.slice.call(arguments);
//   return nums.filter(function(num) {
//     return num % 2 === 0
//   });
// }

const filterOutOdds = (...nums) => nums.filter(num => num % 2 === 0);

// findMin
const findMin = (...args) => {
  return Math.min(...args);
}


// mergeObjects
const mergeObjects = (obj1, obj2) => {
  return {...obj1, ...obj2};
}

// doubleAndReturnArgs

const doubleAndReturnArgs = (arr, ...args) => {
  return [...arr, ...args.map(val => val * 2)];
}

// Slice and Dice

/** remove a random element in the items array
and return an array without that item. */
const removeRandom = items => {
  items.splice(Math.floor(Math.random() * items.length), 1);
  return items;
}

/** Add every item in array2 to array1. */
const extend = (array1, array2) => {
  return [...array1, ...array2];
}


/** Add a new key/val to an object. */
const addKeyVal = (obj, key, val) => {
  let newObj = { ...obj };
  newObj[key] = val;
  return newObj;
}

/** Remove a key from an object. */
const removeKey = (obj, key) => {
  let newObj = { ...obj};
  delete newObj[key];
  return newObj;
}

/** Combine two objects. */
const combine = (obj1, obj2) => {
  return { ...obj1, ...obj2 };
}


/** Update an object, changing a key/value. */
const update = (obj, key, val) => {
  let updatedObj = { ...obj };
  updatedObj[key] = val;
  return updatedObj;
}

