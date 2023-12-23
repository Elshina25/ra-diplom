import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { cartDeleteItem } from '../reducers/reducerCart'

function CartItems() {
  const { items } = useSelector(state => state.reducerCart);
  const dispatch = useDispatch();

  const totalPrice = items.reduce((a, x) => a + (x.price * x.count), 0);

  const handlerClickDelete = (id) => {
    dispatch(cartDeleteItem(id))
  }

  const cartItem = items.map((e, index) => {
    return (
      <tr key={index}>
        <td>{index + 1}</td>
        <td><Link to={`/catalog/${e.id}`}>{e.title}</Link></td>
        <td>{e.size}</td>
        <td>{e.count}</td>
        <td>{`${e.price} руб.`}</td>
        <td>{`${e.price * e.count} руб.`}</td>
        <td><button className="btn btn-outline-danger btn-sm" onClick={() => handlerClickDelete(index)}>Удалить</button></td>
      </tr>
    )
  })

  return (
    <>
      {items.length > 0 ? <section className="cart">
        <h2 className="text-center">Корзина</h2>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Название</th>
              <th scope="col">Размер</th>
              <th scope="col">Кол-во</th>
              <th scope="col">Стоимость</th>
              <th scope="col">Итого</th>
              <th scope="col">Действия</th>
            </tr>
          </thead>
          <tbody>
            {cartItem}
            <tr>
              <td colSpan="5" className="text-right">Общая стоимость</td>
              <td>{`${totalPrice} руб.`}</td>
            </tr>
          </tbody>
        </table>
      </section> :
        <section className="cart">
          <h2 className="text-center">Корзина пуста</h2>
        </section>
      }
    </>
  )
}

export default CartItems