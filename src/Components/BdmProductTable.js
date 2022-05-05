import React, { Fragment } from "react";
import BdmProductButton from "./BdmProductButton";

/****************      to be contextualised -start      *****************/

const queriedPlants = [
  //DUMMIE__DATA
  {
    id: 1,
    polishName: "brzoza",
    latinName: "Betula",
    bdmQuantity: 11,
    bdmLocalization: "A1",
  },
  {
    id: 2,
    polishName: "świerk",
    latinName: "Pinus",
    bdmQuantity: 200,
    bdmLocalization: "B2",
  },
  {
    id: 3,
    polishName: "cis",
    latinName: "Taxus",
    bdmQuantity: 45,
    bdmLocalization: "C3",
  },
];

/****************      to be contextualised -end      *****************/

const BdmProductTable = () => {
  return (
    <Fragment>
      <table>
        <thead>
          <tr>
            <th>Nazwa pl.</th>
            <th>Nazwa lac.</th>
            <th>Dostępna ilość</th>
            <th>Lokalizacja</th>
          </tr>
        </thead>
        <tbody>
          {queriedPlants.map((item) => {
            return (
              <tr key={item.id} >
                <td>{item.polishName}</td>
                <td>{item.latinName}</td>
                <td>{item.bdmQuantity}</td>
                <td>{item.bdmLocalization}</td>
                <td>
                  <BdmProductButton  id={item.id} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Fragment>
  );
};

export default BdmProductTable;
