import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
//
// import ReactDOM from "react-dom";
//
// const numbers = [1, 2, 3, 4, 5];
//
// const updatedNums = numbers.map((number) => {
//     return <li>{number}</li>;
// });

// ReactDOM.render(<ul>{updatedNums}</ul>, document.getElementById("root"));

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
