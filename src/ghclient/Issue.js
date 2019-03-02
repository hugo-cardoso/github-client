import Label from './Label';

import HttpService from '../services/HttpService';
import CONFIG from '../config';

class Issue {

  constructor(name,id) {

    if( !name ) throw new Error("Missing Name parameter.");
    if( !id ) throw new Error("Missing ID parameter.");

    this.name = name;
    this.id = id;
    this.endpoint = `${ CONFIG.urls.base }/repos/${ this.name }/issues/${ this.id }`;
  }

  info() {

    return HttpService.get(this.endpoint);
  }

  comments() {

    const url = `${ this.endpoint }/comments`;

    return HttpService.get(url);
  }

  labels() {

    const url = `${ this.endpoint }/labels`;

    return HttpService.get(url);
  }

  label(labelName) {
    return new Label(this.name, labelName);
  }

  timeline() {

    const url = `${ this.endpoint }/timeline`;

    return HttpService.get(url);
  }
}

export default Issue;
