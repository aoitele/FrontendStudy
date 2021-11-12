create table users
(id serial,
user_name varchar,
user_introduction varchar,
icon varchar);

insert into users
(id,user_name, user_introduction, icon)
values(
1,
'どらえもん', 
'時短簡単レシピ（秘密道具使用あり）',
'https://sp.tamashii.jp/images/item/item_0000013217_MjanQi88_01.jpg'),
(
2,
'のびたくん', 
'めんどくさがりによる3分レシピ',
'https://sp.tamashii.jp/images/item/item_0000013220_IPOgPL8M_04.jpg'),
(
3,
'どらみちゃん', 
'22世紀の最新レシピ',
'https://bandai-hobby.net/images/153_2137_s_jffkbtrjngzm31u1nwpvhz7lu12y.jpg');


