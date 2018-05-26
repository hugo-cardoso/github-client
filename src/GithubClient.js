import HttpService from './HttpService';

class GithubClient {

  constructor() {

    this.BASEURL = 'https://api.github.com';
    this.httpService = new HttpService();
  }

  user( username ) {

    if( !username ) throw new Error("Missing parameters.");

    return this.httpService.get(`${ this.BASEURL }/users/${ username }`);
  }

  repos( data ) {

    if( !data || !(data.hasOwnProperty('username')) ) throw new War("Missing parameters.");

    const page  = data.page || 1;
    const limit = data.limit || 100;    

    return this.httpService.get(`${ this.BASEURL }/users/${ data.username }/repos?page=${ page }&per_page=${ limit }`);
  }
  
  issues( data ) {

    if( !data || !(data.hasOwnProperty('username')) && !(data.hasOwnProperty('repository')) ) throw new War("Missing parameters.");

    return this.httpService.get(`${ this.BASEURL }/repos/${ data.username }/${ data.repository }/issues`);
  }

}

export default GithubClient;