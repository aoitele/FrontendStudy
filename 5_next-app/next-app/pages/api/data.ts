import { NextApiRequest, NextApiResponse } from 'next';
import { sqlExecuter } from '../../modules/database';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const userid = req.query.userid;
  console.log(sqlExecuter.any, 'sqlExecuter');
  const data = await sqlExecuter.any(
    'SELECT * FROM (SELECT users.id as userid, users.username, favorite_recipes.recipeid, favorite_recipes.insert_date, recipes.recipename, recipes.cookingtime, recipes.explain, recipes.img, recipes.category, recipes.userid AS chefid, recipecooks.comment FROM users INNER JOIN favorite_recipes ON users.id=favorite_recipes.userid LEFT OUTER JOIN recipes ON favorite_recipes.recipeid=recipes.recipeid LEFT OUTER JOIN recipecooks ON favorite_recipes.userid=recipecooks.userid AND favorite_recipes.recipeid=recipecooks.recipeid WHERE id=' +
      userid +
      ') as t1 LEFT JOIN (select users.icon, users.username as chefname, users.id from users) AS t2 ON t1.chefid=t2.id;'
  );

  res.status(200).json({
    data,
  });
};
