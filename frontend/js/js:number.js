// number

// basic
int = 1;
float = 1.1;
typeof int; // "number"
typeof float; // "number"

numObj = new Number("1");
typeof numObj; // "object"

// Infinity
1 / 0; // Infinity
-1 / 0; // -Infinity

// NaN
1 / "a"; // NaN
NaN == NaN; // false
isNaN(NaN); // true

// toString
(10).toString(); // "10"
(10).toString(16); // "a"
(10).toString(8); // "12"
(10).toString(2); // "1010"
