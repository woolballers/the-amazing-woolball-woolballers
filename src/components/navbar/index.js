import { useState } from "react";
import Profile from "components/profile";
import NameSearchBox from "components/navbar/NameSearchBox";

function Navbar() {
  const [showNameSearchBox, setShowNameSearchBox] = useState(false);
  const [searchTermText, setSearchTermText] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const searchBox =
    (showNameSearchBox && (
      <NameSearchBox show={showNameSearchBox} searchTerm={searchTerm} />
    )) ||
    null;

  const onSearchName = (e) => {
    e.preventDefault();
    setSearchTerm(searchTermText);
    setShowNameSearchBox(true);
  };

  return (
    <div className="border-bottom border-danger mb-4">
      <nav className="navbar navbar-expand-lg nav-fill">
        <a className="navbar-brand" href="#">
          Woolballers
        </a>
        <form className="d-flex" onSubmit={onSearchName}>
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search Name"
            aria-label="Search"
            value={searchTermText}
            onChange={(e) => setSearchTermText(e.target.value)}
          />
          <button className="btn btn-outline-success" type="submit">
            <i className="bi bi-search"></i>
          </button>
        </form>

        <Profile />
      </nav>

      {searchBox}
    </div>
  );
}

export default Navbar;
