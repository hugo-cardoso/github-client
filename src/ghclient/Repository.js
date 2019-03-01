import Issue from './Issue';

import HttpService from '../services/HttpService';
import CONFIG from '../config';

class Repository {

  constructor(name) {

    if( !name ) throw new Error("Missing Name parameter.");
    this.name = name;
  }

  issue(id) {

    return new Issue(this.name, id);
  }

  issues() {

    return HttpService.get(`${ CONFIG.urls.base }/repos/${ this.name }/issues`);
  }

  branches() {

    return HttpService.get(`${ CONFIG.urls.base }/repos/${ this.name }/branches`);
  }

  releases() {

    return HttpService.get(`${ CONFIG.urls.base }/repos/${ this.name }/releases`);
  }

  commits() {

    return HttpService.get(`${ CONFIG.urls.base }/repos/${ this.name }/commits`);
  }
}

export default Repository;
