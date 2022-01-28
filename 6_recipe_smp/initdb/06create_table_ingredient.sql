create table ingredient
(recipe_id serial,
ingredient_name VARCHAR,
ingredient_amount VARCHAR,
ingredient_sort VARCHAR);

insert into ingredient
values
(4, '豚肉', '200g', ''),
(4, '食パン', '4枚', ''),
(4, 'マヨネーズ', '大さじ1', 'A'),
(4, '粒マスタード', '適量', 'A'),
(4, '小麦粉', '適量', ''),
(4, 'パン粉', '適量', ''),
(4, '塩', '適量', ''),
(4, '胡椒', '適量', ''),
(4, '卵', '1個', ''),
(6, 'ドライフルーツ', '50g', ''),
(6, 'くるみ', '30g', ''),
(6, 'はちみつ', '100ml', ''),
(6, 'ラム酒', '大さじ1', ''),
(10, 'マカロニ', '100g', ''),
(10, '水', '150cc', ''),
(10, '牛乳', '150cc', ''),
(10, '塩', '適量', ''),
(10, 'ニンニク', '3cm', ''),
(10, 'スライスチーズ', '5枚', ''),
(10, 'バター', '10g', ''),
(10, '粗挽き胡椒', '適量', ''),
(10, 'パルメザンチーズ', '大さじ1', '');



