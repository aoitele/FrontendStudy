drop table if exists users;
create table users
(
    id serial ,
    username varchar,
    insert_date date,
    update_date date,
    icon  varchar
);

insert into users
(id,username,insert_date,update_date, icon)
values (1,
'どらえもん', 
'2120-01-01',
'2150-01-01',
'icon1'),
(2,
'のびたくん', 
'1970-02-02',
'1970-02-02',
'icon2'),
(3,
'どらみちゃん', 
'2120-03-03',
'2150-03-03',
'icon3'),
(4,
'ばたこさん', 
'2020-01-01',
'2020-01-01',
'https://pics.prcm.jp/99be79b98d98a/67288185/png/67288185.png'),
(5,
'ジャムおじさん', 
'1999-02-02',
'1999-02-02',
'https://www.cinemacafe.net/imgs/zoom/441178.jpg'),
(6,'あんぱんさん', 
'2020-03-03',
'2020-03-03',
'https://d11w49g8ylcixs.cloudfront.net/upload/save_image/500/724923_18_01.jpg'),
(7,
'クリームぱんさん', 
'2021-01-01',
'2021-01-01',
'https://www.meibu2.net/img/item/47.jpg'),
(8,
'コロネさん', 
'1975-02-02',
'1975-02-02',
'https://blog-imgs-113.fc2.com/b/i/g/bigbobby/20191006121759fb9.jpg'),
(9,'ツナマヨさん', 
'2020-03-03',
'2020-03-03',
'https://haruchika777.com/wp-content/uploads/2019/06/seveneleven-tuna-mayo-onigiri2020-02-25-01.jpg');






create table recipes
(recipeID serial ,
recipename varchar,
cookingtime int,
explain varchar,
insert_date date,
update_date date,
img varchar,
category varchar,
userID serial
);

insert into recipes
values(
1,
'世界一のかぼちゃプリン',
30,
'全米が認めた濃厚さです。',
'2020-04-04',
'2020-05-05',
'https://asset.oceans-nadia.com/upload/save_image/c3/c3f196582332cc0a96468577615d44f5.jpeg?impolicy=insidewm&w=410&h=614',
'おやつ',
4
),
(2,
'もちもちどら焼き',
20,
'たっぷりのあんこが決め手です。',
'2020-06-06',
'2020-07-07',
'https://asset.oceans-nadia.com/upload/save_image/45/45a79a7f73fa700cb7c2f2170273a5fa.jpg?impolicy=insidewm&w=410&h=614',
'おやつ',
5
),
(3,
'丸ごとみかん大福',
50,
'みかんを丸ごと包んでみました',
'2020-08-08',
'2020-09-09',
'https://asset.oceans-nadia.com/upload/save_image/00/0030b6dc2d751893d117c476bac47eb1.jpeg?impolicy=insidewm&w=410&h=614',
'おやつ',
6
),
(4,
'元気が出るカツサンド',
30,
'おいしすぎてうきうきしちゃいます。',
'2020-10-10',
'2020-11-11',
'https://asset.oceans-nadia.com/upload/save_image/56/560e8d6ebffb.jpg?impolicy=insidewm&w=410&h=614',
'主食',
7
),
(5,
'ザクザク甘辛チキン',
40,
'ガリガリのザクザクです。カロリーは美味しい',
'2020-12-12',
'2021-01-01',
'https://asset.oceans-nadia.com/upload/save_image/6e/6e8fb5f34debab7a105a957df932fdf6.jpeg?impolicy=insidewm&w=410&h=614',
'副菜',
8
),
(6,
'無限はちみつナッツ',
10,
'ナッツを洋酒とはちみつで漬けちゃいました。',
'2021-02-02',
'2021-03-03',
'https://asset.oceans-nadia.com/upload/save_image/c8/c89ef21664dc8a7fb4e6d877a5b642b1.jpeg?impolicy=insidewm&w=410&h=614',
'おやつ',
9
),
(7,
'しあわせのココア',
5,
'もちろん生クリームたっぷりのせておきました。',
'2021-04-04',
'2021-05-05',
'https://asset.oceans-nadia.com/upload/save_image/ee/ee0d603187901f55a0baf68fa9601c9f.jpg?impolicy=insidewm&w=410&h=614',
'おやつ',
4
),
(8,
'給食のカレー',
30,
'みんな大好き給食のカレーですよ',
'2021-06-06',
'2021-07-07',
'https://asset.oceans-nadia.com/upload/save_image/28/28c060fc8292.JPG?impolicy=insidewm&w=410&h=614',
'主食',
5
),
(9,
'伝説のフレンチトースト',
15,
'エリザベス女王のお気に入りという噂',
'2010-01-06',
'2010-04-11',
'https://asset.oceans-nadia.com/upload/save_image/86/86987a72e913e29969559b336d3bb496.jpg?impolicy=insidewm&w=410&h=614',
'主食',
5
),
(10,
'背徳のマカロニチーズ',
20,
'チーズの量は、あふれるまで！',
'2011-11-03',
'2014-02-13',
'https://asset.oceans-nadia.com/upload/save_image/a4/a48fcb805413f4099caf29d7acad5269.jpg?impolicy=insidewm&w=410&h=614',
'主食',
6
),
(11,
'台湾風豆乳スープ',
10,
'あったかスープでほっこり。ラー油がポイント！',
'2012-12-03',
'2014-02-13',
'https://asset.oceans-nadia.com/upload/save_image/75/756331907d1c3ba61d0202e501062457.jpg?impolicy=insidewm&w=410&h=614',
'副菜',
7
),
(12,
'ほっくりかぼちゃもち',
30,
'私のおばあちゃん直伝のレシピです。',
'2021-02-04',
'2021-02-12',
'https://asset.oceans-nadia.com/upload/save_image/37/379faa5eb48bb3d54194f5aafc8d1562.jpg?impolicy=insidewm&w=410&h=614',
'副菜',
8
),
(13,
'さつまいもとくりの秋の炊き込みご飯',
50,
'甘ーい香りが部屋中に広がります。',
'2021-09-04',
'2021-09-12',
'https://asset.oceans-nadia.com/upload/save_image/26/263cb4572de0dc5f4f2a7f68778d7831.jpg?impolicy=insidewm&w=410&h=614',
'主食',
9
),
(14,
'秘伝の恵方巻き',
30,
'この恵方巻きならどの方角でも幸せになれます。',
'2011-02-01',
'2011-02-02',
'https://asset.oceans-nadia.com/upload/save_image/92/923030a01bd13058e2b92b633eb50410.jpg?impolicy=insidewm&w=410&h=614',
'主食',
7
);


