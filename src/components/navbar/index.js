import Profile from "components/profile";
import WoolName from "components/woolName"


function Navbar() {
  return(
    <div className="border-bottom border-danger mb-4">
      <nav className="navbar navbar-expand-lg nav-fill">
        <a className="navbar-brand" href="#">Woolballers</a>
        <form className="d-flex">
          <input className="form-control me-2" type="search" placeholder="Search Name" aria-label="Search"/>
          <button className="btn btn-outline-success" type="button" data-bs-toggle="collapse" data-bs-target="#searchResults" aria-expanded="false" aria-controls="searchResults">
            <i class="bi bi-search"></i>
          </button>


        </form>

        < Profile />
      </nav>

      <nav class="navbar">
        <div class="collapse multi-collapse" id="searchResults">
          <div class="card card-body flex-row">
            <WoolName name="Neiman"/>&nbsp;is unregistered&nbsp;&nbsp;<button className="button-orange">Register</button>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar;
