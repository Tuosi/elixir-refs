// function

// basic

function f(a, b) { return a + b; }
f(1, 2); // 3

// variable function
let af = function () { return "ok"; }
af(); // "ok"dfsf

// call it now
(function() { return "ok"; } )(); // "ok"

// callback function
let cb = function(name) { return `hi, ${name}`; };
function f(func, name) { return func(name); }
f(cb, "superman"); // "hi, superman"

// high-order function
function f(x) {
  return function(a, b) { return (a + b) * x; };
}
f(10)(1, 2); // 30

// arguments

function sum() {
  let total = 0;
  for (let num of arguments) {
    total += num;
  }
  return total;
}
sum(1, 2, 3, 4, 5);

function max() {
  let max = arguments[0];
  for (let num of arguments) {
    if (num > max) {
      max = num;
    }
  }
  return max;
}
max(1, 3, 5, 2, 4);

// this

function f() {
  return this;
}
f();

obj = {
  func: function() {
    return this;
  }
}
obj.func();

function MyConstructor() {
  return this;
}
new MyConstructor();

function test(a, b) {
  return this.x + a + b;
}
let obj = { x: 10 };
test.call(obj, 1, 2); // 13
test.apply(obj, [1, 2]); // 13

// closure

let add = (function() {
  let counter = 0;
  return function() {
    return counter += 1;
  };
})();
add(); // 1
add(); // 2
add(); // 3
