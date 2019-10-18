
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
// assertArraysEqual([1,2,3],['A','B','C']);

