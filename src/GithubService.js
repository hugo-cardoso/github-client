import HttpService from './HttpService';

class GithubService {

  constructor( key ) {

    this.BASEURL = 'https://api.github.com';
    this.httpService = new HttpService( key );
  }

  getUserInfoByName( username ) {

    return this.httpService.get(`${ this.BASEURL }/users/${ username }`);
  }
  getUserReposByName( username ) {

    return this.httpService.get(`${ this.BASEURL }/users/${ username }/repos`);
  }

  getIssues( username, repository ) {

    return this.httpService.get(`${ this.BASEURL }/repos/${ username }/${ repository }/issues`);
  }
}

export default GithubService;