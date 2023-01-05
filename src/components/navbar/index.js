import Profile from "components/profile";

function Navbar() {
  return (
    <div className="border-bottom border-danger mb-4">
      <nav className="navbar navbar-expand-lg nav-fill">
        <a className="navbar-brand" href="#">
          Woolballers
        </a>
        <form className="d-flex">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search Name"
            aria-label="Search"
          />
          <button
            className="btn btn-outline-success"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#searchResults"
            aria-expanded="false"
            aria-controls="searchResults"
          >
            <i className="bi bi-search"></i>
          </button>
        </form>

        <Profile />
      </nav>

      <nav className="navbar">
        <div className="collapse multi-collapse w-100" id="searchResults">
          <div className="card card-body">
            Some placeholder content for the search results of the name.
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
