import React from 'react';

const CartContext = React.createContext({
    items: [],
    discount: 0,
    sum: 0,
    addItem: (item) => {},
    removeItem: (id) => {},
    createItem: (name, amount) => {},
    clearCart: () => {}
});

export default CartContext;
