# 1. Property

- data properties
- accessor properties

> A property can either be a “data property” or an “accessor property”, but not both.
> 
> Please note once again that a property can be either an accessor or a data property, not both.

## 1.1 Property flags

name		| description
:-------	|-----------
value		| ... 
writable	| if true, can be changed, otherwise it's read-only
enumerable| is true, then listed in loops, otherwise not listed
configurable | is true, the property can be deleted and these attributes can be modified, otherwise not
get()		| getter
set()		| setter

- [Object.getOwnPropertyDescriptor()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptor) allows to query the full information about a property

```
let obj = { name: 'sally', age: 18 }

let descriptor = Object.getOwnPropertyDescriptor(obj, 'name') 
# {value: "sally", writable: true, enumerable: true, configurable: true}
```

- [Object.defineProperty()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty) can change the flags

```
Object.defineProperty(obj, 'name', { value: 'silly', writable: false, enumerable: false, configurable: false,
get() { return `${this.name} __ ${this.age}`; } })
# {name: "silly", age: 18}
```

- [Object.defineProperties(obj, descriptors)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperties)
- [Object.getOwnPropertyDescriptors()
](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptors)


# 2. Prototype

## 2.1 F.prototype

- if `F` has a `prototype` property with a value of the object type, then `new operator` uses it to set `[[Prototype]]` for the new object.
 
- The default "prototype" is an object with the only property `constructor` that points back to the function itself.

## 2.2 prototype-methods

- Object.create(proto[, descriptors]) 
- Object.getPrototypeOf(obj)  :  (same as __proto__ getter)
- Object.setPrototypeOf(obj, proto) : (same as __proto__ setter)
- Object.keys(obj) / Object.values(obj) / Object.entries(obj)
- Object.getOwnPropertySymbols(obj) : returns an array of all own symbolic property names
- Object.getOwnPropertyNames(obj) : returns an array of all own string property names
- Reflect.ownKeys(obj) :  returns an array of all own property names
- obj.hasOwnProperty(key)
- for..in : return 'own' & inherited proterties

# 3. class

## 3.1 Functional class pattern

## 3.2 Factory class pattern

## 3.3 Prototype-based classes

## 3.4 Prototype-based inheritance for classes

Rabbit.prototype.__proto__ = Animal.prototype;

## 3.5 Class

```
class MyClass {
  constructor(...) {
    // ...
  }
  method1(...) {}
  method2(...) {}
  get something(...) {}
  set something(...) {}
  static staticMethod(..) {}
  // ...
}
```	

- methods listed in the class declaration become members of its prototype
- static methods that are written into the function itself and callable as `MyClass.staticMethod()`

## 3.6 Class inheritance, super

```
class Rabbit extends Animal { }
```

- The extends keyword actually adds a [[Prototype]] reference from Rabbit.prototype to Animal.prototype

- `super.method(...)` to call a parent method

- `super(...)` to call a parent constructor (inside our constructor only)

> In an inheriting class, the corresponding constructor function is labelled with a special internal property `[[ConstructorKind]]:"derived"`.
> 1⃣️ When a normal constructor runs, it creates an empty object as this and continues with it.
> 2⃣️ But when a derived constructor runs, it doesn’t do it. It expects the parent constructor to do this job.

> When a function is specified as a class or object method, its `[[HomeObject]]` property becomes that object. 

> static method 不会被继承

### 3.6.1 Natives are extendable

```
class PowerArray extends Array {
  isEmpty() {
    return this.length === 0;
  }
}

let arr = new PowerArray(1, 2, 5, 10, 50);
alert(arr.isEmpty()); // false

let filteredArr = arr.filter(item => item >= 10);
alert(filteredArr); // 10, 50
alert(filteredArr.isEmpty()); // false

arr.constructor === PowerArray
```

Please note one very interesting thing. Built-in methods like filter, map and others – return new objects of exactly the inherited type. They rely on the constructor property to do so.

```
class PowerArray extends Array {
  isEmpty() {
    return this.length === 0;
  }

  // built-in methods will use this as the constructor
  static get [Symbol.species]() {
    return Array;
  }
}

let arr = new PowerArray(1, 2, 5, 10, 50);
alert(arr.isEmpty()); // false

// filter creates new array using arr.constructor[Symbol.species] as constructor
let filteredArr = arr.filter(item => item >= 10);

// filteredArr is not PowerArray, but Array
alert(filteredArr.isEmpty()); // Error: filteredArr.isEmpty is not a function
```

## 3.7 Class checking: "instanceof"

- instanceOf: 只比对 prototypes

# 4. mixin

```
Object.assign(User.prototype, sayHiMixin);
```