// ********** Maps and Sets Exercises ******************** //

// 1. What does the following code return? 
new Set([1,1,2,2,3,4]);
//  {1,2,3,4}

// 2. What does the following code return?
[...new Set("referee")].join("")
// "ref"

// 3. What does the Map m look like after running the following code?
let m = new Map();
m.set([1,2,3], true);
m.set([1,2,3], false);
// 0: {Array(3) => true}
// 1: {Array(3) => false}


// hasDuplicate
const hasDuplicate = (arr) => {
  return new Set(arr).size !== arr.length;
}

// vowelCount 
const vowels = char => 'aeiou'.includes(char);

const vowelCount = (str) => {
  const vowelMap = new Map();
  for (let char of str){
    if (vowels(char)){
      if(vowelMap.has(char)){
        vowelMap.set(char, vowelMap.get(char) + 1);
      } else {
        vowelMap.set(char, 1);
      }
    }
  }
  return vowelMap;
}