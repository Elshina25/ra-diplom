import React from 'react';
import CatalogItem from './CatalogItem';

function CatalogItems({ items }) {
  return (
    <div className="row">
      {items.map((e) => (
        <CatalogItem item={e} key={e.id} />
      ))}
    </div>
  )
}

export default CatalogItems