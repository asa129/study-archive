import { Home } from "../Home";
import { Page1 } from "../Page1";
import { Page2 } from "../Page2";
import { Routes, Route } from "react-router-dom";
import { Page1Routes } from "./Page1Routes";
import { Page2Routes } from "./Page2Routes";
import { Page404 } from "../Page404";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/Page1" exact element={<Page1 />}>
        {Page1Routes.map((props) => (
          <Route key={props.path} path={props.path} element={props.element} />
        ))}
      </Route>
      <Route path="/Page2" element={<Page2 />}>
        {Page2Routes.map((props) => (
          <Route key={props.path} path={props.path} element={props.element} />
        ))}
      </Route>
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
};
