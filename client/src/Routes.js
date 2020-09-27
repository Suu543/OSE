import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import Home from "./core/Home";

import Signup from "./auth/Signup";
import Signin from "./auth/Signin";
import Activate from "./auth/Activate";
import PrivateRoute from "./auth/PrivateRoute";
import AdminRoute from "./auth/AdminRoute";

import Forgot from "./auth/Forgot";
import Reset from "./auth/Reset";

import Private from "./core/Private";
import Admin from "./core/Admin";

// Topic
import CreateTopic from "./topic/CreateTopic";

// Blog
import CreateBlog from "./blog/CreateBlog";

const GlobalStyle = createGlobalStyle`
    * {
      padding: 0;
      margin: 0;
      box-sizing: border-box;
    }

    html,body {
      font-size: 62.5%;
    }
  `;

const Routes = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/signin" exact component={Signin} />
        <Route path="/auth/activate/:token" exact component={Activate} />
        <PrivateRoute path="/private" exact component={Private} />
        <AdminRoute path="/admin" exact component={Admin} />
        <AdminRoute path="/admin/topic/create" exact component={CreateTopic} />
        <AdminRoute path="/admin/blog/create" exact component={CreateBlog} />
        <Route path="/auth/password/forgot" exact component={Forgot} />
        <Route path="/auth/password/reset/:token" exact component={Reset} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
