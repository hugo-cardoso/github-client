import HttpService from '../services/HttpService';
import CONFIG from '../config';

class Search {

  user( query, options={} ) {

    if( !query ) throw new Error("Missing parameters.");

    const { sort, order } = options;

    const url = `${ CONFIG.urls.base }/search/users`;
    const urlParams = `?q=${ query }${sort ? `&sort=${ sort }${ order ? `&order=${ order }` : '' }` : ''}`;

    return HttpService.get(`${ url }${ urlParams }`);
  }

  repository( query, options={} ) {

    if( !query ) throw new Error("Missing parameters.");

    const { sort, order } = options;

    const url = `${ CONFIG.urls.base }/search/repositories`;
    const urlParams = `?q=${ query }${sort ? `&sort=${ sort }${ order ? `&order=${ order }` : '' }` : ''}`;

    return HttpService.get(`${ url }${ urlParams }`);
  }
}

export default Search;
