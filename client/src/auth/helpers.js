import cookie from "js-cookie";

// Set In Cookie
export const setCookie = (key, value) => {
  // window method를 사용할 수 있음을 보장하기위해
  if (window !== "undefined") {
    cookie.set(key, value, {
      expires: 1,
    });
  }
};

// Remove From Cookie
export const removeCookie = (key) => {
  if (window !== "undefined") {
    cookie.remove(key, {
      expires: 1,
    });
  }
};

// Get From Cookie Such as Stored Token
// Will be useful when we need to make request to server with token
export const getCookie = (key, value) => {
  if (window !== "undefined") {
    return cookie.get(key);
  }
};

// Set in localstorage
export const setLocalStorage = (key, value) => {
  if (window !== "undefined") {
    localStorage.setItem(key, JSON.stringify(value));
  }
};

// Remove from Localstorage
export const removeLocalStorage = (key) => {
  if (window !== "undefined") {
    localStorage.removeItem(key);
  }
};

// Authenticate User By Passing data to cookie and localstorage during signin
export const authenticate = (response, next) => {
  console.log("AUTHENTICATE HELPER ON SIGNIN RESPONSE", response);
  setCookie("token", response.data.token);
  setLocalStorage("user", response.data.user);
  next();
};

// Access User Info from localstorage
export const isAuth = () => {
  if (window !== "undefined") {
    const cookieChecked = getCookie("token");
    if (cookieChecked) {
      if (localStorage.getItem("user")) {
        return JSON.parse(localStorage.getItem("user"));
      } else {
        return false;
      }
    }
  }
};

// signout
export const signout = (next) => {
  removeCookie("token");
  removeLocalStorage("user");
  next();
};

export const updateUser = (response, next) => {
  console.log("UPDATE USER IN LOCALSTORAGE HELPERS", response);
  if (typeof window !== undefined) {
    let auth = JSON.parse(localStorage.getItem("user"));
    console.log("auth", auth);
    console.log("response", response);
    auth = response.data;
    localStorage.setItem("user", JSON.stringify(auth));
  }

  next();
};
