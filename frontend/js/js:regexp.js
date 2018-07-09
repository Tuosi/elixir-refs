// regexp

// patt = /pattern/modifiers;
// patt = new RegExp(pattern, modifiers);

patt = /\w+/;
patt = new RegExp("\\w+");

// modifiers:
// i => ignore case
// g => global match

str.match(patt); // array

patt.test(str); // true, false

patt.exec(str);
