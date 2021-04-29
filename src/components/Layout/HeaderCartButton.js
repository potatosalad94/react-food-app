import CartIcon from "../Cart/CartIcon";
import { useContext, useEffect, useState } from "react";
import classes from "./HeaderCartButton.module.css";
import CartContext from "../../store/cart-context";

const HeaderCartButton = () => {
  const [btnHighlight, setBtnHighlight] = useState(false);
  const ctx = useContext(CartContext);
  const { items } = ctx;
  const numberOfCartItems = items.reduce((accumulator, item) => {
    return accumulator + item.amount;
  }, 0);

  const btnClasses = `${classes.button} ${btnHighlight ? classes.bump : ""}`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnHighlight(true);
    const timer = setTimeout(() => {
      setBtnHighlight(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);
  return (
    <button className={btnClasses} onClick={ctx.onShowCart}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
