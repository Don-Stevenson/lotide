// assertEqual function

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(` 📗  📗  📗  Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(` 😡  😡  😡 Assertion Failed: + ${actual} !== ${expected}`);
  }
};

// find key code



const findKey= function(object, callback) {
  let result = Object.keys(object)
  for (let item in object) {
     if (callback(object[item]))
     {      
      return item;
     }   
    //  console.log(object[item]);
  }
}

// teest of findKey

result = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2) // => "noma"
// console.log(result)

assertEqual(result, 'noma');