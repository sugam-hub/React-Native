import React from "react";
import { Text, StyleSheet, View, FlatList } from "react-native";
import WorkOutItem from "../components/WorkOutItem";
import AxiosInstance from "../../AxiosInstance";
import { AuthContext } from "../../components/context";

// const data = [
//   {
//     key: 1,
//     name: "Walking",
//     kcal: "167kcal",
//     time: "30 min",
//     image: require("../../assets/images/walking.gif"),
//   },
//   {
//     key: 2,
//     name: "Jogging or Running",
//     kcal: "372kcal",
//     time: "30 min",
//     image: require("../../assets/images/jogging.gif"),
//   },
//   {
//     key: 3,
//     name: "Cycling",
//     kcal: "298kcal",
//     time: "30 min",
//     image: require("../../assets/images/cycling.gif"),
//   },
//   {
//     key: 4,
//     name: "Weight training",
//     kcal: "112kcal",
//     time: "30 min",
//     image: require("../../assets/images/weightTraining.gif"),
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

  // React.useEffect(() => {
  //   console.log(exercises);
  // }, []);
  // {
  //   userInfo && getRecommendedExercises(1);
  // }
  return (
    <View style={styles.workouts}>
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
