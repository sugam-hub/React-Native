import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from "react-native";
import { AuthContext } from "../../components/context";

// const BMIScreen = ({ navigation }) => {
class Inputs extends Component {
  state = {
    height: "",
    weight: "",
    bmi: "",
    BmiResult: "",
  };

  handleHeight = (text) => {
    this.setState({ height: text });
  };
  handleWeight = (text) => {
    this.setState({ weight: text });
  };
  calculate = (height, weight) => {
    //calculation
    var result =
      (parseFloat(weight) * 10000) / (parseFloat(height) * parseFloat(height));
    result = result.toFixed(2);
    //display result
    this.setState({ bmi: result });
    if (result < 18.5) {
      this.setState({ BmiResult: "Underweight" });
    } else if (result >= 18.5 && result < 25) {
      this.setState({ BmiResult: "Normal weight" });
    } else if (result >= 25 && result < 30) {
      this.setState({ BmiResult: "Overweight" });
    } else if (result >= 30) {
      this.setState({ BmiResult: "Obese" });
    } else {
      alert("Incorrect Input!");
      this.setState({ BmiResult: "" });
    }
    return result;
  };

  render() {
    let { bmi } = this.context;
    const setBmi = (data) => {
      bmi(data);
    };
    return (
      <View style={styles.container}>
        <View>
          <Text
            style={{
              padding: 20,
              fontSize: 30,
              fontWeight: "bold",
              // fontFamily: "sans-serif",
            }}
          >
            BMI Calculator
          </Text>

          <View>
            <Text
              style={{
                padding: 20,
                fontSize: 20,
                fontWeight: "bold",
                // fontFamily: "sans-serif",
              }}
            >
              Height
            </Text>
            <TextInput
              style={styles.input}
              underlineColorAndroid="transparent"
              placeholder="Height (Cm)"
              autoCapitalize="none"
              onChangeText={this.handleHeight}
            />
          </View>
        </View>
        <Text
          style={{
            padding: 20,
            fontSize: 20,
            fontWeight: "bold",
            // fontFamily: "sans-serif",
          }}
        >
          Weight
        </Text>
        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="Weight (Kg)"
          autoCapitalize="none"
          onChangeText={this.handleWeight}
        />

        <TouchableOpacity
          style={styles.submitButton}
          onPress={() => {
            setBmi(this.calculate(this.state.height, this.state.weight));
          }}
        >
          <Text style={styles.submitButtonText}> Calculate </Text>
        </TouchableOpacity>
        <Text
          style={{
            padding: 20,
            fontSize: 20,
            fontWeight: "bold",
            // fontFamily: "sans-serif",
          }}
        >
          Your body mass index(BMI):
        </Text>
        <Text style={styles.output}>{this.state.bmi}</Text>
        <Text style={styles.resultText}>{this.state.BmiResult}</Text>
      </View>
    );
  }
}

Inputs.contextType = AuthContext;
export default Inputs;

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    padding: 20,
  },
  input: {
    height: 50,
    margin: 12,
    borderWidth: 3,
    padding: 10,
    borderColor: "#178af2",
  },
  submitButton: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: "#009387",
    alignItems: "center",
    marginTop: 10,
  },
  submitButtonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  output: {
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
  },
  title: {
    padding: 20,
    fontSize: 30,
    fontWeight: "bold",
    // fontFamily: "sans-serif",
    textAlign: "center",
  },
  resultText: {
    paddingTop: 20,
    paddingBottom: 10,
    textAlign: "center",
    fontSize: 30,
    color: "blue",
    fontWeight: "bold",
  },
  label: {
    marginLeft: 15,
  },
});
