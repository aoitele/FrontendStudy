import favoInspection from '../modules/favoInspection';
import { AxiosClient } from '../modules/request';

const favodelete = (userid, recipeid) => {
  const axios = AxiosClient();
  favoInspection(userid, recipeid).then((data) => {
    if (data.length) {
      try {
        axios.delete('recipe/deletefavo', {
          params: { userid: userid, recipeid: recipeid },
        });
      } catch (err) {
        console.log(err);
      }
    } else {
      console.log(data, 'nodata');
    }
  });
};

export default favodelete;
