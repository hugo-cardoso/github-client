import HttpService from '../services/HttpService';
import CONFIG from '../config';

class Me {

  constructor(username) {

    if( !username ) throw new Error("Missing username parameter.");
    this.username = username;
  }

  info() {

    const url = `${ CONFIG.urls.base }/users/${ this.username }`;

    return HttpService.get(url);
  }

  repositories(page=1, size=0) {

    const url = `${ CONFIG.urls.base }/users/${ this.username }/repos`;
    const urlParams = `?page=${ page }${ size ? `&size=${ size }` : '' }`;

    return HttpService.get(`${ url }${ urlParams }`);
  }
}

export default Me;
