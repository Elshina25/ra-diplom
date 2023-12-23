import React from 'react';
import { useDispatch } from 'react-redux';
import { loadMore } from '../reducers/reducerCatalog';

function CatalogMoreButton() {
  const dispatch = useDispatch();

  const handlerMore = (e) => {
    dispatch(loadMore(6))
  }

  return (
    <div className="text-center">
      <button className="btn btn-outline-primary" onClick={handlerMore}>Загрузить ещё</button>
    </div>
  )
}

export default CatalogMoreButton