import { AxiosResponse } from 'axios';
import { AxiosClient } from '../modules/request';

type CheckfavoAxios =
  | {
      user_id: number;
      recipe_id: number;
    }[]
  | [];

async function favoInspection(userid, recipeid): Promise<CheckfavoAxios> {
  const axios = AxiosClient();
  const res = await axios.get<CheckfavoAxios>('recipe/checkfavo', {
    params: { userid: userid, recipeid: recipeid },
  });
  if (res.data.length) {
    return res.data;
  } else {
    console.log('nocheckfavodata');
    throw new Error("nodata");
  }
}

export default favoInspection;
