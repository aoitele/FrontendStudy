## Vue.js 導入

```
npm install @vue/cli

> + @vue/cli@4.5.13
> added 935 packages from 589
> contributors and audited 935
> packages in 278.463s

※severity vulnerability の
警告が出た場合は npm audit fix も行う
```

## プロジェクト作成

```
npx vue create (アプリ名)

※@vue/cliをローカルインストールしているためnpxより実行

>Vue CLI v4.5.13
>? Please pick a preset: Default ([Vue 2] babel, eslint)

インストールするバージョンを指定できる。
CompositonAPIなど使わない事もあるので、今回は2系で。
```

#### 起動

```
cd (作成したディレクトリ)
npm run serve

DONE  Compiled successfully in 5327ms
App running at:
- Local:   http://localhost:3001/
```

アクセスすると welcome 画面が表示される
