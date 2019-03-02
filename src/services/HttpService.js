import axios from 'axios';
import CONFIG from '../config';

class HttpService {

  static get( url ) {

    return fetch( url,{
      method: 'GET',
      headers: new Headers({
        'Authorization': `token ${ CONFIG.token }`,
        'Accept': 'application/vnd.github.mockingbird-preview, '
      })
    }).then(res => res.json());
  }
}

export default HttpService;
