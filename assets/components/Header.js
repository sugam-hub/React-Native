import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import AxiosInstance from "../../AxiosInstance";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthContext } from "../../components/context";

import Badge from "../components/Badge";
import { ScrollView } from "react-native-gesture-handler";

const Headers = () => {
  // const [userInfo, setUserInfo] = React.useState({});
  const { token, userInfo } = React.useContext(AuthContext);

  return (
    <SafeAreaView>
      <View style={styles.icons}>
        <View>
          <Text style={styles.header}>
            Hello, {userInfo && userInfo.firstname}
          </Text>
          <Text style={styles.header}>
            Your BMI: {userInfo && userInfo.bmi}
          </Text>
          <Text style={styles.header}>
            Calories to intake: {userInfo && userInfo.calories}
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};
// );

const styles = StyleSheet.create({
  icons: {
    paddingVertical: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 15,
    borderWidth: 2,
    borderRadius: 10,
    padding: 5,
    margin: 10,
    marginTop: 30,
  },
  rightBtns: {
    flexDirection: "row",
  },
  headerText: {
    fontSize: 35,
    fontWeight: "bold",
    paddingHorizontal: 15,
  },
  pinkText: {
    color: "#FC427B",
  },
  badges: {
    flexDirection: "row",
    marginVertical: 20,
    paddingHorizontal: 15,
  },
  header: {
    fontSize: 20,
    fontWeight: "600",
  },
});

export default Headers;
