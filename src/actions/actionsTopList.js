import { tlRequest, tlRequestSusccess, tlRequestFailure } from '../reducers/reducerTopList';

export const fetchTL = async (dispatch) => {
  dispatch(tlRequest());
  try {
    const response = await fetch(`${process.env.REACT_APP_API_URL_LOCAL}/api/top-sales`)
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const data = await response.json();
    // console.log(data);
    dispatch(tlRequestSusccess(data));
  } catch (e) {
    dispatch(tlRequestFailure(e.message));
  }
}