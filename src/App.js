import React, { useState } from "react";
import "./App.css";
import FormInput from "./components/Form";
import Table1 from "./components/Table1";
import Table2 from "./components/Table2";

const App = () => {
  const [quantity, setQuantity] = useState(0);
  const [rating, setRating] = useState(0);
  const [show, setShow] = useState(true);
  const [arrays, setArrays] = useState([
    {
      id: 1,
      name: "Apple",
      quantity: 0,
      rating: 0,
      button: true,
      show: true,
    },
  ]);

  const incrementQuantity = (index) => {
    setQuantity(quantity + 1);
    const newArrays1 = arrays;
    newArrays1[index].quantity = newArrays1[index].quantity + 1;
    setArrays(newArrays1);
  };

  const decrementQuantity = (index) => {
    setQuantity(quantity - 1);
    const newArrays2 = arrays;
    newArrays2[index].quantity = newArrays2[index].quantity - 1;
    setArrays(newArrays2);
  };

  const incrementRating = (index) => {
    setRating(rating + 1);
    const newArrays3 = arrays;
    newArrays3[index].rating = newArrays3[index].rating + 1;
    setArrays(newArrays3);
  };

  const decrementRating = (index) => {
    setRating(rating - 1);
    const newArrays4 = arrays;
    newArrays4[index].rating = newArrays4[index].rating - 1;
    setArrays(newArrays4);
  };

  const lineStrike = (index) => {
    setShow(!show);
    let newArrays5 = arrays;
    newArrays5[index].show = !newArrays5[index].show;
    newArrays5[index].button = !newArrays5[index].button;
    setArrays(newArrays5);
  };
  return (
    <div className="App">
      <FormInput arrays={arrays} setArrays={setArrays} />
      <br />
      <Table1
        arrays={arrays}
        incrementQuantity={incrementQuantity}
        decrementQuantity={decrementQuantity}
        incrementRating={incrementRating}
        decrementRating={decrementRating}
        lineStrike={lineStrike}
      />
      <br />
      <Table2 arrays={arrays} />
    </div>
  );
};

export default App;
