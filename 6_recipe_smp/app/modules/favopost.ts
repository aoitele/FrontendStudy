import favoInspection from '../modules/favoInspection';
import { AxiosClient } from '../modules/request';

const favopost = (userid, recipeid) => {
  const axios = AxiosClient();
  favoInspection(userid, recipeid).then((data) => {
    if (!data.length) {
      try {
        axios.post('recipe/addfavo', {
          params: { userid: userid, recipeid: recipeid },
        });
      } catch (err) {
        console.log(err);
      }
    }
  });
};

export default favopost;
