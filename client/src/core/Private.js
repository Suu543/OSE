import React, { useState, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import { isAuth, getCookie, signout, updateUser } from "../auth/helpers";
import { getProfile, updateProfile } from "../action/auth";
import { ToastContainer, toast } from "react-toastify";
import Layout from "../core/Layout";
import "react-toastify/dist/ReactToastify.min.css";

const Private = ({ history }) => {
  const [values, setValues] = useState({
    role: "",
    name: "",
    email: "",
    password: "",
    buttonText: "Submit",
  });

  const userId = isAuth()._id;
  const token = getCookie("token");

  useEffect(() => {
    const getUserProfile = async (id, token) => {
      try {
        let response = await getProfile(id, token);

        console.log("PROFILE UPDATE", response.data);
        const { role, name, email } = response.data;
        setValues({ ...values, role, name, email });
      } catch (error) {
        console.log("error", error);
        console.log("PRIVATE PROFILE UPDATE ERROR", error.response.data.error);
        // console.log("error.stats", error.response.status);
        if (error.response.status === 401) {
          signout(() => {
            history.push("/");
          });
        }
      }
    };

    getUserProfile(userId, token);
  }, []);

  const { role, name, email, password, buttonText } = values;

  const handleChange = (name) => (e) => {
    console.log(e.target.value);
    setValues({ ...values, [name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setValues({ ...values, buttonText: "Submitting" });
    try {
      let updateData = { name, password };
      let response = await updateProfile(userId, updateData, token);
      console.log("PRIVATE PROFILE UPDATE SUCCESS", response);
      updateUser(response, () => {
        setValues({ ...values, buttonText: "Submitted" });
        toast.success("Successfully update your name and password!");
      });
    } catch (error) {
      console.log("PRIVATE PROFILE UPDATE ERROR", error.response.data.error);
      setValues({
        ...values,
        buttonText: "Submit",
      });
      toast.error(error.response.data.error);
    }
  };

  const updateForm = () => (
    <form>
      <div className="form-group">
        <label className="text-muted">Role</label>
        <input
          type="text"
          defaultValue={role}
          className="form-control"
          disabled
        />
      </div>

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
          type="email"
          defaultValue={email}
          className="form-control"
          disabled
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
        {JSON.stringify({ email, password })}
        <h1 className="p-5 text-center">Private</h1>
        <p className="lead text-center">Profile Update</p>
        {updateForm()}
      </div>
    </Layout>
  );
};

export default Private;
