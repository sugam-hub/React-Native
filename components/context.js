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
        AxiosInstance.get(
          "profile/",
          {},
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        )
          .then((res) => {
            setUserInfo(res.data);
            AsyncStorage.setItem("userProfile", JSON.stringify(res.data));
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
  // const fetchFoods = () => {
  //   AxiosInstance.get("food/list/")
  //     .then((res) => {
  //       setFood(res.data);
  //     })
  //     .catch((e) => {
  //       let error = Object.values(e.response.data)[0][0];
  //       alert(`Error Fetching Foods`);
  //     });
  //   return food;
  // };
  const logout = () => {
    setIsLoading(true);
    AxiosInstance.post(
      "auth/logout/",
      {},
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    )
      .then((res) => {
        AsyncStorage.removeItem("token");
        setToken(null);
        setIsLoading(false);
        setIsAuthenticated(false);
      })
      .catch((e) => {
        alert(`Logout Error ${e}`);
        AsyncStorage.removeItem("token");
        setToken(null);
        setIsLoading(false);
        setIsAuthenticated(false);
      })
      .finally(() => {});
  };

  const globalContext = {
    isLoading,
    userInfo,
    // getToken,
    token,
    // fetchFoods,
    food,
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
