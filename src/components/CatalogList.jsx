import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import CatalogItems from './CatalogItems';
import CatalogMoreButton from './CatalogMoreButton';
import { fetchCatalogThunkCreator } from '../actions/actionsCatalog';
import Loader from './Loader';

function CatalogList(props) {
  const { items, loading, error, categoryId, more, noMore, searchCatalogItem } = useSelector(state => state.reducerCatalog);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCatalogThunkCreator(categoryId, more, searchCatalogItem))
  }, [dispatch, categoryId, more, searchCatalogItem])

  return (
    <>
      <section className="catalog">
        <h2 className="text-center">Каталог</h2>
        {props.children}
        {items.length !== 0 && <CatalogItems items={items} />}
        {loading && <Loader />}
        {error && <h2 className="text-center">Ошибка. Попробуйте еще раз.</h2>}
        {(!loading && !error && searchCatalogItem !== '' && items.length === 0) && <h2 className="text-center">Ничего не найдено</h2>}
        {(!noMore && items.length > 0) && <CatalogMoreButton />}
      </section>
    </>
  )
}

export default CatalogList