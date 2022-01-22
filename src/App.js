import "./css/style.css";
import { useState, useEffect } from "react";
import { Route, Routes, Navigate, useNavigate } from "react-router-dom";
import { Oval } from "react-loader-spinner";
import Search from "./components/Search";
import Filter from "./components/Filter";
import Header from "./components/Header";
import Countries from "./components/Countries";
import CountryInfo from "./components/CountryInfo";
import NotFound from "./components/NotFound";
import Pagination from "./components/Paginate";
import useLocalStorage from "./components/util/useLocalStorage";
import useStyle from "./components/style/useStyle";

const regions = ["America", "Africa", "Asia", "Europe", "Oceania"];
const itemsPerPage = 8;
const App = () => {
  const [darkMode, setDarkMode] = useLocalStorage("darkMode", false);
  const [dropDownActive, setDropDownActive] = useState(false);
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchValue, setSearchValue] = useState("");
  const [currCountry, setCurrCountry] = useLocalStorage("currCountry", {});
  const [filterName, setFilterName] = useState("Filter by Region");
  const [currPage, setCurrPage] = useState(1);
  const [countriesRegionCount, setCountriesRegionCount] = useState([]);

  const color = {
    color: darkMode ? "white" : "black",
  };
  const classes = useStyle(color);

  useEffect(() => {
    setLoading(true);
    fetch("https://restcountries.com/v2/all")
      .then((res) => res.json())
      .then((data) => {
        setCountries(data);
        setCountriesRegionCount(data.length);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    setCountriesRegionCount(
      countries.filter((c) => c.name.toLowerCase().includes(searchValue)).length
    );
  }, [searchValue, countries]);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  const handleDropDownClick = () => {
    setDropDownActive((prevState) => !prevState);
  };

  const handleSearch = (value) => {
    setSearchValue(value.toLowerCase());
    setCurrPage(1);
  };

  const handleFilter = (region) => {
    setCurrPage(1);
    setFilterName(region);
    setDropDownActive(false);
    region !== "Filter by Region" && region !== "All Regions"
      ? setCountriesRegionCount(
          countries.filter((c) => c.region.includes(region)).length
        )
      : setCountriesRegionCount(countries.length);
  };

  const currentCountry = (country) => {
    setCurrCountry(country);
    setSearchValue("");
  };
  let navigate = useNavigate();

  const onCountryClick = (c) => {
    navigate(`/country/${c}`, { replace: true });
    countries.map((country) => {
      return country.name === c && setCurrCountry(country);
    });
  };

  // GET CURRENT COUNTRIES
  const indexOfLastItem = currPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currItems = countries.slice(indexOfFirstItem, indexOfLastItem);

  const handleChange = (event, value) => {
    setCurrPage(value);
  };
  const showingCountries =
    searchValue !== ""
      ? countries
          .filter((c) => c.name.toLowerCase().includes(searchValue))
          .slice(indexOfFirstItem, indexOfLastItem)
      : filterName !== "Filter by Region" && filterName !== "All Regions"
      ? countries
          .filter((c) => c.region.includes(filterName))
          .slice(indexOfFirstItem, indexOfLastItem)
      : currItems;

  const paginationLength = Math.ceil(countriesRegionCount / itemsPerPage);

  return (
    <div className={darkMode ? "darkMode" : "lightMode"}>
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Routes>
        <Route
          exact
          path={"/"}
          element={
            <>
              <div className="countries-filter">
                <Search handleSearch={handleSearch} />
                <Filter
                  dropDownActive={dropDownActive}
                  handleClick={handleDropDownClick}
                  handleFilter={handleFilter}
                  filterName={filterName}
                  regions={regions}
                />
              </div>
              {loading ? (
                <div className="spinner">
                  <Oval
                    color={darkMode ? "hsl(0, 0%, 100%)" : "hsl(200, 15%, 8%)"}
                    height={80}
                    width={80}
                  />
                </div>
              ) : (
                <div>
                  <Countries
                    countries={showingCountries}
                    currentCountry={currentCountry}
                  />
                  {countriesRegionCount > 8 ? (
                    <Pagination
                      currPage={currPage}
                      handleChange={handleChange}
                      classes={classes}
                      paginationLength={paginationLength}
                    />
                  ) : (
                    ""
                  )}
                </div>
              )}
            </>
          }
        />
        <Route
          exact
          path={"/country/:country"}
          element={
            <CountryInfo
              currCountry={currCountry}
              countries={countries}
              onCountryClick={onCountryClick}
            />
          }
        />
        <Route path="*" element={<Navigate to={"/not-found"} />} />
        <Route path={"/not-found"} element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
