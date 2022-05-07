import React from "react";
import { Text, StyleSheet, View, FlatList } from "react-native";
import WorkOutItem from "../components/WorkOutItem";

const data = [
  {
    key: 1,
    name: "Walking",
    kcal: "167kcal",
    time: "30 min",
    image: require("../../assets/images/walking.gif"),
  },
  {
    key: 2,
    name: "Jogging or Running",
    kcal: "372kcal",
    time: "30 min",
    image: require("../../assets/images/jogging.gif"),
  },
  {
    key: 3,
    name: "Cycling",
    kcal: "298kcal",
    time: "30 min",
    image: require("../../assets/images/cycling.gif"),
  },
  {
    key: 4,
    name: "Weight training",
    kcal: "112kcal",
    time: "30 min",
    image: require("../../assets/images/weightTraining.gif"),
  },
];

const Workouts = () => {
  return (
    <View style={styles.workouts}>
      <View style={styles.workoutHeader}>
        <Text style={styles.recentWorkout}>Exercises</Text>
        <View style={styles.workoutsRight}></View>
      </View>
      <React.Fragment>
        <FlatList
          data={data}
          keyExtractor={(item, index) => item.id}
          showsVerticalScrollIndicator={false}
          renderItem={(itemData) => {
            return (
              <WorkOutItem
                name={itemData.item.name}
                kcal={itemData.item.kcal}
                time={itemData.item.time}
                image={itemData.item.image}
              />
            );
          }}
        />
      </React.Fragment>
    </View>
  );
};

const styles = StyleSheet.create({
  workouts: {
    paddingHorizontal: 15,
    marginVertical: 20,
    flex: 1,
  },
  workoutHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  recentWorkout: {
    fontWeight: "bold",
    fontSize: 20,
  },
  workoutsRight: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default Workouts;
