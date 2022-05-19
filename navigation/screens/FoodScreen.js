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

import AxiosInstance from "../../AxiosInstance";

// import foods from "./Foods";

// import { AuthContext } from "../../components/context";

const FoodScreen = ({ navigation }) => {
  // const { fetchFoods } = React.useContext(AuthContext);
  const [foods, setFoods] = React.useState([]);
  React.useEffect(() => {
    AxiosInstance.get("food/list/")
      .then((res) => {
        setFoods(res.data);
      })
      .catch((e) => {
        let error = Object.values(e.response.data)[0][0];
        alert(`Error Fetching Foods`);
      });
    // foods = foods;
  }, []);
  console.log(foods);
  const oneFood = ({ item }) => (
    <View style={styles.item}>
      <TouchableOpacity onPress={() => {}}>
        <Image source={item.photo} style={styles.img} />
      </TouchableOpacity>
      <View>
        <TouchableOpacity onPress={() => {}}>
          <Text style={styles.name}>{item.name}</Text>
          {/* <Text style={styles.name1}>{item.time}</Text> */}
          <Text style={styles.name1}>{item.kcal}</Text>
          {/* <Text style={styles.name2}>{item.foodDescription}</Text> */}
        </TouchableOpacity>
      </View>
    </View>
  );
  const headerComponent = () => {
    return <Text style={styles.listHeadLine}>Foods</Text>;
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
});
