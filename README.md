学習用リポジトリです。

## JavaScriptの始め方

```
<!DOCTYPE html>
<html lang="ja">
    <head>
    <meta charset="UTF-8">
    <title>JavaScript</title>
    <script src="JavaScriptのソースファイル"></script>
    </head>
    <body>  
    </body>
</html>
```

```
document.write('Hello World!');
consle.log('Hello World!');
```

ブラウザ上にHello World!が表示され、コンソールにもHello World!が表示されると思います。
コンソールというのはブラウザ上で右クリックでメニューを出し、「検証する」を選ぶと出てきます。
ブラウザによってコンソールの表示方法が異なるので、必要に応じて調べてください。

## 基本的な役職

### write

文字列およびHTMLで記述された文書をブラウザに表示します。

構文

```
document.write(markup);
```

markup: 文字列およびHTMLで記述された文書

補足ですが、文字列は`'`で囲みます。また、ソースの先頭、もしくは`;`から`;`までを文と呼びます。

## 簡単な計算

記号 | 説明
------------ | -------------
+ | 足し算
- | 引き算
* | 掛け算
/ | 割り算
% | 余り

```
document.write('<ul>');
document.write('<li>2 + 3 = '+(2+3)+'</li>');
document.write('<li>5 - 4 = '+(5-4)+'</li>');
document.write('<li>3 * 9 = '+(3*9)+'</li>');
document.write('<li>8 / 4 = '+(8/4)+'</li>');
document.write('<li>12 % 5 = '+(12%5)+'</li>');
document.write('</ul>');
```

```
2 + 3 = 5
5 - 4 = 1
3 * 9 = 27
8 / 4 = 2
12 % 5 = 2
```

計算式と計算結果が箇条書きに表示されます。JavaScriptでは文字列も数値も足し算できるようになっています。
実際の計算式の部分`(2+3)`などは左右の文字列と別に計算するために括弧でくくっています。
括弧がなければ全部そのままの文字列として表示されてしまうかもしれません。

失敗例

```
2 + 3 = 2+3
```

## 変数を使う

数値や文字列を一時的に保存している箱があると思ってください。
箱には、数値や文字列を自由なタイミングで出し入れすることできます。それが変数というものです。
先ほどのプログラムでいくつかの計算をしましたが、結果をあとから利用することができません。
しかし、変数に入れておけばプログラムが終了するまで自由に利用できます。

```
var x = 5;
```

`var`
`=`

## 関数を使う



## コンソールを使う

プログラムに不具合が出たときに

## HTMLを動的に変更する

`document.write`でもできないことはないのですが、面倒なのでもう使いません。
HTMLの各要素にアクセスするための仕組みをDOM（Document Object Model）と呼びます。
DOMの操作によってHTMLの要素の特定と特定した要素を変更することができるようになります。

### document.getElementById

HTMLの要素にIDを使ってアクセスする

構文
```
element = document.getElementById(id);
```

要素の変更の例
```
element.innerHTML = 'HTMLの要素内の文字列';
```

```
<p id="dom">ここに入るよ</p>
```

これを次のように変更するプログラムを書きます。
```
<p id="dom">ここに入ったよ</p>
```

```
// domというIDで要素を特定
var dom = document.getElementById('dom');
dom.innerHTML = 'ここに入ったよ';
```

[タグで要素を特定する]() document.getElementsByTagName

[classで要素を特定する]() document.getElementsByClassName

## イベントに応じた処理

ボタンをクリックした時に画面になにか表示したい、ということはよくあることだと思います。
そのようなときはクリックしてほしい要素をイベントリスナーに登録します。

```
<button id="btn1">押してね</button>
```

```
var btn = document.getElementById('btn1');
btn.addEventListener('click', function(){
    document.write('ボタンを押したよ!');
});
```

### addEventListener

要素をイベントリスナーに登録する

構文
```
addEventListener(event, func);
```

event 'click'などのイベント名

func そのときの処理

次のような形で表現してもオーケーです。

```
function(){
    // ここに処理を記述
}
```

