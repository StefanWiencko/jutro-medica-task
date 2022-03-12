import { FC, useContext } from "react";
import { useLocation } from "react-router-dom";
import { DataContext } from "../components/DataProvider";
import { Link } from "react-router-dom";

export const SingleCountry: FC = () => {
  const { data, loading } = useContext(DataContext);
  const selectedCountryCode = useLocation().pathname.substring(1);
  const currentCounty = data?.countries.find(
    (country) => country.code === selectedCountryCode
  );
  if (loading) return <h3>Loading...</h3>;
  if (currentCounty === undefined) {
    return <h3>Country with code {selectedCountryCode} does not exist</h3>;
  }
  return (
    <div>
      <section>
        <div className="text-2xl mb-6">
          <span className="mr-4">{currentCounty.name}</span>
          <span>{currentCounty.emoji}</span>
        </div>
        <p className="mb-2">Country code: {currentCounty.code}</p>
        <h2>Official languages:</h2>
        <ul className="mb-4">
          {!currentCounty.languages[0] && <li className="ml-2">None</li>}
          {currentCounty.languages.map((language) => (
            <li className="ml-2" key={language.name}>
              {language.name}
            </li>
          ))}
        </ul>
      </section>
      <Link to="/" className="text-blue-700">
        Back
      </Link>
    </div>
  );
};
