import { UrlParameter } from "../UrlParameter";
import { DetailA } from "../DetailA";

export const Page2Routes = [
  {
    path: "detailA",
    element: <DetailA />,
  },
  {
    path: ":id",
    element: <UrlParameter />,
  },
];
