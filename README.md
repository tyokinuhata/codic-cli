# How to use

### Setup

```bash
$ npm i
$ chmod +x ./codic.js
```

### Commands

#### アクセストークンの設定

https://codic.jp/my/api_status からアクセストークンを取得し, 以下のコマンドを実行する.

```bash
$ ./codic.js conf token <your_access_token>
```

#### 命名規則の設定

命名規則の設定はオプション.

```bash
$ ./codic.js conf casing <casing>
```

命名規則に使用可能な文字列

|命名規則|指定方法|例|
|:--|:--|:--|
|キャメルケース|camel|casingEsample|
|パスカルケース|pascal|CasingExample|
|スネークケース|snake|casing_example|
|アッパーケース|upper|CASING_EXAMPLE|
|ケバブケース|kebab|casing-example|
|スペース区切り|space|casing example|

#### 設定一覧の表示

各設定項目(アクセストークン, 命名規則)の設定状況を表示する.

```bash
$ ./codic.js conf list
```

#### ネーミングの取得

casingはオプションのため付けなくて良い.  
casingに指定可能な命名規則については**命名規則の設定**を参照.

```bash
$ ./codic.js get <japanese_word> <casing>
```

#### ヘルプの表示

各コマンドの使い方や機能, 指定できるオプションを表示する.

```bash
$ ./codic.js help
```

#### ネーミング履歴を表示

```bash
$ ./codic.js history
```

#### ネーミング履歴の削除

```bash
$ ./codic.js history clear
```