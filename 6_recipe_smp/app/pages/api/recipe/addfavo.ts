import { NextApiRequest, NextApiResponse } from 'next';
import { sqlExecuter } from '../../../modules/database';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const userid = req.body.params.userid;
  const recipeid = req.body.params.recipeid;
  const addfavo = await sqlExecuter.any(
    'insert into favorites values($1, $2)',
    [userid, recipeid]
  );
  res.status(200).json(addfavo);
};
