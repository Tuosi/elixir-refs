# Elixir Guide: Getting Started

## 1. Intro
- install elixir and erlang
- interactive mode: iex
- bin: elixir, elixirc, iex

## 2. Basic Types

### General
- iex i: check data type
- iex h: check helpers
- immutable: cannot change it, only transform it.

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
    * `[1] ++ [2, 3, 4, 5]` is better than `[1, 2, 3, 4] ++ [5]`
- Tuples are stored contiguously in memory
  +  getting the tuple size or accessing an element by index is fast
  +  updating or adding elements to tuples is expensive (create new)
  +  common use case for return information `{:ok, "result"}`

### Size vs Length
-  **size**: operation is in constant time
  +  tuple_size, byte_size
-  **length**: operation is linear
  +  length, String.length

## 3. Basic Operators
- String: `<>`
- List: `++; --`
- Logic (short-circuit operators):
  + `&&; ||; ! # simple mode`
  + `and; or; not # strict mode`
- Comparision:
  + `== # simple mode`
  + `=== # strict mode`
- Type Comparision:
  + number < atom < reference < function < port < pid < tuple < map < list < bitstring

## 4. Pattern matching

### The Match Operator
- `=` is not assign operator, is match operator
- think it as regular expression match operator, similarly
- if match success return the whole matched value
- if match fail return (MatchError) no match of right hand side value

````elixir
x = 1 # 1
1 = 1 # 1
1 = 2 # (MatchError)
````

### Pattern matching
- assigning value to variable
- destructuring more complex data types

````elixir
# success
{a, b, c} = {:hello, "world", 42}
# fail when diff size
{a, b, c} = {:hello, "world"} # (MatchError)
# fail when diff type
{a, b, c} = [:hello, "world", 42] # (MatchError)

# list
[head | tail] = [1, 2, 3] # head: 1, tail: [2, 3]
[head | tail] = [] # (MatchError)
# list appending
list = [1, 2, 3]
[0 | list] # [0, 1, 2, 3]

# cannot make function calls on the left side of a match
length([1, 2, 3]) = 3 # (CompileError)
````

### The pin operator
````elixir
a = 1 # 1
^a = 1 # 1
^a = 2 # (MatchError)
a = 2 # 2
````

## 5. case, cond, and if

### case
````elixir
case {:foo, 10} do
  {:foo, x} when x > 100 -> "big first #{x}"
  {:foo, x} -> "first #{x}"
  {:bar, x} -> "second #{x}"
  _ -> "last"
end
# first 10

# like anonymous function
func = fn
  x, y when x > 0 and y > 0 -> x + y
  x, y when x > 0 and y < 0 -> x - y
  x, y when x < 0 and y > 0 -> y - x
  x, y when x < 0 and y < 0 -> -(x + y)
end
func.(1, 2) # 3
func.(1, -2) # 3
func.(-1, 2) # 3
func.(-1, -2) # 3
````

### cond
````elixir
cond do
  1 + 1 == 1 -> "should be 2"
  1 - 1 == 1 -> "should be 0"
  1 * 1 == 1 -> "should be 1"
  true -> "ok"
end
# "should be 1"
````

### if and unless
````elixir
if true, do: "success" # "success"
unless true, do: "fail" # nil
if false, do: "success", else: "fail" # fail
````

## 6. Binaries, strings, and charlists

````elixir
string = "hello" # "hello"
is_binary(string) # true
is_bitstring(string) # true
````

### UTF-8 and Unicode
- A string is a UTF-8 encoded binary
- Understand bytes and code points:
  + A string is a bunch of bytes organized in a way to represent certain code points, as specified by the UTF-8 encoding.
  + The Unicode standard assigns code points to many of the characters
    * the letter a has code point 97 while the letter ł has code point 322
  + Convert this sequence of characters to bytes when writing to disk
    * one byte can only represent a number from 0 to 255

````elixir
string = "hełło" # "hełło"
byte_size(string) # 7 (counts the underlying raw bytes)
String.length(string) # 5 (counts characters)
String.codepoints("hełło") # ["h", "e", "ł", "ł", "o"]
?a # 97
?ł # 322
````

### Binaries (and bitstrings)
- Define a binary using `<<>>`
- A binary is a sequence of bytes
- A string is a UTF-8 encoded binary
- A binary is a bitstring where the number of bits is divisible by 8
  + 99% of the time you will be working with binaries and using the is_binary/1 and byte_size/1 functions

````elixir
<<0, 1, 2, 3>>
byte_size(<<0, 1, 2, 3>>) # 4
String.valid?(<<239, 191, 19>>) # false
<<0, 1>> <> <<2, 3>> # <<0, 1, 2, 3>>
# trick: concat the null byte <<0>> to a string to see its inner binary
"hełło" <> <<0>> # <<104, 101, 197, 130, 197, 130, 111, 0>>

# binary
<<255>> # <<255>>
<<256>> # <<0>> (truncated)
<<256 :: size(16)>> # <<1, 0>> (use 16 bits (2 bytes) to store it)
<<256 :: utf8>> # "Ā" (the number is a code point)
<<256 :: utf8, 0>> # <<196, 128, 0>>

