import { NextApiRequest, NextApiResponse } from 'next';
import { sqlExecuter } from '../../../modules/database';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const userid = req.query.userid;
  const recipeid = req.query.recipeid;
  const checkfavo = await sqlExecuter.any(
    'select * from favorites where user_id=' +
      userid +
      'and recipe_id=' +
      recipeid +
      ';'
  );
  res.status(200).json(checkfavo);
};
