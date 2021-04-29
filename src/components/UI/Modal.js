import { Fragment, useContext } from "react";
import ReactDOM from "react-dom";
import CartContext from "../../store/cart-context";

import classes from "./Modal.module.css";

const Backdrop = () => {
  const ctx = useContext(CartContext);
  return <div className={classes.backdrop} onClick={ctx.onHideCart} />;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;
