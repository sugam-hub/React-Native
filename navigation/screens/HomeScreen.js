import * as React from "react";
import { View, StyleSheet } from "react-native";

import Headers from "../../assets/components/Header";
import Challenges from "../../assets/components/Challenges";
import Workouts from "../../assets/components/Workouts";

const data = [
  {
    key: 1,
    name: "Water",
    time: "10",
    kcal: "0",
    quantity: "3 ltrs",
    image: require("../../assets/images/water.jpg"),
  },
  {
    key: 2,
    name: "Apple",
    time: "10",
    kcal: "95",
    quantity: "3",
    image: require("../../assets/images/apple.jpg"),
  },
  {
    key: 3,
    name: "Banana",
    time: "10",
    kcal: "105",
    quantity: "3",
    image: require("../../assets/images/banana.jpg"),
  },
];

const HomeScreen = () => {
  return (
    <View style={styles.screen}>
      <Headers />
      <Challenges data={data} />
      <Workouts />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});

export default HomeScreen;
