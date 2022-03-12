import { FC, useContext } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { DataContext } from "../components/DataProvider";
import { FilterOptions } from "./FilterOptions";
import { Data, Country } from "../types";

type FilterData = (
  a: Data | undefined,
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
    <div className="w-100% ">
      <h2 className="text-2xl mb-6">Pick country to see more information</h2>
      <FilterOptions
        setFilterValue={setFilterValue}
        filterValue={filterValue}
      />
      <main className="mt-6">
        <ul>
          {filteredData?.map((country) => (
            <li className=" mb-6 w-fit" key={country.code}>
              <Link tabIndex={-1} className=" flex flex-col" to={country.code}>
                <strong>{country.name}</strong>
                <small className="ml-2">Country Code: {country.code}</small>
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
};
