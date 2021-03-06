import * as React from "react";
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  TextInput,
  StatusBar,
} from "react-native";
import * as Animateable from "react-native-animatable";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";
import { AuthContext } from "../components/context";
import Spinner from "react-native-loading-spinner-overlay/lib";

const SignInScreen = ({ navigation }) => {
  const [data, setData] = React.useState({
    check_textInputChange: false,
    secureTextEntry: true,
  });

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };

  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const { isLoading, login } = React.useContext(AuthContext);

  return (
    <View style={styles.container}>
      <Spinner visible={isLoading} />
      <StatusBar backgroundColor="#009387" barStyle="light-content" />
      <View style={styles.header}>
        <Text style={styles.text_header}>Welcome!</Text>
      </View>
      <Animateable.View animation="fadeInUpBig" style={styles.footer}>
        <Text style={styles.text_footer}>Username</Text>
        <View style={styles.action}>
          <FontAwesome name="user-o" color="05375a" size={20} />
          <TextInput
            placeholder="Your Username"
            style={styles.textInput}
            // value={username}
            // setValue={setUsername}
            autoCapitalize="none"
            value={username}
            onChangeText={(val) => setUsername(val)}
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
            placeholder="Your Password"
            style={styles.textInput}
            autoCapitalize="none"
            value={password}
            onChangeText={(val) => setPassword(val)}
          />
          <TouchableOpacity onPress={updateSecureTextEntry}>
            {data.secureTextEntry ? (
              <Feather name="eye-off" color="grey" size={20} />
            ) : (
              <Feather name="eye" color="grey" size={20} />
            )}
          </TouchableOpacity>
        </View>
        <View style={styles.button}>
          <TouchableOpacity
            style={styles.commandButton}
            onPress={() => {
              login(username, password);
              // navigation.navigate("profile");
            }}
          >
            <Text
              style={[
                styles.textSign,
                { fontSize: 18 },
                { fontWeight: "bold" },
              ]}
            >
              Sign In
            </Text>
          </TouchableOpacity>
        </View>

        {/* Sign up */}
        <View style={styles.button}>
          <TouchableOpacity
            style={styles.commandButton1}
            onPress={() => navigation.navigate("SignUp")}
          >
            <Text
              style={[
                styles.textSign,
                { fontSize: 18 },
                { fontWeight: "bold" },
                { color: "#009387" },
              ]}
            >
              Register
            </Text>
          </TouchableOpacity>
        </View>
      </Animateable.View>
    </View>
  );
};

export default SignInScreen;

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
    marginTop: 10,
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
  },
  forgotPassword: {
    fontSize: 15,
    paddingTop: 10,
    opacity: 0.5,
    color: "#4775d1",
  },
  commandButtonFacebook: {
    backgroundColor: "#E7EAF4",
    width: 300,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  commandButtonGoogle: {
    backgroundColor: "#FAE9EA",
    width: 300,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
});
