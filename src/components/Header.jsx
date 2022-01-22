import { BsMoon, BsMoonFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const Header = ({ darkMode, toggleDarkMode }) => {
  return (
    <header className="header">
      <div className="header__container">
        <div className="logo">
          <h1>
            <Link className="logo__link" to={"/"}>
              Where in the world?
            </Link>
          </h1>
        </div>
        <div className="header__darkMode" onClick={toggleDarkMode}>
          {darkMode ? <BsMoonFill style={{ color: "white" }} /> : <BsMoon />}
          <p>Dark Mode</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
