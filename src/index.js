import ReactDOM from "react-dom";

import "./index.css";
import App from "./App";
import ContextProvider from "./store/CartProvider";

ReactDOM.render(
  <ContextProvider>
    <App />
  </ContextProvider>,
  document.getElementById("root")
);
