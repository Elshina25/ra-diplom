import { itemRequest, itemRequestSusccess, itemRequestFailure } from '../reducers/reducerItem';

export const fetchItemThunkCreator = (id) => async (dispatch) => {
  dispatch(itemRequest());
  try {
    const response = await fetch(`${process.env.REACT_APP_API_URL_LOCAL}/api/items/${id}`)
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const data = await response.json();
    // console.log(data);
    dispatch(itemRequestSusccess(data));
  } catch (e) {
    dispatch(itemRequestFailure(e.message));
  }
}
