import React from "react";

const CountryInfoThirdCol = ({ currCountry, borders, onCountryClick }) => {
  return (
    <div className="country__thirdCol">
      {currCountry.borders ? (
        <div className="country__headline">
          <strong>Border Countries: </strong>
          <div className="country__borders__container">
            {borders.map((c) => (
              <button
                key={c}
                className="country__border"
                onClick={() => onCountryClick(c)}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default CountryInfoThirdCol;