# bits
<<1 :: size(1)>> # <<1::size(1)>> (1 bit)
<<2 :: size(1)>> # <<0::size(1)>> (truncated)
is_binary(<<1 :: size(1)>>) # false (is no longer a binary)
is_bitstring(<<1 :: size(1)>>) # true (a bunch of bits)
bit_size(<< 1 :: size(1)>>) # 1

# is_binary
is_binary(<<1 :: size(16)>>) # true
is_binary(<<1 :: size(15)>>) # false

# pattern matching
<<0, 1, x>> = <<0, 1, 2>> # (x is 2)
<<0, 1, x :: binary>> = <<0, 1, 2, 3>> # (x is <<2, 3>>)
"he" <> rest = "hello" # (rest is "llo")
````

### Charlists
- A charlist is nothing more than a list of code points
  + while double-quotes represent a string (i.e. a binary)
  + single-quotes represent a charlist (i.e. a list)
- charlists are used mostly when interfacing with Erlang

````elixir
'hełło' # [104, 101, 322, 322, 111]
is_list 'hełło' # true
List.first('hello') # 104

# convert a charlist to a string and back
# by using the to_string/1 and to_charlist/1 functions
to_string('hello') # "hello"
to_charlist("hello") # 'hello'

# concat
"foo" <> "bar" # "foobar"
'foo' ++ 'bar' # 'foobar'
````

## 7. Keyword lists and maps

### Keyword lists
- a list of 2-item tuples as the representation of a key-value data structure
- list of tuples and the first item of the tuple (i.e. the key) is an atom
- features:
  + Keys must be atoms.
  + Keys are ordered, as specified by the developer.
  + Keys can be given more than once.
- are not very useful with pattern matching (need same length)
- keyword lists are used in Elixir mainly for passing optional values

````elixir
list = [{:a, 1}, {:b, 2}]
list == [a: 1, b: 2] # true
list ++ [c: 3] # [a: 1, b: 2, c: 3]

new_list = [a: 0] ++ list # [a: 0, a: 1, b: 2]
new_list[:a] # 0

if false, do: :this, else: :that # :that
if(false, [do: :this, else: :that]) # :that
if(false, [{:do, :this}, {:else, :that}]) # :that
````

### Maps
- features:
  + Maps allow any value as a key.
  + Maps’ keys do not follow any ordering.
- are very useful with pattern matching

````elixir
map = %{:a => 1, :b => 2}
map == %{a: 1, b: 2} # true

# fetch
map[:a] # 1
map[:c] # nil

# fetch (assertive style) (prefer)
map.a # 1
map.c # ** (KeyError) key

# pattern matching
%{a: x} = %{:a => 1, :b => 2} # (a is 1)

Map.get(%{a: 1, b: 2}, :a) # 1
Map.put(%{a: 1, b: 2}, :c, 3) # %{a: 1, b: 2, c: 3}
Map.to_list(%{a: 1, b: 2}) # [a: 1, b: 2]

%{%{a: 1, b: 2} | b: 1} # %{a: 1, b: 1} (update)
%{%{a: 1, b: 2} | c: 3} # ** (KeyError) key :c not found in
````

### Nested data structures
````elixir
users = [
  wende: %{name: "Wende", age: 18, langs: ["erl", "ruby", "elixir"]},
  zhaobo: %{name: "Zhaobo", age: 19, langs: ["elixir", "f#", "java"]}
]

users[:wende].age # 18
put_in users[:wende].age, 31 # return updated users
update_in users[:zhaobo].langs, fn langs -> List.delete(langs, "java") end

# put_in/2 put_in/3
# update_in/2 update_in/3
# get_and_update_in/2 get_and_update_in/3
````

## 8.Modules and functions

### Compilation
- Elixir projects are usually organized into three directories:
  + **ebin** - contains the compiled bytecode
  + **lib** - contains elixir code (usually .ex files)
  + **test** - contains tests (usually .exs files)

### Named functions
````elixir
defmodule Math do
  def zero?(0), do: true
  def zero?(x) when is_integer(x), do: false
end

IO.puts Math.zero?(0)         # true
IO.puts Math.zero?(1)         # false
IO.puts Math.zero?([1, 2, 3]) # ** (FunctionClauseError)
IO.puts Math.zero?(0.0)       # ** (FunctionClauseError)
````

### Function capturing
- name/arity to refer to functions

````elixir
Math.zero?(0) # true
func = &Math.zero?/1 # &Math.zero?/1
func.(0) # true
is_function(func) # true
(&is_function/1).(func) # true

# same as fn x -> x + 1 end
func1 = &(&1 + 1)
func1.(1) # 2

# same as fn x -> "Good #{x}" end
func2 = &"Good #{&1}"
func2.("morning") # "Good morning"
````

## Default arguments
````elixir
defmodule Concat do
  def join(a, b \\ nil, sep \\ " ")
  def join(a, b, _sep) when is_nil(b), do: a end
  def join(a, b, sep), do: a <> sep <> b end
end

IO.puts Concat.join("Hello", "world")      #=> Hello world
IO.puts Concat.join("Hello", "world", "_") #=> Hello_world
IO.puts Concat.join("Hello")               #=> Hello
````

## 9. Recursion