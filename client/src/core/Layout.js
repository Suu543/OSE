import React from "react";
import { Link, withRouter } from "react-router-dom";
import { isAuth, signout } from "../auth/helpers";

const Layout = ({ children, match, history }) => {
  const isActive = (path) => {
    // match.path === history.location.pathname
    if (match.path === path) {
      return { color: "#000" };
    } else {
      return { color: "#fff" };
    }
  };

  const nav = () => (
    <ul className="nav nav-tabs bg-primary">
      <li className="nav-item">
        <Link to="/" className="nav-link" style={isActive("/")}>
          Home
        </Link>
      </li>

      {!isAuth() && (
        <React.Fragment>
          <li className="nav-item">
            <Link to="/signup" className="nav-link" style={isActive("/signup")}>
              Signup
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/signin" className="nav-link" style={isActive("/signin")}>
              Signin
            </Link>
          </li>
        </React.Fragment>
      )}

      {isAuth() && isAuth().role === "admin" && (
        <li className="nav-item">
          <Link to="/admin" className="nav-link" style={isActive("/admin")}>
            {isAuth().name}
          </Link>
        </li>
      )}

      {isAuth() && isAuth().role === "user" && (
        <li className="nav-item">
          <Link to="/private" className="nav-link" style={isActive("/admin")}>
            {isAuth().name}
          </Link>
        </li>
      )}

      {isAuth() && (
        <li className="nav-item">
          <span
            style={{ curosr: "pointer", color: "#fff" }}
            className="nav-link"
            onClick={() => {
              signout(() => {
                history.push("/");
              });
            }}
          >
            Signout
          </span>
        </li>
      )}
    </ul>
  );

  return (
    <React.Fragment>
      {nav()}
      <div className="container">{children}</div>
    </React.Fragment>
  );
};

export default withRouter(Layout);
