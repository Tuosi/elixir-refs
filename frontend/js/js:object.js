// object

// object has attributes and functions

obj = { a: 1, b: 2 };

// read
obj['a'];
obj.a;

// write, modify
obj['a'] = 111;
obj.a = 111;

// create by 'new'
obj = new Object();

// constructor
function User(name, email) {
  this.name = name;
  this.email = email;
  this.sayHi = function() { return 'hi' };
}

user = new User("test", "test@email.com");
user.sayHi();

// prototype
