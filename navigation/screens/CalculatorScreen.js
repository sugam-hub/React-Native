// import * as React from "react";
import React, { Component } from "react";
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { RadioButton } from "react-native-paper";

// const CalculatorScreen = ({ navigation }) => {
class CalculatorScreen extends Component {
  state = {
    age: "",
    // weight: "",
    gender: "",
    // cal: "",
    calResult: "",
  };
  handleAge = (text) => {
    this.setState({ age: text });
  };

  handleGender = (text) => {
    this.setState({ gender: text });
  };
  calculate = (age, gender) => {
    if (
      (gender === "male" ||
        gender === "Male" ||
        gender === "m" ||
        gender === "M") &&
      age >= 2 &&
      age <= 4
    ) {
      this.setState({ calResult: "1000-1600 Calories" });
    } else if (
      (gender === "male" ||
        gender === "Male" ||
        gender === "m" ||
        gender === "M") &&
      age >= 5 &&
      age <= 8
    ) {
      this.setState({ calResult: "1200-2000 Calories" });
    } else if (
      (gender === "male" ||
        gender === "Male" ||
        gender === "m" ||
        gender === "M") &&
      age >= 9 &&
      age <= 13
    ) {
      this.setState({ calResult: "1600-2600 Calories" });
    } else if (
      (gender === "male" ||
        gender === "Male" ||
        gender === "m" ||
        gender === "M") &&
      age >= 14 &&
      age <= 18
    ) {
      this.setState({ calResult: "2000-3200 Calories" });
    } else if (
      (gender === "male" ||
        gender === "Male" ||
        gender === "m" ||
        gender === "M") &&
      age >= 19 &&
      age <= 30
    ) {
      this.setState({ calResult: "2400-3000 Calories" });
    } else if (
      (gender === "male" ||
        gender === "Male" ||
        gender === "m" ||
        gender === "M") &&
      age >= 31 &&
      age <= 59
    ) {
      this.setState({ calResult: "2200-3000 Calories" });
    } else if (
      (gender === "male" ||
        gender === "Male" ||
        gender === "m" ||
        gender === "M") &&
      age >= 60
    ) {
      this.setState({ calResult: "2000-2600 Calories" });
    } else if (
      (gender === "female" ||
        gender === "Female" ||
        gender === "f" ||
        gender === "F") &&
      age >= 2 &&
      age <= 4
    ) {
      this.setState({ calResult: "1000-1400 Calories" });
    } else if (
      (gender === "female" ||
        gender === "Female" ||
        gender === "f" ||
        gender === "F") &&
      age >= 5 &&
      age <= 8
    ) {
      this.setState({ calResult: "1200-1800 Calories" });
    } else if (
      (gender === "female" ||
        gender === "Female" ||
        gender === "f" ||
        gender === "F") &&
      age >= 9 &&
      age <= 13
    ) {
      this.setState({ calResult: "1400-2200 Calories" });
    } else if (
      (gender === "female" ||
        gender === "Female" ||
        gender === "f" ||
        gender === "F") &&
      age >= 14 &&
      age <= 18
    ) {
      this.setState({ calResult: "1800-2400 Calories" });
    } else if (
      (gender === "female" ||
        gender === "Female" ||
        gender === "f" ||
        gender === "F") &&
      age >= 19 &&
      age <= 30
    ) {
    } else if (
      (gender === "female" ||
        gender === "Female" ||
        gender === "f" ||
        gender === "F") &&
      age >= 19 &&
      age <= 30
    ) {
      this.setState({ calResult: "2000-2400 Calories" });
    } else if (
      (gender === "female" ||
        gender === "Female" ||
        gender === "f" ||
        gender === "F") &&
      age >= 31 &&
      age <= 59
    ) {
      this.setState({ calResult: "1800-2200 Calories" });
    } else if (
      (gender === "female" ||
        gender === "Female" ||
        gender === "f" ||
        gender === "F") &&
      age >= 60
    ) {
      this.setState({ calResult: "1600-2000 Calories" });
    } else {
      this.setState({ calResult: "Invalid Inputs" });
    }
  };

  render() {
    return (
      <SafeAreaView style={styles.safe}>
        <View>
          <Text
            style={{
              padding: 20,
              fontSize: 30,
              fontWeight: "bold",
              fontFamily: "sans-serif",
            }}
          >
            Calories Calculator
          </Text>
        </View>
        <View>
          <Text
            style={{
              padding: 20,
              fontSize: 20,
              fontWeight: "bold",
              fontFamily: "sans-serif",
            }}
          >
            Age
          </Text>
          <TextInput
            style={styles.input}
            onChangeText={this.handleAge}
            // value={text}
            placeholder="Your age here"
            keyboardType="numeric"
          />
          {/* <TextInput
            style={styles.input}
            onChangeText={this.handleWeight}
            value={text}
            placeholder="Your weight here"
            keyboardType="numeric"
          /> */}
        </View>
        <Text
          style={{
            padding: 20,
            fontSize: 20,
            fontWeight: "bold",
            fontFamily: "sans-serif",
          }}
        >
          Gender
        </Text>
        {/* <View>
          <RadioButton.Group onValueChange={this.handleGender}>
            <RadioButton.Item label="Male" value="male" />
            <RadioButton.Item label="Female" value="female" />
          </RadioButton.Group>
        </View> */}
        <TextInput
          style={styles.input}
          onChangeText={this.handleGender}
          // value={text}
          placeholder="Your gender here i.e(male or female)"
        />

        {/* Submit Button */}

        <TouchableOpacity
          style={styles.commandButton}
          onPress={() => this.calculate(this.state.age, this.state.gender)}
        >
          <Text style={styles.panelButtonTitle}>Submit</Text>
        </TouchableOpacity>
        {/* <Text style={styles.output}>{this.state.cal}</Text> */}

        <Text
          style={{
            padding: 20,
            fontSize: 20,
            fontWeight: "bold",
            fontFamily: "sans-serif",
          }}
        >
          Calories to intake per day:
        </Text>
        <Text style={styles.resultText}>{this.state.calResult}</Text>
      </SafeAreaView>
    );
  }
}

export default CalculatorScreen;

const styles = StyleSheet.create({
  input: {
    // paddingTop:
    height: 50,
    margin: 12,
    borderWidth: 3,
    padding: 10,
    borderColor: "#178af2",
  },
  safe: {
    paddingTop: 50,
    padding: 20,
  },
  panelButtonTitle: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  commandButton: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: "#009387",
    alignItems: "center",
    marginTop: 10,
  },
  output: {
    textAlign: "center",
    fontSize: 30,
  },
  resultText: {
    paddingTop: 20,
    paddingBottom: 10,
    textAlign: "center",
    fontSize: 30,
    color: "blue",
    fontWeight: "bold",
  },
});
