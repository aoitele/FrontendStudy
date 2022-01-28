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
  return res.data;
}

export default favoInspection;
