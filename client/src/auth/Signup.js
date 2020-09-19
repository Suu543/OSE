import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import Layout from "../core/Layout";
import { isAuth } from "./helpers";
import { signup } from "../action/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

const Signup = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    buttonText: "Submit",
  });

  const { name, email, password, buttonText } = values;

  const handleChange = (name) => (e) => {
    console.log(e.target.value);
    setValues({ ...values, [name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setValues({ ...values, buttonText: "Submitting" });

    // Error 처리가 힘들어 이 구조를 선택함 action에 try - catch를 빼는 대신에
    try {
      let signupData = { name, email, password };
      let response = await signup(signupData);

      if (response) {
        console.log("SIGNUP SUCCESS", response);
        setValues({
          ...values,
          name: "",
          email: "",
          password: "",
          buttonText: "Submitted",
        });

        toast.success(response.data.message);
      }
    } catch (error) {
      console.log("SIGNUP ERROR", error.response.data.error);
      setValues({
        ...values,
        buttonText: "Submit",
      });
      toast.error(error.response.data.error);
    }
  };

  const signupForm = () => (
    <form>
      <div className="form-group">
        <label className="text-muted">Name</label>
        <input
          onChange={handleChange("name")}
          type="text"
          value={name}
          className="form-control"
        />
      </div>

      <div className="form-group">
        <label className="text-muted">Email</label>
        <input
          onChange={handleChange("email")}
          type="email"
          value={email}
          className="form-control"
        />
      </div>

      <div className="form-group">
        <label className="text-muted">Password</label>
        <input
          onChange={handleChange("password")}
          type="password"
          value={password}
          className="form-control"
        />
      </div>

      <div>
        <button className="btn btn-primary" onClick={handleSubmit}>
          {buttonText}
        </button>
      </div>
    </form>
  );

  return (
    <Layout>
      <div className="col-md-6 offset-md-3">
        <ToastContainer />
        {isAuth() ? <Redirect to="/" /> : null}
        {JSON.stringify({ name, email, password })}
        <h1 className="p-5">Signup</h1>
        {signupForm()}
      </div>
    </Layout>
  );
};

export default Signup;
