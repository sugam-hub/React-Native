import React from "react";
import { View, Text, StyleSheet } from "react-native";
import AxiosInstance from "../../AxiosInstance";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthContext } from "../../components/context";

import Badge from "../components/Badge";

// const Headers = (_) => (
const Headers = () => {
  // const [userInfo, setUserInfo] = React.useState({});
  const { token, userInfo } = React.useContext(AuthContext);

  // React.useEffect(() => {
  //   // setIsAuthenticated(token !== null ? true : false);
  //   AsyncStorage.getItem("userInfo").then((values) => {
  //     setUserInfo(JSON.parse(values));
  //     // setUserInfo(values.firstname);
  //     console.log(userInfo);

  //     AxiosInstance.get(
  //       "profile/",
  //       {},
  //       {
  //         headers: { Authorization: `Bearer ${token}` },
  //       }
  //     )
  //       .then((res) => {
  //         setUserInfo(res.data);
  //         AsyncStorage.setItem("userInfo", JSON.stringify(res.data));
  //         // setUserInfo(userInfo);
  //       })
  //       .catch((e) => {
  //         console.log(e);
  //       });
  //   });
  // }, [token]);
  // <React.Fragment>
  return (
    <View style={styles.icons}>
      <View>
        {/* <Text style={styles.headerText}>Start Your</Text>
      <Text style={styles.headerText}>
      <Text style={styles.pinkText}>Fitness</Text> Journey
    </Text> */}
        <Text>Hello, {userInfo && userInfo.firstname}</Text>
        <Text>Your BMI: {userInfo && userInfo.bmi}</Text>
        <Text>Calories to intake: {userInfo && userInfo.calories}</Text>
      </View>
      {/* </React.Fragment> */}
    </View>
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
});

export default Headers;
