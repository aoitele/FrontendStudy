import { NextApiRequest, NextApiResponse } from 'next';
import { sqlExecuter } from '../../modules/database';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const recipeid = req.query.recipeid;
  console.log(recipeid,"recipeid")
  const basicData = await sqlExecuter.any(
    'select r.recipeid, r.recipename, r.cookingtime, r.explain, r.insert_date, r.img, u.username, r.cookingtime, r.explain, r.insert_date, r.img, u.username, u.user_introduction, u.icon, c.categoryname, f.favorite_count from recipes as r left outer join users as u on r.userid = u.userid left outer join category as c on r.category= c.categoryid left outer join (select recipeid, count(recipeid) as favorite_count from favorites group by recipeid) as f on r.recipeid=f.recipeid where r.recipeid=' + recipeid + 'order by recipeid;');
  const ingredientData =await sqlExecuter.any(
    'select * from ingredient as i where i.recipeid=' + recipeid + ';');
  const processData =await sqlExecuter.any(
    'select * from process as p where p.recipeid=' + recipeid + ';');
  

  res.status(200).json({
    basicData, ingredientData, processData
  });
};