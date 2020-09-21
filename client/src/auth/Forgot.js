import React, { useState } from "react";
import Layout from "../core/Layout";
import { forgotPassword } from "../action/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

const Forgot = ({ history }) => {
  const [values, setValues] = useState({
    email: "",
    buttonText: "Request Password Reset Link",
  });

  const { email, buttonText } = values;

  const handleChange = (name) => (e) => {
    console.log(e.target.value);
    setValues({ ...values, [name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setValues({ ...values, buttonText: "Submitting" });

    try {
      let forgotPasswordData = { email };
      let response = await forgotPassword(forgotPasswordData);

      if (response) {
        console.log(`PASSWORD RESET LINK SENT TO ${email}`);
        toast.success(response.data.message);
        setValues({ ...values, buttonText: "Requested" });
      }
    } catch (error) {
      console.log("PASSWORD RESET LINK SENT Failed", error.response.data.error);
      toast.error(error.response.data.error);
      setValues({
        ...values,
        buttonText: "Request Password Reset Link",
      });
    }
  };

  const passwordForgotForm = () => (
    <form>
      <div className="form-group">
        <label className="text-muted">Email</label>
        <input
          onChange={handleChange("email")}
          type="email"
          value={email}
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
        <h1 className="p-5">Forgot Password</h1>
        {passwordForgotForm()}
      </div>
    </Layout>
  );
};

export default Forgot;
