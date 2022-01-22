import React from "react";

const CountryInfoFirstCol = ({ currCountry }) => {
  return (
    <div className="country__firstCol">
      <div className="country__headline">
        <strong>Native Name: </strong>
        <span>{currCountry?.nativeName}</span>
      </div>
      <div className="country__headline">
        <strong>Population: </strong>
        <span>{currCountry?.population.toLocaleString()}</span>
      </div>
      <div className="country__headline">
        <strong>Region: </strong>
        <span>{currCountry?.region}</span>
      </div>
      <div className="country__headline">
        <strong>Sub Region: </strong>
        <span>{currCountry?.subregion}</span>
      </div>
      <div className="country__headline">
        <strong>Capital: </strong>
        <span>{currCountry?.capital}</span>
      </div>
    </div>
  );
};

export default CountryInfoFirstCol;
