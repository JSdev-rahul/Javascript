// The fill() method changes all elements in an array to a static value, from a start index (default 0) to an end index (default array.length).
//It returns the modified array.

// orignal array me change hota hai

// const array1 = [1, 2, 3, 4];
// console.log(array1.fill(8, 0, 2));
// array1.fill(8);
// console.log(array1);

/************************************* */

const array1 = [1, 2, 3, 4];

// fill with 0 from position 2 until position 4
console.log(array1.fill(0, 2, 4));
// expected output: [1, 2, 0, 0]

// fill with 5 from position 1
console.log(array1.fill(5, 1));
// expected output: [1, 5, 5, 5]

console.log(array1.fill(6));
// expected output: [6, 6, 6, 6]

/*************************************************** */
const emptyArr1 = [];

console.log(emptyArr1.fill(6)); // []

/************************************************* */
const emptyArr = new Array(8);

console.log(emptyArr.fill(6)); //[6, 6, 6, 6, 6, 6, 6, 6];

/***************************************************** */

const emptyArr3 = new Array(8);

console.log(emptyArr3.fill(6, 1, 3)); //[ <1 empty item>, 6, 6, <5 empty items> ]

/*********************************************************************** */

[1, 2, 3]
  .fill(4) // [4, 4, 4]
  [(1, 2, 3)].fill(4, 1) // [1, 4, 4]
  [(1, 2, 3)].fill(4, 1, 2) // [1, 4, 3]
  [(1, 2, 3)].fill(4, 1, 1) // [1, 2, 3]
  [(1, 2, 3)].fill(4, 3, 3) // [1, 2, 3]
  [(1, 2, 3)].fill(4, -3, -2) // [4, 2, 3]
  [(1, 2, 3)].fill(4, NaN, NaN) // [1, 2, 3]
  [(1, 2, 3)].fill(4, 3, 5); // [1, 2, 3]
Array(3).fill(4); // [4, 4, 4]

/***************************************************************** */
