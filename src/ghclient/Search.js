import HttpService from '../services/HttpService';
import QueryParams from '../utils/QueryParams';
import CONFIG from '../config';

class Search {

  constructor() {
    this.endpoint = `${ CONFIG.urls.base }/search`;
  }

  user( query, options={} ) {

    if( !query ) throw new Error("Missing parameters.");

    const { sort, order, page, limit } = options;

    const url = `${ this.endpoint }/users`;
    const urlParams = [QueryParams.addSort(sort, order), QueryParams.addPagination(page, limit)].join('&');

    return HttpService.get(`${ url }?q=${ query }&${ urlParams }`);
  }

  repository( query, options={} ) {

    if( !query ) throw new Error("Missing parameters.");

    const { sort, order, page, limit } = options;

    const url = `${ this.endpoint }/repositories`;
    const urlParams = [QueryParams.addSort(sort, order), QueryParams.addPagination(page, limit)].join('&');

    return HttpService.get(`${ url }?q=${ query }&${ urlParams }`);
  }
}

export default Search;
