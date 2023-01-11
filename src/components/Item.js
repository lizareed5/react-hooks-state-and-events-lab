import React, {useState} from "react";

function Item({ name, category }) {
  
  const [itemInCart, setItemInCart] = useState(false)
  
  const addToCart = () => {
    setItemInCart(prevValue => !prevValue)
  }

  return (
    <li className={itemInCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={addToCart}className={itemInCart ? "remove" : "add"}>{itemInCart ? "Remove From Cart" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;
