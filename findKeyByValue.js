const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😊 😊 😊 Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`😢 😢 😢 Assertion Failed: + ${actual} !== ${expected}`);
  }
};

const findKeyByValue = function(object, value) {
  keys = Object.keys(object)
for (const item of keys) {
  if (object[item] === value) { 
    return item;
    }
  }
}
;
const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire",
  classic:  "Gone with the Wind",
  filmNoir: "Sin City"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);