create table favorite_recipes
(userID serial,
recipeID serial,
insert_date date);

insert into favorite_recipes
values(1,2,'2121-02-07'),
(1,7,'2122-03-07'),
(1,8,'2121-04-02'),
(1,4,'2123-05-05'),
(1,5,'2124-06-04'),
(1,9,'2122-04-07'),
(1,10,'2121-05-02'),
(1,11,'2123-06-05'),
(1,12,'2124-07-04'),
(2,1,'1979-07-05'),
(2,6,'1975-08-08'),
(2,7,'1978-09-23'),
(2,13,'1979-07-05'),
(2,14,'1975-08-08'),
(2,2,'1978-09-23'),
(2,3,'1975-01-11'),
(3,1,'2123-02-02'),
(3,2,'2130-03-04'),
(3,4,'2141-04-05'),
(3,5,'2131-05-06'),
(3,6,'2131-06-09'),
(3,11,'2131-05-06'),
(3,12,'2131-06-09'),
(3,13,'2131-05-06'),
(3,14,'2131-06-09');



create table recipecooks
(userID serial,
recipeID serial,
insert_date date,
update_date date,
comment varchar)
;

insert into recipecooks
values(1,2,'2121-04-07','2121-07-07','どらやきベストオブザイヤー'),
(1,7,'2121-04-07','2121-07-07','しあわせになれた'),
(1,8,'2121-04-07','2121-07-07',' 給食大好き'),
(1,4,'2121-04-07','2121-07-07','焦げても美味しい'),
(1,5,'2121-04-07','2121-07-07','出来立てが最高'),
(1,9,'2121-04-07','2121-07-07','最高の朝活ができた'),
(1,10,'2121-04-07','2121-07-07','デブ飯上等！'),
(1,11,'2121-04-07','2121-07-07','ワクチンの日に飲みました'),
(1,12,'2121-04-07','2121-07-07','懐かしの味。'),
(2,1,'1975-04-07','1975-07-07','間違いない美味しさ'),
(2,6,'1975-04-07','1975-07-07','美味しくないはずがなかった'),
(2,7,'1975-04-07','1975-07-07','クリームましましで作った'),
(2,13,'1975-04-07','1975-07-07','炊き込みご飯の香りに包まれて暮らしたい'),
(2,14,'1975-04-07','1975-07-07','かぶりつくのが大変でした。綺麗に食べられません。しずかちゃんの前では食べるの禁止'),
(2,2,'1975-04-07','1975-07-07','ドラえもんのために作りました'),
(2,3,'1975-04-07','1975-07-07','今年の夏のベストレシピ'),
(3,1,'2121-04-07','2121-07-07','三時のおやつにぴったり'),
(3,2,'2121-04-07','2121-07-07','来週も作ろう'),
(3,4,'2121-04-07','2121-07-07','元気出た！'),
(3,5,'2121-04-07','2121-07-07','毎日食べたい'),
(3,6,'2121-04-07','2121-07-07','やめられない止まらない'),
(3,11,'2121-04-07','2121-07-07','来週も作ろう'),
(3,12,'2121-04-07','2121-07-07','元気出た！'),
(3,13,'2121-04-07','2121-07-07','毎日食べたい'),
(3,14,'2121-04-07','2121-07-07','ここ最近で一番です')
;



-- -- 仮完成形 
--  SELECT users.username, favorite_recipes.insert_date ,
--   recipes.recipename, recipes.cookingtime, 
--   recipes.explain, recipes.img, recipes.category,
--   recipes.userid AS chefid,
--   recipecooks.comment
--  FROM users INNER JOIN favorite_recipes
--  ON users.id=favorite_recipes.userid
--  LEFT OUTER JOIN recipes ON favorite_recipes.recipeid=recipes.recipeid
--  LEFT OUTER JOIN recipecooks ON favorite_recipes.userid=recipecooks.userid AND favorite_recipes.recipeid=recipecooks.recipeid;

-- -- 料理家とそのレシピのテーブル
--   SELECT users.username,users.icon,
--   recipes.recipename, 
--   recipes.userid AS chefid
--  FROM users INNER JOIN recipes
--  ON users.id=recipes.userid;

-- -- 料理家の情報をとってくる
--  SELECT users.username,users.icon
--  FROM users
--  WHERE id=4;

