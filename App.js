import { View, StyleSheet, ActivityIndicator } from "react-native";
// import * as React from "react";
// import { useState } from "react";
import React from "react";
import MainContainer from "./navigation/MainContainer";
import RootStackScreen from "./navigation/RootStackScreen";
import MainNavigation from "./navigation/MainNavigation";
// import BMIScreen from "./navigation/screens/BMIScreen";
// import { createDrawerNavigation } from "@react-navigation/drawer";
// import { AuthContext } from "./components/context";
// import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./navigation/screens/HomeScreen";

import Inputs from "./navigation/screens/BMIScreen";
import { AuthProvider } from "./components/context";
import { AuthContext } from "./components/context";
import AsyncStorage from "@react-native-async-storage/async-storage";

const App = () => {
  // const { token } = React.useContext(AuthContext);
  // console.log(context);
  // let token = context.token;
  // let token = AsyncStorage.getItem("token");
  // console.log(token);
  return (
    <AuthProvider>
      <MainNavigation />
      {/* {token ? (
        <RootStackScreen />
      ) : (
        <>
          <MainContainer />
        </>
      )} */}
    </AuthProvider>
    // <Inputs />
    // <MainContainer />
    // <RootStackScreen />
  );
};

export default App;
