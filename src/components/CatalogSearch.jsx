import React from 'react';
import { onChangeCatalogSearch } from '../reducers/reducerCatalogSearch';
import { submitSearch } from '../reducers/reducerCatalog';
import { useSelector, useDispatch } from 'react-redux';

export default function CatalogSearch() {
  const { catalogSearch } = useSelector(state => state.reducerCatalogSearch);
  const dispatch = useDispatch();

  const handlerChange = ({ target }) => {
    dispatch(onChangeCatalogSearch(target.value))
  }

  const handlerSubmit = (e) => {
    e.preventDefault();
    dispatch(submitSearch(catalogSearch))
  }

  return (
    <form className="catalog-search-form form-inline" onSubmit={handlerSubmit}>
      <input className="form-control" placeholder="Поиск" value={catalogSearch} onChange={handlerChange}/>
    </form>
  )
}
