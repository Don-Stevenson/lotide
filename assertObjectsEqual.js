const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✔  ✔  ✔ 😊 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(` 😡  😡  😡  Assertion Failed: + ${actual} !== ${expected}`);
  }
}; 

const eqArrays = function (A,B){
  if (!Array.isArray(A) || !Array.isArray(B)) return false
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

const eqObjects = function(object1, object2) {
  let key1 = Object.keys(object1);
  let key2 = Object.keys(object2);
  if (key1.length !== key2.length){
    // console.log("length not the same");
    return false;
 } else { 
   for (let value of key1){
     if (Array.isArray(object1[value])){
        if (!eqArrays(object1[value], object2[value])){
        //  console.log("eq array if statment");
          return false;
        }
      }
     else if (object1[value] !== object2[value]){
      //  console.log("if object values not the same")
        return false;
     }
    }
  return true;
 }
};

const assertObjectsEqual = function(actual, expected){
  const inspect = require('util').inspect;
  console.log(`Example label: ${inspect(actual)}`);

  if (eqObjects(actual, expected)) {
    console.log(`📗  📗  📗  Assertion Passed: [${inspect(actual)}] === [${inspect(expected)}]`);
  } else {
    console.log(`😡  😡  😡  Assertion Failed: [${inspect(actual)}] !== [${inspect(expected)}]`);
  }
};
  // Implement me!

const cd = { c: "2", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectsEqual(cd, dc); // => true


