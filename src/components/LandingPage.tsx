import { FC, useContext } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

import { DataContext } from "../components/DataProvider";
import { FilterOptions } from "./FilterOptions";

export const LandingPage: FC = () => {
  const [filterValue, setFilterValue] = useState({ input: "", select: "" });
  const { loading, error, data } = useContext(DataContext);
  if (loading) return <h3>Loading...</h3>;
  if (error) return <p>Error</p>;
  const filteredData = data?.countries.filter((country) => {
    if (filterValue.select !== country.continent.name) {
      return false;
    }
    if (!country.name.startsWith(filterValue.input)) {
      return false;
    }
    return true;
  });
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
