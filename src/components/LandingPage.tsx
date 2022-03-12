import { FC, useContext } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { DataContext } from "../components/DataProvider";
import { FilterOptions } from "./FilterOptions";
import { LandingPageData, Country } from "../types";

type FilterData = (
  a: LandingPageData | undefined,
  b: {
    input: string;
    select: string;
  }
) => Country[] | undefined;

const filterData: FilterData = (data, { input, select }) =>
  data?.countries.filter((country) => {
    const isDataMatchingInputValue = country.name
      .toLowerCase()
      .startsWith(input.toLowerCase());
    const isDataMatchingSelectValue =
      select === "" || select === country.continent.name;
    if (input === "" && select === "") return true;
    if (!isDataMatchingSelectValue) return false;
    if (!isDataMatchingInputValue) return false;
    return true;
  });
export const LandingPage: FC = () => {
  const [filterValue, setFilterValue] = useState({ input: "", select: "" });
  const { loading, error, data } = useContext(DataContext);
  const filteredData = filterData(data, filterValue);
  if (loading) return <h3>Loading...</h3>;
  if (error) return <p>Error</p>;
  return (
    <div>
      <h2>Creative title</h2>
      <FilterOptions
        setFilterValue={setFilterValue}
        filterValue={filterValue}
      />
      <main>
        <ul>
          {filteredData?.map((country) => (
            <li key={country.code}>
              <Link className="flex" to={country.code}>
                {country.name} Code:{country.code}
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
};
