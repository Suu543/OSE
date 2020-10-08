import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import Layout from "../core/Layout";
import styled from "styled-components";
import { signin } from "../action/auth";
import { authenticate, isAuth } from "./helpers";
import { ToastContainer, toast } from "react-toastify";
import Google from "./Google";
import Facebook from "./Facebook";
import "react-toastify/dist/ReactToastify.min.css";

const SigninContainer = styled.section`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(#11c09e, #13bca6, #13b4aa, #12aab6);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SigninWrapper = styled.section`
  width: 40%;
  padding-top: 5vh;
  margin: auto;
  background: white;
  border-radius: 5px;

  h1 {
    font-size: 7rem;
    text-align: center;
    margin-bottom: 2rem;
    color: #5fa0bb;
  }

  a {
    display: block;
    margin: 1.5rem auto;
    width: 72%;
    background: #dc3545;
    font-size: 1.5rem;
    border: none;
    padding: 0.9rem;
    color: white;
    text-align: center;
    text-decoration: none;
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

const SigninForm = styled.form`
  width: 100%;
`;

const SigninFormGroup = styled.div`
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
    margin-bottom: 2rem;
  }

  button {
    display: block;
    margin: auto;
    width: 90%;
    background: #098bc6;
    font-size: 1.5rem;
    border: none;
    padding: 0.9rem;
    color: white;
  }
`;

const SigninSocialWrapper = styled.section`
  padding: 1rem;
  margin-bottom: 2rem;

  button {
    display: block;
    margin: auto;
    width: 70%;
    margin-top: 1rem;
  }
`;

const Signin = ({ history }) => {
  const [values, setValues] = useState({
    email: "",
    password: "",
    buttonText: "Submit",
  });

  const { email, password, buttonText } = values;

  const handleChange = (name) => (e) => {
    console.log(e.target.value);
    setValues({ ...values, [name]: e.target.value });
  };

  const informParent = (response) => {
    console.log("response", response);
    authenticate(response, () => {
      isAuth() && isAuth().role === "admin"
        ? history.push("/admin")
        : history.push("/private");
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setValues({ ...values, buttonText: "Submitting" });

    try {
      let signinData = { email, password };
      let response = await signin(signinData);

      if (response) {
        console.log("SIGNUP SUCCESS", response.data);
        // save the response (user, token) localstorage/cookie
        // DB 수정하기
        authenticate(response, () => {
          setValues({
            ...values,
            email: "",
            password: "",
            buttonText: "Submitted",
          });

          toast.success(`Hey ${response.data.user.name}, Welcome Back!`);
          // Redirect based on role
          isAuth() && isAuth().role === "admin"
            ? history.push("/admin")
            : history.push("/private");
        });
      }
    } catch (error) {
      console.log("SIGNIN ERROR", error.response.data.error);
      setValues({
        ...values,
        buttonText: "Submit",
      });
      toast.error(error.response.data.error);
    }
  };

  const signinForm = () => (
    <SigninForm>
      <SigninFormGroup>
        <label>Email</label>
        <input onChange={handleChange("email")} type="email" value={email} />
      </SigninFormGroup>
      <SigninFormGroup>
        <label>Password</label>
        <input
          onChange={handleChange("password")}
          type="password"
          value={password}
        />
      </SigninFormGroup>
      <SigninFormGroup>
        <button onClick={handleSubmit}>{buttonText}</button>
      </SigninFormGroup>
    </SigninForm>
  );

  return (
    <Layout>
      <SigninContainer>
        <SigninWrapper>
          <ToastContainer />
          {isAuth() ? <Redirect to="/" /> : null}
          <h1>Login</h1>
          {signinForm()}
          <Link to="/auth/password/forgot">Forgot Password</Link>
          <hr />
          <SigninSocialWrapper>
            <Facebook informParent={informParent} />
            <Google informParent={informParent} />
          </SigninSocialWrapper>
        </SigninWrapper>
      </SigninContainer>
    </Layout>
  );
};

export default Signin;
