import * as React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  TextInput,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";
import { AuthContext } from "../../components/context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import AxiosInstance from "../../AxiosInstance";

const ProfileScreen = ({ navigation }) => {
  const { profile, logout, token, userInfo } = React.useContext(AuthContext);
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [country, setCountry] = React.useState("");
  const [city, setCity] = React.useState("");

  const [userForm, setUserForm] = React.useState({});

  React.useEffect(() => {
    // setIsAuthenticated(token !== null ? true : false);
    AsyncStorage.getItem("userInfo").then((values) => {
      let data = JSON.parse(values);
      setUserForm(data);
      setFirstName(data.firstname);
      setLastName(data.lastname);
      setPhone(data.phone);
      setCountry(data.country);
      setCity(data.city);
      console.log(userForm);

      // AxiosInstance.get(
      //   "profile/",
      //   {},
      //   {
      //     headers: { Authorization: `Bearer ${token}` },
      //   }
      // )
      //   .then((res) => {
      //     setUserForm(res.data);
      //     AsyncStorage.setItem("userForm", JSON.stringify(res.data));
      //     // setUserForm(userForm);
      //   })
      //   .catch((e) => {
      //     console.log(e);
      //   });
    });
  }, [token]);

  // console.log(userForm);
  return (
    <View style={styles.container}>
      <View style={{ margin: 20 }}>
        <View style={{ alignItems: "center" }}>
          <TouchableOpacity
            onPress={() => {
              bs.current.snapTo(0);
            }}
          >
            <View
              style={{
                height: 100,
                width: 100,
                borderRadius: 15,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <ImageBackground
                source={require("../../assets/images/profile.png")}
                style={{ height: 100, width: 100 }}
                imageStyle={{ borderRadius: 15 }}
              >
                {/* <View>
                  <Icon
                    name="camera"
                    size={35}
                    color="#000"
                    style={{
                      opacity: 0.7,
                      alignItems: "center",
                      justifyContent: "center",
                      border: "none",
                      borderRadius: 10,
                    }}
                  />
                </View> */}
              </ImageBackground>
            </View>
          </TouchableOpacity>
          <Text
            style={{
              marginTop: 10,
              marginBottom: 10,
              fontSize: 18,
              fontWeight: "bold",
            }}
          >
            {userInfo.firstname} {userInfo.lastname}
          </Text>
        </View>
        <View style={styles.action}>
          <FontAwesome name="user-o" size={20} />
          <TextInput
            placeholder="First Name"
            placeholderTextColor="#666666"
            autoCorrect={false}
            style={styles.textInput}
            value={firstName}
            onChangeText={(val) => setFirstName(val)}
          ></TextInput>
        </View>
        <View style={styles.action}>
          <FontAwesome name="user-o" size={20} />
          <TextInput
            placeholder="Last Name"
            placeholderTextColor="#666666"
            autoCorrect={false}
            style={styles.textInput}
            value={lastName}
            onChangeText={(val) => setLastName(val)}
          ></TextInput>
        </View>
        <View style={styles.action}>
          <Feather name="phone" size={20} />
          <TextInput
            placeholder="Phone"
            keyboardType="number-pad"
            placeholderTextColor="#666666"
            autoCorrect={false}
            style={styles.textInput}
            // onChangeText={handlePhone}
            value={phone}
            onChangeText={(val) => setPhone(val)}
          ></TextInput>
        </View>
        <View style={styles.action}>
          <FontAwesome name="globe" size={20} />
          <TextInput
            placeholder="Country"
            placeholderTextColor="#666666"
            autoCorrect={false}
            style={styles.textInput}
            value={country}
            onChangeText={(val) => setCountry(val)}
            // onChangeText={handleCountry}
          ></TextInput>
        </View>
        <View style={styles.action}>
          <Icon name="map-marker-outline" size={20} />
          <TextInput
            placeholder="City"
            placeholderTextColor="#666666"
            autoCorrect={false}
            style={styles.textInput}
            value={city}
            onChangeText={(val) => setCity(val)}
            // onChangeText={handleCity}
          ></TextInput>
        </View>
        <TouchableOpacity
          style={styles.commandButton}
          onPress={async () => {
            await profile(firstName, lastName, phone, country, city);
          }}
        >
          <Text style={styles.panelButtonTitle}>Submit</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.commandButton}
          onPress={() => {
            logout();
          }}
        >
          <Text style={styles.panelButtonTitle}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
  },
  commandButton: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: "#009387",
    alignItems: "center",
    marginTop: 10,
  },
  panel: {
    padding: 20,
    backgroundColor: "#FFFFFF",
    paddingTop: 20,
    // borderTopLeftRadius: 20,
    // borderTopRightRadius: 20,
    // shadowColor: '#000000',
    // shadowOffset: {width: 0, height: 0},
    // shadowRadius: 5,
    // shadowOpacity: 0.4,
  },
  header: {
    backgroundColor: "#FFFFFF",
    shadowColor: "#333333",
    shadowOffset: { width: -1, height: -3 },
    shadowRadius: 2,
    shadowOpacity: 0.4,
    // elevation: 5,
    paddingTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  panelHeader: {
    alignItems: "center",
  },
  panelHandle: {
    width: 40,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#00000040",
    marginBottom: 10,
  },
  panelTitle: {
    fontSize: 27,
    height: 35,
  },
  panelSubtitle: {
    fontSize: 14,
    color: "gray",
    height: 30,
    marginBottom: 10,
  },
  panelButton: {
    padding: 13,
    borderRadius: 10,
    backgroundColor: "#FF6347",
    alignItems: "center",
    marginVertical: 7,
  },
  panelButtonTitle: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  action: {
    flexDirection: "row",
    marginTop: 10,
    marginBottom: 15,
    borderBottomWidth: 2,
    borderBottomColor: "#c4c4c4",
    paddingBottom: 5,
  },
  actionError: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#FF0000",
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    // marginTop: Platform.OS === "ios" ? 0 : -12,
    paddingLeft: 10,
    color: "#05375a",
  },
});

export default ProfileScreen;
