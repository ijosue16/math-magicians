import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';
import { BrowserRouter as Router, Link } from 'react-router-dom';

function NavBar() {
  return (
    <Router>
      <nav className=" d-flex justify-content-end align-content-center gap-2 container-fluid py-3 pe-5">
        <div className="container-fluid ">
          <h1>Math Magician!</h1>
        </div>
        <Link className="text-decoration-none border-end border-2 border-dark px-2  my-auto" to="/">Home</Link>
        <Link className="text-decoration-none border-end border-2 border-dark px-2  my-auto " to="/calculator">Calculator</Link>
        <Link className="text-decoration-none   my-auto " to="/qoute">Quote</Link>
      </nav>
    </Router>
  );
}
export default NavBar;
