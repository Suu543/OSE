import React, { useState, useEffect } from "react";
import jwt from "jsonwebtoken";
import Layout from "../core/Layout";
import { resetPassword } from "../action/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

const Reset = ({ match }) => {
  // props.match from react router dom
  const [values, setValues] = useState({
    name: "",
    token: "",
    newPassword: "",
    confirmed: "",
    buttonText: "Reset Password",
  });

  useEffect(() => {
    let token = match.params.token;
    let { name } = jwt.decode(token);
    if (token) {
      setValues({ ...values, name, token });
    }
  }, []);

  const { name, token, newPassword, confirmed, buttonText } = values;

  const handleChange = (name) => (e) => {
    console.log(e.target.value);
    setValues({ ...values, [name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setValues({ ...values, buttonText: "Submitting" });

    try {
      if (newPassword === confirmed) {
        let data = { newPassword, resetPasswordLink: token };
        let response = await resetPassword(data);

        if (response) {
          console.log("RESET PASSWORD SUCCESS", response);
          toast.success(response.data.message);
          setValues({ ...values, buttonText: "Done" });
        }
      }
    } catch (error) {
      console.log("RESET RASSWORD ERROR", error.response.data.error);
      toast.error(error.response.data.error);
      setValues({
        ...values,
        buttonText: "Reset Password",
      });
    }
  };

  const resetPasswordForm = () => (
    <form>
      <div className="form-group">
        <label className="text-muted">New Password</label>
        <input
          onChange={handleChange("newPassword")}
          type="password"
          value={newPassword}
          className="form-control"
          placeholder="Type New Password"
          required
        />
      </div>

      <div className="form-group">
        <label className="text-muted">Confirmed Password</label>
        <input
          onChange={handleChange("confirmed")}
          type="password"
          value={confirmed}
          className="form-control"
          placeholder="Type New Password"
          required
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
        <h1 className="p-5">Hey {name}, Please Type Your New Password</h1>
        {resetPasswordForm()}
      </div>
    </Layout>
  );
};

export default Reset;
