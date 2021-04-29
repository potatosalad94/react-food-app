import React from "react";

const CartContext = React.createContext({
  state: false,
  onShowCart: () => {},
  onHideCart: () => {},
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
});

export default CartContext;
