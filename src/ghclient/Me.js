import HttpService from '../services/HttpService';
import CONFIG from '../config';

class User {

  constructor(username) {

    if( !username ) throw new Error("Missing username parameter.");

    this.username = username;
    this.httpService = new HttpService();
  }

  info() {

    const url = `${ CONFIG.urls.base }/users/${ this.username }`;

    return this.httpService.get(url);
  }
}

export default User;
