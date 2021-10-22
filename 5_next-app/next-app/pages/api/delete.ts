import { NextApiRequest, NextApiResponse } from 'next';
import { sqlExecuter } from '../../modules/database';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const {userid, recipeid}= req.body.params;
  const ResetData = await sqlExecuter.any(
    'delete from favorite_recipes where recipeid=' +
      recipeid +
      'and userid=' +
      userid +
      ';'
  );

  console.log(ResetData, 'RestData');
  res.status(200).json({
    ResetData,
  });
};
