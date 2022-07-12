const arr = [1, 2, 3, 4];

console.log(arr.flatMap((x) => [x * 2]));

console.log(arr.map((x) => [x * 2]));

console.log(arr.map((x) => x * 2));
