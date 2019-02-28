import axios from 'axios';

class HttpService {

  get( url ) {

    return axios.get(url, {
      headers: {
        Authorization: 'token 747be5403a8052f9eca9e7f01da6a43714ba7a2d'
      }
    });
  }
}

export default HttpService;
