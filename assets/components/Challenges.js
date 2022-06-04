import * as React from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";

import ListItem from "../components/ListItem";

const Challenges = ({ data }) => (
  <View>
    <Text style={styles.listTitle}>Recommended Meals</Text>
    <FlatList
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      data={data}
      keyExtractor={(item, index) => item.id}
      renderItem={(itemData) => {
        console.log(itemData.item);
        return (
          <ListItem
            name={itemData.item.name}
            time={itemData.item.time}
            kcal={itemData.item.kcal}
            level={itemData.item.quantity}
            image={itemData.item.image}
          />
        );
      }}
    />
  </View>
);

const styles = StyleSheet.create({
  listTitle: {
    paddingHorizontal: 15,
    fontWeight: "bold",
    fontSize: 20,
    paddingVertical: 20,
  },
});

export default Challenges;
