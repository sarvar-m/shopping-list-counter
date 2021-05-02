import React from "react";
import * as ReactBootStrap from "react-bootstrap";
import Button from "react-bootstrap/Button";
import reactDom from "react-dom";
import QuantityCounter from "./QuantityCounter";
import RatingCounter from "./RatingCounter";
import Table2 from "./Table2";
const Table1 = ({
  arrays,
  incrementQuantity,
  decrementQuantity,
  incrementRating,
  decrementRating,
  lineStrike,
}) => {
  return (
    <div>
      <ReactBootStrap.Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th> Name</th>
            <th>Quantity</th>
            <th>Rating</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {arrays.map((obj, index) => {
            return (
              <React.Fragment>
                <tr className={obj.show ? null : "selected"} key={obj.id}>
                  <td>{obj.id}</td>
                  <td>{obj.name}</td>
                  <td>
                    <button onClick={() => incrementQuantity(index)}>+</button>
                    {obj.quantity}
                    <button
                      onClick={
                        obj.quantity > 0 ? () => decrementQuantity(index) : null
                      }
                    >
                      -
                    </button>
                  </td>
                  <td>
                    <button onClick={() => incrementRating(index)}>+</button>
                    {obj.rating}
                    <button
                      onClick={
                        obj.rating > 0 ? () => decrementRating(index) : null
                      }
                    >
                      -
                    </button>
                  </td>
                  <td>
                    <Button
                      variant={obj.button ? "danger" : "primary"}
                      style={{ width: "75px", padding: "3px" }}
                      onClick={() => lineStrike(index)}
                    >
                      {obj.button ? "Dismiss" : "Admit"}
                    </Button>
                  </td>
                </tr>
              </React.Fragment>
            );
          })}
        </tbody>
      </ReactBootStrap.Table>
    </div>
  );
};

export default Table1;
