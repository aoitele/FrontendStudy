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
'icon1');

select * from users;