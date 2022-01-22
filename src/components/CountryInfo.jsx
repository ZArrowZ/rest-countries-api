import useConverter from "./util/useConverter";
import CountryInfoBackButton from "./countryInfo/CountryInfoBackButton";
import CountryFlag from "./countryInfo/CountryFlag";
import CountryInfoFirstCol from "./countryInfo/CountryInfoFirstCol";
import CountryName from "./countryInfo/CountryName";
import CountryInfoSecCol from "./countryInfo/CountryInfoSecCol";
import CountryInfoThirdCol from "./countryInfo/CountryInfoThirdCol";

const CountryInfo = ({ currCountry, countries, onCountryClick }) => {
  const convertAlpha3Code = useConverter({ countries, currCountry });

  return (
    <div className="country">
      <div>
        <CountryInfoBackButton />
        <CountryFlag currCountry={currCountry} />
      </div>
      <div className="country__details">
        <CountryName currCountry={currCountry} />
        <CountryInfoFirstCol currCountry={currCountry} />
        <CountryInfoSecCol currCountry={currCountry} />
        <CountryInfoThirdCol
          currCountry={currCountry}
          borders={convertAlpha3Code}
          onCountryClick={onCountryClick}
        />
      </div>
    </div>
  );
};

export default CountryInfo;
