# codic-cliとは
らりっくま「ラビットくん 突然だけどcodic-cliについて説明するよ」

ラビット「毎回だけど突然ウサね！」

らりっくま「利用者が増えてきたからね。このページはcodic-cliについて知らない人について説明するためのページなんだ。**codic-cliとは変数やメソッド名の命名に悩んだときにコマンド１つで適切な名前を提案をしてくれるツールなんだ**」

ラビット「全て無料で使えるの！？すごい！」

らりっくま「もちろんクマ。OSSは素晴らしい文化だから「[参照リンク](http://www.opensource.jp/osd/osd-japanese.html)」を読んでほしいクマ。」  
らりっくま「codic-cliは「[参照リンク](https://codic.jp/)」のAPIをラップして作られたCLIのツールなんだ。結果を自動で保存してくれる機能なども実装されていて便利クマ。英語が苦手でブラウザを開くのも億劫なエンジニアにおすすめクマ。」

らびっと「らりっくまくん！ありがとう！これで進捗がうなぎのぼりウサ！」

らりっくま「「よく違法じゃないの？」とか質問が来るから「違法性」についても説明するクマ」  
らりっくま「APIを叩くのは違法なことではないんだ。「[参照リンク](https://ja.wikipedia.org/wiki/DoS%E6%94%BB%E6%92%83)」から引用させてもらうけど「DoS攻撃は、ウェブサービスを稼働しているサーバやネットワークなどのリソース（資源）に意図的に過剰な負荷をかけたり脆弱性をついたりする事でサービスを妨害する攻撃」とあるので生活を豊かにするためにAPIを叩く行為に違法性は一切ないクマ。」

ラビット「じゃあ「APIを叩くのは違法」って言ってる人は嘘ついてるの？」

らりっくま「多分だけど 「APIを普通に叩く分には問題ないけど意図的に過剰な負荷をかけるほど叩くのは違法だ」という意味だと思うクマ。」

ラビット「いつもありがとう！らりっくまくん！これで安心して進捗が出せるウサ！ともだちのバットラビット君にも教えてあげるウサ！」

# つかいかた

### インストール

```bash
$ npm i -g codic-cli
```

### コマンド一覧

#### アクセストークンの設定

https://codic.jp/my/api_status からアクセストークンを取得し, 以下のコマンドを実行する.

```bash
$ codic set token <your_access_token>
```

#### 命名規則の設定

命名規則の設定はオプションのため省略可能.

```bash
$ codic set casing <casing>
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
$ codic set list
```

#### ネーミングの取得

casingはオプション.  
casingに指定可能な命名規則については**命名規則の設定**を参照.  
また, 命名規則は, getコマンドの引数 > 設定ファイル > デフォルト値(camel) の順で優先される.

```bash
$ codic get <japanese_word> <casing>
```

#### ネーミング履歴を表示

```bash
$ codic history
```

#### ネーミング履歴の削除

```bash
$ codic history clear
```

#### ヘルプの表示

各コマンドの使い方や指定できるオプションを表示する.

```bash
$ codic help
```

### バージョンの確認

```bash
$ codic version
```

### 例

```bash
$ codic set token ZEPbvj9CcRdqaSGfwqbrCJf1RAORKjXTOk
$ codic get 得点を取得する
getScore
```

# リンク

[GitHub](https://github.com/tyokinuhata/codic-cli)  
[npm](https://www.npmjs.com/package/codic-cli)  
[漫画村](http://mangamura.org/)  
