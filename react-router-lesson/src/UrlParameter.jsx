import { useParams } from "react-router-dom";

export const UrlParameter = () => {
  const { id } = useParams();
  return (
    <div>
      <h1>URLパラメーターページです</h1>
      <p>{`idは${id}だよ`}</p>
    </div>
  );
};
