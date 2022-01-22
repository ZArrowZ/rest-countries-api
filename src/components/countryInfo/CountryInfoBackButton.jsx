import { Link } from "react-router-dom";
import { MdKeyboardBackspace } from "react-icons/md";

const CountryInfoBackButton = () => {
  return (
    <Link to={"/"} className="country__linkBack">
      <button id="backBtn">
        <MdKeyboardBackspace className="country__backIcon" /> Back
      </button>
    </Link>
  );
};

export default CountryInfoBackButton;
