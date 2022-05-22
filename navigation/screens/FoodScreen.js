import { style } from "@mui/system";
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
  Picker,
} from "react-native";
// import DropDownPicker from "react-native-dropdown-picker";

import AxiosInstance from "../../AxiosInstance";

// import foods from "./Foods";

const FoodScreen = ({ navigation }) => {
  const [foods, setFoods] = React.useState([]);
  const [allfoods, setAllFoods] = React.useState([]);
  const [weight, setweight] = React.useState("");

  // setWeight = weight;

  React.useEffect(() => {
    AxiosInstance.get("food/list/")
      .then((res) => {
        setAllFoods(res.data);
        setFoods(res.data);
      })
      .catch((e) => {
        let error = Object.values(e.response.data)[0][0];
        alert(`Error Fetching Foods`);
      });
  }, []);
  const getRecommendedFoods = (bmiAffectionRate) => {
    let filteredFoods = allfoods.filter((food) => {
      return food.bmi_affection_rate == bmiAffectionRate;
    });
    console.log(filteredFoods);
    setFoods(filteredFoods);
  };
  console.log(foods);
  const oneFood = ({ item }) => (
    // {foods.map((item) => (
    <View style={styles.item}>
      <TouchableOpacity onPress={() => {}}>
        <Image source={item.photo} style={styles.img} />
      </TouchableOpacity>

      <View>
        <TouchableOpacity onPress={() => {}}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.name1}>{item.kcal}</Text>
        </TouchableOpacity>
      </View>
    </View>
    // });
  );
  const headerComponent = () => {
    return (
      <SafeAreaView>
        <View>
          <View style={styles.topNav}>
            <TouchableOpacity
              // style={styles.dropDownStyle}
              style={styles.commandButton}
              onPress={() => {
                // profile(firstName, lastName, phone, country, city);
                getRecommendedFoods(-1);
              }}
            >
              <Text>Lose Weight</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.commandButton}
              // style={}
              onPress={() => {
                // profile(firstName, lastName, phone, country, city);
                getRecommendedFoods(1);
              }}
            >
              <Text>Gain Weight</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.listHeadLine}>Foods</Text>
        </View>
      </SafeAreaView>

      // <View>
      //   <Picker>
      //     <Picker.Item
      //       label="Please Select for Losing or Gaining Weight"
      //       value="disabled"
      //       color="#aaa"
      //     />
      //     <Picker.Item label="Lose Weight" value="Lose Weight" />
      //     <Picker.Item label="Gain Weight" value="Gain Weight" />
      //   </Picker>
      // </View>
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
          ListHeaderComponentStyle={styles.listHeader}
          ListHeaderComponent={headerComponent}
          data={foods}
          // key={foods.id}
          keyExtractor={(item) => item.id}
          renderItem={oneFood}
          ItemSeparatorComponent={itemSeperator}
          ListEmptyComponent={<Text>This is an empty list.</Text>}
        />
      </SafeAreaView>
    </ScrollView>
  );
};

export default FoodScreen;

const styles = StyleSheet.create({
  listHeader: {
    height: 55,
    alignItems: "center",
    justifyContent: "center",
  },
  listHeadLine: {
    // paddingTop: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    color: "#333",
    fontSize: 22,
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
    fontWeight: "900",
    fontSize: 16,
    marginLeft: 13,
    fontWeight: "bold",
  },
  name1: {
    // flexDirection: "row",
    fontWeight: "600",
    fontSize: 16,
    marginLeft: 13,
    opacity: 0.5,
  },
  name2: {
    // flexDirection: "row",
    fontWeight: "600",
    fontSize: 16,
    marginLeft: 13,
  },
  topNav: {
    fontWeight: "900",
    flexDirection: "row",
    alignContent: "flex-start",
    paddingHorizontal: 100,
    paddingVertical: 6,
    borderRadius: 4,
    // backgroundColor: "rgba(0,0,0,0.2)",
    // alignSelf: "flex-start",
    marginHorizontal: "1%",
    marginBottom: 6,
    minWidth: "48%",
    textAlign: "center",
    margin: 12,
  },
  dropDownStyle: {
    backgroundColor: "rgba(0,0,0,0.2)",
    padding: 8,
    borderRadius: 6,
    minHeight: 42,
    justifyContent: "center",
  },
  label: {
    textAlign: "center",
    marginBottom: 10,
    fontSize: 24,
  },
  buttonLabel: {
    fontSize: 12,
    fontWeight: "500",
    color: "coral",
  },
  selected: {
    backgroundColor: "coral",
    borderWidth: 0,
  },
  selectedLabel: {
    color: "white",
  },
  button: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 4,
    backgroundColor: "oldlace",
    alignSelf: "flex-start",
    marginHorizontal: "1%",
    marginBottom: 6,
    minWidth: "48%",
    textAlign: "center",
  },
});
