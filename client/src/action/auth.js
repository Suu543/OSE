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
