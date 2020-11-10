import React, { useContext } from "react";
import SessionContext from "../contexts/SessionContext";
import { useHistory } from "react-router-dom";

import { Navbar, Nav, NavLink } from "reactstrap";
import Login from "./Login";
import SignUp from "./SignUp";
import AdminLogin from "./AdminLogin";
import AdminSignUp from "./AdminSignUp";

export default function NavBar() {
  let history = useHistory();
  
  const {
    setLoggedIn,
    loggedIn,
    toggleLoginModal,
    toggleSignUpModal,
    toggleAdminModal,
    adminLoggedIn,
    setAdminLoggedIn,
  } = useContext(SessionContext);

  const handleAdminLogout = () => {
    localStorage.removeItem('jwt')
    setAdminLoggedIn(false)
    history.push('/')
  }

  const handleUserLogout = () => {
    localStorage.removeItem('jwt')
    setLoggedIn(false)
    history.push('/')
  }

  return (
    <div>
      <Login />
      <SignUp />
      <AdminLogin />
      <AdminSignUp />
      <Navbar color="light" light expand="md">
        {adminLoggedIn ? (
          <NavLink onClick={handleAdminLogout}>Logout Admin</NavLink>
        ) : (
          <NavLink onClick={toggleAdminModal}>Admin Login</NavLink>
        )}

        <Nav className="ml-auto">
          {loggedIn ? (
            <NavLink onClick={handleUserLogout}>Logout</NavLink>
          ) : (
            <>
              <NavLink onClick={toggleLoginModal}>Login</NavLink>
              <NavLink onClick={toggleSignUpModal}>Sign Up</NavLink>
            </>
          )}
        </Nav>
      </Navbar>
    </div>
  );
}
