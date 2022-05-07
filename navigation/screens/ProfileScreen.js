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

const ProfileScreen = ({ navigation }) => {
  // const [data, setData] = React.useState({
  //   firstName: "",
  //   lastName: "",
  //   phone: "",
  //   email: "",
  //   country: "",
  //   city: "",
  //   check_textInputChange: false,
  // });

  // const firstNameChange = (val) => {
  //   setData({
  //     ...data,
  //     firstName: val,
  //   });
  // };

  // const lastNameChange = (val) => {
  //   setData({
  //     ...data,
  //     lastName: val,
  //   });
  // };

  // const phoneChange = (val) => {
  //   setData({
  //     ...data,
  //     phone: val,
  //   });
  // };

  // const emailChange = (val) => {
  //   setData({
  //     ...data,
  //     email: val,
  //   });
  // };

  // const countryChange = (val) => {
  //   setData({
  //     ...data,
  //     country: val,
  //   });
  // };

  // const cityChange = (val) => {
  //   setData({
  //     ...data,
  //     city: val,
  //   });
  // };

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");

  handleFirstName = (text) => {
    setFirstName(text);
  };

  handleLastName = (text) => {
    setLastName(text);
  };

  handlEmail = (text) => {
    setEmail(text);
  };

  handlePhone = (text) => {
    setPhone(text);
  };

  handleCountry = (text) => {
    setCountry(text);
  };

  handleCity = (text) => {
    setCity(text);
  };
  const insertData = () => {
    var firstName = firstName;
    var lastName = lastName;
    var phone = phone;
    var email = email;
    var country = country;
    var city = city;
    if (
      firstName == 0 ||
      lastName == 0 ||
      phone == 0 ||
      email == 0 ||
      country == 0 ||
      city == 0
    ) {
      alert("Required field is missing");
    } else {
      var InsertAPIURL = "http://10.0.2.2:80/api/record.php";

      var headers = {
        Accept: "application.json",
        "Content-Type": "application/json",
      };

      var Data = {
        firstName: data.firstName,
        lastName: data.lastName,
        phone: data.phone,
        email: data.email,
        country: data.country,
        city: data.city,
      };
      fetch(InsertAPIURL, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(Data),
      })
        .then((response) => response.json())
        .then((response) => {
          // alert(response[0].Message);
        });
    }
  };

  console.log(data.firstName);
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
            Sugam Poudel
          </Text>
        </View>
        <View style={styles.action}>
          <FontAwesome name="user-o" size={20} />
          <TextInput
            placeholder="First Name"
            placeholderTextColor="#666666"
            autoCorrect={false}
            style={styles.textInput}
            onChangeText={handleFirstName}
          ></TextInput>
        </View>
        <View style={styles.action}>
          <FontAwesome name="user-o" size={20} />
          <TextInput
            placeholder="Last Name"
            placeholderTextColor="#666666"
            autoCorrect={false}
            style={styles.textInput}
            onChangeText={handleLastName}
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
            onChangeText={handlePhone}
          ></TextInput>
        </View>
        <View style={styles.action}>
          <FontAwesome name="envelope-o" size={20} />
          <TextInput
            placeholder="Email"
            placeholderTextColor="#666666"
            keyboardType="email-address"
            autoCorrect={false}
            style={styles.textInput}
            // onChangeText={(val) => emailChange(val)}
            onChangeText={handleEmail}
          ></TextInput>
        </View>
        <View style={styles.action}>
          <FontAwesome name="globe" size={20} />
          <TextInput
            placeholder="Country"
            placeholderTextColor="#666666"
            autoCorrect={false}
            style={styles.textInput}
            // onChangeText={(val) => countryChange(val)}
            onChangeText={handleCountry}
          ></TextInput>
        </View>
        <View style={styles.action}>
          <Icon name="map-marker-outline" size={20} />
          <TextInput
            placeholder="City"
            placeholderTextColor="#666666"
            autoCorrect={false}
            style={styles.textInput}
            // onChangeText={(val) => cityChange(val)}
            onChangeText={handleCity}
          ></TextInput>
        </View>
        <TouchableOpacity style={styles.commandButton} onPress={insertData()}>
          <Text style={styles.panelButtonTitle}>Submit</Text>
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