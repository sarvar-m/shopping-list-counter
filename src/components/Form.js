import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const FormInput = ({ arrays, setArrays }) => {
  const [input, setInput] = useState("");

  const onChange = (e) => {
    setInput(e.target.value);
  };

  const formSubmit = (e) => {
    e.preventDefault();
    const newArray = arrays;
    if (input) {
      newArray.push({
        id: arrays.length + 1,
        name: input,
        quantity: 0,
        rating: 0,
        button: true,
        show: true,
      });
    }
    setArrays([...newArray]);
    setInput("");
  };

  return (
    <div>
      <Form onSubmit={formSubmit}>
        <Form.Group controlId="formBasicText">
          <Form.Label>
            <h4>Shopping List with Counter</h4>
          </Form.Label>
          <Form.Control
            value={input}
            onChange={onChange}
            type="text"
            placeholder="Enter Item Name"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Add
        </Button>
      </Form>
    </div>
  );
};
export default FormInput;
