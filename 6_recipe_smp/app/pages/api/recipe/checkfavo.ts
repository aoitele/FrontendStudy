import { NextApiRequest, NextApiResponse } from 'next';
import { sqlExecuter } from '../../../modules/database';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const userid = req.query.userid;
  const recipeid = req.query.recipeid;
  const checkfavo = await sqlExecuter.any(
    'select * from favorites where user_id=$1 and recipe_id=$2',
    [userid, recipeid]
  );
  res.status(200).json(checkfavo);
};
