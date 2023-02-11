# SunshineLiveStreams
マリオサンシャインの生配信一覧を表示できるツールです。
設定を変更すれば、他のゲームにも使えます。

<img src="https://user-images.githubusercontent.com/46115363/218242458-7bdde38c-5298-4e4e-8656-71df492fb11a.png" width="400">

# ダウンロード
１．緑色の「Code」をクリックして、「Download ZIP」をクリックしてください。

<img src="https://user-images.githubusercontent.com/46115363/218242972-aec14f1d-746c-4ea7-ab4f-c8c05b5ceb5c.png" width="400">

２．ダウンロードが完了したら、右クリックして、「すべて展開」を選択してください。

<img src="https://user-images.githubusercontent.com/46115363/218243125-eff21a2a-2f43-45c6-b8aa-552e79291859.png" width="400">

# 初期設定
Twitch用とYouTube用の準備が必要です。
ダウンロードしたフォルダの中にある設定ファイル`settings.js`の中身を書き替えます。

<img src="https://user-images.githubusercontent.com/46115363/218244647-0f944dd8-9b27-49df-8fce-8b26d62eb948.png" width="400">

## Twitch用の準備
Twitchの配信を取得するには`ClientId`と`ClientSecret`というものを発行する必要があります。
Twitchの配信が不要な人は、この手順をスキップしてもかまいません。
けっこう面倒なので、楽をしたい方は制作者にご連絡ください。

１．[Twitch Developers](https://dev.twitch.tv/)に行き、ログインします。

２．[Console Page](https://dev.twitch.tv/console/apps)で「アプリケーションを登録」を選択します。

３．必要事項を入力して、「作成」をクリックします。アプリケーションの名前とカテゴリーは適当でかまいません。OAuthのリダイレクトURLは`http://localhost`と入力してください。

<img src="https://user-images.githubusercontent.com/46115363/218243537-bbd9fe82-4b12-44ea-a35b-74bc978b5ff5.png" width="400">

４．もし、２段階認証を有効にしてくださいと言われてしまった場合は、[Security and Privacy](https://www.twitch.tv/settings/security)に行き、２段階認証を有効にしてください。

５．[Console Page](https://dev.twitch.tv/console/apps)にアプリケーションが追加されているので「管理」をクリックします。

６．クライアントIDの文字列をコピーし、`settings.js`のclientIdの右にある""の間にペーストします。

７．「新しい秘密」をクリックして表示される文字列をコピーし、`settings.js`のclientSecretの右にある""の間にペーストします。

```
const settings = {
	twitch: {
		clientId: "abcdefghijklmnopqrstuvwxyz1234",
		clientSecret: "abcdefghijklmnopqrstuvwxyz1234",
		gameId: "6086",
	},
	youtube: {
		key: "",
		query: "マリオサンシャイン",
	}
};
```

## YouTube用の準備
YouTubeの配信を取得するには`API key`というものを発行する必要があります。
YouTubeの配信が不要な人は、この手順をスキップしてもかまいません。

１．[APIキーの取得手順](https://qiita.com/shinkai_/items/10a400c25de270cb02e4)の説明に従ってAPIキーを作成します。

２．作成したAPIキーの文字列をコピーし、`settings.js`のkeyの右にある""の間にペーストします。

```
const settings = {
	twitch: {
		clientId: "abcdefghijklmnopqrstuvwxyz1234",
		clientSecret: "abcdefghijklmnopqrstuvwxyz1234",
		gameId: "6086",
	},
	youtube: {
		key: "abcdefghijklmnopqrstuvwx-12345678901234",
		query: "マリオサンシャイン",
	}
};
```

# 起動方法
１．「index.js」をダブルクリックします。

<img src="https://user-images.githubusercontent.com/46115363/218244731-92cd2b6a-b601-4d46-81f8-0b7112cd3659.png" width="400">

# その他
Q.他のゲームの配信情報を取得できますか？

A.`settings.js`のgame_idやqueryを書き替えればできます。game_idは[一覧](https://raw.githubusercontent.com/Nerothos/TwithGameList/master/game_info.json)から探してください。例えば、スーパーマリオ64のgame_idは2692です。

Q.1列に表示する動画の数を変更できますか？

A.`style.css`内の2か所の`grid-template-columns: repeat(3, 1fr);`の`3`を好きな列数に変えてください。例えば、4に変更すると以下のような4列表示になります。

<img src="https://user-images.githubusercontent.com/46115363/218245078-2e9f2653-c09d-4ce4-92b5-1788834cc117.png" width="400">
