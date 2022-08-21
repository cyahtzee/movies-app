import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <div className="navbar-nav">
            <NavLink className="navbar-brand" to="/">
                <i className="fas fa-user-secret"></i>
            </NavLink>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <NavLink className="nav-item nav-link" to="/movies">
                Movies
              </NavLink>
              <NavLink className="nav-item nav-link" to="/customers">
                Customers
              </NavLink>
              <NavLink className="nav-item nav-link" to="/rentals">
                Rentals
              </NavLink>
              <NavLink className="nav-item nav-link" to="/counters">
                Counters
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
}

export default Navbar;
