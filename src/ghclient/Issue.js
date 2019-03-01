import Label from './Label';

import HttpService from '../services/HttpService';
import CONFIG from '../config';

class Issue {

  constructor(name,id) {

    if( !name ) throw new Error("Missing Name parameter.");
    if( !id ) throw new Error("Missing ID parameter.");

    this.name = name;
    this.id = id;
  }

  info() {

    const url = `${ CONFIG.urls.base }/repos/${ this.name }/issues/${ this.id }`;

    return HttpService.get(url);
  }

  comments() {

    const url = `${ CONFIG.urls.base }/repos/${ this.name }/issues/${ this.id }/comments`;

    return HttpService.get(url);
  }

  labels() {

    const url = `${ CONFIG.urls.base }/repos/${ this.name }/issues/${ this.id }/labels`;

    return HttpService.get(url);
  }

  label(labelName) {
    return new Label(this.name, labelName);
  }
}

export default Issue;
