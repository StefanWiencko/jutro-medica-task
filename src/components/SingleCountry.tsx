import { FC } from "react";
import { useLocation, useParams, useSearchParams } from "react-router-dom";

export const SingleCountry: FC = () => {
  let location = useLocation();
  let urlParams = useParams();
  let [urlSearchParams] = useSearchParams();
  console.log(location, urlParams, urlSearchParams);
  return <div>Single Country</div>;
};
