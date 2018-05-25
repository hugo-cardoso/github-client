import axios from 'axios';

class HttpService {

  get( url ) {

    return axios.get(url);
  }
}

export default HttpService;