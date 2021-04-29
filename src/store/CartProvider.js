import CartContext from "./cart-context";
import { useState, useReducer } from "react";

const defaultCart = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    /* prettier-ignore */
    const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
    /* prettier-ignore */
    const existingCartItemIndex = state.items.findIndex((item) => item.id === action.item.id);
    const existingCartItem = state.items[existingCartItemIndex];
    let updatedItems;

    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  } else if (action.type === "REMOVE") {
    /* prettier-ignore */
    const existingCartItemIndex = state.items.findIndex((item) => item.id === action.id);
    const existingCartItem = state.items[existingCartItemIndex];
    const updatedTotalAmount = state.totalAmount - existingCartItem.price;
    let updatedItems;
    if (existingCartItem.amount === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.id);
    } else {
      /* prettier-ignore */
      const updatedItem = {...existingCartItem, amount: existingCartItem.amount - 1};
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    }
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
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
