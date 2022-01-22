import { AiOutlineSearch } from "react-icons/ai";
const search = ({ handleSearch }) => {
  return (
    <div className="search">
      <AiOutlineSearch className="search__icon" />
      <input
        className="search__input"
        type="text"
        onChange={(e) => handleSearch(e.target.value)}
        placeholder="Search for a country..."
      />
    </div>
  );
};

export default search;
