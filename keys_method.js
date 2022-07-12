// The keys() method returns a new Array Iterator object that contains the keys for each index in the array.

const array1 = ["a", "b", "c"];
const iterator = array1.keys();

for (const key of iterator) {
  console.log(key);
}

// expected output: 0
// expected output: 1
// expected output: 2

/*************************************************** */
const array2 = ["a", "b", "c"];
const iterator2 = array2.values();

for (const value of iterator2) {
  console.log(value);
}

// expected output: 0
// expected output: 1
// expected output: 2
