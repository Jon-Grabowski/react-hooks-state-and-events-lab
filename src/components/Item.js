import React, {useState} from "react";

function Item({ name, category }) {

  const [addToCart, setAddToCart] = useState(false)
  function handleClick() {
    setAddToCart(!addToCart)
  }

  const buttonText = addToCart ? "Remove From Cart" : "Add to Cart"

  return (
    <li className={addToCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleClick}>{buttonText}</button>
    </li>
  );
}

export default Item;
