'use strict';

// 1) ---------------------
//
//  using the (findMax) function; return the maximum value in the provided array
//  without using build-in functions.
//  EX:
//  [12, 32, 22, 45, 78, 12, 50] ==> 78
//
// ------------------------

const findMax = (arr) => {
  let max = arr[0];
  var i = 1;
  // for (let i = 1; i < arr.length; i++) {
  while (arr[i] !== undefined) {
    if (max < arr[i]) {
      max = arr[i];
    }
    i += 1;
  }

  return max;
};

// 2) ---------------------
//
//  using the (sumNums) function; return the Sum value of the numeric values
//  inside the array (there could be strings inside), without using build-in functions
//  EX:
//  [20, '234', 'car', 41, 20, 'chair'] ==> 81
//
// ------------------------

const sumNums = (arr) => {
  let sum = 0;
  for (let index = 0; index < arr.length; index++) {
    if (typeof arr[index] == 'number') {
      sum = arr[index] + sum;
    }
  }
  return sum;
};

// 3) ---------------------
//
//  using the (reverseArray) function; return provided array reversed
//  without using build-in functions
//  EX:
//  ['C#', 'JS', 'Ruby','Python' ] ==> ['Python','Ruby','JS','C#']
//
// ------------------------

const reverseArray = (arr) => {
  var output = [];
  let Arr2 = arr.length;
  for (let index = 0; index < Arr2; index++) {
    output.push(arr[Arr2 - 1 - index]);
  }
  return output;
};

module.exports = { findMax, sumNums, reverseArray };
