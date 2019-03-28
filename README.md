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
npm install

// forever インストール
npm install forever -g
// 実行
forever start -a -d app.js

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

