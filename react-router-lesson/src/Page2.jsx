import { Outlet, Link } from "react-router-dom";

export const Page2 = () => {
  return (
    <div>
      <h1>Page2ページです</h1>
      <Outlet />
      <Link to="./detailA">DetailAへ</Link>
      <br />
      <Link to="./100">Urlパラメータへ</Link>
      <br />
      <Link to="./100">クエリパラメータへ</Link>
    </div>
  );
};
