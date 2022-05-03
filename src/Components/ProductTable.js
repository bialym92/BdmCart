import React, { Fragment } from "react";
import BdmProductButton from "./BdmProductButton";

const ProductTable = () => {
  return (
    <Fragment>
      <table>
        <tr>
          <th>Company</th>
          <th>Contact</th>
          <th>Country</th>
        </tr>
        <tr>
          <td>Alfreds Futterkiste</td>
          <td>Maria Anders</td>
          <td><BdmProductButton></BdmProductButton></td>
        </tr>
        <tr>
          <td>Centro comercial Moctezuma</td>
          <td>Francisco Chang</td>
          <td><BdmProductButton></BdmProductButton></td>
        </tr>
      </table>
    </Fragment>
  );
};

export default ProductTable;
