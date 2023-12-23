import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchItemThunkCreator } from '../actions/actionsItem'
import Loader from '../components/Loader'
import Item from '../components/Item'


function PageItem() {
  const { item, loading, error } = useSelector(state => state.reducerItem);
  const dispatch = useDispatch();
  const { id } = useParams();

  // useEffect(() => {
  //   fetchItem(dispatch, id)
  // }, [dispatch, id])

  useEffect(() => {
    dispatch(fetchItemThunkCreator(id));
  }, [dispatch, id])

  return (
    <>
      {item && <Item item={item} />}
      {loading && <Loader />}
      {error && <h2 className="text-center">Ошибка. Попробуйте еще раз.</h2>}
    </>
    

  )
}

export default PageItem