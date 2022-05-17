import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

// Screens
import HomeScreen from "./screens/HomeScreen";
import FoodScreen from "./screens/FoodScreen";
import CalculatorScreen from "./screens/CalculatorScreen";
import ProfileScreen from "./screens/ProfileScreen";
import ExerciseScreen from "./screens/ExerciseScreen";
import Inputs from "./screens/BMIScreen";

//Screen names
const homeName = "Home";
const foodName = "Foods";
const exerciseName = "Exercise";
const bmiName = "BMI";
const calculatorName = "Calculator";
const profileName = "Profile";

const Tab = createMaterialBottomTabNavigator();

const MainContainer = ({ navigation }) => {
  return (
    <>
      <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === homeName) {
              iconName = focused ? "home" : "home-outline";
            } else if (rn === foodName) {
              iconName = focused ? "pizza" : "pizza-outline";
            } else if (rn === exerciseName) {
              iconName = focused ? "barbell" : "barbell-outline";
            } else if (rn === bmiName) {
              iconName = focused ? "man" : "man-outline";
            } else if (rn === calculatorName) {
              iconName = focused ? "calculator" : "calculator-outline";
            } else if (rn === profileName) {
              iconName = focused ? "person" : "person-outline";
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={20} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: "tomato",
          inactiveTintColor: "grey",
          labelStyle: { paddingBottom: 10, fontSize: 10 },
          style: { padding: 10, height: 70 },
        }}
      >
        <Tab.Screen
          name={homeName}
          // navigation={navigation}
          component={HomeScreen}
        />
        <Tab.Screen name={foodName} component={FoodScreen} />
        <Tab.Screen name={exerciseName} component={ExerciseScreen} />
        <Tab.Screen name={bmiName} component={Inputs} />
        <Tab.Screen name={calculatorName} component={CalculatorScreen} />
        <Tab.Screen name={profileName} component={ProfileScreen} />
      </Tab.Navigator>
    </>
  );
};

export default MainContainer;
