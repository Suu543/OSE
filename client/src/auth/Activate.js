import React, { useState, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import Layout from "../core/Layout";
import JWT from "jsonwebtoken";
import { accountActivation } from "../action/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

const Activate = ({ match }) => {
  const [values, setValues] = useState({
    name: "",
    token: "",
    show: true,
  });

  useEffect(() => {
    let token = match.params.token;
    let { name } = JWT.decode(token);

    if (token) {
      setValues({ ...values, name, token });
    }
  }, []);

  const { name, token, show } = values;

  const clickSubmit = async (e) => {
    e.preventDefault();
    try {
      let tokenData = { token };
      let response = await accountActivation(tokenData);

      if (response) {
        console.log("ACCOUNT ACTIVATION", response);
        setValues({
          ...values,
          show: false,
        });

        toast.success(response.data.message);
      }
    } catch (error) {
      console.log("ACCOUNT ACTIVATION", error.response.data.error);
      toast.error(error.response.data.error);
    }
  };

  const activationLink = () => (
    <div className="text-center">
      <h1 className="p-5">Hey {name}, Ready to Activate Your Account?</h1>
      <button className="btn btn-outline-primary" onClick={clickSubmit}>
        Activate Account
      </button>
    </div>
  );

  return (
    <Layout>
      <div className="col-md-6 offset-md-3">
        <ToastContainer />
        <h1 className="p-5">Activate Account</h1>
        {activationLink()}
      </div>
    </Layout>
  );
};

export default Activate;
