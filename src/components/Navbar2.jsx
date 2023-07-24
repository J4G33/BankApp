import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import useUserContext from "../hooks/useUserContext";
import RegisterPopUp from "./popups/RegisterPopUp";
import LoginPopUp from "./popups/LoginPopup";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';



const NavbarComponent = () => {
  const [isRegisterPopUp, setIsRegisterPopUp] = useState(false);
  const [isLoginPopUp, setIsLoginPopUp] = useState(false);
  const { loggedInUser, setLoggedInUser } = useUserContext();
  const navigate = useNavigate();

  const toggleRegisterPopUp = () => {
    setIsRegisterPopUp(!isRegisterPopUp);
  };

  const toggleLoginPopUp = () => {
    setIsLoginPopUp(!isLoginPopUp);
  };

  const handleLogout = () => {
    setLoggedInUser("");
    navigate("/");
  };

  // Define your inline styles
  const navStyle = {
    paddingRight: '15px',
    paddingLeft: '15px',
  };

  return (
    <>
      <Navbar collapseOnSelect expand="sm" variant="dark" bg="">
        <Container className="tempe-container">
        <Navbar.Brand as={Link} to="/home">
        <img src="./TempeLogo.jpg" alt="Logo" width={150} />
        </Navbar.Brand>
       
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link style={navStyle} onClick={toggleRegisterPopUp}>Register</Nav.Link>
              <Nav.Link style={navStyle} onClick={toggleLoginPopUp}>Login</Nav.Link>
              <Nav.Link style={navStyle} as={Link} to="/deposit">Deposit</Nav.Link>
              <Nav.Link style={navStyle} as={Link} to="/withdraw">Withdraw</Nav.Link>
              {loggedInUser && (
                <>
                  <Nav.Link style={navStyle} as={Link} to="/myAccount">Account</Nav.Link>
                  <Nav.Link style={navStyle} onClick={handleLogout}>Logout</Nav.Link>
                </>
              )}
              <Nav.Link style={navStyle} as={Link} to="/allData">Data</Nav.Link>
            </Nav>
            {loggedInUser && (
              <Navbar.Text className="ms-auto">
                <span className="name">{loggedInUser.name}</span>
              </Navbar.Text>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {isRegisterPopUp && <RegisterPopUp handleClose={toggleRegisterPopUp} />}
      {isLoginPopUp && <LoginPopUp handleClose={toggleLoginPopUp} />}
    </>
  );
};

export default NavbarComponent;


