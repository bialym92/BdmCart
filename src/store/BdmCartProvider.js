import React from "react";
import CartContext from "./cart-context";

const BdmCartProvider = (props) => {

    const addItemToCartHandler = (item) => {};
    const removeItemFromCartHandler = (ids) => {};
    const createItemInCartHandler = (name, amount) => {};

  const cartContext = {
    items: [],
    discount: 0,
    sum: 0,
    addItem: addItemToCartHandler,
    removeItems: removeItemFromCartHandler,
    createItem: createItemInCartHandler
  };
  return <CartContext.Provider value={cartContext}>{props.children}</CartContext.Provider>;
};

export default BdmCartProvider;
