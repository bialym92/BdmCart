import React from "react";
import BdmProductItem from "./BdmProductItem";
import BdmCartControls from "./BdmCartControls";

/****************      to be contextualised -start      *****************/

const BdmCart = [
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

const TabCart = () => {

  const bdmProductItems = BdmCart.map((product) => (
  <BdmProductItem 
    key={product.id} 
    polishName={product.polishName} 
    latinName={product.latinName} 
    bdmQuantity={product.bdmQuantity} 
    bdmLocalization={product.bdmLocalization} 
  /> 
  ));

  return (
    <div className="frame">
      <div className="bdmFullCart">

      {bdmProductItems}

      </div>
      <BdmCartControls />
    </div>
  );
};

export default TabCart;
