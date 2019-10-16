
// equal arrays function here
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
// assert Array's equal here
const assertArraysEqual = function(A, B) {
  if (eqArrays(A,B)) {
    console.log(`😊 😊 😊 Assertion Passed: [${A}] === [${B}]`);
  } else {
    console.log(`😢 😢 😢 Assertion Failed: [${A}] !== [${B}]`);
  }
}
// assertArraysEqual([1,2,3],['A','B','C']);

// middle array function here
const middle = function(array) {
  if (array.length <= 2){
    return []
  } else if (array.length  % 2 === 0 ) {
    let arrayMiddle = array.length / 2
    return [array[arrayMiddle - 1], array[arrayMiddle]]
  } else {
    let arrayMiddle = array.length / 2
    return [array[Math.floor(arrayMiddle)]]
  }
}

assertArraysEqual(middle([1, 2, 3]), [2]) 
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]) // => [3, 4]
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4])