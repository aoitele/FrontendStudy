create table users
(
    userid serial ,
    username varchar,
    icon  varchar
);

insert into users
(userid,username,icon)
values (
1,
'どらえもん', 
'https://sp.tamashii.jp/images/item/item_0000013217_MjanQi88_01.jpg'),
(
2,
'のびたくん', 
'https://sp.tamashii.jp/images/item/item_0000013220_IPOgPL8M_04.jpg'),
(
3,
'どらみちゃん', 
'https://bandai-hobby.net/images/153_2137_s_jffkbtrjngzm31u1nwpvhz7lu12y.jpg');

select * from users;

