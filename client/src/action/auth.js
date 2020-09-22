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

export const forgotPassword = async (email) => {
  let response = await axios.put(
    `${process.env.REACT_APP_API}/auth/forgot-password`,
    email
  );

  return response;
};

export const resetPassword = async (data) => {
  let response = await axios.put(
    `${process.env.REACT_APP_API}/auth/reset-password`,
    data
  );

  return response;
};

// export const googleLogin = (idToken) => {
//   let response = axios.post(`${process.env.REACT_APP_API}/auth/google-login`, {
//     idToken,
//   });

//   console.log("resonse", response);
//   return response;
// };
