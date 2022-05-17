import React, { useContext } from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SplashScreen from "./SplashScreen";
import SignInScreen from "./SignInScreen";
import SignUpScreen from "./SignUpScreen";
import MainContainer from "./MainContainer";

import { AuthContext } from "../components/context";

const Stack = createNativeStackNavigator();

const Navigation = ({ navigation }) => {
  const { token } = React.useContext(AuthContext);
  console.log(token);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {token ? (
          <>
            <Stack.Screen
              name="Splash"
              component={SplashScreen}
              navigation={navigation}
            />
            <Stack.Screen
              name="SignIn"
              component={SignInScreen}
              navigation={navigation}
            />
            <Stack.Screen
              name="SignUp"
              component={SignUpScreen}
              navigation={navigation}
            />
          </>
        ) : (
          <Stack.Screen
            name="DataView"
            component={MainContainer}
            navigation={navigation}
            options={{ headerShown: false }}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
