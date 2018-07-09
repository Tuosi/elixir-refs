// array

// basic
arr = [1, 2, 3, 4, 5];

arr = new Array(1, 2, 3, 4, 5);

arr.length; // 5
arr.indexOf(3); // 2
arr.concat([6, 7]); // 1..7 to_a
arr.concat([6, 7], [8, 9]); // 1..9 to_a
arr.join(); // "1,2,3,4,5"
arr.toString(); // "1,2,3,4,5"
arr.reverse(); // 5..1 to_a

// push, pop, shift, unshift
// simulate stack and queue

// sort
arr.sort(); // 1..5 to_a
arr.sort(function(a, b) { return a - b; }) // 1..5 to_a
arr.sort(function(a, b) { return b - a; }) // 5..1 to_a

// slice
arr.slice(1, 3); // [2, 3]

// splice
a = [1, 2, 3, 4, 5];
a.splice(1, 2, "foo", "bar"); // [1, "foo", "bar", 4, 5]

// traverse
for (let i = 0; i <= arr.length; i ++) {
  console.log(arr[i]);
}

for (let i in arr) {
  console.log(arr[i]);
}

for (let e of arr) {
  console.log(e);
}

arr.forEach(function(e) {
  console.log(e);
});
