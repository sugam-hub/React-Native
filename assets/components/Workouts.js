import React from "react";
import { Text, StyleSheet, View, FlatList, SafeAreaView } from "react-native";
import WorkOutItem from "../components/WorkOutItem";
import AxiosInstance from "../../AxiosInstance";
import { AuthContext } from "../../components/context";

// const data = [
//   {
//     id: 1,
//     name: "Jogging",
//     kcal: "372 kcal",
//     time: "30 min",
//     image: require("../images/jogging.gif"),
//   },
//   {
//     id: 2,
//     name: "Cycling",
//     kcal: "298 kcal",
//     time: "30 min",
//     image: require("../images/cycling.gif"),
//   },
//   {
//     id: 3,
//     name: "Jumping Rope",
//     kcal: "200-300 kcal",
//     time: "30 min",
//     image: require("../images/jumpingrope.gif"),
//   },
//   {
//     id: 4,
//     name: "Yoga",
//     kcal: "149 kcal",
//     time: "30 min",
//     image: require("../images/yoga.gif"),
//   },
// ];
const Workouts = () => {
  const [exercises, setExercises] = React.useState([]);
  const { userInfo } = React.useContext(AuthContext);

  const getBmi = () => {
    let user = userInfo;
    let bmi = user.bmi;
    return parseFloat(bmi);
  };

  React.useEffect(() => {
    if (userInfo) {
      AxiosInstance.get(`exercise/list/?bmi_affection_rate=${getBmi()}`)
        .then((res) => {
          console.log(res.data);
          setExercises(res.data);
        })
        .catch((e) => {
          let error = Object.values(e.response.data)[0][0];
          alert("Error Fetching Exercises");
        });
    }
  }, [userInfo]);

  return (
    <SafeAreaView style={styles.workouts}>
      <View style={styles.workoutHeader}>
        <Text style={styles.recentWorkout}>Recommended Exercises</Text>
        <View style={styles.workoutsRight}></View>
      </View>
      <React.Fragment>
        {exercises && (
          <FlatList
            data={exercises}
            keyExtractor={(item, index) => item.id}
            showsVerticalScrollIndicator={false}
            renderItem={(itemData) => {
              return (
                <WorkOutItem
                  name={itemData.item.name}
                  kcal={itemData.item.kcal}
                  time={itemData.item.time}
                  image={itemData.item.photo}
                />
              );
            }}
          />
        )}
      </React.Fragment>
    </SafeAreaView>
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
