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
import exercise from "./Exercise";

const ExerciseScreen = ({ navigation }) => {
  // const description = () => {
  //   oneExercise();
  // };

  const oneExercise = ({ item }) => (
    <View style={styles.item}>
      <TouchableOpacity
        onPress={() => {
          // description();
        }}
      >
        <Image source={item.image} style={styles.img} />
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
    return <Text style={styles.heading}>Weight Loss</Text>;
  };
  const itemSeperator = () => {
    return <View style={styles.separator} />;
  };

  const oneExercise1 = ({ item }) => (
    <View style={styles.item}>
      <TouchableOpacity
        onPress={() => {
          // description();
        }}
      >
        <Image source={item.image} style={styles.img} />
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
  const headerComponent1 = () => {
    return <Text style={styles.heading}>Weight Gain</Text>;
  };
  const itemSeperator1 = () => {
    return <View style={styles.separator} />;
  };
  return (
    <SafeAreaView>
      <StatusBar backgroundColor="#009387" barStyle="light-content" />
      <ScrollView>
        <View style={styles.listHeader}>
          <Text style={styles.listHeadLine}>Exercise</Text>
        </View>
        <FlatList
          ListHeaderComponentStyle={styles.heading}
          ListHeaderComponent={headerComponent}
          data={exercise}
          renderItem={oneExercise}
          ItemSeparatorComponent={itemSeperator}
          ListEmptyComponent={<Text>This is an empty list.</Text>}
        />
        <FlatList
          ListHeaderComponentStyle={styles.heading}
          ListHeaderComponent={headerComponent1}
          data={exercise}
          renderItem={oneExercise1}
          ItemSeparatorComponent={itemSeperator1}
          ListEmptyComponent={<Text>This is an empty list.</Text>}
        />
      </ScrollView>
    </SafeAreaView>
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
});
