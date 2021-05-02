import React, { useState } from "react";

const RatingCounter = ({ arrays, setArrays }) => {
  const [rating, setRating] = useState(0);

  const incrementRating = () => {
    setRating(rating + 1);
    let newArrays1 = arrays;
    newArrays1.rating = rating;
    setArrays(newArrays1);
  };

  const decrementRating = () => {
    setRating(rating - 1);
    let newArrays2 = arrays;
    newArrays2.rating = rating;
    setArrays(newArrays2);
  };

  return (
    <div>
      <button onClick={incrementRating}>+</button>
      {rating}
      <button onClick={rating > 0 ? decrementRating : null}>-</button>
    </div>
  );
};

export default RatingCounter;
