import React from 'react'
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectCategory } from '../reducers/reducerCatalog';


function CategoriesItem({ item }) {
  const { categoryId } = useSelector((state) => state.reducerCatalog);
  const dispatch = useDispatch();

  const handlerSelectGroup = () => {
    dispatch(selectCategory(item.id))
  }

  return (
    <li className="nav-item">
    <NavLink 
      className={( isActive ) => categoryId === item.id  ? "nav-link active" : "nav-link"} 
      to="#0" 
      onClick={handlerSelectGroup}>
      {item.title}      
    </NavLink>
  </li>
  )
}

export default CategoriesItem