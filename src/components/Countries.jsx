import { Link } from "react-router-dom";
const Countries = ({ countries, currentCountry }) => {
  return (
    <div className="countries">
      {countries.map((country) => (
        <Link
          key={country.name}
          onClick={() => currentCountry(country)}
          to={`/country/${country.name}`}
          className="link"
        >
          <div className="country__container">
            <div
              className="flag"
              style={{ backgroundImage: "url(" + country.flag + ")" }}
            ></div>
            <div className="country__info">
              <h2>{country.name}</h2>
              <p>
                Population: <span>{country.population.toLocaleString()}</span>
              </p>
              <p>
                Region: <span>{country.region}</span>
              </p>
              <p>
                Capital: <span>{country.capital}</span>
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Countries;
