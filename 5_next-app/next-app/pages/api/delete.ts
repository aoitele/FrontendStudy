import { NextApiRequest, NextApiResponse } from "next";
import { sqlExecuter } from "../../modules/database";

export default async (req: NextApiRequest, res: NextApiResponse) => {
    
    const getData=req.body.item;
    const userid=getData.userid;
    const recipeid=getData.recipeid;
    console.log(userid,recipeid);
	const ResetData = await sqlExecuter.any(
"delete from favorite_recipes where recipeid="+recipeid+ "and userid="+userid+";");
	
	console.log(ResetData,"RestData")
	res.status(200).json({
		ResetData
	});
	
};
