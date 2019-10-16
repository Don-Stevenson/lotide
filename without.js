
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
// assertArraysEqual([1,2,3],['A','B','C']);


// const words = ["hello", "world", "lighthouse"];
// go through the array and compare the values of the array and when they are equal remove them


//without(["hello", "world", "lighthouse"], ["lighthouse"]);


const without = function(sourceArray, itemsToRemove) {
  const newArray = [];
  for (let item of sourceArray) {
    // console.log('item =', item);
    if (!itemsToRemove.includes(item)) {
      // console.log('we want to keep item', item)
      newArray.push(item);
    }
  }
  return newArray;
  // console.log(newArray);
}
console.log(without(["hello", "world", "lighthouse"], ["lighthouse"]))


// no need to capture return value for this test case
// Make sure the original array was not altered by the without function
// assertArraysEqual(words, ["hello", "world", "lighthouse"]);

// const words = ["hello", "world", "lighthouse"];
without(["hello", "world", "lighthouse"], ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(without(["hello", "world", "lighthouse"], ["lighthouse"]), ["hello", "world"]);
