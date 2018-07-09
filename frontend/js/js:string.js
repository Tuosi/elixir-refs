// string

// basic
s = "foobar";
s.length; // 6

s.indexOf("bar"); // 3
s.indexOf("baz"); // -1
s.replace("bar", "baz"); // foobaz
s.toUpperCase();
s.toLowerCase();
s.split('') // ["f", "o", "o", "b", "a", "r"]
s.slice(0, 3); // "foo"

typeof s; // "string"

strObj = new String("ok");
typeof strObj; // "object"
