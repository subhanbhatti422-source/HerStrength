
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "remixicon/fonts/remixicon.css";


ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter  basename="/HerStrength">
    <App />
  </BrowserRouter>
);