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

  const login = (username, password) => {
    let body = {
      username: username.toLowerCase(),
      password: password,
    };
    AxiosInstance.post("auth/login/", body)
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw res.json();
        }
      })
      .then((json) => {
        console.log("Logged In");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const profile = (firstName, lastName, phone, country, city) => {
    var Data = {
      firstname: firstName,
      lastname: lastName,
      phone: phone,
      country: country,
      city: city,
    };
    AxiosInstance.put("profile/", Data)
      .then((res) => {
        alert(`Profile Submitted`);
      })
      .catch((e) => {
        let error = Object.values(e.response.data)[0][0];
        alert(`Register Error ${error}`);
      });
  };

  const globalContext = {
    register,
    login,
    profile,
  };
  return (
    <AuthContext.Provider value={globalContext}>
      {children}
    </AuthContext.Provider>
  );
};
