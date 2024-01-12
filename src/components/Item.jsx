import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { cartAddItem } from "../reducers/reducerCart";

function Item({ item }) {
  const dispatch = useDispatch();
  const [size, setSize] = useState(null);
  const [count, setCount] = useState(1);
  const navigate = useNavigate();

  const handlerClickSize = (index) => {
    setSize(index);
  };

  const handlerClickCount = (x) => {
    let sizeCopy = count + x;
    if (sizeCopy > 10) sizeCopy = 10;
    if (sizeCopy < 0) sizeCopy = 0;
    setCount(sizeCopy);
  };

  const handlerClickCart = () => {
    const toCard = {
      id: item.id,
      title: item.title,
      size: size,
      count: count,
      price: item.price,
    };
    dispatch(cartAddItem(toCard));
    navigate("/cart");
  };

  const countSizes = item.sizes.filter((e) => e.available === true).length;
  const sizes = item.sizes.map((e, index) =>
    e.available ? (
      <span
        className={
          size === index ? "catalog-item-size selected" : "catalog-item-size"
        }
        key={index}
        data-id={index}
        onClick={() => handlerClickSize(index)}
      >
        {e.size}
      </span>
    ) : null
  );

  return (
    <section className="catalog-item">
      <h2 className="text-center">{item.title}</h2>
      <div className="row">
        <div className="col-5">
          <img src={item.images[0]} className="img-fluid" alt={item.title} />
        </div>
        <div className="col-7">
          <table className="table table-bordered">
            <tbody>
              <tr>
                <td>Артикул</td>
                <td>{item.sku}</td>
              </tr>
              <tr>
                <td>Производитель</td>
                <td>{item.manufacturer}</td>
              </tr>
              <tr>
                <td>Цвет</td>
                <td>{item.color}</td>
              </tr>
              <tr>
                <td>Материалы</td>
                <td>{item.material}</td>
              </tr>
              <tr>
                <td>Сезон</td>
                <td>{item.season}</td>
              </tr>
              <tr>
                <td>Повод</td>
                <td>{item.reason}</td>
              </tr>
            </tbody>
          </table>
          <div className="text-center">
            {countSizes > 0 ? (
              <p>Размеры в наличии: {sizes}</p>
            ) : (
              <p>Нет в наличии</p>
            )}
            {countSizes > 0 && (
              <p>
                Количество:{" "}
                <span className="btn-group btn-group-sm pl-2">
                  <button
                    className="btn btn-secondary"
                    onClick={() => handlerClickCount(-1)}
                  >
                    -
                  </button>
                  <span className="btn btn-outline-primary">{count}</span>
                  <button
                    className="btn btn-secondary"
                    onClick={() => handlerClickCount(1)}
                  >
                    +
                  </button>
                </span>
              </p>
            )}
          </div>
          {countSizes > 0 && (
            <button
              className="btn btn-danger btn-block btn-lg"
              disabled={count === 0 || size === null}
              onClick={handlerClickCart}
            >
              В корзину
            </button>
          )}
        </div>
      </div>
    </section>
  );
}

export default Item;
