// The findIndex() method returns the index of the first element in the array that satisfies the provided testing function.
// Otherwise, it returns -1, indicating that no element passed the test.

const array1 = [5, 12, 8, 130, 44];
console.log(array1.findIndex((ele) => ele >= 5)); //0

/************************************************************ */
// Arrow function
findIndex((element) => {
  /* ... */
});
findIndex((element, index) => {
  /* ... */
});
findIndex((element, index, array) => {
  /* ... */
});
