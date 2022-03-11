import { FC, useContext } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

import { DataContext } from "../components/DataProvider";
import { FilterOptions } from "./FilterOptions";

export const LandingPage: FC = () => {
  const [filterValue, setFilterValue] = useState({ input: "", select: "" });
  const { loading, error, data } = useContext(DataContext);

  const filteredData = data?.countries.filter((country) => {
    const capitalizedInputValue =
      filterValue.input.charAt(0).toUpperCase() + filterValue.input.slice(1);
    const isDataMatchingInputValue =
      filterValue.input === "" ||
      country.name.startsWith(capitalizedInputValue);
    const isDataMatchingSelectValue =
      filterValue.select === "" ||
      filterValue.select === country.continent.name;

    if (!isDataMatchingSelectValue) return false;
    if (!isDataMatchingInputValue) return false;
    return true;
  });
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
              <Link to={country.code}>{country.name}</Link>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
};
