import HttpService from '../services/HttpService';
import QueryParams from '../utils/QueryParams';
import CONFIG from '../config';

class Me {

  constructor(username) {

    if( !username ) throw new Error("Missing username parameter.");
    this.username = username;
    this.endpoint = `${ CONFIG.urls.base }/users/${ this.username }`;
  }

  info() {

    return HttpService.get(this.endpoint);
  }

  repositories(options={}) {

    const { page, limit } = options;

    const url = `${ this.endpoint }/repos`;

    return HttpService.get(`${ url }?${ QueryParams.addPagination(page, limit) }`);
  }

  followers() {

    const url = `${ this.endpoint }/followers`;

    return HttpService.get(url);
  }

  following() {

    const url = `${ this.endpoint }/following`;

    return HttpService.get(url);
  }
}

export default Me;
