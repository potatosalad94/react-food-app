import CartContext from "./cart-context";
import { useState } from "react";

const CartProvider = (props) => {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  const handleAddItem = (item) => {};

  const handleRemoveItem = (id) => {};

  const cartCtx = {
    state: cartIsShown,
    onShowCart: showCartHandler,
    onHideCart: hideCartHandler,
    items: [],
    totalAmount: 0,
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
