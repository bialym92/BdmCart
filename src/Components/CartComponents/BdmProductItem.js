import React from 'react';

const BdmProductItem = (props) => {
  return (
    <div>
      <div>{props.polishName}</div>
      <div>{props.latinName}</div>
      <div>{props.bdmQuantity}</div>
      <div>{props.bdmLocalization}</div>
    </div>
  );
}

export default BdmProductItem;
