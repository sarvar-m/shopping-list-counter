import React, { useState } from "react";

const QuantityCounter = ({ arrays, setArrays }) => {
  const [quantity, setQuantity] = useState(0);

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
    let newArrays1 = arrays;
    newArrays1.quantity = quantity;
    setArrays([...newArrays1]);
  };

  const decrementQuantity = () => {
    setQuantity(quantity - 1);
    let newArrays2 = arrays;
    newArrays2.quantity = quantity;
    setArrays(newArrays2);
  };
  return (
    <div>
      <button onClick={incrementQuantity}>+</button>
      {quantity}
      <button onClick={quantity > 0 ? decrementQuantity : null}>-</button>
    </div>
  );
};

export default QuantityCounter;
