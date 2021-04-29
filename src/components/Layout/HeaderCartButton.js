import CartIcon from "../Cart/CartIcon";
import { useContext } from "react";
import classes from "./HeaderCartButton.module.css";
import CartContext from "../../store/cart-context";

const HeaderCartButton = () => {
  const ctx = useContext(CartContext);
  const numberOfCartItems = ctx.items.reduce((accumulator, item) => {
    return accumulator + item.amount;
  }, 0);

  return (
    <button className={classes.button} onClick={ctx.onShowCart}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
