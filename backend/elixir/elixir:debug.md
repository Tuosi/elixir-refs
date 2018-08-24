# Debug

## (IO.inspect)[https://hexdocs.pm/elixir/IO.html#inspect/2]

**思路**：在运行时打印出当前的数据。

inspect with label：可以给打印的信息加上标签。

inspect binding：可以查看所有绑定当前上下文的变量。

## (apex)[https://github.com/BjRo/apex]

**思路**：更加性感的打印格式，看着更爽。

```elixir
  data = [false, 42, ~w(forty two), [time: "now"], %{foo: :bar}]

  Apex.ap data # default print (array with index)

  Apex.ap(data, numbers: false) # print array without index
```

```elixir
  import Apex.AwesomeDef

  # print func invocation and return details
  adef test(a, b) do
    a + b
  end
```

## (IEx.pry)[https://hexdocs.pm/iex/IEx.Pry.html#pry/2]

思路：打断点，可以实时查看当前作用域下的值。

`require IEx; IEx.pry`

## :debugger


