import React from "react";
import * as ReactBootStrap from "react-bootstrap";

const Table2 = ({ arrays }) => {
  return (
    <div>
      <ReactBootStrap.Table striped bordered hover>
        <thead>
          <tr>
            <th>Shopping Card</th>
          </tr>
        </thead>
        <tbody>
          {arrays.map((obj) => {
            if (obj.quantity > 0 && obj.show) {
              return (
                <tr key={obj.id}>
                  <td>
                    {obj.quantity} kg {obj.name}({obj.rating})
                  </td>
                </tr>
              );
            }
          })}
        </tbody>
      </ReactBootStrap.Table>
    </div>
  );
};

export default Table2;
