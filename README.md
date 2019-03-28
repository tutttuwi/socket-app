# ソケットサーバー

## 作成元情報

- Node.js + Express + Socket.io で簡易チャットを作ってみる

  - <https://qiita.com/riku-shiru/items/ffba3448f3aff152b6c1>

- Bootstrap テンプレート
  - <https://techacademy.jp/magazine/6270>

## 環境構築

- AWS EC2インスタンス Amazon Linux2
- Nodejsのインストール

```bash
// nodejsインストール
sudo yum install -y gcc-c++ make
curl -sL https://rpm.nodesource.com/setup_10.x | sudo bash -
sudo yum install -y nodejs

// gitインストール
sudo yum install git

// node-modulesインストール
cd socketServer
sudo npm install

// forever インストール
sudo npm install forever -g

// 実行
sudo forever start -a -d app.js

// メモ
// 権限がない場合適宜 `sudo` を付与してコマンドを実行すること

```

amazon linuxでうまくforeverがインストールできなかったので、ubuntuで再試行

- ubuntuはユーザ名が「ubuntu」
- セットアップ参考サイト
  - <https://qiita.com/seibe/items/36cef7df85fe2cefa3ea>

## 装飾関連

- Bootstrap4に用意されているクラス
  - <https://webnetamemo.com/coding/bootstrap4/201710065870>

- CSSで右寄せ
  - <https://www.sejuku.net/blog/72034>

## 実装したこと
- 上部がタイトル領域（保存ファイル名になるので拡張子まで入れること）
- 下部が本文領域
- タイトル、本文を入力して登録ボタンを押下すると、アプリの中の `data` ディレクトリにファイルが保存される


## 理解したことリスト
- `nodejs` で `socket.io` を使用する方法がわかった
- 
