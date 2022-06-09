import React from "react";
import { View, Text, Image, StyleSheet, SafeAreaView } from "react-native";

const WorkOutItem = (props) => (
  <SafeAreaView style={styles.item}>
    <View style={styles.imageContainer}>
      <Image
        style={{ width: "100%", height: "100%" }}
        source={{ uri: props.image }}
      />
    </View>
    <View style={styles.times}>
      <Text style={{ textAlign: "center", fontWeight: "bold" }}>
        {/* {props.kcal} */}
      </Text>
    </View>
    <View style={styles.details}>
      <Text style={styles.title}>{props.name}</Text>
      <Text style={styles.time}>{props.time}</Text>
      <Text style={styles.time}>{props.kcal}</Text>
    </View>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  item: {
    borderBottomColor: "#bbb",
    borderBottomWidth: 1,
    paddingVertical: 15,
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
  },
  imageContainer: {
    flex: 2,
    height: 80,
    borderRadius: 15,
    overflow: "hidden",
  },
  times: {
    flex: 1,
    margin: 10,
  },
  details: {
    flex: 5,
  },
  time: {
    color: "#777",
  },
  title: {
    fontWeight: "bold",
  },
});

export default WorkOutItem;
