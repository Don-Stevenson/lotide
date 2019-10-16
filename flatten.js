// equal arrays function
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
// assert aAarray is equal
const assertArraysEqual = function(A, B) {
  if (eqArrays(A,B)) {
    console.log(`😊 😊 😊 Assertion Passed: [${A}] === [${B}]`);
  } else {
    console.log(`😢 😢 😢 Assertion Failed: [${A}] !== [${B}]`);
  }
}

const flatten = function (firstArray) {
    const flattenedArray = [];
       for (let i = 0; i < firstArray.length; i++){
          //if this is a nested list, do a second for loop
          if (Array.isArray(firstArray[i])){
            for (let j = 0; j < firstArray[i].length; j++) {
              flattenedArray.push(firstArray[i][j]);
              // console.log(flattenedArray);
            }
          }
          else {
            flattenedArray.push(firstArray[i]);
            // console.log(flattenedArray);
               }
          }
      //  console.log(flattenedArray);      
       return flattenedArray;
}
flatten([1, 2, [3, 4], 5, [6]]);
assertArraysEqual(flatten( [1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6] ) 