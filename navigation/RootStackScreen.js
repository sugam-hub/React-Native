import React from "react";
import { NavigationContainer, Navigator } from "@react-navigation/native";
import { createStackNavigator, Stack } from "@react-navigation/stack";

import SplashScreen from "./SplashScreen";
import SignInScreen from "./SignInScreen";
import SignUpScreen from "./SignUpScreen";
// import * as material from "@mui/material";

const RootStack = createStackNavigator();

const RootStackScreen = ({ navigation }) => (
  <NavigationContainer>
    <RootStack.Navigator initialRouteName="splash">
      <RootStack.Screen
        name="Splash"
        component={SplashScreen}
        navigation={navigation}
      />
      <RootStack.Screen
        name="SignIn"
        component={SignInScreen}
        navigation={navigation}
      />
      <RootStack.Screen
        name="SignUp"
        component={SignUpScreen}
        navigation={navigation}
      />
    </RootStack.Navigator>
  </NavigationContainer>
);

export default RootStackScreen;
