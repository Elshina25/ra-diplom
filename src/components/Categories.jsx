import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { fetchCategories } from '../actions/actionsCatalog';
import CategoriesItem from './CategoriesItem';

export default function Categories() {
  const { categories } = useSelector(state => state.reducerCatalog);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories)
  }, [dispatch])

  const allCategories = [{ id: 0, title: "Все" }, ...categories];

  return (
    <>
      {categories.length > 1 && <ul className="catalog-categories nav justify-content-center">
        {allCategories.map((item) => (
          <CategoriesItem item={item} key={item.id} />
        ))}
      </ul>}
    </>
  )
}
