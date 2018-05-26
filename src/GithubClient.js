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

  repos( { username, page=1, limit=50 } ) {

    if( !username ) throw new War("Missing parameters.");  

    return this.httpService.get(`${ this.BASEURL }/users/${ username }/repos?page=${ page }&per_page=${ limit }`);
  }
  
  issues( { username, repository } ) {

    if( !username || !repository ) throw new Error("Missing parameters.");

    return this.httpService.get(`${ this.BASEURL }/repos/${ username }/${ repository }/issues`);
  }

}

export default GithubClient;