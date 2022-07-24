import React from 'react';

const Navbar = () => {
  return (
    <React.Fragment>
      <nav className="navbar navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href="#">
            <i className="fas fa-user-secret"></i>
          </a>
        </div>
      </nav>
    </React.Fragment>
  );
}

export default Navbar;
