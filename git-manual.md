# Gitの使い方

Gitとはファイルのバージョンを管理するツールです。簡単に説明すると過去の変更履歴が観れるということです。

実際の例で考えてみましょう。ファイルに変更を加えたところプログラムが動作しなくなった。変更前のファイルに戻したいと思いますよね。そういうときにGitは役に立ちます。

## Gitの基本操作

それでは、Gitを使う準備をしましょう。ファイルのバージョンを管理する場所のことをリポジトリと呼びます。最初にリポジトリを初期化する必要があります。次のコマンドを入力します。

```
$ git init
```

次にGitで管理するファイルを指定します。ステージングと呼びます。次のコマンドを入力します。

```
$ git add ファイル名
```

全部管理する場合は、カレントディレクトリ`.`を指定します。最後に、ステージングされた全ファイルを一つのバージョンとしてGitに登録します。それをコミットと呼びます。次のコマンドを入力します。

```
$ git commit -m 'メッセージ'
```

どんな変更を加えたかをメッセージとして登録します。

## 複数人でGit

複数人でリポジトリを共有する場合にリモートリポジトリが必要となります。
リモートリポジトリに対して個々のコンピュータにあるリポジトリをローカルリポジトリと呼びます。

まず、リモートリポジトリのアドレスを指定してローカルリポジトリにコピーします。次のコマンドを入力します。

```
$ git clone リモートリポジトリのアドレス
```

ローカルリポジトリで自由に作業をします。
リモートリポジトリに反映させるには次のコマンドを入力します。

```
$ git push origin master
```

一方、リモートリポジトリをローカルリポジトリに反映させるには次のコマンドを入力します。

```
$ git pull origin master
```

## その他のコマンド

```
$ git status
```

現在のGitの状態を確認できます。

```
$ git log
$ git reset
$ git show
$ git diff
```

## コマンド一覧

init
add
commit

remote
clone
push
pull

status
log
diff

start a working area (see also: git help tutorial)
   clone      Clone a repository into a new directory
   init       Create an empty Git repository or reinitialize an existing one

work on the current change (see also: git help everyday)
   add        Add file contents to the index
   mv         Move or rename a file, a directory, or a symlink
   reset      Reset current HEAD to the specified state
   rm         Remove files from the working tree and from the index

examine the history and state (see also: git help revisions)
   bisect     Use binary search to find the commit that introduced a bug
   grep       Print lines matching a pattern
   log        Show commit logs
   show       Show various types of objects
   status     Show the working tree status

grow, mark and tweak your common history
   branch     List, create, or delete branches
   checkout   Switch branches or restore working tree files
   commit     Record changes to the repository
   diff       Show changes between commits, commit and working tree, etc
   merge      Join two or more development histories together
   rebase     Forward-port local commits to the updated upstream head
   tag        Create, list, delete or verify a tag object signed with GPG

collaborate (see also: git help workflows)
   fetch      Download objects and refs from another repository
   pull       Fetch from and integrate with another repository or a local branch
   push       Update remote refs along with associated objects

