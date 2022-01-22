import React from "react";
import { BiChevronDown } from "react-icons/bi";
import { BiChevronUp } from "react-icons/bi";

const Filter = ({
  dropDownActive,
  handleClick,
  handleFilter,
  filterName,
  regions,
}) => {
  const active = { display: "block" };
  const notActive = { display: "none" };
  return (
    <div className="filter">
      <div className="default" onClick={handleClick}>
        {filterName}
        {dropDownActive ? (
          <BiChevronUp className="dropDown__icon" />
        ) : (
          <BiChevronDown className="dropDown__icon" />
        )}
      </div>
      <div
        className="options__container"
        style={dropDownActive ? active : notActive}
      >
        <div
          style={{
            display: filterName !== "Filter by Region" ? "block" : "none",
          }}
          className="option"
          onClick={(e) => handleFilter(e.target.innerText)}
        >
          <span>All Regions</span>
        </div>
        {regions.map((region) => (
          <div
            className="option"
            key={region}
            onClick={(e) => handleFilter(e.target.innerText)}
          >
            <span>{region}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Filter;
