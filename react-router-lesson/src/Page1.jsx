import { Link, Outlet, useNavigate } from "react-router-dom";

export const Page1 = () => {
  const array = [...Array(100).keys()];
  const navigate = useNavigate();
  const onClickDetailA = () => {
    navigate("./detailA");
  };

  return (
    <div>
      <h1>Page1ページです</h1>
      <Outlet />
      <Link to="./detailA" state={{ array: array }}>
        DetailAへ
      </Link>
      <br />
      <Link to="./detailB">DetailBへ</Link>
      <br />
      <button onClick={onClickDetailA}>DetailAへ</button>
    </div>
  );
};
