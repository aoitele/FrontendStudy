import { NextApiRequest, NextApiResponse } from 'next';
import { sqlExecuter } from '../../../modules/database';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const userid = req.body.params.userid;
  const recipeid = req.body.params.recipeid;
  const deletefavo = await sqlExecuter.any(
    'delete from favorites where user_id=$1 and recipe_id=$2',
    [userid, recipeid]
  );
  res.status(200).json(deletefavo);
};
