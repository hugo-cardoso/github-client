class QueryParams {

  static addPagination(page, limit) {

    let params = [];
    if( page ) params.push(`page=${ page }`);
    if( limit ) params.push(`per_page=${ limit }`);

    return params.join('&');
  }

  static addSort(sort, order, orderName='order') {

    let params = [];
    if( sort ) params.push(`sort=${ sort }`);
    if( sort && order ) params.push(`${ orderName }=${ order }`);

    return params.join('&');
  }
}

export default QueryParams;
