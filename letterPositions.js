const assertArraysEqual = function(A, B) {
  if (eqArrays(A,B)) {
    console.log(`😊 😊 😊 Assertion Passed: [${A}] === [${B}]`);
  } else {
    console.log(`😢 😢 😢 Assertion Failed: [${A}] !== [${B}]`);
  }
}

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


const letterPositions = function(sentence) {
  const results = {};
  let joinPhrase = sentence.split(' ').join('');
  for (i = 0; i < joinPhrase.length; i++){
    if (results[joinPhrase[i]]) {
      results[joinPhrase[i]].push(i)
    } else {
      results[joinPhrase[i]]= [i];
    }
   }

  return results;
};

assertArraysEqual(letterPositions("lighthouse in the house").e, [9,14,19]);
