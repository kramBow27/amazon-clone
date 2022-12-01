import React from 'react';
import './Product.css';
import { useStateValue } from './StateProvider';

function Product({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    // DISPATCH THE ITEM IN DATA LAYER
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <strong>${price}</strong>
        </p>
        <div key={Math.random()} className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={Math.random()}>⭐</p>
            ))}
        </div>
      </div>
      <img src={image} alt=""></img>

      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
}

export default Product;
