import React from 'react'
import Categories from './Categories';
import CatalogList from './CatalogList';

function Catalog(props) {
  return (
    <>
      <CatalogList>
        {props.children}
        <Categories />
      </CatalogList>
    </>
  )
}

export default Catalog