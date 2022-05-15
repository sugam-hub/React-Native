import { View, StyleSheet, ActivityIndicator } from "react-native";
// import * as React from "react";
// import { useState } from "react";
import React, { useEffect, useMemo } from "react";
import MainContainer from "./navigation/MainContainer";
import RootStackScreen from "./navigation/RootStackScreen";
// import BMIScreen from "./navigation/screens/BMIScreen";
// import { createDrawerNavigation } from "@react-navigation/drawer";
// import { AuthContext } from "./components/context";
// import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./navigation/screens/HomeScreen";

import Inputs from "./navigation/screens/BMIScreen";
import { AuthProvider } from "./components/context";

const App = () => {
  return (
    <AuthProvider>
      <RootStackScreen />
    </AuthProvider>
    // <MainContainer />
    // <Inputs />
  );
};

export default App;
