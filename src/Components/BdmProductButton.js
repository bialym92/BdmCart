import React from 'react';

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

  // czy rzeczywiście kazdy button dostaje id ktore przydziela mu BdmProductTable

const BdmProductButton = (props) => {

  const bdmAddProduct = () => {
    console.log(props.id);
    // const clickedProduct = queriedPlants.filter

    function separateClickedProduct(arr, criteria) {
      return arr.filter(function(obj) {
        return Object.keys(criteria).every(function(c) {
          return obj[c] == criteria[c];
        });
      });
    }

    console.log(separateClickedProduct(queriedPlants, { id: props.id}));


  };

  return (
    <button onClick={bdmAddProduct}>+</button>
  );
}

export default BdmProductButton;
