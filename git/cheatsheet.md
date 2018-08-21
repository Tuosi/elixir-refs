# Cheat Sheet

## Normal Flow

````
  git init

  git add [file1] [file2] # git add .

  git commit -m "init"

  git push
````

## New

````
  git clone [remoteurl] [localpath]

  git clone --depth=10 [remoteurl] # fast clone (download last 10 commits)

  git pull origin [branchname]

  git push origin [branchname]

  git remote add origin [remoteurl]

  git push -u origin master
````

## Commit

````
  git commit -m

  git commit -v

  git commit -a
````

## Branch

````
  git branch [branchname]

  git checkout [branchname]

  git merge [branchname]

  git branch -d

  git branch -m

  git branch -v

  git branch -a
````

## Remote

````
  git remote

  git remote -v

  git fetch # fetch changes and stores into origin/master branch

  git merge origin/master # merge the fetched stuff origin/master

  git rebase [dev-branch]

  git pull

  git pull --rebase [remotename] [branchname]
````

[configuring-a-remote-for-a-fork](https://help.github.com/articles/configuring-a-remote-for-a-fork/)

[syncing-a-fork](https://help.github.com/articles/syncing-a-fork/)

## Inspect

````
  git status

  git status -s

  git branch -a

  git diff [filename]

  git diff --staged

  git log --oneline

  git show head
````

## Switch

````
  git checkout .

  git checkout [branchname]

  git checkout [commitcode]

  git reset head (git reset .)

  git reset [commitcode]
````

## Stash

````
  git stash

  git stash save [name]

  git stash list

  git stash show

  git stash show -p

  git stash show stash@{0}

  git stash apply

  git stash pop

  git stash pop stash@{0}

  git stash drop

  git stash drop stash@{0}

  git stash clear
````

## Clean

````
  git rm [filename1] [filename2]

  git rm -r [foldername]

  git rm -f [filename] # remove staging file

  git rm --cached [filename] # remove without delete for real

  git mv [from-filename] [to-filename] # rename file

  git remote prune origin # cleanup outdated refs to remote branches
````

## Config

````
  git config --list # show all settings

  git config --global user.name 'Wende Lu'

  git config --global user.email wendelu1991@gmail.com
````

setting: ~/.gitconfig
````
  [user]
    name = Wende Lu
    email = wendelu1991@gmail.com
  [push]
    default = matching
  [alias]
    st = status
    co = checkout
    br = branch
    up = rebase
    ci = commit
    last = log -1 HEAD
    unstage = reset HEAD --
  [core]
    editor = vim
    excludesfile = /Users/wendelu/.gitignore_global
  [color]
    ui = true
  [merge]
    tool = vimdiff
  [commit]
    template = /Users/wendelu/.stCommitMsg
  [filter "lfs"]
    clean = git-lfs clean -- %f
    smudge = git-lfs smudge -- %f
    process = git-lfs filter-process
    required = true
````

## .gitignore

[gitignore-repo](https://github.com/github/gitignore)

