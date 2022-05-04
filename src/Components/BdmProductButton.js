import React from 'react';

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

const BdmCart = [];


/****************      to be contextualised -end      *****************/


const BdmProductButton = (props) => {

  const bdmAddProduct = () => {

    function filterProducts(arr, criteria) {
      return arr.filter(function(obj) {
        return Object.keys(criteria).every(function(c) {
          return obj[c] == criteria[c];
        });
      });
    }

    //separate clickedProduct from queriedPlants

    const clickedProduct = filterProducts(queriedPlants, { id: props.id})[0];

    //add clicked product to the Cart 
    //dont add if thesame object already exists in the Cart

    const findSameIdinCart = filterProducts(BdmCart, { id: clickedProduct.id});

    if (findSameIdinCart.length < 1) {
      BdmCart.push(clickedProduct);
    } else {
      console.log("Ten produkt jest juz w koszyku"); // ZASTĄPIĆ KOMUNIKATEM --!--
    }

  };

  return (
    <button onClick={bdmAddProduct}>+</button>
  );
}

export default BdmProductButton;
