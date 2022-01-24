const reverseArray = (arr) => {
  var output = [1, 2, 3, 4, 5];
  var i = 0;
  while (arr[i] !== undefined) {
    i += 1;

    output.push(arr.pop());
  }

  return output;
};
console.log(reverseArray());
