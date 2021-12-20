create table favorites
(user_id serial,
recipe_id serial);

insert into favorites
values
(1,4),
(1,6),
(1,10),
(2,4),
(2,6),
(2,10),
(3,10),
(4,4),
(4,10),
(5,4),
(6,4),
(7,4);


select * from favorites where user_id= 1 and recipe_id=4;