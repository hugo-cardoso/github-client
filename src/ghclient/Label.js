import HttpService from '../services/HttpService';
import CONFIG from '../config';

class Label {

  constructor(name,labelName) {

    if( !name ) throw new Error("Missing Name parameter.");
    if( !labelName ) throw new Error("Missing Label Name parameter.");

    this.name = name;
    this.labelName = labelName;
  }

  info() {

    const url = `${ CONFIG.urls.base }/repos/${ this.name }/labels/${ this.labelName }`;

    return HttpService.get(url);
  }
}

export default Label;
