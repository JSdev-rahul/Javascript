// he includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate.
const array1 = [1, 2, 3];

console.log(array1.includes(2));
// expected output: true

const pets = ["cat", "dog", "bat"];

console.log(pets.includes("cat"));
// expected output: true

console.log(pets.includes("at"));
// expected output: false

// When comparing strings and characters, includes() is case-sensitive.

[1, 2, 3]
  .includes(2) // true
  [(1, 2, 3)].includes(4) // false
  [(1, 2, 3)].includes(3, 3) // false
  [(1, 2, 3)].includes(3, -1) // true
  [(1, 2, NaN)].includes(NaN) // true
  [("1", "2", "3")].includes(3); // false

let arr = ["a", "b", "c"];

arr.includes("a", -100); // true
arr.includes("b", -100); // true
arr.includes("c", -100); // true
arr.includes("a", -2); // false
