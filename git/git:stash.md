# Stash

## Save

`git stash`

`git stash save 'foo'` # 保存并添加备注

# List

`git stash list`

## Show

`git stash show`

`git stash show -p`

`git stash show stash@{0}`

## Retrieve

`git stash pop` # 取出并在stash栈中删除

`git stash apply` # 取出但不在stash栈中删除

`git stash pop stash@{0}` # 取出特定的stash

`git stash pop --index` # 取出并保留之前的状态


## Remove

`git stash drop`

`git stash drop stash@{0}`

`git stash clear`