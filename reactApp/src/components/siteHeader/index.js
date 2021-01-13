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

          <NavDropdown className="text-white trending_dropdown" title="TRENDING" id="responsive-nav-dropdown">
            <NavDropdown.Item><Link id="trending_movies" className="text-dark" to="/api/movies"> MOVIES</Link></NavDropdown.Item>
            <NavDropdown.Item><Link id="trending_tvs" className="text-dark" to="/api/series"> TV SHOWS</Link></NavDropdown.Item>
            <NavDropdown.Item><Link id="trending_actors" className="text-dark" to="/api/actors"> ACTORS</Link></NavDropdown.Item>
          </NavDropdown>

          <Nav.Item ><Link id="acc_nav" className="nav-link text-white"> ACCOUNT</Link></Nav.Item>
          <Nav.Item><Link className="nav-link text-light" onClick={() => context.signout()} to="/">LOGOUT</Link></Nav.Item>
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
