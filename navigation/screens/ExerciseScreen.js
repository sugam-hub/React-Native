import * as React from "react";
import {
  View,
  SafeAreaView,
  Text,
  StyleSheet,
  FlatList,
  StatusBar,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
// import exercise from "./Exercise";
import AxiosInstance from "../../AxiosInstance";

const ExerciseScreen = ({ navigation }) => {
  const [exercises, setExercises] = React.useState([]);
  const [allExercises, setAllExercises] = React.useState([]);

  React.useEffect(() => {
    AxiosInstance.get("exercise/list/")
      .then((res) => {
        setAllExercises(res.data);
        setExercises(res.data);
      })
      .catch((e) => {
        let error = Object.values(e.response.data)[0][0];
        alert("Error Fetching Exercises");
      });
  }, []);
  const getRecommendedExercises = (bmiAffectionRate) => {
    let filteredExercises = allExercises.filter((exercise) => {
      return exercise.bmi_affection_rate == bmiAffectionRate;
    });
    console.log(filteredExercises);
    setExercises(filteredExercises);
  };
  const oneExercise = ({ item }) => (
    <View style={styles.item}>
      <TouchableOpacity onPress={() => {}}>
        <Image source={{ uri: item.photo }} style={styles.img} />
      </TouchableOpacity>

      <View>
        <TouchableOpacity onPress={() => {}}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.name1}>{item.time}</Text>
          <Text style={styles.name1}>{item.kcal}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
  const headerComponent = () => {
    // return <Text style={styles.heading}>Weight Loss</Text>;
    return (
      <SafeAreaView>
        <View>
          <View style={styles.topNav}>
            <View style={styles.btn}>
              <TouchableOpacity
                onPress={() => {
                  getRecommendedExercises(-1);
                }}
              >
                <Text style={styles.btnText}>Lose Weight</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.btn}>
              <TouchableOpacity
                onPress={() => {
                  getRecommendedExercises(1);
                }}
              >
                <Text style={styles.btnText}>Gain Weight</Text>
              </TouchableOpacity>
            </View>
          </View>
          <Text style={styles.listHeadLine}>Exercises</Text>
        </View>
      </SafeAreaView>
    );
  };

  const itemSeperator = () => {
    return <View style={styles.separator} />;
  };
  return (
    <ScrollView>
      <SafeAreaView>
        <StatusBar backgroundColor="#009387" barStyle="light-content" />
        <FlatList
          ListHeaderComponentStyle={styles.heading}
          ListHeaderComponent={headerComponent}
          data={exercises}
          keyExtractor={(item) => item.id}
          renderItem={oneExercise}
          ItemSeparatorComponent={itemSeperator}
          ListEmptyComponent={<Text>This is an empty list.</Text>}
        />
      </SafeAreaView>
    </ScrollView>
  );
};

export default ExerciseScreen;

const styles = StyleSheet.create({
  heading: {
    color: "#333",
    fontSize: 18,
    fontWeight: "bold",
  },
  listHeader: {
    height: 55,
    alignItems: "center",
    justifyContent: "center",
  },
  listHeadLine: {
    // paddingTop: 30,
    color: "#333",
    fontSize: 24,
    fontWeight: "bold",
  },
  separator: {
    height: 1,
    width: "100%",
    backgroundColor: "#CCC",
  },
  item: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 13,
  },
  imgContainer: {
    flexDirection: "row",
    backgroundColor: "#D9D9D9",
    borderRadius: 100,
    height: 89,
    width: 89,
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    height: 80,
    width: 80,
    borderRadius: 15,
  },
  name: {
    // flexDirection: "row",
    fontWeight: "bold",
    fontSize: 16,
    marginLeft: 13,
  },
  name1: {
    // flexDirection: "row",
    fontWeight: "bold",
    fontSize: 16,
    marginLeft: 13,
    opacity: 0.5,
  },
  topNav: {
    display: "flex",
    flexDirection: "row",
  },
  btn: {
    padding: 10,
    margin: 2,
    border: "none",
    borderRadius: 7,
    backgroundColor: "#009387",
    flexGrow: 1,
    alignItems: "center",
  },
  btnText: {
    fontSize: 20,
    color: "white",
  },
});
