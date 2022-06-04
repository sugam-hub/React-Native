import AsyncStorage from "@react-native-async-storage/async-storage";
import React from "react";
import AxiosInstance from "../AxiosInstance";

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [userInfo, setUserInfo] = React.useState({});
  const [isLoading, setIsLoading] = React.useState(false);
  const [food, setFood] = React.useState([]);

  const [token, setToken] = React.useState(null);
  AsyncStorage.getItem("token").then((values) => {
    setToken(values);
  });

  const [isAuthenticated, setIsAuthenticated] = React.useState(false);
  React.useEffect(() => {
    setIsAuthenticated(token !== null ? true : false);
    AsyncStorage.getItem("userInfo").then((values) => {
      setUserInfo(JSON.parse(values));
    });
  }, [token]);
  console.log(isAuthenticated);

  const register = (name, email, password, confirmPassword) => {
    setIsLoading(true);
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
    setIsLoading(true);
    let body = {
      username: username.toLowerCase(),
      password: password,
    };
    AxiosInstance.post("auth/login/", body)
      .then((res) => {
        setToken(res.data.key);

        AsyncStorage.setItem("token", res.data.key);

        AxiosInstance.get("profile/", {
          headers: { Authorization: `Token ${res.data.key}` },
        })
          .then((res) => {
            setUserInfo(res.data);
            AsyncStorage.setItem("userInfo", JSON.stringify(res.data));
          })
          .catch((e) => {
            console.log(e);
          });
        setIsAuthenticated(true);
        setIsLoading(false);
      })
      .then((json) => {
        console.log("Logged In");
      })
      .catch((error) => {
        setIsLoading(false);
        alert("Invalid Username and Password");
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
    AxiosInstance.put("profile/", Data, {
      headers: { Authorization: `Token ${token}` },
    })
      .then((res) => {
        alert(`Profile Submitted`);
        AsyncStorage.setItem("userInfo", JSON.stringify(res.data));
        setUserInfo(res.data);
        console.log("fromProfile");
      })
      .catch((e) => {
        let error = Object.values(e.response.data)[0][0];
        alert(`Register Error ${error}`);
      });
  };
  const bmi = (bmi) => {
    AxiosInstance.put(
      "profile/",
      { bmi },
      {
        headers: { Authorization: `Token ${token}` },
      }
    )
      .then((res) => {
        console.log(res.data);
        setUserInfo(res.data);

        AsyncStorage.setItem("userInfo", JSON.stringify(res.data));
      })
      .catch((e) => {
        let error = Object.values(e.response.data)[0][0];
        console.log(`BMI Error ${error}`);
      });
  };
  const calories = (calories) => {
    AxiosInstance.put(
      "profile/",
      { calories: calories },
      {
        headers: { Authorization: `Token ${token}` },
      }
    )
      .then((res) => {
        console.log(res.data);
        setUserInfo(res.data);

        AsyncStorage.setItem("userInfo", JSON.stringify(res.data));
      })
      .catch((e) => {
        let error = Object.values(e.response.data)[0][0];
        console.log(`Calories Error ${error}`);
      });
  };
  const logout = () => {
    setIsLoading(true);
    AxiosInstance.post("auth/logout/", {})
      .then((res) => {})
      .catch((e) => {
        alert(`Logout Error ${e}`);
      })
      .finally(() => {});
    AsyncStorage.removeItem("token");
    AsyncStorage.removeItem("userInfo");
    setToken(null);
    setIsLoading(false);
    setIsAuthenticated(false);
  };

  const globalContext = {
    isLoading,
    userInfo,
    token,
    food,
    bmi,
    calories,
    profile,
    register,
    login,
    logout,
    isAuthenticated,
  };
  return (
    <AuthContext.Provider value={globalContext}>
      {children}
    </AuthContext.Provider>
  );
};
