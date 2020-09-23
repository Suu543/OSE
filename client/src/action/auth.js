import axios from "axios";

export const signup = async (signupData) => {
  let response = await axios.post(
    `${process.env.REACT_APP_API}/signup`,
    signupData
  );

  return response;
};

export const signin = async (signinData) => {
  let response = await axios.post(
    `${process.env.REACT_APP_API}/signin`,
    signinData
  );

  return response;
};

export const accountActivation = async (token) => {
  let response = await axios.post(
    `${process.env.REACT_APP_API}/account-activation`,
    token
  );

  return response;
};

export const getProfile = async (id, token) => {
  let response = await axios.get(`${process.env.REACT_APP_API}/user/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response;
};

export const updateProfile = async (id, data, token) => {
  let response = await axios.put(
    `${process.env.REACT_APP_API}/user/update/${id}`,
    data,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response;
};

export const updateAdminProfile = async (id, data, token) => {
  let response = await axios.put(
    `${process.env.REACT_APP_API}/user/admin/update/${id}`,
    data,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response;
};

export const forgotPassword = async (email) => {
  let response = await axios.put(
    `${process.env.REACT_APP_API}/forgot-password`,
    email
  );

  return response;
};

export const resetPassword = async (data) => {
  let response = await axios.put(
    `${process.env.REACT_APP_API}/reset-password`,
    data
  );

  return response;
};
