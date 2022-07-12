const str = "developerui";
console.log(Array.from(str));

// outout[
//   'd', 'e', 'v', 'e',
//   'l', 'o', 'p', 'e',
//   'r', 'u', 'i'
// ]

console.log(Array.from([1, 2, 3], (x) => x + x));
console.log(Array.from({ length: 50 }, (v, i) => i + 1));
