function iterativeLog(array) {
  array.forEach(element, index, array) => {
    console.log(`${index}: ${element}`);
  })
}

function iterate(callback) {
  myArray = ['hello', 'there'];
  myArray.forEach(callback);
  return myArray;
}

function doToArray(array, callback) {
  array.forEach(callBack)
}
