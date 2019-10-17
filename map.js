const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

const results1 = map(words, word => word[0]);
console.log(results1);

// let arrayValuesLength = lighthouses.map(itemlength => itemlength.length)
// console.log(arrayValuesLength);
const eqArrays = function (A,B){
  if (A.length !== B.length){
    return false
  }
  for (let i = 0; i < B.length ; i++){
    if(A[i] !== B[i]){
      return false
    } 
  }
  return true
}

const assertArraysEqual = function(A, B) {
  if (eqArrays(A,B)) {
    console.log(` 📗  📗  📗  Assertion Passed: [${A}] === [${B}]`);
  } else {
    console.log(` 😡  😡  😡  Assertion Failed: [${A}] !== [${B}]`);
  }
}
assertArraysEqual(['c','c','t','m','t'], results1);