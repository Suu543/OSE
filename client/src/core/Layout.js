import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import { isAuth, signout } from "../auth/helpers";
import {
  Navbar,
  NavbarLeft,
  NavbarCenter,
  NavbarRight,
  NavbarRightHamburger,
  Container,
} from "../styles/Layout";

const Layout = ({ children, match, history }) => {
  const [open, setOpen] = useState(false);

  const nav = () => (
    <Navbar open={open}>
      <NavbarLeft>
        <li>
          <Link to="/">OSE</Link>
        </li>
      </NavbarLeft>

      <NavbarRightHamburger open={open}>
        <div></div>
        <div></div>
        <div></div>
      </NavbarRightHamburger>

      <NavbarCenter open={open}>
        <li>
          <Link to="/about">About Us</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/blogs">Blog</Link>
        </li>
        <li>
          <Link to="/community">Community</Link>
        </li>
        <li>
          <Link to="/donate">Donate</Link>
        </li>
      </NavbarCenter>

      {!isAuth() && (
        <NavbarRight open={open}>
          <li>
            <Link to="/signin">Sign in</Link>
          </li>
          <li>
            <Link to="/signup">Get Started</Link>
          </li>
        </NavbarRight>
      )}

      {isAuth() && isAuth().role === "admin" && (
        <NavbarRight open={open}>
          <li>
            <Link to="/admin">{isAuth().name}</Link>
          </li>
          <button
            onClick={() => {
              signout(() => {
                history.push("/");
              });
            }}
          >
            Signout
          </button>
        </NavbarRight>
      )}

      {isAuth() && isAuth().role === "user" && (
        <NavbarRight open={open}>
          <li>
            <Link to="/user">{isAuth().name}</Link>
          </li>
          <button
            onClick={() => {
              signout(() => {
                history.push("/");
              });
            }}
          >
            Signout
          </button>
        </NavbarRight>
      )}
    </Navbar>
  );

  return (
    <React.Fragment>
      {nav()}
      <Container>{children}</Container>
    </React.Fragment>
  );
};

export default withRouter(Layout);
