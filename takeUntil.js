// assertArraysEqual function

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

const takeUntil = function(array, callback) {
  let result = []
  for (let item of array) {
     if (!callback(item)) {
      result.push(item)   
     }
     else {
       break; 
     }  
  }
  return result;
}


const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

console.log('---');
console.log('---');

assertArraysEqual([ 1, 2, 5, 7, 2 ], results1);
assertArraysEqual([ 'I\'ve', 'been', 'to', 'Hollywood' ], results2);