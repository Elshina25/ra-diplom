import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { fetchTL, } from '../actions/actionsTopList';
import Loader from './Loader';
import CatalogItem from './CatalogItem';

function TopList() {
  const { items, loading, error } = useSelector(state => state.reducerTopList);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   fetchTL(dispatch)
  // }, [dispatch])

  useEffect(() => {
    dispatch(fetchTL)
  }, [dispatch])


  return (
    <>
      <section className="top-sales">
        <h2 className="text-center">Хиты продаж!</h2>
        <div className="row">
          {items.map((e) => (
            <CatalogItem item={e} key={e.id} />
          ))}
        </div>
      </section>
      {loading && <Loader />}
      {error && <h2 className="text-center">Ошибка. Попробуйте еще раз.</h2>}
    </>
  )

}

export default TopList