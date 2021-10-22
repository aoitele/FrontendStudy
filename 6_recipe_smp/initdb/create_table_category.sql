CREATE TABLE category
(
    categoryid serial,
    categoryname VARCHAR
);


insert into category values
 (1,'主食'),
 (2,'主菜'),
 (3,'副菜'),
 (4,'汁物'),
 (5,'飲み物'),
 (6,'デザート'),
 (7,'調味料');

 SELECT * from category;