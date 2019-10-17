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

// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// eqObjects(ab, ba); // => true

// const abc = { a: "1", b: "2", c: "3" };
// assertEqual(eqObjects(ab, ba)); 


const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); // => false

