import { Link, Outlet } from "react-router-dom";

export const Page1 = () => {
  return (
    <div>
      <h1>Page1ページです</h1>
      <Outlet />
      <Link to="./detailA">DetailAへ</Link>
      <br />
      <Link to="./detailB">DetailBへ</Link>
    </div>
  );
};
