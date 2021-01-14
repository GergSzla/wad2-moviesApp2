import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/authContext";
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import "../../globals/fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./siteHeader.css";
import 'bootstrap/dist/css/bootstrap.min.css';


const SiteHeader = () => {
  const context = useContext(AuthContext);

  return context.isAuthenticated ? (
    <div className="siteHeader">

      <Navbar collapseOnSelect variant="dark" expand="lg" fixed="top">
        <FontAwesomeIcon
          className="navbar-text text-white"
          icon={["fas", "film"]}
          size="3x"
          to="/"
        />
        <Navbar.Brand className="text-white brand " href="/">MovList</Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Item><Link id="home_nav" className="nav-link text-white" to="/"> HOME</Link></Nav.Item>

            <Nav.Item><Link id="trending_movies" className="nav-link text-white" to="/api/movies"> MOVIES</Link></Nav.Item>
            <Nav.Item><Link id="trending_tvs" className="nav-link text-white" to="/api/series"> TV SHOWS</Link></Nav.Item>
            <Nav.Item><Link id="trending_actors" className="nav-link text-white" to="/api/actors"> ACTORS</Link></Nav.Item>

            <Nav.Item ><Link id="acc_nav" className="nav-link text-white" to="/account"> ACCOUNT</Link></Nav.Item>
            <Nav.Item><Link className="nav-link text-white" onClick={() => context.signout()} to="/">LOGOUT</Link></Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  ) : (
      <div className="siteHeader">

        <Navbar collapseOnSelect variant="dark" expand="lg" fixed="top">
          <FontAwesomeIcon
            className="navbar-text text-white"
            icon={["fas", "film"]}
            size="3x"
            to="/"
          />
          <Navbar.Brand className="text-white brand " href="/">MovList</Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Item><Link className="nav-link text-light" to="/login"> LOGIN</Link></Nav.Item>
              <Nav.Item><Link className="nav-link text-light" to="/signup"> SIGN UP</Link></Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
};

export default SiteHeader;
