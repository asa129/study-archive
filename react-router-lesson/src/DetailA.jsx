import { useLocation, useNavigate } from "react-router-dom";

export const DetailA = () => {
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location.state);
  const onClickBack = () => navigate(-1);
  return (
    <div>
      <h1>DetailAページです</h1>
      <button onClick={onClickBack}>戻る</button>
    </div>
  );
};
