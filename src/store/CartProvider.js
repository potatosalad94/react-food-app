import CartContext from "./cart-context";
import { useState, useReducer } from "react";

const defaultCart = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedItems = state.items.concat(action.item);
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  } else if (action.type === "REMOVE") {
  }
  return defaultCart;
};

const CartProvider = (props) => {
  const [cartIsShown, setCartIsShown] = useState(false);
  const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCart);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  const handleAddItem = (item) => {
    dispatchCartAction({ type: "ADD", item: item });
  };

  const handleRemoveItem = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };

  const cartCtx = {
    state: cartIsShown,
    onShowCart: showCartHandler,
    onHideCart: hideCartHandler,
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: handleAddItem,
    removeItem: handleRemoveItem,
  };

  return (
    <CartContext.Provider value={cartCtx}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
