

retry logic

```
begin
  retries ||= 0
  puts "try ##{ retries }"
  raise "the roof"
rescue
  retry if (retries += 1) < 3
end
```


[[1,2],[3,4]].flat_map {|e| e.map {|ee| ee + 1}}