const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😊 😊 😊 Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`😢 😢 😢 Assertion Failed: + ${actual} !== ${expected}`);
  }
};
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


assertEqual(eqArrays([1, 2, 3, 4], [1, 2, 3]), true); 