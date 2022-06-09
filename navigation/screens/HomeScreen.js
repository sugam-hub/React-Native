import * as React from "react";
import { View, Text, StyleSheet, ScrollView, SafeAreaView } from "react-native";

import Headers from "../../assets/components/Header";
import Challenges from "../../assets/components/Challenges";
import Workouts from "../../assets/components/Workouts";

const data = [
  {
    key: 1,
    name: "Water",
    time: "1",
    kcal: "0",
    quantity: "1ltrs",
    image: require("../../assets/images/water.jpg"),
  },
  {
    key: 2,
    name: "Rice",
    time: "1",
    kcal: "272",
    quantity: "80g",
    image: require("../../assets/images/rice.jpg"),
  },
  {
    key: 3,
    name: "Chicken Curry",
    time: "1",
    kcal: "110",
    quantity: "100g",
    image: require("../../assets/images/chickencurry.jpg"),
  },
  {
    key: 4,
    name: "Green Vegitables",
    time: "1",
    kcal: "23",
    quantity: "100g",
    image: require("../../assets/images/green.jpg"),
  },
];

const HomeScreen = () => {
  return (
    // <ScrollView>
    <SafeAreaView style={styles.screen}>
      <Headers />
      <Challenges data={data} />
      <Workouts />
    </SafeAreaView>
    // </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});

export default HomeScreen;
