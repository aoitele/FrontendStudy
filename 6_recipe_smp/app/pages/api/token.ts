import { NextApiRequest, NextApiResponse } from 'next';
import { sqlExecuter } from '../../modules/database';



export default async (req: NextApiRequest, res:NextApiResponse) => {
    const token=req.body.params.cookie
    const resData={data:[]}
    if(token){ 
        try{
        const data= await sqlExecuter.any('select id, user_name, icon, p_token from users where p_token='+`'${token}'`+';');
        resData.data=data;
        }catch(err){
            console.log(err)
            }
    }else{
        console.log("error")
    }
    res.status(200).json(resData);
  };