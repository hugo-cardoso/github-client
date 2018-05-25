import GithubService from './GithubService';

class GithubClient {

  constructor() {

    this.githubService = new GithubService();
  }

  getUserInfo( username ) {

    this.githubService.getUserInfoByName( username ).then(res => {

      console.log(res.data);
    });
  }

  getUserRepos( username ) {

    this.githubService.getUserReposByName( username ).then(res => {

      console.log(res.data);
    });
  }
  
  getIssues( username, repository ) {

    this.githubService.getIssues( username, repository ).then(res => {

      console.log(res.data);
    });
  }

}

export default GithubClient;