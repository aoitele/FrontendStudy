create table favorites
(userid serial,
recipeid serial);

insert into favorites
values
(1,4),
(1,6),
(2,4),
(2,6),
(2,10),
(3,10);

select * from favorites;