import axios from "axios";

export const signup = async (signupData) => {
  let response = await axios.post(
    `${process.env.REACT_APP_API}/auth/signup`,
    signupData
  );

  return response;
};

export const signin = async (signinData) => {
  let response = await axios.post(
    `${process.env.REACT_APP_API}/auth/signin`,
    signinData
  );

  return response;
};

export const accountActivation = async (token) => {
  let response = await axios.post(
    `${process.env.REACT_APP_API}/auth/account-activation`,
    token
  );

  return response;
};

export const getProfile = async (id, token) => {
  let response = await axios.get(
    `${process.env.REACT_APP_API}/users/user/${id}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response;
};

export const updateProfile = async (id, data, token) => {
  let response = await axios.put(
    `${process.env.REACT_APP_API}/users/user/update/${id}`,
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
    `${process.env.REACT_APP_API}/users/user/admin/update/${id}`,
    data,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response;
};
