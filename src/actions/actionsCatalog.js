import { 
  catalogRequest, 
  catalogRequestSusccess, 
  catalogRequestFailure,
  categoriesRequestSusccess,
} from '../reducers/reducerCatalog';

function createPathRequest(id, more, search) {
  // http://localhost:7070/api/items?q=Кеды
  // http://localhost:7070/api/items?q=Кеды&categoryId=13
  // http://localhost:7070/api/items?q=Кеды&offset=6

  let path = '/api/items';

  if (id > 0 || more > 0 || search !== '') {
    path += '?'
  } else {
    return path;
  }  

  if (search !== '') {
    path += `q=${search}&`
  }

  if (more > 0) {
    path += `offset=${more}&`
  }

  if (id !== 0) {
    path += `categoryId=${id}&`
  }

  return path.slice(0, -1);
}

export const fetchCatalogThunkCreator = (id = 0, more = 0, search = '') => async (dispatch) => {
  const path = createPathRequest(id, more, search);

  dispatch(catalogRequest());
  try {
    const response = await fetch(`${process.env.REACT_APP_API_URL_LOCAL}${path}`);
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const data = await response.json();
    // console.log(data);
    dispatch(catalogRequestSusccess(data));
  } catch (e) {
    dispatch(catalogRequestFailure(e.message));
  }
}

export const fetchCategories = async (dispatch) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_API_URL_LOCAL}/api/categories`);
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const data = await response.json();
    // console.log(data);
    dispatch(categoriesRequestSusccess(data));
  } catch (e) {
    dispatch(catalogRequestFailure(e.message));
  }
}
