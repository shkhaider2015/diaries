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
      <Link to="/" style={{ textDecoration: 'none' }} > <Navbar.Brand className="my-logo" as="div" href="/"> 
      <span style={{ WebkitTextStroke : '1px white', color : '#8a00bd', fontSize : '2rem', fontWeight : 'bold' }} >My Diary</span> </Navbar.Brand></Link>
  
      
      <Navbar.Collapse id="user-navbar" className="justify-content-end" >
        <Nav className="" >
          <NavDropdown title={loginState.items ? loginState.items.username : "Register"} id="user-dropdown" className="justify-content-end font-weight-bold" >
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