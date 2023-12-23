import React from 'react';
import { useNavigate  } from 'react-router-dom';
import { useSelector } from 'react-redux';


export default function HeaderCart() {
  const { items } = useSelector(state => state.reducerCart);
  const navigate = useNavigate();

  const handlerCliclCart = () => {
    navigate('/cart');
  }

  return (
    <div className="header-controls-pic header-controls-cart" onClick={handlerCliclCart}>
      {(items.length > 0 ) && <div className="header-controls-cart-full">{items.length}</div>}
      <div className="header-controls-cart-menu"></div>
    </div>
  )
}
