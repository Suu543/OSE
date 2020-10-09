import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import { isAuth, signout } from "../auth/helpers";
import useScroll from "../helpers/useScroll";
import {
  Navbar,
  NavbarWrapper,
  NavbarLogoWrapper,
  NavbarLinksWrapper,
  Container,
} from "../styles/LayoutTest";

const LayoutTest = ({ children, match, history }) => {
  const [open, setOpen] = useState(false);
  const { axisy } = useScroll();

  const nav = () => (
    <Navbar axisy={axisy}>
      <NavbarWrapper>
        <NavbarLogoWrapper>
          <h1>
            <a></a>
          </h1>
        </NavbarLogoWrapper>
        <NavbarLinksWrapper>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/community">Community</Link>
          </li>
          <li>
            <Link to="/blogs">Blog</Link>
          </li>
          <li>
            <Link to="/donate">Donate</Link>
          </li>
          <li>
            <Link to="/signin">Login</Link>
          </li>
          <li>
            <Link to="/signup">Get Started</Link>
          </li>
        </NavbarLinksWrapper>
      </NavbarWrapper>
    </Navbar>
  );

  //   const nav = () => (
  //     <Navbar axisy={axisy} open={open}>
  //       <NavbarLeft>
  //         <h1>
  //           <Link to="/"></Link>
  //         </h1>

  //         <NavbarRightHamburger open={open} onClick={() => setOpen(!open)}>
  //           <span></span>
  //           <span></span>
  //           <span></span>
  //         </NavbarRightHamburger>
  //       </NavbarLeft>

  //       <NavbarCenter open={open}>
  //         <li>
  //           <Link to="/about">About Us</Link>
  //         </li>
  //         <li>
  //           <Link to="/contact">Contact</Link>
  //         </li>
  //         <li>
  //           <Link to="/blogs">Blog</Link>
  //         </li>
  //         <li>
  //           <Link to="/community">Community</Link>
  //         </li>
  //         <li>
  //           <Link to="/donate">Donate</Link>
  //         </li>
  //       </NavbarCenter>

  //       {!isAuth() && (
  //         <NavbarRight open={open}>
  //           <li>
  //             <Link to="/signin">Sign in</Link>
  //           </li>
  //           <li>
  //             <Link to="/signup">Get Started</Link>
  //           </li>
  //         </NavbarRight>
  //       )}

  //       {isAuth() && isAuth().role === "admin" && (
  //         <NavbarRight open={open}>
  //           <li>
  //             <Link to="/admin">{isAuth().name}</Link>
  //           </li>
  //           <button
  //             onClick={() => {
  //               signout(() => {
  //                 history.push("/");
  //               });
  //             }}
  //           >
  //             Signout
  //           </button>
  //         </NavbarRight>
  //       )}

  //       {isAuth() && isAuth().role === "user" && (
  //         <NavbarRight open={open}>
  //           <li>
  //             <Link to="/user">{isAuth().name}</Link>
  //           </li>
  //           <button
  //             onClick={() => {
  //               signout(() => {
  //                 history.push("/");
  //               });
  //             }}
  //           >
  //             Signout
  //           </button>
  //         </NavbarRight>
  //       )}
  //     </Navbar>
  //   );

  return (
    <React.Fragment>
      {nav()}
      <Container>{children}</Container>
    </React.Fragment>
  );
};

export default withRouter(LayoutTest);
