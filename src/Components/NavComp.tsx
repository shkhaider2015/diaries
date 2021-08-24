import { Navbar, NavDropdown, Container, Nav } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useAppSelector } from "../State/hook";

export const NavComp = () =>
{
  const loginState = useAppSelector(state => state.LoginReducer);
  const navigate = useNavigate();

  const handleLogout = () =>
  {
  }

    return <Navbar expand="sm" variant="dark" style={{ backgroundColor: '#8a00bd' }}  >
    <Container>
      <Link to="/" style={{ textDecoration: 'none' }} > <Navbar.Brand className="my-logo" as="div" href="/">My Diary</Navbar.Brand></Link>
  
      {/* <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav  ml-5">
        <Nav className="me-auto">
          <NavDropdown title="Diary" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Public Diary</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Private Diary</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">All</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse> */}
      <Navbar.Collapse id="user-navbar" className="justify-content-end" >
        <Nav className="" >
          <NavDropdown title={loginState.items ? loginState.items.username : "Register"} id="user-dropdown" className="justify-content-end" >
            {
              loginState.items
                ? <NavDropdown.Item onClick={() => handleLogout()} >Logout</NavDropdown.Item>
                : <div>
                  <NavDropdown.Item onClick={() => navigate("/signup")} >Signup</NavDropdown.Item>
                  <NavDropdown.Item onClick={() => navigate("/login")} >Login</NavDropdown.Item>
                </div>
            }
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
}