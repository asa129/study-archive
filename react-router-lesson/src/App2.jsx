import "./App.css";
import { Home } from "./Home";
import { Page1 } from "./Page1";
import { Page2 } from "./Page2";
import { Routes, Route, Link } from "react-router-dom";
import { DetailA } from "./DetailA";
import { DetailB } from "./DetailB";

function App2() {
  return (
    <>
      <Link to="/">Homeへ</Link>
      <br />
      <Link to="/Page1">Page1へ</Link>
      <br />
      <Link to="/Page2">Page2へ</Link>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/Page1" exact element={<Page1 />}>
          <Route path="detailA" element={<DetailA />} />
          <Route path="detailB" element={<DetailB />} />
        </Route>
        <Route path="/Page2" element={<Page2 />} />
      </Routes>
    </>
  );
}

export default App2;
