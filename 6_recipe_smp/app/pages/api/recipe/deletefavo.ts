import { NextApiRequest, NextApiResponse } from 'next';
import { sqlExecuter } from '../../../modules/database';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const userid = req.body.params.userid;
  const recipeid = req.body.params.recipeid;
  console.log(userid);
  console.log(recipeid);

  const deletefavo = await sqlExecuter.any(
    'delete from favorites where user_id=' + userid + 'and recipe_id=' + recipeid + ';'
  );
  console.log(deletefavo, 'deletefavoapi');
  res.status(200).json(deletefavo);
};
