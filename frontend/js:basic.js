// use strict
"use strict";

// typeof
typeof "John";         // "string"
typeof 3.14;           // "number"
typeof false;          // "boolean"
typeof [1, 2];         // "object"
typeof {};             // "object"
typeof null;           // "object"
typeof undefined;      // "undefined"
undefined == null;     // true
undefined === null;    // false
typeof function () {}; // "function"

// instanceof
[] instanceof Array; // true
"str" instanceof String; // false
new String("str") instanceof String; // true

// constructors
"John".constructor === String;
(3.14).constructor === Number;
false.constructor === Boolean;
[1,2,3,4].constructor === Array;
({}).constructor === Object;
new Date().constructor === Date;
function () {}.constructor === Function;

// to string
String(123); // "123"
(123).toString(); // "123"

// to number
Number("123"); // 123
parseInt("123.123"); // 123
parseFloat("123.123"); // 123.123
+("123.123") // 123.123
+("123.abc") // NaN

// Date
let date = new Date(); // Wed Jul 04 2018 06:33:28 GMT+0800 (China Standard Time)
date.getFullYear(); // 2018 // year
date.getMonth(); // 6 // month in year (0, 11), start from 0 (Jan)
date.getDay(); // 3 // day in week (0 ~ 6), start from 0 (Sunday)
date.getDate(); // 4 // day in month (1 ~ 31), start from 1
date.getHours(); // 6 // hours
date.getMinutes(); // 33 // minutes
date.getSeconds(); // 28 // seconds
date.getMilliseconds(); // 160 // milliseconds
date.getTime(); // 1530657208160 // timestamp

// RegExp
typeof /a/; // "object"
/a/ instanceof RegExp; // true
'foobar'.search(/bar/); // 3 // index
'foobar'.search(/BAR/i); // 3 // index
'foobar'.search("bar"); // 3
'foobar'.search("xxx"); // -1
'foobar'.replace(/bar/i, 'xxx'); // "fooxxx"
'foobar'.replace("bar", 'xxx'); // "fooxxx"
/bar/.test('foobar'); // true
/xxx/.test('foobar'); // false
/e/.exec("The best things in life are free!");

// cond

// debug by puts message
function puts(msg, type = 'console') {
  if (type === 'console') {
    // console output
    console.log(msg);
  } else if (type === 'alert') {
    // alert output, in browser
    window.alert(msg);
  } else if (type === 'docwrite') {
    // document write, in browser
    document.write(msg);
  } else {
    // document innerHTML, in browser
    document.getElementById('test').innerHTML = msg;
  }
}

// switch case
{
  let a = 1;
  // compare with '==='
  switch (a) {
    case 1:
      console.log(1);
      break;
    case 2:
      console.log(2);
      break;
    default:
      console.log('default')
  }
}

// loop array

let arr = [1, 2, 3, 4, 5];

// loop elem
for (let e of arr) {
  console.log(e);
}

// loop index
for (let i in arr) {
  console.log(arr[i]);
}

// traditional for loop
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// traditional while loop
{
  let i = 0;
  while (i < arr.length) {
    console.log(arr[i]);
    i++;
  }
  undefined
}

// traditional do..while loop
{
  let i = 0;
  do {
    console.log(arr[i]);
    i++
  } while (i < arr.length);
  undefined
}

// loop object

let obj = { a: 1, b: 2, c: 3 };

for (let e in obj) {
  console.log(e, obj[e]);
}

// loop with continue and break

// continue
for (let e of arr) {
  if (e === 3) continue;
  console.log(e);
}

// break
for (let e of arr) {
  if (e === 3) break;
  console.log(e);
}

// exception
try {
  throw 'err';
} catch(e) {
  console.log(e);
}

// json
let a = '{"a":1,"b":[{"f":"foo","b":"bar"}]}';
let b = JSON.parse(a);
let c = JSON.stringify(b);
a === c // true

// javascript:void
javascript:void(0) // run (statement) and return nothing
// <a href="javascript:void(0);">nothing happen</a>
