import React from 'react';



  // czy rzeczywiście kazdy button dostaje id ktore przydziela mu BdmProductTable

const BdmProductButton = (props) => {

  const bdmAddProduct = () => {
    console.log(props.id)
  };

  return (
    <button onClick={bdmAddProduct}>+</button>
  );
}

export default BdmProductButton;
