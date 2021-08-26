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
values (1,'どらえもん', 
'2120-01-01','
2150-01-01','
icon1'),
(2,'のびたくん', 
'1970-02-02','
1970-02-02','
icon2'),
(3,'どらみちゃん', 
'2120-03-03','
2150-03-03','
icon3'),
(4,'ばたこさん', 
'2020-01-01','
2020-01-01','
icon4'),
(5,'ジャムおじさん', 
'1999-02-02','
1999-02-02','
icon5'),
(6,'あんぱんさん', 
'2020-03-03','
2020-03-03','
icon6'),
(7,'クリームぱんさん', 
'2021-01-01','
2021-01-01','
icon7'),
(8,'コロネさん', 
'1975-02-02','
1975-02-02','
icon8'),
(9,'ツナマヨさん', 
'2020-03-03','
2020-03-03','
icon9');






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
'img1',
'おやつ',
4
),
(2,
'もちもちどら焼き',
20,
'たっぷりのあんこが決め手です。',
'2020-06-06',
'2020-07-07',
'img2',
'おやつ',
5
),
(3,
'丸ごとみかん大福',
50,
'みかんを丸ごと包んでみました',
'2020-08-08',
'2020-09-09',
'img3',
'おやつ',
6
),
(4,
'元気が出るカツサンド',
30,
'おいしすぎてうきうきしちゃいます。',
'2020-10-10',
'2020-11-11',
'img4',
'主食',
7
),
(5,
'ザクザク甘辛チキン',
40,
'ガリガリのザクザクです。カロリーは美味しい',
'2020-12-12',
'2021-01-01',
'img5',
'副菜',
8
),
(6,
'無限はちみつナッツ',
10,
'ナッツを洋酒とはちみつで漬けちゃいました。',
'2021-02-02',
'2021-03-03',
'img6',
'おやつ',
9
),
(7,
'しあわせのココア',
5,
'もちろん生クリームたっぷりのせておきました。',
'2021-04-04',
'2021-05-05',
'img7',
'おやつ',
4
),
(8,
'給食のカレー',
30,
'みんな大好き給食のカレーですよ',
'2021-06-06',
'2021-07-07',
'img8',
'主食',
5
);


create table favorite_recipes
(userID serial,
recipeID serial,
insert_date date);

insert into favorite_recipes
values(1,2,'2121-02-07'),
(1,7,'2121-02-07'),
(1,8,'2121-02-07'),
(1,4,'2121-02-07'),
(1,5,'2121-02-07'),
(2,1,'1975-02-07'),
(2,6,'1975-02-07'),
(2,7,'1975-02-07'),
(2,3,'1975-02-07'),
(3,1,'2121-02-07'),
(3,2,'2121-02-07'),
(3,4,'2121-02-07'),
(3,5,'2121-02-07'),
(3,6,'2121-02-07');



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
(2,1,'1975-04-07','1975-07-07','間違いない美味しさ'),
(2,6,'1975-04-07','1975-07-07','美味しくないはずがなかった'),
(2,7,'1975-04-07','1975-07-07','クリームましましで作った'),
(2,3,'1975-04-07','1975-07-07','今年の夏のベストレシピ'),
(3,1,'2121-04-07','2121-07-07','三時のおやつにぴったり'),
(3,2,'2121-04-07','2121-07-07','来週も作ろう'),
(3,4,'2121-04-07','2121-07-07','元気出た！'),
(3,5,'2121-04-07','2121-07-07','毎日食べたい'),
(3,6,'2121-04-07','2121-07-07','やめられない止まらない')
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