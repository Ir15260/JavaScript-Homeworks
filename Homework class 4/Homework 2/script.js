function sum(numArray) {
  let add = 0;

  
  function validateNumber(num) {
    if (typeof num !== 'number' || isNaN(num)) {
      throw new Error('Invalid number detected');
    }
  }

  for (let a = 0; a < numArray.length; a++) {
    let Addindex = numArray[a];
    validateNumber(Addindex);
    add += Addindex;
  }

  return add;
}

try {
  console.log(sum([1, 2, 3, 4]));
} catch (error) {
  console.error(error.message);
}
