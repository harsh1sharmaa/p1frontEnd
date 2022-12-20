import { Link, NavLink } from "react-router-dom";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function NavbarHeader() {

  return (
    <>
    <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
      <div className="nav">
        <NavLink
          className="navbar-nav"
          to="/home"
        >
          home
        </NavLink>
        <br></br>
        <NavLink className="navbar-nav" to="/about">
          about
        </NavLink>

        <br></br>
        <NavLink className="navbar-nav" to="user/harsh">
          Harsh
        </NavLink>
        <br></br>
        <NavLink className="navbar-nav" to="user/sharma">
          sharma
        </NavLink>
      </div>
        </Container>
      </Navbar> 
  
    </>
  )
}

export default NavbarHeader;
