import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import Layout from "../core/Layout";
import styled from "styled-components";
import { isAuth } from "./helpers";
import { signup } from "../action/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

const SignupContainer = styled.section`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(#11c09e, #13bca6, #13b4aa, #12aab6);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SignupWrapper = styled.section`
  width: 40%;
  margin: auto;
  background: white;
  border-radius: 5px;

  h1 {
    font-size: 7rem;
    text-align: center;
    padding: 1rem;
    color: #5fa0bb;
  }

  a {
    display: block;
    margin: auto;
    width: 72%;
    background: #dc3545;
    font-size: 1.5rem;
    border: none;
    padding: 0.9rem;
    color: white;
    margin-bottom: 4rem;
  }

  hr {
    border: 1px solid grey;
    width: 80%;
    margin: 2rem auto;
  }

  @media all and (max-width: 1100px) and (min-width: 860px) {
    width: 60%;
  }

  @media all and (max-width: 859px) and (min-width: 500px) {
    width: 80%;
  }

  @media all and (max-width: 499px) {
    width: 95%;
  }
`;

const SignupForm = styled.form`
  width: 100%;
`;

const SignupFormGroup = styled.div`
  width: 80%;
  margin: auto;

  label {
    display: block;
    width: 90%;
    margin: auto;
    font-size: 2rem;
    opacity: 0.9;
  }

  input {
    width: 90%;
    margin: auto;
    padding: 0.8rem;
    display: block;
    font-size: 1.5rem;
    margin-bottom: 1.3rem;
  }

  button {
    display: block;
    margin: auto;
    margin-top: 2rem;
    width: 90%;
    background: #098bc6;
    font-size: 1.5rem;
    border: none;
    padding: 0.9rem;
    color: white;
  }
`;

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
    <SignupForm>
      <SignupFormGroup>
        <label>Name</label>
        <input onChange={handleChange("name")} type="text" value={name} />
      </SignupFormGroup>

      <SignupFormGroup>
        <label>Email</label>
        <input onChange={handleChange("email")} type="email" value={email} />
      </SignupFormGroup>

      <SignupFormGroup>
        <label>Password</label>
        <input
          onChange={handleChange("password")}
          type="password"
          value={password}
        />
      </SignupFormGroup>

      <SignupFormGroup>
        <button onClick={handleSubmit}>{buttonText}</button>
      </SignupFormGroup>
    </SignupForm>
  );

  return (
    <Layout>
      <SignupContainer>
        <SignupWrapper>
          <ToastContainer />
          {isAuth() ? <Redirect to="/" /> : null}
          <h1 className="p-5">Signup</h1>
          {signupForm()}
          <br />
          <Link
            to="/auth/password/forgot"
            className="btn btn-sm btn-outline-danger"
          >
            Forgot Password
          </Link>
        </SignupWrapper>
      </SignupContainer>
    </Layout>
  );
};

export default Signup;
