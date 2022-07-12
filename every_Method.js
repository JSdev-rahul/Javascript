// The every() method tests whether all elements in the array pass the test implemented by the provided function.
// It returns a Boolean value.

// const array1 = [1, 30, 39, 29, 10, 13];
// console.log(array1.every((ele) => ele > 5)); // false ( 1 is failed )

/////////////////////////////////////////////////////////////////////
// const array1 = [6, 30, 39, 29, 10, 13];
// console.log(array1.every((ele) => ele > 5)); // true
//////////////////////////////////////////////////////////////////

// SYSNTEX

// every((element) => {
//   /* ... */
// });
// every((element, index) => {
//   /* ... */
// });
// every((element, index, array) => {
//   /* ... */
// });
//
//true if the callbackFn function returns a truthy value for every array element.
//Otherwise, false.

///////////////////////////////////////////////////////////////

// Note: Calling this method on an empty array will return true for any condition!
// const data = [];
// console.log(data.every((ele) => ele > 5));
//

/////////////////////////////////////////////////////////////////

// const isSubset = (arr1, arr2) => arr2.every((ele) => arr1.includes(ele));
//
// console.log(isSubset([1, 2, 3, 4, 5, 6, 7], [5, 7, 6])); // true
// console.log(isSubset([1, 2, 3, 4, 5, 6, 7], [5, 8, 7])); // false
//
/*************************************************** */
// console.log([12, 5, 8, 130, 44].every((ele) => ele > 1));
