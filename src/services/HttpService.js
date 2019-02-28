import axios from 'axios';
import CONFIG from '../config';

class HttpService {

  static get( url ) {

    return axios.get(url, {
      headers: {
        Authorization: `token ${ CONFIG.token }`,
      }
    });
  }
}

export default HttpService;
