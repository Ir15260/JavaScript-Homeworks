function writeSentance(stringsArray) {
  let result = "";
  let i = 0;

  while (i < stringsArray.length) {
    result += stringsArray[i];


    if (i < stringsArray.length - 1) {
      result += " ";
    }

    i++;
  }

  return result;
}


const inputArray = ["Hello", "there", "students", "of", "SEDC", "!"];
const wholeSentance = writeSentance(inputArray);
console.log(wholeSentance);
