create table users
(id serial,
user_name varchar,
user_introduction varchar,
icon varchar,
mail varchar,
login_password varchar,
p_token varchar);

insert into users
(id,user_name, user_introduction, icon, mail, login_password, p_token)
values(
1,
'どらえもん', 
'時短簡単レシピ（秘密道具使用あり）',
'https://sp.tamashii.jp/images/item/item_0000013217_MjanQi88_01.jpg',
'dora@gmail.com',
'dora',
null),
(
2,
'のびたくん', 
'めんどくさがりによる3分レシピ',
'https://sp.tamashii.jp/images/item/item_0000013220_IPOgPL8M_04.jpg',
'nobi@gmail.com',
'nobi',
null),
(
3,
'どらみちゃん', 
'22世紀の最新レシピ',
'https://bandai-hobby.net/images/153_2137_s_jffkbtrjngzm31u1nwpvhz7lu12y.jpg',
'dorami@gmail.com',
'dorami',
null),
(
4,
'testuser',
null,
null,
'testuser@gmail.com',
'testuser',
null
);

