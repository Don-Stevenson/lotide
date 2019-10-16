const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😊 😊 😊 Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`😢 😢 😢 Assertion Failed: + ${actual} !== ${expected}`);
  }
}

const countLetters = function(phrase) {
  const results = {};
  let joinPhrase = phrase.split(' ').join('');
  for (const item of joinPhrase) {
    if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    }
  // console.log(results);
  return results;
 }

const testPhrase = "lighthouse in the house";
console.log(countLetters(testPhrase));