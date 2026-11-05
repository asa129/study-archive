import "./App.css";
import { Link } from "react-router-dom";
import { Router } from "./router/Router";

function App2() {
  return (
    <>
      <Link to="/">Homeへ</Link>
      <br />
      <Link to="/Page1">Page1へ</Link>
      <br />
      <Link to="/Page2">Page2へ</Link>
      <Router />
    </>
  );
}

export default App2;
