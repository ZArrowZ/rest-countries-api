const CountryFlag = ({ currCountry }) => {
  return (
    <img className="country__flag" src={currCountry.flag} alt="country flag" />
  );
};

export default CountryFlag;
