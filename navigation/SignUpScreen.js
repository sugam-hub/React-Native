import React from "react";
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  Dimensions,
  TextInput,
  StatusBar,
} from "react-native";
import { createStackNavigator, Stack } from "@react-navigation/stack";
import { NavigationContainer, Navigator } from "@react-navigation/native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import * as Animateable from "react-native-animatable";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";
// import { auth } from "../firebase";
// import axios from "axios";

const SignUpScreen = ({ navigation }) => {
  const [data, setData] = React.useState({
    email: "",
    password: "",
    confirm_password: "",
    check_textInputChange: false,
    secureTextEntry: true,
    confirm_secureTextEntry: true,
  });

  const textInputChange = (val) => {
    if (val.length !== 0) {
      setData({
        ...data,
        email: val,
        check_textInputChange: true,
      });
    } else {
      setData({
        ...data,
        email: val,
        check_textInputChange: false,
      });
    }
  };

  const handlePasswordChange = (val) => {
    setData({
      ...data,
      password: val,
    });
  };

  // const handleConfirmPasswordChange = (val) => {
  //   setData({
  //     ...data,
  //     confirm_password: val,
  //   });
  // };
  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };

  // const updateConfirmSecureTextEntry = () => {
  //   setData({
  //     ...data,
  //     confirm_secureTextEntry: !data.confirm_secureTextEntry,
  //   });
  // };
  console.log(data.email);

  // const handleSignUp = () => {
  //   auth
  //     .createUserWithEmailAndPassword(email.data, password.data)
  //     .then((userCredentials) => {
  //       const user = userCredentials.user;
  //       console.log(user.email.data);
  //     })
  //     .catch((error) => alert(error.message));
  // };

  var InsertRecord = () => {
    var Email = data.email;
    var Password = data.password;

    if (Email.length == 0 || Password == 0) {
      alert("Required field is missing");
    } else {
      var InsertAPIURL = "http://10.0.2.2:80/api/insert.php/";
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#009387" barStyle="light-content" />
      <View style={styles.header}>
        <Text style={styles.text_header}>Register Now!</Text>
      </View>
      <Animateable.View animation="fadeInUpBig" style={styles.footer}>
        <Text style={styles.text_footer}>Email</Text>
        <View style={styles.action}>
          <FontAwesome name="user-o" color="05375a" size={20} />
          <TextInput
            placeholder="Email"
            style={styles.textInput}
            autoCapitalize="none"
            onChangeText={(val) => textInputChange(val)}
          />
          {data.check_textInputChange ? (
            <Animateable.View animation="bounceIn">
              <Feather name="check-circle" color="green" size={20} />
            </Animateable.View>
          ) : null}
        </View>
        <Text style={[styles.text_footer, { marginTop: 35 }]}>Password</Text>

        <View style={styles.action}>
          <FontAwesome name="lock" color="05375a" size={20} />
          <TextInput
            secureTextEntry={data.secureTextEntry ? true : false}
            placeholder="Password"
            style={styles.textInput}
            autoCapitalize="none"
            onChangeText={(val) => handlePasswordChange(val)}
          />
          <TouchableOpacity onPress={updateSecureTextEntry}>
            {data.secureTextEntry ? (
              <Feather name="eye-off" color="grey" size={20} />
            ) : (
              <Feather name="eye" color="grey" size={20} />
            )}
          </TouchableOpacity>
        </View>
        {/* <Text style={[styles.text_footer, { marginTop: 35 }]}>
          Confirm Password
        </Text>

        <View style={styles.action}>
          <FontAwesome name="lock" color="05375a" size={20} />
          <TextInput
            secureTextEntry={data.confirm_secureTextEntry ? true : false}
            placeholder="Confirm Password"
            style={styles.textInput}
            autoCapitalize="none"
            onChangeText={(val) => handleConfirmPasswordChange(val)}
          />
          <TouchableOpacity onPress={updateConfirmSecureTextEntry}>
            {data.confirm_secureTextEntry ? (
              <Feather name="eye-off" color="grey" size={20} />
            ) : (
              <Feather name="eye" color="grey" size={20} />
            )}
          </TouchableOpacity>
        </View> */}
        <View style={styles.button}>
          <TouchableOpacity style={styles.commandButton} onPress={InsertRecord}>
            <Text
              style={[
                styles.textSign,
                { fontSize: 18 },
                { fontWeight: "bold" },
              ]}
            >
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.button}>
          <TouchableOpacity
            style={styles.commandButton1}
            onPress={() => navigation.navigate("SignIn")}
          >
            <Text
              style={[
                styles.textSign,
                { fontSize: 18 },
                { fontWeight: "bold" },
                { color: "#009387" },
              ]}
            >
              Sign In
            </Text>
          </TouchableOpacity>
        </View>
      </Animateable.View>
    </View>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#009387",
  },
  header: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  footer: {
    flex: 3,
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  text_header: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 30,
  },
  text_footer: {
    color: "#05375a",
    fontSize: 18,
  },
  action: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#f2f2f2",
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
  errorMsg: {
    color: "#FF0000",
    fontSize: 14,
  },
  button: {
    alignItems: "center",
    marginTop: 50,
  },
  signIn: {
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  textSign: {
    fontSize: 18,
    fontWeight: "bold",
  },
  textSign: {
    color: "white",
    fontWeight: "bold",
    paddingBottom: 5,
    alignItems: "center",
    fontSize: 15,
  },
  commandButton: {
    padding: 10,
    width: 300,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    flexDirection: "row",
    backgroundColor: "#009387",
  },
  commandButton1: {
    padding: 10,
    width: 300,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    flexDirection: "row",
    backgroundColor: "#fff",
    borderColor: "#009387",
    borderWidth: 2,
    marginTop: -20,
  },
});
