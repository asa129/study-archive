import { useParams, useLocation, useSearchParams } from "react-router-dom";

export const UrlParameter = () => {
  const { id } = useParams();
  const { search } = useLocation();
  const [query] = useSearchParams(search);
  return (
    <div>
      <h1>URLパラメーターページです</h1>
      <p>{`idは${id}だよ`}</p>
      <p>{`パラメータは${query.get("name")}だよ`}</p>
    </div>
  );
};
