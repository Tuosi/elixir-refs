# Elixir Guide: Getting Started

## 1. Intro

- install elixir and erlang

- interactive mode: iex

- bin: elixir, elixirc, iex

## 2. Basic Types

### features:

- immutable: cannot change it, only transform it.

- iex i: check data type

- iex h: check helpers

### Basic

````elixir
# integer, float, string, boolean, atom, list, tuple, map, etc.
{1, 2, 3} # tuple
[1, 2, 3] # list
[a: 1, b: 2] # list (keywords)
%{a: 1, b: 2} # map
%User{name: "tom"} # map (struct)
````

### Number

````elixir
0b11 # => 3
0o11 # => 9
0x11 # => 17

1.0e2  # => 100
1.0e-2 # => 0.01

10 / 3     #=> 3.333...
div(10, 3) # => 3
rem(10, 3) # => 1

round(3.5) # => 4
trunc(3.5) # => 3
````

### Boolean

````elixir
true; false; # atom
is_boolean(true) # true
is_atom(true) # true
````

### Atom

````elixir
is_atom(:true) # true
is_atom(true) # true
:true == true # true
is_atom(Foo) # true
````

### String

````elixir
"foo
bar" # "foo\nbar"
"foo #{:bar}" # "foo bar"
is_bitstring("foo") # true
byte_size("hellö") # 6
String.length("hellö") # 5
String.upcase("hellö") # "HELLÖ"
````

### Function

````elixir
add = fn x, y -> x + y end
is_function add # true
is_function add, 2 # true
add.(1, 2) # 3

# closure
double = fn x -> add.(x, x) end
double.(3) # 6

# define and call directly
(fn x -> add.(x, x) end).(3) # 6
````

### (Linked) List

````elixir
list = [1, 2, 3, true]
length list # 4
[1, 2] ++ [1, 2] # [1, 2, 1, 2]
[1, 2, 1, 2] -- [1, 2] # [1, 2]

# head, tail
hd [1, 2, 3] # 1
tl [1, 2, 3] # [2, 3]
hd [] # ** (ArgumentError) argument error
tl [] # ** (ArgumentError) argument error

# printable ASCII numbers
?h # 104
[104, 101, 108, 108, 111] # 'hello'
'hello' == "hello" # false
````

### Tuple

````elixir
tuple = {:ok, "result"}
tuple_size tuple # 2
elem tuple, 1 # "result"
put_elem tuple, 1, "foo" # {:ok, "foo"}
````

### List vs Tuple
- Lists are stored in memory as linked lists
    + accessing the length of a list is a linear operation
        * traverse the whole list
    + concatenation depends on the length of the left-hand list
        * traverse the whole left-hand list
        * `[1] ++ [2, 3, 4, 5]` is better than `[1, 2, 3, 4] ++ [1]`
- Tuples are stored contiguously in memory
    +  getting the tuple size or accessing an element by index is fast
    +  updating or adding elements to tuples is expensive (create new)
    +  common use case for return information `{:ok, "result"}`

### Size vs Length
-  **size**: operation is in constant time
    +  tuple_size, byte_size
-  **length**: operation is linear
    +  length, String.length
