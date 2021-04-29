import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import React, { Fragment, useContext } from "react";
import CartContext from "./store/cart-context";

function App() {
  const ctx = useContext(CartContext);
  return (
    <Fragment>
      {ctx.state && <Cart />}
      <Header />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
