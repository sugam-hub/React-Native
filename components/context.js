import React from "react";
import AxiosInstance from "../AxiosInstance";

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const register = (name, email, password, confirmPassword) => {
    var Data = {
      username: name,
      email: email,
      password1: password,
      password2: confirmPassword,
    };
    AxiosInstance.post("auth/registration/", Data)
      .then((res) => {
        alert(`Register Successfully`);
      })
      .catch((e) => {
        let error = Object.values(e.response.data)[0][0];
        alert(`Register Error ${error}`);
      });
  };

  return (
    <AuthContext.Provider value={{ register }}>{children}</AuthContext.Provider>
  );
};
