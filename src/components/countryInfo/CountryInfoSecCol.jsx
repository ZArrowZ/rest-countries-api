const CountryInfoSecCol = ({ currCountry }) => {
  return (
    <div className="country__secCol">
      <div className="country__headline">
        <strong>Top Level Domain: </strong>
        <span>{currCountry?.topLevelDomain.join(", ")}</span>
      </div>
      <div className="country__headline">
        {currCountry.currencies && (
          <>
            <strong>Currencies: </strong>
            <span>{currCountry?.currencies[0]?.name}</span>
          </>
        )}
      </div>
      <div className="country__headline">
        <strong>Languages: </strong>
        <span>
          {currCountry?.languages.map((lang) => lang.name).join(", ")}
        </span>
      </div>
    </div>
  );
};

export default CountryInfoSecCol;
